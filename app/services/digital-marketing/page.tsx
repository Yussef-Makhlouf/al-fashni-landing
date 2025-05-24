"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Megaphone, 
  BarChart,
  Search,
  Mail,
  Share2,
  BarChart2,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { CtaBanner } from "@/components/cta-banner"

// Interface definitions
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  features: string[];
}

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

// Digital Marketing Services Data
const marketingServices: Service[] = [
  {
    id: 1,
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "إدارة احترافية لحسابات التواصل الاجتماعي وإنشاء محتوى جذاب",
    icon: Share2,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "خطة محتوى شهرية متكاملة",
      "تصميم منشورات جذابة",
      "التفاعل مع الجمهور وبناء المجتمع",
      "تحليل أداء المنصات وتحسينه",
      "إدارة الإعلانات المدفوعة"
    ]
  },
  {
    id: 2,
    title: "إعلانات مدفوعة",
    description: "إدارة حملات إعلانية مدفوعة على مختلف المنصات بكفاءة عالية",
    icon: Megaphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "إعلانات Google و Facebook و Instagram",
      "استهداف دقيق للجمهور المناسب",
      "تصميم إعلانات جذابة",
      "تحسين معدلات التحويل",
      "تقارير أداء مفصلة"
    ]
  },
  {
    id: 3,
    title: "تحسين محركات البحث (SEO)",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
    icon: Search,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
    features: [
      "تحليل الكلمات المفتاحية",
      "تحسين المحتوى وبنية الموقع",
      "بناء الروابط الخلفية",
      "تحسين السرعة والأداء التقني",
      "تقارير شهرية للمتابعة"
    ]
  },
  {
    id: 4,
    title: "التسويق عبر البريد الإلكتروني",
    description: "حملات بريدية مخصصة لبناء علاقات دائمة مع عملائك",
    icon: Mail,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "بناء قوائم بريدية عالية الجودة",
      "تصميم قوالب بريد جذابة",
      "تخصيص المحتوى حسب شرائح العملاء",
      "أتمتة الحملات البريدية",
      "تحليل نسب الفتح والنقر"
    ]
  },
  {
    id: 5,
    title: "استراتيجيات التسويق الرقمي",
    description: "وضع استراتيجيات تسويقية متكاملة لتحقيق أهدافك التجارية",
    icon: BarChart,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تحليل السوق والمنافسين",
      "تحديد الجمهور المستهدف",
      "اختيار القنوات التسويقية المناسبة",
      "وضع خطة تنفيذية مفصلة",
      "قياس النتائج وتحسين الأداء"
    ]
  },
  {
    id: 6,
    title: "التحليلات وقياس الأداء",
    description: "تقارير تحليلية مفصلة لقياس أداء حملاتك وتحسينها باستمرار",
    icon: BarChart2,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "إعداد وتكوين أدوات التحليل",
      "تتبع مؤشرات الأداء الرئيسية",
      "تحليل سلوك المستخدمين",
      "قياس عائد الاستثمار للحملات",
      "تقارير دورية مع توصيات"
    ]
  }
];

// Featured Projects
const featuredProjects: ProjectProps[] = [
  {
    title: "حملة تسويقية متكاملة",
    description: "استراتيجية تسويقية متكاملة لشركة ناشئة حققت زيادة في المبيعات بنسبة 150%",
    image: "/portfolio/marketing-project-1.jpg",
    tags: ["استراتيجية", "حملات إعلانية", "سوشيال ميديا"]
  },
  {
    title: "تحسين محركات البحث",
    description: "تحسين موقع إلكتروني لشركة خدمات مما أدى لزيادة الزيارات العضوية بنسبة 200%",
    image: "/portfolio/marketing-project-2.jpg",
    tags: ["SEO", "محتوى", "تحليلات"]
  },
  {
    title: "إدارة منصات التواصل الاجتماعي",
    description: "إدارة حسابات التواصل الاجتماعي لعلامة تجارية مع زيادة التفاعل بنسبة 300%",
    image: "/portfolio/marketing-project-3.jpg",
    tags: ["سوشيال ميديا", "محتوى", "إدارة"]
  }
];

