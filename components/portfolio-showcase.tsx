"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, ExternalLink, Filter, Search, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { projects, type Project } from "@/data/projects"
import { categories } from "@/data/categories"
import { Badge } from "./ui/badge"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Filter out mobile-apps category and create a list of main categories for tabs
const projectCategories = categories
  .filter(category => category.id !== "mobile-apps")
  .slice(0, 6); // Limit to first 6 categories including "all"

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "carousel" | "featured">("featured")
  const showcaseRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(showcaseRef, { once: false, margin: "-100px" })
  
  // Filter projects based on category and search query
  useEffect(() => {
    // First filter out any mobile app projects
    let result = projects.filter(project => project.categoryId !== "mobile-apps")
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(project => project.categoryId === selectedCategory)
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    setFilteredProjects(result)
  }, [selectedCategory, searchQuery])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggeredItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  }

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: { 
      opacity: [0.5, 0.7, 0.5], 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 5, 
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const changeViewMode = (mode: "grid" | "carousel" | "featured") => {
    setViewMode(mode)
  }

  return (
    <section 
      ref={showcaseRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-40 left-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 dark:bg-blue-500/20 dark:text-blue-400">سجل إنجازاتنا</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[#186af2]">
            المشاريع التي قمنا بتنفيذها
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            نفخر بتقديم مجموعة متنوعة من المشاريع المميزة التي نفذناها بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="w-full md:w-auto">
            <Tabs
              defaultValue="all"
              value={selectedCategory}
              onValueChange={handleCategoryChange}
              className="w-full"
            >
              <TabsList className="flex flex-wrap h-auto bg-gray-100/80 dark:bg-gray-800/50 p-1 mb-4 md:mb-0">
                {projectCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 px-4 py-2 rounded-md text-sm"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث عن مشروع..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-200 dark:border-gray-700 w-full"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("grid")}
                className={cn(
                  "border-gray-200 dark:border-gray-700",
                  viewMode === "grid" && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                شبكة
              </Button>
              <Button
                variant={viewMode === "carousel" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("carousel")}
                className={cn(
                  "border-gray-200 dark:border-gray-700",
                  viewMode === "carousel" && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                شريط
              </Button>
              <Button
                variant={viewMode === "featured" ? "default" : "outline"}
                size="sm"
                onClick={() => changeViewMode("featured")}
                className={cn(
                  "border-gray-200 dark:border-gray-700",
                  viewMode === "featured" && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                مميز
              </Button>
            </div>
          </div>
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20 bg-gray-50 dark:bg-gray-800/40 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-md mx-auto">
              <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">لا توجد مشاريع مطابقة</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                لم نتمكن من العثور على أي مشاريع تطابق معايير البحث الخاصة بك. يرجى تجربة كلمات مفتاحية مختلفة أو تصفية أخرى.
              </p>
              <Button onClick={clearSearch} variant="outline">
                مسح البحث
              </Button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid View */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" && filteredProjects.length > 0 && (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={index}
                  variants={staggeredItemVariants}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 2 && (
                            <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                              +{project.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline"
                        >
                          عرض التفاصيل <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-medium bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-2.5 py-0.5 rounded-full">
                          مميز
                        </span>
                      )}
                    </div>
                    <Link href={`/portfolio/${project.id}`}>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                      {project.client && <span>{project.client}</span>}
                      {project.completionDate && (
                        <span>{new Date(project.completionDate).toLocaleDateString("ar-EG")}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Projects Carousel View */}
          {viewMode === "carousel" && filteredProjects.length > 0 && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredProjects.map((project, index) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {project.featured && (
                            <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                              مميز
                            </div>
                          )}
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <span className="text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2.5 py-0.5 rounded-full w-fit mb-2">
                            {project.category}
                          </span>
                          <Link href={`/portfolio/${project.id}`}>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4 flex-grow">
                            {project.description}
                          </p>
                          <Link
                            href={`/portfolio/${project.id}`}
                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mt-auto"
                          >
                            عرض المشروع <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-2">
                  <CarouselPrevious className="static translate-y-0 mx-2" />
                  <CarouselNext className="static translate-y-0 mx-2" />
                </div>
              </Carousel>
            </motion.div>
          )}

          {/* Featured Projects View */}
          {viewMode === "featured" && filteredProjects.length > 0 && (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Featured Project */}
              {filteredProjects.filter(p => p.featured).length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                  {filteredProjects
                    .filter(p => p.featured)
                    .slice(0, 1)
                    .map(project => (
                      <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            مشروع مميز
                          </div>
                        </div>
                        <div>
                          <span className="inline-block bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
                            {project.client && <span>العميل: {project.client}</span>}
                            {project.completionDate && (
                              <span>تاريخ الإنجاز: {new Date(project.completionDate).toLocaleDateString("ar-EG")}</span>
                            )}
                          </div>
                          <Link href={`/portfolio/${project.id}`}>
                            <Button className="gap-2">
                              عرض تفاصيل المشروع
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              ) : null}

              {/* Other Projects Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h3 className="text-2xl font-bold mb-6">مشاريع أخرى</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects
                    .filter(p => !p.featured || (p.featured && filteredProjects.filter(fp => fp.featured).indexOf(p) !== 0))
                    .map((project, index) => (
                      <motion.div
                        key={project.id}
                        custom={index}
                        variants={staggeredItemVariants}
                        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {project.featured && (
                            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                              مميز
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <Link
                              href={`/portfolio/${project.id}`}
                              className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline"
                            >
                              عرض التفاصيل <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2.5 py-0.5 rounded-full">
                            {project.category}
                          </span>
                          <Link href={`/portfolio/${project.id}`}>
                            <h3 className="font-bold text-lg mt-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>

              {/* View All Projects Button */}
              <div className="text-center mt-12">
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="gap-2">
                    عرض جميع المشاريع
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 