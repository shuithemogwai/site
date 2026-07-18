export type Lang = 'en' | 'ar' | 'ru';

export const LANGS: { code: Lang; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'AR', dir: 'rtl' },
  { code: 'ru', label: 'RU', dir: 'ltr' },
];

export type Dict = {
  dir: 'ltr' | 'rtl';
  nav: { services: string; properties: string; about: string; contact: string; consult: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string; points: string[] }[];
  };
  properties: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badge: string;
    viewDetails: string;
    currency: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: { title: string; desc: string }[];
  };
  cta: { title: string; subtitle: string; button: string; note: string };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    legal: string;
    contact: string;
    address: string;
    rights: string;
    links: {
      services: string;
      properties: string;
      about: string;
      careers: string;
      privacy: string;
      terms: string;
      regulatory: string;
    };
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    dir: 'ltr' as const,
    nav: {
      services: 'Services',
      properties: 'Properties',
      about: 'About',
      contact: 'Contact',
      consult: 'Book a Consultation',
    },
    hero: {
      eyebrow: 'Trusted by Global Investors Since 2008',
      title: 'Your Gateway to Prestige Property in Turkiye',
      subtitle:
        'We guide discerning international buyers through every step — from citizenship-by-investment to legal ownership in Turkiye — with discretion, expertise, and unwavering integrity.',
      ctaPrimary: 'Explore Properties',
      ctaSecondary: 'Speak to an Advisor',
      stats: [
        { value: '$2.4B+', label: 'Property Transacted' },
        { value: '1,200+', label: 'Citizenships Secured' },
        { value: '15+', label: 'Years in Turkiye' },
        { value: '98%', label: 'Client Satisfaction' },
      ],
    },
    services: {
      eyebrow: 'Specialized Services',
      title: 'A Complete Advisory for the International Buyer',
      subtitle:
        'Three pillars of expertise, one seamless experience — engineered for clients who expect more than a transaction.',
      items: [
        {
          title: 'Citizenship by Investment',
          desc: 'Curated programs across Turkiye. We navigate qualifying thresholds, due diligence, and government filings to secure a second passport with full transparency.',
          points: ['3–10 month timelines', 'Government-licensed agents', 'Family inclusion'],
        },
        {
          title: 'Bespoke Property Tours',
          desc: 'Private, chauffeured inspections of shortlisted residences. From arrival concierge to architect meetings, every detail is arranged around your schedule and discretion.',
          points: ['VIP airport transfer', 'Multi-city itineraries', 'Architect & developer access'],
        },
        {
          title: 'Legal Assistance',
          desc: 'Independent counsel for structuring, title verification, and tax residency. We protect your interests with bilingual attorneys admitted in each jurisdiction we operate.',
          points: ['Title & lien due diligence', 'Ownership structuring', 'Cross-border tax'],
        },
      ],
    },
    properties: {
      eyebrow: 'Featured Properties',
      title: 'Residences That Qualify for Citizenship',
      subtitle:
        'Each listing is pre-vetted against program thresholds — so every viewing brings you closer to a second passport, not just a new address.',
      badge: 'Suitable for Citizenship',
      viewDetails: 'View Details',
      currency: 'USD',
    },
    about: {
      eyebrow: 'Why Real Estate Istanbul',
      title: 'Built on Discretion, Measured in Results',
      body: 'Real Estate Istanbul was founded on a simple conviction: foreign buyers deserve an advisor who represents them — not the seller. For over fifteen years we have represented private clients, family offices, and sovereign wealth principals across Turkiye.',
      pillars: [
        { title: 'Independent', desc: 'Our loyalty is purchased once — by you.' },
        { title: 'Discreet', desc: 'NDA-first engagements, off-market access, and a paper trail you control.' },
        { title: 'End-to-End', desc: 'From first viewing to keys, citizenship, and tax residency — one team.' },
      ],
    },
    cta: {
      title: 'Begin a Private Conversation',
      subtitle:
        'Book a confidential consultation with a senior advisor. No fees, no obligation — just a clear path forward.',
      button: 'Schedule a Consultation',
      note: 'Average response time: under 4 hours.',
    },
    footer: {
      tagline: 'Prestige property advisory for the international buyer in Turkiye.',
      explore: 'Explore',
      company: 'Company',
      legal: 'Legal',
      contact: 'Contact',
      address: 'Levent, Buyukdere Avenue No. 120, Istanbul, Turkiye',
      rights: 'All rights reserved.',
      links: {
        services: 'Services',
        properties: 'Properties',
        about: 'About Us',
        careers: 'Careers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Engagement',
        regulatory: 'Regulatory Disclosures',
      },
    },
  },
  ar: {
    dir: 'rtl' as const,
    nav: {
      services: 'الخدمات',
      properties: 'العقارات',
      about: 'من نحن',
      contact: 'تواصل معنا',
      consult: 'احجز استشارة',
    },
    hero: {
      eyebrow: 'موثوق من المستثمرين العالميين منذ 2008',
      title: 'بوابتك إلى العقارات الفاخرة في تركيا',
      subtitle:
        'نرشد المشترين الدوليين المميزين في كل خطوة — من المواطنة عبر الاستثمار إلى الملكية القانونية في تركيا — بسرعة وخبرة ونزاهة لا تتزعزع.',
      ctaPrimary: 'استكشف العقارات',
      ctaSecondary: 'تحدث إلى مستشار',
      stats: [
        { value: '+2.4 مليار$', label: 'عقارات تمت معاملتها' },
        { value: '+1,200', label: 'مواطنة تم تأمينها' },
        { value: '+15', label: 'عاماً في تركيا' },
        { value: '98%', label: 'رضا العملاء' },
      ],
    },
    services: {
      eyebrow: 'خدمات متخصصة',
      title: 'استشارة شاملة للمشتري الدولي',
      subtitle: 'ثلاث ركائز من الخبرة وتجربة واحدة سلسة — مصممة لعملاء يتوقعون أكثر من مجرد معاملة.',
      items: [
        {
          title: 'المواطنة عبر الاستثمار',
          desc: 'برامج منتقاة عبر تركيا. نتعامل مع الحدود المؤهلة والتدقيق المستحق والتقديمات الحكومية لتأمين جواز سفر ثان بشفافية كاملة.',
          points: ['جداول ٣–١٠ أشهر', 'وكلاء معتمدون حكومياً', 'إدراج العائلة'],
        },
        {
          title: 'جولات عقارية مخصصة',
          desc: 'معاينات خاصة بسائق خاص للعقارات المختارة. من الاستقبال في المطار إلى لقاءات المهندسين، كل تفصيلة مرتبة وفق جدولك وسرّيتك.',
          points: ['نقل VIP من المطار', 'مسارات متعددة المدن', 'وصول للمهندسين والمطورين'],
        },
        {
          title: 'المساعدة القانونية',
          desc: 'محامون مستقلون للهيكلة والتحقق من الملكية والإقامة الضريبية. نحمي مصالحك بمحامين ثنائيي اللغة مرخصين في كل ولاية نعمل بها.',
          points: ['تدقيق العنوان والديون', 'هيكلة الملكية', 'ضريبة عابرة للحدود'],
        },
      ],
    },
    properties: {
      eyebrow: 'عقارات مميزة',
      title: 'مساقات تؤهلك للمواطنة',
      subtitle: 'كل إدراج مُدقق مسبقاً وفق عتبات البرنامج — حتى تقربك كل معاينة من جواز ثانٍ، لا مجرد عنوان جديد.',
      badge: 'مناسبة للمواطنة',
      viewDetails: 'عرض التفاصيل',
      currency: 'دولار أمريكي',
    },
    about: {
      eyebrow: 'لماذا عقارات إسطنبول',
      title: 'مبنية على التقدير، تُقاس بالنتائج',
      body: 'تأسست عقارات إسطنبول على قناعة بسيطة: المشتري الأجنبي يستحق مستشاراً يمثله — لا البائع. لأكثر من خمسة عشر عاماً مثلنا عملاء خاصين ومكاتب عائلية وأمراء سياديين عبر تركيا.',
      pillars: [
        { title: 'مستقلة', desc: 'ولاؤنا يُشترى مرة واحدة — منك.' },
        { title: 'سرّية', desc: 'تعامل باتفاقيات سرية، وصول خارج السوق، ووثائق تحت سيطرتك.' },
        { title: 'متكاملة', desc: 'من أول معاينة إلى المفاتيح والمواطنة والإقامة الضريبية — فريق واحد.' },
      ],
    },
    cta: {
      title: 'ابدأ محادثة خاصة',
      subtitle: 'احجز استشارة سرّية مع مستشار أول. بدون رسوم أو التزام — فقط طريق واضح للأمام.',
      button: 'جدولة استشارة',
      note: 'متوسط وقت الاستجابة: أقل من ٤ ساعات.',
    },
    footer: {
      tagline: 'استشارة عقارات فاخرة للمشتري الدولي في تركيا.',
      explore: 'استكشف',
      company: 'الشركة',
      legal: 'قانوني',
      contact: 'تواصل',
      address: 'لوينت، شارع بيوكديري رقم ١٢٠، إسطنبول، تركيا',
      rights: 'جميع الحقوق محفوظة.',
      links: {
        services: 'الخدمات',
        properties: 'العقارات',
        about: 'من نحن',
        careers: 'الوظائف',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الالتزام',
        regulatory: 'الإفصاحات التنظيمية',
      },
    },
  },
  ru: {
    dir: 'ltr' as const,
    nav: {
      services: 'Услуги',
      properties: 'Объекты',
      about: 'О компании',
      contact: 'Контакты',
      consult: 'Консультация',
    },
    hero: {
      eyebrow: 'Доверие международных инвесторов с 2008 года',
      title: 'Ваши ворота к престижной недвижимости в Турции',
      subtitle:
        'Мы сопровождаем требовательных международных покупателей на каждом этапе — от гражданства через инвестиции до законного владения в Турции — с осмотрительностью, экспертизой и непоколебимой честностью.',
      ctaPrimary: 'Смотреть объекты',
      ctaSecondary: 'Поговорить с советником',
      stats: [
        { value: '$2,4 млрд+', label: 'Сделок с недвижимостью' },
        { value: '1 200+', label: 'Гражданств получено' },
        { value: '15+', label: 'Лет в Турции' },
        { value: '98%', label: 'Довольных клиентов' },
      ],
    },
    services: {
      eyebrow: 'Специализированные услуги',
      title: 'Полное сопровождение международного покупателя',
      subtitle: 'Три опоры экспертизы и единый бесшовный опыт — для клиентов, ожидающих большего, чем просто сделка.',
      items: [
        {
          title: 'Гражданство через инвестиции',
          desc: 'Отобранные программы Турции. Мы проходим квалификационные пороги, проверку благонадёжности и правительственные подачи, обеспечивая второе гражданство с полной прозрачностью.',
          points: ['Сроки 3–10 месяцев', 'Лицензированные агенты', 'Включение семьи'],
        },
        {
          title: 'Индивидуальные туры по объектам',
          desc: 'Частные осмотры с водителем для отобранных резиденций. От трансфера из аэропорта до встреч с архитекторами — всё выстроено вокруг вашего графика и конфиденциальности.',
          points: ['VIP-трансфер', 'Маршруты по нескольким городам', 'Доступ к архитекторам и девелоперам'],
        },
        {
          title: 'Юридическое сопровождение',
          desc: 'Независимые юристы для структурирования, проверки титула и налогового резидентства. Защищаем ваши интересы двуязычными адвокатами, допущенными в каждой юрисдикции нашего присутствия.',
          points: ['Проверка титула и обременений', 'Структурирование владения', 'Трансграничное налогообложение'],
        },
      ],
    },
    properties: {
      eyebrow: 'Избранные объекты',
      title: 'Резиденции, отвечающие требованиям гражданства',
      subtitle: 'Каждый объект заранее проверен по порогам программ — так что каждый просмотр приближает вас ко второму паспорту, а не просто к новому адресу.',
      badge: 'Подходит для гражданства',
      viewDetails: 'Подробнее',
      currency: 'USD',
    },
    about: {
      eyebrow: 'Почему Real Estate Istanbul',
      title: 'Построено на осмотрительности, измерено результатами',
      body: 'Real Estate Istanbul основан на простом убеждении: иностранные покупатели заслуживают советника, который представляет их — а не продавца. Более пятнадцати лет мы представляем частных клиентов, семейные офисы и суверенных принципалов в Турции.',
      pillars: [
        { title: 'Независимость', desc: 'Наша верность куплена однажды — вами.' },
        { title: 'Осмотрительность', desc: 'NDA с первого контакта, доступ к закрытым объектам и контроль документооборота.' },
        { title: 'Полный цикл', desc: 'От первого просмотра до ключей, гражданства и налогового резидентства — одна команда.' },
      ],
    },
    cta: {
      title: 'Начните конфиденциальный разговор',
      subtitle: 'Запишитесь на конфиденциальную консультацию с старшим советником. Без сборов и обязательств — только ясный путь вперёд.',
      button: 'Назначить консультацию',
      note: 'Среднее время ответа: менее 4 часов.',
    },
    footer: {
      tagline: 'Премиальный консалтинг по недвижимости в Турции для международного покупателя.',
      explore: 'Навигация',
      company: 'Компания',
      legal: 'Правовое',
      contact: 'Контакты',
      address: 'Levent, Buyukdere Avenue No. 120, Istanbul, Turkiye',
      rights: 'Все права защищены.',
      links: {
        services: 'Услуги',
        properties: 'Объекты',
        about: 'О компании',
        careers: 'Карьера',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия сотрудничества',
        regulatory: 'Регуляторные раскрытия',
      },
    },
  },
};

export const t = (lang: Lang): Dict => translations[lang];
