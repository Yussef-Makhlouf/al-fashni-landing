"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "أحــمــد مــحــمــد",
    position: "المــديــر التــنــفــيــذي، شــركــة التــقــنــيــة المــتــطــورة",
    content:
      "تــعــامــلــنــا مــع شــركــة الــفــشــنــي كــان تــجــربــة رائــعــة. قــدمــوا لــنــا حــلــولاً إبــداعــيــة ســاهــمــت فــي تــعــزيــز حــضــورنــا الــرقــمــي وزيــادة مــبــيــعــاتــنــا بــشــكــل مــلــحــوظ.",
    image: "/placeholder.svg?height=80&width=80&text=أحمد",
  },
  {
    id: 2,
    name: "ســارة عــبــدالــلــه",
    position: "مــديــرة التــســويــق، مــؤســســة الإبــداع",
    content:
      "فــريــق عــمــل مــحــتــرف ومــبــدع. ســاعــدونــا فــي بــنــاء هــويــة بــصــريــة قــويــة وتــطــويــر اســتــراتــيــجــيــة تــســويــقــيــة مــتــكــامــلــة حــقــقــت نــتــائــج تــفــوق تــوقــعــاتــنــا.",
    image: "/placeholder.svg?height=80&width=80&text=سارة",
  },
  {
    id: 3,
    name: "خــالــد الــعــمــري",
    position: "مــؤســس، مــتــجــر الأنــاقــة",
    content:
      "المــوقــع الإلــكــتــرونــي الــذي صــمــمــتــه شــركــة الــفــشــنــي كــان نــقــطــة تــحــول فــي أعــمــالــنــا. تــصــمــيــم عــصــري وســهــل الاســتــخــدام مــع أداء مــمــتــاز فــي مــحــركــات البــحــث.",
    image: "/placeholder.svg?height=80&width=80&text=خالد",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-0 right-0 -mt-8 -mr-4 text-[#186af2]/20 dark:text-[#186af2]/10">
        <Quote size={80} />
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6">
              <Image
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-[#186af2]/20"
              />
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 relative z-10">
              {testimonials[current].content}
            </p>

            <div>
              <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[current].position}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="السابق"
        >
          <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#186af2] w-6" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`انتقل إلى الشهادة ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="التالي"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}
