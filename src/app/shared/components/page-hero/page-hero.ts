import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/LanguageService/language-service';
import { UI } from '../../../core/data/ui.data';
import { Reveal } from '../../directives/reveal';
import { Parallax } from '../../directives/parallax';

export interface Crumb {
  label: string;
  link?: string | string[];
}

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink, Reveal, Parallax],
  styleUrl: './page-hero.css',
  templateUrl: './page-hero.html',
})
export class PageHero {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;

  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly intro = input('');
  readonly crumbs = input<Crumb[]>([]);
  readonly image = input('');
  readonly imageAlt = input('');
}
