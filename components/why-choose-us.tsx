"use client"

import { motion } from "framer-motion"
import { Award, Users, Lightbulb, TrendingUp } from "lucide-react"

const reasons = [
  {
    id: 1,
    title: "خبرة واسعة",
    description: "نمتلك خبرة تمتد لسنوات في مجال الإعلان والتسويق الرقمي، مما يمكننا من تقديم حلول مبتكرة وفعالة",
    icon: Award,
    color: "text-[#186af2]",
    bgColor: "bg-[#186af2]/10",
  },
  {
    id: 2,
    title: "فريق متخصص",
    description: "يضم فريقنا نخبة من المتخصصين في مختلف مجالات التسويق والتصميم والبرمجة لتلبية جميع احتياجاتك",
    icon: Users,
    color: "text-[#ea4235]",
    bgColor: "bg-[#ea4235]/10",
  },
  {
    id: 3,
    title: "حلول إبداعية",
    description: "نقدم أفكاراً إبداعية فريدة تساعد علامتك التجارية على التميز والبروز وسط المنافسة",
    icon: Lightbulb,
    color: "text-[#fabc05]",
    bgColor: "bg-[#fabc05]/10",
  },
  {
    id: 4,
    title: "نتائج ملموسة",
    description: "نركز على تحقيق نتائج قابلة للقياس تساهم في نمو أعمالك وزيادة عائد الاستثمار",
    icon: TrendingUp,
    color: "text-[#34a853]",
    bgColor: "bg-[#34a853]/10",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار الفشني؟</h2>
          <p className="text-gray-600 dark:text-gray-300">
            نحن ملتزمون بتقديم أفضل الخدمات لعملائنا ومساعدتهم على تحقيق أهدافهم التسويقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reason.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${reason.bgColor}`}>
                <reason.icon className={`h-6 w-6 ${reason.color}`} />
              </div>

              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
