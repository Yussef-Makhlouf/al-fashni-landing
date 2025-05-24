"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { categories } from "@/data/categories"
import { projects, type Project } from "@/data/projects"

export type PortfolioGridProps = {
  categoryFilter?: string
  searchQuery?: string
}

export function PortfolioGrid({ categoryFilter = "all", searchQuery = "" }: PortfolioGridProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  // Apply filters whenever they change
  useEffect(() => {
    let result = [...projects]
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(project => project.categoryId === categoryFilter)
    }
    
    // Apply search filter if there's a search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query)) ||
        (project.client && project.client.toLowerCase().includes(query))
      )
    }
    
    setFilteredProjects(result)
  }, [categoryFilter, searchQuery])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold mb-2">لا توجد مشاريع تطابق معايير البحث</h3>
        <p className="text-gray-500 dark:text-gray-400">يرجى تجربة كلمات بحث مختلفة أو تغيير الفئة المحددة</p>
      </div>
    )
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              className={`group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800 h-full flex flex-col`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#fabc05] text-white text-xs px-2 py-1 rounded-full">
                      مــمــيــز
                    </span>
                  </div>
                )}
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 6}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="text-white group-hover:text-[#186af2] text-sm font-medium inline-flex items-center gap-1"
                    >
                      عــرض المــشــروع
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-medium rounded-full bg-[#186af2]/10 text-[#186af2] px-3 py-1">
                    {project.category}
                  </span>
                </div>
                
                <Link href={`/portfolio/${project.id}`} className="block group-hover:text-[#186af2] transition-colors">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {project.client && (
                    <div>
                      <span className="font-medium">الــعــمــيــل:</span> {project.client}
                    </div>
                  )}
                  
                  {project.completionDate && (
                    <div>
                      {new Date(project.completionDate).toLocaleDateString('ar-EG')}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Progress indicator on hover */}
              <motion.div
                className="h-1 bg-[#186af2] w-0"
                animate={{ width: hoveredProject === project.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
