import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { UI } from '../../../../core/data/ui.data';
import { WHY_US } from '../../../../core/data/services.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import {
  ImageLightbox,
  LightboxItem,
} from '../../../../shared/components/image-lightbox/image-lightbox';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-factory',
  imports: [PageHero, CtaSection, ImageLightbox, Reveal],
  styleUrl: './factory.css',
  templateUrl: './factory.html',
})
export class Factory {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly why = WHY_US;
  protected readonly photos = [1, 2, 3, 4, 5, 6].map((n) => `/images/factory/${n}.jpg`);
  protected readonly start = signal<number | null>(null);

  protected readonly items = computed<LightboxItem[]>(() =>
    this.photos.map((src, i) => ({ src, alt: this.lang.l(UI.factory.alts[i]) })),
  );
}
