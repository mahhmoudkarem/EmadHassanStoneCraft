import { LocalizedText } from '../services/LanguageService/language-service';

export interface Service {
  id: number;
  title: LocalizedText;
  text: LocalizedText;
}
