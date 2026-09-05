---
name: landing-page-guide-v2
description: Create and polish distinctive, high-converting landing pages with proven conversion elements and exceptional design quality, avoiding generic AI aesthetics. Adapts the 11 essential elements framework to this project's real stack (Vite + React 19 + Tailwind CSS v4 — NOT Next.js). ALWAYS write copy in Rioplatense Spanish (voseo argentino, "español rioplatense") with warmth and flair.
---

# Landing Page Guide V2 (adaptada a este proyecto)

## Overview

Guía para crear/refinar **landing pages distintivas y de alta conversión** en este proyecto.
Combina un **framework de conversión probado (11 elementos de DESIGNNAS)** con
**calidad de diseño excepcional** y una **voz de copy propia**.

> ⚠️ **STACK REAL DE ESTE PROYECTO (NO Next.js):**
> - **Vite** (no Next.js App Router)
> - **React 19** (no Next 14)
> - **Tailwind CSS v4** con `@theme` en `src/style.css` (usa los tokens custom: `bg-surface`, `text-text-primary`, `text-text-secondary`, `bg-primary`, `border-border`)
> - **SIN ShadCN UI** — los componentes son funcionales propios con Tailwind
> - **HashRouter** (react-router-dom) en subpath de GitHub Pages
> - **LaptopFrame / MobileFrame** en `src/components/DeviceMockup.tsx` para mockups con screenshots (fallback AVIF/PNG)
>
> NO intentes instalar Next.js ni ShadCN. Adaptá los principios de la guía al stack Vite+Tailwind.

## ⭐ IDIOMA OBLIGATORIO: Español estándar (normal, SIN voseo)

TODO el copy de la landing se escribe en **español estándar latinoamericano** — español normal, claro y natural:

- ✅ **Conjugación normal (estándar)**: "descargas", "generas", "imprimes", "pones", "tienes", "puedes", "haces", "eliges", "coge", "pagas"
- ❌ **NO voseo rioplatense**: prohibidos "descargás", "cargá", "cogé", "hacé", "tenés", "podés", "elegí", "escaneá", "imprimís", "ponés" (imperativos voseo con tilde final y voseo acentuado — NUNCA)
- ✅ **Las tildes normales del español SE MANTIENEN** donde corresponde: "menú", "así", "está", "camión", "fácil", "día", "más"
- ❌ NO español de España ("ordenador", "vosotros", "enfriar", "¿podéis?")
- ❌ NO jerga regional fuerte (ni cubano pesado, ni chileno, ni etc.)
- ❌ NO neutro lavado sin personalidad — el tono es cálido y con gracia, pero la gramática es estándar
- ✅ **Con gracia y calidez**: cercano, conversacional, con chispa — como le habla un amigo que sabe
- ✅ Tono: simple, directo, cálido, con un toque de humor/ingenio cuando corresponde — pero SIEMPRE claro y profesional
- ⚠️ **PRESENTE, NO IMPERATIVO**: la landing DESCRIBE lo que el usuario hace (presente indicativo estándar: "descargas", "generas", "configuras", "imprimes"). NO ORDENA con imperativos ("cargá", "descargá", "generá", "cogé"). Labels de botones de UI ("Solicitar App", "Enviar solicitud") quedan en infinitivo, eso es estándar.

Ejemplos de voz (español estándar con gracia, en PRESENTE):
- "Descargas, abres y ya está." (no "Descarga la app y se configuró")
- "Te olvidas de suscripciones. Pagas una vez y es tuya para siempre."
- "Eliges la que mejor le venga a tu negocio."
- "Tus clientes escanean y ven el menú al toque."
- "Si se corta internet, el menú sigue — no se te corta el negocio."
- "Descargas la app, configuras tu menú, generas el QR y lo pones en las mesas."

## Philosophy

Una landing debe **convertir visitantes Y hacer que recuerden la marca**. Las páginas genéricas con estética de plantilla fallan en ambas. Asegurate de que esta sea efectiva de función y visualmente memorable.

## Cuándo usar esta skill

- Crear o rediseñar secciones de la landing (Hero, Features, Comparison, FAQ, Contacto, Footer)
- Escribir o reescribir copy promocional de la landing
- Pulir diseño, tipografía, color, animación, layout
- Revisar que la voz rioplatense sea consistente en toda la landing

## Design Thinking: Antes de codear

Antes de tocar código, definí la dirección estética. Para ESTA landing el proyecto ya decidió:
- **Dark**: fondo `#0A0A0A`, surface `#1A1A1A`, primary `#C25E44`, gold `#b8860b`, borders `#2A2A2A`
- **Tipografía**: Geist Variable (display + body)
- **Animaciones**: `animate-fade-in`, `animate-fade-in-up` con delays escalonados 100ms
- **Layout**: mobile-first, breakpoints sm/md/lg, HashRouter para 3 páginas

## Los 11 Elementos Esenciales

Cada elemento tiene 2 requisitos: **funcional** (conversión) y **de diseño** (memorable).

