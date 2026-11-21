import { LocalizedText } from '../services/LanguageService/language-service';

const t = (en: string, ar: string): LocalizedText => ({ en, ar });

/**
 * كل نصوص الواجهة في مكان واحد (عربي + إنجليزي).
 * الاستخدام داخل أي كومبوننت:  lang.l(UI.nav.home)
 * لإضافة لغة جديدة: زوّد المفتاح في LocalizedText ثم أضف الترجمة هنا.
 */
export const UI = {
  brand: {
    name: t('Emad Hassan Stone Craft', 'عماد حسن ستون كرافت'),
    short: t('Emad Hassan', 'عماد حسن'),
    tagline: t('STONE CRAFT', 'ستون كرافت'),
    descriptor: t('Marble & Natural Stone', 'الرخام والحجر الطبيعي'),
  },

  nav: {
    home: t('Home', 'الرئيسية'),
    about: t('About Us', 'من نحن'),
    products: t('Products', 'المنتجات'),
    projects: t('Projects', 'الأعمال'),
    services: t('Services', 'الخدمات'),
    contact: t('Contact Us', 'تواصل معنا'),
    quote: t('Get a Quote', 'اطلب عرض سعر'),
    switchLang: t('Switch to Arabic', 'التبديل إلى الإنجليزية'),
    langShort: t('عربي', 'EN'),
    openMenu: t('Open menu', 'فتح القائمة'),
    closeMenu: t('Close menu', 'إغلاق القائمة'),
    primary: t('Main navigation', 'القائمة الرئيسية'),
    callUs: t('Call us', 'اتصل بنا'),
    follow: t('Follow us', 'تابعنا'),
  },

  common: {
    exploreProducts: t('Explore Our Products', 'تصفح منتجاتنا'),
    contactUs: t('Contact Us', 'تواصل معنا'),
    whatsapp: t('WhatsApp', 'واتساب'),
    viewAll: t('View all', 'عرض الكل'),
    viewDetails: t('View details', 'عرض التفاصيل'),
    discoverMore: t('Discover more', 'اكتشف المزيد'),
    requestQuote: t('Request a quote', 'اطلب عرض سعر'),
    inquireWhatsapp: t('Inquire on WhatsApp', 'استفسر عبر واتساب'),
    backToProducts: t('Back to products', 'العودة للمنتجات'),
    close: t('Close', 'إغلاق'),
    previous: t('Previous', 'السابق'),
    next: t('Next', 'التالي'),
    zoom: t('Enlarge image', 'تكبير الصورة'),
    home: t('Home', 'الرئيسية'),
    skip: t('Skip to content', 'تخطي إلى المحتوى'),
    years: t('years of experience', 'عامًا من الخبرة'),
  },

  hero: {
    eyebrow: t('MARBLE & NATURAL STONE', 'الرخام والحجر الطبيعي'),
    titleA: t('Emad Hassan', 'عماد حسن'),
    titleB: t('Stone Craft', 'ستون كرافت'),
    subtitle: t('Columns, balustrades & architectural stone', 'أعمدة ودرابزينات وحجر معماري'),
    text: t(
      'More than 25 years shaping, cutting and carving marble and natural stone: columns, capitals, balusters, cornices and fountains, made to your design for Egypt and export markets.',
      'خبرة تتجاوز 25 عامًا في تشكيل وخرط ونحت الرخام والحجر الطبيعي: أعمدة وتيجان وبرامق وكرانيش ونوافير تُصنَّع حسب تصميمك، للسوق المصري وأسواق التصدير.',
    ),
    caption: t('Stone stair, balustrade and columned entrance', 'سلم حجري ودرابزين ومدخل بأعمدة'),
    badgeNumber: t('25+', '+25'),
    badgeText: t('years of craft', 'عامًا من الصنعة'),
    alt: t(
      'A villa built in golden natural stone with a columned entrance, balustrades and a marble stair',
      'فيلا مبنية بالحجر الطبيعي الذهبي بمدخل بأعمدة ودرابزين وسلم رخامي',
    ),
  },

  strengths: [
    {
      title: t('25+ Years', 'أكثر من 25 عامًا'),
      text: t('of experience in the field', 'من الخبرة في المجال'),
    },
    {
      title: t('Profile Machines', 'ماكينات بروفايل'),
      text: t('cornices, balusters, column slices', 'كرانيش وبرامق وشرائح أعمدة'),
    },
    {
      title: t('Cutting Machines', 'ماكينات خرط'),
      text: t('any shape, any size', 'أي شكل وأي مقاس'),
    },
    {
      title: t('Made to Order', 'حسب الطلب'),
      text: t('custom designs for every client', 'تصميمات خاصة لكل عميل'),
    },
  ],

  products: {
    eyebrow: t('THE COLLECTION', 'التشكيلة'),
    title: t('Our Products', 'منتجاتنا'),
    sub: t(
      'Nine families of architectural stone, each made to your drawings and dimensions.',
      'تسع عائلات من الحجر المعماري، تُصنَّع كلها وفق مخططاتك ومقاساتك.',
    ),
    pageTitle: t('Products & Collections', 'المنتجات والتشكيلات'),
    pageIntro: t(
      'Columns, capitals, bases, balusters, lanterns, fountains, cornices and column slices: every piece is shaped on our own machines in marble and natural stone.',
      'أعمدة وتيجان وقواعد وبرامق وفوانيس ونوافير وكرانيش وشرائح أعمدة: كل قطعة تُشكَّل على ماكيناتنا الخاصة من الرخام والحجر الطبيعي.',
    ),
    photos: t('photos', 'صور'),
    applications: t('Typical applications', 'الاستخدامات المعتادة'),
    about: t('About this product', 'عن المنتج'),
    madeToOrder: t(
      'Sizes, profiles and finishes are made to order. Send us your drawing or measurements and we will quote.',
      'المقاسات والتصميمات والتشطيبات تُنفَّذ حسب الطلب. أرسل لنا مخططك أو مقاساتك وسنرسل لك عرض السعر.',
    ),
    related: t('More from the collection', 'المزيد من التشكيلة'),
    notFound: t('This product was not found.', 'لم نعثر على هذا المنتج.'),
    gallery: t('Gallery', 'معرض الصور'),
  },

  about: {
    eyebrow: t('ABOUT THE COMPANY', 'عن الشركة'),
    title: t(
      'Stone shaped by hand and machine, for over 25 years',
      'حجر يُشكَّل باليد والماكينة منذ أكثر من 25 عامًا',
    ),
    p1: t(
      'Emad Hassan is a company specialised in manufacturing, shaping and cutting all kinds of marble and natural stone for architectural and decorative work.',
      'شركة عماد حسن متخصصة في تصنيع وتشكيل وخرط جميع أنواع الرخام والحجر الطبيعي في مجال الأعمال المعمارية والديكورية.',
    ),
    p2: t(
      'With more than 25 years of experience and our own production capability, we carry out designs of different shapes and sizes, with close attention to detail and quality of manufacture.',
      'بخبرة تتجاوز 25 عامًا وإمكانيات إنتاجية متخصصة، ننفّذ مختلف التصميمات والأشكال والمقاسات، مع الاهتمام بأدق التفاصيل وجودة التصنيع.',
    ),
    p3: t(
      'We aim to deliver products that combine quality, creativity and precision, and to meet the needs of clients in the Egyptian market and abroad.',
      'نسعى إلى تقديم منتجات تجمع بين الجودة والإبداع والدقة، وتلبية احتياجات العملاء في السوق المصري والأسواق الخارجية.',
    ),
    more: t('Our story', 'تعرف علينا'),
    pageTitle: t('About Us', 'من نحن'),
    pageIntro: t(
      'A manufacturer of architectural stone with its own machines, serving Egypt and export markets.',
      'مُصنِّع للحجر المعماري بماكينات خاصة، يخدم السوق المصري وأسواق التصدير.',
    ),
    factsTitle: t('The company at a glance', 'الشركة في سطور'),
    facts: [
      {
        label: t('Field', 'مجال العمل'),
        value: t(
          'Manufacturing, shaping and cutting marble and natural stone',
          'تصنيع وتشكيل وخرط الرخام والحجر الطبيعي',
        ),
      },
      { label: t('Experience', 'سنوات الخبرة'), value: t('More than 25 years', 'أكثر من 25 عامًا') },
      {
        label: t('Markets', 'السوق المستهدف'),
        value: t('Egypt and export markets', 'مصر والتصدير للأسواق الخارجية'),
      },
      {
        label: t('Address', 'العنوان'),
        value: t(
          'Shaq El-Tho’ban, 2nd El-Kerta, El-Sha’rawiya entrance',
          'شق الثعبان – الكرتة الثانية – مدخل الشعراوية',
        ),
      },
    ],
    whyTitle: t('Why choose Emad Hassan?', 'لماذا تختار عماد حسن؟'),
    imageAlt: t(
      'A craftsman turning a stone baluster on a lathe',
      'عامل يخرط برمق حجري على المخرطة',
    ),
  },

  factory: {
    eyebrow: t('THE FACTORY', 'المصنع'),
    title: t('Where the stone takes shape', 'حيث يتشكّل الحجر'),
    text: t(
      'The factory houses specialised machines that produce a wide range of marble and natural stone products, with flexibility in shapes and sizes to suit each client.',
      'يضم المصنع ماكينات متخصصة تساعد على تنفيذ مجموعة متنوعة من منتجات الرخام والحجر الطبيعي، مع مرونة في الأشكال والمقاسات وفقًا لاحتياجات العملاء.',
    ),
    pageTitle: t('Factory Capabilities', 'إمكانيات المصنع'),
    pageIntro: t('Technical and production capabilities', 'الإمكانيات الفنية والإنتاجية'),
    profileTitle: t('Profile machines', 'ماكينات البروفايل'),
    profileText: t(
      'Specialised in shaping cornices, balusters and column slices.',
      'متخصصة في تشكيل الكرانيش والبرامق وشرائح الأعمدة.',
    ),
    cuttingTitle: t('Cutting machines', 'ماكينات الخرط'),
    cuttingText: t(
      'Specialised in cutting marble and natural stone and producing different shapes and sizes.',
      'متخصصة في خرط الرخام والحجر الطبيعي وتنفيذ مختلف الأشكال والمقاسات.',
    ),
    galleryTitle: t('Inside the workshop', 'من داخل الورشة'),
    galleryText: t(
      'Real photographs from our production floor.',
      'صور حقيقية من أرضية الإنتاج لدينا.',
    ),
    visit: t('Visit the factory page', 'صفحة المصنع'),
    alts: [
      t('Turning a stone baluster on a lathe', 'خرط برمق حجري على المخرطة'),
      t('A worker shaping stone on a machine', 'عامل يشكّل الحجر على ماكينة'),
      t('Profile machine cutting long stone mouldings', 'ماكينة بروفايل تقطع كرانيش حجرية طويلة'),
      t('Profile machine over a granite bed', 'ماكينة بروفايل فوق سرير من الجرانيت'),
      t('Finishing a carved stone capital', 'تشطيب تاج عمود حجري منحوت'),
      t('Stacked stone profiles ready for finishing', 'قطع حجرية مشكّلة مكدسة جاهزة للتشطيب'),
    ],
  },

  projectsSec: {
    eyebrow: t('EXECUTED WORK', 'أعمال منفّذة'),
    title: t('Stone in architecture', 'الحجر في العمارة'),
    sub: t(
      'Photographs from our files showing our columns, balustrades, cornices and carved elements in place.',
      'صور من ملفاتنا تُظهر أعمدتنا ودرابزيناتنا وكرانيشنا وعناصرنا المنحوتة في أماكنها.',
    ),
    pageTitle: t('Projects & Gallery', 'الأعمال ومعرض الصور'),
    pageIntro: t(
      'Real executed works featuring our stone elements.',
      'أعمال منفّذة حقيقية تظهر فيها عناصرنا الحجرية.',
    ),
    note: t(
      'More photographs and videos of executed work are added regularly.',
      'تتم إضافة المزيد من صور وفيديوهات الأعمال المنفّذة بشكل دوري.',
    ),
  },

  services: {
    eyebrow: t('WHAT WE DO', 'ما نقدمه'),
    title: t('Our Services', 'خدماتنا'),
    sub: t(
      'From a single capital to a complete façade, every element is produced to your requirements.',
      'من تاج واحد إلى واجهة كاملة، كل عنصر يُنتَج وفق متطلباتك.',
    ),
    pageTitle: t('Services', 'الخدمات'),
    pageIntro: t('Eight services, one workshop.', 'ثماني خدمات في ورشة واحدة.'),
  },

  cta: {
    eyebrow: t('START A PROJECT', 'ابدأ مشروعك'),
    title: t('Have a drawing, or just an idea?', 'لديك مخطط أو مجرد فكرة؟'),
    text: t(
      'Tell us what you are building. We will help you choose the elements and send you a quotation.',
      'أخبرنا بما تبنيه، وسنساعدك في اختيار العناصر ونرسل لك عرض السعر.',
    ),
  },

  contact: {
    pageTitle: t('Contact Us', 'تواصل معنا'),
    pageIntro: t(
      'Call, message us on WhatsApp or send an inquiry. We reply as soon as we can.',
      'اتصل أو راسلنا على واتساب أو أرسل استفسارك، وسنرد عليك في أقرب وقت.',
    ),
    infoTitle: t('Get in touch', 'بيانات التواصل'),
    phones: t('Phone & WhatsApp', 'الهاتف وواتساب'),
    email: t('Email', 'البريد الإلكتروني'),
    social: t('Follow our latest work', 'تابع أحدث أعمالنا'),
    socialText: t(
      'New pieces, finished projects and videos from the workshop.',
      'قطع جديدة ومشروعات منفّذة وفيديوهات من الورشة بشكل مستمر.',
    ),
    address: t('Address', 'العنوان'),
    addressValue: t(
      'Shaq El-Tho’ban, 2nd El-Kerta, El-Sha’rawiya entrance, Egypt',
      'شق الثعبان – الكرتة الثانية – مدخل الشعراوية – مصر',
    ),
    openMap: t('Open in Google Maps', 'افتح في خرائط جوجل'),
    formTitle: t('Request a quote', 'اطلب عرض سعر'),
    formText: t(
      'Fill in the form and your message opens in WhatsApp, ready to send.',
      'املأ النموذج وستفتح رسالتك في واتساب جاهزة للإرسال.',
    ),
    name: t('Full name', 'الاسم بالكامل'),
    phone: t('Phone number', 'رقم الهاتف'),
    interest: t('I am interested in', 'مهتم بـ'),
    message: t('Project details', 'تفاصيل المشروع'),
    messagePh: t('Sizes, quantities, drawings, location…', 'المقاسات، الكميات، المخططات، الموقع…'),
    other: t('Other / custom design', 'أخرى / تصميم خاص'),
    send: t('Send via WhatsApp', 'إرسال عبر واتساب'),
    errName: t('Please enter your name.', 'من فضلك أدخل اسمك.'),
    errPhone: t('Please enter a valid phone number.', 'من فضلك أدخل رقم هاتف صحيح.'),
    errMessage: t(
      'Please add a few details about your project.',
      'من فضلك أضف بعض التفاصيل عن مشروعك.',
    ),
    success: t(
      'Thank you. WhatsApp should now be open with your message. If it did not open, call us on the numbers above.',
      'شكرًا لك. يجب أن يكون واتساب قد فُتح برسالتك. إن لم يفتح، اتصل بنا على الأرقام أعلاه.',
    ),
    msgGreeting: t('Hello Emad Hassan Stone Craft,', 'مرحبًا عماد حسن ستون كرافت،'),
    msgName: t('Name', 'الاسم'),
    msgPhone: t('Phone', 'الهاتف'),
    msgInterest: t('Interested in', 'مهتم بـ'),
    msgDetails: t('Details', 'التفاصيل'),
  },

  footer: {
    about: t(
      'Manufacturers of marble and natural stone architectural elements. Over 25 years of experience, serving Egypt and export markets.',
      'مصنّعو العناصر المعمارية من الرخام والحجر الطبيعي. خبرة تتجاوز 25 عامًا، نخدم السوق المصري وأسواق التصدير.',
    ),
    explore: t('Explore', 'استكشف'),
    collection: t('Collection', 'التشكيلة'),
    contact: t('Contact', 'التواصل'),
    factory: t('The Factory', 'المصنع'),
    rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
    follow: t('Follow us', 'تابعنا'),
  },

  notFound: {
    title: t('Page not found', 'الصفحة غير موجودة'),
    text: t('The page you are looking for does not exist.', 'الصفحة التي تبحث عنها غير موجودة.'),
  },
} as const;
