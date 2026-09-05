import { useContext } from 'react'
import { OSContext } from '@/context/osContext'
import { detectOS } from '@/lib/detectOS'
import type { OSContextType } from '@/types'

export function useOS(): OSContextType {
  const ctx = useContext(OSContext)
  if (!ctx.detected) {
    // Fallback en caso de que se use fuera del provider
    return { os: detectOS(), detected: true }
  }
  return ctx
}
