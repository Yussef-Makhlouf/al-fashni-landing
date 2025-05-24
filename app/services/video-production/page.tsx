"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Video, 
  Film,
  Tv,
  Play,
  Music,
  Mic,
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

// Video Production Services Data
const videoServices: Service[] = [
  {
    id: 1,
    title: "إنتاج الفيديوهات الإعلانية",
    description: "إنتاج فيديوهات إعلانية احترافية تعزز صورة علامتك التجارية",
    icon: Video,
    color: "text-[#eb4438]",
    bgColor: "bg-[#eb4438]/10",
    features: [
      "كتابة السيناريو والنص",
      "التصوير الاحترافي",
      "المونتاج والمؤثرات البصرية",
      "تصحيح الألوان",
      "إضافة الموسيقى والمؤثرات الصوتية"
    ]
  },
  {
    id: 2,
    title: "إنتاج الريلز والمحتوى القصير",
    description: "إنتاج محتوى فيديو قصير وجذاب لمنصات التواصل الاجتماعي",
    icon: Film,
    color: "text-[#eb4236]",
    bgColor: "bg-[#eb4236]/10",
    features: [
      "أفكار إبداعية للمحتوى",
      "تصوير احترافي",
      "مونتاج سريع وديناميكي",
      "إضافة النصوص والعناوين",
      "تحسين للمشاركة والتفاعل"
    ]
  },
  {
    id: 3,
    title: "فيديوهات المنتجات",
    description: "عرض منتجاتك بطريقة احترافية تبرز مميزاتها وفوائدها",
    icon: Play,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصوير المنتج من زوايا متعددة",
      "إظهار المميزات والتفاصيل",
      "إضافة الشروحات والتعليقات",
      "تصميم مقدمة ونهاية احترافية",
      "تحسين جودة الصورة والصوت"
    ]
  },
  {
    id: 4,
    title: "موشن جرافيك",
    description: "تصميم فيديوهات رسوم متحركة تشرح أفكارك بطريقة مبسطة وجذابة",
    icon: Tv,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
    features: [
      "تطوير السيناريو والقصة",
      "تصميم الشخصيات والعناصر",
      "تحريك العناصر والرسوم",
      "إضافة المؤثرات الصوتية",
      "تصدير بجودة عالية"
    ]
  },
  {
    id: 5,
    title: "المؤثرات الصوتية",
    description: "إضافة مؤثرات صوتية وموسيقى تعزز تأثير الفيديو وتحسن تجربة المشاهدة",
    icon: Music,
    color: "text-[#eb4438]",
    bgColor: "bg-[#eb4438]/10",
    features: [
      "اختيار الموسيقى المناسبة",
      "إضافة المؤثرات الصوتية",
      "تحسين جودة الصوت",
      "مزج الصوت والموسيقى",
      "معالجة الصوت وتنقيته"
    ]
  },
  {
    id: 6,
    title: "التعليق الصوتي",
    description: "خدمات تسجيل صوتي احترافي بأصوات عربية وأجنبية مميزة",
    icon: Mic,
    color: "text-[#eb4236]",
    bgColor: "bg-[#eb4236]/10",
    features: [
      "اختيار الصوت المناسب",
      "تسجيل في استديو احترافي",
      "تحرير وتنقية الصوت",
      "توافر أصوات متنوعة",
      "تسليم بصيغ متعددة"
    ]
  }
];

// Featured Projects
const featuredProjects: ProjectProps[] = [
  {
    title: "فيديو إعلاني لمنتج جديد",
    description: "إنتاج فيديو إعلاني قصير لإطلاق منتج جديد في السوق",
    image: "/portfolio/video-project-1.jpg",
    tags: ["إعلان", "مونتاج", "تصوير"]
  },
  {
    title: "سلسلة ريلز تسويقية",
    description: "إنتاج سلسلة من الريلز القصيرة للترويج لخدمات الشركة على انستغرام",
    image: "/portfolio/video-project-2.jpg",
    tags: ["ريلز", "سوشيال ميديا", "تسويق"]
  },
  {
    title: "فيديو موشن جرافيك تعليمي",
    description: "تصميم فيديو موشن جرافيك لشرح خدمات الشركة بطريقة مبسطة وجذابة",
    image: "/portfolio/video-project-3.jpg",
    tags: ["موشن جرافيك", "رسوم متحركة", "تعليمي"]
  }
];

