"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Globe, 
  Megaphone, 
  BarChart, 
  Search, 
  PenTool, 
  Smartphone, 
  Video, 
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  BarChart2,
  Award,
  Clock,
  Zap,
  ExternalLink
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Interface definitions
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  features?: string[];
  detailedDescription?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Network Background Component
function NetworkBackground() {
  return (
    <div className="network-background absolute inset-0 w-full h-full opacity-30 dark:opacity-10">
      <style jsx>{`
        .network-background {
          background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                            radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
        }
        
        @media (prefers-color-scheme: dark) {
          .network-background {
            background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          }
        }
      `}</style>
    </div>
  );
}

// Stats Card Component
function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <motion.div 
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-800"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{number}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{text}</p>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
        
        @media (prefers-color-scheme: dark) {
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          }
        }
      `}</style>
    
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Network Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-0">
            <NetworkBackground />
          </div>
        </div>
        
        <Navbar />
        
        {/* Hero Section with enhanced design */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-md text-blue-700 dark:text-blue-300 text-sm font-medium">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                خدمات متكاملة لعملائنا المميزين
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
                خدماتنا المتكاملة لنجاح <br /> مشروعك الرقمي
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                نقدم مجموعة شاملة من الخدمات الإبداعية والتسويقية المصممة خصيصاً لمساعدة علامتك التجارية 
                <br className="hidden md:block" /> على التميز في العالم الرقمي وتحقيق أهدافك بكفاءة عالية
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="gradient" className="gap-2 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
                  تواصل معنا الآن
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
                <Button size="lg" variant="outline" className="group backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700">
                  استكشف أعمالنا
                  <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Button>
              </div>
            </motion.div>
            
            {/* Statistics Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <StatCard number="250+" text="عميل سعيد" />
              <StatCard number="540+" text="مشروع منجز" />
              <StatCard number="12+" text="سنة خبرة" />
              <StatCard number="98%" text="نسبة رضا العملاء" />
            </div>
          </div>
        </section>

        {/* Featured Services Tabs */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">مجالات تخصصنا</h2>
              <p className="text-gray-600 dark:text-gray-300">
                اختر من بين مجموعة خدماتنا المتخصصة لتنمية أعمالك وتعزيز حضورك الرقمي
              </p>
            </div>

            <Tabs defaultValue="digital" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <TabsTrigger value="digital" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 dark:data-[state=active]:bg-blue-950/30">التسويق الرقمي</TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600 dark:data-[state=active]:bg-purple-950/30">تطوير المواقع</TabsTrigger>
                <TabsTrigger value="design" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 dark:data-[state=active]:bg-green-950/30">التصميم والهوية</TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-600 dark:data-[state=active]:bg-amber-950/30">تطبيقات الجوال</TabsTrigger>
              </TabsList>
              
              <TabsContent value="digital" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">استراتيجيات تسويقية مبتكرة</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      نقدم حلولاً تسويقية متكاملة مصممة خصيصاً لتلبية احتياجات عملك وتحقيق أهدافك. نستخدم أحدث التقنيات والاستراتيجيات لضمان وصول علامتك التجارية إلى الجمهور المستهدف.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>إدارة حملات إعلانية مدفوعة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تحسين محركات البحث (SEO)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>إدارة وسائل التواصل الاجتماعي</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>إنشاء محتوى جذاب وهادف</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 aspect-video flex items-center justify-center p-10">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <img 
                      src="/digital-marketing.svg" 
                      alt="التسويق الرقمي" 
                      className="w-full max-w-md mx-auto relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/600x400/2563eb/FFFFFF?text=التسويق+الرقمي";
                      }}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 aspect-video flex items-center justify-center p-10 order-2 md:order-1">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
                    <img 
                      src="/web-development.svg" 
                      alt="تطوير المواقع" 
                      className="w-full max-w-md mx-auto relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/600x400/9333ea/FFFFFF?text=تطوير+المواقع";
                      }}
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">تطوير مواقع متطورة وعصرية</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      نصمم ونطور مواقع إلكترونية عصرية، سريعة، ومتجاوبة مع جميع الأجهزة. نركز على تجربة المستخدم وتحسين معدلات التحويل لتحقيق أهدافك التجارية.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>مواقع تفاعلية متجاوبة مع جميع الأجهزة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>متاجر إلكترونية متكاملة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تحسين سرعة التحميل وأداء الموقع</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تجربة مستخدم سلسة وجذابة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">هوية بصرية مميزة</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      نبتكر هويات بصرية فريدة تعكس روح علامتك التجارية وتميزها في السوق. نهتم بكل التفاصيل لضمان تماسك وتناسق الهوية في جميع نقاط التواصل مع العملاء.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تصميم شعارات فريدة ومميزة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>أنظمة ألوان وخطوط متناسقة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تصميم مواد تسويقية مطبوعة ورقمية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>دليل استخدام الهوية البصرية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl relative bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 aspect-video flex items-center justify-center p-10">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
                    <img 
                      src="/branding.svg" 
                      alt="التصميم والهوية" 
                      className="w-full max-w-md mx-auto relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/600x400/10b981/FFFFFF?text=التصميم+والهوية";
                      }}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="mobile" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl relative bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 aspect-video flex items-center justify-center p-10 order-2 md:order-1">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <img 
                      src="/mobile-app.svg" 
                      alt="تطبيقات الجوال" 
                      className="w-full max-w-md mx-auto relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://placehold.co/600x400/f59e0b/FFFFFF?text=تطبيقات+الجوال";
                      }}
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4">تطبيقات جوال متطورة</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      نطور تطبيقات جوال مبتكرة وسهلة الاستخدام لنظامي iOS وAndroid. نركز على تقديم تجربة مستخدم متميزة وميزات تفاعلية تلبي احتياجات عملائك.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>تطبيقات متوافقة مع iOS وAndroid</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>واجهات مستخدم سهلة وبديهية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>دمج مع أنظمة الدفع والإشعارات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>صيانة وتحديثات مستمرة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Interactive 3D Services Preview */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 bg-purple-100 dark:bg-purple-900/40 px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                تجربة تفاعلية
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                اكتشف خدماتنا بطريقة تفاعلية
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                استكشف الخدمات التي نقدمها بشكل تفاعلي ثلاثي الأبعاد وتعرف على مميزات كل خدمة
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto py-10">
              <ServicePreviewCard 
                title="تطوير المواقع" 
                icon={<Globe className="h-10 w-10 text-blue-500" />}
                color="blue"
              />
              <ServicePreviewCard 
                title="التسويق الرقمي" 
                icon={<Megaphone className="h-10 w-10 text-red-500" />} 
                color="red"
              />
              <ServicePreviewCard 
                title="تطبيقات الجوال" 
                icon={<Smartphone className="h-10 w-10 text-[#186af2]" />}
                color="purple"
              />
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                استكشف خدماتنا
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                مجموعة خدماتنا المتكاملة
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                اكتشف المجموعة الكاملة من خدماتنا المتخصصة لتنمية أعمالك وتحقيق أهدافك بأعلى معايير الجودة
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار خدماتنا؟</h2>
              <p className="text-gray-600 dark:text-gray-300">
                نحن ملتزمون بتقديم خدمات عالية الجودة تساعد علامتك التجارية على التميز
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-blue-500" />}
                title="فريق من الخبراء"
                description="نضم فريقاً من المتخصصين ذوي الخبرة في مختلف المجالات لضمان تقديم أفضل النتائج"
              />
              <FeatureCard 
                icon={<BarChart2 className="h-8 w-8 text-[#186af2]" />}
                title="نتائج قابلة للقياس"
                description="نقدم تقارير دورية تظهر أداء حملاتك ونتائج استراتيجياتنا بشكل واضح وشفاف"
              />
              <FeatureCard 
                icon={<PenTool className="h-8 w-8 text-green-500" />}
                title="حلول إبداعية"
                description="نبتكر استراتيجيات وتصاميم فريدة تناسب هوية علامتك التجارية وتميزها عن المنافسين"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهزون لنقل أعمالك إلى المستوى التالي؟</h2>
              <p className="text-xl opacity-90 mb-10">
                تواصل معنا اليوم لمناقشة مشروعك القادم ودعنا نساعدك في تحقيق رؤيتك
              </p>
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                احصل على استشارة مجانية
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

// Service Card Component
function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full bg-white dark:bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: service.id * 0.1 }}
      viewport={{ once: true }}
      layout
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ${service.bgColor} opacity-30 dark:opacity-20`} />
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.bgColor} dark:bg-opacity-30`}>
          <service.icon className={`h-8 w-8 ${service.color}`} />
        </div>
        
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
        
        {service.features && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 overflow-hidden"
              >
                <h4 className="font-medium mb-2 text-sm">مميزات الخدمة:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.detailedDescription && (
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {service.detailedDescription}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
        
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            className={`group justify-start p-0 hover:bg-transparent ${service.color}`}
            asChild
          >
            <Link href={`/services/${service.id}`}>
              اكتشف المزيد
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
          
          {service.features && (
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-2 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? "عرض أقل" : "عرض المزيد"}
            </Button>
          )}
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-1"
        style={{
          backgroundImage: service.id % 4 === 1
            ? "linear-gradient(to right, #186af2, #186af2)"
            : service.id % 4 === 2
              ? "linear-gradient(to right, #ea4235, #ea4235)"
              : service.id % 4 === 3
                ? "linear-gradient(to right, #fabc05, #fabc05)"
                : "linear-gradient(to right, #34a853, #34a853)",
          width: isHovered ? "100%" : "0%",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative overflow-hidden border border-gray-100 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 dark:from-gray-800 opacity-50 rounded-bl-full"></div>
      <div className="relative z-10">
        <div className="rounded-full w-16 h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

// Service Preview Card Component with 3D effect
function ServicePreviewCard({ title, icon, color }: { title: string; icon: React.ReactNode; color: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values based on mouse position
    const rotateXValue = ((y - rect.height / 2) / (rect.height / 2)) * 10;
    const rotateYValue = ((rect.width / 2 - x) / (rect.width / 2)) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  const getGradient = () => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20';
      case 'red':
        return 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20';
      case 'purple':
        return 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20';
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20';
    }
  };
  
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden p-6 h-80 ${getGradient()} shadow-lg cursor-pointer`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-bl from-white/80 dark:from-white/10 opacity-70 rounded-full blur-2xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-tr from-white/80 dark:from-white/10 opacity-70 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div 
            className="mb-6 transform"
            style={{ transform: 'translateZ(30px)' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-center transform" style={{ transform: 'translateZ(20px)' }}>
            {title}
          </h3>
          <div className="mt-6 transform" style={{ transform: 'translateZ(40px)' }}>
            <Button 
              variant="outline" 
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-md"
            >
              استكشف الخدمة
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Services Data
const services = [
  {
    id: 1,
    title: "تطوير المواقع الإلكترونية",
    description: "نصمم ونطور مواقع متطورة تجمع بين الجمال والأداء القوي",
    icon: Globe,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم موقع متجاوب مع جميع الأجهزة",
      "تحسين تجربة المستخدم وواجهات سهلة الاستخدام",
      "تطوير خلفي قوي وآمن",
      "سرعة تحميل عالية وأداء ممتاز",
      "تحسين للسيو والمحركات البحثية"
    ],
    detailedDescription: "نستخدم أحدث التقنيات مثل React وNext.js لبناء مواقع عصرية وسريعة تناسب احتياجات عملك وتساعدك على تحقيق أهدافك."
  },
  {
    id: 2,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويقية شاملة لزيادة الوعي بعلامتك التجارية",
    icon: Megaphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "إدارة حملات إعلانية مدفوعة",
      "استراتيجيات تسويق محتوى فعالة",
      "تحليل البيانات وتقارير الأداء",
      "استهداف دقيق للجمهور المناسب",
      "زيادة معدلات التحويل والمبيعات"
    ],
    detailedDescription: "نضع استراتيجيات تسويقية متكاملة تناسب ميزانيتك وتحقق أهدافك في النمو واكتساب عملاء جدد بشكل مستدام."
  },
  {
    id: 3,
    title: "إدارة وسائل التواصل",
    description: "إدارة احترافية للمنصات الاجتماعية وإنتاج محتوى مميز",
    icon: BarChart,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "خطة محتوى شهرية متكاملة",
      "تصميم منشورات جذابة وإبداعية",
      "التفاعل مع الجمهور وبناء مجتمع قوي",
      "تحليل أداء المنصات وتحسين المحتوى",
      "إدارة الإعلانات المدفوعة على المنصات"
    ],
    detailedDescription: "نساعدك على بناء تواجد قوي على منصات التواصل الاجتماعي من خلال استراتيجية محتوى متكاملة تناسب جمهورك المستهدف."
  },
  {
    id: 4,
    title: "تحسين محركات البحث",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية",
    icon: Search,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
    features: [
      "تحليل شامل للموقع والمنافسين",
      "تحسين الكلمات المفتاحية وبنية الموقع",
      "بناء روابط خلفية قوية",
      "تحسين المحتوى ليناسب محركات البحث",
      "تقارير شهرية لمتابعة التقدم"
    ],
    detailedDescription: "نطبق أفضل ممارسات تحسين محركات البحث (SEO) لتحسين ترتيب موقعك وزيادة الزيارات العضوية والتحويلات."
  },
  {
    id: 5,
    title: "الهوية البصرية",
    description: "تصميم هويات بصرية مميزة تعكس قيم علامتك التجارية",
    icon: PenTool,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "تصميم شعار فريد وملهم",
      "نظام ألوان وخطوط متناسق",
      "قوالب للمواد التسويقية والمطبوعات",
      "دليل استخدام الهوية البصرية",
      "تطبيقات الهوية على مختلف المنصات"
    ],
    detailedDescription: "نصمم هوية بصرية قوية وفريدة تميز علامتك التجارية وتعكس قيمها وتساعدها على التواصل بفعالية مع جمهورها."
  },
  {
    id: 6,
    title: "تطبيقات الهاتف المحمول",
    description: "تطوير تطبيقات ذكية تلبي احتياجات المستخدمين بسلاسة",
    icon: Smartphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
    features: [
      "تطبيقات Android و iOS المتكاملة",
      "واجهات مستخدم سلسة وسهلة الاستخدام",
      "أداء عالي وسرعة استجابة ممتازة",
      "دمج مع أنظمة الدفع والإشعارات",
      "دعم فني ما بعد الإطلاق"
    ],
    detailedDescription: "نطور تطبيقات جوال مبتكرة تلبي احتياجات مستخدميك وتضيف قيمة حقيقية لعملك مع تركيز قوي على تجربة المستخدم."
  },
  {
    id: 7,
    title: "إنتاج الفيديو",
    description: "محتوى مرئي احترافي يروي قصة علامتك التجارية بشكل مؤثر",
    icon: Video,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
    features: [
      "فيديوهات إعلانية وترويجية",
      "فيديوهات تعريفية بالمنتجات والخدمات",
      "رسوم متحركة وموشن جرافيك",
      "مونتاج وتحرير احترافي",
      "إنتاج محتوى فيديو للمنصات الاجتماعية"
    ],
    detailedDescription: "نقدم خدمات إنتاج فيديو متكاملة من كتابة السيناريو وحتى التصوير والمونتاج لإنشاء محتوى مرئي يجذب جمهورك المستهدف."
  },
  {
    id: 8,
    title: "التسويق عبر البريد",
    description: "حملات بريدية مخصصة لبناء علاقات دائمة مع عملائك",
    icon: Mail,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
    features: [
      "بناء قوائم بريدية عالية الجودة",
      "تصميم قوالب بريد إلكتروني جذابة",
      "تخصيص المحتوى حسب شرائح العملاء",
      "تحليل نسب الفتح والنقر والتحويل",
      "أتمتة الحملات البريدية والمتابعة"
    ],
    detailedDescription: "نصمم حملات بريد إلكتروني فعالة تساعدك على التواصل مع عملائك الحاليين وجذب عملاء جدد وزيادة المبيعات."
  },
  {
    id: 9,
    title: "التحليلات وقياس الأداء",
    description: "تقارير تحليلية مفصلة لقياس أداء حملاتك وتحسينها باستمرار",
    icon: BarChart2,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
    features: [
      "إعداد وتكوين أدوات التحليل",
      "تتبع مؤشرات الأداء الرئيسية",
      "تحليل سلوك المستخدمين وتحسين التجربة",
      "قياس عائد الاستثمار للحملات",
      "تقارير دورية مفصلة مع توصيات"
    ],
    detailedDescription: "نساعدك على فهم بياناتك واتخاذ قرارات مبنية على تحليلات دقيقة لتحسين أداء منصاتك الرقمية وزيادة فعالية حملاتك."
  },
]; 