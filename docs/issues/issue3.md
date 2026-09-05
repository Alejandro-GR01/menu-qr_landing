# Issue 3 — ViewsShowcase: galería de vistas de la app (página Funcionalidades)

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Depende de:** Issue 1 (screenshots regenerados) + Issue 2 (la ruta `/funcionalidades` y la `FeaturesPage` inicial existen)
> **Fase de ejecución:** Batch 3 (paralelo con Issue 5 — archivos disjuntos)

## Qué construir

Completar la **página Funcionalidades** (`/funcionalidades`, ya creada como versión inicial en Issue 2) con una **galería interactiva de las vistas de la app**, cada una mostrada **dentro de los SVGs `LaptopFrame` y `MobileFrame`** (los mockups que enmarcan la imagen simulando desktop y mobile, ya existentes en `src/components/DeviceMockup.tsx`).

Es la página que le muestra al visitante la **riqueza del panel admin y del POS** de la v2.0.4, usando las screenshots regeneradas en el Issue 1.

## A qué vistas apunta

Usar las que el Issue 1 capturó (ej: login, admin-ddash, admin-config, admin-categories, admin-products, admin-qr, admin-menu-preview, admin-sellers, admin-tickets, admin-printer, admin-db, menu-public, menu-promotion, seller-pos, admin-qr-wifi). Adaptar el array de datos a los archivos que efectivamente existan en `public/views/`.

## Data model (en `src/types.ts`)

```ts
export interface ViewEntry {
  id: string;          // 'login', 'admin-dashboard', ...
  title: string;       // Título mostrado al usuario
  description: string; // Qué muestra esta vista
  desktopSrc: string;  // `${baseUrl}views/{id}-desktop.avif` (con fallback png)
  mobileSrc: string;   // `${baseUrl}views/{id}-mobile.avif` (con fallback png)
  tags: string[];      // ['admin', 'público', 'configuración', 'QR', 'POS', 'datos', ...]
}
```

## Archivos que crea / modifica

**Crea:**
- `src/data/views.ts` — array `VIEWS: ViewEntry[]` con las vistas (usar `import.meta.env.BASE_URL` + los nombres de archivo del Issue 1).
- `src/components/ViewsShowcase.tsx` — el componente de galería.

**Modifica:**
- `src/pages/FeaturesPage.tsx` — reemplazar el contenido inicial por el `<ViewsShowcase />` + un CTA hacia `/contacto`.
- `src/types.ts` — agregar la interface `ViewEntry` (no romper las existentes).

## Componente `ViewsShowcase` — comportamiento

- **Navegación por tabs** (scroll horizontal en mobile): un botón por vista. La activa se resalta.
- **Mockups:** mostrá la vista activa en `LaptopFrame` (desktop) y `MobileFrame` (mobile) lado a lado en desktop; apilados/centrados en mobile.
  - Desktop: `LaptopFrame` (col-span-2) + `MobileFrame` (col-span-1, angosto).
  - Mobile (< md): `LaptopFrame` full width + `MobileFrame` debajo, centrado y angosto.
- **Filtros rápidos** por tag (todas / admin / público / ...) arriba de los tabs.
- **Descripción** de la vista activa debajo de los mockups, centrada.
- Estilo consistente: cards `bg-bg-surface`/`border-border`, hover `border-primary/30`.
- Los mockups ya manejan **fallback AVIF→PNG** vía `onerror` — pasarles el `.avif` y fallan a `.png` solos.

## Convenciones

- Export nombrado, `@/` alias, design tokens del `@theme`.
- `LaptopFrame`/`MobileFrame` reciben `src` y `alt` — reutilizar tal cual.
- Responsive mobile-first.

## Criterios de aceptación

- [ ] `pnpm build` pasa (tsc + vite).
- [ ] En `/#/funcionalidades` se ven los mockups enmarcados por los SVGs `LaptopFrame` y `MobileFrame`, no el placeholder del Issue 2.
- [ ] Navegación por tabs cambia la vista activa (desktop+mobile mockups + descripción).
- [ ] Los filtros por tag funcionan.
- [ ] El CTA hacia `/contacto` está presente en la página.
- [ ] Las imágenes usan `.avif` con fallback a `.png` (no se rompe si falta el avif).
- [ ] Responsive: se ve bien en mobile, tablet y desktop.
- [ ] No modifica `Features.tsx`, `Comparison.tsx`, `Navbar.tsx`, `ContactPage.tsx` (son de otros issues).

## Plan de ejecución global (fases)

El proyecto se ejecuta en **3 batches** para evitar solape de archivos entre agentes:

```
Batch 1 — PARALELO, archivos disjuntos
  ▪ Issue 1 (capture-views)     → public/views/*.png + *.avif + views.md
  ▪ Issue 4 (comparison-3col)   → src/components/Comparison.tsx (+ tipo en src/types.ts)

Batch 2 — SECUENCIAL, después de Batch 1
  ▪ Issue 2 (routing-and-layout)→ src/main.tsx, src/App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx

Batch 3 — PARALELO, archivos disjuntos, después de Batch 2
  ▪ Issue 3 (views-showcase)    → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts (+ tipo ViewEntry en types.ts)   ← ESTE ISSUE
  ▪ Issue 5 (faq-contact)       → ContactPage.tsx + FAQ.tsx (+ tipo FAQItem en types.ts)
```

**Este issue corre en Batch 3** en paralelo con el Issue 5. Comparte `src/types.ts` con los issues 4 y 5, pero NO colisiona en tiempo (4 → Batch 1, terminado antes).

> ⚠️ **Coordinación `src/types.ts`:** los issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno agrega SU interface respetando las existentes, sin borrar nada.

## Bloqueado por

- Issue 1 (capture-views) — provee las screenshots
- Issue 2 (routing-and-layout) — provee la ruta `/funcionalidades` y `FeaturesPage.tsx`