// Video Equipment Component
function VideoEquipment() {
  const equipments = [
    { name: "كاميرات احترافية", icon: "/equipment/camera.svg" },
    { name: "إضاءة استوديو", icon: "/equipment/lighting.svg" },
    { name: "معدات صوت", icon: "/equipment/audio.svg" },
    { name: "استوديو تسجيل", icon: "/equipment/studio.svg" },
    { name: "أجهزة تثبيت", icon: "/equipment/stabilizer.svg" },
    { name: "برامج مونتاج", icon: "/equipment/editing.svg" },
    { name: "درون للتصوير الجوي", icon: "/equipment/drone.svg" },
    { name: "شاشة خضراء", icon: "/equipment/greenscreen.svg" }
  ];

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">المعدات والتقنيات التي نستخدمها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {equipments.map((equipment, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md flex items-center justify-center mb-3">
                <img src={equipment.icon} alt={equipment.name} className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium text-center">{equipment.name}</span>
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
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs py-1 px-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 p-0 h-auto">
          مشاهدة الفيديو
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function VideoProductionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glowing elements */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#eb4438]/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#eb4236]/20 blur-3xl opacity-30"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#eb4438] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">خــدمــات الفــيــديــو</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              إنــتــاج <span className="text-[#eb4438] pulse-glow">فــيــديــو</span> 
              <br className="hidden md:block" />احــتــرافــي ومــؤثــر
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              نــقــدم خــدمــات إنــتــاج فــيــديــو وريــلــز احــتــرافــيــة تــجــمــع بــيــن الإبــداع والــجــودة الــعــالــيــة لــتــحــقــيــق أهــدافــك التــســويــقــيــة
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#eb4438] hover:bg-[#eb4438]/90">
                طلب عرض سعر
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#eb4438] text-[#eb4438] hover:bg-[#eb4438]/10">
                مشاهدة أعمالنا
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">خــدمــات <span className="text-[#eb4438]">الفــيــديــو</span> المــتــمــيــزة</h2>
            <p className="text-muted-foreground">
              نــقــدم بــاقــة مــتــنــوعــة مــن خــدمــات إنــتــاج الفــيــديــو والمــونــتــاج الاحــتــرافــي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Equipment Section */}
      <VideoEquipment />
      
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">أعــمــالــنــا <span className="text-[#eb4438]">المــمــيــزة</span></h2>
            <p className="text-muted-foreground">
              نــمــاذج مــن أحــدث الفــيــديــوهــات الــتــي أنــتــجــنــاهــا لــعــمــلائــنــا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-[#eb4438] hover:bg-[#eb4438]/90">
              <Link href="/portfolio">
                مشاهدة جميع الأعمال
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Production Process */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">مــراحــل <span className="text-[#eb4438]">الإنــتــاج</span></h2>
            <p className="text-muted-foreground">
              نــتــبــع مــنــهــجــيــة احــتــرافــيــة فــي تــنــفــيــذ مــشــاريــع إنــتــاج الفــيــديــو لــضــمــان أفــضــل النــتــائــج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#eb4438]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#eb4438]/20">
                <span className="text-xl font-bold text-[#eb4438]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">مــا قــبــل الإنــتــاج</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــضــع الخــطــة وكــتــابــة الســيــنــاريــو وتــحــديــد الــمــيــزانــيــة والــجــدول الــزمــنــي والــتــحــضــيــر للــتــصــويــر
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <span className="text-xl font-bold text-[#fabc05]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــصــويــر والإنــتــاج</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــنــفــذ عــمــلــيــة التــصــويــر بــاســتــخــدام أحــدث الــمــعــدات والتــقــنــيــات وفــريــق عــمــل مــحــتــرف
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186af2]/20">
                <span className="text-xl font-bold text-[#186af2]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">المــونــتــاج والتــحــريــر</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــقــوم بــمــونــتــاج الفــيــديــو وإضــافــة الــمــؤثــرات والــمــوســيــقــى والتــعــلــيــق الصــوتــي
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#34a853]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#34a853]/20">
                <span className="text-xl font-bold text-[#34a853]">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــســلــيــم والنــشــر</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــســلــم الفــيــديــو النــهــائــي بــالصــيــغ الــمــطــلــوبــة ونــســاعــد فــي نــشــره عــلــى الــمــنــصــات الــمــنــاســبــة
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaBanner
        title="جــاهــز لإنــتــاج فــيــديــو مــمــيــز؟"
        description="تــواصــل مــعــنــا الآن لــمــنــاقــشــة مــشــروعــك وتــقــديــم أفــكــار إبــداعــيــة تــنــاســب أهــدافــك التــســويــقــيــة"
        buttonText="طــلــب عــرض ســعــر"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  )
} 