# Emad Hassan Stone Craft – دليل التشغيل والرفع

## ⚠️ قبل أي حاجة: الدومين

افتح `src/app/core/config/site-config.ts` وغيّر:

```ts
siteUrl: 'https://emadhassanstonecraft.com',
```

للدومين الحقيقي (بدون `/` في الآخر). ده بيتحدث منه تلقائيًا:
`canonical` – `og:url` / `og:image` – `sitemap.xml` – `robots.txt` – الـ JSON-LD – و`allowedHosts` في السيرفر.

بعد التعديل لازم `npm run build` تاني.

---

## التشغيل محليًا

```bash
npm ci            # أول مرة بس
npm start         # http://localhost:4200  (وضع التطوير)
```

## الـ Build للـ Production

```bash
npm run build
```

الأمر ده بيعمل 3 حاجات:
1. `prebuild` → يولّد `public/sitemap.xml` و `public/robots.txt` من الدومين والمنتجات.
2. `ng build` → يعمل prerender لـ 16 صفحة (كل الصفحات + صفحات المنتجات التسعة).
3. `postbuild` → يعمل `404.html` للاستضافات الـ static.

الناتج في `dist/EmadHassan/`:
- `browser/` → موقع static كامل (HTML جاهز لكل صفحة) – ينفع يترفع على أي استضافة.
- `server/` → سيرفر Node (SSR) لو هترفعه على VPS.

> الـ zip فيه `dist` جاهز متبني بالفعل، تقدر ترفعه على طول من غير build (بس لو غيرت الدومين لازم build).

---

## الاختيار 1: Vercel (الأسهل)

1. ارفع المشروع على GitHub.
2. من Vercel → **Add New Project** → اختار الريبو.
3. الإعدادات بتتقري تلقائيًا من `vercel.json` (Build: `npm run build` – Output: `dist/EmadHassan/browser`).
4. **Deploy**.
5. Settings → Domains → ضيف الدومين، وفي Hostinger DNS:
   - `A` record ل `@` → `76.76.21.21`
   - `CNAME` ل `www` → `cname.vercel-dns.com`

## الاختيار 2: Hostinger استضافة عادية (Shared / public_html)

1. `npm run build` (أو استخدم الـ dist الجاهز).
2. ارفع **محتوى** فولدر `dist/EmadHassan/browser` (مش الفولدر نفسه) جوه `public_html`.
3. اتأكد إن ملف `.htaccess` اترفع (ملف مخفي – فعّل Show hidden files في File Manager).
4. فعّل SSL من hPanel.

## الاختيار 3: VPS (Ubuntu + Nginx + PM2) – SSR كامل

```bash
# على السيرفر
cd /var/www/emadhassan          # ارفع المشروع هنا
npm ci
npm run build
npm i -g pm2
pm2 start deploy/ecosystem.config.cjs
pm2 save && pm2 startup

# Nginx
sudo cp deploy/nginx.conf /etc/nginx/sites-available/emadhassan
# عدّل الدومين جوه الملف
sudo ln -s /etc/nginx/sites-available/emadhassan /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

لتجربة السيرفر محليًا: `npm run build && npm run start:prod` → http://localhost:4000

> لو فتحت الموقع بـ IP أو دومين مختلف عن `siteUrl` وظهر `400 Bad Request`،
> ضيفه في `NG_ALLOWED_HOSTS` (في `deploy/ecosystem.config.cjs`).

---

## بعد الرفع (SEO)

1. **Google Search Console** → أضف الدومين → Sitemaps → اكتب `sitemap.xml` → Submit.
2. **Google Business Profile** باسم الشركة والعنوان والأرقام (بيفرق جدًا في البحث المحلي).
3. اختبر:
   - https://search.google.com/test/rich-results (الـ Structured Data)
   - https://pagespeed.web.dev
   - https://developers.facebook.com/tools/debug (شكل المشاركة على فيسبوك/واتساب)
4. حط لينك الموقع في البايو بتاع إنستجرام وتيك توك وصفحة فيسبوك.

## تعديل البيانات

| عايز تغير | الملف |
|---|---|
| الأرقام / الإيميل / السوشيال / الدومين | `src/app/core/config/site-config.ts` |
| نصوص الموقع (عربي/إنجليزي) | `src/app/core/data/ui.data.ts` |
| المنتجات وصورها | `src/app/core/data/products.data.ts` + `public/images/products/<slug>/` |
| الأعمال | `src/app/core/data/projects.data.ts` |
| عنوان ووصف كل صفحة لجوجل | `src/app/app.routes.ts` |
