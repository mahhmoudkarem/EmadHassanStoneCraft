/**
 * بعد الـ build: بيعمل 404.html من نسخة الـ CSR
 * عشان الاستضافات الـ static (Vercel / Netlify / Hostinger) ترجع صفحة 404 الحقيقية بتاعة الموقع
 * بـ status 404 بدل صفحة الاستضافة الافتراضية.
 */
import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const browser = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist/EmadHassan/browser');
const src = join(browser, 'index.csr.html');
if (existsSync(src)) {
  copyFileSync(src, join(browser, '404.html'));
  console.log('✔ 404.html created');
}
