"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Globe, 
  Code,
  Server,
  Database,
  ShoppingCart,
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

// Web Development Services Data
const webDevServices: Service[] = [
  {
    id: 1,
    title: "تطوير مواقع الويب",
    description: "تصميم وتطوير مواقع ويب متجاوبة وعصرية تعمل على جميع الأجهزة",
    icon: Globe,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم واجهات مستخدم جذابة",
      "توافق مع جميع أحجام الشاشات",
      "سرعة تحميل عالية",
      "تحسين لمحركات البحث",
      "سهولة الاستخدام والتنقل"
    ]
  },
  {
    id: 2,
    title: "تطوير التطبيقات",
    description: "تطوير تطبيقات ويب متقدمة بأحدث التقنيات والإطارات البرمجية",
    icon: Code,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "تطبيقات الويب أحادية الصفحة",
      "واجهات برمجة تطبيقات RESTful",
      "تكامل مع خدمات الطرف الثالث",
      "أنظمة إدارة المحتوى المخصصة",
      "لوحات تحكم متقدمة"
    ]
  },
  {
    id: 3,
    title: "تطوير المتاجر الإلكترونية",
    description: "إنشاء متاجر إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون",
    icon: ShoppingCart,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "تكامل مع بوابات الدفع المختلفة",
      "إدارة المنتجات والمخزون",
      "سلة تسوق وعملية شراء سلسة",
      "نظام تتبع الطلبات",
      "تقارير المبيعات والتحليلات"
    ]
  },
  {
    id: 4,
    title: "خدمات الاستضافة والخوادم",
    description: "حلول استضافة موثوقة وآمنة مع دعم فني على مدار الساعة",
    icon: Server,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
    features: [
      "استضافة سحابية عالية الأداء",
      "إعداد وتكوين الخوادم",
      "نسخ احتياطية منتظمة",
      "شهادات SSL مجانية",
      "حماية من هجمات DDoS"
    ]
  },
  {
    id: 5,
    title: "قواعد البيانات والتخزين",
    description: "تصميم وإدارة قواعد بيانات فعالة وقابلة للتوسع",
    icon: Database,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم هيكل قواعد البيانات",
      "تحسين أداء قواعد البيانات",
      "ترحيل البيانات",
      "حلول تخزين سحابية",
      "استرجاع البيانات والنسخ الاحتياطي"
    ]
  },
  {
    id: 6,
    title: "تطبيقات الهاتف المحمول",
    description: "تطوير تطبيقات للهواتف الذكية متوافقة مع أنظمة iOS و Android",
    icon: Smartphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "تطبيقات أصلية لـ iOS و Android",
      "تطبيقات هجينة متعددة المنصات",
      "تطبيقات ويب تفاعلية (PWA)",
      "تكامل مع خدمات الهاتف",
      "تحديثات وصيانة مستمرة"
    ]
  }
];

// Featured Projects
const featuredProjects: ProjectProps[] = [
  {
    title: "منصة تعليمية متكاملة",
    description: "تطوير منصة تعليمية متكاملة مع نظام إدارة محتوى ودورات تفاعلية",
    image: "/portfolio/web-project-1.jpg",
    tags: ["React", "Next.js", "MongoDB"]
  },
  {
    title: "متجر إلكتروني للأزياء",
    description: "تصميم وتطوير متجر إلكتروني متكامل مع نظام دفع آمن وإدارة مخزون",
    image: "/portfolio/web-project-2.jpg",
    tags: ["E-commerce", "Stripe", "Node.js"]
  },
  {
    title: "تطبيق إدارة المشاريع",
    description: "تطبيق ويب لإدارة المشاريع والمهام مع لوحة تحكم تفاعلية وتقارير",
    image: "/portfolio/web-project-3.jpg",
    tags: ["Vue.js", "Firebase", "TypeScript"]
  }
];

