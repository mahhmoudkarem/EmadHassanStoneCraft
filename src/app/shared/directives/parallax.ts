import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, PLATFORM_ID, afterNextRender, inject, input } from '@angular/core';

/**
 * بارالاكس خفيف على السكرول: <img appParallax [speed]="0.12">
 * بيحرك العنصر رأسيًا بنسبة من موضعه في الشاشة. بيتجاهل لو المستخدم مفضّل تقليل الحركة.
 */
@Directive({ selector: '[appParallax]' })
export class Parallax {
  readonly speed = input(0.1);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const node = this.el.nativeElement;
      let ticking = false;
      const update = () => {
        ticking = false;
        const r = node.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const offset = (r.top + r.height / 2 - window.innerHeight / 2) * this.speed();
        node.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();
    });
  }
}
