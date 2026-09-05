# Issue 4 — Comparison a 3 columnas (papel + nube + local)

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Depende de:** — (independiente)
> **Fase de ejecución:** Batch 1 (paralelo con Issue 1)

## Qué construir

Expandir `src/components/Comparison.tsx` de su forma actual (**2 columnas**: "Menú en la nube" vs "Menu QR Local") a una comparación de **3 columnas**: **Menú de Papel** ↔ **Menú Online (nube)** ↔ **Menu QR + Electron**. Destacando visualmente la columna "Menu QR + Electron" como ganadora.

> 📌 Este componente se usa en la Home. El Issue 3/2 NO lo tocan (solo lo importan).

## Nueva tabla comparativa (referencia)

| Aspecto | 📋 Menú de Papel | ☁️ Menú Online | 🖥️ Menu QR + Electron |
|---------|------------------|----------------|------------------------|
| Actualizar precios | Reimprimir | Al instante | Al instante |
| Costo mensual | Imprenta en cada cambio | Suscripción + hosting | Pago único |
| Funciona sin internet | Siempre | No | 100% |
| Acceso desde celular | Foto del menú | Escanean QR | Escanean QR |
| Tiempo de carga | Inmediato | 1-3 seg | < 100ms |
| Privacidad de datos | En el local | En servidor externo | En tu PC |
| Configuración | Diseñador gráfico | Registro web + API keys | Descargar, abrir, listo |
| Actualización remota | Ir al local | Desde cualquier lado | Cualquier dispositivo en la red |

> Puedés ajustar las filas, pero el objetivo es **3 columnas** con la local destacada.

## Estructura recomendada

- Grid `md:grid-cols-[1fr_auto_1fr_auto_1fr]` o `md:grid-cols-3` con separadores "VS" circulares entre columnas (estilo ya presente).
- En mobile: stack vertical (papel → nube → local), con la local siempre al final o destacada.
- Columna **local** con `border-primary/20` + `bg-primary/5` (estilo actual destacado) + badge "Recomendado"/"Elegí" si queda bien.
- Iconos por columna (📋 ☁️ 🖥️) + checks/equis para cada criterio.
- El tipo `ComparisonItem` en `src/types.ts` es de 2 columnas actualmente — **refactorizarlo** a 3 (`paper`, `cloud`, `local`) manteniendo compatibilidad si se usa en otro lado (verificar; si solo lo usa Comparison.tsx, cambiar tranquilo).

## Archivos que modifica

- `src/components/Comparison.tsx` — todo el contenido.
- `src/types.ts` — actualizar/agregar el tipo para 3 columnas (SOLO la parte de Comparison; no pisar `ViewEntry` que agrega Issue 3 — si ambos agregan al mismo archivo, coordinar: cada uno agrega SU tipo sin borrar el del otro).

> ⚠️ **Nota de coordinación:** tanto Issue 4 como Issue 3 agregan tipos a `src/types.ts`. Para evitar conflicto, cada issue **agrega** su interface respetando las existentes, sin borrar nada. (Idealmente corren en fases distintas o se fusionan, ver nota de ejecución.)

## Criterios de aceptación

- [ ] `pnpm build` pasa.
- [ ] La comparación muestra 3 columnas (papel, nube, local) en desktop.
- [ ] En mobile se apila responsivamente sin romperse.
- [ ] La columna "Menu QR + Electron" se destaca visualmente.
- [ ] El copy reconoce el nuevo posicionamiento (muchas features de la v2.0.4: POS, impresión, pago único).
- [ ] No toca `Features.tsx`, `Navbar.tsx`, `App.tsx`, `main.tsx`, páginas.

## Plan de ejecución global (fases)

El proyecto se ejecuta en **3 batches** para evitar solape de archivos entre agentes:

```
Batch 1 — PARALELO, archivos disjuntos
  ▪ Issue 1 (capture-views)     → public/views/*.png + *.avif + views.md
  ▪ Issue 4 (comparison-3col)   → src/components/Comparison.tsx (+ tipo en src/types.ts)   ← ESTE ISSUE

Batch 2 — SECUENCIAL, después de Batch 1
  ▪ Issue 2 (routing-and-layout)→ src/main.tsx, src/App.tsx, Navbar.tsx, Footer.tsx, src/pages/*.tsx

Batch 3 — PARALELO, archivos disjuntos, después de Batch 2
  ▪ Issue 3 (views-showcase)    → FeaturesPage.tsx + ViewsShowcase.tsx + data/views.ts (+ tipo ViewEntry en types.ts)
  ▪ Issue 5 (faq-contact)       → ContactPage.tsx + FAQ.tsx (+ tipo FAQItem en types.ts)
```

**Este issue corre en Batch 1** en paralelo con el Issue 1 (no comparten archivos: uno escribe `src/components/Comparison.tsx`, el otro `public/views/`).

> ⚠️ **Coordinación `src/types.ts`:** los issues 3, 4 y 5 agregan tipos al MISMO archivo. Cada uno agrega SU interface respetando las existentes, sin borrar nada. Este issue (`ComparisonItem` 3 col) corre en Batch 1; los de Batch 3 respetan lo que ya exista.

## Bloqueado por

**None - puede arrancar de inmediato.**
