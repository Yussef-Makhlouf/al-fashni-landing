"use client"

import { create } from 'zustand'

type PreloaderStore = {
  isLoading: boolean
  progress: number
  setIsLoading: (isLoading: boolean) => void
  setProgress: (progress: number) => void
  incrementProgress: () => void
}

export const usePreloader = create<PreloaderStore>((set) => ({
  isLoading: true,
  progress: 0,
  setIsLoading: (isLoading) => set({ isLoading }),
  setProgress: (progress) => set({ progress }),
  incrementProgress: () => 
    set((state) => ({ 
      progress: state.progress >= 100 ? 100 : state.progress + 5 
    })),
})) 