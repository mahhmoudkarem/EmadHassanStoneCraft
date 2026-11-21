import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../core/services/LanguageService/language-service';
import { SITE_CONFIG } from '../../../core/config/site-config';
import { PRODUCTS } from '../../../core/data/products.data';
import { UI } from '../../../core/data/ui.data';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FontAwesomeModule, SocialLinks],
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly site = SITE_CONFIG;
  protected readonly products = PRODUCTS;
  protected readonly year = new Date().getFullYear();
  protected readonly faLocationDot = faLocationDot;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;

  protected readonly links = [
    { path: '/', label: UI.nav.home },
    { path: '/about', label: UI.nav.about },
    { path: '/products', label: UI.nav.products },
    { path: '/projects', label: UI.nav.projects },
    { path: '/factory', label: UI.footer.factory },
    { path: '/services', label: UI.nav.services },
    { path: '/contact', label: UI.nav.contact },
  ];
}
