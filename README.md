<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Alejandro-GR01/menu-qr_landing/blob/main/public/icon.png">
  <img alt="Menu QR" src="https://github.com/Alejandro-GR01/menu-qr_landing/blob/main/public/icon.png" width="64" height="64">
</picture>

# Menu QR — Landing Page

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?logo=githubpages&logoColor=white)](https://pages.github.com)

Landing page promocional de **Menu QR** — una app de escritorio que convierte cualquier PC en un servidor local de menú digital con QR. Sin internet, sin mensualidades, sin complicaciones.

➡️ **Landing en vivo:** [Alejandro-GR01.github.io/menu-qr_landing](https://Alejandro-GR01.github.io/menu-qr_landing)

---

## Páginas

La landing es **multi-página** con React Router (BrowserRouter + fallback `404.html` para GitHub Pages):

| Ruta | Página | Contenido |
|------|--------|-----------|
| `/` | Home | Hero con mockups superpuestos, features, comparación papel/nube/local, dashboard admin, infraestructura, tech stack |
| `/funcionalidades` | Feature showcase | Galería de las **18 vistas reales de la app** en mockups SVG (LaptopFrame + MobileFrame) con tabs y filtros |
| `/contacto` | Contacto | Formulario + contacto directo por email (el `.exe` de Windows se entrega tras el contacto) |
| `*` | 404 | Página aislada full-viewport con CTA único |

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + TypeScript 6 |
| Build | Vite 8 |
| Estilos | Tailwind CSS v4 |
| Icons | Lucide React |
| Tipografía | Geist Variable |
| Routing | React Router (BrowserRouter + basename) |
| Imágenes | AVIF con fallback nativo a PNG (SVG `<image>` `xMinYMin slice`) |
| Deploy | `pnpm deploy` → branch `gh-pages` (paquete npm `gh-pages`) |

## Desarrollo

```bash
pnpm dev        # Dev server con HMR
pnpm build      # Build producción → dist/
pnpm preview    # Preview del build
pnpm lint       # ESLint
```

## Deploy (manual)

```bash
pnpm run deploy   # build + copia dist/index.html a dist/404.html + push a gh-pages
```

No hay workflow automático: el deploy corre localmente y publica la branch `gh-pages`.

**Requisito GitHub Pages:** `Settings → Pages → Source: Deploy from a branch → gh-pages → / (root)`

## Vistas reales de la app

Las **18 vistas** de Menu QR (desktop + mobile) están en `public/views/` como pares **PNG + AVIF**, capturadas con Playwright desde la app en desarrollo:

| Vista | Desktop | Mobile |
|-------|---------|--------|
| Login | `login-desktop` | `login-mobile` |
| Dashboard | `admin-dashboard-desktop` | `admin-dashboard-mobile` |
| Turnos | `admin-shifts-desktop` | `admin-shifts-mobile` |
| Configuración + Promos | `admin-config-desktop` | `admin-config-mobile` |
| Categorías | `admin-categories-desktop` | `admin-categories-mobile` |
| Productos + Drag & Drop | `admin-products-desktop` | `admin-products-mobile` |
| QR Menú | `admin-qr-desktop` | `admin-qr-mobile` |
| QR WiFi | `admin-qr-wifi-desktop` | `admin-qr-wifi-mobile` |
| Vista previa menú | `admin-menu-preview-desktop` | `admin-menu-preview-mobile` |
| Backup/Restore | `admin-db-desktop` | `admin-db-mobile` |
| Tickets | `admin-tickets-desktop` | `admin-tickets-mobile` |
| Sellers | `admin-sellers-desktop` | `admin-sellers-mobile` |
| Impresora | `admin-printer-desktop` | `admin-printer-mobile` |
| Menú público | `menu-public-desktop` | `menu-public-mobile` |
| Promoción flotante | `menu-promotion-desktop` | `menu-promotion-mobile` |
| POS seller | `seller-pos-desktop` | `seller-pos-mobile` |
| Cuentas del POS | `seller-cuentas-desktop` | `seller-cuentas-mobile` |
| Tickets seller | `seller-tickets-desktop` | `seller-tickets-mobile` |

Para regenerarlas: ver `docs/issues/issue1.md` (flujo Playwright + conversión AVIF con `scripts/convert-avif.mjs`).

## Proyecto Principal

La app de escritorio promocionada vive en un repo privado. Para solicitar acceso:

➡️ **Contacto:** [alejandrogr011231@gmail.com](mailto:alejandrogr011231@gmail.com?subject=Solicitud%20Menu%20QR)