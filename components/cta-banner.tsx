import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface CtaBannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  variant?: "blue" | "purple" | "indigo" | "amber" | "dark"
}

export function CtaBanner({ title, description, buttonText, buttonLink, variant = "indigo" }: CtaBannerProps) {
  const bgClasses = {
    blue: "from-blue-600/95 via-blue-500/90 to-blue-400/80 dark:from-blue-800/95 dark:via-blue-700/90 dark:to-blue-600/80",
    purple: "from-purple-600/95 via-purple-500/90 to-purple-400/80 dark:from-purple-800/95 dark:via-purple-700/90 dark:to-purple-600/80",
    indigo: "from-indigo-600/95 via-indigo-500/90 to-indigo-400/80 dark:from-indigo-800/95 dark:via-indigo-700/90 dark:to-indigo-600/80", 
    amber: "from-amber-600/95 via-amber-500/90 to-amber-400/80 dark:from-amber-800/95 dark:via-amber-700/90 dark:to-amber-600/80",
    dark: "from-gray-900/95 via-gray-800/90 to-gray-700/80 dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-800/80",
  }

  const titleClasses = {
    blue: "text-white dark:text-white",
    purple: "text-white dark:text-white",
    indigo: "text-white dark:text-white",
    amber: "text-white dark:text-white",
    dark: "text-white dark:text-white",
  }

  const descriptionClasses = {
    blue: "text-white/90 dark:text-white/90",
    purple: "text-white/90 dark:text-white/90",
    indigo: "text-white/90 dark:text-white/90",
    amber: "text-white/90 dark:text-white/90",
    dark: "text-white/90 dark:text-white/90",
  }

  const buttonClasses = {
    blue: "bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 font-medium",
    purple: "bg-white text-purple-600 hover:bg-purple-50 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700 font-medium",
    indigo: "bg-white text-indigo-600 hover:bg-indigo-50 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700 font-medium",
    amber: "bg-white text-amber-600 hover:bg-amber-50 dark:bg-amber-600 dark:text-white dark:hover:bg-amber-700 font-medium",
    dark: "bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 font-medium",
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient with grid overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br",
        bgClasses[variant]
      )}>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>
      
      {/* Enhanced glowing orbs effect */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/30 dark:bg-white/20 blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white/30 dark:bg-white/20 blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-white/20 dark:bg-white/15 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/30 shadow-xl">
          <h2 className={cn("text-2xl md:text-3xl font-bold mb-4 tracking-tight", titleClasses[variant])}>{title}</h2>
          <p className={cn("mb-8 max-w-2xl mx-auto text-base md:text-lg", descriptionClasses[variant])}>{description}</p>

          <Button 
            asChild 
            className={cn(
              "shadow-lg hover:shadow-xl transition-all border-0 px-6 py-5 text-base",
              buttonClasses[variant]
            )}
          >
            <Link href={buttonLink} className="flex items-center gap-2">
              <span>{buttonText}</span>
              {buttonLink.startsWith("http") && <ExternalLink className="h-4 w-4" />}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
