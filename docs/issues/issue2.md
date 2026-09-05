# Issue 2 — Routing con React Router (3 páginas) + CTA por página

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Depende de:** — (puede empezar; solo necesita que existan los componentes Home/Hero/Features/etc. que ya existen)
> **Bloquea a:** Issue 3 (rellena FeaturesPage) e Issue 5 (rellena ContactPage)
> **Fase de ejecución:** Batch 2 (después de Batch 1)

## Qué construir

Convertir la landing de **una sola página** (hoy `App.tsx` apila Navbar + Hero + Features + HowItWorks + Comparison + TechStack + DownloadSection + Footer) a una SPA **multi-página con React Router**. `react-router-dom@7.17` ya está instalado en `package.json` (sin uso actual).

**3 rutas:**
| Ruta | Página | Contenido |
|------|--------|-----------|
| `/` | HomePage | Hero + Features + HowItWorks + Comparison + TechStack (reuse de componentes existentes) |
| `/funcionalidades` | FeaturesPage | Galería de vistas de la app (Inicial simple — Issue 3 lo completa) |
| `/contacto` | ContactPage | Formulario/CTA de contacto + FAQ (Inicial simple — Issue 5 lo completa) |

**Requisitos transversales:**
- **CTA en cada página** que lleve a `/contacto` (ContactButton existente o un Link con el mismo estilo).
- **HashRouter** (`#/funcionalidades`, `#/contacto`) — no BrowserRouter. Razón: el deploy es GitHub Pages con subpath (`base: '/menu-qr_landing/'`) y BrowserRouter da 404 al refrescar rutas anidadas. HashRouter es lo robusto para este deploy. **NO usar `<a href>` para navegación interna** — usar `<Link>`/`<NavLink>`.
- Mantener `scroll-behavior: smooth` y `scroll-padding-top` para que el scroll a una sección de la home siga funcionando.

## Archivos que modifica / crea

**Modifica:**
- `src/main.tsx` — envolver con `<HashRouter>` (y mantener `OSProvider`).
- `src/App.tsx` — reemplazar el layout apilado por `<Routes>` con `<Route path="/">`, `/funcionalidades`, `/contacto`. Mantener Navbar y Footer globales (fuera de Routes, compartidos por todas las páginas) + un `<main>` que contenga las rutas.
- `src/components/Navbar.tsx` — convertir los `<a href="#features">` a `<NavLink>` hacia `/`, `/funcionalidades`, `/contacto`. Añadir CTA "Contacto"/"Solicitar App" que navegue a `/contacto`. Mantener el hamburger mobile y el drawer.
- `src/components/Footer.tsx` — actualizar links de navegación a rutas (además del mailto de contacto).

**Crea (páginas — versiones INICIALES funcionales, no stubs vacíos):**
- `src/pages/HomePage.tsx` — monta los componentes existentes. Si el hero tiene un link ancla `#features`, ajustarlo para que dentro de la home siga scrolleando (ancla interna funciona en Home).
- `src/pages/FeaturesPage.tsx` — **versión inicial legible**: header + texto + un grid placeholder de vistas (sin imágenes aún), + CTA a `/contacto`. El contenido completo de galería lo llena el Issue 3.
- `src/pages/ContactPage.tsx` — **versión inicial**: sección de contacto con `ContactButton` (mailto) + CTA principal, + estructura para el FAQ. El FAQ completo lo agrega el Issue 5.

> ⚠️ **No modificar**: `HomePage` usa los componentes existentes SIN editarlos (Hero, Features, HowItWorks, Comparison, TechStack). Los issues 3 y 5 van a pisar `FeaturesPage.tsx` y `ContactPage.tsx` respectivamente después — por eso esas 2 páginas quedan como versiones iniciales aquí y no se tocan los archivos de componentes compartidos (excepto Navbar/Footer que SÍ son parte de este issue).

## Convenciones

- Export nombrado (`export function X()`), path alias `@/`.
- Design tokens del `@theme` (`bg-bg-primary`, `text-text-secondary`, `border-border`, `text-primary`, etc.).
- Secciones `py-24 px-4` + `max-w-* mx-auto` + header centrado.
- Responsive mobile-first (los breakpoints `sm/md/lg`).
- `NavLink` con clase activa (ej: `text-primary` cuando está activo).

## Criterios de aceptación

- [ ] `pnpm dev` corre sin errores y `pnpm build` (tsc -b + vite build) pasa.
- [ ] Navegando a `/` se ve la Home completa con Hero + Features + HowItWorks + Comparison + TechStack.
- [ ] Navegando a `/#/funcionalidades` se ve la FeaturesPage inicial + CTA a contacto.
- [ ] Navegando a `/#/contacto` se ve la ContactPage inicial con CTA de contacto.
- [ ] **Cada página** tiene al menos un CTA que lleva a `/contacto` (o mailto directo).
- [ ] El refresh directo en `/#/funcionalidades` NO da 404 (HashRouter).
- [ ] Navbar: los links navegan entre rutas (no anclas puras), el link activo se resalta, el hamburger mobile sigue funcionando.
- [ ] No se rompió el diseño responsive ni las animaciones `animate-fade-in-up` existentes.

## Plan de ejecución global (fases)

El proyecto se ejecuta en **3 batches** para evitar solape de archivos entre agentes:

```
Batch 1 — PARALELO, archivos disjuntos
  ▪ Issue 1 (capture-views)     → public/views/*.png + *.avif + views.md
  ▪ Issue 4 (comparison-3col)   → src/components/Comparison.tsx (+ tipo en src/types.ts)

Batch 2 — SECUENCIAL, después de Batch 1
  ▪ Issue 2 (routing-and-layout)→ src/main.tsx, src/App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx   ← ESTE ISSUE

Batch 3 — PARALELO, archivos disjuntos, después de Batch 2
  ▪ Issue 3 (views-showcase)    → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts (+ tipo ViewEntry en types.ts)
  ▪ Issue 5 (faq-contact)       → ContactPage.tsx + FAQ.tsx (+ tipo FAQItem en types.ts)
```

**Este issue corre en Batch 2** (después de Batch 1) y es PREREQUISITO de los issues 3 y 5 (Batch 3): crea las páginas `FeaturesPage.tsx` y `ContactPage.tsx` que ellos completan después.

> ⚠️ **Coordinación `src/types.ts`:** los issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno agrega SU interface respetando las existentes, sin borrar nada. No colisionan en tiempo (4 → Batch 1; 3 y 5 → Batch 3).

## Bloqueado por

**None - puede arrancar de inmediato.**
