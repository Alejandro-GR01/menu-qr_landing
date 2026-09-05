import { useState, type ReactNode } from 'react'
import { OSContext } from '@/context/osContext'
import { detectOS } from '@/lib/detectOS'
import type { OSType } from '@/types'

export function OSProvider({ children }: { children: ReactNode }) {
  const [os] = useState<OSType>(detectOS)

  return (
    <OSContext.Provider value={{ os, detected: true }}>
      {children}
    </OSContext.Provider>
  )
}
