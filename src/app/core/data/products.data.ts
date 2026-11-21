import { Product } from '../models/Product';

const img = (slug: string, n: number) => `/images/products/${slug}/${n}.jpg`;
const gallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => img(slug, i + 1));

const FACADES = { en: 'Facades', ar: 'الواجهات' };
const ENTRANCES = { en: 'Villa entrances', ar: 'مداخل الفلل' };
const INTERIORS = { en: 'Interior spaces', ar: 'المساحات الداخلية' };
const BALCONIES = { en: 'Balconies & terraces', ar: 'البلكونات والتراسات' };
const STAIRS = { en: 'Stairs & landings', ar: 'السلالم والمنحدرات' };
const GARDENS = { en: 'Gardens & courtyards', ar: 'الحدائق والأفنية' };
const DECOR = { en: 'Architectural decoration', ar: 'الديكورات المعمارية' };

/**
 * أقسام المنتجات (التسعة أقسام الواردة في بيانات الشركة).
 * الأوصاف الأساسية مأخوذة من ملف الشركة، ولا توجد مواصفات فنية (مقاسات/أوزان) لأنها غير موثقة.
 * لإضافة صور: ضعها في public/images/products/<slug>/ ثم زوّد العدد في gallery().
 */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'columns',
    name: { en: 'Marble & Stone Columns', ar: 'الأعمدة الرخامية والحجرية' },
    tagline: { en: 'Fluted, twisted and carved shafts', ar: 'أعمدة سادة ومحززة ومحفورة' },
    description: {
      en: 'Columns shaped and manufactured in a wide range of designs and sizes, from plain fluted shafts to spiral and richly carved ones. Each is made to the architect’s drawing and the client’s dimensions.',
      ar: 'نصنّع ونشكّل الأعمدة بمختلف التصميمات والمقاسات، من الأعمدة المحززة البسيطة إلى الملفوفة والمحفورة بزخارف غنية، وكل عمود يُنفَّذ وفق مخطط المهندس ومقاسات العميل.',
    },
    applications: [ENTRANCES, FACADES, INTERIORS, BALCONIES],
    cover: img('columns', 1),
    images: gallery('columns', 5),
    alt: { en: 'Natural stone column', ar: 'عمود حجري طبيعي' },
  },
  {
    id: 2,
    slug: 'capitals',
    name: { en: 'Column Capitals', ar: 'تيجان الأعمدة' },
    tagline: { en: 'Corinthian and ornamental crowns', ar: 'تيجان كورنثية وزخرفية' },
    description: {
      en: 'Capitals in varied architectural and ornamental designs, carved with attention to every leaf and volute so the top of the column reads as clearly as its shaft.',
      ar: 'تيجان بتصميمات معمارية وزخرفية متنوعة، تُنحت بعناية في كل ورقة وكل حلزون ليكون تاج العمود بنفس جمال بدنه.',
    },
    applications: [ENTRANCES, FACADES, INTERIORS],
    cover: img('capitals', 1),
    images: gallery('capitals', 3),
    alt: { en: 'Carved stone column capital', ar: 'تاج عمود حجري منحوت' },
  },
  {
    id: 3,
    slug: 'bases',
    name: { en: 'Column Bases', ar: 'قواعد الأعمدة' },
    tagline: { en: 'Plinths in every shape and size', ar: 'قواعد بمختلف الأشكال والأحجام' },
    description: {
      en: 'Marble and stone column bases in different shapes and sizes, plain or decorated with carved panels to match the column above.',
      ar: 'قواعد رخامية وحجرية للأعمدة بمختلف الأشكال والأحجام، سادة أو مزخرفة بحشوات منحوتة تتناسق مع العمود.',
    },
    applications: [ENTRANCES, BALCONIES, GARDENS],
    cover: img('bases', 1),
    images: gallery('bases', 2),
    alt: { en: 'Stone column base', ar: 'قاعدة عمود حجرية' },
  },
  {
    id: 4,
    slug: 'square-balusters',
    name: { en: 'Square Balusters', ar: 'البرامق المربعة' },
    tagline: { en: 'Cut and profiled square sections', ar: 'برامق مربعة بتصميمات مختلفة' },
    description: {
      en: 'Square balusters manufactured in different sizes and designs, profiled on specialised machines for crisp, repeatable shapes along an entire run of railing.',
      ar: 'نصنّع البرامق المربعة بمقاسات وتصميمات مختلفة على ماكينات بروفايل متخصصة، لتخرج الأشكال حادة ومتطابقة على امتداد الدرابزين كله.',
    },
    applications: [STAIRS, BALCONIES, GARDENS],
    cover: img('square-balusters', 1),
    images: gallery('square-balusters', 4),
    alt: { en: 'Square stone balusters', ar: 'برامق حجرية مربعة' },
  },
  {
    id: 5,
    slug: 'round-balusters',
    name: { en: 'Turned Round Balusters', ar: 'البرامق المدورة (الخرط)' },
    tagline: { en: 'Lathe-turned in varied profiles', ar: 'خرط البرامق الدائرية بأشكال متنوعة' },
    description: {
      en: 'Round balusters turned in a variety of forms, from slim classical profiles to full-bellied ones, in marble and natural stone.',
      ar: 'نخرط البرامق الدائرية بأشكال متنوعة، من الأشكال الكلاسيكية الرفيعة إلى الممتلئة، في الرخام والحجر الطبيعي.',
    },
    applications: [STAIRS, BALCONIES, ENTRANCES],
    cover: img('round-balusters', 1),
    images: gallery('round-balusters', 5),
    alt: { en: 'Turned stone balusters', ar: 'برامق حجرية مخروطة' },
  },
  {
    id: 6,
    slug: 'lanterns',
    name: { en: 'Lanterns & Sconces', ar: 'الفوانيس والأباليك' },
    tagline: { en: 'Stone lighting and gate-post pieces', ar: 'منتجات حجرية للإضاءة والبوابات' },
    description: {
      en: 'Stone and marble pieces for architectural decoration: carved lanterns, pierced finials and wall sconces in many forms and designs.',
      ar: 'منتجات حجرية ورخامية للديكورات المعمارية: فوانيس منحوتة وأباليك مفرغة وأباليك حائط بأشكال وتصميمات متعددة.',
    },
    applications: [GARDENS, ENTRANCES, DECOR],
    cover: img('lanterns', 1),
    images: gallery('lanterns', 7),
    alt: { en: 'Carved stone lantern', ar: 'فانوس حجري منحوت' },
  },
  {
    id: 7,
    slug: 'fountains',
    name: { en: 'Stone Fountains', ar: 'النوافير' },
    tagline: { en: 'Tiered basins in marble and stone', ar: 'نوافير رخامية وحجرية بعدة أدوار' },
    description: {
      en: 'Marble and stone fountains made in different shapes and designs, from compact garden pieces to large tiered fountains for public squares.',
      ar: 'نصنّع نوافير رخامية وحجرية بمختلف الأشكال والتصميمات، من القطع الصغيرة للحدائق إلى النوافير الكبيرة متعددة الأدوار للميادين.',
    },
    applications: [GARDENS, { en: 'Courtyards & plazas', ar: 'الأفنية والميادين' }, DECOR],
    cover: img('fountains', 1),
    images: gallery('fountains', 5),
    alt: { en: 'Tiered stone fountain', ar: 'نافورة حجرية متعددة الأدوار' },
  },
  {
    id: 8,
    slug: 'cornices',
    name: { en: 'Cornices', ar: 'الكرانيش' },
    tagline: { en: 'Every size, every profile', ar: 'تنفيذ جميع المقاسات والأشكال' },
    description: {
      en: 'Cornices produced in every size and profile on dedicated profiling machines, for facades, window surrounds and interior mouldings.',
      ar: 'ننفّذ الكرانيش بجميع المقاسات والأشكال على ماكينات البروفايل المتخصصة، للواجهات وحلوق الشبابيك والتشطيبات الداخلية.',
    },
    applications: [FACADES, { en: 'Window surrounds', ar: 'حلوق الشبابيك' }, INTERIORS],
    cover: img('cornices', 1),
    images: gallery('cornices', 6),
    alt: { en: 'Profiled stone cornice', ar: 'كورنيش حجري بروفايل' },
  },
  {
    id: 9,
    slug: 'column-slices',
    name: { en: 'Column Slices', ar: 'شرائح الأعمدة' },
    tagline: { en: 'Half-shafts for walls and pilasters', ar: 'أنصاف أعمدة للحوائط والبلاسترات' },
    description: {
      en: 'Column slices shaped and manufactured in various sizes, carved with plaited, twisted or fluted patterns to clad walls, door frames and pilasters.',
      ar: 'نشكّل ونصنّع شرائح الأعمدة بمختلف المقاسات، بنقوش مضفرة أو ملفوفة أو محززة، لتكسية الحوائط وحلوق الأبواب والبلاسترات.',
    },
    applications: [ENTRANCES, FACADES, INTERIORS],
    cover: img('column-slices', 1),
    images: gallery('column-slices', 4),
    alt: { en: 'Carved column slices', ar: 'شرائح أعمدة منحوتة' },
  },
];

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);
