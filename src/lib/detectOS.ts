import type { OSType } from '@/types'

export function detectOS(): OSType {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('mac')) return 'macOS'
  if (ua.includes('win')) return 'Windows'
  if (ua.includes('linux')) return 'Linux'
  return 'Windows'
}
