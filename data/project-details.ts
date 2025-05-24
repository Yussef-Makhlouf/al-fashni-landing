// Project details type definition
export type ProjectDetails = {
  timeframe?: string
  teamSize?: number
  technologies?: string[]
  objectives?: string[]
  achievements?: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  gallery?: string[]
}

// Project details data
export const projectDetails: Record<number, ProjectDetails> = {
  1: {
    timeframe: "3 أشهر",
    teamSize: 5,
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    objectives: [
      "تطوير واجهة مستخدم سهلة الاستخدام ومتجاوبة مع جميع الأجهزة",
      "تحسين سرعة تحميل الموقع وأدائه",
      "تكامل مع أنظمة الدفع وقواعد البيانات",
      "تطوير لوحة تحكم إدارية متكاملة"
    ],
    achievements: [
      "زيادة في معدل تحويل الزوار بنسبة 35%",
      "تحسين تجربة المستخدم وسهولة التنقل في الموقع",
      "زيادة في متوسط وقت البقاء على الموقع بنسبة 42%",
      "تحسين الأداء وسرعة التحميل بنسبة 60%"
    ],
    testimonial: {
      quote: "لقد تخطى فريق العمل توقعاتنا في هذا المشروع. ساهم الموقع الجديد في تعزيز تواجدنا الرقمي وزيادة المبيعات بشكل ملحوظ.",
      author: "محمد السعيد",
      position: "المدير التنفيذي، شركة التقنية المتطورة"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Screenshot1",
      "/placeholder.svg?height=600&width=800&text=Screenshot2",
      "/placeholder.svg?height=600&width=800&text=Screenshot3"
    ]
  },
  2: {
    timeframe: "4 أشهر",
    teamSize: 6,
    technologies: ["React", "Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    objectives: [
      "تطوير متجر إلكتروني متكامل مع نظام دفع آمن",
      "إنشاء نظام إدارة مخزون فعال",
      "تحسين تجربة التسوق على جميع الأجهزة",
      "تكامل مع منصات التواصل الاجتماعي"
    ],
    achievements: [
      "زيادة المبيعات بنسبة 50% في الربع الأول",
      "تقليل معدل التخلي عن عربة التسوق بنسبة 30%",
      "زيادة متوسط قيمة الطلب بنسبة 25%",
      "تحسين معدل الاحتفاظ بالعملاء بنسبة 40%"
    ],
    testimonial: {
      quote: "ساعدنا المتجر الإلكتروني الجديد على توسيع نطاق أعمالنا وخدمة عملاء جدد. نحن سعداء جدًا بالنتائج.",
      author: "سارة الخالدي",
      position: "مديرة التسويق، مؤسسة الأناقة للأزياء"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Ecommerce1",
      "/placeholder.svg?height=600&width=800&text=Ecommerce2",
      "/placeholder.svg?height=600&width=800&text=Ecommerce3"
    ]
  },
  3: {
    timeframe: "2 أشهر",
    teamSize: 3,
    technologies: ["Meta Ads", "Google Ads", "Twitter Ads", "تحليلات البيانات"],
    objectives: [
      "زيادة الوعي بالعلامة التجارية للمطعم",
      "زيادة عدد الزوار للمطعم",
      "تعزيز المبيعات من خلال عروض خاصة",
      "بناء قاعدة عملاء مخلصين"
    ],
    achievements: [
      "زيادة المبيعات بنسبة 40% خلال فترة الحملة",
      "زيادة عدد المتابعين على منصات التواصل الاجتماعي بنسبة 65%",
      "زيادة معدل التفاعل مع المحتوى بنسبة 80%",
      "زيادة عدد الزيارات للموقع بنسبة 120%"
    ],
    testimonial: {
      quote: "كانت الحملة التسويقية ناجحة بشكل كبير، وتجاوزت توقعاتنا من حيث النتائج والعائد على الاستثمار.",
      author: "أحمد الناصر",
      position: "مالك مطعم الشرق"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Campaign1",
      "/placeholder.svg?height=600&width=800&text=Campaign2",
      "/placeholder.svg?height=600&width=800&text=Campaign3"
    ]
  },
  5: {
    timeframe: "1.5 شهر",
    teamSize: 4,
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    objectives: [
      "تصميم هوية بصرية تعكس قيم الشركة ورؤيتها",
      "تطوير شعار مميز وسهل التذكر",
      "إنشاء دليل هوية متكامل",
      "تصميم تطبيقات الهوية على مختلف المواد"
    ],
    achievements: [
      "زيادة التعرف على العلامة التجارية بنسبة 45%",
      "تحسين الانطباع العام عن الشركة لدى العملاء",
      "توحيد جميع المواد التسويقية تحت هوية موحدة",
      "تعزيز الثقة في العلامة التجارية"
    ],
    testimonial: {
      quote: "الهوية البصرية الجديدة تعكس تمامًا رؤيتنا وقيمنا. لقد تلقينا ردود فعل إيجابية من عملائنا وشركائنا.",
      author: "فهد العتيبي",
      position: "الرئيس التنفيذي، مجموعة الاستثمار العربية"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Branding1",
      "/placeholder.svg?height=600&width=800&text=Branding2",
      "/placeholder.svg?height=600&width=800&text=Branding3",
      "/placeholder.svg?height=600&width=800&text=Branding4"
    ]
  },
  6: {
    timeframe: "3 أشهر",
    teamSize: 7,
    technologies: ["إنتاج فيديو", "تصميم جرافيك", "وسائل التواصل الاجتماعي", "إعلانات مطبوعة"],
    objectives: [
      "زيادة الوعي بالمنتج الجديد",
      "إبراز المميزات الفريدة للمنتج",
      "استهداف الفئة المناسبة من المستهلكين",
      "تحقيق مبيعات قوية في فترة الإطلاق"
    ],
    achievements: [
      "تحقيق 120% من هدف المبيعات المستهدف خلال الشهر الأول",
      "وصول الإعلانات لأكثر من مليون مشاهدة",
      "معدل تفاعل مرتفع مع المحتوى بنسبة 8.5%",
      "زيادة الوعي بالعلامة التجارية بنسبة 35%"
    ],
    testimonial: {
      quote: "كانت الحملة الإعلانية ناجحة بكل المقاييس، وساهمت بشكل كبير في نجاح إطلاق منتجنا الجديد.",
      author: "ليلى الصالح",
      position: "مديرة التسويق، شركة المنتجات الاستهلاكية"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Advertising1",
      "/placeholder.svg?height=600&width=800&text=Advertising2",
      "/placeholder.svg?height=600&width=800&text=Advertising3"
    ]
  },
  7: {
    timeframe: "6 أشهر",
    teamSize: 3,
    technologies: ["SEO", "تحليلات جوجل", "بناء الروابط", "تحسين المحتوى"],
    objectives: [
      "تحسين ترتيب الموقع في محركات البحث",
      "زيادة عدد الزيارات العضوية",
      "تحسين معدل التحويل",
      "بناء استراتيجية محتوى متكاملة"
    ],
    achievements: [
      "زيادة الزيارات العضوية بنسبة 150%",
      "تحسين ترتيب أكثر من 50 كلمة مفتاحية للصفحة الأولى",
      "زيادة معدل التحويل بنسبة 25%",
      "تقليل معدل الارتداد بنسبة 35%"
    ],
    testimonial: {
      quote: "النتائج التي حققها فريق تحسين محركات البحث تجاوزت توقعاتنا بكثير. شهدنا زيادة كبيرة في عدد الطلاب المسجلين من خلال البحث العضوي.",
      author: "د. نوال الجاسم",
      position: "مديرة أكاديمية التعليم الافتراضي"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=SEO1",
      "/placeholder.svg?height=600&width=800&text=SEO2",
      "/placeholder.svg?height=600&width=800&text=SEO3"
    ]
  },
  8: {
    timeframe: "5 أشهر",
    teamSize: 8,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "AWS"],
    objectives: [
      "تطوير منصة تعليمية متكاملة سهلة الاستخدام",
      "دعم مختلف أنواع المحتوى التعليمي",
      "توفير أدوات تفاعلية للمدرسين والطلاب",
      "ضمان أمان البيانات وخصوصيتها"
    ],
    achievements: [
      "إطلاق المنصة قبل الموعد المحدد بأسبوعين",
      "استيعاب أكثر من 10,000 طالب خلال الشهر الأول",
      "معدل رضا المستخدمين 4.8/5",
      "تقليل وقت تحميل الصفحات بنسبة 60% مقارنة بالنظام القديم"
    ],
    testimonial: {
      quote: "المنصة التعليمية الجديدة غيرت طريقة تفاعل الطلاب مع المحتوى التعليمي. سهولة الاستخدام والأدوات التفاعلية ساهمت في تحسين تجربة التعلم بشكل كبير.",
      author: "د. سلطان العمري",
      position: "وكيل وزارة التعليم للتعليم الإلكتروني"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=LMS1",
      "/placeholder.svg?height=600&width=800&text=LMS2",
      "/placeholder.svg?height=600&width=800&text=LMS3",
      "/placeholder.svg?height=600&width=800&text=LMS4"
    ]
  },
  10: {
    timeframe: "2.5 شهر",
    teamSize: 4,
    technologies: ["Figma", "Sketch", "Adobe XD", "Principle", "InVision"],
    objectives: [
      "تصميم واجهة مستخدم جذابة وسهلة الاستخدام",
      "تحسين تجربة المستخدم وتبسيط العمليات المالية",
      "تطوير نماذج تفاعلية للاختبار مع المستخدمين",
      "ضمان توافق التصميم مع معايير الأمان المصرفية"
    ],
    achievements: [
      "تقليل الوقت اللازم لإتمام المعاملات بنسبة 40%",
      "زيادة معدل استخدام التطبيق بنسبة 65%",
      "تحسين معدل رضا المستخدمين من 3.2/5 إلى 4.7/5",
      "تقليل عدد الاستفسارات والشكاوى بنسبة 50%"
    ],
    testimonial: {
      quote: "التصميم الجديد للتطبيق سهل على عملائنا إدارة أموالهم بطريقة أكثر كفاءة وبساطة. لقد تلقينا الكثير من الإشادات من العملاء حول التجربة الجديدة.",
      author: "خالد المنصور",
      position: "مدير قسم المنتجات الرقمية، بنك المستقبل"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=UIUX1",
      "/placeholder.svg?height=600&width=800&text=UIUX2",
      "/placeholder.svg?height=600&width=800&text=UIUX3"
    ]
  },
  11: {
    timeframe: "4 أشهر",
    teamSize: 6,
    technologies: ["React", "Next.js", "Three.js", "PostgreSQL", "AWS", "Tailwind CSS"],
    objectives: [
      "تطوير موقع متميز يعكس فخامة العقارات المعروضة",
      "إنشاء نظام بحث متقدم بخصائص متعددة",
      "دمج تقنيات عرض ثلاثية الأبعاد للعقارات",
      "تطوير لوحة تحكم سهلة الاستخدام للإدارة"
    ],
    achievements: [
      "زيادة معدل التحويل بنسبة 45%",
      "زيادة متوسط وقت البقاء على الموقع بنسبة 70%",
      "تقليل معدل الارتداد بنسبة 35%",
      "زيادة عدد الاستفسارات عن العقارات بنسبة 80%"
    ],
    testimonial: {
      quote: "الموقع الجديد نقل تجربة تصفح العقارات إلى مستوى آخر. أصبح عملاؤنا يستمتعون بمشاهدة العقارات بتقنية ثلاثية الأبعاد قبل زيارتها، مما وفر الكثير من الوقت والجهد.",
      author: "عبدالله الفهد",
      position: "المدير العام، دار الخليج للعقارات"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=RealEstate1",
      "/placeholder.svg?height=600&width=800&text=RealEstate2",
      "/placeholder.svg?height=600&width=800&text=RealEstate3"
    ]
  },
  12: {
    timeframe: "3 أشهر",
    teamSize: 5,
    technologies: ["إدارة المحتوى", "SEO", "إنتاج فيديو", "كتابة محتوى"],
    objectives: [
      "تطوير استراتيجية محتوى متكاملة",
      "إنشاء محتوى تثقيفي عن التأمين",
      "تعزيز تواجد الشركة كخبير في مجال التأمين",
      "زيادة التفاعل مع العملاء المحتملين"
    ],
    achievements: [
      "زيادة حركة المرور العضوية بنسبة 120%",
      "زيادة معدل التحويل بنسبة 35%",
      "تحسين ترتيب الموقع في محركات البحث",
      "زيادة عدد المشتركين في النشرة الإخبارية بنسبة 75%"
    ],
    testimonial: {
      quote: "المحتوى الذي تم إنتاجه كان دقيقًا ومفيدًا وجذابًا. لقد ساعدنا على التواصل مع عملائنا بطريقة أفضل وتثقيفهم حول منتجات التأمين المختلفة.",
      author: "منى الصالح",
      position: "مديرة التسويق، شركة التأمين المتحدة"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=Content1",
      "/placeholder.svg?height=600&width=800&text=Content2",
      "/placeholder.svg?height=600&width=800&text=Content3"
    ]
  },
  13: {
    timeframe: "6 أشهر",
    teamSize: 8,
    technologies: ["Figma", "React", "User Testing", "أبحاث المستخدمين", "تحليل البيانات"],
    objectives: [
      "تحسين تجربة المستخدم للخدمات الحكومية الإلكترونية",
      "تبسيط الإجراءات وتقليل الخطوات اللازمة",
      "جعل الخدمات أكثر سهولة للاستخدام لجميع الفئات",
      "دعم إمكانية الوصول لذوي الاحتياجات الخاصة"
    ],
    achievements: [
      "تقليل الوقت اللازم لإتمام الخدمات بنسبة 60%",
      "زيادة معدل إكمال الخدمات الإلكترونية بنسبة 75%",
      "تقليل الاتصالات بمركز الدعم بنسبة 45%",
      "زيادة رضا المستخدمين من 3.1/5 إلى 4.8/5"
    ],
    testimonial: {
      quote: "كان مشروع تحسين تجربة المستخدم ناجحًا بشكل كبير. أصبحت الخدمات الحكومية الآن أكثر سهولة وكفاءة، مما أدى إلى زيادة كبيرة في معدل استخدام المنصة الرقمية.",
      author: "م. سعود الدوسري",
      position: "وكيل وزارة الخدمات الرقمية للتحول الرقمي"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=GovUX1",
      "/placeholder.svg?height=600&width=800&text=GovUX2",
      "/placeholder.svg?height=600&width=800&text=GovUX3",
      "/placeholder.svg?height=600&width=800&text=GovUX4"
    ]
  },
  14: {
    timeframe: "3.5 شهر",
    teamSize: 7,
    technologies: ["React", "Next.js", "Stripe", "Algolia", "Tailwind CSS", "Sanity.io"],
    objectives: [
      "تطوير متجر إلكتروني متكامل لمنتجات التجميل",
      "إنشاء نظام توصيات ذكي",
      "تكامل مع وسائل التواصل الاجتماعي",
      "تطوير تجربة تسوق سلسة على جميع الأجهزة"
    ],
    achievements: [
      "زيادة المبيعات بنسبة 65% خلال الربع الأول",
      "زيادة متوسط قيمة السلة بنسبة 30%",
      "تقليل معدل التخلي عن عربة التسوق بنسبة 40%",
      "زيادة معدل العودة للشراء بنسبة 55%"
    ],
    testimonial: {
      quote: "المتجر الإلكتروني الجديد غير طريقة تفاعل عملائنا مع منتجاتنا. نظام التوصيات الذكي ساهم بشكل كبير في زيادة المبيعات وتحسين تجربة التسوق.",
      author: "نورة العلي",
      position: "المديرة التنفيذية، جمال للتجميل"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=BeautyShop1",
      "/placeholder.svg?height=600&width=800&text=BeautyShop2",
      "/placeholder.svg?height=600&width=800&text=BeautyShop3"
    ]
  },
  15: {
    timeframe: "2 أشهر",
    teamSize: 6,
    technologies: ["إنتاج فيديو", "إخراج", "تصوير", "مونتاج", "تصحيح ألوان"],
    objectives: [
      "إنتاج سلسلة فيديوهات احترافية لسلسلة مطاعم",
      "إبراز جودة الطعام والخدمة المقدمة",
      "خلق محتوى جذاب قابل للمشاركة",
      "تعزيز الهوية البصرية للعلامة التجارية"
    ],
    achievements: [
      "وصول الفيديوهات لأكثر من 2 مليون مشاهدة",
      "زيادة المتابعين على منصات التواصل الاجتماعي بنسبة 85%",
      "زيادة حجوزات المطاعم بنسبة 40%",
      "زيادة التفاعل مع المحتوى بنسبة 120%"
    ],
    testimonial: {
      quote: "الفيديوهات التي تم إنتاجها كانت رائعة وعكست بشكل دقيق جودة طعامنا وأجواء مطاعمنا. شهدنا زيادة كبيرة في عدد الزوار الجدد الذين ذكروا أنهم تعرفوا علينا من خلال الفيديوهات.",
      author: "محمد العبدالله",
      position: "مؤسس سلسلة مطاعم البيت"
    },
    gallery: [
      "/placeholder.svg?height=600&width=800&text=FoodVideo1",
      "/placeholder.svg?height=600&width=800&text=FoodVideo2",
      "/placeholder.svg?height=600&width=800&text=FoodVideo3"
    ]
  }
} 