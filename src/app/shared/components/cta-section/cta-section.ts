import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../../../core/services/LanguageService/language-service';
import { WhatsappService } from '../../../core/services/WhatsappService/whatsapp-service';
import { UI } from '../../../core/data/ui.data';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink, FontAwesomeModule, Reveal],
  styleUrl: './cta-section.css',
  templateUrl: './cta-section.html',
})
export class CtaSection {
  protected readonly lang = inject(LanguageService);
  private readonly whatsapp = inject(WhatsappService);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faWhatsapp = faWhatsapp;

  openWhatsapp(): void {
    this.whatsapp.inquireGeneral();
  }
}
