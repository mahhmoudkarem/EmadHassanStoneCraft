import { Service } from '../models/Service';

/** الخدمات الثمانية كما وردت في بيانات الشركة (مع شرح مختصر لكل خدمة) */
export const SERVICES: Service[] = [
  {
    id: 1,
    title: { en: 'Cutting marble & natural stone', ar: 'خرط جميع أنواع الرخام والحجر الطبيعي' },
    text: {
      en: 'Cutting machines handle marble and natural stone in different shapes and sizes.',
      ar: 'ماكينات الخرط تنفّذ أعمال الرخام والحجر الطبيعي بمختلف الأشكال والمقاسات.',
    },
  },
  {
    id: 2,
    title: { en: 'Shaping marble & stone', ar: 'تشكيل الرخام والحجر بمختلف الأشكال' },
    text: {
      en: 'Stone is profiled and carved into the forms the design calls for.',
      ar: 'نشكّل الحجر وننحته على الصورة التي يتطلبها التصميم.',
    },
  },
  {
    id: 3,
    title: { en: 'Columns, capitals & bases', ar: 'تصنيع الأعمدة والتيجان والقواعد' },
    text: {
      en: 'Complete column assemblies: shaft, capital and base, made to match.',
      ar: 'منظومة العمود كاملة: البدن والتاج والقاعدة بتصميم متناسق.',
    },
  },
  {
    id: 4,
    title: { en: 'Square & round balusters', ar: 'تصنيع البرامق المربعة والمدورة' },
    text: {
      en: 'Balusters in square and turned-round forms, in different sizes.',
      ar: 'برامق بالشكل المربع والمدور بمقاسات مختلفة.',
    },
  },
  {
    id: 5,
    title: { en: 'Lanterns, sconces & fountains', ar: 'تصنيع الفوانيس والأباليك والنوافير' },
    text: {
      en: 'Decorative stone pieces for gardens, gates and courtyards.',
      ar: 'قطع حجرية ديكورية للحدائق والبوابات والأفنية.',
    },
  },
  {
    id: 6,
    title: {
      en: 'Cornices in all sizes & shapes',
      ar: 'تشكيل وتصنيع الكرانيش بجميع المقاسات والأشكال',
    },
    text: {
      en: 'Profile machines produce cornices in any size and shape.',
      ar: 'ماكينات البروفايل تنتج الكرانيش بأي مقاس وشكل.',
    },
  },
  {
    id: 7,
    title: { en: 'Column slices', ar: 'تصنيع شرائح الأعمدة' },
    text: {
      en: 'Half-shafts for cladding walls, pilasters and door frames.',
      ar: 'أنصاف أعمدة لتكسية الحوائط والبلاسترات وحلوق الأبواب.',
    },
  },
  {
    id: 8,
    title: { en: 'Custom designs to order', ar: 'تنفيذ التصميمات الخاصة حسب طلب العميل' },
    text: {
      en: 'Bring a drawing or an idea and we will manufacture it to your measurements.',
      ar: 'أحضر مخططًا أو فكرة ونحن نصنّعها على مقاساتك.',
    },
  },
];

/** "لماذا تختار عماد حسن؟" - من بيانات الشركة */
export const WHY_US = [
  { en: 'More than 25 years of experience in the field', ar: 'خبرة تتجاوز 25 عامًا في المجال' },
  {
    en: 'Specialised in cutting and shaping many kinds of marble and stone',
    ar: 'تخصص في خرط وتشكيل أنواع متعددة من الرخام والحجر',
  },
  { en: 'A wide range of products and designs', ar: 'تنوع في المنتجات والتصميمات' },
  { en: 'Dedicated profile and cutting machines', ar: 'ماكينات متخصصة في البروفايل والخرط' },
  { en: 'Any shape and size can be produced', ar: 'إمكانية تنفيذ الأشكال والمقاسات المطلوبة' },
  {
    en: 'Serving the Egyptian market and export markets',
    ar: 'خدمة السوق المصري والأسواق الخارجية',
  },
];
