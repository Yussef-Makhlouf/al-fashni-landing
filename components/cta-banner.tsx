import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface CtaBannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  variant?: "blue" | "red" | "yellow" | "green" | "dark"
}

export function CtaBanner({ title, description, buttonText, buttonLink, variant = "blue" }: CtaBannerProps) {
  const bgClasses = {
    blue: "from-[#186af2]/95 via-[#186af2]/90 to-[#186af2]/80 dark:from-[#186af2]/95 dark:via-[#186af2]/90 dark:to-[#186af2]/80",
    red: "from-[#ea4235]/95 via-[#ea4235]/90 to-[#ea4235]/80 dark:from-[#ea4235]/95 dark:via-[#ea4235]/90 dark:to-[#ea4235]/80",
    yellow: "from-[#fabc05]/95 via-[#fabc05]/90 to-[#fabc05]/80 dark:from-[#fabc05]/95 dark:via-[#fabc05]/90 dark:to-[#fabc05]/80",
    green: "from-[#34a853]/95 via-[#34a853]/90 to-[#34a853]/80 dark:from-[#34a853]/95 dark:via-[#34a853]/90 dark:to-[#34a853]/80",
    dark: "from-[#111111]/95 via-[#111111]/90 to-[#111111]/80 dark:from-[#111111]/95 dark:via-[#111111]/90 dark:to-[#111111]/80",
  }

  const titleClasses = {
    blue: "text-white dark:text-white",
    red: "text-white dark:text-white",
    yellow: "text-white dark:text-white",
    green: "text-white dark:text-white",
    dark: "text-white dark:text-white",
  }

  const descriptionClasses = {
    blue: "text-white/90 dark:text-white/90",
    red: "text-white/90 dark:text-white/90",
    yellow: "text-white/90 dark:text-white/90",
    green: "text-white/90 dark:text-white/90",
    dark: "text-white/90 dark:text-white/90",
  }

  const buttonClasses = {
    blue: "bg-white text-[#186af2] hover:bg-blue-50 dark:bg-[#186af2] dark:text-white dark:hover:bg-[#186af2]/90 font-medium",
    red: "bg-white text-[#ea4235] hover:bg-red-50 dark:bg-[#ea4235] dark:text-white dark:hover:bg-[#ea4235]/90 font-medium",
    yellow: "bg-white text-[#fabc05] hover:bg-yellow-50 dark:bg-[#fabc05] dark:text-white dark:hover:bg-[#fabc05]/90 font-medium",
    green: "bg-white text-[#34a853] hover:bg-green-50 dark:bg-[#34a853] dark:text-white dark:hover:bg-[#34a853]/90 font-medium",
    dark: "bg-white text-[#111111] hover:bg-gray-100 dark:bg-white dark:text-[#111111] dark:hover:bg-gray-200 font-medium",
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
              <span>{buttonText.split('').join('\u200B')}</span>
              {buttonLink.startsWith("http") && <ExternalLink className="h-4 w-4" />}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
