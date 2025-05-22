"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { PortfolioFilters } from "@/components/portfolio-filters"
import { CtaBanner } from "@/components/cta-banner"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Handler for filter changes from the PortfolioFilters component
  const handleFilterChange = (category: string, query: string) => {
    setCategoryFilter(category)
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#186af2]/10 via-white to-[#fabc05]/10 dark:from-[#186af2]/20 dark:via-gray-900 dark:to-[#fabc05]/20 pt-24 pb-12">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">معرض أعمالنا</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              استعرض مجموعة من أفضل المشاريع التي قمنا بتنفيذها لعملائنا في مختلف المجالات
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="pb-20 pt-4">
        <div className="container mx-auto px-4">
          <PortfolioFilters onFilterChange={handleFilterChange} />
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <PortfolioGrid categoryFilter={categoryFilter} searchQuery={searchQuery} />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="هل لديك مشروع تريد تنفيذه؟"
        description="دعنا نساعدك في تحويل أفكارك إلى واقع ملموس"
        buttonText="تواصل معنا الآن"
        buttonLink="/contact"
        variant="blue"
      />

      <Footer />
    </div>
  )
}
