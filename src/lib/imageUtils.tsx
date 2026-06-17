/**
 * Image utilities for AVIF fallback and loading optimization.
 *
 * - AvifImg:      <picture> con AVIF + fallback + loading eager|lazy
 * - useAvifSrc:   hook que devuelve src .avif si el browser lo soporta
 * - getAvifSrc:   función síncrona optimista (canvas check, cacheada)
 */

import { useEffect, useState } from 'react'

/* ─── AVIF support detection (two-phase: sync canvas + async Image API) ─── */

let _avifSupported: boolean | null = null
let _avifPromise: Promise<boolean> | null = null

/**
 * Sincrónico: usa canvas toDataURL (rápido, ~99% de los casos).
 * Si falla, lanza detección asíncrona vía Image() con AVIF mínimo real.
 * La promesa se cachea para no repetir.
 */
function _checkAvifSync(): boolean {
  if (_avifSupported !== null) return _avifSupported
  try {
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    const ctx = c.getContext('2d')
    ctx!.fillRect(0, 0, 1, 1)
    const data = c.toDataURL('image/avif')
    // Asegura que sea un AVIF real, no un placeholder vacío
    if (data.startsWith('data:image/avif') && data.length > 50) {
      _avifSupported = true
      return true
    }
  } catch {}
  // No estamos seguros → lanzamos async check pero devolvemos false por ahora
  _checkAvifAsync()
  return false
}

/**
 * Asíncrono: usa Image() con un AVIF real generado desde canvas.
 * Más confiable que toDataURL solo.
 */
function _checkAvifAsync(): Promise<boolean> {
  if (_avifPromise) return _avifPromise

  _avifPromise = new Promise((resolve) => {
    // Generamos un AVIF mínimo desde canvas (1x1 píxel)
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    const ctx = c.getContext('2d')!
    ctx.fillRect(0, 0, 1, 1)

    c.toBlob((blob) => {
      if (!blob || blob.type !== 'image/avif') {
        _avifSupported = false
        resolve(false)
        return
      }

      const url = URL.createObjectURL(blob)
      const img = new Image()
      img.onload = () => {
        _avifSupported = true
        URL.revokeObjectURL(url)
        resolve(true)
      }
      img.onerror = () => {
        _avifSupported = false
        URL.revokeObjectURL(url)
        resolve(false)
      }
      img.src = url
    }, 'image/avif', 0.5)
  })

  return _avifPromise
}

/* ─── Sync helper ─── */

/**
 * Devuelve la versión .avif si el browser probablemente lo soporta.
 * Falls back a PNG si no está confirmado todavía (se actualiza luego).
 *
 * Para SVG <image> contexts donde no podemos usar <picture>.
 */
export function getAvifSrc(src: string): string {
  return _checkAvifSync() ? src.replace(/\.(png|jpg|jpeg)$/i, '.avif') : src
}

/* ─── React hook (dos fases: render inicial + async check) ─── */

/**
 * Hook que devuelve la versión .avif de un path.
 * Fase 1: render con PNG si canvas check falló
 * Fase 2: update a AVIF si Image API confirma soporte (re-render)
 */
export function useAvifSrc(src: string): string {
  const [currentSrc, setCurrentSrc] = useState(() => getAvifSrc(src))

  useEffect(() => {
    // Si el sync check ya dijo que sí, no hacemos nada más
    if (_avifSupported === true) return

    _checkAvifAsync().then((supported) => {
      if (supported) {
        setCurrentSrc(src.replace(/\.(png|jpg|jpeg)$/i, '.avif'))
      }
    })
  }, [src])

  return currentSrc
}

/* ─── <picture> component for <img> contexts ─── */

interface AvifImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
}

/**
 * <picture> element that serves .avif when supported, falls back to the original.
 * NO usa JavaScript detection — el browser decide según type="image/avif".
 * Esto es 100% confiable, funciona en TODOS los casos.
 *
 * Usage:
 *   <AvifImg src="/menu-qr_landing/icon.png" alt="Icon" loading="eager" />
 *
 * LCP hint: loading="eager" (o omitir) para above-the-fold,
 *           loading="lazy" para below-the-fold.
 */
export function AvifImg({ src, ...imgProps }: AvifImgProps) {
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.avif')

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <img src={src} {...imgProps} />
    </picture>
  )
}
