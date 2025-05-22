"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "موقع شركة التقنية المتطورة",
    category: "تطوير الويب",
    image: "/placeholder.svg?height=400&width=600&text=Project1",
    description:
      "تصميم وتطوير موقع إلكتروني متكامل لشركة متخصصة في مجال التقنية، مع لوحة تحكم متطورة وواجهة مستخدم سهلة الاستخدام.",
  },
  {
    id: 2,
    title: "متجر الأناقة الإلكتروني",
    category: "التجارة الإلكترونية",
    image: "/placeholder.svg?height=400&width=600&text=Project2",
    description: "تطوير متجر إلكتروني متكامل مع نظام دفع آمن وإدارة للمخزون وتجربة تسوق سلسة على جميع الأجهزة.",
  },
  {
    id: 3,
    title: "حملة تسويقية لمطعم الشرق",
    category: "التسويق الرقمي",
    image: "/placeholder.svg?height=400&width=600&text=Project3",
    description:
      "إدارة حملة تسويقية متكاملة عبر منصات التواصل الاجتماعي، مما أدى إلى زيادة المبيعات بنسبة 40% خلال 3 أشهر.",
  },
]

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg-light opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full radial-blue opacity-10"></div>
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full radial-purple opacity-10"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-[#186af2]">أحدث مشاريعنا</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              نفخر بتقديم مجموعة متنوعة من المشاريع التي نفذناها لعملائنا في مختلف المجالات
            </p>
          </div>

          <Button asChild className="mt-6 md:mt-0 bg-[#186af2] text-white border-0 shadow-md hover:shadow-lg transition-all">
            <Link href="/portfolio">
              عرض جميع المشاريع
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg border border-gray-200 dark:border-gray-700 group">
            <Image
              src={projects[activeProject].image || "/placeholder.svg"}
              alt={projects[activeProject].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-sm flex flex-col justify-end p-6">
              <span className="inline-block bg-[#186af2] text-white text-sm px-4 py-1 rounded-full mb-3 shadow-md">
                {projects[activeProject].category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
              <p className="text-white/80 text-sm md:text-base line-clamp-2">{projects[activeProject].description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                  activeProject === index
                    ? "bg-gradient-to-r from-[#186af2]/10 to-[#ea4235]/10 dark:from-[#186af2]/20 dark:to-[#ea4235]/20 border-[#186af2] dark:border-[#186af2]"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/30 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{ x: activeProject === index ? 0 : 5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg overflow-hidden w-20 h-20 flex-shrink-0 shadow-md">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-[#186af2]">{project.category}</span>
                    <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{project.description}</p>
                  </div>

                  {activeProject === index && (
                    <div className="flex-shrink-0 w-6 h-6 bg-[#186af2] rounded-full flex items-center justify-center text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <Button asChild variant="outline" className="w-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <Link href="/portfolio">
                  عرض المزيد من المشاريع
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
