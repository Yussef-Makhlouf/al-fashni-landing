"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Megaphone, BarChart, Search, PenTool, Smartphone, Video, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "تطوير المواقع الإلكترونية",
    description: "تصميم وتطوير مواقع إلكترونية عصرية وسريعة ومتجاوبة مع جميع الأجهزة",
    icon: Globe,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
  },
  {
    id: 2,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويقية متكاملة لزيادة الوعي بعلامتك التجارية وجذب العملاء المحتملين",
    icon: Megaphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
  },
  {
    id: 3,
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "إدارة احترافية لحسابات التواصل الاجتماعي وإنشاء محتوى جذاب يناسب جمهورك المستهدف",
    icon: BarChart,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
  },
  {
    id: 4,
    title: "تحسين محركات البحث (SEO)",
    description: "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية من الجمهور المستهدف",
    icon: Search,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
  },
  {
    id: 5,
    title: "الهوية البصرية",
    description: "تصميم هويات بصرية مميزة تعكس قيم علامتك التجارية وتساعدها على التميز في السوق",
    icon: PenTool,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
  },
  {
    id: 6,
    title: "تطبيقات الهاتف المحمول",
    description: "تطوير تطبيقات مبتكرة للهواتف الذكية تلبي احتياجات عملائك وتعزز تجربتهم",
    icon: Smartphone,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
  },
  {
    id: 7,
    title: "إنتاج الفيديو",
    description: "إنتاج محتوى مرئي احترافي يروي قصة علامتك التجارية ويجذب انتباه جمهورك",
    icon: Video,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
  },
  {
    id: 8,
    title: "التسويق عبر البريد الإلكتروني",
    description: "حملات بريدية مخصصة تساعد في بناء علاقات دائمة مع عملائك وزيادة المبيعات",
    icon: Mail,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
  },
]

export function ServicesList() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <motion.div
          key={service.id}
          className={cn(
            "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
            "hover:shadow-lg cursor-pointer group",
          )}
          onMouseEnter={() => setActiveService(service.id)}
          onMouseLeave={() => setActiveService(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: service.id * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className={cn(
              "absolute inset-0 opacity-0 transition-opacity duration-300",
              activeService === service.id ? "opacity-100" : "group-hover:opacity-100",
              service.id % 4 === 1
                ? "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/20"
                : service.id % 4 === 2
                  ? "bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20"
                  : service.id % 4 === 3
                    ? "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-950/30 dark:to-yellow-900/20"
                    : "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950/30 dark:to-green-900/20",
            )}
          />

          <div className="relative z-10">
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", service.bgColor)}>
              <service.icon className={cn("h-6 w-6", service.color)} />
            </div>

            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
            style={{
              backgroundImage:
                service.id % 4 === 1
                  ? "linear-gradient(to right, #186af2, #186af2)"
                  : service.id % 4 === 2
                    ? "linear-gradient(to right, #ea4235, #ea4235)"
                    : service.id % 4 === 3
                      ? "linear-gradient(to right, #fabc05, #fabc05)"
                      : "linear-gradient(to right, #34a853, #34a853)",
            }}
            initial={{ width: "0%" }}
            animate={{
              width: activeService === service.id ? "100%" : "0%",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
