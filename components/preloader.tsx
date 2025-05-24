"use client"

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Complete loading after progress reaches 100%
    const timer = setTimeout(() => {
      if (progress >= 100) {
        setTimeout(() => setIsLoading(false), 500)
      }
    }, 2500)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [progress])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative w-36 h-36 mb-6">
          <div className={cn(
            "absolute inset-0 rounded-full border-2 border-[#186af2]/30 animate-spin",
            isLoading ? "opacity-100" : "opacity-0"
          )} style={{ animationDuration: '3s' }} />
          
          <div className={cn(
            "absolute inset-0 rounded-full border-2 border-transparent border-t-[#186af2] animate-spin",
            isLoading ? "opacity-100" : "opacity-0"
          )} style={{ animationDuration: '1.5s' }} />
          
          <Image
            src="/logo.png"
            alt="الفشني للإعلان والعلاقات العامة"
            fill
            className={cn(
              "object-contain z-10 transition-all duration-1000",
              isLoading ? "animate-pulse scale-110" : "scale-100"
            )}
          />
        </div>
        
        <div className="w-64 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#186af2] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 flex flex-col items-center">
          <p className="text-sm text-foreground/70">
            {progress}%
          </p>
          <p className="mt-1 text-sm font-medium text-foreground/80 animate-pulse">
            جاري التحميل...
          </p>
        </div>
        
        <div className="absolute -z-10">
          <div className="w-40 h-40 rounded-full bg-[#186af2]/10 blur-xl animate-pulse" 
               style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  )
} 