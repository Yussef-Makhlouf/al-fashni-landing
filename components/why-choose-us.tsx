"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Award, Users, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">لــمــاذا <span className="text-[#186af2]">تــخــتــارنــا؟</span></h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نــحــن نــتــمــيــز بــمــجــمــوعــة مــن الخــصــائــص الــتــي تــجــعــلــنــا الخــيــار الأمــثــل لــشــركــائــنــا وعــمــلائــنــا
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#186af2]/50 transition-all">
            <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186af2]/20">
              <Award className="h-8 w-8 text-[#186af2]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">الــتــمــيــز والإبــداع</h3>
            <p className="text-muted-foreground">
              نــســعــى دائــمــاً لــتــقــديــم أفــكــار مــبــتــكــرة وحــلــول إبــداعــيــة تــتــجــاوز تــوقــعــات عــمــلائــنــا وتــحــقــق أهــدافــهــم بــطــرق غــيــر تــقــلــيــديــة
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#ea4235]/50 transition-all">
            <div className="bg-[#ea4235]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#ea4235]/20">
              <Users className="h-8 w-8 text-[#ea4235]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">الــشــراكــة والــتــعــاون</h3>
            <p className="text-muted-foreground">
              نــؤمــن بــأهــمــيــة بــنــاء عــلاقــات قــويــة مــع عــمــلائــنــا، والــعــمــل كــشــركــاء حــقــيــقــيــيــن لــهــم فــي رحــلــة نــجــاحــهــم وتــطــورهــم
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#fabc05]/50 transition-all">
            <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
              <Target className="h-8 w-8 text-[#fabc05]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">الالــتــزام بــالــنــتــائــج</h3>
            <p className="text-muted-foreground">
              نــركــز عــلــى تــحــقــيــق نــتــائــج مــلــمــوســة وقــابــلــة لــلــقــيــاس لــعــمــلائــنــا، ونــتــحــمــل المــســؤولــيــة الــكــامــلــة عــن نــجــاح مــشــاريــعــنــا
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild className="bg-[#186af2] text-white">
            <Link href="/about">
              تــعــرف عــلــيــنــا أكــثــر
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
