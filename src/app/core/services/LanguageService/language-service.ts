import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { SITE_CONFIG } from '../../config/site-config';

export type Lang = 'en' | 'ar';

export interface LocalizedText {
  en: string;
  ar: string;
}

/** بيانات الـ SEO اللي بتتحط على الراوت: data: { seo: { title, description } } */
export interface RouteSeo {
  title: LocalizedText;
  description: LocalizedText;
  /** صورة المشاركة (مسار نسبي من public). الافتراضي og-image.jpg */
  image?: string;
  /** صفحات زي 404 مش عايزين جوجل يفهرسها */
  noindex?: boolean;
  /** مسار الـ breadcrumb للـ Structured Data (من غير الرئيسية) */
  breadcrumb?: { name: LocalizedText; path: string }[];
}

const OG_IMAGE = '/images/logo/og-image.jpg';

const STORAGE_KEY = 'emadhassan-lang';

export const DEFAULT_SEO: RouteSeo = {
  title: {
    en: 'Emad Hassan Stone Craft | Marble & Natural Stone Columns, Balusters & Cornices in Egypt',
    ar: 'عماد حسن ستون كرافت | أعمدة وبرامق وكرانيش رخام وحجر طبيعي في مصر',
  },
  description: {
    en: 'Emad Hassan Stone Craft: over 25 years manufacturing, shaping and cutting marble and natural stone in Egypt. Columns, capitals, balusters, cornices, fountains, lanterns and custom architectural stone for villas and facades.',
    ar: 'عماد حسن ستون كرافت: خبرة تتجاوز 25 عامًا في تصنيع وتشكيل وخرط الرخام والحجر الطبيعي في مصر. أعمدة وتيجان وبرامق وكرانيش ونوافير وفوانيس وتصميمات حجر معماري حسب الطلب للفلل والواجهات.',
  },
};

/**
 * مصدر واحد للغة في كل الموقع.
 * أي كومبوننت يقرأ `lang.isArabic()` وهيتحدث تلقائيًا لما أيقونة اللغة في الناف بار تتضغط.
 * الاتجاه (rtl/ltr) واللغة على <html> والعنوان والوصف بيتحدثوا هنا بدون reload.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  /** العربي هو الافتراضي (السوق الأساسي مصر) */
  private readonly _lang = signal<Lang>('ar');

  readonly lang = this._lang.asReadonly();
  readonly isArabic = computed(() => this._lang() === 'ar');
  readonly dir = computed(() => (this._lang() === 'ar' ? 'rtl' : 'ltr'));

  /** صفحات ديناميكية (تفاصيل منتج) بتحط عنوان/وصف خاص بيها هنا */
  private readonly override = signal<RouteSeo | null>(null);

  private readonly routeState = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      startWith(null),
      map(() => ({
        seo: this.readSeo(this.router.routerState.snapshot.root),
        url: this.router.url,
      })),
    ),
    { initialValue: { seo: DEFAULT_SEO, url: '/' } },
  );

  constructor() {
    effect(() => {
      const lang = this._lang();
      const { seo: routeSeo, url } = this.routeState();
      const seo = this.override() ?? routeSeo;
      const root = this.document.documentElement;
      root.lang = lang;
      root.dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.applySeo(seo, lang, url);
    });

    // استرجاع اللغة المحفوظة بعد الـ hydration عشان ما يحصلش mismatch مع السيرفر
    afterNextRender(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'ar' || saved === 'en') this._lang.set(saved);
      } catch {
        /* التخزين غير متاح - مش مشكلة */
      }
    });
  }

  /** بيحدد SEO لصفحة ديناميكية. مرّر null لما تقفل الصفحة. */
  setPageSeo(seo: RouteSeo | null): void {
    this.override.set(seo ? { ...DEFAULT_SEO, ...seo } : null);
  }

  /** عنوان + وصف + canonical + Open Graph + Twitter + JSON-LD */
  private applySeo(seo: RouteSeo, lang: Lang, url: string): void {
    const path = (url.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/';
    const canonical = SITE_CONFIG.siteUrl + (path === '/' ? '/' : path);
    const image = SITE_CONFIG.siteUrl + (seo.image ?? OG_IMAGE);
    const title = seo.title[lang];
    const description = seo.description[lang];

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'robots',
      content: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'ar' ? 'ar_EG' : 'en_US' });
    this.meta.updateTag({
      property: 'og:locale:alternate',
      content: lang === 'ar' ? 'en_US' : 'ar_EG',
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setLink('canonical', canonical);
    this.setJsonLd('ld-org', this.organizationLd());
    this.setJsonLd('ld-page', this.breadcrumbLd(seo, lang, canonical));
  }

  private setLink(rel: string, href: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setJsonLd(id: string, data: object | null): void {
    const head = this.document.head;
    let script = head.querySelector<HTMLScriptElement>(`script#${id}`);
    if (!data) {
      script?.remove();
      return;
    }
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  /** بيانات الشركة لجوجل (Knowledge Panel / Local) */
  private organizationLd(): object {
    const site = SITE_CONFIG.siteUrl;
    return {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${site}/#business`,
      name: 'Emad Hassan Stone Craft',
      alternateName: ['عماد حسن ستون كرافت', 'Stone Craft', 'ستون كرافت'],
      description: DEFAULT_SEO.description.en,
      url: `${site}/`,
      logo: `${site}/images/logo/logo-mark.png`,
      image: `${site}${OG_IMAGE}`,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      contactPoint: SITE_CONFIG.phones.map((p) => ({
        '@type': 'ContactPoint',
        telephone: p.tel,
        contactType: 'sales',
        areaServed: 'EG',
        availableLanguage: ['Arabic', 'English'],
      })),
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.locality,
        addressCountry: SITE_CONFIG.address.country,
      },
      hasMap: SITE_CONFIG.mapsUrl,
      areaServed: 'EG',
      knowsAbout: [
        'Marble',
        'Natural stone',
        'Stone columns',
        'Column capitals',
        'Balusters',
        'Cornices',
        'Stone fountains',
      ],
      sameAs: SITE_CONFIG.social.map((s) => s.url),
    };
  }

  private breadcrumbLd(seo: RouteSeo, lang: Lang, canonical: string): object | null {
    if (!seo.breadcrumb?.length) return null;
    const home = { name: lang === 'ar' ? 'الرئيسية' : 'Home', path: '/' };
    const items = [home, ...seo.breadcrumb.map((b) => ({ name: b.name[lang], path: b.path }))];
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: i === items.length - 1 ? canonical : SITE_CONFIG.siteUrl + item.path,
      })),
    };
  }

  private readSeo(snapshot: ActivatedRouteSnapshot): RouteSeo {
    let node: ActivatedRouteSnapshot | null = snapshot;
    let found: Partial<RouteSeo> | undefined;
    while (node) {
      if (node.data?.['seo']) found = node.data['seo'];
      node = node.firstChild;
    }
    return { ...DEFAULT_SEO, ...found };
  }

  /** اختصار للترجمة داخل التمبلت: lang.t('Hello', 'مرحبا') */
  t(en: string, ar: string): string {
    return this._lang() === 'ar' ? ar : en;
  }

  /** نفس الفكرة لكائن {en, ar} (الأساسي في الموقع) */
  l(text: LocalizedText): string {
    return text[this._lang()];
  }

  set(lang: Lang): void {
    this._lang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* ignore */
      }
    }
  }

  toggle(): void {
    this.set(this._lang() === 'ar' ? 'en' : 'ar');
  }
}
