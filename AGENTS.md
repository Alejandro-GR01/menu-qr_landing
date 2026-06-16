# AGENTS.md — Menu QR Landing Page

> **Propósito:** Landing page promocional de Menu QR Desktop App
> **Deploy:** GitHub Pages → `https://Alejandro-GR01.github.io/menu-qr-electron_landing/`
> **Stack:** React + TypeScript + Vite + Tailwind CSS v4

---

## 1. VISIÓN GENERAL

Landing page para promocionar la app de escritorio **Menu QR** (menú digital para restaurantes/bares). La app convierte una PC en un servidor local que sirve el menú vía QR, accesible desde cualquier celular en la red local — sin internet, sin mensualidades.

La landing page:
1. Explica el problema que resuelve (menú digital sin internet)
2. Muestra screenshots reales de la app (menú público + admin panel)
3. Compara menú en la nube vs menú local
4. Permite **contactar al desarrollador** para solicitar la app (contacto directo vía email — repo privado)

---

## 2. ARQUITECTURA

```
menu-qr-electron_landing/
├── index.html                    # SEO meta tags, Geist font, icon
├── package.json                  # Dependencias + scripts
├── vite.config.ts                # Vite + React + Tailwind v4 + path aliases
├── tsconfig.json                 # TypeScript config
├── tsconfig.app.json             # TS config app (paths: @/ → src/)
├── tsconfig.node.json            # TS config Node
├── components.json               # (placeholder)
├── .gitignore                    # node_modules, dist, .DS_Store
├── skills-lock.json              # Autoskills lock
├── .github/workflows/deploy.yml  # CI/CD → GitHub Pages
│
├── public/
│   ├── icon.png                  # App icon (copied from main project)
│   ├── screenshot-menu-desktop.png    # Menú público desktop
│   ├── screenshot-menu-mobile.png     # Menú público mobile
│   ├── screenshot-admin-desktop.png   # Admin panel desktop
│   └── screenshot-admin-mobile.png    # Admin panel mobile
│
├── src/
│   ├── main.tsx                  # Entry point (OSProvider + App)
│   ├── App.tsx                   # Layout principal (8 secciones)
│   ├── style.css                 # Tailwind v4 + custom utilities + scrollbar
│   ├── vite-env.d.ts             # Vite type declarations
│   ├── types.ts                  # Tipos compartidos
│   │
│   ├── context/
│   │   └── OSContext.tsx          # OS detection via userAgent (macOS/Windows/Linux)
│   │
│   └── components/
│       ├── Navbar.tsx             # Sticky nav + CTA "Solicitar App"
│       ├── Hero.tsx               # Headline + device mockups (laptop + mobile) + QR connector
│       ├── ContactButton.tsx      # Botón de contacto directo (mailto)
│       ├── Features.tsx           # 6 feature cards con Lucide icons
│       ├── HowItWorks.tsx         # 4 pasos con timeline visual
│       ├── Comparison.tsx         # Cloud vs Local comparison cards
│       ├── TechStack.tsx          # 8 tech badges con tooltips
│       ├── DeviceMockup.tsx       # SVG realistas: LaptopFrame + MobileFrame
│       ├── DownloadSection.tsx    # Contact section + device mockups admin
│       └── Footer.tsx             # Logo + copyright + contacto directo
│
├── .agents/
│   └── skills/                   # 10 autoskills instaladas
│
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions → gh-pages
```

---

## 3. STACK COMPLETO

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | React | 19.2.x |
| Lenguaje | TypeScript | 6.0.x |
| Build Tool | Vite | 8.0.x |
| CSS Framework | Tailwind CSS v4 | 4.3.x |
| Icons | Lucide React | 1.18.x |
| Tipografía | Geist Variable (via @fontsource) | 5.2.x |
| Data Fetching | TanStack Query (instalado, no usado aún) | 5.101.x |
| Deploy | GitHub Actions → peaceiris/gh-pages | — |
| Package Manager | pnpm | 11+ |

---

## 4. COMPONENTES Y SUS ESTADOS

### Navbar
| Estado | Comportamiento |
|--------|---------------|
| Default | Logo + nav links + CTA "Solicitar App" |
| Mobile | Hamburger menu con drawer animado |
| Scroll | Fondo con backdrop-blur al scrollear |

### Hero
| Estado | Comportamiento |
|--------|---------------|
| Cargando | Animaciones fade-in secuenciales (app icon → headline → CTA → mockups) |
| Default | LaptopFrame (menú desktop) + QR connector + MobileFrame (menú mobile) |
| Sin imagen | Fallback: SVG sin screenshot (no debería pasar, está en public/) |

### ContactButton
| Estado | Comportamiento |
|--------|---------------|
| Default | mailto directo al desarrollador |
| Hover | scale(1.05) + color más claro |
| Active | scale(0.95) |

