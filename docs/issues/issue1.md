# Issue 1 — Regenerar screenshots de las vistas de la app v2.0.4

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Bloquea a:** Issue 3 (views-showcase)
> **Fase de ejecución:** Batch 1 (paralelo con Issue 4)

## Qué construir

La app Electron **Menu QR** evolucionó a la **v2.0.4** y ahora tiene **más vistas** que las 10 originales documentadas en `public/views/views.md` (que se capturaron el 28 jun y muestran un estado viejo de la app). Este issue **regenera todas las screenshots** desde la app corriendo en dev, en **desktop (1280×800)** y **mobile (375×812)**, y las guarda en `public/views/` con la nomenclatura `{view}-desktop.png` / `{view}-mobile.png`. También actualiza `public/views/views.md`.

**NO toca nada de `src/`.** Solo genera archivos de imagen y el markdown de documentación.

## Rutas reales de la app v2.0.4 (para las capturas)

| Vista | ID | Desktop | Mobile | Ruta |
|-------|----|---------|--------|------|
| Login | `login` | `login-desktop` | `login-mobile` | `/login` |
| Dashboard KPIs | `admin-dashboard` | `admin-dashboard-desktop` | `admin-dashboard-mobile` | `/admin/dashboard` |
| Config + Promociones | `admin-config` | `admin-config-desktop` | `admin-config-mobile` | `/admin/config` |
| Categorías | `admin-categories` | `admin-categories-desktop` | `admin-categories-mobile` | `/admin/categories` |
| Productos (drag & drop) | `admin-products` | `admin-products-desktop` | `admin-products-mobile` | `/admin/products` |
| QR Menú | `admin-qr` | `admin-qr-desktop` | `admin-qr-mobile` | `/admin/qr` |
| QR WiFi | `admin-qr-wifi` | `admin-qr-wifi-desktop` | `admin-qr-wifi-mobile` | `/admin/qr` (tab WiFi) |
| Vista previa Menú | `admin-menu-preview` | `admin-menu-preview-desktop` | `admin-menu-preview-mobile` | `/admin/menu` |
| Vendedores | `admin-sellers` | `admin-sellers-desktop` | `admin-sellers-mobile` | `/admin/sellers` |
| Tickets (auditoría) | `admin-tickets` | `admin-tickets-desktop` | `admin-tickets-mobile` | `/admin/tickets` |
| Impresora | `admin-printer` | `admin-printer-desktop` | `admin-printer-mobile` | `/admin/printer` |
| Backup/Restore | `admin-db` | `admin-db-desktop` | `admin-db-mobile` | `/admin/db` |
| Menú Público | `menu-public` | `menu-public-desktop` | `menu-public-mobile` | `/menu` |
| Menú Público + Promo | `menu-promotion` | `menu-promotion-desktop` | `menu-promotion-mobile` | `/menu` (tras 5s, burbuja abierta) |
| POS de Vendedor | `seller-pos` | `seller-pos-desktop` | `seller-pos-mobile` | `/seller` |
| Mis Tickets (seller) | `seller-tickets` | `seller-tickets-desktop` | `seller-tickets-mobile` | `/seller/tickets` |

> ℹ️ **Nota:** La app creció de 10 a 15-16 vistas. Elegí capturar todas las del admin relevante + público + POS. Podés ajustar la lista si alguna no es de marketing (ej: `admin-qr-wifi` quizás conviene mantener, `seller-tickets` opcional).

## Cómo capturar

1. **Levantar la app** (server en `http://localhost:3000`):
   ```bash
   cd /Users/alejandrogr011231/Documents/DEV/pruebas/menu-qr-app_electron
   pnpm electron:dev
   ```
   > Si hay datos en `server/menu.db` que no son representativos, resetear con:
   > ```bash
   > node scripts/reset-db.mjs   # recrea DB desde init.sql
   > node scripts/seed-sample.sql # o el seed de datos demo actual
   > ```
   > Verificar qué seeds existen en `scripts/` (`seed-sample.sql`, `seed-dashboard-data.*`, `seed-backup.json`).

2. **Credenciales admin:** usuario `admin`, password `admin123` (por defecto, hasheada con bcrypt).

3. **Escribir un script Playwright** (en `/tmp` o en un repo de capturas, NO en `public/views/` todavía) que:
   - Setea viewport `1280×800` para desktop, `375×812` para mobile (iPhone-ish con deviceScaleFactor apropiado).
   - Navega a cada ruta, loguea como admin cuando haga falta (`/login`).
   - Para `admin-qr-wifi`, navega a `/admin/qr` y activa el tab WiFi.
   - Para `menu-promotion`, espera los ~5s de auto-open de la burbuja (o fuerza el estado abierto).
   - Hace `page.screenshot({ fullPage: false, path })` para desktop; para mobile puede ser `fullPage: true` si la vista se scrollea (decidir por cada vista).
   - Guarda en `public/views/{id}-desktop.png` y `public/views/{id}-mobile.png`.

