import { Component, computed, effect, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { WhatsappService } from '../../../../core/services/WhatsappService/whatsapp-service';
import { PRODUCTS, getProduct } from '../../../../core/data/products.data';
import { UI } from '../../../../core/data/ui.data';
import {
  ImageLightbox,
  LightboxItem,
} from '../../../../shared/components/image-lightbox/image-lightbox';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import { Reveal } from '../../../../shared/directives/reveal';
import { ProductGallery } from '../../components/product-gallery/product-gallery';
import { NotFound } from '../../../not-found/not-found';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterLink,
    FontAwesomeModule,
    ProductGallery,
    ImageLightbox,
    CtaSection,
    Reveal,
    NotFound,
  ],
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnDestroy {
  protected readonly lang = inject(LanguageService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly route = inject(ActivatedRoute);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faWhatsapp = faWhatsapp;

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  protected readonly product = computed(() => getProduct(this.slug()));
  protected readonly related = computed(() =>
    PRODUCTS.filter((p) => p.slug !== this.slug()).slice(0, 3),
  );

  protected readonly lightboxStart = signal<number | null>(null);
  protected readonly lightboxItems = computed<LightboxItem[]>(() => {
    const p = this.product();
    if (!p) return [];
    return p.images.map((src, i) => ({
      src,
      alt: `${this.lang.l(p.name)} ${i + 1}`,
      caption: this.lang.l(p.name),
    }));
  });

  constructor() {
    // عنوان ووصف الصفحة + صورة المشاركة + breadcrumb حسب المنتج واللغة
    effect(() => {
      const p = this.product();
      if (!this.slug()) return;
      if (!p) {
        // منتج مش موجود => صفحة 404 (noindex) بدل تحويل صامت
        this.lang.setPageSeo({
          title: {
            en: 'Product not found | Emad Hassan Stone Craft',
            ar: 'المنتج غير موجود | عماد حسن ستون كرافت',
          },
          description: { en: UI.products.notFound.en, ar: UI.products.notFound.ar },
          noindex: true,
        });
        return;
      }
      this.lang.setPageSeo({
        title: {
          en: `${p.name.en} | Emad Hassan Stone Craft`,
          ar: `${p.name.ar} | عماد حسن ستون كرافت`,
        },
        description: p.description,
        image: p.cover,
        breadcrumb: [
          { name: UI.nav.products, path: '/products' },
          { name: p.name, path: `/products/${p.slug}` },
        ],
      });
    });
  }

  ngOnDestroy(): void {
    this.lang.setPageSeo(null);
  }

  inquire(): void {
    const p = this.product();
    if (p) this.whatsapp.inquireAboutProduct(this.lang.l(p.name));
  }
}
