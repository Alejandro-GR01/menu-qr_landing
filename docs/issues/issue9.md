# Issue 9 — Rediseñar ViewsShowcase: el mockup manda, el texto respira

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Bloquea a:** nada (depende funcionalmente de Issue 6 para imágenes nuevas; usar fallback)
> **Fase de ejecución:** Batch 1 (paralelo con Issues 6, 7, 8)

## Qué construir

Rediseñar la galería de vistas de la página **Funcionalidades** (`src/components/ViewsShowcase.tsx` + `src/data/views.ts` + `src/types.ts`) para que **el mockup sea el protagonista y el texto sea mínimo**.

### Problema actual (verificado)

- 4 tarjetas gigantes de área (Administración, Puesta en marcha, Cliente, Operación diaria) con título + descripción + contador + "Ver" → ~400px de chrome sin contenido.
- Segundo nivel de navegación con tabs (5+4+4+3 vistas).
- Ficha de conocimiento enorme por vista: descripción (párrafo) + "Qué te permite hacer" (3-4 bullets) + "Cómo se usa" (3-4 pasos) + "Cuándo te sirve" (párrafo) ≈ 350 palabras.
- Copy técnico ("CRUD", "drag & drop", "Backup/Restore", "vistas por tipos") orientado a devs, no a dueños de local.

### Diseño objetivo (Opción A — la recomendada)

```
┌────────────────────────────────────────────────────────────┐
│ 4 chips compactos de PERSONA (una sola fila, pill buttons) │
│ 👨🍳 El dueño · 🛠️ Puesta en marcha · 📱 El cliente · 🧑💼 El vendedor │
├────────────────────────────────────────────────────────────┤
│                                                            │
│        ┌────────────────────────────┐    ┌─────────┐       │
│        │      MOCKUP DESKTOP        │    │ MOBILE  │       │
│        │        (protagonista)      │    │ overlay │       │
│        │                            │    │ esquina │       │
│        └────────────────────────────┘    └─────────┘       │
│                                                            │
│  TÍTULO DE LA VISTA: una frase corta (qué logra el dueño)  │
│  ✓ beneficio 1   ✓ beneficio 2   ✓ beneficio 3            │
│  [ Solicitar la app → ]                                    │
│                                                            │
│  ‹  Ver siguiente  ›                                       │
└────────────────────────────────────────────────────────────┘
```

### Reglas del rediseño

1. **Muere la tarjeta-área gigante** → 4 chips pill con icono, una fila, `flex-wrap` para mobile.
2. **Muere el segundo nivel de tabs** → navegación por flechas ‹ › o thumbnails chicos para pasar entre vistas de la persona seleccionada. También se puede un acordeón vertical compacto (título + vista activa).
3. **Muere el muro de texto** → cada vista tiene: título + UNA frase corta (qué logra el dueño, máximo 15 palabras) + máximo 3 checkmarks de 6-8 palabras. Nada de "cómo se usa" ni "cuándo te sirve" como bloques.
4. **Mobile como overlay** en la esquina inferior derecha del desktop (patrón ya usado en `DownloadSection.tsx`).
5. **Transición** sutil (fade/slide) al cambiar de vista.
6. **Copy en español neutro SIN voseo**, lenguaje de negocio, no técnico:
   - ❌ "CRUD de productos con drag & drop" → ✅ "Cargas productos con precio y foto. Los reordenas con un arrastre."
   - ❌ "Backup/Restore" → ✅ "Una copia de seguridad de todo tu menú, por si acaso."
   - ❌ "Vista previa" → ✅ "Ves tu menú tal cual lo verá el cliente antes de imprimir el QR."
7. **Persistir la persona seleccionada** en el estado local del componente (useState); default: primera persona.
8. Si la imagen del mockup no existe (ej: vistas nuevas de Issue 6 aún no capturadas), el `DeviceMockup` ya hace fallback AVIF→PNG; para archivos totalmente ausentes mostrar un placeholder elegante (caja con icono) — NO una imagen rota.

### Archivos que toca

| Archivo | Cambio |
|---|---|
| `src/components/ViewsShowcase.tsx` | Rediseño completo del layout y navegación |
| `src/data/views.ts` | Simplificar: agrupar por persona (4), reducir copy de cada vista a título + frase + 3 checkmarks, agregar vistas nuevas si aplica (`admin-shifts`, `seller-cuentas`) |
| `src/types.ts` | Ajustar tipos `ViewEntry` / `FunctionalArea` si cambia el shape (respetar otros tipos existentes — NO borrar nada) |
| `src/pages/FeaturesPage.tsx` | (opcional) si necesita pasar props o ajustar el encabezado de sección |

### Criterios de aceptación

- [ ] **Responsividad completa (OBLIGATORIA):** mobile-first con breakpoints `sm` 640 / `md` 768 / `lg` 1024.
- [ ] Desktop (≥1024px): chips de persona (1 fila) → mockup desktop grande + mobile overlay → título + frase + ≤3 checks → CTA → navegación ‹ ›.
- [ ] Tablet (640-1024px): chips en 1-2 filas, overlay más chico y pegado, mockup desktop sigue dominando.
- [ ] Mobile (<640px): todo stack vertical, chips en 2 filas (o scroll horizontal suave), mockup desktop full width, mobile DEBAJO centrado SIN overlay superpuesto, ficha y CTA apilados. Sin overflow-x del viewport, sin texto desbordado a 375px.
- [ ] El copy no tiene voseo ni lenguaje técnico.
- [ ] Cambiar de persona y de vista funciona sin scroll raro (constrain height razonable).
- [ ] Si hay vista sin imagen → placeholder elegante, no imagen rota.
- [ ] El orquestador verifica `pnpm lint` + `pnpm build` al final (los subagentes NO corren build).
- [ ] Nada de `menu-qr-app_electron/` fue tocado.

## Bloqueado por

**None - puede arrancar de inmediato** (el rediseño no depende de Issue 6; las imágenes nuevas llegan después).

> ⚠️ Coordinación: Issue 9 y Issue 8 tocan archivos distintos (el 9 toca ViewsShowcase/data/types; el 8 toca Features/Comparison/FAQ/Infra/Dashboard/Hero). No colisionan.