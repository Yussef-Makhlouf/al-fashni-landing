"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeServicesMobile, setActiveServicesMobile] = useState(false)
  const pathname = usePathname()
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 800) // 800ms delay before closing
    
    setCloseTimeout(timeout)
  }

  const serviceLinks = [
    { href: "/services/web-development", label: "تــطــويــر المــواقــع" },
    { href: "/services/graphic-design", label: "تــصــمــيــم جــرافــيــك" },
    { href: "/services/video-production", label: "إنــتــاج فــيــديــو" },
    { href: "/services/digital-marketing", label: "تــســويــق رقــمــي" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image 
              src="/logo.png"
              alt="الفشني للإعلان والعلاقات العامة"
              width={100}
              height={100}
              className="w-50 h-50"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                pathname === "/" ? "text-[#186af2]" : "text-foreground hover:text-[#186af2]"
              )}
            >
              الــرئــيــســيــة
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                pathname === "/portfolio" || pathname.startsWith("/portfolio/") ? "text-[#186af2]" : "text-foreground hover:text-[#186af2]"
              )}
            >
              مــعــرض الأعــمــال
            </Link>
            
            {/* Services dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors cursor-pointer">
                <Link 
                  href="/services" 
                  className={cn(
                    "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                    pathname === "/services" || pathname.startsWith("/services/") ? "text-[#186af2]" : ""
                  )}
                >
                  خــدمــاتــنــا
                </Link>
                <ChevronDown className={`h-4 w-4 mr-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown menu */}
              <div 
                className={`absolute right-0 mt-1 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-100 dark:border-gray-700 min-w-[200px] transform transition-all duration-200 origin-top-right ${
                  isServicesOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {serviceLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors",
                      pathname === link.href ? "text-[#186af2] bg-[#186af2]/5" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/about"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                pathname === "/about" ? "text-[#186af2]" : "text-foreground hover:text-[#186af2]"
              )}
            >
              مــن نــحــن
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                pathname === "/contact" ? "text-[#186af2]" : "text-foreground hover:text-[#186af2]"
              )}
            >
              اتــصــل بــنــا
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button asChild variant="default" className="hidden md:inline-flex bg-[#186af2] hover:bg-[#0d4ebd] text-white">
              <Link href="/contact">احــصــل عــلــى اســتــشــارة مــجــانــيــة</Link>
            </Button> 

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-foreground hover:text-[#186af2] focus:outline-none transition-colors relative z-50"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">فتح القائمة</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-3'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Overlay with slide-in effect */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md md:hidden z-40 transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className={cn(
            "h-full w-full max-w-sm mr-auto flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out pt-20 pb-6 px-6",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-[#186af2]/10 transition-colors",
                pathname === "/" ? "text-[#186af2] bg-[#186af2]/5 border-r-4 border-[#186af2]" : "text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>الــرئــيــســيــة</span>
              {pathname === "/" && <div className="w-2 h-2 rounded-full bg-[#186af2]"></div>}
            </Link>
            
            <Link
              href="/portfolio"
              className={cn(
                "px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-[#186af2]/10 transition-colors",
                pathname === "/portfolio" || pathname.startsWith("/portfolio/") ? "text-[#186af2] bg-[#186af2]/5 border-r-4 border-[#186af2]" : "text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>مــعــرض الأعــمــال</span>
              {(pathname === "/portfolio" || pathname.startsWith("/portfolio/")) && <div className="w-2 h-2 rounded-full bg-[#186af2]"></div>}
            </Link>
            
            {/* Services accordion */}
            <div className="border-b border-border/30 pb-1">
              <button
                onClick={() => setActiveServicesMobile(!activeServicesMobile)}
                className={cn(
                  "w-full px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-[#186af2]/10 transition-colors",
                  pathname === "/services" || pathname.startsWith("/services/") ? "text-[#186af2] bg-[#186af2]/5 border-r-4 border-[#186af2]" : "text-foreground"
                )}
              >
                <span>خــدمــاتــنــا</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    activeServicesMobile ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  activeServicesMobile ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pr-4 border-r-2 border-[#186af2]/20 mr-3 mt-2 space-y-1">
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-[#186af2]/10",
                        pathname === link.href ? "text-[#186af2] bg-[#186af2]/5" : "text-foreground/90"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="/about"
              className={cn(
                "px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-[#186af2]/10 transition-colors",
                pathname === "/about" ? "text-[#186af2] bg-[#186af2]/5 border-r-4 border-[#186af2]" : "text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>مــن نــحــن</span>
              {pathname === "/about" && <div className="w-2 h-2 rounded-full bg-[#186af2]"></div>}
            </Link>
            
            <Link
              href="/contact"
              className={cn(
                "px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-[#186af2]/10 transition-colors",
                pathname === "/contact" ? "text-[#186af2] bg-[#186af2]/5 border-r-4 border-[#186af2]" : "text-foreground"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>اتــصــل بــنــا</span>
              {pathname === "/contact" && <div className="w-2 h-2 rounded-full bg-[#186af2]"></div>}
            </Link>
          </nav>
          
          <div className="mt-auto pt-6">
            <Button asChild variant="default" className="w-full bg-[#186af2] hover:bg-[#0d4ebd] text-white py-6 text-lg shadow-lg">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                احــصــل عــلــى اســتــشــارة مــجــانــيــة
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
