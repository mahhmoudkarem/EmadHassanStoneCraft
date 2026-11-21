import { Component, HostListener, computed, inject, input, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../core/services/LanguageService/language-service';
import { UI } from '../../../core/data/ui.data';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

/** عارض صور بملء الشاشة: <app-image-lightbox [items]="..." [start]="2" (closed)="..."> */
@Component({
  selector: 'app-image-lightbox',
  imports: [FontAwesomeModule],
  styleUrl: './image-lightbox.css',
  templateUrl: './image-lightbox.html',
})
export class ImageLightbox {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
  protected readonly faXmark = faXmark;

  readonly items = input.required<LightboxItem[]>();
  readonly start = input(0);
  readonly closed = output<void>();

  private readonly offset = signal<number | null>(null);
  protected readonly index = computed(() => this.offset() ?? this.start());
  protected readonly current = computed(() => this.items()[this.index()]);

  /** الأسهم الفيزيائية: في RTL السهم الأيسر = التالي */
  protected prevIcon = computed(() =>
    this.lang.isArabic() ? this.faChevronRight : this.faChevronLeft,
  );
  protected nextIcon = computed(() =>
    this.lang.isArabic() ? this.faChevronLeft : this.faChevronRight,
  );

  go(step: number): void {
    const n = this.items().length;
    this.offset.set((this.index() + step + n) % n);
  }

  @HostListener('document:keydown', ['$event'])
  protected onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.closed.emit();
    const rtl = this.lang.isArabic();
    if (e.key === 'ArrowRight') this.go(rtl ? -1 : 1);
    if (e.key === 'ArrowLeft') this.go(rtl ? 1 : -1);
  }
}
