"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export const categories = [
  { id: "all", name: "الــكــل" },
  { id: "web-development", name: "تــطــويــر الــويــب" },
  { id: "ecommerce", name: "التــجــارة الإلــكــتــرونــيــة" },
  { id: "digital-marketing", name: "التــســويــق الــرقــمــي" },
  { id: "mobile-apps", name: "تــطــبــيــقــات الــجــوال" },
  { id: "branding", name: "الــهــويــة البــصــريــة" },
  { id: "advertising", name: "الإعــلان" },
  { id: "seo", name: "تــحــســيــن مــحــركــات البــحــث" },
]

export type PortfolioFiltersProps = {
  onFilterChange: (category: string, searchQuery: string) => void
}

export function PortfolioFilters({ onFilterChange }: PortfolioFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Send filter updates to parent component
  useEffect(() => {
    onFilterChange(activeCategory, searchQuery)
  }, [activeCategory, searchQuery, onFilterChange])

  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">اســتــعــرض مــشــاريــعــنــا</h2>

        <div className="relative w-full md:w-64">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            type="text" 
            placeholder="ابــحــث عــن مــشــروع..." 
            className="pr-10 w-full" 
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`relative ${activeCategory === category.id ? "bg-[#186af2] hover:bg-[#186af2]/90" : ""}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-[#186af2] rounded-md -z-10"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}
