import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { WhatsappService } from '../../../../core/services/WhatsappService/whatsapp-service';
import { UI } from '../../../../core/data/ui.data';
import { Parallax } from '../../../../shared/directives/parallax';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, FontAwesomeModule, Parallax],
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly lang = inject(LanguageService);
  private readonly whatsapp = inject(WhatsappService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faWhatsapp = faWhatsapp;

  openWhatsapp(): void {
    this.whatsapp.inquireGeneral();
  }

  /** تحريك الكروت العائمة مع الماوس (خفيف) */
  @HostListener('mousemove', ['$event'])
  protected onMove(e: MouseEvent): void {
    const el = this.host.nativeElement;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    el.style.setProperty('--mx', x.toFixed(3));
    el.style.setProperty('--my', y.toFixed(3));
  }
}
