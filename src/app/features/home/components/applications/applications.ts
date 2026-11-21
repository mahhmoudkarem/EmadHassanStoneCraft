import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { PROJECTS } from '../../../../core/data/projects.data';
import { UI } from '../../../../core/data/ui.data';
import { Reveal } from '../../../../shared/directives/reveal';

/** صور الأعمال المنفّذة في الهوم: واحدة كبيرة + ثلاث أصغر */
@Component({
  selector: 'app-applications',
  imports: [RouterLink, FontAwesomeModule, Reveal],
  styleUrl: './applications.css',
  templateUrl: './applications.html',
})
export class Applications {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
  protected readonly rows = [PROJECTS, [...PROJECTS].reverse()];
}
