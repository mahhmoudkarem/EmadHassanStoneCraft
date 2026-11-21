import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { PRODUCTS } from '../../../../core/data/products.data';
import { UI } from '../../../../core/data/ui.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { CtaSection } from '../../../../shared/components/cta-section/cta-section';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-products',
  imports: [RouterLink, FontAwesomeModule, PageHero, CtaSection, Reveal],
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly products = PRODUCTS;
  protected readonly faArrowRight = faArrowRight;

  protected num(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
