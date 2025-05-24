import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"

const handicrafts = localFont({
  src: [
    {
      path: './fonts/TheYearofHandicrafts-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TheYearofHandicrafts-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TheYearofHandicrafts-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/TheYearofHandicrafts-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TheYearofHandicrafts-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-handicrafts',
})

export const metadata: Metadata = {
  title: "الفشني للتسويق الرقمي",
  description: "شركة الفشني للتسويق الرقمي - معرض أعمالنا ومشاريعنا",
  icons: {
    icon: "/logo.png",
    
  },
}

function GlowDots() {
  return (
    <div className="glow-dots">
      <div className="glow-dot"></div>
      <div className="glow-dot"></div>
      <div className="glow-dot"></div>
      <div className="glow-dot"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${handicrafts.variable} font-handicrafts`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Preloader />
          <Navbar />
          <GlowDots />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
