"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  PenTool, 
  Image,
  Palette,
  Camera,
  Layers,
  Smartphone,
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

// Graphic Design Services Data
const designServices: Service[] = [
  {
    id: 1,
    title: "الهوية البصرية",
    description: "تصميم هويات بصرية متكاملة تعكس قيم علامتك التجارية وتميزها",
    icon: PenTool,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم شعار مميز وفريد",
      "نظام ألوان وخطوط متناسق",
      "قوالب للمطبوعات والمواد التسويقية",
      "دليل استخدام الهوية البصرية",
      "تطبيقات الهوية على مختلف المنصات"
    ]
  },
  {
    id: 2,
    title: "تصميم السوشيال ميديا",
    description: "تصميم منشورات جذابة ومتناسقة لمنصات التواصل الاجتماعي",
    icon: Image,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "تصميم منشورات متناسقة مع هويتك",
      "قوالب قابلة للتعديل والتخصيص",
      "تصميم صور الغلاف والبروفايل",
      "تصميم إعلانات السوشيال ميديا",
      "تصميم ستوري وريلز جذابة"
    ]
  },
  {
    id: 3,
    title: "تصميم المطبوعات",
    description: "تصميم مطبوعات احترافية تعزز صورة علامتك التجارية",
    icon: Palette,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "بطاقات العمل والأوراق الرسمية",
      "البروشورات والكتالوجات",
      "الملصقات والبانرات الإعلانية",
      "التغليف والعبوات",
      "المجلات والنشرات الدورية"
    ]
  },
  {
    id: 4,
    title: "التصوير الفوتوغرافي",
    description: "خدمات تصوير احترافية للمنتجات والفعاليات والأماكن",
    icon: Camera,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "تصوير المنتجات باحترافية",
      "تصوير الفعاليات والمناسبات",
      "تصوير الأماكن والمقرات",
      "تعديل وتحسين الصور",
      "إخراج الصور بجودة عالية"
    ]
  },
  {
    id: 5,
    title: "تصميم واجهات المستخدم",
    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام للمواقع والتطبيقات",
    icon: Layers,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم واجهات المواقع الإلكترونية",
      "تصميم واجهات التطبيقات",
      "تصميم نماذج أولية تفاعلية",
      "تحسين تجربة المستخدم",
      "تصميم متجاوب مع جميع الأجهزة"
    ]
  },
  {
    id: 6,
    title: "تصميم إعلانات الموبايل",
    description: "تصميم إعلانات جذابة للتطبيقات والمواقع المتوافقة مع الجوال",
    icon: Smartphone,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "بانرات إعلانية متحركة وثابتة",
      "إعلانات متوافقة مع مختلف الأحجام",
      "تصميم إعلانات تفاعلية",
      "تحسين معدلات النقر والتحويل",
      "تصميم متوافق مع معايير المنصات"
    ]
  }
];

// Featured Projects
const featuredProjects: ProjectProps[] = [
  {
    title: "هوية بصرية لشركة ناشئة",
    description: "تصميم هوية بصرية متكاملة لشركة تقنية ناشئة تشمل الشعار والألوان والخطوط",
    image: "/portfolio/design-project-1.jpg",
    tags: ["هوية بصرية", "شعار", "تصميم"]
  },
  {
    title: "حملة تسويقية على السوشيال ميديا",
    description: "تصميم مجموعة متكاملة من المنشورات لحملة تسويقية على منصات التواصل الاجتماعي",
    image: "/portfolio/design-project-2.jpg",
    tags: ["سوشيال ميديا", "تسويق", "إعلانات"]
  },
  {
    title: "تصميم كتالوج منتجات",
    description: "تصميم كتالوج منتجات احترافي لشركة أزياء يعرض مجموعتها الجديدة",
    image: "/portfolio/design-project-3.jpg",
    tags: ["مطبوعات", "كتالوج", "تصميم"]
  }
];

