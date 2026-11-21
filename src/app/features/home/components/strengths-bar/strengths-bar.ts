import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGears, faMedal, faPenRuler, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { UI } from '../../../../core/data/ui.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-strengths-bar',
  imports: [FontAwesomeModule, Reveal],
  styleUrl: './strengths-bar.css',
  templateUrl: './strengths-bar.html',
})
export class StrengthsBar {
  protected readonly lang = inject(LanguageService);
  protected readonly items = UI.strengths.map((s, i) => ({
    ...s,
    icon: [faMedal, faGears, faRulerCombined, faPenRuler][i],
  }));
}
