# Errores conocidos del stack

## Errores de tooling/TS

| Error | Causa | Solución |
|-------|-------|----------|
| `TS5101: baseUrl deprecado` | TypeScript 6.0 | Remover `baseUrl` del tsconfig, dejar solo `paths` |
| `Cannot find module lucide-react 'Github'` | El icono no existe en lucide-react | Usar `Code2` (o `Mail` para contacto) en su lugar |
| Screenshots no se renderizan | Ruta incorrecta | Usar `import.meta.env.BASE_URL` + nombre del archivo |
| Playwright refs cambian | Ref ID regenerado en cada snapshot | Usar `page.evaluate()` con fetch para interacciones complejas |

## Errores de la app Electron (relevantes al capturar)

### BUG FIXEADO (2026-09-11) — numeración de tickets duplicada

**Síntoma:** UNIQUE violation al crear tickets — se generaba `T11092600001` duplicado.

**Causa raíz:** el backend numera vía meta keys `last_ticket_date`/`last_ticket_number` (tabla `meta`), NO con `MAX(ticket_number)`. Si las metas están desincronizadas con los tickets reales (ej: seed inserta tickets `T11092600001-3` pero metas quedaron en `2026-09-05/4`), `nextTicketNumber()` hace RESET → genera un número ya existente → UNIQUE violation.

**Fix aplicado:** metas → `2026-09-11`/`3`. Verificado con la función real + ticket de prueba por API (id 42, `T11092600004`, luego borrado; metas restauradas a 3).

**Lección:** nunca asumir que la numeración usa MAX — revisar `server/src/services/tickets.service.ts` (L235-247) y `server/lib/ticketNumber.js`. No editar la DB con la app corriendo.

### Regla de capturas (Playwright)

- El modelo NO ve imágenes — verificar por texto/DOM (snapshot) y por tamaño de archivo.
- Al capturar modal porcional de productos: los radios de tamaño son `sr-only` y un `<span>` intercepta el click — hacer click en el contenedor/label padre (ej: `page.getByText('Grande$')`), no en el input radio.