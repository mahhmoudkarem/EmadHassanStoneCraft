import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // لما تنتقل بين الصفحات يرجع لأول الصفحة بدل ما يفضل في نفس مكان السكرول
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    // withEventReplay: أي ضغطة من الزائر قبل ما الصفحة تكمل تحميل بتتنفذ بدل ما تضيع
    provideClientHydration(withEventReplay()),
  ],
};
