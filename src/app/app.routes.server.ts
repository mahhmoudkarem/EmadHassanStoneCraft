import { RenderMode, ServerRoute } from '@angular/ssr';
import { PRODUCTS } from './core/data/products.data';

/**
 * كل صفحات الموقع بتتعمل Prerender وقت الـ build (HTML جاهز = أسرع + أفضل SEO).
 * صفحات المنتجات التسعة كمان بتتعمل prerender من PRODUCTS.
 * أي لينك غير معروف بيترندر على السيرفر ويرجع 404 حقيقي.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'products', renderMode: RenderMode.Prerender },
  {
    path: 'products/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PRODUCTS.map((p) => ({ slug: p.slug })),
  },
  { path: 'projects', renderMode: RenderMode.Prerender },
  { path: 'factory', renderMode: RenderMode.Prerender },
  { path: 'services', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server },
];
