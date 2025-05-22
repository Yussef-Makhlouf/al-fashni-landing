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

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* First CTA Banner */}
      <CtaBanner
        title="هذه صفحة معرض أعمال شركة الفشني"
        description="تصفح مشاريعنا المميزة واكتشف كيف يمكننا مساعدة علامتك التجارية على النمو"
        buttonText="زيارة موقعنا الرئيسي"
        buttonLink="https://fashne.net/"
        variant="blue"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Second CTA Banner */}
      <CtaBanner
        title="هل أنت جاهز لنقل علامتك التجارية إلى المستوى التالي؟"
        description="دعنا نساعدك في تحقيق أهدافك التسويقية وبناء حضور رقمي قوي"
        buttonText="تواصل معنا الآن"
        buttonLink="/contact"
        variant="red"
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Banner */}
      <CtaBanner
        title="هذه صفحة معرض أعمال شركة الفشني للإعلان والعلاقات العامة"
        description="تواصل معنا اليوم لمناقشة مشروعك القادم ودعنا نساعدك في تحقيق رؤيتك"
        buttonText="زيارة موقعنا الرئيسي"
        buttonLink="https://fashne.net/"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