| # | Elemento | Funcional | Diseño |
|---|----------|-----------|--------|
| 1 | URL con keywords | SEO (subpath `/menu-qr_landing/`) | — |
| 2 | Logo (header) | Arriba-izquierda, identidad | Sticky + backdrop-blur al scrollear |
| 3 | Title + subtitle (Hero) | Propuesta de valor clara | MASSIVE, tipografía con carácter |
| 4 | CTA primario (Hero) | Imposible de ignorar | Pill, micro-interacciones, scale/hover |
| 5 | Social proof (Hero) | Reviews/estadísticas | Números grandes, avatares |
| 6 | Imágenes/video (Media) | Demo visual | Mockups laptop/phone con screenshots REALES |
| 7 | Beneficios/features | 3-6 ventajas con iconos | Cards, hover, layout asimétrico |
| 8 | Testimonios | reviews auténticos | Cards estiladas |
| 9 | FAQ | 5-10 preguntas accordion | Animación suave expand |
| 10 | CTA final | Oportunidad 2da conversión | Momento hero, más grande |
| 11 | Footer contact/legal | Info completa | Multi-columna, refinado |

> Adaptación local: usa `LaptopFrame`/`MobileFrame` (DeviceMockup) en vez de escribir mockups; usa tokens Tailwind en vez de CSS vars manuales.

## Aesthetic Guidelines

- **NO** fuentes genéricas (Inter/Roboto/Arial) — ya usamos Geist
- **NO** gradientes púrpura sobre blanco
- **NO** grids centrados y simétricos siempre — variá y rompé el layout
- **NO** iconos genéricos de línea — usá Lucide con intención
- **SÍ** imágenes de producto/screenshots reales, no placeholders
- **SÍ** fondos con textura/patrón/gradiente sutil (ya hay un patrón de puntos en Hero)
- **SÍ** animaciones staggered en page load (fade-in con delays)
- **SÍ** micro-interacciones en hover (scale en CTAs, lift en cards)

## Copy Guidelines (RIOPLATENSE + CONVERSIÓN)

- **Beneficio primero**, no característica — "te olvidas de suscripciones" mejor que "sin suscripción"
- **Acción clara en CTAs** — "Solicitar App" > "Más información" (labels de botones en infinitivo)
- Lenguaje **claro y sencillo** — el dueño del restaurant no es técnico
- **Números concretos** — "< 100ms", "pago único", "100% offline" — generan credibilidad
- **Acción clara**: un solo CTA principal por sección que apunte al objetivo (contacto/form)
- **Voz rioplatense con gracia** en TODOS los textos — consistente de la primera a la última sección
- **Sin tecnicismos** salvo que aporten (ej. "POS", "QR" son aceptables y esperados)

## Stack Requirements (adaptadas)

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** con `@theme` en `src/style.css`
- **Lucide React** para iconos
- **HashRouter** (react-router-dom) — 3 páginas: `/`, `/funcionalidades`, `/contacto`
- **DeviceMockup** (`LaptopFrame`/`MobileFrame`) para screenshots en mockups
- **`import.meta.env.BASE_URL`** para rutas de imágenes (subpath de GitHub Pages)

## Workflow

1. **Diseño primero** → definir dirección estética (para esta landing: ya está decidida, mantenela)
2. **Copy rioplatense** → escribir/reescribir todos los textos con la voz definida y conversión
3. **Build** → `pnpm build` debe pasar (tsc + vite)
4. **Verificar** → revisar el resultado en producción (`pnpm preview`) para detectar desalineaciones o errores visuales

## Validation Checklist

- [ ] Aesthetic direction coherente con el dark theme del proyecto
- [ ] Tipografía Geist consistente (NO fuentes genéricas)
- [ ] Paleta con tokens del proyecto (no colores hardcodeados)
- [ ] Animaciones staggered para page load
- [ ] Layout rompe el grid genérico en alguna sección
- [ ] **TODOS los textos en español rioplatense con gracia** (voseo, cálido, conversacional)
- [ ] 11 elementos esenciales presentes sin sacrificar calidad
- [ ] CTA único y claro por sección → contacto/form
- [ ] `pnpm build` pasa sin errores
- [ ] Responsive OK en mobile/desktop

## Resources

### references/
Este skill incluye referencias detalladas:
- `11-essential-elements.md` — explicación profunda de cada elemento con principios y tips de implementación
- `component-examples.md` — ejemplos de componentes listos para producción

Cargá estas referencias cuando implementes secciones específicas o necesites guía detallada.

## Notas & Filosofía

1. **Conversión + Memorable**: debe convertir Y ser recordada
2. **Diseño intencional**: cada elección estética deliberada, no default
3. **Sin estética AI genérica**: evitar el look "hecho por plantilla"
4. **Sistema de diseño primero**: tokens, fuentes, color, motion antes de codear
5. **Voz rioplatense**: el copy es tan importante como el diseño — con gracia y calidez
