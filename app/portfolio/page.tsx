"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioFilters } from "@/components/portfolio-filters"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CtaBanner } from "@/components/cta-banner"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const handleFilterChange = (category: string, query: string) => {
    setActiveCategory(category)
    setSearchQuery(query)
  }

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
              <span className="font-medium">مــعــرض أعــمــالــنــا</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              إبــداعــات <span className="text-[#186af2] pulse-glow">تــتــجــاوز</span> 
              <br className="hidden md:block" />حــدود الــخــيــال
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              اســتــعــرض مــجــمــوعــة مــن أحــدث وأفــضــل مــشــاريــعــنــا الــتــي نــفــذنــاهــا لــعــمــلائــنــا فــي مــخــتــلــف المــجــالات
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <PortfolioFilters onFilterChange={handleFilterChange} />
          <PortfolioGrid categoryFilter={activeCategory} searchQuery={searchQuery} />
        </div>
      </section>
      
      {/* CTA Banner */}
      <CtaBanner 
        title="هــل تــريــد مــشــروعــاً مــمــيــزاً؟"
        description="تــواصــل مــعــنــا الــيــوم لــمــنــاقــشــة مــشــروعــك وكــيــف يــمــكــنــنــا تــحــويــل أفــكــارك إلــى واقــع مــلــمــوس"
        buttonText="تــواصــل مــعــنــا الآن"
        buttonLink="/contact"
        variant="blue"
      />
      
      <Footer />
    </div>
  )
}
