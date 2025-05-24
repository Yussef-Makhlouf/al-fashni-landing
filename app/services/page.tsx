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
  ExternalLink,
  Code,
  Server,
  Database,
  Cpu,
  Lightbulb,
  Target,
  ShoppingCart,
  Mic
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ServicesList } from "@/components/services-list"
import { CtaBanner } from "@/components/cta-banner"
import { cn } from "@/lib/utils"

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

// Network Background Component with enhanced grid pattern
function NetworkBackground() {
  return (
    <div className="network-background absolute inset-0 w-full h-full opacity-30 dark:opacity-20">
      <style jsx>{`
        .network-background {
          background-image: 
            linear-gradient(to right, rgba(24, 106, 242, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24, 106, 242, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(24, 106, 242, 0.15) 2px, transparent 2px);
          background-size: 50px 50px, 50px 50px, 100px 100px;
          background-position: 0 0, 0 0, 25px 25px;
        }
        
        @media (prefers-color-scheme: dark) {
          .network-background {
            background-image: 
              linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              radial-gradient(rgba(56, 189, 248, 0.2) 2px, transparent 2px);
          }
        }
      `}</style>
    </div>
  );
}

// Tech Decorative Elements Component
function TechDecorativeElements() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Code brackets */}
      <motion.div 
        className="absolute top-[15%] left-[5%] text-blue-500/20 dark:text-blue-400/10 text-7xl font-mono"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        {"</>"}
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[20%] right-[8%] text-purple-500/20 dark:text-purple-400/10 text-7xl font-mono"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        {"{}"}
      </motion.div>
      
      {/* Floating tech icons */}
      <motion.div 
        className="absolute top-[30%] right-[15%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Database className="h-16 w-16 text-green-500/30 dark:text-green-400/20" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[35%] left-[12%]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Server className="h-14 w-14 text-amber-500/30 dark:text-amber-400/20" />
      </motion.div>
      
      <motion.div 
        className="absolute top-[60%] left-[20%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Cpu className="h-12 w-12 text-red-500/30 dark:text-red-400/20" />
      </motion.div>
      
      {/* Binary code effect */}
      <div className="absolute top-[10%] right-[10%] font-mono text-xs opacity-10 dark:opacity-5 text-blue-800 dark:text-blue-200">
        10101<br />01010<br />11001<br />00101
      </div>
      
      <div className="absolute bottom-[15%] left-[15%] font-mono text-xs opacity-10 dark:opacity-5 text-purple-800 dark:text-purple-200">
        01100<br />10011<br />01010<br />11001
      </div>
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
  const [activeService, setActiveService] = useState<number | null>(null);

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
              <span className="font-medium">خــدمــاتــنــا</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              حــلــول <span className="text-[#186af2] pulse-glow">إبــداعــيــة</span> 
              <br className="hidden md:block" />لــنــمــو أعــمــالــك
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              نــقــدم مــجــمــوعــة مــتــكــامــلــة مــن الخــدمــات الإبــداعــيــة والتــســويــقــيــة المــصــمــمــة خــصــيــصــاً لــمــســاعــدة عــلامــتــك التــجــاريــة عــلــى التــمــيــز والنــمــو
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">خــدمــاتــنــا <span className="text-[#186af2]">المــتــمــيــزة</span></h2>
            <p className="text-muted-foreground">
              نــقــدم بــاقــة مــتــنــوعــة مــن الخــدمــات الاحــتــرافــيــة الــتــي تــلــبــي احــتــيــاجــات عــمــلائــنــا فــي مــخــتــلــف المــجــالات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/web-development" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(1)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 1 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#186af2]/10")}>
                    <Globe className={cn("h-6 w-6", "text-[#186af2]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">تــطــويــر المــواقــع الإلــكــتــرونــيــة</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">تــصــمــيــم وتــطــويــر مــواقــع إلــكــتــرونــيــة عــصــريــة وســريــعــة ومــتــجــاوبــة مــع جــمــيــع الأجــهــزة</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#186af2] to-[#186af2]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 1 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/digital-marketing" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(2)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 2 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#ea4235]/10")}>
                    <Megaphone className={cn("h-6 w-6", "text-[#ea4235]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">التــســويــق الــرقــمــي</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">اســتــراتــيــجــيــات تــســويــقــيــة مــتــكــامــلــة لــزيــادة الــوعــي بــعــلامــتــك التــجــاريــة وجــذب العــمــلاء المــحــتــمــلــيــن</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ea4235] to-[#ea4235]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 2 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/digital-marketing" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(3)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 3 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-950/30 dark:to-yellow-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#fabc05]/10")}>
                    <BarChart className={cn("h-6 w-6", "text-[#fabc05]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">إدارة وســائــل التــواصــل الاجــتــمــاعــي</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">إدارة احــتــرافــيــة لــحــســابــات التــواصــل الاجــتــمــاعــي وإنــشــاء مــحــتــوى جــذاب يــنــاســب جــمــهــورك المــســتــهــدف</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#fabc05] to-[#fabc05]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 3 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/digital-marketing" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(4)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 4 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950/30 dark:to-green-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#34a853]/10")}>
                    <Search className={cn("h-6 w-6", "text-[#34a853]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">تــحــســيــن مــحــركــات البــحــث (SEO)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">تــحــســيــن ظــهــور مــوقــعــك فــي نــتــائــج البــحــث وزيــادة الــزيــارات العــضــويــة مــن الجــمــهــور المــســتــهــدف</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#34a853] to-[#34a853]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 4 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/graphic-design" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(5)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 5 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#186af2]/10")}>
                    <PenTool className={cn("h-6 w-6", "text-[#186af2]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">الــهــويــة البــصــريــة</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">تــصــمــيــم هــويــات بــصــريــة مــمــيــزة تــعــكــس قــيــم عــلامــتــك التــجــاريــة وتــســاعــدهــا عــلــى التــمــيــز فــي الســوق</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#186af2] to-[#186af2]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 5 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/web-development" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(6)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 6 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#ea4235]/10")}>
                    <ShoppingCart className={cn("h-6 w-6", "text-[#ea4235]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">تــصــمــيــم وتــنــفــيــذ المــتــاجــر الإلــكــتــرونــيــة</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">تــطــويــر مــتــاجــر إلــكــتــرونــيــة مــتــكــامــلــة مــع نــظــام إدارة المــخــزون ونــظــام الــدفــع الآمــن وتــجــربــة شــراء ســلــســة</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ea4235] to-[#ea4235]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 6 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/video-production" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(7)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 7 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-950/30 dark:to-yellow-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#fabc05]/10")}>
                    <Video className={cn("h-6 w-6", "text-[#fabc05]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">إنــتــاج الــفــيــديــو والــريــلــز</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">إنــتــاج فــيــديــوهــات وريــلــز احــتــرافــيــة لــمــنــصــات التــواصــل الاجــتــمــاعــي تــجــذب الــمــشــاهــدات وتــعــزز حــضــورك الــرقــمــي</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#fabc05] to-[#fabc05]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 7 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            <Link href="/services/video-production" className="block">
              <motion.div
                className={cn(
                  "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
                  "hover:shadow-lg cursor-pointer group",
                )}
                onMouseEnter={() => setActiveService(8)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    activeService === 8 ? "opacity-100" : "group-hover:opacity-100",
                    "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950/30 dark:to-green-900/20"
                  )}
                />

                <div className="relative z-10">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", "bg-[#34a853]/10")}>
                    <Mic className={cn("h-6 w-6", "text-[#34a853]")} />
                  </div>

                  <h3 className="text-lg font-bold mb-2">تــســجــيــل الــصــوت الــاحــتــرافــي</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">تــســجــيــل صــوت احــتــرافــي لــفــيــديــوهــاتــك مــع أصــوات عــربــيــة وأجــنــبــيــة لــتــعــزيــز تــأثــيــر مــحــتــواك</p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#34a853] to-[#34a853]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === 8 ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">نــهــجــنــا <span className="text-[#186af2]">الــمــتــمــيــز</span></h2>
            <p className="text-muted-foreground">
              نــتــبــع مــنــهــجــيــة مــدروســة فــي تــنــفــيــذ مــشــاريــعــنــا لــضــمــان تــحــقــيــق أفــضــل النــتــائــج لــعــمــلائــنــا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#186af2]/50 transition-all">
              <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#186af2]/20">
                <Lightbulb className="h-8 w-8 text-[#186af2]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">الــفــهــم والتــحــلــيــل</h3>
              <p className="text-muted-foreground">
                نــبــدأ بــفــهــم احــتــيــاجــاتــك وتــحــلــيــل وضــعــك الــحــالــي والــســوق المــســتــهــدف لــتــحــديــد أفــضــل الاســتــراتــيــجــيــات
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#ea4235]/50 transition-all">
              <div className="bg-[#ea4235]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#ea4235]/20">
                <Zap className="h-8 w-8 text-[#ea4235]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">التــخــطــيــط والإبــداع</h3>
              <p className="text-muted-foreground">
                نــضــع خــطــة عــمــل مــفــصــلــة ونــطــور أفــكــاراً إبــداعــيــة تــنــاســب هــويــتــك وتــحــقــق أهــدافــك
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#fabc05]/50 transition-all">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <Target className="h-8 w-8 text-[#fabc05]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">التــنــفــيــذ والتــطــويــر</h3>
              <p className="text-muted-foreground">
                نــنــفــذ المــشــروع وفــق أعــلــى مــعــايــيــر الــجــودة مــع الالــتــزام بــالــجــدول الــزمــنــي المــحــدد
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#34a853]/50 transition-all">
              <div className="bg-[#34a853]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#34a853]/20">
                <Users className="h-8 w-8 text-[#34a853]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">المــتــابــعــة والتــحــســيــن</h3>
              <p className="text-muted-foreground">
                نــقــدم دعــمــاً مــســتــمــراً ونــتــابــع الأداء لــتــحــســيــن النــتــائــج وضــمــان تــحــقــيــق الأهــداف المــرجــوة
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <CtaBanner 
        title="هــل تــحــتــاج إلــى خــدمــاتــنــا؟"
        description="تــواصــل مــعــنــا الــيــوم لــمــنــاقــشــة مــشــروعــك وكــيــف يــمــكــنــنــا مــســاعــدتــك فــي تــحــقــيــق أهــدافــك"
        buttonText="احــصــل عــلــى اســتــشــارة مــجــانــيــة"
        buttonLink="/contact"
        variant="blue"
      />
      
      <Footer />
    </div>
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
      
      <div className="relative z-10 p-6 flex flex-col h-full" dir="rtl" >
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