// Extended Portfolio Projects - Add more projects for pagination
const allPortfolioProjects: ProjectProps[] = [
  ...featuredProjects,
  {
    title: "تصميم موقع إلكتروني",
    description: "تصميم واجهة مستخدم لموقع إلكتروني لشركة خدمات مالية",
    image: "/portfolio/design-project-4.jpg",
    tags: ["UI/UX", "موقع إلكتروني", "تصميم"]
  },
  {
    title: "تصميم تطبيق جوال",
    description: "تصميم واجهة مستخدم لتطبيق جوال لخدمات التوصيل",
    image: "/portfolio/design-project-5.jpg",
    tags: ["تطبيقات", "UI/UX", "تصميم"]
  },
  {
    title: "هوية بصرية لمطعم",
    description: "تصميم هوية بصرية متكاملة لسلسلة مطاعم جديدة",
    image: "/portfolio/design-project-6.jpg",
    tags: ["هوية بصرية", "مطاعم", "شعار"]
  },
  {
    title: "تصميم عبوات منتجات",
    description: "تصميم عبوات منتجات لشركة مستحضرات تجميل طبيعية",
    image: "/portfolio/design-project-7.jpg",
    tags: ["تغليف", "منتجات", "تصميم"]
  },
  {
    title: "تصميم بروشور تعريفي",
    description: "تصميم بروشور تعريفي لشركة استشارات هندسية",
    image: "/portfolio/design-project-8.jpg",
    tags: ["مطبوعات", "بروشور", "تصميم"]
  },
  {
    title: "تصميم منشورات إعلانية",
    description: "تصميم سلسلة منشورات إعلانية لحملة تسويقية على فيسبوك وانستغرام",
    image: "/portfolio/design-project-9.jpg",
    tags: ["إعلانات", "سوشيال ميديا", "تصميم"]
  },
  {
    title: "تصميم معرض افتراضي",
    description: "تصميم معرض افتراضي ثلاثي الأبعاد لعرض منتجات شركة أثاث",
    image: "/portfolio/design-project-10.jpg",
    tags: ["3D", "معارض", "تصميم"]
  },
  {
    title: "تصميم مجلة إلكترونية",
    description: "تصميم مجلة إلكترونية متخصصة في مجال الموضة والأزياء",
    image: "/portfolio/design-project-11.jpg",
    tags: ["نشر إلكتروني", "مجلات", "تصميم"]
  },
  {
    title: "تصميم لوحات إعلانية",
    description: "تصميم مجموعة لوحات إعلانية خارجية لحملة تسويقية",
    image: "/portfolio/design-project-12.jpg",
    tags: ["إعلانات خارجية", "لوحات", "تصميم"]
  },
  {
    title: "تصميم تقرير سنوي",
    description: "تصميم تقرير سنوي احترافي لشركة استثمارية",
    image: "/portfolio/design-project-13.jpg",
    tags: ["تقارير", "مطبوعات", "تصميم"]
  },
  {
    title: "تصميم قوالب عروض تقديمية",
    description: "تصميم قوالب عروض تقديمية احترافية لشركة استشارات",
    image: "/portfolio/design-project-14.jpg",
    tags: ["عروض تقديمية", "قوالب", "تصميم"]
  },
  {
    title: "تصميم أغلفة كتب",
    description: "تصميم مجموعة أغلفة كتب لدار نشر متخصصة",
    image: "/portfolio/design-project-15.jpg",
    tags: ["كتب", "أغلفة", "تصميم"]
  },
  {
    title: "تصميم بطاقات أعمال",
    description: "تصميم بطاقات أعمال وأوراق رسمية لشركة محاماة",
    image: "/portfolio/design-project-16.jpg",
    tags: ["هوية بصرية", "مطبوعات", "تصميم"]
  },
  {
    title: "تصميم منيو مطعم",
    description: "تصميم منيو احترافي لمطعم فاخر مع تصوير المنتجات",
    image: "/portfolio/design-project-17.jpg",
    tags: ["مطاعم", "منيو", "تصميم"]
  },
  {
    title: "تصميم تقويم سنوي",
    description: "تصميم تقويم سنوي لشركة كبرى كهدية للعملاء",
    image: "/portfolio/design-project-18.jpg",
    tags: ["تقويم", "هدايا", "تصميم"]
  },
  {
    title: "تصميم شعارات متنوعة",
    description: "تصميم مجموعة شعارات لشركات ناشئة في مختلف المجالات",
    image: "/portfolio/design-project-19.jpg",
    tags: ["شعارات", "هوية بصرية", "تصميم"]
  },
  {
    title: "تصميم موقع متجر إلكتروني",
    description: "تصميم واجهة مستخدم لمتجر إلكتروني متخصص في الأزياء",
    image: "/portfolio/design-project-20.jpg",
    tags: ["UI/UX", "متاجر إلكترونية", "تصميم"]
  }
];

