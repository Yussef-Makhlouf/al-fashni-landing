"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Globe, Megaphone, BarChart, Search, PenTool, Smartphone, Video, Mail, BarChart2, ExternalLink, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { services } from "@/app/services/data"

export default function ServiceDetailsPage() {
  const params = useParams();
  const serviceId = typeof params.id === 'string' ? parseInt(params.id, 10) : 1;
  const [service, setService] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the service from our data
    const foundService = services.find(s => s.id === serviceId);
    setService(foundService || services[0]);
    setIsLoading(false);
  }, [serviceId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">الخدمة غير موجودة</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">عذراً، لم نتمكن من العثور على الخدمة المطلوبة</p>
            <Button asChild>
              <Link href="/services">العودة لصفحة الخدمات</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" dir="rtl">
      <Navbar />

      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-30 -mt-24 -mr-24"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-30 -mb-24 -ml-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between">
            <div className="text-center md:text-right md:w-1/2">
              <Link 
                href="/services" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-4 transition-colors hover:text-blue-700 dark:hover:text-blue-300"
              >
                <ArrowLeft className="h-4 w-4 ml-1" />
                العودة لجميع الخدمات
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button size="lg" className="gap-2">
                  طلب الخدمة الآن
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">احصل على استشارة مجانية</Button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-transparent opacity-70 rounded-2xl transform -rotate-6 scale-95"></div>
              <div className={`relative z-10 rounded-xl overflow-hidden shadow-xl flex items-center justify-center p-10 aspect-square max-w-md mx-auto ${service.bgColor} bg-opacity-30 dark:bg-opacity-20`}>
                <service.icon className={`h-32 w-32 ${service.color}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="features">المميزات</TabsTrigger>
                <TabsTrigger value="process">مراحل العمل</TabsTrigger>
                <TabsTrigger value="faq">أسئلة شائعة</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>نظرة عامة عن خدمة {service.title}</h2>
                  <p>{service.detailedDescription || service.description}</p>
                  
                  <p>
                    نحن في شركة الفشني نقدم خدمة {service.title} بأعلى المعايير المهنية والجودة العالية. 
                    نعتمد على فريق متخصص من الخبراء ذوي الكفاءة العالية لضمان تقديم حلول متميزة تحقق أهداف عملائنا.
                  </p>
                  
                  <p>
                    سواء كنت شركة صغيرة أو مؤسسة كبيرة، فإن خدمة {service.title} التي نقدمها مصممة خصيصاً 
                    لتلبية احتياجاتك وتحقيق تطلعاتك في عالم رقمي سريع التغير.
                  </p>
                  
                  <h3>لماذا تختار خدمة {service.title} من الفشني؟</h3>
                  
                  <ul>
                    <li>نهج مخصص يراعي احتياجاتك الفريدة</li>
                    <li>فريق من المتخصصين ذوي الخبرة</li>
                    <li>استخدام أحدث التقنيات والأدوات</li>
                    <li>نتائج ملموسة وقابلة للقياس</li>
                    <li>دعم مستمر ومتابعة دورية</li>
                  </ul>
                  
                  <div className="not-prose mt-8">
                    <Button size="lg">
                      تواصل معنا لمعرفة المزيد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold mb-6">مميزات خدمة {service.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features && service.features.map((feature: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full ${service.bgColor} flex items-center justify-center`}>
                            <CheckCircle className={`h-5 w-5 ${service.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              نقدم هذه الميزة بكفاءة عالية وبأحدث الأساليب المتبعة عالمياً لضمان تحقيق أفضل النتائج لعملائنا.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-8">
                    <h3 className="text-xl font-bold mb-3">ما يميزنا عن الآخرين</h3>
                    <p className="mb-4">
                      نتميز بتقديم خدمة {service.title} بطريقة مبتكرة ومتكاملة تجمع بين:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>الاحترافية العالية في التنفيذ</li>
                      <li>الالتزام بالمواعيد والجداول الزمنية</li>
                      <li>المرونة في التعامل مع متطلبات العميل</li>
                      <li>الشفافية الكاملة في جميع مراحل المشروع</li>
                      <li>تقديم حلول مبتكرة تناسب احتياجات العميل</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">مراحل العمل في خدمة {service.title}</h2>
                
                <div className="relative">
                  <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  
                  <div className="space-y-12">
                    <ProcessStep 
                      number={1} 
                      title="التحليل والدراسة" 
                      description="في هذه المرحلة، نقوم بتحليل احتياجاتك بشكل دقيق ودراسة متطلبات المشروع، لفهم أهدافك والتحديات التي تواجهها." 
                    />
                    
                    <ProcessStep 
                      number={2} 
                      title="وضع الاستراتيجية" 
                      description="بناءً على نتائج التحليل، نقوم بتطوير استراتيجية متكاملة تحدد الخطوات والأدوات اللازمة لتحقيق أهدافك." 
                    />
                    
                    <ProcessStep 
                      number={3} 
                      title="التنفيذ" 
                      description="في هذه المرحلة، يقوم فريق العمل المتخصص بتنفيذ الاستراتيجية الموضوعة وفق جدول زمني محدد، مع الالتزام بأعلى معايير الجودة." 
                    />
                    
                    <ProcessStep 
                      number={4} 
                      title="المراجعة والاختبار" 
                      description="نقوم بمراجعة شاملة لما تم إنجازه واختبار النتائج للتأكد من مطابقتها للمعايير المطلوبة ومن تحقيقها للأهداف المحددة." 
                    />
                    
                    <ProcessStep 
                      number={5} 
                      title="الإطلاق والمتابعة" 
                      description="بعد التأكد من جودة العمل، نقوم بإطلاق المشروع ومتابعته بشكل مستمر لضمان تحقيق النتائج المرجوة وإجراء أي تحسينات لازمة." 
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة حول خدمة {service.title}</h2>
                
                <div className="space-y-6">
                  <FaqItem 
                    question={`ما هي تكلفة خدمة ${service.title}؟`}
                    answer="تختلف التكلفة حسب نطاق المشروع واحتياجاته الخاصة. نقدم عروض أسعار مخصصة لكل عميل بناءً على دراسة متطلباته. يمكنك التواصل معنا للحصول على عرض سعر تفصيلي."
                  />
                  
                  <FaqItem 
                    question={`ما هي المدة الزمنية اللازمة لتنفيذ خدمة ${service.title}؟`}
                    answer="تعتمد المدة الزمنية على حجم المشروع وتعقيده. عادةً ما نقدم جدولاً زمنياً تفصيلياً في بداية المشروع يوضح جميع المراحل والمدد المتوقعة للتنفيذ."
                  />
                  
                  <FaqItem 
                    question={`هل يمكنني الاطلاع على نماذج سابقة من أعمالكم في مجال ${service.title}؟`}
                    answer="نعم بالتأكيد. لدينا معرض أعمال متكامل يضم نماذج من مشاريعنا السابقة في مختلف المجالات. يمكنك تصفح معرض الأعمال على موقعنا أو طلب نماذج محددة عند التواصل معنا."
                  />
                  
                  <FaqItem 
                    question={`ما هي المعلومات التي تحتاجونها مني لبدء العمل في خدمة ${service.title}؟`}
                    answer="نحتاج منك معلومات أساسية حول نشاطك التجاري، وأهدافك، والجمهور المستهدف، والمنافسين، بالإضافة إلى أي متطلبات خاصة لديك. سنقوم بتزويدك باستبيان شامل لجمع هذه المعلومات بطريقة منظمة."
                  />
                  
                  <FaqItem 
                    question={`هل تقدمون خدمات الدعم والصيانة بعد انتهاء المشروع؟`}
                    answer="نعم، نقدم خدمات دعم وصيانة متكاملة بعد إطلاق المشروع. لدينا باقات دعم مختلفة تناسب احتياجات كل عميل، وتضمن استمرارية عمل المشروع بكفاءة عالية."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">احصل على الخدمة الآن</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>فريق عمل متخصص</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>ضمان الجودة</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>أسعار تنافسية</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>دعم فني مستمر</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full gap-2 h-12">
                  <span>طلب عرض سعر</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full h-12">التواصل مع مستشار</Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3">خدمات أخرى قد تهمك</h4>
                <div className="space-y-3">
                  {services
                    .filter(s => s.id !== serviceId)
                    .slice(0, 3)
                    .map(relatedService => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-full ${relatedService.bgColor} flex items-center justify-center`}>
                          <relatedService.icon className={`h-5 w-5 ${relatedService.color}`} />
                        </div>
                        <span className="font-medium">{relatedService.title}</span>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">مشاريع مرتبطة بخدمة {service.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard 
              title="مشروع 1"
              category={service.title}
              image="https://placehold.co/600x400/2563eb/FFFFFF?text=مشروع+1"
            />
            <ProjectCard 
              title="مشروع 2"
              category={service.title}
              image="https://placehold.co/600x400/2563eb/FFFFFF?text=مشروع+2"
            />
            <ProjectCard 
              title="مشروع 3"
              category={service.title}
              image="https://placehold.co/600x400/2563eb/FFFFFF?text=مشروع+3"
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">جاهز لبدء مشروعك التالي؟</h2>
              <p className="text-blue-100 mb-6 md:mb-0">
                تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك من خلال خدمة {service.title}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-none">
                تواصل معنا الآن
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div 
      className="relative flex items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold relative z-10">
        {number}
      </div>
      <div className="mr-6 pt-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-right bg-gray-50 dark:bg-gray-800 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, category, image }: { title: string; category: string; image: string }) {
  return (
    <motion.div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <Link 
          href="#" 
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-2 text-sm font-medium"
        >
          عرض التفاصيل
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
} 