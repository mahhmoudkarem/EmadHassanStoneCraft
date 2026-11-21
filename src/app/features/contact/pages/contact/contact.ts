import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { WhatsappService } from '../../../../core/services/WhatsappService/whatsapp-service';
import { SITE_CONFIG } from '../../../../core/config/site-config';
import { PRODUCTS } from '../../../../core/data/products.data';
import { UI } from '../../../../core/data/ui.data';
import { PageHero } from '../../../../shared/components/page-hero/page-hero';
import { Reveal } from '../../../../shared/directives/reveal';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, FontAwesomeModule, PageHero, Reveal, SocialLinks],
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly lang = inject(LanguageService);
  private readonly whatsapp = inject(WhatsappService);
  protected readonly ui = UI;
  protected readonly site = SITE_CONFIG;
  protected readonly products = PRODUCTS;
  protected readonly faLocationDot = faLocationDot;
  protected readonly faPhone = faPhone;
  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faEnvelope = faEnvelope;

  protected name = '';
  protected phone = '';
  protected interest = '';
  protected message = '';

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  protected get nameInvalid(): boolean {
    return this.name.trim().length < 2;
  }
  protected get phoneInvalid(): boolean {
    return !/^[+\d][\d\s\-()]{6,}$/.test(this.phone.trim());
  }
  protected get messageInvalid(): boolean {
    return this.message.trim().length < 5;
  }

  submit(): void {
    this.submitted.set(true);
    if (this.nameInvalid || this.phoneInvalid || this.messageInvalid) return;

    const l = (t: { en: string; ar: string }) => this.lang.l(t);
    const interest = this.interest || l(UI.contact.other);
    const text = [
      l(UI.contact.msgGreeting),
      `${l(UI.contact.msgName)}: ${this.name.trim()}`,
      `${l(UI.contact.msgPhone)}: ${this.phone.trim()}`,
      `${l(UI.contact.msgInterest)}: ${interest}`,
      `${l(UI.contact.msgDetails)}: ${this.message.trim()}`,
    ].join('\n');

    this.whatsapp.sendMessage(text);
    this.sent.set(true);
  }
}
