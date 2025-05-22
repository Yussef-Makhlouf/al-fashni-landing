"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, User, Tag, ArrowLeft, ExternalLink, ChevronDown, CheckCircle, Clock, BarChart } from "lucide-react"
import { projects, type Project } from "@/components/portfolio-grid"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Add additional project details for the expanded view
type ProjectDetails = {
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

// Sample project details data (this would typically come from an API or database)
const projectDetails: Record<number, ProjectDetails> = {
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
  // Add details for other projects as needed
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
}

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [details, setDetails] = useState<ProjectDetails | null>(null)

  useEffect(() => {
    // Find the project based on the ID in the URL
    const projectId = typeof params.id === "string" ? parseInt(params.id) : null
    
    if (projectId) {
      const foundProject = projects.find((p) => p.id === projectId)
      setProject(foundProject || null)
      setDetails(projectDetails[projectId] || null)
    }
    
    setLoading(false)
  }, [params.id])

  // If project not found, return 404
  if (!loading && !project) {
    notFound()
  }

  if (loading || !project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#186af2] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#186af2]/5 via-white to-[#fabc05]/5 dark:from-[#186af2]/10 dark:via-gray-900 dark:to-[#fabc05]/10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <Link href="/" className="hover:text-[#186af2] transition-colors">
                  الرئيسية
                </Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <Link href="/portfolio" className="hover:text-[#186af2] transition-colors">
                  معرض الأعمال
                </Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <span>{project.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>

            <Link href="/portfolio">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                العودة إلى المعرض
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                className="relative aspect-video rounded-xl overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2>نبذة عن المشروع</h2>
                <p>{project.description}</p>
                
                {/* Placeholder content for demo purposes */}
                <h2>التحديات</h2>
                <p>
                  واجهنا في هذا المشروع عدة تحديات تقنية وتصميمية، بما في ذلك الحاجة إلى تطوير واجهة مستخدم سهلة الاستخدام 
                  مع الحفاظ على الأداء العالي وسرعة التحميل، بالإضافة إلى ضمان توافق الموقع مع جميع الأجهزة والمتصفحات.
                </p>

                <h2>الحلول المقدمة</h2>
                <ul>
                  <li>تطوير واجهة مستخدم سهلة الاستخدام باستخدام أحدث التقنيات</li>
                  <li>تحسين سرعة الموقع وأدائه باستخدام تقنيات التحميل الكسول والتخزين المؤقت</li>
                  <li>تصميم متجاوب يعمل بسلاسة على جميع أحجام الشاشات والأجهزة</li>
                  <li>تكامل مع أنظمة الدفع وقواعد البيانات بطريقة آمنة وفعالة</li>
                </ul>

                <h2>النتائج</h2>
                <p>
                  حقق المشروع نتائج متميزة تجاوزت توقعات العميل، بما في ذلك:
                </p>
                <ul>
                  <li>زيادة في معدل تحويل الزوار بنسبة 35%</li>
                  <li>تحسين تجربة المستخدم وسهولة التنقل في الموقع</li>
                  <li>زيادة في متوسط وقت البقاء على الموقع بنسبة 42%</li>
                  <li>تحسين الأداء وسرعة التحميل بنسبة 60%</li>
                </ul>

                {/* Show More Button */}
                <div className="mt-8 mb-4">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "عرض أقل" : "عرض المزيد من التفاصيل"}
                    <ChevronDown className={`h-5 w-5 transition-transform ${showMore ? "rotate-180" : ""}`} />
                  </Button>
                </div>

                {/* Additional Project Details (Expandable) */}
                <AnimatePresence>
                  {showMore && details && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8 border-t pt-8 dark:border-gray-700">
                        {/* Project Specs */}
                        <h2>مواصفات المشروع</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {details.timeframe && (
                            <div className="flex items-start gap-4">
                              <div className="bg-[#186af2]/10 rounded-full p-3">
                                <Clock className="h-6 w-6 text-[#186af2]" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">المدة الزمنية للتنفيذ</h4>
                                <p>{details.timeframe}</p>
                              </div>
                            </div>
                          )}
                          
                          {details.teamSize && (
                            <div className="flex items-start gap-4">
                              <div className="bg-[#186af2]/10 rounded-full p-3">
                                <User className="h-6 w-6 text-[#186af2]" />
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">حجم فريق العمل</h4>
                                <p>{details.teamSize} أفراد</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Technologies Used */}
                        {details.technologies && details.technologies.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold mb-4">التقنيات المستخدمة</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                              {details.technologies.map((tech, index) => (
                                <span 
                                  key={index} 
                                  className="bg-[#186af2]/10 text-[#186af2] px-4 py-2 rounded-full font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Project Objectives */}
                        {details.objectives && details.objectives.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold mb-4">أهداف المشروع</h3>
                            <div className="space-y-3 mb-8">
                              {details.objectives.map((objective, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-[#186af2] mt-1 flex-shrink-0" />
                                  <p>{objective}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Key Achievements with Visual Indicators */}
                        {details.achievements && details.achievements.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold mb-4">الإنجازات الرئيسية</h3>
                            <div className="space-y-6 mb-8">
                              {details.achievements.map((achievement, index) => (
                                <div key={index} className="relative">
                                  <div className="flex items-start gap-3">
                                    <BarChart className="h-5 w-5 text-[#186af2] mt-1 flex-shrink-0" />
                                    <p>{achievement}</p>
                                  </div>
                                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full mt-2">
                                    <motion.div 
                                      className="h-full bg-[#186af2] rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${(index + 1) * 25}%` }}
                                      transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* Client Testimonial */}
                        {details.testimonial && (
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 border-r-4 border-[#186af2]">
                            <h3 className="text-xl font-bold mb-4">رأي العميل</h3>
                            <blockquote className="text-lg italic mb-4">"{details.testimonial.quote}"</blockquote>
                            <div className="flex items-center gap-3">
                              <div className="bg-[#186af2] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                {details.testimonial.author.charAt(0)}
                              </div>
                              <div>
                                <p className="font-semibold">{details.testimonial.author}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{details.testimonial.position}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Project Gallery */}
                        {details.gallery && details.gallery.length > 0 && (
                          <>
                            <h3 className="text-xl font-bold mb-4">معرض الصور</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                              {details.gallery.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                  <Image
                                    src={image}
                                    alt={`${project.title} - صورة ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform hover:scale-105 duration-300"
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-10">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-[#186af2] hover:underline font-medium"
                  >
                    زيارة المشروع
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b dark:border-gray-700">تفاصيل المشروع</h3>
                
                <div className="space-y-4">
                  {project.client && (
                    <div className="flex items-start gap-3">
                      <div className="bg-[#186af2]/10 rounded-full p-2 mt-1">
                        <User className="h-5 w-5 text-[#186af2]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">العميل</h4>
                        <p>{project.client}</p>
                      </div>
                    </div>
                  )}

                  {project.completionDate && (
                    <div className="flex items-start gap-3">
                      <div className="bg-[#186af2]/10 rounded-full p-2 mt-1">
                        <Calendar className="h-5 w-5 text-[#186af2]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">تاريخ الإنجاز</h4>
                        <p>{new Date(project.completionDate).toLocaleDateString('ar-EG')}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-[#186af2]/10 rounded-full p-2 mt-1">
                      <Tag className="h-5 w-5 text-[#186af2]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">الوسوم</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="bg-white dark:bg-gray-700 text-sm px-3 py-1 rounded-full shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t dark:border-gray-700">
                  <h4 className="font-bold mb-4">مشاريع مشابهة</h4>
                  <div className="space-y-4">
                    {projects
                      .filter(p => p.id !== project.id && p.categoryId === project.categoryId)
                      .slice(0, 3)
                      .map(relatedProject => (
                        <Link 
                          href={`/portfolio/${relatedProject.id}`} 
                          key={relatedProject.id}
                          className="flex items-center gap-3 group"
                        >
                          <div className="relative w-16 h-16 rounded-md overflow-hidden">
                            <Image
                              src={relatedProject.image}
                              alt={relatedProject.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h5 className="font-medium group-hover:text-[#186af2] transition-colors line-clamp-1">
                              {relatedProject.title}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {relatedProject.category}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 