import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import compression from 'compression';
import { join } from 'node:path';
import { SITE_CONFIG } from './app/core/config/site-config';

const browserDistFolder = join(import.meta.dirname, '../browser');

/**
 * الدومينات المسموح لها تفتح الموقع (حماية SSRF في Angular SSR).
 * من غيرها السيرفر بيرجع 400 Bad Request.
 * تقدر تزود دومينات من غير ما تعدل الكود: NG_ALLOWED_HOSTS="example.com,www.example.com"
 */
const siteHost = new URL(SITE_CONFIG.siteUrl).hostname.replace(/^www\./, '');
const envHosts = process.env['NG_ALLOWED_HOSTS']
  ?.split(',')
  .map((h) => h.trim())
  .filter(Boolean);
const allowedHosts = [
  ...(envHosts ?? []),
  siteHost,
  `www.${siteHost}`,
  'localhost',
  '127.0.0.1',
  '*.vercel.app',
];

const app = express();
app.disable('x-powered-by');

// لو السيرفر ورا Nginx (VPS) عشان IP والبروتوكول يتقروا صح
app.set('trust proxy', 'loopback');

const angularApp = new AngularNodeAppEngine({ allowedHosts });

// ضغط gzip للـ HTML/JS/CSS (بيقلل حجم الصفحة ~70%)
app.use(compression());

/** Security headers خفيفة ومناسبة لموقع تعريفي */
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

/**
 * الملفات الثابتة:
 * - ملفات الـ JS/CSS/الخطوط اسمها فيه hash => كاش سنة كاملة
 * - الصور وملفات SEO (robots/sitemap/manifest) => كاش أقصر عشان لو اتغيرت تتحدث
 */
app.use(
  express.static(browserDistFolder, {
    index: false,
    redirect: false,
    setHeaders: (res, path) => {
      if (/-[A-Za-z0-9_-]{8,}\.(js|css|woff2?)$/.test(path) || path.includes('/media/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (/\.(xml|txt|webmanifest)$/.test(path)) {
        res.setHeader('Cache-Control', 'public, max-age=3600');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=604800');
      }
    },
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
