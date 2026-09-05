import { createContext } from 'react'
import type { OSContextType } from '@/types'

export const OSContext = createContext<OSContextType>({ os: 'Windows', detected: false })
