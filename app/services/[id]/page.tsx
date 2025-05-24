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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#111111]" dir="rtl">
      <Navbar />

      <div className="pt-24 pb-16 bg-white dark:bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/decorative-pattern.svg')] opacity-20 dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#186af2]/10 dark:bg-[#186af2]/5 rounded-full filter blur-3xl -mt-24 -mr-24"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fabc05]/10 dark:bg-[#fabc05]/5 rounded-full filter blur-3xl -mb-24 -ml-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between">
            <div className="text-center md:text-right md:w-1/2">
              <Link 
                href="/services" 
                className="inline-flex items-center text-[#186af2] dark:text-[#186af2] mb-4 transition-colors hover:text-[#186af2]/80 dark:hover:text-[#186af2]/80"
              >
                <ArrowLeft className="h-4 w-4 ml-1" />
                العودة لجميع الخدمات
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#111111] dark:text-white">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button size="lg" className="gap-2 bg-[#186af2] hover:bg-[#186af2]/90 text-white">
                  طلب الخدمة الآن
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#186af2] text-[#186af2] hover:bg-[#186af2]/10">احصل على استشارة مجانية</Button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-full h-full absolute inset-0 bg-[#fabc05]/10 dark:bg-[#fabc05]/5 opacity-70 rounded-2xl transform -rotate-6 scale-95"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl flex items-center justify-center p-10 aspect-square max-w-md mx-auto bg-white dark:bg-[#111111]/80 border-2 border-[#186af2]/20">
                <service.icon className="h-32 w-32 text-[#186af2]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16" dir="rtl">
        <div className="flex flex-col lg:flex-row gap-12" dir="rtl">
          {/* Left Content */}
          <div className="lg:w-2/3" dir="rtl">
            <Tabs defaultValue="overview" className="w-full" dir="rtl">
              <TabsList className="mb-6 bg-gray-100 dark:bg-[#111111]/60 p-1 rounded-lg border border-gray-200 dark:border-gray-800">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#111111] data-[state=active]:text-[#186af2] rounded-md transition-all"
                >
                  نظرة عامة
                </TabsTrigger>
                <TabsTrigger 
                  value="features" 
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#111111] data-[state=active]:text-[#186af2] rounded-md transition-all"
                >
                  المميزات
                </TabsTrigger>
                <TabsTrigger 
                  value="process" 
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#111111] data-[state=active]:text-[#186af2] rounded-md transition-all"
                >
                  مراحل العمل
                </TabsTrigger>
                <TabsTrigger 
                  value="faq" 
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#111111] data-[state=active]:text-[#186af2] rounded-md transition-all"
                >
                  أسئلة شائعة
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-[#111111] dark:text-white">نظرة عامة عن خدمة {service.title}</h2>
                  <p>{service.detailedDescription || service.description}</p>
                  
                  <p>
                    نحن في شركة الفشني نقدم خدمة {service.title} بأعلى المعايير المهنية والجودة العالية. 
                    نعتمد على فريق متخصص من الخبراء ذوي الكفاءة العالية لضمان تقديم حلول متميزة تحقق أهداف عملائنا.
                  </p>
                  
                  <p>
                    سواء كنت شركة صغيرة أو مؤسسة كبيرة، فإن خدمة {service.title} التي نقدمها مصممة خصيصاً 
                    لتلبية احتياجاتك وتحقيق تطلعاتك في عالم رقمي سريع التغير.
                  </p>
                  
                  <h3 className="text-[#111111] dark:text-white">لماذا تختار خدمة {service.title} من الفشني؟</h3>
                  
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#34a853] flex-shrink-0" />
                      <span>نهج مخصص يراعي احتياجاتك الفريدة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#34a853] flex-shrink-0" />
                      <span>فريق من المتخصصين ذوي الخبرة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#34a853] flex-shrink-0" />
                      <span>استخدام أحدث التقنيات والأدوات</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#34a853] flex-shrink-0" />
                      <span>نتائج ملموسة وقابلة للقياس</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#34a853] flex-shrink-0" />
                      <span>دعم مستمر ومتابعة دورية</span>
                    </li>
                  </ul>
                  
                  <div className="not-prose mt-8">
                    <Button size="lg" className="bg-[#186af2] hover:bg-[#186af2]/90 text-white">
                      تواصل معنا لمعرفة المزيد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#111111] dark:text-white">مميزات خدمة {service.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features && service.features.map((feature: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="bg-white dark:bg-[#111111]/50 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fabc05]/20 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-[#fabc05]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-[#111111] dark:text-white">{feature}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              نقدم هذه الميزة بكفاءة عالية وبأحدث الأساليب المتبعة عالمياً لضمان تحقيق أفضل النتائج لعملائنا.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-[#186af2]/5 dark:bg-[#186af2]/10 p-6 rounded-xl mt-8 border border-[#186af2]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#111111] dark:text-white">ما يميزنا عن الآخرين</h3>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      نتميز بتقديم خدمة {service.title} بطريقة مبتكرة ومتكاملة تجمع بين:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ea4235]"></div>
                        <span>الاحترافية العالية في التنفيذ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ea4235]"></div>
                        <span>الالتزام بالمواعيد والجداول الزمنية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ea4235]"></div>
                        <span>المرونة في التعامل مع متطلبات العميل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ea4235]"></div>
                        <span>الشفافية الكاملة في جميع مراحل المشروع</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ea4235]"></div>
                        <span>تقديم حلول مبتكرة تناسب احتياجات العميل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <h2 className="text-2xl font-bold mb-6 text-[#111111] dark:text-white">مراحل العمل في خدمة {service.title}</h2>
                
                <div className="relative">
                  <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-[#186af2]/20 dark:bg-[#186af2]/30"></div>
                  
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
                <h2 className="text-2xl font-bold mb-6 text-[#111111] dark:text-white">الأسئلة الشائعة حول خدمة {service.title}</h2>
                
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
            <div className="bg-white dark:bg-[#111111]/50 rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 text-[#111111] dark:text-white">احصل على الخدمة الآن</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#34a853]" />
                  <span>فريق عمل متخصص</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#34a853]" />
                  <span>ضمان الجودة</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#34a853]" />
                  <span>أسعار تنافسية</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-[#34a853]" />
                  <span>دعم فني مستمر</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full gap-2 h-12 bg-[#186af2] hover:bg-[#186af2]/90 text-white">
                  <span>طلب عرض سعر</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full h-12 border-[#186af2] text-[#186af2] hover:bg-[#186af2]/10">التواصل مع مستشار</Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-[#111111] dark:text-white">خدمات أخرى قد تهمك</h4>
                <div className="space-y-3">
                  {services
                    .filter(s => s.id !== serviceId)
                    .slice(0, 3)
                    .map(relatedService => (
                      <Link
                        key={relatedService.id}
                        href={`/services/${relatedService.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#fabc05]/20 flex items-center justify-center">
                          <relatedService.icon className="h-5 w-5 text-[#fabc05]" />
                        </div>
                        <span className="font-medium text-[#111111] dark:text-gray-200">{relatedService.title}</span>
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
          <h2 className="text-2xl font-bold mb-8 text-center text-[#111111] dark:text-white">مشاريع مرتبطة بخدمة {service.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard 
              title="مشروع 1"
              category={service.title}
              image="https://placehold.co/600x400/186af2/FFFFFF?text=مشروع+1"
            />
            <ProjectCard 
              title="مشروع 2"
              category={service.title}
              image="https://placehold.co/600x400/fabc05/111111?text=مشروع+2"
            />
            <ProjectCard 
              title="مشروع 3"
              category={service.title}
              image="https://placehold.co/600x400/ea4235/FFFFFF?text=مشروع+3"
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-[#186af2] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('/decorative-pattern.svg')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fabc05]/30 rounded-full filter blur-3xl -mt-12 -mr-12"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ea4235]/30 rounded-full filter blur-3xl -mb-12 -ml-12"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">جاهز لبدء مشروعك التالي؟</h2>
              <p className="text-white/80 mb-6 md:mb-0">
                تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك من خلال خدمة {service.title}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="secondary" size="lg" className="bg-white text-[#186af2] hover:bg-white/90 border-none">
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
      <div className="flex-shrink-0 bg-[#186af2] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold relative z-10">
        {number}
      </div>
      <div className="mr-6 pt-1">
        <h3 className="text-xl font-bold mb-2 text-[#111111] dark:text-white">{title}</h3>
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
        className="w-full p-4 text-right bg-white dark:bg-[#111111]/50 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-[#111111] dark:text-white">{question}</h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-[#186af2]`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white dark:bg-[#111111]/30">
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
      className="group bg-white dark:bg-[#111111]/50 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
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
        <div className="text-sm text-[#186af2] dark:text-[#186af2] mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2 text-[#111111] dark:text-white">{title}</h3>
        <Link 
          href="#" 
          className="text-gray-600 dark:text-gray-300 hover:text-[#ea4235] dark:hover:text-[#ea4235] inline-flex items-center gap-2 text-sm font-medium"
        >
          عرض التفاصيل
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
} 