// Technology Stack Component
function TechnologyStack() {
  const technologies = [
    { name: "React", icon: "/tech/react.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "Vue.js", icon: "/tech/vue.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Firebase", icon: "/tech/firebase.svg" }
  ];

  return (
    <div className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">التقنيات التي نستخدمها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md flex items-center justify-center mb-3">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
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
              className="text-xs py-1 px-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
          عرض التفاصيل
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glowing elements */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#186af2]/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#ea4235]/20 blur-3xl opacity-30"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#186af2] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">خــدمــات البــرمــجــة</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              تــطــويــر <span className="text-[#186af2] pulse-glow">المــواقــع</span> 
              <br className="hidden md:block" />والتــطــبــيــقــات البــرمــجــيــة
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              نــقــدم حــلــول بــرمــجــيــة مــتــكــامــلــة لــتــطــويــر المــواقــع الإلــكــتــرونــيــة والتــطــبــيــقــات بــأحــدث التــقــنــيــات وأعــلــى مــعــايــيــر الــجــودة
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-[#186af2] hover:bg-[#186af2]/90">
                طلب عرض سعر
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#186af2] text-[#186af2] hover:bg-[#186af2]/10">
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">خــدمــات <span className="text-[#186af2]">البــرمــجــة</span> المــتــمــيــزة</h2>
            <p className="text-muted-foreground">
              نــقــدم بــاقــة مــتــنــوعــة مــن الخــدمــات البــرمــجــيــة الاحــتــرافــيــة الــتــي تــلــبــي احــتــيــاجــات عــمــلائــنــا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDevServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <TechnologyStack />
      
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">مــشــاريــعــنــا <span className="text-[#186af2]">المــمــيــزة</span></h2>
            <p className="text-muted-foreground">
              نــمــاذج مــن أحــدث مــشــاريــعــنــا فــي مــجــال تــطــويــر المــواقــع والتــطــبــيــقــات البــرمــجــيــة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-[#186af2] hover:bg-[#186af2]/90">
              <Link href="/portfolio">
                عرض جميع المشاريع
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">مــراحــل <span className="text-[#186af2]">التــطــويــر</span></h2>
            <p className="text-muted-foreground">
              نــتــبــع مــنــهــجــيــة احــتــرافــيــة فــي تــنــفــيــذ مــشــاريــع تــطــويــر المــواقــع والتــطــبــيــقــات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186af2]/20">
                <span className="text-xl font-bold text-[#186af2]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">تــحــلــيــل المــتــطــلــبــات</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــبــدأ بــفــهــم احــتــيــاجــاتــك وأهــدافــك وتــحــلــيــل الــمــتــطــلــبــات الــفــنــيــة والــتــجــاريــة لــمــشــروعــك
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#ea4235]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#ea4235]/20">
                <span className="text-xl font-bold text-[#ea4235]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــصــمــيــم والتــخــطــيــط</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــصــمــم واجــهــات الــمــســتــخــدم ونــضــع خــطــة تــفــصــيــلــيــة لــتــطــويــر الــمــشــروع وهــيــكــلــة قــاعــدة البــيــانــات
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <span className="text-xl font-bold text-[#fabc05]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">التــطــويــر والبــرمــجــة</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــقــوم بــتــطــويــر الــمــوقــع أو التــطــبــيــق بــاســتــخــدام أحــدث التــقــنــيــات مــع الالــتــزام بــمــعــايــيــر الــجــودة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="bg-[#34a853]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#34a853]/20">
                <span className="text-xl font-bold text-[#34a853]">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">الاخــتــبــار والإطــلاق</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نــجــري اخــتــبــارات شــامــلــة لــضــمــان جــودة الــمــنــتــج قــبــل إطــلاقــه مــع تــقــديــم الــدعــم الــفــنــي الــمــســتــمــر
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaBanner
        title="جــاهــز لــبــدء مــشــروعــك البــرمــجــي؟"
        description="تــواصــل مــعــنــا الآن لــمــنــاقــشــة مــشــروعــك وتــقــديــم حــلــول مــخــصــصــة تــنــاســب احــتــيــاجــاتــك"
        buttonText="طــلــب عــرض ســعــر"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  )
} 