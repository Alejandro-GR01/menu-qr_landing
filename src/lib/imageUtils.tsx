/**
 * Image utilities for AVIF fallback and loading optimization.
 *
 * - AvifImg:      <picture> con AVIF + fallback + loading eager|lazy
 * - useAvifSrc:    hook que devuelve src .avif si el browser lo soporta
 * - getAvifSrc:   función síncrona (check one-shot cached)
 */

import { useEffect, useState } from 'react'

/* ─── AVIF support detection (cached, one-shot) ─── */

let _avifSupported: boolean | null = null

function _detectAvif(): boolean {
  if (_avifSupported !== null) return _avifSupported
  try {
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    _avifSupported = c.toDataURL('image/avif').startsWith('data:image/avif')
  } catch {
    _avifSupported = false
  }
  return _avifSupported
}

/* ─── Sync helper: replace .png → .avif if supported ─── */

/**
 * Returns the AVIF version of a path if the browser supports it,
 * or the original path otherwise. Sync, cached, safe to call anywhere.
 */
export function getAvifSrc(src: string): string {
  return _detectAvif() ? src.replace(/\.(png|jpg|jpeg)$/i, '.avif') : src
}

/* ─── React hook ─── */

/**
 * Hook that returns the AVIF version of a path once support is confirmed.
 * Falls back to the original path if AVIF is not supported.
 */
export function useAvifSrc(src: string): string {
  const [avifSrc, setAvifSrc] = useState(src)

  useEffect(() => {
    setAvifSrc(getAvifSrc(src))
  }, [src])

  return avifSrc
}

/* ─── <picture> component for <img> contexts ─── */

interface AvifImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  /** If true, the browser decides based on <picture> source matching */
  noFallbackCheck?: boolean
}

/**
 * <picture> element that serves .avif when supported, falls back to the original.
 *
 * Usage:
 *   <AvifImg src="/menu-qr_landing/icon.png" alt="Icon" loading="eager" />
 *
 * LCP hint: use loading="eager" (or omit) for above-the-fold images,
 *           loading="lazy" for below-the-fold.
 */
export function AvifImg({ src, noFallbackCheck, ...imgProps }: AvifImgProps) {
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.avif')

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <img src={src} {...imgProps} />
    </picture>
  )
}
