export type ServiceWork = {
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  image?: string;     // خليها زي ما كانت (تقدر تبقى Thumbnail)
  thumbUrl?: string;  // Thumbnail من Supabase (اختياري)
  driveUrl?: string;  // رابط Drive للفيديو (اختياري)
};

export type ServiceFAQ = {
  qAr: string;
  aAr: string;
  qEn: string;
  aEn: string;
};

export type ServiceData = {
  slug: string;

  badgeAr: string;
  badgeEn: string;

  heroTitleArTop: string;
  heroTitleArAccent: string;

  heroTitleEnTop: string;
  heroTitleEnAccent: string;

  heroDescAr: string;
  heroDescEn: string;

  whatYouGet: { ar: string; en: string }[];
  process: { arTitle: string; arDesc: string; enTitle: string; enDesc: string }[];

  bestWork: ServiceWork[];
  faqs: ServiceFAQ[];

  tags?: { ar: string; en: string }[]; // ✅ أضيفي دي
};

export const SERVICES: Record<string, ServiceData> = {
  designs: {
    slug: "designs",

    badgeAr: "التصاميم الإبداعية",
    badgeEn: "Design Services",

    heroTitleArTop: "نُصمّم حضوراً…",
    heroTitleArAccent: "يُرى ويُتذكَّر",

    heroTitleEnTop: "We design a presence…",
    heroTitleEnAccent: "Seen. Remembered.",

    heroDescAr: "تصاميم مدروسة تُجسّد هوية العلامة وتُبرزها على كل منصة.",
    heroDescEn:
      "Strategic designs that express your brand and elevate it across every platform.",

    whatYouGet: [
      { ar: "تصاميم منصات التواصل (منشورات / قصص).", en: "Social media designs (posts / stories)." },
      { ar: "تصاميم إعلانية وبنرات بمقاسات متعددة.", en: "Ads & banners in multiple sizes." },
      { ar: "اتساق بصري يحافظ على هوية العلامة.", en: "Visual consistency that protects brand identity." },
      { ar: "ملفات جاهزة للنشر + نسخ عالية الجودة.", en: "Ready-to-publish files + high-resolution exports." },
      { ar: "تعديلات قبل التسليم النهائي (وفق الاتفاق).", en: "Revisions before final delivery (as agreed)." },
    ],

    process: [
      {
        arTitle: "فهم الهدف والرسالة",
        arDesc: "نحدد المنصة، المقاسات، والأسلوب البصري المناسب.",
        enTitle: "Define the goal",
        enDesc: "We set the platform, sizes, and visual direction.",
      },
      {
        arTitle: "تصميم أولي ومراجعة",
        arDesc: "نشارك النسخة الأولى للتحسين وفق الملاحظات.",
        enTitle: "First draft & review",
        enDesc: "We share the first version and iterate with feedback.",
      },
      {
        arTitle: "تعديل وتسليم نهائي",
        arDesc: "تسليم الملفات بالصيغ والمقاسات المطلوبة للنشر.",
        enTitle: "Refine & deliver",
        enDesc: "Final exports in required formats and sizes.",
      },
    ],

    bestWork: [
  {
    titleAr: "الهويات المختلفة للبراندات",
    titleEn: "Brand Identity Collection",
    categoryAr: "ديزاينات",
    categoryEn: "Designs",
    driveUrl: "https://drive.google.com/drive/folders/1AmIOG-PEJYEwJAN-LUQTPRuUHcPmzldC",
  },
  {
    titleAr: "ديزاينات في مجال الفود",
    titleEn: "Food Designs",
    categoryAr: "ديزاينات",
    categoryEn: "Designs",
    driveUrl: "https://drive.google.com/drive/folders/1l9VJkzTnpWveYDHPAjhwLakAZhtJKqA_?usp=sharing",
  },
],

    faqs: [
      {
        qAr: "ما الذي تحتاجونه للبدء؟",
        aAr: "تفاصيل المطلوب، المقاسات، المنصة، وأي عناصر هوية متاحة (شعار/ألوان/خطوط).",
        qEn: "What do you need to start?",
        aEn: "Brief, sizes, platform, and any available brand assets (logo/colors/fonts).",
      },
      {
        qAr: "كيف يكون التسليم؟",
        aAr: "ملفات جاهزة للنشر ونسخ عالية الجودة بحسب الاستخدام.",
        qEn: "How do you deliver files?",
        aEn: "Ready-to-publish files plus high-resolution versions based on usage.",
      },
      {
        qAr: "هل تتوفر تعديلات؟",
        aAr: "نعم، وفق عدد التعديلات المتفق عليه قبل التسليم النهائي.",
        qEn: "Do you offer revisions?",
        aEn: "Yes, based on the agreed number of revisions before final delivery.",
      },
    ],
  },

  editing: {
  slug: "editing",

  badgeAr: "المعالجة والتحرير",
  badgeEn: "Editing Services",

  heroTitleArTop: "نُحرّر المحتوى…",
  heroTitleArAccent: "ليبلغ أثره",

  heroTitleEnTop: "We edit content…",
  heroTitleEnAccent: "To maximize impact.",

  heroDescAr: "تحرير بصري دقيق يرفع جودة العمل ويضمن اتساقه مع هوية العلامة وهدف الرسالة.",
  heroDescEn: "Precision editing that elevates quality and keeps every frame aligned with your brand and message.",

  whatYouGet: [
    { ar: "تحرير احترافي وإيقاع بصري متوازن.", en: "Professional editing with balanced pacing." },
    { ar: "تحسين الألوان واللقطات بما يخدم القصة.", en: "Color and shot refinement to serve the story." },
    { ar: "تنسيق المقاسات حسب المنصات (عمودي/مربع/أفقي).", en: "Platform-ready formats (vertical/square/landscape)." },
    { ar: "دمج شعارات وعناوين خفيفة عند الحاجة.", en: "Light titles and branding elements if needed." },
    { ar: "تسليم نهائي بجودة عالية وفق الاستخدام.", en: "High-quality final exports based on usage." },
  ],

  process: [
    {
      arTitle: "استلام المواد وتحديد الهدف",
      arDesc: "نراجع اللقطات ونحدد الأسلوب والإيقاع المناسب.",
      enTitle: "Review & direction",
      enDesc: "We review footage and define style and pacing.",
    },
    {
      arTitle: "تحرير أولي ومراجعة",
      arDesc: "نقدّم نسخة أولى للملاحظات والتحسين.",
      enTitle: "First cut",
      enDesc: "We deliver a first cut for feedback.",
    },
    {
      arTitle: "تحسينات وتسليم نهائي",
      arDesc: "تعديلات نهائية ثم تسليم بالمقاسات المطلوبة.",
      enTitle: "Finalize & deliver",
      enDesc: "Final refinements and export in required formats.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل يمكنكم العمل على مواد مصوّرة جاهزة؟",
      aAr: "نعم، نستقبل المواد الخام ونعالجها تحريرياً بما يحقق الهدف المطلوب.",
      qEn: "Can you edit existing footage?",
      aEn: "Yes, we can work with your raw footage and edit it toward the desired goal.",
    },
    {
      qAr: "هل تدعمون مقاسات المنصات المختلفة؟",
      aAr: "نعم، نجهّز نسخاً مناسبة لكل منصة (عمودي/مربع/أفقي).",
      qEn: "Do you provide platform formats?",
      aEn: "Yes, we export versions optimized for each platform.",
    },
    {
      qAr: "كم عدد التعديلات المتاحة؟",
      aAr: "وفق الاتفاق قبل التسليم النهائي، ويُحدد ذلك حسب نوع المشروع.",
      qEn: "How many revisions are included?",
      aEn: "As agreed before final delivery, depending on project type.",
    },
  ],
},

"company-profile-layout": {
  slug: "company-profile-layout",

  badgeAr: "تصميم الملفات التعريفية والتنسيق الفني",
  badgeEn: "Profile & Layout Services",

  heroTitleArTop: "نُقدّم قصتك…",
  heroTitleArAccent: "بأسلوبٍ يليق",

  heroTitleEnTop: "We present your story…",
  heroTitleEnAccent: "With refined clarity.",

  heroDescAr:
    "تصميم بروفايل احترافي وتنسيق صفحات مدروس، يُبرز قوة العلامة ويحوّل المحتوى إلى عرضٍ واضح وجذّاب.",
  heroDescEn:
    "Professional company profiles and thoughtful layouts that turn content into a clear, compelling presentation.",

  whatYouGet: [
    { ar: "إعداد بروفايل الشركة بتنسيق احترافي.", en: "Professionally structured company profile." },
    { ar: "تصميم لاي أوت صفحات منظم وواضح.", en: "Clean, well-organized page layouts." },
    { ar: "توحيد الخطوط والألوان بما ينسجم مع الهوية.", en: "Fonts and colors aligned with your brand identity." },
    { ar: "نسخة جاهزة للطباعة ونسخة رقمية للاستخدام.", en: "Print-ready and digital-ready versions." },
    { ar: "تسليم ملفات قابلة للتحديث حسب الحاجة.", en: "Deliverables that can be updated when needed." },
  ],

  process: [
    {
      arTitle: "جمع المحتوى وتحديد الهدف",
      arDesc: "نرتّب المعلومات ونحدّد أسلوب العرض المناسب.",
      enTitle: "Content & direction",
      enDesc: "We organize content and define the right presentation style.",
    },
    {
      arTitle: "تصميم وتنسيق الصفحات",
      arDesc: "نبني هيكل الصفحات ونصممها بأسلوب متناسق.",
      enTitle: "Design & layout",
      enDesc: "We build the layout structure and design consistently.",
    },
    {
      arTitle: "مراجعة وتسليم نهائي",
      arDesc: "تعديلات نهائية ثم تسليم النسخ المطلوبة.",
      enTitle: "Review & deliver",
      enDesc: "Final revisions, then delivery in required formats.",
    },
  ],

  bestWork: [
  {
    titleAr: "الكمباني بروفايلز التي نفذناها",
    titleEn: "Company Profiles Collection",
    categoryAr: "بروفايل + لاي أوت",
    categoryEn: "Profile + Layout",
    driveUrl: "https://drive.google.com/drive/folders/1_MBXOv4Vf9CNatR13A2rzMVB3wRj4C7u",
  },
],

  faqs: [
    {
      qAr: "هل يمكنكم العمل على محتوى جاهز من العميل؟",
      aAr: "نعم، نستقبل المحتوى ونقوم بترتيبه وتنسيقه بما يناسب البروفايل.",
      qEn: "Can you work with client-provided content?",
      aEn: "Yes, we can structure and layout your provided content professionally.",
    },
    {
      qAr: "هل التسليم يكون للطباعة أم للاستخدام الرقمي؟",
      aAr: "نوفّر النسختين حسب الاحتياج: للطباعة ونسخة رقمية للعرض والإرسال.",
      qEn: "Do you deliver print or digital versions?",
      aEn: "Both—print-ready and digital versions based on your needs.",
    },
    {
      qAr: "هل يمكن تحديث الملف لاحقاً؟",
      aAr: "نعم، يمكن تسليم نسخة قابلة للتعديل حسب الاتفاق.",
      qEn: "Can the file be updated later?",
      aEn: "Yes, editable deliverables can be provided as agreed.",
    },
  ],
},

"video-shooting": {
  slug: "video-shooting",

  badgeAr: "الإنتاج المرئي السينمائي",
  badgeEn: "Video Shooting",

  heroTitleArTop: "نلتقط المشهد…",
  heroTitleArAccent: "ونصنع الحكاية",

  heroTitleEnTop: "We capture the scene…",
  heroTitleEnAccent: "And craft the story.",

  heroDescAr:
    "تصوير فيديو احترافي يُبرز التفاصيل ويترجم الرسالة إلى محتوى بصري مؤثر، مناسب للمنصات والحملات.",
  heroDescEn:
    "Professional video shooting that highlights details and transforms your message into impactful visual content.",

  whatYouGet: [
    { ar: "تصوير احترافي بجودة عالية وفق احتياج المشروع.", en: "High-quality shooting tailored to your project." },
    { ar: "تجهيز زوايا وإضاءة بما يخدم الفكرة.", en: "Angles and lighting set to support the concept." },
    { ar: "توجيه أثناء التصوير لضمان أفضل أداء ومشهد.", en: "On-set direction for best performance and shots." },
    { ar: "مقاسات مناسبة للمنصات عند الطلب (عمودي/أفقي).", en: "Platform formats upon request (vertical/landscape)." },
    { ar: "إمكانية تسليم المواد الخام أو ضمن باقة تصوير + مونتاج.", en: "Option to deliver raw footage or full shoot + edit." },
  ],

  process: [
    {
      arTitle: "تحديد الهدف والسيناريو",
      arDesc: "نفهم الفكرة ونحدد أسلوب التصوير والمخرجات المطلوبة.",
      enTitle: "Define goal & concept",
      enDesc: "We align on the idea, style, and required deliverables.",
    },
    {
      arTitle: "تنفيذ يوم التصوير",
      arDesc: "تنسيق اللقطات والإضاءة والزوايا لإخراج مشاهد قوية.",
      enTitle: "Production day",
      enDesc: "We execute shots, lighting, and angles for strong visuals.",
    },
    {
      arTitle: "تسليم المحتوى",
      arDesc: "تسليم المواد المطلوبة حسب الاتفاق وبالجودة المناسبة.",
      enTitle: "Deliver content",
      enDesc: "We deliver the agreed materials in the required quality.",
    },
  ],

  bestWork: [
  {
    titleAr: "وزارة العدل القطرية",
    titleEn: "Qatar Ministry of Justice",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/file/d/1xKKB63XHxgH0oOA_osjkunmKVC5zDTQB/view?usp=drivesdk",
  },
  {
    titleAr: "اللجنة الدائمة للقانون الدولي الإنساني – السعودية",
    titleEn: "Saudi IHL Standing Committee Project",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/file/d/1nduAkBZotwpLt0GErJBJIs8chgKIL3Uh/view?usp=drivesdk",
  },
  {
    titleAr: "المصباح المضيء – مؤسسة خيرية",
    titleEn: "Al-Misbah Al-Mudi Charity",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/drive/folders/1lGfrJRrMuR_mjOrsKSWLOZkQWh3NwuMt",
  },
  {
    titleAr: "ميكنج تسجيل فيلم كويتي (أنميشن)",
    titleEn: "Kuwaiti Animation Film Making-of",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/file/d/1tTifwE9zmMxJO3S5gO2_YUPhqA9GuJZU/view?usp=drivesdk",
  },
  {
    titleAr: "إعلانات شركة كوفتي العالمية (أكثر من ٩ دول)",
    titleEn: "Kofty Global Ads (9+ Countries)",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/drive/folders/1H2VRhUOnzPcAYqFy5rJln7Sq4AHUpLqU",
  },
  {
    titleAr: "مشاريع داخل استديوهات إميجنيشن (Drive)",
    titleEn: "In-Studio Projects (Drive)",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://drive.google.com/drive/folders/1RJFH43UszkKfiBNZBmlr6DNwETp6TBNp",
  },
  {
    titleAr: "مشاريع داخل استديوهات إميجنيشن (Facebook)",
    titleEn: "In-Studio Projects (Facebook)",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://www.facebook.com/share/1Dr3Bpox9W/",
  },
  {
    titleAr: "مشاريع مع شركة دايكن (Facebook)",
    titleEn: "Daikin Projects (Facebook)",
    categoryAr: "تصوير فيديو",
    categoryEn: "Video Shooting",
    driveUrl: "https://www.facebook.com/share/r/1CNmcCKcBo/",
  },
  ],

  faqs: [
    {
      qAr: "ما المدة المتوقعة لجلسة التصوير؟",
      aAr: "تختلف حسب طبيعة المشروع، لكن عادة تتراوح بين 4-8 ساعات.",
      qEn: "What's the expected shooting duration?",
      aEn: "It depends on the project scope, typically 4-8 hours per session.",
    },
    {
      qAr: "هل يتم توفير معدات التصوير؟",
      aAr: "نعم، نوفّر جميع المعدات والعدد اللازمة للتصوير.",
      qEn: "Do you provide filming equipment?",
      aEn: "Yes, we provide all necessary equipment and gear for shooting.",
    },
    {
      qAr: "هل يمكن الحصول على النسخة الخام؟",
      aAr: "نعم، يمكن تسليم المواد الخام أو ضمن باقة تصوير + مونتاج.",
      qEn: "Can we get raw footage?",
      aEn: "Yes, raw footage can be delivered or bundled with editing as needed.",
    },
  ],

},

photography: {
  slug: "photography",

  badgeAr: " التصوير الفوتوغرافي",
  badgeEn: "Photography",

  heroTitleArTop: "نُصوّر التفاصيل…",
  heroTitleArAccent: "لتتكلم عنك",

  heroTitleEnTop: "We capture details…",
  heroTitleEnAccent: "That speak for you.",

  heroDescAr:
    "تصوير فوتوغرافي احترافي يرفع قيمة المنتج والخدمة، ويصنع حضوراً بصرياً أنيقاً يعكس هوية العلامة.",
  heroDescEn:
    "Professional photography that elevates your product and builds a refined visual presence aligned with your brand.",

  whatYouGet: [
    { ar: "جلسات تصوير احترافية للمنتجات أو الأماكن أو الأشخاص.", en: "Professional shoots for products, spaces, or people." },
    { ar: "إعداد الإضاءة والزوايا بما يضمن نتائج أنيقة.", en: "Lighting and angles setup for refined results." },
    { ar: "معالجة وتحسين الصور (تصحيح ألوان/تفاصيل) عند الحاجة.", en: "Photo enhancement and color correction when needed." },
    { ar: "تسليم صور جاهزة للنشر بمقاسات متعددة.", en: "Platform-ready images in multiple sizes." },
    { ar: "ملفات عالية الجودة للاستخدام الرقمي والطباعة.", en: "High-resolution files for digital and print use." },
  ],

  process: [
    {
      arTitle: "تحديد الهدف والأسلوب",
      arDesc: "نحدد نوع التصوير والمرجع البصري وطريقة الإخراج.",
      enTitle: "Define style & goal",
      enDesc: "We align on photography style and visual direction.",
    },
    {
      arTitle: "تنفيذ جلسة التصوير",
      arDesc: "إعداد المشهد والإضاءة والتقاط اللقطات المطلوبة.",
      enTitle: "Shoot session",
      enDesc: "We set the scene, light, and capture required shots.",
    },
    {
      arTitle: "تحسين وتسليم الصور",
      arDesc: "اختيار الأفضل، تحسينها ثم تسليمها بالجودة المطلوبة.",
      enTitle: "Refine & deliver",
      enDesc: "We select, refine, and deliver final images.",
    },
  ],

  bestWork: [
  {
    titleAr: "مشاريع مختلفة في مجال التصوير",
    titleEn: "Photography Projects",
    categoryAr: "تصوير فوتو",
    categoryEn: "Photography",
    driveUrl: "https://drive.google.com/drive/folders/1J2tYrdwJhrK2mH3jS2J4A1OaXgHt0cm3",
  },
  {
    titleAr: "مشاريع تصوير متنوعة",
    titleEn: "Various Photography Projects",
    categoryAr: "تصوير فوتو",
    categoryEn: "Photography",
    driveUrl: "https://drive.google.com/drive/folders/16P4P5Yk63Ty3TZuz2Zt9kgU0qjshPov4",
  },
],

  faqs: [
    {
      qAr: "هل التصوير مناسب لمحتوى السوشيال ميديا؟",
      aAr: "نعم، نجهّز لقطات بمقاسات مناسبة للمنصات وبأسلوب جذّاب.",
      qEn: "Is it suitable for social media content?",
      aEn: "Yes, we deliver platform-optimized visuals with a strong look.",
    },
    {
      qAr: "هل تشمل الخدمة تعديل الصور؟",
      aAr: "يمكن تضمين تحسينات أساسية أو متقدمة حسب طبيعة المشروع.",
      qEn: "Does it include retouching?",
      aEn: "Basic or advanced retouching can be included depending on the project.",
    },
    {
      qAr: "متى يتم تسليم الصور؟",
      aAr: "يُحدد حسب عدد الصور وطبيعة المشروع، وباتفاق واضح قبل البدء.",
      qEn: "When are photos delivered?",
      aEn: "Depends on volume and scope, with a clear timeline agreed upfront.",
    },
  ],
},

"exterior-coverage": {
  slug: "exterior-coverage",

  badgeAr: " التغطيات الميدانيةوالفعاليات",
  badgeEn: "Exterior Coverage",

  heroTitleArTop: "نوثّق الحدث…",
  heroTitleArAccent: "ونحفظ أثره",

  heroTitleEnTop: "We cover your event…",
  heroTitleEnAccent: "And preserve its impact.",

  heroDescAr:
    "تغطيات ميدانية احترافية تُبرز تفاصيل الفعالية وتحوّلها إلى محتوى بصري جاهز للنشر والتوثيق.",
  heroDescEn:
    "Professional on-site coverage that captures key moments and delivers publish-ready content for documentation and media.",

  whatYouGet: [
    { ar: "تغطية فيديو/فوتو حسب طبيعة الفعالية.", en: "Video/photo coverage depending on the event." },
    { ar: "التقاط أبرز اللحظات مع مراعاة التفاصيل والهوية.", en: "Capturing key moments with attention to detail and brand." },
    { ar: "محتوى مناسب للنشر أثناء الفعالية أو بعدها (عند الطلب).", en: "Content suitable for posting during or after the event (upon request)." },
    { ar: "تسليم مواد جاهزة للاستخدام الإعلامي والتوثيقي.", en: "Deliverables ready for media and documentation." },
    { ar: "إمكانية تقديم التغطية ضمن باقة تصوير + مونتاج.", en: "Option for full coverage + editing package." },
  ],

  process: [
    {
      arTitle: "تجهيز خطة التغطية",
      arDesc: "نحدد مواعيد الفعالية، المواقع، ونقاط التصوير الأساسية.",
      enTitle: "Plan the coverage",
      enDesc: "We define timing, locations, and key capture points.",
    },
    {
      arTitle: "تنفيذ التغطية ميدانياً",
      arDesc: "التقاط اللحظات المهمة وتوثيق تفاصيل الحدث.",
      enTitle: "On-site execution",
      enDesc: "We capture key moments and event details on-site.",
    },
    {
      arTitle: "تسليم المحتوى",
      arDesc: "تسليم المواد حسب الاتفاق وبالمقاسات والصيغ المطلوبة.",
      enTitle: "Deliver content",
      enDesc: "We deliver the agreed outputs in required formats.",
    },
  ],

  bestWork: [
  {
    titleAr: "تغطية الاحتفال السنوي لشركة دايكن العالمية",
    titleEn: "Daikin Annual Celebration Coverage",
    categoryAr: "تغطيات خارجية",
    categoryEn: "Exterior Coverage",
    driveUrl: "https://drive.google.com/file/d/1rsp63X5U7oDvCv0ua4q7o4nM9AHdy1O8/view?usp=drivesdk",
  },
  {
    titleAr: "تغطية إيفنت أصوات عربية",
    titleEn: "Arab Voices Event Coverage",
    categoryAr: "تغطيات خارجية",
    categoryEn: "Exterior Coverage",
    driveUrl: "https://drive.google.com/file/d/1icDjzUK6hOWnJBEzDimFZHQzgBNnHglY/view?usp=drivesdk",
  },
  {
    titleAr: "تغطية تفاريح في القاهرة (Facebook)",
    titleEn: "Tafareeh Cairo Coverage (Facebook)",
    categoryAr: "تغطيات خارجية",
    categoryEn: "Exterior Coverage",
    driveUrl: "https://www.facebook.com/share/v/1EB8c5GiGD/",
  },
],

  faqs: [
    {
      qAr: "هل يمكن توفير محتوى سريع للنشر أثناء الفعالية؟",
      aAr: "نعم، عند الطلب يمكن تجهيز مقاطع/صور مختارة للنشر السريع.",
      qEn: "Can you provide fast content during the event?",
      aEn: "Yes, upon request we can prepare selected clips/photos for quick posting.",
    },
    {
      qAr: "هل التغطية تشمل المونتاج؟",
      aAr: "يمكن تقديم التغطية وحدها أو ضمن باقة تغطية + مونتاج حسب الاحتياج.",
      qEn: "Does coverage include editing?",
      aEn: "It can be coverage-only or full coverage + edit package.",
    },
    {
      qAr: "ما الذي يحدد مدة التغطية؟",
      aAr: "مدة الفعالية وعدد المواقع وطبيعة المخرجات المطلوبة.",
      qEn: "What determines coverage duration?",
      aEn: "Event length, locations, and the required deliverables.",
    },
  ],
},

"reels-shooting": {
  slug: "reels-shooting",

  badgeAr: "إنتاج المقاطع القصيرة",
  badgeEn: "Reels Shooting",

  heroTitleArTop: "نصنع لقطة…",
  heroTitleArAccent: "تخطف الانتباه",

  heroTitleEnTop: "We craft reels…",
  heroTitleEnAccent: "Built to catch attention.",

  heroDescAr:
    "تصوير ريلز بأسلوب سريع وحديث، مناسب للمنصات، مع تركيز على الإيقاع واللقطات التي ترفع التفاعل.",
  heroDescEn:
    "Modern, fast-paced reels shooting optimized for platforms—focused on rhythm and high-engagement shots.",

  whatYouGet: [
    { ar: "تصوير عمودي مخصص للريلز والتيك توك والشورتس.", en: "Vertical shooting for reels, TikTok, and shorts." },
    { ar: "تخطيط لقطات سريع يضمن رسالة واضحة.", en: "Fast shot planning for clear messaging." },
    { ar: "لقطات متنوعة (حركات/تفاصيل/زوايا) لرفع الإيقاع.", en: "Dynamic angles and detail shots to boost pacing." },
    { ar: "تجهيز مواد مناسبة لباقة تصوير + مونتاج عند الحاجة.", en: "Footage ready for shoot + edit packages when needed." },
    { ar: "مراعاة الهوية البصرية أثناء التصوير.", en: "Brand-aligned visuals during shooting." },
  ],

  process: [
    {
      arTitle: "تحديد الفكرة والهدف",
      arDesc: "نحدد نوع الريلز والرسالة والجمهور المستهدف.",
      enTitle: "Define concept",
      enDesc: "We define reel type, message, and target audience.",
    },
    {
      arTitle: "تصوير اللقطات المطلوبة",
      arDesc: "تنفيذ لقطات سريعة مع اهتمام بالتفاصيل والإيقاع.",
      enTitle: "Shoot the content",
      enDesc: "We capture fast, dynamic shots with strong pacing.",
    },
    {
      arTitle: "تسليم المحتوى",
      arDesc: "تسليم المواد حسب الاتفاق، أو تجهيزها للمونتاج.",
      enTitle: "Deliver materials",
      enDesc: "We deliver assets as agreed or prepare them for editing.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل الريلز يحتاج سكربت مسبق؟",
      aAr: "يفضل وجود فكرة واضحة، ويمكننا المساعدة في ترتيبها قبل التصوير.",
      qEn: "Do reels require a script?",
      aEn: "A clear idea helps, and we can help structure it before shooting.",
    },
    {
      qAr: "هل يتم التصوير عمودي فقط؟",
      aAr: "الأساس عمودي للريلز، ويمكن توفير نسخ أخرى حسب الحاجة.",
      qEn: "Is it vertical only?",
      aEn: "Primarily vertical for reels, with additional formats if needed.",
    },
    {
      qAr: "هل يشمل ذلك المونتاج؟",
      aAr: "يمكن تقديم التصوير وحده أو ضمن باقة تصوير + مونتاج.",
      qEn: "Does it include editing?",
      aEn: "It can be shooting-only or a full shoot + edit package.",
    },
  ],
},

montage: {
  slug: "montage",

  badgeAr: " المونتاج",
  badgeEn: "Post-Production",

  heroTitleArTop: "نرتّب اللقطات…",
  heroTitleArAccent: "ونصنع الإيقاع",

  heroTitleEnTop: "We shape the footage…",
  heroTitleEnAccent: "And build the rhythm.",

  heroDescAr:
    "مونتاج احترافي يُحسن السرد البصري، ويُبرز التفاصيل، ويقدّم محتوى متناسقاً يليق بالمنصة والهدف.",
  heroDescEn:
    "Professional post-production that enhances visual storytelling and delivers platform-ready, cohesive content.",

  whatYouGet: [
    { ar: "مونتاج بسرد بصري واضح وإيقاع متوازن.", en: "Editing with clear storytelling and balanced pacing." },
    { ar: "ترتيب اللقطات واختيار الأفضل بما يخدم الرسالة.", en: "Shot selection and sequencing to serve the message." },
    { ar: "تصحيح ألوان وتحسينات بصرية عند الحاجة.", en: "Color correction and visual refinements when needed." },
    { ar: "تحسينات صوتية أساسية (مستوى الصوت/نقاء) عند الحاجة.", en: "Basic audio improvements when needed." },
    { ar: "تسليم نسخ بالمقاسات المطلوبة للمنصات.", en: "Exports in required platform formats." },
  ],

  process: [
    {
      arTitle: "استلام المواد وتحديد الأسلوب",
      arDesc: "نراجع اللقطات ونحدد الإيقاع والمخرجات المطلوبة.",
      enTitle: "Review & direction",
      enDesc: "We review footage and define pacing and deliverables.",
    },
    {
      arTitle: "مونتاج أولي ومراجعة",
      arDesc: "نقدّم نسخة أولى للتحسين وفق الملاحظات.",
      enTitle: "First cut",
      enDesc: "We deliver a first cut and iterate with feedback.",
    },
    {
      arTitle: "تحسينات وتسليم نهائي",
      arDesc: "تصحيحات نهائية ثم تسليم بالجودة والمقاسات المطلوبة.",
      enTitle: "Finalize & deliver",
      enDesc: "Final refinements and exports in required formats.",
    },
  ],

  bestWork: [
  {
    titleAr: "برومو شو ما وراء المايك (٣ كاميرات)",
    titleEn: "Beyond the Mic Promo (3 Cameras)",
    categoryAr: "مونتاج",
    categoryEn: "Post-Production",
    driveUrl: "https://drive.google.com/file/d/1QnlW3PQHMqXtCq9Gu4U5jzATKiR3uwGH/view?usp=drivesdk",
  },
  {
    titleAr: "تصوير ومونتاج لثلاثة مطاعم (Food)",
    titleEn: "Food Restaurants – Filming & Editing",
    categoryAr: "مونتاج",
    categoryEn: "Post-Production",
    driveUrl: "https://drive.google.com/drive/folders/1FEwVuUvR8am-T6P__FC_KebJCJN6_N-q",
  },
  {
    titleAr: "فيديوهات من تصويرنا ومونتاجنا (Facebook)",
    titleEn: "Filming & Editing Reels (Facebook)",
    categoryAr: "مونتاج",
    categoryEn: "Post-Production",
    driveUrl: "https://www.facebook.com/share/r/17veXFnRN2/",
  },
],

  faqs: [
    {
      qAr: "هل يمكنكم العمل على مواد خام من العميل؟",
      aAr: "نعم، نستقبل المواد الخام ونقوم بإخراج نسخة نهائية وفق الهدف المطلوب.",
      qEn: "Can you work with client-provided raw footage?",
      aEn: "Yes, we can edit your raw footage into a polished final version.",
    },
    {
      qAr: "هل يتم تجهيز نسخ للمنصات المختلفة؟",
      aAr: "نعم، يمكن تسليم نسخ عمودية/مربعة/أفقية بحسب المنصة.",
      qEn: "Do you provide platform versions?",
      aEn: "Yes, we can export vertical/square/landscape versions as needed.",
    },
    {
      qAr: "هل تشمل الخدمة تعديلات؟",
      aAr: "نعم، وفق عدد التعديلات المتفق عليه قبل التسليم النهائي.",
      qEn: "Are revisions included?",
      aEn: "Yes, based on the agreed number of revisions before final delivery.",
    },
  ],
},

"voice-recording": {
  slug: "voice-recording",

  badgeAr: "الهندسة والتعليق الصوتي",
  badgeEn: "Voice Recording",

  heroTitleArTop: "نمنح الكلمات…",
  heroTitleArAccent: "صوتاً يليق",

  heroTitleEnTop: "We give words…",
  heroTitleEnAccent: "A voice that fits.",

  heroDescAr:
    "تسجيل صوتي واضح ومتقن يرفع جودة المحتوى ويمنح الرسالة حضوراً أقوى، مع خيارات تناسب طبيعة المشروع.",
  heroDescEn:
    "Clean, well-crafted voice recording that elevates your content and strengthens your message—tailored to your project.",

  whatYouGet: [
    { ar: "تسجيل صوتي بجودة عالية ونقاء واضح.", en: "High-quality voice recording with clear sound." },
    { ar: "خيارات أصوات رجالية أو نسائية بحسب المتاح.", en: "Male or female voice options (as available)." },
    { ar: "ضبط مستوى الصوت وتحسينه للاستخدام النهائي.", en: "Leveling and basic enhancement for final use." },
    { ar: "تسليم بصيغ مناسبة (WAV/MP3) حسب الحاجة.", en: "Delivery in suitable formats (WAV/MP3) as needed." },
    { ar: "إمكانية تنفيذ العمل ضمن باقة صوت + إنتاج/مونتاج.", en: "Option to bundle with production/editing packages." },
  ],

  process: [
    {
      arTitle: "تحديد النص والأسلوب",
      arDesc: "نراجع النص ونحدد نبرة الأداء والسرعة المناسبة.",
      enTitle: "Script & tone",
      enDesc: "We review the script and define tone and pacing.",
    },
    {
      arTitle: "تسجيل ومراجعة",
      arDesc: "تسجيل النسخة الأولى ومراجعتها قبل الاعتماد.",
      enTitle: "Record & review",
      enDesc: "We record the first take and review before approval.",
    },
    {
      arTitle: "تحسين وتسليم",
      arDesc: "تنظيف الصوت وتحسينه ثم تسليم النسخ المطلوبة.",
      enTitle: "Enhance & deliver",
      enDesc: "We clean, enhance, and deliver final files.",
    },
  ],

  bestWork: [
  {
    titleAr: "مشاريع مختلفة في مجال التعليق الصوتي",
    titleEn: "Voice Over Projects",
    categoryAr: "تسجيل صوتي",
    categoryEn: "Voice Recording",
    driveUrl: "https://drive.google.com/drive/folders/1PhTVZbYx7OazfKgv_a7_j6IFBgNtFjus",
  },
],

  faqs: [
    {
      qAr: "هل يمكن توفير أصوات مختلفة؟",
      aAr: "يمكن توفير أصوات رجالية أو نسائية بحسب المتاح وبما يناسب طبيعة المحتوى.",
      qEn: "Can you provide different voice options?",
      aEn: "Male or female options can be provided as available and suitable for the content.",
    },
    {
      qAr: "هل يشمل ذلك معالجة الصوت؟",
      aAr: "نعم، تتوفر تحسينات أساسية (تنظيف/موازنة مستوى الصوت) حسب الحاجة.",
      qEn: "Does it include audio processing?",
      aEn: "Yes, basic cleanup and leveling can be included as needed.",
    },
    {
      qAr: "ما صيغ التسليم؟",
      aAr: "نوفّر صيغاً مناسبة مثل WAV أو MP3 حسب الاستخدام.",
      qEn: "What formats do you deliver?",
      aEn: "Common formats such as WAV or MP3 depending on usage.",
    },
  ],
},

"ai-production": {
  slug: "ai-production",

  badgeAr: "الإنتاج بالذكاء الاصطناعي",
  badgeEn: "AI Production",

  heroTitleArTop: "نبتكر المحتوى…",
  heroTitleArAccent: "بذكاءٍ أسرع",

  heroTitleEnTop: "We create content…",
  heroTitleEnAccent: "Smarter. Faster.",

  heroDescAr:
    "إنتاج محتوى مدعوم بالذكاء الاصطناعي يفتح مساحة أكبر للإبداع ويُسرّع الإنجاز، مع الحفاظ على هوية العلامة وجودة المخرجات.",
  heroDescEn:
    "AI-assisted production that speeds up delivery and expands creativity—while keeping brand identity and output quality.",

  whatYouGet: [
    { ar: "إنتاج أفكار ومحتوى بصري وفق هدف الحملة.", en: "Visual concepts and content aligned with campaign goals." },
    { ar: "أساليب متنوعة تناسب المنصات والجمهور المستهدف.", en: "Multiple styles tailored to platforms and audience." },
    { ar: "تحسينات وتعديل مخرجات للوصول إلى نتيجة متقنة.", en: "Refinement and iterations to reach a polished result." },
    { ar: "تسليم نسخ جاهزة للنشر بالمقاسات المطلوبة.", en: "Platform-ready exports in required sizes." },
    { ar: "إمكانية دمج الإنتاج مع مونتاج/تصميم حسب الحاجة.", en: "Option to combine with editing/design when needed." },
  ],

  process: [
    {
      arTitle: "تحديد الهدف والأسلوب",
      arDesc: "نحدد الرسالة، المنصة، والأسلوب البصري المناسب.",
      enTitle: "Define goal & style",
      enDesc: "We align on message, platform, and visual direction.",
    },
    {
      arTitle: "إنتاج وتجارب متعددة",
      arDesc: "إنتاج نسخ متنوعة واختيار الأفضل وفق المخرجات المطلوبة.",
      enTitle: "Generate & iterate",
      enDesc: "We generate variations and iterate toward the best option.",
    },
    {
      arTitle: "تحسين وتسليم نهائي",
      arDesc: "تنقيح المخرجات ثم تسليم النسخ النهائية للنشر.",
      enTitle: "Refine & deliver",
      enDesc: "We refine and deliver final publish-ready outputs.",
    },
  ],

  bestWork: [
  {
    titleAr: "إنتاج بالذكاء الاصطناعي (سلسلة 50+)",
    titleEn: "AI Production Series (50+)",
    categoryAr: "إنتاج AI",
    categoryEn: "AI Production",
    driveUrl: "https://drive.google.com/drive/folders/1TCQ5lzSrYGMHUoCZmZxExHFceCJnzjQz",
  },
],

  faqs: [
    {
      qAr: "هل الإنتاج بالذكاء الاصطناعي مناسب للبراندات؟",
      aAr: "نعم، عند ضبط الأسلوب والهوية يمكن تقديم مخرجات متناسقة تناسب العلامة.",
      qEn: "Is AI production suitable for brands?",
      aEn: "Yes—when style and brand guidelines are set, outputs can be aligned with your identity.",
    },
    {
      qAr: "هل تتوفر تعديلات للوصول لنتيجة مناسبة؟",
      aAr: "نعم، يتم تحسين المخرجات عبر مراحل حتى الوصول للنسخة الأنسب.",
      qEn: "Do you offer iterations?",
      aEn: "Yes, we iterate and refine until we reach the best final version.",
    },
    {
      qAr: "هل يمكن دمجها مع مونتاج أو تصميم؟",
      aAr: "نعم، يمكن تقديمها ضمن باقات تشمل مونتاج/تصميم حسب طبيعة المشروع.",
      qEn: "Can it be combined with editing/design?",
      aEn: "Yes, it can be bundled with editing/design based on project needs.",
    },
  ],
},

"social-media-management": {
  slug: "social-media-management",

  badgeAr: "إدارة منصات التواصل الاجتماعي",
  badgeEn: "Social Media Management",

  heroTitleArTop: "ندير حضورك…",
  heroTitleArAccent: "بثباتٍ ووضوح",

  heroTitleEnTop: "We manage your presence…",
  heroTitleEnAccent: "Consistently.",

  heroDescAr:
    "إدارة صفحات تُحسن صورة العلامة، وتضمن انتظام النشر، وتقدّم محتوى منظماً يليق بالجمهور والمنصة.",
  heroDescEn:
    "Social media management that strengthens brand image, ensures consistent posting, and delivers organized content.",

  whatYouGet: [
    { ar: "تنظيم خطة نشر واضحة تناسب المنصات.", en: "A clear posting plan tailored to platforms." },
    { ar: "تنسيق المحتوى وتقديمه بأسلوب متناسق مع الهوية.", en: "Content presented consistently with brand identity." },
    { ar: "متابعة الرسائل والتعليقات حسب الاتفاق.", en: "Inbox and comments handling as agreed." },
    { ar: "تحسين طريقة العرض لرفع التفاعل تدريجياً.", en: "Optimizations to gradually improve engagement." },
    { ar: "تقارير مختصرة عن الأداء عند الحاجة.", en: "Concise performance reporting when needed." },
  ],

  process: [
    {
      arTitle: "فهم النشاط والجمهور",
      arDesc: "نحدد الهدف ونبرة الخطاب ونوع المحتوى المناسب.",
      enTitle: "Understand audience",
      enDesc: "We define goals, tone, and content direction.",
    },
    {
      arTitle: "إعداد الخطة والتنفيذ",
      arDesc: "تجهيز جدول المحتوى والنشر وفق إيقاع ثابت.",
      enTitle: "Plan & execute",
      enDesc: "We build the calendar and publish consistently.",
    },
    {
      arTitle: "متابعة وتحسين",
      arDesc: "مراجعة النتائج وتطوير الأداء وفق المؤشرات.",
      enTitle: "Review & improve",
      enDesc: "We monitor results and refine over time.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل تشمل الإدارة كتابة المحتوى والتصميم؟",
      aAr: "يمكن تقديمها ضمن باقة تشمل كتابة المحتوى والتصميم حسب الاحتياج.",
      qEn: "Does management include writing and design?",
      aEn: "It can be bundled with content writing and design based on needs.",
    },
    {
      qAr: "هل يتم تحديد عدد المنشورات شهرياً؟",
      aAr: "نعم، يُحدد عدد المنشورات والقصص وفق الباقة المتفق عليها.",
      qEn: "Is the monthly posting volume defined?",
      aEn: "Yes, posts and stories volume are defined based on the agreed package.",
    },
    {
      qAr: "هل تتوفر تقارير أداء؟",
      aAr: "نعم، يمكن تقديم تقارير مختصرة دورية بحسب الاتفاق.",
      qEn: "Do you provide performance reports?",
      aEn: "Yes, periodic concise reports can be provided as agreed.",
    },
  ],
},

"content-writing": {
  slug: "content-writing",

  badgeAr: "صناعة وتحريرر المحتوى الرقمي",
  badgeEn: "Content Writing",

  heroTitleArTop: "نكتب المعنى…",
  heroTitleArAccent: "بأسلوبٍ يقنع",

  heroTitleEnTop: "We write with meaning…",
  heroTitleEnAccent: "And clarity.",

  heroDescAr:
    "كتابة محتوى عربي فصيح يعبّر عن العلامة ويخاطب جمهورها بوضوح، مع صياغة تُوازن بين الجاذبية والدقة.",
  heroDescEn:
    "Clear, brand-aligned writing that communicates with purpose and balances appeal with accuracy.",

  whatYouGet: [
    { ar: "صياغة محتوى متناسق مع هوية العلامة ونبرة خطابها.", en: "Writing aligned with brand voice and identity." },
    { ar: "محتوى مناسب للمنصات (منشورات/وصف/نصوص قصيرة).", en: "Platform-ready copy (posts, descriptions, short texts)." },
    { ar: "تنويع الأساليب وفق الهدف (تعريفي/تسويقي/توعوي).", en: "Multiple tones based on goals (informative/marketing/educational)." },
    { ar: "تنظيم الأفكار واختصار الرسالة دون إخلال.", en: "Structured ideas and concise messaging without losing meaning." },
    { ar: "مراجعة لغوية وتدقيق أساسي قبل التسليم.", en: "Basic proofreading and language review before delivery." },
  ],

  process: [
    {
      arTitle: "فهم الهدف والجمهور",
      arDesc: "نحدد الرسالة ونبرة الخطاب وموضوعات المحتوى.",
      enTitle: "Define goal & audience",
      enDesc: "We define message, tone, and content topics.",
    },
    {
      arTitle: "كتابة وصياغة أولية",
      arDesc: "إعداد نصوص أولية ثم ترتيبها وفق خطة واضحة.",
      enTitle: "Draft writing",
      enDesc: "We create drafts and structure them into a plan.",
    },
    {
      arTitle: "مراجعة وتسليم",
      arDesc: "تدقيق وتحسين نهائي ثم تسليم المحتوى.",
      enTitle: "Refine & deliver",
      enDesc: "We refine, proofread, and deliver final copy.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل الكتابة تكون بالفصحى فقط؟",
      aAr: "نعم، نكتب بالفصحى، ويمكن تكييف الأسلوب بحسب طبيعة الجمهور عند الاتفاق.",
      qEn: "Is the writing only in Modern Standard Arabic?",
      aEn: "Yes, primarily MSA, with tone adjustments based on audience when agreed.",
    },
    {
      qAr: "هل تشمل الخدمة خطة محتوى؟",
      aAr: "يمكن تقديم كتابة المحتوى ضمن خطة نشر أو بشكل مستقل حسب الاحتياج.",
      qEn: "Does it include a content plan?",
      aEn: "It can be delivered with a posting plan or as standalone copy.",
    },
    {
      qAr: "هل تتوفر مراجعات قبل التسليم النهائي؟",
      aAr: "نعم، وفق عدد المراجعات المتفق عليه قبل التسليم.",
      qEn: "Are revisions included?",
      aEn: "Yes, based on the agreed number of revisions.",
    },
  ],
},

"script-writing": {
  slug: "script-writing",

  badgeAr: "كتابة السيناريو والحوار",
  badgeEn: "Script Writing",

  heroTitleArTop: "نصوغ الفكرة…",
  heroTitleArAccent: "على هيئة مشهد",

  heroTitleEnTop: "We shape ideas…",
  heroTitleEnAccent: "Into a scene.",

  heroDescAr:
    "كتابة اسكربتات مدروسة تُحسن السرد وتضمن وضوح الرسالة، مع بناء إيقاع مناسب لمحتوى الفيديو والريلز.",
  heroDescEn:
    "Structured scripts that improve storytelling and clarity—built with pacing suited for videos and reels.",

  whatYouGet: [
    { ar: "صياغة اسكربت واضح بفكرة ورسالة محددتين.", en: "Clear script with defined idea and message." },
    { ar: "بناء افتتاحية جذّابة ونهاية مؤثرة (عند الحاجة).", en: "Strong hook and closing when needed." },
    { ar: "تحديد تسلسل المشاهد أو اللقطات بشكل منظم.", en: "Organized sequence of scenes or shots." },
    { ar: "تكييف الإيقاع بحسب المنصة (ريلز/فيديو طويل).", en: "Pacing tailored to platform (reels/long-form)." },
    { ar: "نسخة نهائية جاهزة للتنفيذ والتصوير.", en: "Execution-ready final script." },
  ],

  process: [
    {
      arTitle: "فهم الهدف والجمهور",
      arDesc: "نحدد الرسالة ونبرة الأسلوب وطول المحتوى.",
      enTitle: "Define goal",
      enDesc: "We define message, tone, and content length.",
    },
    {
      arTitle: "كتابة مسودة أولى",
      arDesc: "صياغة الاسكربت وبناء التسلسل والإيقاع.",
      enTitle: "First draft",
      enDesc: "We write the script and build the flow and pacing.",
    },
    {
      arTitle: "مراجعة واعتماد",
      arDesc: "تحسين الصياغة ثم تسليم النسخة النهائية.",
      enTitle: "Refine & deliver",
      enDesc: "We refine the copy and deliver the final version.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل الاسكربت مناسب للريلز القصيرة؟",
      aAr: "نعم، يمكن كتابة اسكربتات قصيرة بإيقاع سريع تتناسب مع الريلز والمنصات.",
      qEn: "Can you write short reel scripts?",
      aEn: "Yes, we write short, fast-paced scripts optimized for reels.",
    },
    {
      qAr: "هل تشمل الخدمة فكرة المحتوى؟",
      aAr: "يمكن توفير أفكار مبدئية أو كتابة الاسكربت بناءً على فكرة جاهزة حسب الاتفاق.",
      qEn: "Does it include the content idea?",
      aEn: "We can provide initial concepts or write based on a ready idea, as agreed.",
    },
    {
      qAr: "هل يمكن تعديل الاسكربت قبل التنفيذ؟",
      aAr: "نعم، تتوفر مراجعات وفق عدد المراجعات المتفق عليه.",
      qEn: "Can the script be revised before production?",
      aEn: "Yes, revisions are included based on the agreed number.",
    },
  ],
},

"dialect-correction": {
  slug: "dialect-correction",

  badgeAr: "التدقيق اللغوي وضبط اللهجات",
  badgeEn: "Dialect Correction",

  heroTitleArTop: "نُنقّح الكلام…",
  heroTitleArAccent: "ليصل كما ينبغي",

  heroTitleEnTop: "We refine the wording…",
  heroTitleEnAccent: "So it lands right.",

  heroDescAr:
    "مراجعة لغوية وتصحيح لهجة بما يضمن سلاسة النص وملاءمته للجمهور المستهدف، مع الحفاظ على المعنى والهوية.",
  heroDescEn:
    "Language and dialect refinement to ensure smooth, audience-appropriate wording while preserving meaning and brand tone.",

  whatYouGet: [
    { ar: "تصحيح لهجة وصياغة تراعي الجمهور المستهدف.", en: "Dialect correction tailored to the target audience." },
    { ar: "تنقيح الأسلوب وتحسين السلاسة دون تغيير المعنى.", en: "Refined flow without changing the meaning." },
    { ar: "توحيد المصطلحات ونبرة الخطاب ضمن النص.", en: "Consistent terminology and tone across the text." },
    { ar: "مراجعة الأخطاء اللغوية الشائعة وتحسين التعبير.", en: "Fixing common language issues and enhancing phrasing." },
    { ar: "نسخة نهائية جاهزة للاستخدام أو التسجيل.", en: "Final version ready for publishing or recording." },
  ],

  process: [
    {
      arTitle: "استلام النص وتحديد الجمهور",
      arDesc: "نحدد نوع الجمهور ونبرة الخطاب المطلوبة.",
      enTitle: "Receive & define audience",
      enDesc: "We define audience type and desired tone.",
    },
    {
      arTitle: "تصحيح وتنقيح",
      arDesc: "مراجعة اللهجة، تحسين الصياغة، وتوحيد الأسلوب.",
      enTitle: "Correct & refine",
      enDesc: "We refine dialect, improve wording, and unify style.",
    },
    {
      arTitle: "مراجعة وتسليم",
      arDesc: "مراجعة نهائية ثم تسليم النسخة المعتمدة.",
      enTitle: "Review & deliver",
      enDesc: "Final review and delivery of the approved version.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل التصحيح يغيّر معنى النص؟",
      aAr: "لا، يتم الحفاظ على المعنى مع تحسين السلاسة وملاءمة اللهجة.",
      qEn: "Will correction change the meaning?",
      aEn: "No, we preserve meaning while improving flow and audience fit.",
    },
    {
      qAr: "هل الخدمة مناسبة لاسكربتات الفيديو؟",
      aAr: "نعم، يمكن تنقيح الاسكربت ليكون أسهل في الإلقاء وأكثر سلاسة.",
      qEn: "Is it suitable for video scripts?",
      aEn: "Yes, we refine scripts to be smoother and easier to deliver.",
    },
    {
      qAr: "هل يمكن تعديل النص أكثر من مرة؟",
      aAr: "نعم، تتوفر مراجعات وفق عدد المراجعات المتفق عليه.",
      qEn: "Can the text be revised more than once?",
      aEn: "Yes, revisions are available based on the agreed number.",
    },
  ],
},

marketing: {
  slug: "marketing",

  badgeAr: "التسويق الاستراتيجي المتكامل",
  badgeEn: "Marketing",

  heroTitleArTop: "نضع خطة…",
  heroTitleArAccent: "ونقود التنفيذ",

  heroTitleEnTop: "We plan…",
  heroTitleEnAccent: "And drive execution.",

  heroDescAr:
    "خدمات تسويق تُرتّب الأولويات وتبني حضوراً أوضح للعلامة، مع خطوات عملية ترفع الوصول وتُحسن النتائج تدريجياً.",
  heroDescEn:
    "Marketing services that clarify priorities, strengthen brand presence, and improve results through actionable steps.",

  whatYouGet: [
    { ar: "تحديد أهداف واضحة تناسب طبيعة النشاط.", en: "Clear goals aligned with your business." },
    { ar: "تخطيط حملات ومحتوى بما يخدم الهدف.", en: "Campaign and content planning toward the goal." },
    { ar: "تنظيم قنوات التسويق واختيار الأنسب.", en: "Selecting and organizing the most suitable channels." },
    { ar: "متابعة الأداء وتحسين الخطوات حسب النتائج.", en: "Monitoring performance and refining based on results." },
    { ar: "تقارير مختصرة وتوصيات تطوير عند الحاجة.", en: "Concise reports and recommendations when needed." },
  ],

  process: [
    {
      arTitle: "تحليل سريع وتحديد الهدف",
      arDesc: "نفهم النشاط والجمهور ونحدد الأولويات.",
      enTitle: "Assess & set goals",
      enDesc: "We review the business and define priorities.",
    },
    {
      arTitle: "بناء الخطة والتنفيذ",
      arDesc: "وضع خطة عملية ثم تنفيذها عبر القنوات المناسبة.",
      enTitle: "Plan & execute",
      enDesc: "We build a plan and execute across key channels.",
    },
    {
      arTitle: "مراجعة وتحسين",
      arDesc: "متابعة النتائج وتعديل المسار لتحسين الأداء.",
      enTitle: "Review & optimize",
      enDesc: "We monitor results and optimize over time.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل التسويق يشمل إدارة الحملات والإعلانات؟",
      aAr: "يمكن تقديمه ضمن باقة تشمل الحملات والإعلانات حسب الاحتياج.",
      qEn: "Does marketing include campaigns and ads?",
      aEn: "It can be bundled with campaigns and ads based on your needs.",
    },
    {
      qAr: "هل يمكن تحديد خطة شهرية واضحة؟",
      aAr: "نعم، يمكن إعداد خطة شهرية بمحتوى وخطوات تسويقية محددة.",
      qEn: "Can you set a clear monthly plan?",
      aEn: "Yes, we can create a monthly plan with defined actions and content.",
    },
    {
      qAr: "هل تتوفر متابعة وقياس نتائج؟",
      aAr: "نعم، يمكن توفير متابعة وتقارير مختصرة بحسب الاتفاق.",
      qEn: "Do you provide tracking and reporting?",
      aEn: "Yes, tracking and concise reporting can be provided as agreed.",
    },
  ],
},

"media-buying": {
  slug: "media-buying",

  badgeAr: "إدارة الحملات الإعلانية الممولة",
  badgeEn: "Media Buying",

  heroTitleArTop: "نستثمر الميزانية…",
  heroTitleArAccent: "بذكاءٍ أدق",

  heroTitleEnTop: "We invest your budget…",
  heroTitleEnAccent: "With precision.",

  heroDescAr:
    "إدارة الإعلانات الممولة بأسلوب يعتمد على التجربة والتحسين المستمر، بهدف رفع الوصول وتحسين التكلفة وتحقيق نتائج أوضح.",
  heroDescEn:
    "Paid ads management driven by testing and continuous optimization—improving reach, efficiency, and measurable results.",

  whatYouGet: [
    { ar: "إعداد الحملات الإعلانية وفق الهدف والجمهور.", en: "Campaign setup aligned with goals and audience." },
    { ar: "اختيار الشرائح والاستهداف بما يناسب النشاط.", en: "Targeting and audience selection tailored to your business." },
    { ar: "متابعة الأداء وتحسين النتائج تدريجياً.", en: "Monitoring performance and optimizing over time." },
    { ar: "اختبار أكثر من نسخة (رسائل/تصاميم) عند الحاجة.", en: "A/B testing of creatives and messaging when needed." },
    { ar: "تقارير مختصرة توضح أهم الأرقام والنتائج.", en: "Concise reports highlighting key metrics and outcomes." },
  ],

  process: [
    {
      arTitle: "تحديد الهدف والجمهور",
      arDesc: "تحديد ما نريد تحقيقه ومن نخاطب وكيف نقيس النجاح.",
      enTitle: "Define goal & audience",
      enDesc: "We define outcomes, audience, and success metrics.",
    },
    {
      arTitle: "إطلاق الحملة وتجربة النسخ",
      arDesc: "إطلاق الحملة وتجربة أكثر من صياغة/تصميم عند الحاجة.",
      enTitle: "Launch & test",
      enDesc: "We launch campaigns and test creatives as needed.",
    },
    {
      arTitle: "تحسين مستمر وتقرير",
      arDesc: "تحسين الاستهداف والميزانية ثم تقديم تقرير مختصر بالنتائج.",
      enTitle: "Optimize & report",
      enDesc: "We optimize spend and targeting, then report results.",
    },
  ],

  bestWork: [],

  faqs: [
    {
      qAr: "هل الميديا باينج تشمل إعداد المحتوى والتصميم؟",
      aAr: "يمكن تقديمها ضمن باقة تشمل التصميم وكتابة المحتوى حسب الاتفاق.",
      qEn: "Does media buying include content and design?",
      aEn: "It can be bundled with design and copywriting as agreed.",
    },
    {
      qAr: "هل تتوفر تقارير دورية؟",
      aAr: "نعم، يمكن تقديم تقارير مختصرة أسبوعية أو شهرية بحسب الاتفاق.",
      qEn: "Do you provide periodic reports?",
      aEn: "Yes, weekly or monthly concise reports can be provided as agreed.",
    },
    {
      qAr: "هل يتم تحسين الحملات بعد الإطلاق؟",
      aAr: "نعم، التحسين المستمر جزء أساسي من إدارة الإعلانات لتحقيق أفضل نتيجة.",
      qEn: "Do you optimize after launch?",
      aEn: "Yes, ongoing optimization is essential to achieve the best performance.",
    },
  ],
},



};