// Extended Portfolio Projects - Add more projects for pagination
const allPortfolioProjects: ProjectProps[] = [
  ...featuredProjects,
  {
    title: "حملة إعلانية لمنتج جديد",
    description: "تصميم وإدارة حملة إعلانية لإطلاق منتج جديد حققت وصولاً لأكثر من مليون مستخدم",
    image: "/portfolio/marketing-project-4.jpg",
    tags: ["إعلانات مدفوعة", "فيسبوك", "انستغرام"]
  },
  {
    title: "استراتيجية محتوى لمدونة",
    description: "تطوير استراتيجية محتوى متكاملة لمدونة شركة تقنية مع زيادة الزيارات بنسبة 250%",
    image: "/portfolio/marketing-project-5.jpg",
    tags: ["محتوى", "SEO", "تحويل"]
  },
  {
    title: "حملة بريد إلكتروني",
    description: "تصميم وتنفيذ حملة بريد إلكتروني تسويقية حققت نسبة فتح 35% ونسبة نقر 12%",
    image: "/portfolio/marketing-project-6.jpg",
    tags: ["بريد إلكتروني", "تسويق", "تحويل"]
  },
  {
    title: "إدارة حملات جوجل الإعلانية",
    description: "إدارة حملات إعلانية على محرك بحث جوجل مع تحسين معدل التحويل بنسبة 80%",
    image: "/portfolio/marketing-project-7.jpg",
    tags: ["جوجل أدز", "SEM", "تحويل"]
  },
  {
    title: "استراتيجية تسويق المحتوى",
    description: "تطوير استراتيجية تسويق محتوى متكاملة لشركة عقارية مع زيادة العملاء المحتملين بنسبة 120%",
    image: "/portfolio/marketing-project-8.jpg",
    tags: ["محتوى", "استراتيجية", "عملاء محتملين"]
  },
  {
    title: "حملة علاقات عامة رقمية",
    description: "تنفيذ حملة علاقات عامة رقمية لشركة ناشئة مع تغطية إعلامية في أكثر من 15 منصة",
    image: "/portfolio/marketing-project-9.jpg",
    tags: ["علاقات عامة", "تغطية إعلامية", "سمعة"]
  },
  {
    title: "تسويق عبر المؤثرين",
    description: "تنفيذ حملة تسويق عبر المؤثرين لعلامة تجارية في مجال الأزياء مع وصول لأكثر من 2 مليون متابع",
    image: "/portfolio/marketing-project-10.jpg",
    tags: ["مؤثرين", "انستغرام", "تيك توك"]
  },
  {
    title: "تحسين معدل التحويل",
    description: "تحسين معدل التحويل لموقع تجارة إلكترونية مع زيادة المبيعات بنسبة 65%",
    image: "/portfolio/marketing-project-11.jpg",
    tags: ["CRO", "تحليلات", "مبيعات"]
  },
  {
    title: "استراتيجية السوشيال ميديا",
    description: "تطوير استراتيجية سوشيال ميديا متكاملة لعلامة تجارية في مجال الأغذية",
    image: "/portfolio/marketing-project-12.jpg",
    tags: ["سوشيال ميديا", "استراتيجية", "محتوى"]
  },
  {
    title: "حملة يوتيوب إعلانية",
    description: "إدارة حملة إعلانية على منصة يوتيوب مع معدل مشاهدة كاملة بنسبة 45%",
    image: "/portfolio/marketing-project-13.jpg",
    tags: ["يوتيوب", "فيديو", "إعلانات"]
  },
  {
    title: "تسويق عبر البودكاست",
    description: "تنفيذ استراتيجية تسويق عبر البودكاست لشركة خدمات مالية مع وصول لشريحة جديدة من العملاء",
    image: "/portfolio/marketing-project-14.jpg",
    tags: ["بودكاست", "محتوى صوتي", "رعاية"]
  },
  {
    title: "إعادة تصميم موقع لتحسين التحويل",
    description: "إعادة تصميم صفحات هبوط لموقع خدمي مع زيادة معدل التحويل بنسبة 85%",
    image: "/portfolio/marketing-project-15.jpg",
    tags: ["تصميم", "UX", "تحويل"]
  },
  {
    title: "تسويق المحتوى البصري",
    description: "استراتيجية تسويق محتوى بصري على منصة انستغرام مع زيادة التفاعل بنسبة 200%",
    image: "/portfolio/marketing-project-16.jpg",
    tags: ["محتوى بصري", "انستغرام", "تفاعل"]
  },
  {
    title: "حملة إطلاق تطبيق",
    description: "حملة تسويقية متكاملة لإطلاق تطبيق جديد مع أكثر من 50 ألف تحميل في الشهر الأول",
    image: "/portfolio/marketing-project-17.jpg",
    tags: ["تطبيقات", "إطلاق", "ASO"]
  },
  {
    title: "تسويق محتوى فيديو",
    description: "استراتيجية تسويق محتوى فيديو قصير على منصات التواصل الاجتماعي",
    image: "/portfolio/marketing-project-18.jpg",
    tags: ["فيديو", "محتوى قصير", "ريلز"]
  },
  {
    title: "تسويق عبر الواقع المعزز",
    description: "تنفيذ حملة تسويقية باستخدام تقنيات الواقع المعزز لعلامة تجارية في مجال الأثاث",
    image: "/portfolio/marketing-project-19.jpg",
    tags: ["واقع معزز", "تقنية", "تفاعل"]
  },
  {
    title: "استراتيجية التسويق الشامل",
    description: "تطوير استراتيجية تسويق شاملة لشركة ناشئة مع تحقيق نمو بنسبة 300% خلال عام",
    image: "/portfolio/marketing-project-20.jpg",
    tags: ["استراتيجية", "نمو", "تسويق متكامل"]
  }
];