### Features
| Estado | Comportamiento |
|--------|---------------|
| Default | Grid 3 columnas desktop, 2 tablet, 1 mobile |
| Hover card | Borde primary/30 + bg más claro |
| Sin icono | No renderiza el icono (fallback seguro) |

### HowItWorks
| Estado | Comportamiento |
|--------|---------------|
| Default | Timeline vertical con 4 pasos, línea conectora |
| Mobile | Igual pero sin línea conectora (solo iconos) |

### Comparison
| Estado | Comportamiento |
|--------|---------------|
| Default | 3 columnas: cloud | VS | local. Local destacado con borde primary |
| Mobile | Stack vertical: cloud → VS → local |

### DeviceMockup

| Componente | SVG Features |
|------------|-------------|
| **LaptopFrame** | Lid con bisel + teclado con teclas + trackpad + bisagra + cámara. Screenshot clip dentro de la pantalla |
| **MobileFrame** | Body con botones laterales + Dynamic Island + cámara + home indicator. Screenshot clip dentro de la pantalla |

Ambos SVGs usan `clipPath` para recortar el screenshot dentro del área de pantalla, gradientes para el acabado metálico, y `feDropShadow` para sombra.

### TechStack
| Estado | Comportamiento |
|--------|---------------|
| Default | Badge flex-wrap centrados |
| Hover badge | Tooltip flotante con descripción de la tecnología |

### DownloadSection
| Estado | Comportamiento |
|--------|---------------|
| Default | ContactButton grande + LaptopFrame (admin desktop) + QR connector + MobileFrame (admin mobile) |
| Sin screenshot | Fallback: SVG sin screenshot (no debería pasar) |

### Footer
| Estado | Comportamiento |
|--------|---------------|
| Default | Logo + copyright + Solicitar App (mailto) |

---

## 5. DISEÑO VISUAL

### Paleta de colores

| Role | Hex | Uso |
|------|-----|-----|
| Background | `#0A0A0A` | Fondo principal |
| Surface | `#1A1A1A` | Cards, secciones |
| Primary | `#C25E44` | Botones, acentos, hover |
| Gold accent | `#b8860b` | Detalles decorativos |
| Text primary | `#FAFAFA` | Texto principal |
| Text secondary | `#A0A0A0` | Descripciones |
| Border | `#2A2A2A` | Bordes de cards |

### Tipografía
- **Headings/Body:** Geist Variable (system-ui fallback)
- **Código:** JetBrains Mono (monospace nativo)

### Animaciones
- **fade-in-up**: elementos aparecen desde abajo (0.6s)
- **fade-in**: elementos aparecen suavemente (0.5s)
- **Delays**: escalonados de 100ms en 100ms (100, 200, 300... 800)
- **Scroll behavior**: `scroll-behavior: smooth` en html

### Responsive
- Mobile-first con breakpoints sm (640px), md (768px), lg (1024px)
- Screenshots: desktop en ≥md, mobile en <md
- Navbar: hamburger en mobile, links horizontales en desktop
- Feature grid: 1 col mobile → 2 tablet → 3 desktop

---

## 6. SCRIPTS

```bash
pnpm dev              # Vite dev server (HMR)
pnpm build            # tsc + vite build → dist/
pnpm preview          # Preview build local
pnpm lint             # ESLint
```

---

## 7. DEPLOY (GitHub Pages)

El workflow en `.github/workflows/deploy.yml` se activa en push a `main` con cambios en `src/`, `public/`, `index.html` o `package.json`. También se puede disparar manualmente via `workflow_dispatch`.

El build se deploya a la branch `gh-pages` usando `peaceiris/actions-gh-pages@v4`.

**Requisito:** Configurar GitHub Pages en el repo:
```
Settings → Pages → Source: Deploy from a branch → Branch: gh-pages → / (root)
```

URL final: `https://Alejandro-GR01.github.io/menu-qr-electron_landing/`

---

## 8. SKILLS DE AI (AUTOSKILLS)

Skills instaladas via `npx autoskills -y`. Se trackean en `skills-lock.json` y residen en `.agents/skills/`.

### ⭐ Regla: ejecutar autoskills en cada cambio de dependencias

Cada vez que se agregue, modifique o elimine una dependencia en `package.json`:

```bash
npx autoskills -y
```

### Skills Instaladas (10)

| Skill | Dispara en... | Reglas Clave |
|-------|--------------|--------------|
| **react-best-practices** | Escribir/refactorizar componentes React | Eliminar waterfalls, evitar barrel imports, memoizar trabajo pesado |
| **composition-patterns** | Refactorizar componentes con boolean props | Evitar boolean props, compound components, children > render props |
| **tailwind-css-patterns** | Estilizar componentes, layouts responsive | Mobile-first, design tokens, utility classes > @apply |
| **typescript-advanced-types** | Tipos complejos, genéricos, conditional types | unknown > any, interface para objetos, type para unions |
| **vite** | Configuración de Vite, vite.config.ts | defineConfig(), ESM siempre, loadEnv |
| **nodejs-backend-patterns** | APIs, middleware patterns, error handling | (instalada por Node.js detection) |
| **nodejs-best-practices** | Decisiones de arquitectura Node.js | (instalada por Node.js detection, útil para build scripts) |
| **frontend-design** | Crear interfaces, landing pages, dashboards | Bold aesthetic direction, tipografía con carácter, paleta cohesiva |
| **accessibility** | Auditoría a11y, WCAG compliance | POUR principles, alt text, color contrast 4.5:1 |
| **seo** | Meta tags, structured data, Open Graph | Title 50-60 chars, meta description 150-160, JSON-LD opcional |

