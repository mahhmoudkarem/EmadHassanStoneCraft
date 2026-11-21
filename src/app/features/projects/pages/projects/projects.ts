import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { PROJECTS } from '../../../../core/data/projects.data';
import { UI } from '../../../../core/data/ui.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import {
  ImageLightbox,
  LightboxItem,
} from '../../../../shared/components/image-lightbox/image-lightbox';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-projects',
  imports: [PageHero, CtaSection, ImageLightbox, Reveal],
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly projects = PROJECTS;
  protected readonly start = signal<number | null>(null);

  protected readonly items = computed<LightboxItem[]>(() =>
    PROJECTS.map((p) => ({
      src: p.image,
      alt: `${this.lang.l(p.title)}: ${this.lang.l(p.caption)}`,
      caption: `${this.lang.l(p.title)} - ${this.lang.l(p.caption)}`,
    })),
  );
}
