import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Award, Users, Target, Lightbulb, TrendingUp, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glowing elements */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#186af2]/20 blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#ea4235]/20 blur-3xl opacity-30"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-right">
              <div className="inline-block bg-[#186af2] text-white rounded-full px-6 py-2 mb-6 shadow-md hover:shadow-lg transition-all">
                <span className="font-medium">مــن نــحــن</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                نــحــن <span className="text-[#186af2] pulse-glow">الــفــشــنــي </span> 
                <br className="hidden md:block" />للدعـــايـــه و الاعـــلان
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl md:mr-0 mx-auto">
                شــركــة رائــدة فــي مــجــال التـــسويق الــرقــــمي، نــســعــى لــتــقــديــم حــلــول إبــداعــيــة تــســاعــد عــمــلائــنــا عــلــى تــحــقــيــق أهــدافــهــم وتــعــزيــز تــواجــدهــم فــي الســوق
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <Button asChild size="lg" variant="default">
                  <Link href="/contact" className="flex items-center">
                    تــواصــل مــعــنــا
                    <ChevronLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="فريق الفشني للإعلان والعلاقات العامة"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#186af2]/10 rounded-xl transform rotate-3 border border-[#186af2]/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="صورة من تاريخ الشركة"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="لحظات من رحلتنا"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="فريق العمل"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="مكتب الشركة"
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#186af2]/10 rounded-xl transform rotate-3 border border-[#186af2]/20"></div>
              </div>
            </div>
            <div className="lg:w-1/2 text-right">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                <span className="text-[#186af2]">قــصــتــنــا</span> ورحــلــتــنــا
              </h2>
              <p className="text-muted-foreground mb-6">
                تــأســســت شــركــة الــفــشــنــي للــتسويق الــرقــــمي عــام 2022 بــرؤيــة واضــحــة لــتــقــديــم خــدمــات إعــلانــيــة مــبــتــكــرة تــلــبــي احــتــيــاجــات الســوق المــحــلــي والإقــلــيــمــي. بــدأنــا بــفــريــق صــغــيــر مــن المــبــدعــيــن المــتــحــمــســيــن، وتــوســعــنــا عــامــاً بــعــد عــام لــنــصــبــح واحــدة مــن أبــرز الشــركــات فــي مــجــالــنــا.
              </p>
              <p className="text-muted-foreground mb-6">
                عــبــر الســنــوات، عــمــلــنــا مــع مــئــات العــلامــات التــجــاريــة المــحــلــيــة والعــالــمــيــة، مــســاعــديــن إيــاهــم عــلــى بــنــاء هــويــة قــويــة وتــحــقــيــق أهــدافــهــم التــســويــقــيــة. نــفــتــخــر بــالعــلاقــات طــويــلــة الأمــد الــتــي بــنــيــنــاهــا مــع عــمــلائــنــا، والــتــي تــعــتــمــد عــلــى الثــقــة المــتــبــادلــة والنــتــائــج المــلــمــوســة.
              </p>
              <p className="text-muted-foreground">
                الــيــوم، يــضــم فــريــقــنــا خــبــراء مــتــخــصــصــيــن فــي مــخــتــلــف مــجــالات الإعــلان والتــســويــق والتــصــمــيــم والـــــبرمجــــــه، مــلــتــزمــيــن بــتــقــديــم أعــلــى مــســتــويــات الجــودة والإبــداع لــكــل عــمــيــل.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">قــيــمــنــا <span className="text-[#186af2]">ومــبــادئــنــا</span></h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              نــؤمــن بــأن نــجــاحــنــا يــعــتــمــد عــلــى مــجــمــوعــة مــن القــيــم الأســاســيــة الــتــي تــوجــه كــل قــراراتــنــا وأعــمــالــنــا
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
              <h3 className="text-xl font-bold mb-3 text-foreground">الشــراكــة والتــعــاون</h3>
              <p className="text-muted-foreground">
                نــؤمــن بــأهــمــيــة بــنــاء عــلاقــات قــويــة مــع عــمــلائــنــا، والعــمــل كــشــركــاء حــقــيــقــيــيــن لــهــم فــي رحــلــة نــجــاحــهــم وتــطــورهــم
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-[#fabc05]/50 transition-all">
              <div className="bg-[#fabc05]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-[#fabc05]/20">
                <Target className="h-8 w-8 text-[#fabc05]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">الالــتــزام بالنــتــائــج</h3>
              <p className="text-muted-foreground">
                نــركــز عــلــى تــحــقــيــق نــتــائــج مــلــمــوســة وقــابــلــة لــلــقــيــاس لــعــمــلائــنــا، ونــتــحــمــل المــســؤولــيــة الكــامــلــة عــن نــجــاح مــشــاريــعــنــا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-right">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                <span className="text-[#186af2]">لــمــاذا</span> تــخــتــارنــا؟
              </h2>
              <p className="text-muted-foreground mb-8">
                نــحــن نــتــمــيــز بــمــجــمــوعــة مــن الخــصــائــص الــتــي تــجــعــلــنــا الخــيــار الأمــثــل لــشــركــائــنــا وعــمــلائــنــا
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#186af2]/10 p-2 rounded-full border border-[#186af2]/20 mt-1">
                    <Lightbulb className="h-5 w-5 text-[#186af2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">رؤيــة إبــداعــيــة فــريــدة</h3>
                    <p className="text-muted-foreground">
                      نــمــتــلــك رؤيــة إبــداعــيــة مــتــجــددة تــمــكــنــنــا مــن تــقــديــم حــلــول غــيــر تــقــلــيــديــة تــمــيــز عــمــلائــنــا عــن مــنــافــســيــهــم
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#ea4235]/10 p-2 rounded-full border border-[#ea4235]/20 mt-1">
                    <TrendingUp className="h-5 w-5 text-[#ea4235]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">نــتــائــج مــلــمــوســة</h3>
                    <p className="text-muted-foreground">
                      نــركــز عــلــى تــحــقــيــق نــتــائــج مــلــمــوســة وقــابــلــة لــلــقــيــاس تــســاهــم فــي نــمــو أعــمــال عــمــلائــنــا وزيــادة عــائــد اســتــثــمــارهــم
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#fabc05]/10 p-2 rounded-full border border-[#fabc05]/20 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#fabc05]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">خــبــرة واســعــة</h3>
                    <p className="text-muted-foreground">
                      نــمــتــلــك خــبــرة تــمــتــد لأكــثــر مــن 10 ســنــوات فــي مــجــال التـــسويق الــرقــــمي، عــمــلــنــا خــلالــهــا مــع مــئــات العــلامــات التــجــاريــة المــحــلــيــة والعــالــمــيــة
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="لماذا تختارنا"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#186af2]/10 rounded-xl transform rotate-3 border border-[#186af2]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#186af2]/95 via-[#186af2]/90 to-[#186af2]/80">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
        
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/30 blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/30 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/30 bg-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white">
              هــل أنــت جــاهــز لــلــبــدء فــي رحــلــة نــجــاح عــلامــتــك التــجــاريــة؟
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-base md:text-lg text-white/90">
              تــواصــل مــعــنــا الــيــوم لــمــنــاقــشــة مــشــروعــك وكــيــف يــمــكــنــنــا مــســاعــدتــك فــي تــحــقــيــق أهــدافــك
            </p>
            
            <Button 
              asChild 
              className="bg-white text-[#186af2] hover:bg-blue-50 font-medium shadow-lg hover:shadow-xl transition-all border-0 px-6 py-5 text-base"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>تــواصــل مــعــنــا الآن</span>
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
} 