4. **Convertir a AVIF** (calidad 80) con el script existente de la landing:
   ```bash
   cd /Users/alejandrogr011231/Documents/DEV/pruebas/menu-qr-electron_landing
   # El script actual solo recorre public/ raíz. Ampliarlo o crear uno que recorra public/views/
   ```
   > El script `scripts/convert-avif.mjs` actual (vs gitignore) solo convertía los PNG de `public/` raíz. **Extenderlo para que recorra `public/views/*.png` también.**

5. **Actualizar `public/views/views.md`** con la lista nueva de vistas, descripciones y la tabla resumen.

## Criterios de acepatación

- [ ] La app v2.0.4 se levantó en dev y se navega con Playwright.
- [ ] Existe un PNG desktop y un PNG mobile por cada vista listada (≥14 vistas × 2 = ≥28 archivos).
- [ ] Las imágenes muestran el **estado actual** de la app v2.0.4 (login unificado, sidebar nuevo, dashboard, POS, etc.), no el estado viejo de junio.
- [ ] Cada punto de landing: las vistas `login`, `admin-dashboard`, `admin-config`, `admin-products`, `admin-qr`, `menu-public`, `menu-promotion`, `admin-menu-preview`, `admin-db` quedaron capturadas en desktop y mobile.
- [ ] Se generaron los `.avif` correspondientes en `public/views/` (calidad 80).
- [ ] `public/views/views.md` refleja la lista nueva de vistas con descripciones actualizadas.
- [ ] No se modificó nada de `src/`.

## Plan de ejecución global (fases)

El proyecto se ejecuta en **3 batches** para evitar solape de archivos entre agentes:

```
Batch 1 — PARALELO, archivos disjuntos
  ▪ Issue 1 (capture-views)     → public/views/*.png + *.avif + views.md   ← ESTE ISSUE
  ▪ Issue 4 (comparison-3col)   → src/components/Comparison.tsx (+ tipo en src/types.ts)

Batch 2 — SECUENCIAL, después de Batch 1
  ▪ Issue 2 (routing-and-layout)→ src/main.tsx, src/App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx

Batch 3 — PARALELO, archivos disjuntos, después de Batch 2
  ▪ Issue 3 (views-showcase)    → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts (+ tipo ViewEntry en types.ts)
  ▪ Issue 5 (faq-contact)       → ContactPage.tsx + FAQ.tsx (+ tipo FAQItem en types.ts)
```

**Este issue corre en Batch 1** en paralelo con el Issue 4 (no comparten archivos: uno escribe `public/views/`, el otro `src/components/Comparison.tsx`).

> ⚠️ **Coordinación `src/types.ts`:** los issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno agrega SU interface respetando las existentes, sin borrar nada. No colisionan en tiempo (4 → Batch 1; 3 y 5 → Batch 3).

## Bloqueado por

**None - puede arrancar de inmediato.**

---

## ✅ Estado actual (actualizado 2026-09-11)

> **COMPLETO salvo restaurar DB real.** Ver también `docs/agents/capturas.md` y `docs/agents/datos-demo.md`.

### Hecho
- **36 PNG en `public/views/`** (18 vistas × desktop 1280×800 + mobile 375×812) con datos demo (ver `docs/agents/datos-demo.md`).
- **Bug fixeado (numeración de tickets):** metas `last_ticket_date`/`last_ticket_number` desincronizadas causaban UNIQUE violation — ver `docs/agents/errores-conocidos.md`.
- **Recapturas correctas:** `admin-dashboard` (build nuevo sin gráficas eliminadas), `admin-qr-wifi` (tab WiFi activo), `menu-promotion` (burbuja visible tras ~6s).
- **Vistas nuevas v2.1.0:** `admin-shifts` (Turnos) y `seller-cuentas` (POS Cuentas — localStorage, no DB).
- `public/views/views.md` actualizado a v2.1.0 (18 vistas, rutas reales `/seller`, `/seller/cuentas`, `/seller/tickets`, `/admin/shifts`).
- `src/data/views.ts` actualizado (agregadas `admin-shifts` + `seller-cuentas`). `pnpm lint` + `pnpm build` OK.

### Pendiente
1. **Restaurar la DB del cliente** desde `menu.db.cliente.bak` — requiere autorización del usuario (contradice "no tocar la app Electron").
2. Borrar `capture-views.tmp.mjs` (script temporal en la app).

### Nuevo (2026-09-11, después del estado anterior)
- **36/36 AVIF convertidos** por el usuario con ezgif.com — se eliminaron los viejos (5-sep) y se renombraron quitando el sufijo `-ezgif.com-apng-to-avif-converter`. Quedan 36 `.avif` con nombres limpios.
- **Fallback AVIF→PNG arreglado:** `views.ts` pasaba `.avif` directo a los mockups (fallback muerto). Ahora `png(id, device)` genera rutas `.png` como base; `DeviceMockup` intenta AVIF y cae a PNG via `onerror`. Ver `docs/agents/optimizacion-imagenes.md`.
