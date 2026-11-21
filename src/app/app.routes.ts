import { Routes } from '@angular/router';
import { RouteSeo } from './core/services/LanguageService/language-service';

/** بيانات SEO للراوت + breadcrumb تلقائي للـ Structured Data */
const seo = (
  path: string,
  titleEn: string,
  titleAr: string,
  descEn: string,
  descAr: string,
): { seo: RouteSeo } => ({
  seo: {
    title: { en: `${titleEn} | Emad Hassan Stone Craft`, ar: `${titleAr} | عماد حسن ستون كرافت` },
    description: { en: descEn, ar: descAr },
    breadcrumb: [{ name: { en: titleEn, ar: titleAr }, path }],
  },
});

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/pages/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        data: seo(
          '/about',
          'About Us',
          'من نحن',
          'Emad Hassan manufactures, shapes and cuts marble and natural stone, with more than 25 years of experience.',
          'شركة عماد حسن متخصصة في تصنيع وتشكيل وخرط الرخام والحجر الطبيعي بخبرة تتجاوز 25 عامًا.',
        ),
        loadComponent: () => import('./features/about/pages/about/about').then((m) => m.About),
      },
      {
        path: 'products',
        data: seo(
          '/products',
          'Products',
          'المنتجات',
          'Marble and natural stone columns, capitals, bases, square and round balusters, lanterns, fountains, cornices and column slices, made to order in Egypt.',
          'أعمدة رخام وحجر طبيعي، تيجان وقواعد، برامق مربعة ومدورة، فوانيس ونوافير وكرانيش وشرائح أعمدة، تصنيع حسب الطلب في مصر.',
        ),
        loadComponent: () =>
          import('./features/products/pages/products/products').then((m) => m.Products),
      },
      // لازم بعد صفحة القائمة
      {
        path: 'products/:slug',
        loadComponent: () =>
          import('./features/products/pages/product-details/product-details').then(
            (m) => m.ProductDetails,
          ),
      },
      {
        path: 'projects',
        data: seo(
          '/projects',
          'Projects',
          'الأعمال',
          'Executed works featuring Emad Hassan columns, balustrades, cornices and carved stone.',
          'أعمال منفّذة تظهر فيها أعمدة ودرابزينات وكرانيش وحجر منحوت من عماد حسن.',
        ),
        loadComponent: () =>
          import('./features/projects/pages/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'factory',
        data: seo(
          '/factory',
          'The Factory',
          'المصنع',
          'Profile and cutting machines that shape marble and natural stone to any size and design.',
          'ماكينات بروفايل وخرط تشكّل الرخام والحجر الطبيعي بأي مقاس وتصميم.',
        ),
        loadComponent: () =>
          import('./features/factory/pages/factory/factory').then((m) => m.Factory),
      },
      {
        path: 'services',
        data: seo(
          '/services',
          'Services',
          'الخدمات',
          'Cutting, shaping and manufacturing of columns, balusters, cornices, fountains and custom stone designs.',
          'خرط وتشكيل وتصنيع الأعمدة والبرامق والكرانيش والنوافير وتصميمات الحجر الخاصة.',
        ),
        loadComponent: () =>
          import('./features/services/pages/services/services').then((m) => m.Services),
      },
      {
        path: 'contact',
        data: seo(
          '/contact',
          'Contact Us',
          'تواصل معنا',
          'Call, WhatsApp or request a quotation from Emad Hassan Stone Craft.',
          'اتصل أو راسلنا على واتساب أو اطلب عرض سعر من عماد حسن ستون كرافت.',
        ),
        loadComponent: () =>
          import('./features/contact/pages/contact/contact').then((m) => m.Contact),
      },
      {
        // أي لينك غلط => صفحة 404 حقيقية (بدل التحويل للرئيسية اللي بيعمل soft-404 عند جوجل)
        path: '**',
        data: {
          seo: {
            title: {
              en: 'Page not found | Emad Hassan Stone Craft',
              ar: 'الصفحة غير موجودة | عماد حسن ستون كرافت',
            },
            description: {
              en: 'The page you are looking for does not exist.',
              ar: 'الصفحة التي تبحث عنها غير موجودة.',
            },
            noindex: true,
          } satisfies RouteSeo,
        },
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
