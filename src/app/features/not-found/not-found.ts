import { Component, inject, RESPONSE_INIT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../../core/services/LanguageService/language-service';
import { UI } from '../../core/data/ui.data';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, FontAwesomeModule],
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {
  protected readonly lang = inject(LanguageService);
  protected readonly ui = UI;
  protected readonly faArrowRight = faArrowRight;

  constructor() {
    // على السيرفر: نرجّع status 404 الحقيقي بدل 200
    const response = inject(RESPONSE_INIT, { optional: true });
    if (response) response.status = 404;
  }
}
