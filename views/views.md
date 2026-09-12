# Menu QR App — Vistas (v2.1.0)

> Capturas de pantalla de la app **Menu QR v2.1.0** en desktop (1280×800) y mobile (375×812).
> **Última actualización de capturas:** 2026-09-11
>
> ⚠️ **Los datos mostrados son DEMO ficticios** — no corresponden a datos reales de ningún cliente. Local demo: `La Esquina de los Sabores`.

---

## 1. Login

Pantalla de inicio de sesión (unificada para admin y seller). Acceso con credenciales por defecto: `admin` / `admin123` (admin) y `seller1` / `demo1234` (vendedor).

| Archivos | Tags |
|----------|------|
| `login-desktop.png`, `login-desktop.avif` | admin, vendedor, auth |
| `login-mobile.png`, `login-mobile.avif` | admin, vendedor, auth |

Ruta: `/login`

---

## 2. Admin — Dashboard

Panel principal del admin con métricas del día: ventas, tickets, productos más vendidos y KPIs.

| Archivos | Tags |
|----------|------|
| `admin-dashboard-desktop.png`, `admin-dashboard-desktop.avif` | admin, dashboard |
| `admin-dashboard-mobile.png`, `admin-dashboard-mobile.avif` | admin, dashboard |

Ruta: `/admin` (dashboard)

---

## 3. Admin — Turnos

Apertura y cierre de turnos de venta, con detalle de cada cierre: total, tickets y vendedor.

| Archivos | Tags |
|----------|------|
| `admin-shifts-desktop.png`, `admin-shifts-desktop.avif` | admin, turnos, ventas |
| `admin-shifts-mobile.png`, `admin-shifts-mobile.avif` | admin, turnos, ventas |

Ruta: `/admin/shifts`

---

## 4. Admin — Configuración + Promociones

Configuración del local (nombre, logo, fondo) y gestión de promociones activas.

| Archivos | Tags |
|----------|------|
| `admin-config-desktop.png`, `admin-config-desktop.avif` | admin, configuración |
| `admin-config-mobile.png`, `admin-config-mobile.avif` | admin, configuración |

Ruta: `/admin/config`

---

## 5. Admin — Categorías

CRUD de categorías del menú con selector de iconos Lucide, nombre y orden personalizado.

| Archivos | Tags |
|----------|------|
| `admin-categories-desktop.png`, `admin-categories-desktop.avif` | admin, CRUD |
| `admin-categories-mobile.png`, `admin-categories-mobile.avif` | admin, CRUD |

Ruta: `/admin/categories`

---

## 6. Admin — Productos

CRUD de productos con drag & drop para reordenar, disponibles/no disponibles y productos porcionables.

| Archivos | Tags |
|----------|------|
| `admin-products-desktop.png`, `admin-products-desktop.avif` | admin, CRUD |
| `admin-products-mobile.png`, `admin-products-mobile.avif` | admin, CRUD |

Ruta: `/admin/products`

---

## 7. Admin — QR (Menú público)

Generador del QR del menú público, con resolución configurable y descarga con nombre personalizado.

| Archivos | Tags |
|----------|------|
| `admin-qr-desktop.png`, `admin-qr-desktop.avif` | admin, QR |
| `admin-qr-mobile.png`, `admin-qr-mobile.avif` | admin, QR |

Ruta: `/admin/qr` (tab Menú)

---

## 8. Admin — QR (WiFi)

Generador del QR de la red WiFi para que los clientes se conecten automáticamente al escanear (SSID, contraseña, encriptación).

| Archivos | Tags |
|----------|------|
| `admin-qr-wifi-desktop.png`, `admin-qr-wifi-desktop.avif` | admin, QR |
| `admin-qr-wifi-mobile.png`, `admin-qr-wifi-mobile.avif` | admin, QR |

Ruta: `/admin/qr` (tab WiFi)

---

## 9. Admin — Vista previa del Menú

Previsualización del menú público renderizado con el logo, colores, fondo y promoción configurados.

| Archivos | Tags |
|----------|------|
| `admin-menu-preview-desktop.png`, `admin-menu-preview-desktop.avif` | admin, preview |
| `admin-menu-preview-mobile.png`, `admin-menu-preview-mobile.avif` | admin, preview |

Ruta: `/admin/menu-preview`

---

## 10. Admin — Vendedores

Gestión de vendedores para el modo POS: alta, edición, baja y credenciales de acceso.

| Archivos | Tags |
|----------|------|
| `admin-sellers-desktop.png`, `admin-sellers-desktop.avif` | admin, vendedor, config |
| `admin-sellers-mobile.png`, `admin-sellers-mobile.avif` | admin, vendedor, config |

Ruta: `/admin/sellers`

---

## 11. Admin — Tickets

Historial de tickets/ventas con montos, vendedor y estado para auditoría.

| Archivos | Tags |
|----------|------|
| `admin-tickets-desktop.png`, `admin-tickets-desktop.avif` | admin, tickets |
| `admin-tickets-mobile.png`, `admin-tickets-mobile.avif` | admin, tickets |

Ruta: `/admin/tickets`

---

