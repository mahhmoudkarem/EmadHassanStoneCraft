import { Project } from '../models/Project';

const img = (n: number) => `/images/projects/${n}.jpg`;

/**
 * أعمال منفّذة من صور الشركة. غيّر العناوين لأسماء المشاريع الحقيقية متى توفرت.
 * (الوصف هنا لما يظهر في الصورة فقط، بدون أسماء عملاء أو مواقع.)
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    image: '/images/hero/hero.jpg',
    title: { en: 'Villa stair & balustrade', ar: 'سلم ودرابزين فيلا' },
    caption: {
      en: 'Stone stair flanked by balustrades, with a columned entrance above.',
      ar: 'سلم حجري يحيط به درابزين من البرامق ومدخل بأعمدة في الأعلى.',
    },
  },
  {
    id: 2,
    image: img(1),
    title: { en: 'Columned multi-storey façade', ar: 'واجهة متعددة الأدوار بالأعمدة' },
    caption: {
      en: 'Full-height columns, curved balconies and balustrades in golden stone.',
      ar: 'أعمدة بارتفاع الواجهة وبلكونات منحنية ودرابزين بالحجر الذهبي.',
    },
  },
  {
    id: 3,
    image: img(2),
    title: { en: 'Carved arched balconies', ar: 'بلكونات مقوسة منحوتة' },
    caption: {
      en: 'Arches, carved friezes and balustrades across a stone façade.',
      ar: 'عقود وأفاريز منحوتة ودرابزين على واجهة حجرية.',
    },
  },
  {
    id: 4,
    image: img(3),
    title: { en: 'Corner columns & capitals', ar: 'أعمدة وتيجان الأركان' },
    caption: {
      en: 'Paired columns with capitals and cornices supporting the balconies.',
      ar: 'أعمدة مزدوجة بتيجان وكرانيش تحمل البلكونات.',
    },
  },
  {
    id: 5,
    image: img(4),
    title: { en: 'Window surround & cornices', ar: 'حلق شباك وكرانيش' },
    caption: {
      en: 'Pilasters, brackets and a cornice framing tall windows.',
      ar: 'بلاسترات وكوابيل وكورنيش تؤطر الشبابيك الطويلة.',
    },
  },
  {
    id: 6,
    image: img(5),
    title: { en: 'Carved arched entrance', ar: 'مدخل مقوس منحوت' },
    caption: {
      en: 'An arch carried on twisted, carved column slices.',
      ar: 'عقد يرتكز على شرائح أعمدة ملفوفة ومنحوتة.',
    },
  },
  {
    id: 7,
    image: img(6),
    title: { en: 'Decorative arched niche', ar: 'حنية مقوسة زخرفية' },
    caption: {
      en: 'A framed arched niche with twisted columns and a dentil cornice.',
      ar: 'حنية مقوسة بإطار وأعمدة ملفوفة وكورنيش مسنن.',
    },
  },
  {
    id: 8,
    image: img(7),
    title: { en: 'Stone colonnade', ar: 'رواق من الأعمدة الحجرية' },
    caption: {
      en: 'Columns and arches opening onto a garden.',
      ar: 'أعمدة وعقود تفتح على حديقة.',
    },
  },
];
