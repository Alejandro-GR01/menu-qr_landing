# Issue 7 — AGENTS.md a estructura índice + specs en docs/

> **Método:** to-issues (vertical slice)
> **Tipo:** AFK
> **Bloquea a:** nada
> **Fase de ejecución:** Batch 1 (paralelo con Issues 6, 8, 9)

## Qué construir

El `AGENTS.md` del landing es un **monolito de 869 líneas** con TODO adentro (arquitectura, componentes, pipeline de captura, planes de cambio, issues...). El patrón validado en `menu-qr-app_electron/` es: **AGENTS.md índice delgado + specs profundos en `docs/specs/`** con un `README.md` maestro.

Reestructurar dividiendo el contenido en **bloques temáticos**, cada uno referenciado desde AGENTS.md **con su ruta en docs/**, y en cada ruta un archivo `.md` nombrado según el contenido con los detalles del bloque especificados.

## Estructura objetivo

```
AGENTS.md (índice, ~150-200 líneas — el CORE que todo agente DEBE leer)
├── 1. Visión general (audiencia: DUEÑO DE LOCAL, no devs)
├── 2. Stack completo (tabla)
├── 3. Arquitectura resumida (3 páginas, routing, deploy) + ruta → docs/specs/landing-architecture.md
├── 4. Estructura de archivos (core, sin listar component por component)
├── 5. Reglas críticas (español neutro SIN voseo, AVIF fallback, BASE_URL, deploy manual, NO tocar menu-qr-app_electron)
├── 6. Comandos (dev/build/preview/lint/deploy)
├── 7. Convenciones (commits, copy, capturas)
├── 8. Estado actual (qué refleja el landing, qué falta)
└── 9. Índice de specs (tabla nombre → ruta → contenido → cuándo leerlo)

docs/specs/
├── README.md                     # Índice maestro con tabla + árbol de decisión
├── landing-architecture.md      # Páginas, componentes y sus estados, routing, deploy, errores conocidos
├── landing-content.md           # Copy, idioma, voz, inventario de vistas/áreas, datos demo, FAQ
├── landing-design.md            # Paleta, tipografía, animaciones, responsive, mockups SVG (LaptopFrame/MobileFrame)
└── landing-capture.md           # Pipeline de captura Playwright → PNG → AVIF, views.md, restauración DB
```

## Qué mover de AGENTS.md a specs (y qué queda en AGENTS)

| Bloque actual de AGENTS.md | Destino |
|---|---|
| §2 Arquitectura + §4 Componentes/estados + §7 Deploy + §10 Errores conocidos | → `docs/specs/landing-architecture.md` |
| §5 Diseño visual + §9 Buenas prácticas del stack | → `docs/specs/landing-design.md` |
| §11 Capturas + §12 Datos demo + §14 Pipeline AVIF | → `docs/specs/landing-capture.md` |
| Copy/vistas/áreas y su data | → `docs/specs/landing-content.md` (reglas, no duplicar el archivo `src/data/views.ts`) |
| §3 Stack + §6 Scripts + §8 Skills + regla de idioma | Quedan en AGENTS (core) |
| §13-16 Planes de cambio e issues | **Histórico**: referenciar `docs/issues/` como histórico, NO migrar planes superados |

## Correcciones de hechos que DEBE incluir el nuevo AGENTS.md

1. **Deploy:** NO existe `.github/workflows/` — el deploy es manual: `pnpm build && cp dist/index.html dist/404.html && gh-pages -d dist` (script `deploy` ya en package.json).
2. **URL del repo:** el repo real es `https://github.com/Alejandro-GR01/menu-qr_landing.git` (la carpeta se llama `menu-qr-electron_landing` pero el nombre del repo es `menu-qr_landing` — verificar `git remote get-url origin` y usar esa URL real).
3. Regla de oro vigente: **nunca modificar código de `menu-qr-app_electron/`** — solo leer su documentación (AGENTS.md, docs/).
4. `.playwright-mcp/` debe agregarse a `.gitignore`.

## Criterios de aceptación

- [ ] `AGENTS.md` queda como índice delgado (< 250 líneas) que referencia cada bloque con ruta real a `docs/specs/`.
- [ ] Se crean `docs/specs/README.md` + `landing-architecture.md` + `landing-content.md` + `landing-design.md` + `landing-capture.md` con el detalle movido (no borrado).
- [ ] El detalle de cada bloque del AGENTS viejo existe en su spec correspondiente (nada se pierde).
- [ ] Hechos corregidos: deploy manual (no Actions), repo real, `.gitignore` incluye `.playwright-mcp/`.
- [ ] El AGENTS nuevo cumple regla de idioma: copy de la landing en español neutro SIN voseo.
- [ ] No se tocó `src/` (salvo que un spec lo requiera explícitamente).

## Bloqueado por

**None - puede arrancar de inmediato.**