import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { PRODUCTS } from '../../../../core/data/products.data';
import { UI } from '../../../../core/data/ui.data';
import { Reveal } from '../../../../shared/directives/reveal';

/**
 * فهرس المنتجات (Index): أسماء ضخمة، وعند المرور بالماوس تظهر صورة المنتج
 * داخل عقد معماري تتبع المؤشر. على الموبايل بتظهر صورة صغيرة بجانب كل اسم.
 */
@Component({
  selector: 'app-featured-products',
  imports: [RouterLink, FontAwesomeModule, Reveal],
  styleUrl: './featured-products.css',
  templateUrl: './featured-products.html',
})
export class FeaturedProducts {
  protected readonly lang = inject(LanguageService);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly ui = UI;
  protected readonly products = PRODUCTS;
  protected readonly faArrowRight = faArrowRight;

  protected readonly active = signal<number | null>(null);
  protected readonly x = signal(0);
  protected readonly y = signal(0);

  protected num(i: number): string {
    return String(i + 1).padStart(2, '0');
  }

  @HostListener('mousemove', ['$event'])
  protected onMove(e: MouseEvent): void {
    this.x.set(e.clientX);
    this.y.set(e.clientY);
  }
}
