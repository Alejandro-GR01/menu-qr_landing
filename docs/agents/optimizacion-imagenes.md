# Optimización de imágenes — Pipeline AVIF

> **App de compresión:** `/Users/alejandrogr011231/Documents/DEV/pruebas/conversor/`
> **Stack:** Vite + React + Tailwind CSS v4 + canvas API
> **Propósito:** Convertir screenshots PNG a AVIF con calidad controlada

## Cómo funciona el Image Compressor

App web **100% cliente** (sin backend) con la **Canvas API** del navegador:

```
[Input PNG/JPEG] → [Canvas 2D] → [canvas.toBlob(mime, quality)] → [Descarga AVIF/WebP/JPEG]
                     ↑
            drawImage() renderiza la imagen original
```

**Flujo detallado:**
1. **Drop/Select** — arrastras o seleccionas un archivo
2. **Preview** — se crea un `ObjectURL` para mostrar la imagen original
3. **Canvas render** — `drawImage()` pinta la imagen en un canvas oculto
4. **Conversion** — `canvas.toBlob(blob, format, quality)`:
   - `format`: `'image/avif'`, `'image/webp'`, o `'image/jpeg'`
   - `quality`: 0.0 a 1.0 (controla el nivel de compresión)
5. **Preview resultante** — muestra el resultado con tamaño y % de reducción
6. **Download** — `URL.createObjectURL(blob)` + `<a download>`

## Pipeline del proyecto

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌───────────┐
│  Playwright  │    │     PNG      │    │  Conversor  │    │    AVIF   │
│  captura las │───▶│ 36 archivos  │───▶│  calidad 80 │───▶│ 36 archivos│
│  18 vistas   │    │              │    │  a AVIF     │    │           │
└─────────────┘    └──────────────┘    └─────────────┘    └───────────┘
                                                               │
                                                               ▼
                                                       ┌──────────────┐
                                                       │  public/     │
                                                       │  views/*.avif│
                                                       └──────────────┘
```

## Paso a paso manual (usuario — no hay server corriendo)

```bash
# 1. Iniciar el conversor
cd /Users/alejandrogr011231/Documents/DEV/pruebas/conversor
pnpm dev

# 2. Abrir http://localhost:5173 en el navegador
# 3. Arrastrar cada PNG de public/views/
# 4. Seleccionar formato AVIF, calidad 80
# 5. Descargar a public/views/ con el mismo nombre (cambiar extensión a .avif)
```

### ✅ Estado: 36/36 AVIF convertidos (2026-09-11)

El usuario convirtió los 36 PNG con **ezgif.com** (genera sufijo `-ezgif.com-apng-to-avif-converter`). Proceso aplicado:

1. Eliminar los `.avif` viejos (sin sufijo ezgif, del 5-sep).
2. Eliminar duplicado `admin-tickets-desktop-ezgif...(1).avif`.
3. Renombrar los 36 quitando `-ezgif.com-apng-to-avif-converter` → quedan `{view}-{device}.avif` limpios.

> **Gotcha ezgif:** el sufijo del converteor hay que quitarlo SIEMPRE — `views.ts` genera `{id}-{device}.png` y `DeviceMockup` reemplaza a `.avif`; un nombre con `-ezgif...` rompe el match.

## Cómo se sirven los AVIF en el landing

**Regla de oro:** los mockups (SVG `<image>`) reciben SIEMPRE el **PNG como base** — nunca el `.avif` directo (rompe el fallback).

Dos estrategias:

### Para `<img>` (iconos, etc.) — `AvifImg` en `src/lib/imageUtils.tsx`

```tsx
// <picture> con AVIF + fallback PNG nativo del browser
export function AvifImg({ src, ...imgProps }: AvifImgProps) {
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.avif');
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <img src={src} {...imgProps} />
    </picture>
  );
}
```

El browser **decide solo**: si soporta `type="image/avif"`, descarga AVIF. Si no, cae a PNG. Cero JavaScript.

### Para SVG `<image>` (DeviceMockup) — fallback nativo

```tsx
// src/components/DeviceMockup.tsx
// SVG <image> con fallback onerror
const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.avif');
const [currentSrc, setCurrentSrc] = useState(avifSrc);

// Si el browser no soporta AVIF, el evento error nativo del SVG cambia a PNG
useEffect(() => {
  const el = imgRef.current;
  if (!el) return;
  el.addEventListener('error', () => setCurrentSrc(src));
  return () => el.removeEventListener('error', () => setCurrentSrc(src));
}, [src]);
```

Un solo intento, un solo download. Si AVIF funciona → AVIF. Si no → PNG.

## Tamaños esperados (PNG vs AVIF q80)

| Vista | PNG | AVIF q80 (estimado) | Ahorro |
|-------|-----|-------------------|--------|
| admin-products | ~350 KB | ~85 KB | ~76% |
| menu-public | ~595 KB | ~80 KB | ~86% |
| menu-promotion | ~540 KB | ~75 KB | ~86% |
| admin-menu-preview | ~500 KB | ~70 KB | ~86% |
| admin-config | ~180 KB | ~45 KB | ~75% |
| admin-categories | ~200 KB | ~50 KB | ~75% |
| admin-dashboard | ~115 KB | ~28 KB | ~75% |
| login | ~120 KB | ~30 KB | ~75% |
| admin-qr | ~100 KB | ~20 KB | ~80% |
| admin-db | ~80 KB | ~16 KB | ~80% |

Los AVIF suelen ser **60-80% más livianos** que PNG a calidad visual equivalente.