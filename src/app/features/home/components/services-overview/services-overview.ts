import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../../../core/services/LanguageService/language-service';
import { SERVICES } from '../../../../core/data/services.data';
import { UI } from '../../../../core/data/ui.data';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-services-overview',
  imports: [RouterLink, FontAwesomeModule, Reveal],
  styleUrl: './services-overview.css',
  templateUrl: './services-overview.html',
})
export class ServicesOverview {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;
  protected readonly services = SERVICES;
}
