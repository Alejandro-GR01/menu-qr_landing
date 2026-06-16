import { createContext, useContext, useState, type ReactNode } from 'react'
import type { OSType, OSContextType } from '@/types'

const OSContext = createContext<OSContextType>({ os: 'Windows', detected: false })

function detectOS(): OSType {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('mac')) return 'macOS'
  if (ua.includes('win')) return 'Windows'
  if (ua.includes('linux')) return 'Linux'
  return 'Windows'
}

export function OSProvider({ children }: { children: ReactNode }) {
  const [os] = useState<OSType>(detectOS)

  return (
    <OSContext.Provider value={{ os, detected: true }}>
      {children}
    </OSContext.Provider>
  )
}

export function useOS(): OSContextType {
  const ctx = useContext(OSContext)
  if (!ctx.detected) {
    // Fallback en caso de que se use fuera del provider
    return { os: detectOS(), detected: true }
  }
  return ctx
}
