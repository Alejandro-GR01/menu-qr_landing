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
| **landing-page-guide-v2** | Crear/rediseñar secciones de la landing, escribir/pulir copy promocional | 11 elementos esenciales (DESIGNNAS) + dirección estética audaz. Adaptada a Vite+React+Tailwind v4 (NO Next.js). ⚠️ TODOS los textos en **español estándar con gracia** (SIN voseo: "descargas", "coge", NO "cargá"/"cogé"/"tenés") |

### ⭐ Regla de idioma (OBLIGATORIA)

Todo el copy de la landing se escribe en **español estándar (neutro, normal) — SIN voseo**: "descargas", "generas", "imprimes", "pones", "tienes", "puedes", "haces", "eliges", "coge". Las tildes normales del español se mantienen ("menú", "así", "está", "camión"). La landing **describe** en presente indicativo lo que el usuario hace — NUNCA en imperativo voseo ("cargá", "hacé", "elegí", "cogé" están PROHIBIDOS; tampoco el voseo acentuado "cargás", "hacés", "elegís"). Con calidez, cercanía y un toque de ingenio — siempre claro y profesional. Labels de botones de UI ("Solicitar App") quedan en infinitivo. Ver skill `landing-page-guide-v2` para la guía completa de voz.

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

---

## 13. PLAN DE CAMBIOS — Rediseño Completo del Landing

> **Estado:** 🗓️ Planificado — NO implementado
> **Branch sugerida:** `redesign-views-showcase`
> **Objetivo:** Rediseñar el landing para mostrar las **10 vistas reales de la app Electron** dentro de mockups SVG superpuestos, destacar los beneficios contra menú digital online Y menú convencional en papel, y optimizar todas las imágenes a AVIF.

### 13.1 ¿Por qué?

El landing actual muestra solo **4 screenshots** (menú público desktop/mobile + admin desktop/mobile). La app Electron tiene **10 vistas distintas** documentadas en `public/views/views.md`. Cada vista existe en versión desktop (1280×800) y mobile (375×812).

**Problemas actuales:**
1. ❌ Solo se muestran 2 de 10 vistas (menú público + admin) — falta login, categorías, productos, QR, WiFi, backup, promoción
2. ❌ Los mockups están separados (laptop a la izquierda, QR en medio, mobile a la derecha) — no hay sensación de "una sola app"
3. ❌ La comparación solo enfrenta "nube vs local" — falta el contraste con menú de papel
4. ❌ Las imágenes son PNG pesados (595 KB el más grande) — sin AVIF
5. ❌ No hay sección de "galería de vistas" que muestre la riqueza del panel admin

### 13.2 Hero — Mockups Superpuestos

#### Concepto visual

```
┌─────────────────────────────────────────────────┐
│                   DESKTOP SVG                     │
│  ┌───────────────────────────────────────────┐   │
│  │                                           │   │
│  │   Screenshot desktop dentro de la         │   │
│   │   pantalla del monitor (clipPath)          │   │
│  │                                           │   │
│  │                         ┌──────────┐     │   │
│  │                         │ MOBILE   │     │   │
│  │                         │  SVG     │     │   │
│  │                         │ ┌──────┐ │     │   │
│  │                         │ │screen│ │     │   │
│  │                         │ └──────┘ │     │   │
│  │                         └──────────┘     │   │
│  │                                           │   │
│  └───────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

El **LaptopFrame** ocupa el centro. El **MobileFrame** se superpone en la **esquina inferior derecha** del monitor, como si alguien estuviera usando el celular al lado de la PC.

#### Implementación

```tsx
{/* Hero — overlapping mockups */}
<div className="relative w-full max-w-5xl mx-auto">
  {/* Desktop — base layer */}
  <LaptopFrame
    src="screenshot-menu-desktop.png"
    alt="Menú público en PC"
  />

  {/* Mobile — overlaid on bottom-right */}
  <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-[35%] md:w-[28%] lg:w-[25%] z-10">
    <MobileFrame
      src="screenshot-menu-mobile.png"
      alt="Menú público en celular"
    />
  </div>
