import { LocalizedText } from '../services/LanguageService/language-service';

/**
 * عمل منفّذ - صور حقيقية من ملفات الشركة.
 * اسم العميل والموقع غير موثقين، فبنكتفي بوصف ما يظهر في الصورة.
 */
export interface Project {
  id: number;
  image: string;
  title: LocalizedText;
  caption: LocalizedText;
}
