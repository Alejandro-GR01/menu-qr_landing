/**
 * Image utilities for AVIF fallback and loading optimization.
 *
 * - AvifImg:      <picture> con AVIF + fallback + loading eager|lazy
 * - useAvifSrc:   hook que devuelve src .avif si el browser lo soporta
 * - getAvifSrc:   función síncrona optimista (fallback sync, cacheada)
 *
 * DETECCIÓN DE AVIF:
 *   Fase 1 (sync): canvas.toDataURL('image/avif')
 *     → funciona cuando el browser PUEDE CODIFICAR AVIF
 *   Fase 2 (async): new Image() con icon.avif real desde el servidor
 *     → funciona cuando el browser PUEDE DECODIFICAR AVIF
 *     → usa el mismo archivo que <picture> carga, el cache del HTTP lo hace instantáneo
 *
 *   Chromium:  no puede codificar AVIF (canvas falls back a PNG)
 *              pero SÍ puede decodificar AVIF → Fase 2 confirma soporte
 *   Safari:    puede codificar Y decodificar AVIF → Fase 1 inmediato
 *   Firefox:   puede codificar Y decodificar AVIF → Fase 1 inmediato
 */

import { useEffect, useState } from 'react'

/* ─── AVIF support detection (two-phase: sync canvas + async real AVIF) ─── */

let _avifSupported: boolean | null = null
let _avifPromise: Promise<boolean> | null = null

/**
 * Sincrónico: usa canvas.toDataURL.
 * Rápido, funciona en Safari y Firefox cuando pueden codificar AVIF.
 * En Chromium falla (no puede codificar AVIF) → lanza async check.
 */
function _checkAvifSync(): boolean {
  if (_avifSupported !== null) return _avifSupported
  try {
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    const ctx = c.getContext('2d')!
    ctx.fillRect(0, 0, 1, 1)
    const data = c.toDataURL('image/avif')
    if (data.startsWith('data:image/avif') && data.length > 50) {
      _avifSupported = true
      return true
    }
  } catch {}
  // Canvas falló → lanzamos async check con AVIF real
  _checkAvifAsync()
  return false
}

/**
 * Asíncrono: usa el AVIF real del servidor (icon.avif) para detectar soporte.
 * 100% confiable porque prueba decodificación real AVIF, no codificación canvas.
 *
 * icon.avif se sirve desde el mismo dominio, <picture> ya lo precarga,
 * así que el cache HTTP lo resuelve casi instantáneo.
 */
function _checkAvifAsync(): Promise<boolean> {
  if (_avifPromise) return _avifPromise

  // Obtenemos la base URL del entorno actual
  const baseUrl = typeof document !== 'undefined'
    ? document.querySelector('base')?.getAttribute('href') || import.meta.env.BASE_URL
    : import.meta.env.BASE_URL

  _avifPromise = new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      _avifSupported = true
      resolve(true)
    }

    img.onerror = () => {
      // Chrome 147+ NO soporta decodificación AVIF en Image() tampoco
      _avifSupported = false
      resolve(false)
    }

    // Cargamos el AVIF real que está en el servidor
    img.src = `${baseUrl}icon.avif`
  })

  return _avifPromise
}

/* ─── Sync helper ─── */

/**
 * Devuelve la versión .avif si el browser probablemente lo soporta.
 * Falls back a PNG si no está confirmado todavía (se actualiza vía useAvifSrc).
 *
 * Para SVG <image> contexts donde no podemos usar <picture>.
 */
export function getAvifSrc(src: string): string {
  return _checkAvifSync() ? src.replace(/\.(png|jpg|jpeg)$/i, '.avif') : src
}

/* ─── React hook (dos fases: render inicial + async check) ─── */

/**
 * Hook que devuelve la versión .avif de un path.
 * Fase 1: render con PNG si canvas check falló (Chromium)
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
