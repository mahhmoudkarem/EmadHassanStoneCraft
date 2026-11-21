import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { SERVICES } from '../../../../core/data/services.data';
import { UI } from '../../../../core/data/ui.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-services',
  imports: [PageHero, CtaSection, Reveal],
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly services = SERVICES;
}
