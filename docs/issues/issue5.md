# Issue 5 — FAQ (preguntas frecuentes) + página de Contacto completa

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Depende de:** Issue 2 (crea `ContactPage.tsx` inicial) + Issue 4 (el tipo de Comparison en types.ts, si comparte archivo — coordinar)
> **Fase de ejecución:** Batch 3 (paralelo con Issue 3 — archivos disjuntos)

## Qué construir

Completar la **página Contacto** (`/contacto`, ya creada como versión inicial en Issue 2) con una sección de **preguntas frecuentes (FAQ)** y un flujo de contacto claro, manteniendo el **contacto por email** (NO es descarga directa — el desarrollador entrega el `.exe` por Gmail tras el contacto).

## Contexto de producto (para el copy)

- **Plataforma:** la app es para **Windows** (aunque corre en macOS/Linux, la landing se posiciona para Windows).
- **Entrega:** la app **no se descarga de la landing**. El interesado **contacta por Gmail** y el desarrollador le gestiona la entrega del `.exe`.
- **Pago:** **pago único**, sin mensualidades, sin hosting.
- **Offline:** funciona 100% sin internet (red local + QR).

## Componentes a crear

### `src/components/FAQ.tsx`
Acordeón de preguntas frecuentes. Preguntas sugeridas (podés ajustar):

1. **¿Necesito conexión a internet?** — No. Todo funciona en la red local del local (PC + WiFi). Nada de nube.
2. **¿Necesito saber programar o instalar servidores?** — No. Se descarga, se abre, y se configura el menú desde un panel visual.
3. **¿Cómo acceden los clientes?** — Escanean el QR que genera la app con la cámara de su celular. Sin apps, sin registros.
4. **¿Cuánto cuesta? ¿Hay mensualidad?** — Pago único. Sin suscripción, sin hosting, sin costos de servidor.
5. **¿Y si se corta el internet del local?** — El menú sigue funcionando igual, porque se sirve desde la PC.
6. **¿Cómo recibo la app?** — Contactás por el formulario/email y el desarrollador te coordina la entrega del instalador para Windows.
7. **¿Se puede imprimir tickets?** — Sí, hasta con impresora térmica (tickets de venta/cobro en el POS).
8. **(opcional) ¿Qué es el POS de vendedor?** — Un punto de venta integrado para que el vendedor cobre desde su celular/tablet en la red local.

Comportamiento: acordeón con apertura/cierre (una a la vez está bien), animación de suavizado, `aria-expanded` y `aria-controls` para accesibilidad.

### `ContactPage` (completa)
- **Hero/header de página:** "Solicitá tu Menu QR" + subtítulo.
- **CTA principal de contacto:** `ContactButton` (mailto a `alejandrogr01dev@gmail.com`) — reutilizar el componente existente.
- **Información de entrega:** texto aclarando que tras el contacto el desarrollador te envía el instalador para Windows (.exe).
- **Pasos** (opcional, si queda bien): 1) Contactás → 2) Te llega el instalador → 3) Lo instalás y configurás el menú → 4) Listo para escanear.
- **FAQ:** la sección `<FAQ />` abajo.
- **CTA final** que repita el contacto.

## Archivos que crea / modifica

**Crea:**
- `src/components/FAQ.tsx`

**Modifica:**
- `src/pages/ContactPage.tsx` — reemplazar el contenido inicial del Issue 2 por la página completa (incluye `<FAQ />`).
- `src/types.ts` — SOLO si necesitás un tipo nuevo para el FAQ (ej: `FAQItem`). Agregar sin borrar lo que agrega Issue 4.

> ⚠️ **Coordinación de tipos:** `src/types.ts` lo toca Issue 4 (Comparison 3col) e Issue 3 (ViewEntry). Este issue SI necesita tocar types.ts, agregar su tipo nuevo respetando todo lo demás.

## Criterios de aceptación

- [ ] `pnpm build` pasa.
- [ ] En `/#/contacto` se ve: header + CTA de contacto (mailto) + info de entrega del .exe + FAQ + CTA final.
- [ ] El FAQ es acordeón accesible (aria-expanded/aria-controls) y responsivo.
- [ ] Refuerza "Windows + pago único + offline + entrega por email".
- [ ] No descarga directa desde la página (el contacto es por Gmail).
- [ ] No toca `Features.tsx`, `Comparison.tsx`, `Navbar.tsx`, `App.tsx`, `main.tsx`, `FeaturesPage.tsx`.

## Plan de ejecución global (fases)

El proyecto se ejecuta en **3 batches** para evitar solape de archivos entre agentes:

```
Batch 1 — PARALELO, archivos disjuntos
  ▪ Issue 1 (capture-views)     → public/views/*.png + *.avif + views.md
  ▪ Issue 4 (comparison-3col)   → src/components/Comparison.tsx (+ tipo en src/types.ts)

Batch 2 — SECUENCIAL, después de Batch 1
  ▪ Issue 2 (routing-and-layout)→ src/main.tsx, src/App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx

Batch 3 — PARALELO, archivos disjuntos, después de Batch 2
  ▪ Issue 3 (views-showcase)    → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts (+ tipo ViewEntry en types.ts)
  ▪ Issue 5 (faq-contact)       → ContactPage.tsx + FAQ.tsx (+ tipo FAQItem en types.ts)   ← ESTE ISSUE
```

**Este issue corre en Batch 3** en paralelo con el Issue 3. Comparte `src/types.ts` con los issues 3 y 4, pero NO colisiona en tiempo (4 → Batch 1, terminado antes).

> ⚠️ **Coordinación `src/types.ts`:** los issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno agrega SU interface respetando las existentes, sin borrar nada.

## Bloqueado por

- Issue 2 (routing-and-layout) — provee la ruta `/contacto` y `ContactPage.tsx`
