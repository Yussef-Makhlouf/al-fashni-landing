"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#186af2] pulse-glow">الفشني</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            <Link
              href="/"
              className="px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              الرئيسية
            </Link>
            <Link
              href="/portfolio"
              className="px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              معرض الأعمال
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              خدماتنا
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-foreground hover:text-[#186af2] rounded-md text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#186af2] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              اتصل بنا
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button asChild variant="default" className="hidden md:inline-flex bg-[#186af2]  text-white">
              <Link href="/contact">احصل على استشارة مجانية</Link>
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-foreground hover:text-[#186af2] focus:outline-none transition-colors"
            >
              <span className="sr-only">فتح القائمة</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/90 backdrop-blur-md shadow-lg border-b border-border">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            الرئيسية
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            معرض الأعمال
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            خدماتنا
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            من نحن
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-[#186af2]/10 hover:text-[#186af2] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            اتصل بنا
          </Link>
          <div className="pt-4">
            <Button asChild variant="default" className="w-full bg-[#186af2] text-white">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                احصل على استشارة مجانية
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
