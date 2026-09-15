# AGENTS.md — Menu QR Landing Page

> **Propósito:** Landing page promocional de Menu QR Desktop App (menú digital para restaurantes/bares).
> La app convierte una PC en servidor local que sirve el menú vía QR desde cualquier celular en la red local — sin internet, sin mensualidades.
> **Stack:** React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4 + React Router 7
> **Deploy:** GitHub Pages → `https://Alejandro-GR01.github.io/menu-qr_landing/`

---

## 1. Reglas OBLIGATORIAS

### ⭐ Idioma (confirmado por el usuario 2026-09-11)

Todo el copy visual de la landing se escribe en **español estándar / castellano neutro — SIN voseo**:

- **Segunda persona en presente indicativo SIN acento final:** "abres", "cierras", "ves", "andas", "comes", "descargas", "generas", "pagas", "configuras", "imprimes"
- **Imperativo (si hubiera) de TÚ, sin acento:** "anda", "come", "escanea"
- **PROHIBIDOS:** imperativos voseados ("andá", "comé", "escaneá", "hacé", "cargá"), presentes voseados ("abrís", "cerrás", "cargás", "tenés", "podés", "querés"), y pronombre "vos"
- Las tildes normales del español se mantienen ("menú", "así", "está")
- Labels de botones de UI quedan en infinitivo ("Solicitar App")
- Aplicar a TODO texto visual: componentes, páginas, `src/data/views.ts`, FAQ, features, copy completo

### ⭐ No tocar la app Electron (`../menu-qr-app_electron/`)

- Solo lectura/capturas con Playwright — NO parar, NO relanzar, NO editar la DB
- La DB tiene datos demo (el cliente real está respaldado en temp) — ver `docs/agents/datos-demo.md`
- La app quedó corriendo en `localhost:3000` (server) con turno #5 abierto

### ⭐ Autoskills

Ejecutar `npx autoskills -y` en cada cambio de dependencias en `package.json`.

---

## 2. Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 19.2 |
| Lenguaje | TypeScript 6.0 |
| Build | Vite 8 (`base: '/menu-qr_landing/'`) |
| CSS | Tailwind CSS v4 |
| Icons | Lucide React |
| Ruteo | React Router 7 (BrowserRouter) |
| Tipografía | Geist Variable (@fontsource) |
| Deploy | `pnpm deploy` (gh-pages) |

## 3. Scripts

```bash
pnpm dev        # Vite dev server (HMR)
pnpm build      # tsc -b + vite build → dist/
pnpm lint       # ESLint
pnpm preview    # Preview build local
pnpm deploy     # build + dist/404.html + gh-pages -d dist
```

Deploy manual (no depende de workflow CI):
```bash
pnpm deploy
# Requisito en GitHub: Settings → Pages → Deploy from branch → gh-pages → / (root)
```

---

## 4. Arquitectura (resumen)

```
src/
├── main.tsx               # Entry (BrowserRouter + OSProvider)
├── App.tsx                # Rutas + layout
├── pages/                 # HomePage (/), FeaturesPage (/funcionalidades),
│                          #   ContactPage (/contacto), NotFoundPage (*)
├── components/            # Navbar, Hero, ViewsShowcase, Comparison, FAQ,
│                          #   DeviceMockup (SVG laptop/mobile), ContactForm,
│                          #   AmbientGlow (fondo ambiental de headers), ...
├── data/views.ts          # 18 vistas del showcase (fuente de verdad del catálogo)
├── types.ts               # Tipos compartidos (ViewEntry, FAQItem, ...)
├── lib/                   # detectOS.ts, imageUtils.tsx (AvifImg)
├── hooks/useOS.ts
└── context/               # OSProvider.tsx

public/
├── views/                 # 36 PNG + 36 AVIF (18 vistas × desktop+mobile) + views.md
└── icon.png, screenshots  # assets raíz
```

Detalle de componentes y estados → `docs/agents/componentes.md`

---

## 5. Referencias de detalle

| Archivo | Qué contiene |
|---------|-------------|
| `docs/agents/capturas.md` | Estado de las 36 capturas, credenciales demo, rutas reales, cómo regenerarlas |
| `docs/agents/optimizacion-imagenes.md` | Pipeline PNG→AVIF, conversor manual, fallback AVIF/PNG |
| `docs/agents/errores-conocidos.md` | Errores del stack + bug de numeración de tickets (meta keys) |
| `docs/agents/datos-demo.md` | Qué hay cargado en la DB demo, backups, cómo restaurar la DB real |
| `docs/agents/diseno.md` | Paleta, tipografía, animaciones, responsive |
| `docs/agents/componentes.md` | Estados de cada componente + páginas |
| `docs/agents/buenas-practicas.md` | Patrones Vite/React/TS/SEO + skills |
| `docs/issues/issue1-9.md` | Issues del plan multi-página (estado en cada archivo) |
| `public/views/views.md` | Documentación de las 18 vistas de la app |

---

## 6. Estado del plan (v2.0.4 → v2.1.0)

- **Issues 2-9: COMPLETOS** (multi-página, showcase, comparación 3 col, FAQ/contacto, copy v2.1.0)
- **Issue 1 (capture-views): COMPLETO en imágenes** (36 PNG + 36 AVIF) — salvo restaurar la DB real del cliente (requiere autorización) → ver `docs/issues/issue1.md` y `docs/agents/capturas.md`
- Fallback AVIF→PNG arreglado: `views.ts` apunta a PNG base, `DeviceMockup` intenta AVIF y cae a PNG via `onerror`
- Restaurar DB del cliente requiere autorización del usuario (no tocar la app por cuenta propia)