// Marketing Platforms Component
function MarketingPlatforms() {
  const platforms = [
    { name: "Facebook", icon: "/platforms/facebook.svg" },
    { name: "Instagram", icon: "/platforms/instagram.svg" },
    { name: "Twitter", icon: "/platforms/twitter.svg" },
    { name: "LinkedIn", icon: "/platforms/linkedin.svg" },
    { name: "TikTok", icon: "/platforms/tiktok.svg" },
    { name: "Google Ads", icon: "/platforms/google-ads.svg" },
    { name: "YouTube", icon: "/platforms/youtube.svg" },
    { name: "Snapchat", icon: "/platforms/snapchat.svg" }
  ];

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">المنصات التي نعمل عليها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md flex items-center justify-center mb-3">
                <img src={platform.icon} alt={platform.name} className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.bgColor}`}>
          <service.icon className={`h-7 w-7 ${service.color}`} />
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs py-1 px-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0 h-auto">
          عرض التفاصيل
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

// Portfolio Gallery with Pagination Component
function PortfolioGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Calculate total pages
  const totalPages = Math.ceil(allPortfolioProjects.length / projectsPerPage);
  
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allPortfolioProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">معــرض <span className="text-[#34a853]">أعــمــالــنــا</span></h2>
          <p className="text-muted-foreground">
            نــمــاذج مــن أحــدث الــحــمــلات التــســويــقــيــة الــتــي نــفــذنــاهــا لــعــمــلائــنــا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-1">
            <button 
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md flex items-center justify-center ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#34a853] hover:bg-[#34a853]/10'
              }`}
              aria-label="Previous page"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 rounded-md flex items-center justify-center ${
                  currentPage === number
                    ? 'bg-[#34a853] text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-[#34a853]/10'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button 
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md flex items-center justify-center ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#34a853] hover:bg-[#34a853]/10'
              }`}
              aria-label="Next page"
            >
              <ArrowRight className="h-5 w-5 transform rotate-180" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

// Stats Component
function MarketingStats() {
  const stats = [
    { value: "300%", label: "متوسط زيادة المبيعات" },
    { value: "200%", label: "زيادة في الزيارات العضوية" },
    { value: "150%", label: "زيادة في التفاعل" },
    { value: "50%", label: "تخفيض تكلفة الاستحواذ" }
  ];

  return (
    <div className="py-16 bg-[#34a853]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">النــتــائــج <span className="text-[#34a853]">الــتــي نــحــقــقــهــا</span></h2>
          <p className="text-muted-foreground">
            نــحــن نــقــيــس نــجــاحــنــا مــن خــلال النــتــائــج الــتــي نــحــقــقــهــا لــعــمــلائــنــا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#34a853] mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glowing elements */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#34a853]/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#186af2]/20 blur-3xl opacity-30"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#34a853] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">خــدمــات التــســويــق</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              تــســويــق <span className="text-[#34a853] pulse-glow">رقــمــي</span> 
              <br className="hidden md:block" />يــحــقــق نــتــائــج فــعــالــة
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              نــقــدم حــلــول تــســويــقــيــة مــتــكــامــلــة تــســاعــد عــلامــتــك التــجــاريــة عــلــى النــمــو وزيــادة المــبــيــعــات وبــنــاء حــضــور قــوي عــبــر الإنــتــرنــت
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#34a853] hover:bg-[#34a853]/90">
                طلب استراتيجية تسويقية
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#34a853] text-[#34a853] hover:bg-[#34a853]/10">
                تصفح نتائجنا
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">خــدمــات <span className="text-[#34a853]">التــســويــق</span> المــتــمــيــزة</h2>
            <p className="text-muted-foreground">
              نــقــدم بــاقــة مــتــنــوعــة مــن خــدمــات التــســويــق الــرقــمــي الــتــي تــلــبــي احــتــيــاجــات عــمــلائــنــا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Marketing Platforms Section */}
      <MarketingPlatforms />
      
      {/* Stats Section */}
      <MarketingStats />
      
      {/* Portfolio Gallery Section with Pagination */}
      <PortfolioGallery />
      
      {/* Marketing Process */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">مــنــهــجــيــتــنــا <span className="text-[#34a853]">التــســويــقــيــة</span></h2>
            <p className="text-muted-foreground">
              نــتــبــع مــنــهــجــيــة مــدروســة فــي تــنــفــيــذ الــحــمــلات التــســويــقــيــة لــضــمــان تــحــقــيــق أفــضــل النــتــائــج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#34a853]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#34a853]/20">
                <span className="text-xl font-bold text-[#34a853]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الــتــحــلــيــل والــدراســة</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــبــدأ بــتــحــلــيــل الــســوق والــمــنــافــســيــن وفــهــم جــمــهــورك المــســتــهــدف وأهــدافــك التــجــاريــة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186af2]/20">
                <span className="text-xl font-bold text-[#186af2]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">وضــع الاســتــراتــيــجــيــة</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــطــور اســتــراتــيــجــيــة تــســويــقــيــة مــتــكــامــلــة تــنــاســب أهــدافــك وتــحــدد الــقــنــوات والــرســائــل الــمــنــاســبــة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#ea4235]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#ea4235]/20">
                <span className="text-xl font-bold text-[#ea4235]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــنــفــيــذ والإطــلاق</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــنــفــذ الــحــمــلات التــســويــقــيــة عــلــى الــقــنــوات الــمــخــتــارة مــع الالــتــزام بــالــجــودة والــجــدول الــزمــنــي
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <span className="text-xl font-bold text-[#fabc05]">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الــمــراقــبــة والتــحــســيــن</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــراقــب أداء الــحــمــلات بــاســتــمــرار ونــحــلــل البــيــانــات لتــحــســيــن النــتــائــج وتــعــظــيــم عــائــد الاســتــثــمــار
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaBanner
        title="جــاهــز لــتــنــمــيــة أعــمــالــك عــبــر الإنــتــرنــت؟"
        description="تــواصــل مــعــنــا الآن لــمــنــاقــشــة احــتــيــاجــاتــك التــســويــقــيــة وتــطــويــر اســتــراتــيــجــيــة مــخــصــصــة لــك"
        buttonText="طــلــب اســتــشــارة مــجــانــيــة"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  )
} 