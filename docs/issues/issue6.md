# Issue 6 — Capturar vistas v2.1.0 (Turnos, Cuentas, Dashboard, POS)

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK (ejecución orquestada con Playwright)
> **Bloquea a:** Issue 9 (showcase) — funcionalmente, para imágenes nuevas
> **Fase de ejecución:** Batch 1 (paralelo con Issues 7, 8, 9)

## Qué construir

La app Electron **Menu QR** evolucionó a la **v2.1.0** con 4 cambios visuales clave que el landing todavía no muestra:

1. **Turnos** (`/admin/shifts`) — no existe ninguna screenshot.
2. **Cuentas del POS** (`/seller/cuentas`) — no existe ninguna screenshot.
3. **Dashboard con modo turno** (`/admin/dashboard`) — la screenshot existente es v2.0.4.
4. **POS con cuentas** (`/seller`) — la screenshot existente es v2.0.4.

Este issue regenera/esas capturas en **desktop (1280×800)** y **mobile (375×812)**, en `public/views/` con la nomenclatura `{view}-desktop.png` / `{view}-mobile.png`, y las convierte a **AVIF calidad 80**.

**NO toca nada de `src/`.** Solo genera archivos de imagen actualizados en `public/views/`.

## Rutas reales de la app v2.1.0 (para las capturas)

| Vista | Fenómeno | Desktop | Mobile | Ruta |
|-------|----------|---------|--------|------|
| Turnos | Vista de turnos con cierre e impresión de resumen | `admin-shifts-desktop` | `admin-shifts-mobile` | `/admin/shifts` |
| Cuentas del POS | Tabs tipo mesa con cuenta abierta | `seller-cuentas-desktop` | `seller-cuentas-mobile` | `/seller/cuentas` |
| Dashboard modo turno | KPIs con selector de turno activo | `admin-dashboard-desktop` | `admin-dashboard-mobile` | `/admin/dashboard` |
| POS con cuentas | POS mostrando cuentas | `seller-pos-desktop` | `seller-pos-mobile` | `/seller` |

> Si alguna vista no existe en la app que corre (ej: la ruta devuelve 404 o no hay turno activo), **dejar la screenshot anterior intacta** — el issue siguiente usa fallback visual. NO inventar estados.

## Cómo capturar

1. La app **ya está corriendo** en `http://localhost:3000` (verificar con `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`).
2. **Verificar datos demo** ANTES de capturar: navegar a `/menu` y confirmar categorías demo (Tragos, Picaderas, Dulces — local "La Esquina de los Sabores"). Si hay datos sensibles/reales (wifi_ssid, tickets con montos de clientes), **ABORTAR y reportar** — nunca capturar datos reales de un cliente.
3. **Login admin:** usuario `admin`, password `admin123` (via `/login` o `POST` al endpoint de auth según funcione).
4. Script Playwright (script temporal en `/tmp`, NO en el repo):
   - Viewport `1280×800` desktop, `375×812` mobile.
   - Navegar a cada ruta, loguear como admin cuando haga falta.
   - Para turnos: si hay turno abierto se ve el estado; capturar lo que refleje la app real.
   - `page.screenshot({ fullPage: false, path })`.
5. Convertir a **AVIF calidad 80** usando `sharp` (ya en devDependencies) — por ejemplo con `node -e` o extendiendo `scripts/convert-avif.mjs` para que recorra `public/views/*.png` que cambió de mtime.
6. **NOTA CRÍTICA:** NO escribir NINGÚN archivo dentro de `/Users/alejandrogr011231/Documents/DEV/pruebas/menu-qr-app_electron/`. Solo leer/configurar la app que ya corre. No tocar su código ni su DB.

## Criterios de aceptación

- [ ] Las 4 vistas quedaron con PNG desktop + PNG mobile en `public/views/` (o se documentó por qué una no aplica y se conservó la anterior).
- [ ] Cada PNG convertido a AVIF calidad 80 en `public/views/`.
- [ ] Las capturas muestran SOLO datos demo (nunca datos de clientes reales).
- [ ] No se modificó nada de `src/` ni del repo `menu-qr-app_electron/`.
- [ ] No quedaron scripts temporales en el repo (ir a `/tmp`).

## Bloqueado por

**None - puede arrancar de inmediato** (la app ya corre en localhost:3000).