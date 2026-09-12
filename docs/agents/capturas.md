# Capturas de pantalla — Views del landing

## Estado actual (2026-09-11)

**36 PNG en `public/views/` (18 vistas × desktop 1280×800 + mobile 375×812)** capturadas con Playwright desde la app Electron con **datos demo** (ver `datos-demo.md`).

### Las 18 vistas (v2.1.0)

| # | ID | Área | Desktop | Mobile |
|---|----|------|---------|--------|
| 1 | `login` | puesta-en-marcha | desktop | mobile |
| 2 | `admin-config` | puesta-en-marcha | desktop | mobile |
| 3 | `admin-categories` | puesta-en-marcha | desktop | mobile |
| 4 | `admin-products` | puesta-en-marcha | desktop | mobile |
| 5 | `admin-menu-preview` | dueño | desktop | mobile |
| 6 | `admin-dashboard` | dueño | desktop | mobile |
| 7 | `admin-shifts` | dueño | desktop | mobile |
| 8 | `admin-qr` | dueño | desktop | mobile |
| 9 | `admin-qr-wifi` | dueño | desktop | mobile |
| 10 | `admin-sellers` | dueño | desktop | mobile |
| 11 | `admin-tickets` | dueño | desktop | mobile |
| 12 | `admin-db` | dueño | desktop | mobile |
| 13 | `admin-printer` | dueño | desktop | mobile |
| 14 | `menu-public` | público | desktop | mobile |
| 15 | `menu-promotion` | público | desktop | mobile |
| 16 | `seller-pos` | vendedor | desktop | mobile |
| 17 | `seller-cuentas` | vendedor | desktop | mobile |
| 18 | `seller-tickets` | vendedor | desktop | mobile |

### Estado de los AVIF

**36 de 36 convertidos (completos).** Los convirtió el usuario con ezgif.com (sufijo `-ezgif.com-apng-to-avif-converter` que luego se renombró quitándolo) y se eliminaron los AVIF viejos (5-sep). Resultado: 36 `.avif` (18 vistas × desktop + mobile) con los nombres exactos que genera `views.ts` (`png(id, device)` → reemplazo a `.avif`).

> Proceso aplicado 2026-09-11: eliminar los `.avif` sin sufijo ezgif (viejos), eliminar el duplicado `admin-tickets-desktop-ezgif...(1).avif`, renombrar los 36 quitando `-ezgif.com-apng-to-avif-converter`.
> El fallback AVIF→PNG está arreglado: `views.ts` y los mockups apuntan al **PNG base** (`png()`), y `DeviceMockup` intenta `.avif` primero y cae a PNG via `onerror`. Ver `optimizacion-imagenes.md`.

## Credenciales demo (para capturas)

- Admin: `admin` / `admin123`
- Sellers: `seller1` / `seller2` → `demo1234`
- Config demo: `name='La Esquina de los Sabores'`, `wifi_ssid='MenuQR_WiFi'`, `wifi_password='demo1234'`

### Rutas reales de la app (v2.1.0)

- `/admin/login` → login
- `/admin` → dashboard
- `/admin/shifts` → turnos
- `/admin/qr` → QR (tab WiFi activo para admin-qr-wifi)
- `/admin/menu` → categorías/productos
- `/admin/sellers` → vendedores
- `/admin/tickets` → tickets/turnos
- `/admin/db` → backup/restore
- `/admin/printer` → impresora
- `/seller` → POS
- `/seller/cuentas` → cuentas POS
- `/seller/tickets` → tickets del vendedor
- `/menu` → menú público

## Cómo regenerarlas

```bash
# 1. Iniciar la app Electron en dev (solo lectura — ver datos-demo.md)
cd ../menu-qr-app_electron
pnpm electron:dev
# → Server en http://localhost:3000

# 2. Abrir Playwright (MCP browser) desde la landing
# 3. Loguear según la vista:
#    - Admin: /admin/login → admin/admin123
#    - Seller: login con seller1/demo1234
# 4. Navegar a la ruta de la vista
# 5. Setear viewport: 1280×800 (desktop) o 375×812 (mobile)
# 6. page.screenshot({ fullPage: false, path: 'public/views/<view>-<device>.png' })
```

### Notas de capturas específicas

- **`menu-promotion`**: esperar ~6-7 segundos en `/menu` hasta que aparezca la burbuja flotante "Ver promoción" ANTES de capturar (si se captura antes, queda idéntica a `menu-public`).
- **`admin-qr-wifi`**: en `/admin/qr`, hacer click en la tab **WiFi** para que muestre la config (`MenuQR_WiFi`/`demo1234`). Sin ese click, queda idéntica a `admin-qr`.
- **`admin-dashboard`**: requiere el build nuevo de la app — verifica que NO contenga las strings "Ventas por hora del turno"/"Turno por día" (gráficas eliminadas en v2.1.0).
- **`seller-cuentas`**: las cuentas viven en **localStorage del vendedor** (namespace Zustand `seller:1`), no en la DB. Se crean desde `/seller/cuentas` → "Nueva cuenta" → agregar productos. Mesas demo cargadas: Mesa 1 ($11.900, Nachos+Provoleta+Alitas ½ docena) y Mesa 2 ($10.100, Papas rústicas Grande+Cerveza rubia+Chop 500ml).
- **`admin-shifts`** — Turnos: el turno abierto siempre es el ÚLTIMO. Abrir/cerrar turnos solo como admin.

## Fallback en el landing

- **`views.ts`** usa `png(id, device)` como fuente base → `desktopSrc`/`mobileSrc` apuntan al `.png` (¡NO al `.avif`!).
- **`DeviceMockup.tsx`** (SVG `<image>`): `avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".avif")` — intenta `.avif` primero; si el browser no lo soporta, `onerror` cae al `.png` base. Un solo download.
- **`imageUtils.tsx`** (`AvifImg` con `<picture>`) para contextos `<img>`: `<source srcSet=".avif">` + fallback PNG del browser.
- ⚠️ **Gotcha:** si `src` ya es `.avif`, el fallback queda muerto (`replace` no matchea y `onerror` vuelve al mismo `.avif`). SIEMPRE pasar PNG como base a los mockups.