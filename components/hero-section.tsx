import { Button } from "@/components/ui/button"
import { ChevronLeft, ExternalLink, Phone, Mail, MapPin, Zap, TrendingUp, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Glowing elements */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#186af2]/20 blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#ea4235]/20 blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#186af2] rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-[#fabc05] rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-[#ea4235] rounded-full animate-pulse"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-[#186af2] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
              <span className="font-medium">مــعــرض أعــمــالــنــا الإبــداعــيــة</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              نبــتــكــر <span className="text-[#186af2] pulse-glow">تـــجــارب رقميــة ممــيــزة</span> 
              <br className="hidden md:block" />تتـــجــاوز التــوقعــات وتــلهـم الإبـــداع
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl md:mr-0 mx-auto">
              شــركــة الفــشــني للإعــلان والعــلاقــات العــامــة، نــقــدم حــلــولاً إبــداعــيــة مــتــكــامــلــة تــســاعــد عــلامــتــك التــجــاريــة عــلى التــألــق والنــمــو
              فــي العــالــم الــرقــمــي بــأســالــيــب مــبــتــكــرة وفــعّــالــة
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Button asChild size="lg" variant="default">
                <Link href="/portfolio" className="flex items-center">
                  اســتــعــرض أعــمــالــنــا
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm">
                <Link href="https://fashne.net/" target="_blank" className="flex items-center">
                  زيــارة مــوقــعــنــا الــرئــيــســي
                  <ExternalLink className="mr-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="absolute inset-0 transition-opacity z-10"></div>
              <Image
                src="/main-logo.png"
                alt="الفشني للإعلان والعلاقات العامة"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <h3 className="font-bold text-xl text-foreground">رؤيــتــنــا الإبــداعــيــة</h3>
                <p className="text-sm text-muted-foreground">نــجــمــع بــيــن الإبــداع والاســتــراتــيــجــيــة لــبــنــاء هــويــة عــلامــتــك التــجــاريــة</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#186af2]/10 rounded-xl transform rotate-3 border border-[#186af2]/20"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#186af2]/10 to-[#186af2]/10 p-3 rounded-full border border-[#186af2]/20">
                <Phone className="h-6 w-6 text-[#186af2]" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">اتــصــل بــنــا</h3>
                <p className="text-muted-foreground text-sm">+966 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#ea4235]/10 to-[#ea4235]/10 p-3 rounded-full border border-[#ea4235]/20">
                <Mail className="h-6 w-6 text-[#ea4235]" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">البــريــد الإلــكــتــرونــي</h3>
                <p className="text-muted-foreground text-sm">info@al-fashni.com</p>
              </div>
            </div>
          </div>
          <div className="card-hover p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#fabc05]/10 to-[#fabc05]/10 p-3 rounded-full border border-[#fabc05]/20">
                <MapPin className="h-6 w-6 text-[#fabc05]" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">العــنــوان</h3>
                <p className="text-muted-foreground text-sm">الــريــاض، المــمــلــكــة العــربــيــة الســعــوديــة</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block text-foreground">
            <span className="text-gradient">خــدمــاتــنــا الإبــداعــيــة</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-item group">
              <div className="relative">
                <div className="bg-[#186af2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-[#186af2]/20 group-hover:border-[#186af2]/30 transition-colors">
                  <Zap className="h-8 w-8 text-[#186af2]" />
                </div>
                <div className="absolute -inset-1 bg-[#186af2]/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">حــمــلات إعــلانــيــة مــبــتــكــرة</h3>
              <p className="text-muted-foreground">نــصــمــم حــمــلات إعــلانــيــة تــجــذب الانــتــبــاه وتــحــقــق نــتــائــج مــلــمــوســة لــعــمــلائــنــا</p>
            </div>
            <div className="service-item group">
              <div className="relative">
                <div className="bg-[#ea4235]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-[#ea4235]/20 group-hover:border-[#ea4235]/30 transition-colors">
                  <TrendingUp className="h-8 w-8 text-[#ea4235]" />
                </div>
                <div className="absolute -inset-1 bg-[#ea4235]/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">تــســويــق رقــمــي احــتــرافــي</h3>
              <p className="text-muted-foreground">اســتــراتــيــجــيــات تــســويــقــيــة رقــمــيــة مــتــكــامــلــة تــســاعــد عــلى تــحــقــيــق النــمــو المــســتــدام</p>
            </div>
            <div className="service-item group">
              <div className="relative">
                <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-[#fabc05]/20 group-hover:border-[#fabc05]/30 transition-colors">
                  <Globe className="h-8 w-8 text-[#fabc05]" />
                </div>
                <div className="absolute -inset-1 bg-[#fabc05]/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">إبــداع بــلا حــدود</h3>
              <p className="text-muted-foreground">تــصــامــيــم إبــداعــيــة فــريــدة تــعــكــس هــويــة عــلامــتــك التــجــاريــة وتــمــيــزهــا عــن المــنــافــســيــن</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 