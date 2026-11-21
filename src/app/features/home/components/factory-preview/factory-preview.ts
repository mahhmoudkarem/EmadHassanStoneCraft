import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { UI } from '../../../../core/data/ui.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-factory-preview',
  imports: [RouterLink, FontAwesomeModule, Reveal],
  styleUrl: './factory-preview.css',
  templateUrl: './factory-preview.html',
})
export class FactoryPreview {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
}
