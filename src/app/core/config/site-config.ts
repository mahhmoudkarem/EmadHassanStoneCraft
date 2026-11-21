/**
 * بيانات التواصل والـ SEO في مكان واحد.
 * غيّر أي رقم أو لينك هنا فقط وهيتحدث في كل الموقع
 * (النافبار، الفوتر، الهوم، صفحة التواصل، زر واتساب العائم، الـ Structured Data، الـ sitemap).
 * المصدر: ملف "المعلومات الأساسية" المرسل من الشركة.
 */
export const SITE_CONFIG = {
  /**
   * ⚠️ الدومين النهائي للموقع (بدون / في الآخر).
   * مستخدم في: canonical, og:url, og:image, sitemap.xml, robots.txt, JSON-LD, allowedHosts.
   * غيّره للدومين الحقيقي قبل الرفع، وبعدها اعمل npm run build.
   */
  siteUrl: 'https://emadhassanstonecraft.com',

  /** رقم واتساب بالصيغة الدولية بدون + أو مسافات */
  whatsappNumber: '201016835110',
  phones: [
    { tel: '+201016835110', display: '+20 101 683 5110' },
    { tel: '+201200091624', display: '+20 120 009 1624' },
    { tel: '+201019670459', display: '+20 101 967 0459' },
  ],
  /** الرقم الرئيسي الظاهر في الهيدر */
  phone: '+201016835110',
  phoneDisplay: '+20 101 683 5110',
  email: 'stonecraft011@gmail.com',

  address: {
    street: 'شق الثعبان – الكرتة الثانية – مدخل الشعراوية',
    locality: 'Cairo',
    country: 'EG',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('شق الثعبان الكرتة الثانية مدخل الشعراوية'),

  /** حسابات السوشيال ميديا (بتظهر في الفوتر، صفحة التواصل، منيو الموبايل، وفي sameAs للـ SEO) */
  social: [
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/share/1eiX98TdYu/',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@stone_craft111',
      url: 'https://www.instagram.com/stone_craft111',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@stonecraft01',
      url: 'https://www.tiktok.com/@stonecraft01',
    },
  ],
} as const;

export type SocialId = (typeof SITE_CONFIG.social)[number]['id'];