## 12. Admin — Impresora

Configuración de la impresora térmica para tickets de venta.

| Archivos | Tags |
|----------|------|
| `admin-printer-desktop.png`, `admin-printer-desktop.avif` | admin, configuración |
| `admin-printer-mobile.png`, `admin-printer-mobile.avif` | admin, configuración |

Ruta: `/admin/printer`

---

## 13. Admin — Backup / Restore

Exportación e importación de la base de datos (backup/restore) desde el panel.

| Archivos | Tags |
|----------|------|
| `admin-db-desktop.png`, `admin-db-desktop.avif` | admin, configuración |
| `admin-db-mobile.png`, `admin-db-mobile.avif` | admin, configuración |

Ruta: `/admin/db`

---

## 14. Menú Público

Vista del menú que ven los clientes al escanear el QR: categorías, productos con nombre, descripción y precio.

| Archivos | Tags |
|----------|------|
| `menu-public-desktop.png`, `menu-public-desktop.avif` | público, menú |
| `menu-public-mobile.png`, `menu-public-mobile.avif` | público, menú |

Ruta: `/menu`

---

## 15. Menú Público — Promoción

Menú público con burbuja flotante de promoción activa.

| Archivos | Tags |
|----------|------|
| `menu-promotion-desktop.png`, `menu-promotion-desktop.avif` | público, promo, menú |
| `menu-promotion-mobile.png`, `menu-promotion-mobile.avif` | público, promo, menú |

Ruta: `/menu` (con promoción activa)

---

## 16. POS — Punto de Venta (Vendedor)

Punto de venta para vendedores: carga de productos, cálculo de total y cierre de ticket.

| Archivos | Tags |
|----------|------|
| `seller-pos-desktop.png`, `seller-pos-desktop.avif` | vendedor, POS |
| `seller-pos-mobile.png`, `seller-pos-mobile.avif` | vendedor, POS |

Ruta: `/seller` (vendedor)

---

## 17. POS — Cuentas (Vendedor)

Cuentas abiertas del vendedor: varias mesas en paralelo, cada una con sus productos y total.

| Archivos | Tags |
|----------|------|
| `seller-cuentas-desktop.png`, `seller-cuentas-desktop.avif` | vendedor, cuentas, POS |
| `seller-cuentas-mobile.png`, `seller-cuentas-mobile.avif` | vendedor, cuentas, POS |

Ruta: `/seller/cuentas` (vendedor)

---

## 18. POS — Tickets (Vendedor)

Tickets del vendedor: historial de sus propias ventas.

| Archivos | Tags |
|----------|------|
| `seller-tickets-desktop.png`, `seller-tickets-desktop.avif` | vendedor, tickets |
| `seller-tickets-mobile.png`, `seller-tickets-mobile.avif` | vendedor, tickets |

Ruta: `/seller/tickets` (vendedor)

---

## Resumen

| # | Vista | Desktop | Mobile | Ruta | Tags |
|---|-------|---------|--------|------|------|
| 1 | Login | ✅ | ✅ | `/login` | admin, vendedor, auth |
| 2 | Dashboard | ✅ | ✅ | `/admin` | admin, dashboard |
| 3 | Turnos | ✅ | ✅ | `/admin/shifts` | admin, turnos, ventas |
| 4 | Configuración + Promos | ✅ | ✅ | `/admin/config` | admin, configuración |
| 5 | Categorías | ✅ | ✅ | `/admin/categories` | admin, CRUD |
| 6 | Productos | ✅ | ✅ | `/admin/products` | admin, CRUD |
| 7 | QR Menú | ✅ | ✅ | `/admin/qr` | admin, QR |
| 8 | QR WiFi | ✅ | ✅ | `/admin/qr` | admin, QR |
| 9 | Vista previa Menú | ✅ | ✅ | `/admin/menu-preview` | admin, preview |
| 10 | Vendedores | ✅ | ✅ | `/admin/sellers` | admin, vendedor, config |
| 11 | Tickets | ✅ | ✅ | `/admin/tickets` | admin, tickets |
| 12 | Impresora | ✅ | ✅ | `/admin/printer` | admin, configuración |
| 13 | Backup / Restore | ✅ | ✅ | `/admin/db` | admin, configuración |
| 14 | Menú Público | ✅ | ✅ | `/menu` | público, menú |
| 15 | Menú Público + Promo | ✅ | ✅ | `/menu` | público, promo |
| 16 | POS Vendedor | ✅ | ✅ | `/seller` | vendedor, POS |
| 17 | POS Cuentas | ✅ | ✅ | `/seller/cuentas` | vendedor, cuentas, POS |
| 18 | POS Tickets | ✅ | ✅ | `/seller/tickets` | vendedor, tickets |

**Total:** 36 capturas (18 vistas × desktop + mobile), cada una en PNG + AVIF.

> ✅ **AVIF completos (2026-09-11):** los 36 convertidos con ezgif.com y renombrados quitando el sufijo `-ezgif.com-apng-to-avif-converter` (los AVIF viejos del 5-sep se eliminaron). El landing sirve AVIF con fallback a PNG (`views.ts` apunta a PNG base).