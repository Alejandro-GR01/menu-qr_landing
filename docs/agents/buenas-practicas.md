# Buenas prácticas del stack

## Vite + Tailwind v4

- Usar `@import 'tailwindcss'` en el CSS principal
- Tema custom con `@theme` block (colores, fonts, breakpoints)
- Animaciones con `@keyframes` + `@utility` en el CSS
- `base: '/menu-qr_landing/'` para deploy en subpath de GitHub Pages
- Imágenes en `public/` referenciadas con `import.meta.env.BASE_URL`

## React 19

- StrictMode en main.tsx (detecta efectos secundarios)
- Componentes funcionales con tipos explícitos
- Context para estado global simple (OS detection)
- Sin librerías de estado externas innecesarias (React Context alcanza)

## TypeScript 6.0

- `baseUrl` deprecado en tsconfig — usar `paths` directamente (alias `@/` → `src/`)
- `unknown` sobre `any` en datos externos
- Interfaces para props de componentes
- `strict: true` siempre

## SEO

- Title: 50-60 caracteres → "Menu QR — Menú digital sin internet"
- Meta description: 150-160 caracteres
- Open Graph tags para compartir en redes
- Twitter cards
- Viewport meta
- Icon en múltiples tamaños

## Skills de AI (autoskills)

Instaladas via `npx autoskills -y` (trackeadas en `skills-lock.json`, residen en `.agents/skills/`).

**⭐ Regla: ejecutar `npx autoskills -y` en cada cambio de dependencias en `package.json`.**

Relacionadas con el proyecto: `react-best-practices`, `composition-patterns`, `tailwind-css-patterns`, `typescript-advanced-types`, `vite`, `frontend-design`, `accessibility`, `seo`, `landing-page-guide-v2`.

> ⚠️ La skill `landing-page-guide-v2` es la guía de copy: españl estándar sin voseo (ver regla de idioma en AGENTS.md).