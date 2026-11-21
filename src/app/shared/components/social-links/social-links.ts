import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faFacebookF,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { SITE_CONFIG, SocialId } from '../../../core/config/site-config';

const ICONS: Record<SocialId, IconDefinition> = {
  facebook: faFacebookF,
  instagram: faInstagram,
  tiktok: faTiktok,
};

/**
 * أيقونات السوشيال ميديا (من SITE_CONFIG.social).
 * <app-social-links tone="light" />  على الخلفيات الغامقة (الفوتر)
 * <app-social-links tone="dark" [labels]="true" />  على الخلفيات الفاتحة مع اسم الحساب
 */
@Component({
  selector: 'app-social-links',
  imports: [FontAwesomeModule],
  styleUrl: './social-links.css',
  templateUrl: './social-links.html',
  host: { '[class]': "'tone-' + tone()" },
})
export class SocialLinks {
  readonly tone = input<'light' | 'dark'>('dark');
  readonly labels = input(false);

  protected readonly items = SITE_CONFIG.social.map((s) => ({
    id: s.id,
    label: s.label,
    url: s.url,
    handle: 'handle' in s ? s.handle : '',
    icon: ICONS[s.id],
  }));
}
