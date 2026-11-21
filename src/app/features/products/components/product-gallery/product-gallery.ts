import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { UI } from '../../../../core/data/ui.data';

/** صورة كبيرة + شريط صور مصغرة. الضغط على الكبيرة بيفتح اللايت بوكس. */
@Component({
  selector: 'app-product-gallery',
  imports: [FontAwesomeModule],
  styleUrl: './product-gallery.css',
  templateUrl: './product-gallery.html',
})
export class ProductGallery {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faExpand = faExpand;

  readonly images = input.required<string[]>();
  readonly alt = input.required<string>();
  readonly opened = output<number>();

  protected readonly active = signal(0);
  protected readonly current = computed(
    () => this.images()[Math.min(this.active(), this.images().length - 1)],
  );

  select(i: number): void {
    this.active.set(i);
  }
}
