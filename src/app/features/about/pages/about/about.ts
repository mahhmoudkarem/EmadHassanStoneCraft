import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { WHY_US } from '../../../../core/data/services.data';
import { UI } from '../../../../core/data/ui.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-about',
  imports: [RouterLink, FontAwesomeModule, PageHero, CtaSection, Reveal],
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly why = WHY_US;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faCheck = faCheck;
}
