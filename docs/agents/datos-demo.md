# Datos demo — App Electron (solo lectura)

> 🔒 **REGLAS (2026-09-11):** la app Electron NO se toca — no parar, no relanzar, no editar la DB. Solo lectura/capturas con Playwright. La app quedó corriendo con DB demo y turno #5 abierto.

## Por qué hay datos demo

La DB de la app en dev (`~/Library/Application Support/menu-qr-app_electron/menu.db`) contenía **DATOS REALES DE UN CLIENTE** (9 categorías, 91 productos, tickets con montos reales, y datos sensibles: `wifi_ssid`/`wifi_password` en `config`). **NO se podían mostrar en las screenshots del landing** → se cargaron datos demo ficticios.

## Qué hay cargado (DB demo)

- **9 categorías** mantenidas (mismas e iconos)
- **44 productos ficticios**
- **7 tickets demo**
- **2 sellers**: `seller1`/`seller2` → `demo1234`
- **Promoción demo** activa (burbuja flotante "Ver promoción" en el menú público)
- **Config demo:** `name='La Esquina de los Sabores'`, `wifi_ssid='MenuQR_WiFi'`, `wifi_password='demo1234'`
- **Login admin:** `admin` / `admin123`
- Las imágenes de logo/fondo (`uploads/`) fueron cambiadas por el usuario — **no tocar**

> ℹ️ La app usa la DB en `userData` de Electron (`~/Library/Application Support/menu-qr-app_electron/menu.db`), NO `server/menu.db` del repo — esa es otra copia.

## Estado meta (2026-09-11)

- Meta keys de tickets: `last_ticket_date=2026-09-11`, `last_ticket_number=3` (fix aplicado, ver `errores-conocidos.md`).
- Turno #5 abierto (turnos: abiertos/cerrados solo por admin; el turno abierto siempre es el ÚLTIMO).

## Backups

| Backup | Ubicación | Uso |
|--------|-----------|-----|
| **DB real del cliente** | `/var/folders/l2/fzy95mp56t95t7c3jwytn4q00000gn/T/opencode/menuqr-backup-cliente/menu.db.cliente.bak` | Restaurar al terminar — la app del cliente NO puede quedar con datos demo |
| DB demo original | `menu.db.demo-backup` (en el mismo temp) | Si se necesita volver a sembrar |
| Estado seedeado | `/var/folders/l2/fzy95mp56t95t7c3jwytn4q00000gn/T/opencode/menuqr-demo-state-2026-09-11/` | Scripts SQL de seed |

## Cuentas POS (seller-cuentas)

**No viven en la DB** — viven en **localStorage del vendedor** (namespace Zustand `seller:1`, seller1/Carlos Gómez) y sobreviven reinicios del browser. Mesas demo cargadas:

| Mesa | Total | Productos |
|------|-------|-----------|
| Mesa 1 | $11.900 | Nachos $4500 + Provoleta $3800 + Alitas ½ docena $3600 |
| Mesa 2 | $10.100 | Papas rústicas Grande $4800 + Cerveza rubia $2800 + Chop 500 ml $2500 |

Orden de visualización por `updatedAt` DESC (la más reciente primero).

## RESTAURAR la DB del cliente (después del Issue 1)

**⚠️ Requiere autorización del usuario** — contradice la regla de "no tocar la app".

```bash
# 1. Parar la app electron
lsof -ti :3000 | xargs kill    # pkill NO mata el binario real

# 2. Copiar el backup de vuelta:
cp /var/folders/l2/fzy95mp56t95t7c3jwytn4q00000gn/T/opencode/menuqr-backup-cliente/menu.db.cliente.bak \
   "/Users/alejandrogr011231/Library/Application Support/menu-qr-app_electron/menu.db"
```

## Pendientes técnicos del Issue 1

- Borrar `capture-views.tmp.mjs` (script temporal en la app, `../menu-qr-app_electron/`).