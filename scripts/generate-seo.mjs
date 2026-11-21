/**
 * بيولّد public/sitemap.xml و public/robots.txt تلقائيًا قبل كل build.
 * - الدومين بيتقري من src/app/core/config/site-config.ts (siteUrl)
 * - صفحات المنتجات بتتقري من src/app/core/data/products.data.ts (slug)
 * يعني لو زودت منتج أو غيرت الدومين، الـ sitemap بيتحدث لوحده.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

const siteUrl = (
  process.env.SITE_URL ||
  read('src/app/core/config/site-config.ts').match(/siteUrl:\s*'([^']+)'/)?.[1] ||
  ''
).replace(/\/+$/, '');
if (!siteUrl) throw new Error('siteUrl not found in site-config.ts');

const slugs = [...read('src/app/core/data/products.data.ts').matchAll(/slug:\s*'([^']+)'/g)].map(
  (m) => m[1],
);

const today = new Date().toISOString().slice(0, 10);
const pages = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/products', priority: '0.9', freq: 'weekly' },
  ...slugs.map((s) => ({ path: `/products/${s}`, priority: '0.8', freq: 'monthly' })),
  { path: '/projects', priority: '0.8', freq: 'weekly' },
  { path: '/services', priority: '0.7', freq: 'monthly' },
  { path: '/factory', priority: '0.6', freq: 'monthly' },
  { path: '/about', priority: '0.6', freq: 'monthly' },
  { path: '/contact', priority: '0.7', freq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
writeFileSync(join(root, 'public/robots.txt'), robots);
console.log(`✔ sitemap.xml (${pages.length} URLs) + robots.txt generated for ${siteUrl}`);