// Design Tools Component
function DesignTools() {
  const tools = [
    { name: "Adobe Photoshop", icon: "/tools/photoshop.svg" },
    { name: "Adobe Illustrator", icon: "/tools/illustrator.svg" },
    { name: "Adobe XD", icon: "/tools/xd.svg" },
    { name: "Figma", icon: "/tools/figma.svg" },
    { name: "Adobe InDesign", icon: "/tools/indesign.svg" },
    { name: "Adobe After Effects", icon: "/tools/after-effects.svg" }
  ];

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">البرامج والأدوات التي نستخدمها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md flex items-center justify-center mb-3">
                <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
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
              className="text-xs py-1 px-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700 p-0 h-auto">
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">معــرض <span className="text-[#fabc05]">أعــمــالــنــا</span></h2>
          <p className="text-muted-foreground">
            نــمــاذج مــن أحــدث تــصــامــيــمــنــا الــتــي نــفــذنــاهــا لــعــمــلائــنــا فــي مــخــتــلــف المــجــالات
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
                  : 'text-[#fabc05] hover:bg-[#fabc05]/10'
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
                    ? 'bg-[#fabc05] text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-[#fabc05]/10'
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
                  : 'text-[#fabc05] hover:bg-[#fabc05]/10'
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

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glowing elements */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#fabc05]/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#fabc05]/20 blur-3xl opacity-30"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#fabc05] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">خــدمــات التــصــمــيــم</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              تــصــمــيــم <span className="text-[#fabc05] pulse-glow">جــرافــيــك</span> 
              <br className="hidden md:block" />إبــداعــي ومــؤثــر
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              نــقــدم خــدمــات تــصــمــيــم جــرافــيــك احــتــرافــيــة تــجــمــع بــيــن الإبــداع والاحــتــرافــيــة لــتــعــزيــز هــويــة عــلامــتــك التــجــاريــة
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#fabc05] hover:bg-[#fabc05]/90">
                طلب عرض سعر
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#fabc05] text-[#fabc05] hover:bg-[#fabc05]/10">
                تصفح أعمالنا
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">خــدمــات <span className="text-[#fabc05]">التــصــمــيــم</span> المــتــمــيــزة</h2>
            <p className="text-muted-foreground">
              نــقــدم بــاقــة مــتــنــوعــة مــن خــدمــات التــصــمــيــم الاحــتــرافــيــة الــتــي تــلــبــي احــتــيــاجــات عــمــلائــنــا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Design Tools Section */}
      <DesignTools />
      
      {/* Portfolio Gallery Section with Pagination */}
      <PortfolioGallery />
      
      {/* Design Process */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">مــراحــل <span className="text-[#fabc05]">التــصــمــيــم</span></h2>
            <p className="text-muted-foreground">
              نــتــبــع مــنــهــجــيــة احــتــرافــيــة فــي تــنــفــيــذ مــشــاريــع التــصــمــيــم لــضــمــان أفــضــل النــتــائــج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <span className="text-xl font-bold text-[#fabc05]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الــبــحــث والاســتــكــشــاف</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــبــدأ بــفــهــم هــويــتــك وأهــدافــك وجــمــهــورك المــســتــهــدف والبــحــث عــن أفــضــل الاتــجــاهــات التــصــمــيــمــيــة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#eb4236]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <span className="text-xl font-bold text-[#eb4236]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الأفــكــار والمــفــاهــيــم</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــطــور مــجــمــوعــة مــن الأفــكــار والمــفــاهــيــم التــصــمــيــمــيــة المــبــتــكــرة الــتــي تــنــاســب احــتــيــاجــاتــك
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#186cf2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186cf2]/20">
                <span className="text-xl font-bold text-[#186cf2]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــنــفــيــذ والتــطــويــر</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــقــوم بــتــنــفــيــذ التــصــمــيــم وتــطــويــره بــنــاءً عــلــى مــلاحــظــاتــك واحــتــيــاجــاتــك حــتــى الــوصــول للــنــتــيــجــة المــثــالــيــة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#34a853]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#34a853]/20">
                <span className="text-xl font-bold text-[#34a853]">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــســلــيــم والتــطــبــيــق</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــســلــم التــصــامــيــم النــهــائــيــة بــمــخــتــلــف الصــيــغ المــطــلــوبــة مــع دلــيــل إرشــادي لــكــيــفــيــة اســتــخــدامــهــا
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaBanner
        title="جــاهــز لــتــطــويــر هــويــتــك البــصــريــة؟"
        description="تــواصــل مــعــنــا الآن لــمــنــاقــشــة مــشــروعــك وتــقــديــم تــصــامــيــم إبــداعــيــة تــنــاســب عــلامــتــك التــجــاريــة"
        buttonText="طــلــب عــرض ســعــر"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  )
} 