</div>
```

**Comportamiento responsive:**

| Breakpoint | Desktop width | Mobile overlay position | Mobile size |
|------------|--------------|------------------------|-------------|
| > 1024px   | 100%         | -right-8, -bottom-8    | 25%         |
| 768-1024px | 100%         | -right-6, -bottom-6    | 28%         |
| 640-768px  | 100%         | -right-4, -bottom-4    | 32%         |
| < 640px    | 100%         | centrado debajo (stack)| 45%         |

#### Transiciones

Al hacer scroll, el mockup de mobile se desliza hacia arriba y se achica para mostrar más contenido detrás (efecto parallax sutil). Implementar con `useScroll` o IntersectionObserver:

```tsx
const scrollY = useScrollY(); // custom hook
const offset = Math.min(scrollY * 0.1, 80);
// translateY(-offset) en el mobile overlay
```

### 13.3 Nueva Sección: "Explorá todas las vistas"

Nuevo componente: **`ViewsShowcase.tsx`**

Una galería que muestra las **10 vistas** del `views.md` en pares desktop + mobile, cada una dentro de su device mockup. Navegación por tabs o scroll horizontal.

#### Data Model

```typescript
interface ViewEntry {
  id: string;            // 'login', 'admin-config', etc.
  title: string;         // Título mostrado
  description: string;   // Descripción de la vista
  desktopSrc: string;    // Path al screenshot desktop
  mobileSrc: string;     // Path al screenshot mobile
  tags: string[];        // ['admin', 'público', 'configuración']
}
```

#### Las 10 vistas (de views.md)

| # | ID | Título | Tags | Desktop | Mobile |
|---|----|--------|------|---------|--------|
| 1 | `login` | Login | admin, auth | `login-desktop.png` | `login-mobile.png` |
| 2 | `admin-config` | Configuración + Promociones | admin, config | `admin-config-desktop.png` | `admin-config-mobile.png` |
| 3 | `admin-categories` | Categorías | admin, CRUD | `admin-categories-desktop.png` | `admin-categories-mobile.png` |
| 4 | `admin-products` | Productos + Drag & Drop | admin, CRUD | `admin-products-desktop.png` | `admin-products-mobile.png` |
| 5 | `admin-qr` | QR Menú Público | admin, QR | `admin-qr-desktop.png` | `admin-qr-mobile.png` |
| 6 | `admin-qr-wifi` | QR WiFi | admin, QR | `admin-qr-wifi-desktop.png` | `admin-qr-wifi-mobile.png` |
| 7 | `admin-menu-preview` | Vista Previa Menú | admin, preview | `admin-menu-preview-desktop.png` | `admin-menu-preview-mobile.png` |
| 8 | `admin-db` | Backup/Restore | admin, datos | `admin-db-desktop.png` | `admin-db-mobile.png` |
| 9 | `menu-public` | Menú Público | público, menú | `menu-public-desktop.png` | `menu-public-mobile.png` |
| 10 | `menu-promotion` | Promoción Flotante | público, promo | `menu-promotion-desktop.png` | `menu-promotion-mobile.png` |

#### Layout del componente

```tsx
// Tab navigation
<div className="flex overflow-x-auto gap-2 pb-2">
  {VIEWS.map((view) => (
    <button
      key={view.id}
      onClick={() => setActiveView(view.id)}
      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all
        ${activeView === view.id
          ? 'bg-primary text-white'
          : 'bg-bg-surface text-text-secondary hover:text-text-primary'
        }`}
    >
      {view.title}
    </button>
  ))}
</div>

// Device mockups — desktop + mobile side by side
<div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center mt-8">
  {/* Desktop mockup — col-span-2 */}
  <div className="md:col-span-2">
    <LaptopFrame src={activeView.desktopSrc} alt={activeView.title} />
  </div>

  {/* Mobile mockup — col-span-1 */}
  <div className="md:col-span-1 max-w-[180px] md:max-w-[220px] mx-auto">
    <MobileFrame src={activeView.mobileSrc} alt={activeView.title} />
  </div>
</div>

<p className="text-text-secondary text-center mt-6 max-w-2xl mx-auto">
  {activeView.description}
</p>
```

#### Comportamiento responsive

| Breakpoint | Layout |
|------------|--------|
| > 768px | Desktop mockup (col-span-2) + Mobile mockup (col-span-1) lado a lado |
| < 768px | Desktop mockup full width + Mobile mockup debajo, centrado, max-w-[150px] |

#### Etiquetas de filtro

Las views tienen tags (`admin`, `público`, `configuración`, `QR`, `CRUD`, `datos`, `preview`). Botones de filtro rápido arriba de los tabs:

```typescript
const FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'admin', label: 'Admin' },
  { id: 'público', label: 'Público' },
  { id: 'QR', label: 'QR' },
  { id: 'CRUD', label: 'Gestión' },
]
```

### 13.4 Comparación Expandida — 3 Columnas

#### Estado actual
Solo compara **Menú en la nube** vs **Menu QR Local**.

#### Estado propuesto
Comparación de **3 columnas**: Menú de Papel ↔ Menú Online (nube) ↔ Menu QR + Electron

| Aspecto | 📋 Menú de Papel | ☁️ Menú Online | 🖥️ Menu QR + Electron |
|---------|------------------|----------------|----------------------|
| Actualizar precios | ❌ Reimprimir | ✅ Al instante | ✅ Al instante |
| Costo mensual | 💰 $0 (imprenta cada cambio) | 💸 Suscripción + hosting | 🔒 Pago único |
| Funciona sin internet | ✅ Siempre | ❌ No | ✅ 100% |
| Acceso desde celular | ❌ Foto del menú | ✅ Escanean QR | ✅ Escanean QR |
| Tiempo de carga | 📄 Inmediato | 🐢 1-3 seg | 🚀 < 100ms |
| Privacidad de datos | 📋 En el local | ☁️ En servidor externo | 💻 En tu PC |
| Configuración | 🖊️ Diseñador gráfico | ⚙️ Registro web + API keys | 📦 Descargar, abrir, listo |
| Actualización remota | ❌ Ir al local | ✅ Desde cualquier lado | ✅ Desde cualquier dispositivo en la red |

```tsx
// Layout: 3 columnas en desktop, stack en mobile
<div className="grid md:grid-cols-3 gap-4">
  {/* Paper column */}
  <ComparisonColumn icon="📋" title="Menú de Papel" items={PAPER_ITEMS} variant="muted" />

  {/* Cloud column */}
  <ComparisonColumn icon="☁️" title="Menú Online" items={CLOUD_ITEMS} variant="muted" />

  {/* Local column */}
  <ComparisonColumn icon="🖥️" title="Menu QR + Electron" items={LOCAL_ITEMS} variant="highlighted" />
</div>
```

### 13.5 Sección de Features — Refuerzo de Mensajes

Actualizar las 6 feature cards existentes con mensajes más específicos:

| Feature | Mensaje actual | Mensaje propuesto |
|---------|---------------|-------------------|
| Sin internet | "Si se corta internet, el menú sigue" | "Sin internet = sin problemas. A diferencia de los menús online que dependen de la nube, el tuyo sigue funcionando aunque se caiga todo." |
| Rápido | "Cero latencia de red externa" | "Mientras otros menús tardan 2-3 segundos en cargar desde servidores lejanos, el tuyo se sirve desde la PC del local en milisegundos." |
| Pago único | "Sin cuotas mensuales" | "Olvidate de suscripciones. Pagás una vez y la app es tuya. Sin hosting, sin mensualidades, sin sorpresas a fin de mes." |
| Tus datos | "Sin depender de servidores externos" | "A diferencia de los servicios en la nube, tu menú, tus precios y tus imágenes viven en tu PC. No los compartís con nadie." |
| Configuración simple | "Panel visual e intuitivo" | "Categorías, productos, precios, promociones y QR — todo desde un solo panel. Sin conocimientos técnicos, sin código." |
| Accesible | "Sin apps, sin registros" | "Tus clientes escanean con la cámara de su celular. Sin apps, sin registros, sin datos personales. Abren y ven el menú." |

### 13.6 Pipeline de Captura de Pantallas

Para regenerar las 20 screenshots (10 vistas × desktop + mobile) desde la app Electron:

```bash
# 1. Iniciar la app Electron en dev
cd /Users/alejandrogr011231/Documents/DEV/pruebas/menu-qr-app_electron
pnpm electron:dev
# → Server en http://localhost:3000

# 2. Abrir Playwright desde la landing
cd /Users/alejandrogr011231/Documents/DEV/pruebas/menu-qr-electron_landing

# 3. Script de captura (pendiente de crear):
#    scripts/capture-views.mjs
#    - Navega a /admin/login → login-desktop.png, login-mobile.png
#    - Loguea con admin/admin123
#    - Navega /admin → admin-*.png
#    - Navega /menu → menu-*.png
#    - Setea viewport 1280×800 para desktop, 375×812 para mobile
#    - page.screenshot({ fullPage: false, path: 'public/views/...png' })
```

**Output:** 20 archivos en `public/views/`:
```
public/views/
├── login-desktop.png
├── login-mobile.png
├── admin-config-desktop.png
├── admin-config-mobile.png
├── admin-categories-desktop.png
├── admin-categories-mobile.png
├── admin-products-desktop.png
├── admin-products-mobile.png
├── admin-qr-desktop.png
├── admin-qr-mobile.png
├── admin-qr-wifi-desktop.png
├── admin-qr-wifi-mobile.png
├── admin-menu-preview-desktop.png
├── admin-menu-preview-mobile.png
├── admin-db-desktop.png
├── admin-db-mobile.png
├── menu-public-desktop.png
├── menu-public-mobile.png
├── menu-promotion-desktop.png
├── menu-promotion-mobile.png
└── views.md
```

---

## 14. PIPELINE DE OPTIMIZACIÓN DE IMÁGENES

> **App de compresión:** `/Users/alejandrogr011231/Documents/DEV/pruebas/conversor/`
> **Stack:** Vite + React + Tailwind CSS v4 + canvas API
> **Propósito:** Convertir screenshots PNG a AVIF con calidad controlada

### 14.1 ¿Cómo funciona el Image Compressor?

Es una app web **100% cliente** (sin backend) que usa la **Canvas API** del navegador para convertir imágenes:

```
[Input PNG/JPEG] → [Canvas 2D] → [canvas.toBlob(mime, quality)] → [Descarga AVIF/WebP/JPEG]
                     ↑
            drawImage() renderiza la imagen original
```

**Flujo detallado:**
1. **Drop/Select** — usuario arrastra o selecciona un archivo
2. **Preview** — se crea un `ObjectURL` para mostrar la imagen original
3. **Canvas render** — `drawImage()` pinta la imagen en un canvas oculto
4. **Conversion** — `canvas.toBlob(blob, format, quality)` comprime/convierte:
   - `format`: `'image/avif'`, `'image/webp'`, o `'image/jpeg'`
   - `quality`: 0.0 a 1.0 (controla el nivel de compresión)
5. **Preview resultante** — se muestra el resultado con tamaño y % de reducción
6. **Download** — `URL.createObjectURL(blob)` + `<a download>`

### 14.2 Pipeline para este proyecto

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌───────────┐
│  Playwright  │    │     PNG      │    │  Conversor  │    │    AVIF   │
│  captura las │───▶│ 20 archivos  │───▶│  calidad 80 │───▶│ 20 archivos│
│  20 vistas   │    │              │    │  a AVIF     │    │           │
└─────────────┘    └──────────────┘    └─────────────┘    └───────────┘
                                                               │
                                                               ▼
                                                       ┌──────────────┐
                                                       │  public/     │
                                                       │  views/*.avif│
                                                       └──────────────┘
```

#### Paso a paso manual (cuando no hay server corriendo)

```bash
# 1. Iniciar el conversor
cd /Users/alejandrogr011231/Documents/DEV/pruebas/conversor
pnpm dev

# 2. Abrir http://localhost:5173 en el navegador
# 3. Arrastrar cada PNG de public/views/
# 4. Seleccionar formato AVIF, calidad 80
# 5. Descargar a public/views/ con el mismo nombre (cambiar extensión a .avif)
```

#### Paso a paso automatizado (cuando haya server)

```javascript
// Script propuesto: scripts/optimize-views.sh
// Usa puppeteer o playwright para automatizar el conversor
// 1. Por cada PNG en public/views/
// 2. Abre conversor local
// 3. Sube el archivo
// 4. Setea format=AVIF, quality=80
// 5. Descarga
// 6. Renombra a .avif
```

### 14.3 AVIF en el Landing — Cómo se sirven

El landing usa **dos estrategias** para servir imágenes AVIF:

#### Para `<img>` contexts (iconos, etc.) — `AvifImg`

```tsx
// src/lib/imageUtils.tsx
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

#### Para SVG `<image>` contexts (DeviceMockup) — Fallback nativo

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

### 14.4 Tabla de tamaños esperados (PNG vs AVIF calidad 80)

| Vista | PNG (actual) | AVIF q80 (estimado) | Ahorro estimado |
|-------|-------------|-------------------|-----------------|
| login-desktop | ~120 KB | ~30 KB | ~75% |
| admin-config-desktop | ~180 KB | ~45 KB | ~75% |
| admin-categories-desktop | ~200 KB | ~50 KB | ~75% |
| admin-products-desktop | ~350 KB | ~85 KB | ~76% |
| admin-qr-desktop | ~100 KB | ~20 KB | ~80% |
| admin-qr-wifi-desktop | ~90 KB | ~18 KB | ~80% |
| admin-menu-preview-desktop | ~500 KB | ~70 KB | ~86% |
| admin-db-desktop | ~80 KB | ~16 KB | ~80% |
| menu-public-desktop | ~595 KB | ~80 KB | ~86% |
| menu-promotion-desktop | ~450 KB | ~65 KB | ~86% |

Los AVIF suelen ser **60-80% más livianos** que PNG a calidad visual equivalente.

---

## 15. RESUMEN DE CAMBIOS — Checklist

### Archivos a modificar

| Archivo | Cambio | Prioridad |
|---------|--------|-----------|
| `src/components/Hero.tsx` | Mockups superpuestos (laptop + mobile overlay) | 🔴 Alta |
| `src/components/DeviceMockup.tsx` | Mejorar proporciones, responsive overlay | 🔴 Alta |
| `src/components/ViewsShowcase.tsx` | **NUEVO** — galería de 10 vistas con tabs | 🔴 Alta |
| `src/components/Comparison.tsx` | Expandir a 3 columnas (papel + nube + local) | 🟡 Media |
| `src/components/Features.tsx` | Mejorar copy, mensajes más específicos | 🟡 Media |
| `src/lib/imageUtils.tsx` | Agregar soporte para imágenes en `public/views/` | 🟢 Baja |
| `src/types.ts` | Agregar `ViewEntry` type | 🟢 Baja |
| `public/views/*.avif` | **NUEVOS** — 20 imágenes AVIF optimizadas | 🔴 Alta |
| `AGENTS.md` | Actualizar documentación post-implementación | 🟢 Baja |

### Archivos nuevos a crear

| Archivo | Propósito |
|---------|-----------|
| `src/components/ViewsShowcase.tsx` | Galería de vistas con tabs, filtros y device mockups |
| `src/hooks/useScrollY.ts` | Custom hook para scroll position (parallax sutil) |
| `screenshots/capture-views.mjs` | Script Playwright para regenerar screenshots |

### Orden de implementación

```
Fase 1: Capturas (día 1)
  1.1 Regenerar todas las screenshots con Playwright
  1.2 Convertir a AVIF con el conversor (calidad 80)
  1.3 Colocar en public/views/

Fase 2: Hero rediseñado (día 1)
  2.1 Refactor Hero.tsx — mockups superpuestos
  2.2 Ajustar DeviceMockup.tsx para overlay responsive
  2.3 Agregar parallax sutil con useScrollY

Fase 3: Views Showcase (día 2)
  3.1 Crear ViewsShowcase.tsx
  3.2 Agregar a App.tsx entre Features y HowItWorks
  3.3 Tabs + filtros + device mockups

Fase 4: Comparison + Features (día 2)
  4.1 Expandir Comparison a 3 columnas
  4.2 Mejorar copy de Features

Fase 5: Build + Deploy (día 1)
  5.1 Build producción
  5.2 Push a main → GitHub Actions deploy
```

---

## 16. ISSUES ACTIVOS — Actualización a multi-página (v2.0.4)

> **Estado:** 🚧 **EN EJECUCIÓN — Issue 1 (capture-views) casi completo** (32 PNG capturados con datos demo; faltan AVIF + views.md + restaurar DB)
> **Objetivo:** Convertir el landing a **3 páginas con React Router**, capturar las **nuevas vistas de la app v2.0.4**, mostrar features nuevas con screenshots, comparación a 3 columnas y FAQ.
> **Decisión clave:** Contacto por **Gmail** (no descarga directa) — el desarrollador entrega el `.exe` de **Windows** tras el contacto. Deploy con `pnpm deploy` (gh-pages), **no depende de workflow**.

### Issues

| Issue | Archivo | Qué hace | Depende de | Tipo |
|-------|---------|----------|-----------|------|
| 1 | `docs/issues/issue1.md` | **capture-views** — regenerar screenshots de las vistas v2.0.4 (desktop+mobile) en `public/views/` + AVIF + views.md | — | AFK |
| 2 | `docs/issues/issue2.md` | **routing-and-layout** — React Router (HashRouter), 3 páginas (Home/Funcionalidades/Contacto), CTA por página, Navbar/Footer con rutas | — | AFK |
| 3 | `docs/issues/issue3.md` | **views-showcase** — galería de vistas en SVG LaptopFrame/MobileFrame, página Funcionalidades + filtros | 1, 2 | AFK |
| 4 | `docs/issues/issue4.md` | **comparison-3col** — comparación a 3 columnas (papel + nube + local) | — | AFK |
| 5 | `docs/issues/issue5.md` | **faq-contact** — FAQ + página de Contacto completa | 2 | AFK |

> ℹ️ Cada issue tiene inline su **plan de ejecución global** (mismo diagrama de batches + rol del issue + coordinación de `src/types.ts`).

### Orden / fases de ejecución (evitar solape de archivos)

```
Batch 1 (paralelo, archivos disjuntos):
  Issue 1 (capturas → public/views/*)      ← EN CURSO
  Issue 4 (comparison → src/components/Comparison.tsx)

Batch 2:
  Issue 2 (routing → main.tsx, App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx)

Batch 3 (paralelo, archivos disjuntos):
  Issue 3 (views-showcase → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts + types.ts)
  Issue 5 (faq-contact → ContactPage.tsx + FAQ.tsx + types.ts)
```

> ⚠️ **Coordinación de `src/types.ts`:** Issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno **agrega** su interface respetando las existentes, sin borrar nada. Los issues 4 (Batch 1) y 3/5 (Batch 3) no corren en la misma fase, así que no colisionan en el tiempo.

> ⚠️ **`public/views/views.md`:** la lista de vistas quedó desactualizada (10 vistas de junio). Issue 1 la regenera. La app v2.0.4 tiene más vistas (dashboard, sellers, tickets, printer, POS seller, seller-tickets, qr-wifi...).

### Estado Issue 1 (capture-views) — ⚠️ DATOS DEMO OBLIGATORIOS

> 🔒 **CRÍTICO:** La DB de la app en dev (`~/Library/Application Support/menu-qr-app_electron/menu.db`) contiene **DATOS REALES DE UN CLIENTE** (9 categorías, 91 productos, tickets con montos reales, y datos sensibles: `wifi_ssid`/`wifi_password` en `config`). **NO se pueden mostrar en las screenshots del landing.**

Decisiones tomadas:
- ✅ **DATOS DEMO YA CARGADOS**: 9 categorías mantenidas (mismas e iconos), 44 productos ficticios, 7 tickets demo, 2 sellers (seller1/seller2 → `demo1234`), promoción demo, config demo (`name='La Esquina de los Sabores'`, `wifi_ssid='MenuQR_WiFi'`, `wifi_password='demo1234'`). Login admin: `admin`/`admin123`.
- Las imágenes de logo/fondo (`uploads/`) **ya fueron cambiadas** por el usuario — no tocar.
- **Backup de la DB real:** `/var/folders/l2/fzy95mp56t95t7c3jwytn4q00000gn/T/opencode/menuqr-backup-cliente/menu.db.cliente.bak` — **RESTAURAR al terminar** (la app del cliente no puede quedar con datos demo).
- La app usa la DB en `userData` de Electron (NO `server/menu.db` del repo — esa es otra copia).
- Cómo levantar la app: `cd ../menu-qr-app_electron && pnpm electron:dev` (server `localhost:3000`, vite `localhost:5173`).

#### ✅ Hecho al corte de la sesión
- 32 PNG capturados en `public/views/` (16 vistas × desktop 1280×800 + mobile 375×812) — script `capture-views.tmp.mjs` (en la app, borrar al final).
- ⚠️ **Recapturar pendiente:** `admin-qr-wifi-desktop/mobile` salieron IDÉNTICOS a `admin-qr` (tab WiFi no activado) y `menu-promotion-desktop/mobile` IDÉNTICOS a `menu-public` (burbuja no abierta). Usar Playwright con `page.getByRole('tab', { name: /wifi/i })` y esperar ~6s la burbuja antes del screenshot.

#### 🔲 Pendiente Issue 1
1. Recapturar `admin-qr-wifi` y `menu-promotion` (ver arriba).
2. Convertir PNG → AVIF calidad 80 (extender `scripts/convert-avif.mjs` para `public/views/`).
3. Actualizar `public/views/views.md` con las 16 vistas nuevas.
4. **RESTAURAR la DB del cliente** (comando abajo) y borrar `capture-views.tmp.mjs`.

### RESTAURAR DESPUÉS DEL ISSUE 1

```bash
# 1. Parar la app electron
# 2. Copiar el backup de vuelta:
cp /var/folders/l2/fzy95mp56t95t7c3jwytn4q00000gn/T/opencode/menuqr-backup-cliente/menu.db.cliente.bak \
   "/Users/alejandrogr011231/Library/Application Support/menu-qr-app_electron/menu.db"
```
