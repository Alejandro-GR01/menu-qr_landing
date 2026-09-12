# Issue 8 — Copy v2.1.0 en secciones de contenido (Features, Comparison, FAQ, Infra, Dashboard, Hero)

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Bloquea a:** nada
> **Fase de ejecución:** Batch 1 (paralelo con Issues 6, 7, 9)

## Qué construir

Actualizar el **copy visible** del landing para reflejar la app **v2.1.0** y hablarle al **dueño de un local** (NO a desarrolladores). Sin cambiar layout ni estilos — solo texto, iconos si aportan, y ajustes mínimos de estructura si el copy lo requiere.

## Features v2.1.0 que el landing debe comunicar

| Feature | Mensaje actual en landing | Mensaje objetivo |
|---|---|---|
| **Turnos** | No existe | "Día comercial 15:00→04:00. Al cerrar, se imprime el resumen del turno: ventas, tickets y productos" |
| **Cuentas del POS** | No existe | "El vendedor abre una cuenta por mesa: agrega productos, va sumando, y al final imprime el ticket" |
| **Dashboard modo turno** | KPIs genéricos | KPIs del turno activo con comparación vs turno anterior |
| **Impresora universal** | Ya mencionada en Infra | Reforzar: USB / Serial / TCP / Bluetooth — cualquier impresora térmica |
| **Menú digital** | Correcto | Mantener |

## Qué se toca (solo componentes de contenido)

| Archivo | Cambios |
|---|---|
| `src/components/Features.tsx` | Revisar las 6 cards: si alguna repite feature, reemplazar la menos potente por **Turnos** (con icono `Clock3` o similar de lucide-react que EXISTA en v1.18). Mensajes en lenguaje de negocio, no técnico |
| `src/components/Comparison.tsx` | Mantener 3 columnas (papel / online / local). Revisar filas: agregar o ajustar "Cierre de turno" y "Cuentas por mesa" si aplica |
| `src/components/FAQ.tsx` | Componente de acordeón — funciona con `items` prop. **La data vive en `src/pages/ContactPage.tsx` (`FAQ_ITEMS`)**: agregar ahí 2-3 preguntas nuevas: turnos, cuentas/POS, impresoras compatibles. Respuestas cortas en español neutro |
| `src/pages/ContactPage.tsx` | Fuente de `FAQ_ITEMS` — agregar items nuevos (ver arriba) |
| `src/pages/FeaturesPage.tsx` | Copy con voseo en CTA final ("Contactas al desarrollador") → español neutro ("Puedes contactar al desarrollador") — revisar todo el archivo |
| `src/components/Infrastructure.tsx` | Verificar que el diagrama y cards mencionen impresora universal y PC como servidor. Ajustar copy si es técnico |
| `src/components/DashboardSection.tsx` | Ajustar a "modo turno": KPIs del turno activo, comparación con turno anterior |
| `src/components/Hero.tsx` | Usar imagen ACTUAL: reemplazar `screenshot-menu-desktop.png` / `screenshot-menu-mobile.png` (de junio) por `views/menu-public-desktop.avif` / `views/menu-public-mobile.avif` (o PNG fallback) con `import.meta.env.BASE_URL`. Verificar qué imagen usa hoy antes de tocar |
| `src/components/HowItWorks.tsx` | Si menciona pasos obsoletos, ajustar; si está bien, no tocar |

## Reglas de copy (OBLIGATORIAS)

1. **Español neutro, SIN voseo** (ni "cargá", ni "hacés"). Correcto: "descargas", "generas", "puedes", "imprimes".
2. **Lenguaje de negocio, no técnico**: prohibido "CRUD", "drag & drop", "Backup/Restore", "DB", "API". Decir "copia de seguridad", "reordenas con un arrastre", "cargas tus productos".
3. **Tono:** cálido, cercano, con un toque de ingenio (coherente con el resto del landing).
4. **Labels de botones UI** quedan en infinitivo ("Solicitar App").

## Responsividad (OBLIGATORIA — todo el landing)

El landing es **mobile-first** con breakpoints `sm` (640), `md` (768), `lg` (1024). Cualquier ajuste de copy/estructura en estos componentes debe:
- Mantener el layout responsive EXISTENTE (grid 1 col mobile → 2 tablet → 3 desktop en Features; Comparison stack vertical en mobile; Dashboard KPIs en grid adaptable).
- NO introducir anchos fijos, `overflow-x` innecesario, ni texto que desborde en 375px.
- Verificarse visualmente en desktop (≥1024) Y mobile (≤375) antes de dar por cerrado el cambio.

## Criterios de aceptación

- [ ] Features cubre Turnos (y cierre con resumen impreso) y no usa lenguaje técnico.
- [ ] FAQ agrega turnos/cuentas/impresoras con respuestas cortas.
- [ ] Hero usa las imágenes actuales de `views/` (menú público).
- [ ] Comparison refleja cierre de turno / cuentas si corresponde.
- [ ] `pnpm lint` y `pnpm build` pasan (el subagente debe correrlos).
- [ ] Nada de `menu-qr-app_electron/` fue tocado.

## Bloqueado por

**None - puede arrancar de inmediato.**
Nota: no depende de Issue 6 (capturas) — las imágenes de `views/` ya existen (menú público desktop/mobile).