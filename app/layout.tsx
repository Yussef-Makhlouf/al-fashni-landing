import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "الفشني للإعلان والعلاقات العامة",
  description: "شركة الفشني للإعلان والعلاقات العامة - معرض أعمالنا ومشاريعنا",
    generator: 'v0.dev'
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
      <body className={`${cairo.variable} font-cairo`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <GlowDots />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
