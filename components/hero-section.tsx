import { Button } from "@/components/ui/button"
import { ChevronLeft, ExternalLink, Phone, Mail, MapPin, Zap, TrendingUp, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Glowing elements */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-gradient-to-r from-primary/90 to-purple-500/90 text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">معرض أعمالنا الإبداعية</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              نبتكر <span className="text-gradient pulse-glow">تجارب رقمية</span> 
              <br className="hidden md:block" />تتجاوز التوقعات
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl md:mr-0 mx-auto">
              شركة الفشني للإعلان والعلاقات العامة، نقدم حلولاً إبداعية متكاملة تساعد علامتك التجارية على التألق والنمو
              في العالم الرقمي بأساليب مبتكرة وفعّالة
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Button asChild size="lg" variant="gradient">
                <Link href="/portfolio" className="flex items-center">
                  استعرض أعمالنا
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm">
                <Link href="https://al-fashni.com" target="_blank" className="flex items-center">
                  زيارة موقعنا الرئيسي
                  <ExternalLink className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-30 group-hover:opacity-50 transition-opacity z-10"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="الفشني للإعلان والعلاقات العامة"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="font-bold text-xl text-foreground">رؤيتنا الإبداعية</h3>
                <p className="text-sm text-muted-foreground">نجمع بين الإبداع والاستراتيجية لبناء هوية علامتك التجارية</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-xl transform rotate-3 border border-primary/20"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-3 rounded-full border border-primary/20">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">اتصل بنا</h3>
                <p className="text-muted-foreground text-sm">+966 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-3 rounded-full border border-purple-500/20">
                <Mail className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">البريد الإلكتروني</h3>
                <p className="text-muted-foreground text-sm">info@al-fashni.com</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-3 rounded-full border border-amber-500/20">
                <MapPin className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">العنوان</h3>
                <p className="text-muted-foreground text-sm">الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block text-foreground">
            <span className="text-gradient">خدماتنا الإبداعية</span>
            <div className="absolute w-full h-[2px] bottom-0 left-0 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-item group">
              <div className="relative">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:border-primary/30 transition-colors">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -inset-1 bg-primary/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">حملات إعلانية مبتكرة</h3>
              <p className="text-muted-foreground">نصمم حملات إعلانية تجذب الانتباه وتحقق نتائج ملموسة لعملائنا</p>
            </div>
            <div className="service-item group">
              <div className="relative">
                <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-purple-500/20 group-hover:border-purple-500/30 transition-colors">
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
                <div className="absolute -inset-1 bg-purple-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">تسويق رقمي احترافي</h3>
              <p className="text-muted-foreground">استراتيجيات تسويقية رقمية متكاملة تساعد على تحقيق النمو المستدام</p>
            </div>
            <div className="service-item group">
              <div className="relative">
                <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-amber-500/20 group-hover:border-amber-500/30 transition-colors">
                  <Globe className="h-8 w-8 text-amber-500" />
                </div>
                <div className="absolute -inset-1 bg-amber-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">إبداع بلا حدود</h3>
              <p className="text-muted-foreground">تصاميم إبداعية فريدة تعكس هوية علامتك التجارية وتميزها عن المنافسين</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 