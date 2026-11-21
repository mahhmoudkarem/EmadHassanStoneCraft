import { Injectable, inject } from '@angular/core';
import { SITE_CONFIG } from '../../config/site-config';
import { LanguageService } from '../LanguageService/language-service';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly language = inject(LanguageService);
  private readonly phoneNumber = SITE_CONFIG.whatsappNumber;

  sendMessage(message: string): void {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  inquireAboutProduct(productName: string): void {
    this.sendMessage(
      this.language.t(
        `Hello Emad Hassan Stone Craft, I am interested in: ${productName}. Please send me more details.`,
        `مرحبًا عماد حسن ستون كرافت، أنا مهتم بـ: ${productName}. من فضلكم أرسلوا لي مزيدًا من التفاصيل.`,
      ),
    );
  }

  inquireGeneral(): void {
    this.sendMessage(
      this.language.t(
        'Hello, I would like to inquire about your stone products.',
        'مرحبًا، أريد الاستفسار عن منتجاتكم الحجرية.',
      ),
    );
  }
}
