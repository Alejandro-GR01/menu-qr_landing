# Diseño visual

## Paleta de colores

| Role | Hex | Uso |
|------|-----|-----|
| Background | `#0A0A0A` | Fondo principal |
| Surface | `#1A1A1A` | Cards, secciones |
| Primary | `#C25E44` | Botones, acentos, hover |
| Gold accent | `#b8860b` | Detalles decorativos |
| Text primary | `#FAFAFA` | Texto principal |
| Text secondary | `#A0A0A0` | Descripciones |
| Border | `#2A2A2A` | Bordes de cards |

## Tipografía

- **Headings/Body:** Geist Variable (system-ui fallback)
- **Código:** JetBrains Mono (monospace nativo)

## Animaciones

- **fade-in-up**: elementos aparecen desde abajo (0.6s)
- **fade-in**: elementos aparecen suavemente (0.5s)
- **Delays**: escalonados de 100ms en 100ms (100, 200, 300... 800)
- **Scroll behavior**: `scroll-behavior: smooth` en html

## Fondo ambiental (AmbientGlow)

Los headers de **todas las rutas** comparten el fondo del hero original, extraído a `src/components/AmbientGlow.tsx`:

| Capa | Especificación |
|------|---------------|
| Glow primario | `bg-primary/5`, 1000px, `blur-[150px]`, centrado |
| Glow dorado | `bg-gold/5`, 500px, `blur-[100px]`, offset `-translate-x-1/4 translate-y-1/4` |
| Grilla | `radial-gradient(circle at 1px 1px, #fafafa 1px, transparent 0)`, 48px, opacidad 0.03 |

- Es **estático** (no animado); la animación que se percibe es el `fade-in-up` del contenido
- Contrato de uso obligatorio en el contenedor: `relative` + `overflow-hidden`, contenido con `relative z-10`
- El componente trae `pointer-events-none` + `aria-hidden="true"`
- `align="top"` para headers compactos (ancla el glow arriba), `align="center"` para full-viewport (Home, 404)

## Responsive

- Mobile-first con breakpoints sm (640px), md (768px), lg (1024px)
- Screenshots: desktop en ≥md, mobile en <md
- Navbar: hamburger en mobile, links horizontales en desktop
- Feature grid: 1 col mobile → 2 tablet → 3 desktop
- Views showcase: desktop mockup full width + mobile debajo (stack) en < 768px