import { LocalizedText } from '../services/LanguageService/language-service';

export type ProductSlug =
  | 'columns'
  | 'capitals'
  | 'bases'
  | 'square-balusters'
  | 'round-balusters'
  | 'lanterns'
  | 'fountains'
  | 'cornices'
  | 'column-slices';

export interface Product {
  id: number;
  slug: ProductSlug;
  name: LocalizedText;
  /** سطر قصير يظهر على الكارت */
  tagline: LocalizedText;
  description: LocalizedText;
  /** استخدامات معمارية */
  applications: LocalizedText[];
  /** صورة الغلاف */
  cover: string;
  images: string[];
  /** وصف الصور (alt) */
  alt: LocalizedText;
}
