import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, faGlobe, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../core/services/LanguageService/language-service';
import { SITE_CONFIG } from '../../../core/config/site-config';
import { UI } from '../../../core/data/ui.data';
import { SocialLinks } from '../social-links/social-links';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, SocialLinks],
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly site = SITE_CONFIG;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);

  protected readonly faBars = faBars;
  protected readonly faXmark = faXmark;
  protected readonly faGlobe = faGlobe;
  protected readonly faPhone = faPhone;
  protected readonly faArrowRight = faArrowRight;

  protected readonly links = [
    { path: '/', label: UI.nav.home, exact: true },
    { path: '/about', label: UI.nav.about, exact: false },
    { path: '/products', label: UI.nav.products, exact: false },
    { path: '/projects', label: UI.nav.projects, exact: false },
    { path: '/services', label: UI.nav.services, exact: false },
    { path: '/contact', label: UI.nav.contact, exact: false },
  ];

  toggleLanguage(): void {
    this.lang.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(1, window.scrollY / max) : 0);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
