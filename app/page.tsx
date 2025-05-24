import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { CtaBanner } from "@/components/cta-banner"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProjects />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CtaBanner 
          title="هــل أنــت جــاهــز لــبــدء مــشــروعــك الــقــادم؟" 
          description="تــواصــل مــعــنــا الــيــوم لــمــنــاقــشــة كــيــف يــمــكــنــنــا مــســاعــدتــك فــي تــحــقــيــق أهــدافــك الــتــســويــقــيــة"
          buttonText="احــصــل عــلــى اســتــشــارة مــجــانــيــة"
          buttonLink="/contact"
          variant="blue"
        />
      </main>
      <Footer />
    </div>
  )
}
