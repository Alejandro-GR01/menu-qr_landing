/**
 * Image utilities for AVIF fallback and loading optimization.
 *
 * - AvifImg:  <picture> con AVIF + fallback PNG + loading eager|lazy
 *             Para <img> contexts (iconos, etc.). 100% nativo, sin JS.
 *
 * DeviceMockup (SVG <image>) maneja su propio fallback vía onError:
 *   intenta .avif primero, si el browser no lo soporta → cae a .png
 *   Un solo download, sin detección JS previa.
 */

/* ─── <picture> component for <img> contexts ─── */

interface AvifImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
}

/**
 * <picture> element that serves .avif when supported, falls back to .png.
 * El browser decide el formato según type="image/avif" — cero JS.
 *
 * Usage:
 *   <AvifImg src="/menu-qr_landing/icon.png" alt="Icon" loading="eager" />
 *
 * LCP hint: loading="eager" (default) para above-the-fold,
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