### Skills Globales del Sistema (disponibles, NO instaladas)

Skills en `~/.config/opencode/skills/` y `~/.agents/skills/` que pueden ser útiles:

| Skill | Cuándo usarla |
|-------|---------------|
| **sdd-init** | Inicializar SDD context en el proyecto |
| **sdd-design** | Crear design técnico con decisiones de arquitectura |
| **sdd-spec** | Escribir specifications con requirements |
| **sdd-tasks** | Break down de implementación en tasks |
| **to-issues** | Convertir plan/spec en issues |
| **to-prd** | Convertir contexto en PRD |
| **diagnose** | Debug de bugs difíciles |
| **judgment-day** | Review adversarial en paralelo |
| **improve-codebase-architecture** | Encontrar oportunidades de mejora |
| **skill-registry** | Actualizar registry de skills |

---

## 9. BUENAS PRÁCTICAS DEL STACK

### Vite + Tailwind v4

- Usar `@import 'tailwindcss'` en el CSS principal
- Tema custom con `@theme` block (colores, fonts, breakpoints)
- Animaciones con `@keyframes` + `@utility` en el CSS
- `base: '/repo-name/'` para deploy en subpath de GitHub Pages
- Imágenes en `public/` referenciadas con `import.meta.env.BASE_URL`

### React 19

- StrictMode en main.tsx (detecta efectos secundarios)
- Componentes funcionales con tipos explícitos
- Context para estado global simple (OS detection)
- Sin librerías de estado externas innecesarias (React Context alcanza)

### TypeScript 6.0

- `baseUrl` deprecado en tsconfig — usar `paths` directamente
- `unknown` sobre `any` en datos externos
- Interfaces para props de componentes
- `strict: true` siempre

### SEO

- Title: 50-60 caracteres → "Menu QR — Menú digital sin internet"
- Meta description: 150-160 caracteres
- Open Graph tags para compartir en redes
- Twitter cards
- Viewport meta
- Icon en múltiples tamaños

---

## 10. MANEJO DE ERRORES CONOCIDOS

| Error | Causa | Solución |
|-------|-------|----------|
| `TS5101: baseUrl deprecado` | TypeScript 6.0 | Remover `baseUrl` del tsconfig, dejar solo `paths` |
| `Cannot find module lucide-react 'Github'` | El icono no existe en lucide-react | Usar `Code2` (o `Mail` para contacto) en su lugar |
| Screenshots no se renderizan | Ruta incorrecta | Usar `import.meta.env.BASE_URL` + nombre del archivo |
| Playwright refs cambian | Ref ID regenerado en cada snapshot | Usar `page.evaluate()` con fetch para interacciones complejas |

---

## 11. CAPTURAS DE PANTALLA

Las 4 screenshots en `public/` fueron tomadas con Playwright desde la app en dev (localhost:5173):

| Archivo | Tamaño | Contenido |
|---------|--------|-----------|
| `screenshot-menu-desktop.png` | 595 KB | Menú público en 1280×900 |
| `screenshot-menu-mobile.png` | 234 KB | Menú público en 375×812 (iPhone) |
| `screenshot-admin-desktop.png` | 84 KB | Admin panel en 1280×900 |
| `screenshot-admin-mobile.png` | 68 KB | Admin panel en 375×812 |

Para regenerarlas:
```bash
# 1. Iniciar la app en dev (menu-qr-app_electron)
cd ../menu-qr-app_electron && pnpm dev

# 2. Ejecutar Playwright desde la landing
# Abrir navegador, loguear en /admin/login, navegar a /menu y /admin
# Usar page.screenshot({ fullPage: true, path: 'public/screenshot-...png' })
```

---

## 12. DATOS DEMO

Cuando se corren por primera vez, los datos demo se crean automáticamente en la DB de la app. Si se necesita resetear, desde el admin panel se pueden eliminar categorías y productos manualmente.

Las categorías demo actuales:
1. **Tragos** (cocktail) — Mojito, Margarita, Fernet con Coca, Gin Tonic, Daiquiri, Campari Spritz
2. **Picaderas** (nachos) — Papas Fritas, Rabas, Nachos, Alitas de Pollo, Picada Clásica, Sandwich de Milanesa
3. **Dulces** (cake) — Flan Casero, Brownie con Helado, Cheesecake, Panqueques con Dulce de Leche, Helado Artesanal, Ensalada de Frutas
