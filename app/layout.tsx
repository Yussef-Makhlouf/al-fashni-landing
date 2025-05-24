import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
      <body className={`${handicrafts.variable} font-handicrafts`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <GlowDots />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
