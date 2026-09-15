# Componentes y sus estados

## AmbientGlow
Fondo ambiental reutilizable (extraído del Hero) — consistencia visual en el header de TODAS las rutas.

| Prop | Valores | Default | Descripción |
|------|---------|---------|-------------|
| `align` | `'center' \| 'top'` | `'center'` | `center`: glow centrado (Home, 404). `top`: anclado arriba para headers compactos |

Capas internas (3): glow primario `bg-primary/5` (1000px, `blur-[150px]`), glow dorado `bg-gold/5` (500px, `blur-[100px]`, offset -1/4, +1/4), grilla radial `#fafafa` al 3% (48px).

**Contrato de uso — los 4 puntos obligatorios para no romper layout:**
1. El section contenedor debe tener `relative` (ancla los absolutes)
2. Y `overflow-hidden` (los glows de 1000px generan scroll horizontal si se fuga)
3. El contenido va con `relative z-10` (stacking por encima del glow)
4. El componente ya trae `pointer-events-none` + `aria-hidden="true"` — no duplicarlos

Usado en: `Hero`, `FeaturesPage`, `ContactPage`, `NotFoundPage`.

## Navbar
| Estado | Comportamiento |
|--------|---------------|
| Default | Logo + nav links + CTA "Solicitar App" |
| Mobile | Hamburger menu con drawer animado |
| Scroll | Fondo con backdrop-blur al scrollear |

## Hero
| Estado | Comportamiento |
|--------|---------------|
| Cargando | Animaciones fade-in secuenciales (app icon → headline → CTA → mockups) |
| Default | LaptopFrame (menú desktop) + QR connector + MobileFrame (menú mobile) |
| Fondo | `<AmbientGlow />` (primer hijo del section, `relative overflow-hidden` en el contenedor) |
| Sin imagen | Fallback: SVG sin screenshot (no debería pasar, está en public/) |

## ContactButton
| Estado | Comportamiento |
|--------|---------------|
| Default | mailto directo al desarrollador |
| Hover | scale(1.05) + color más claro |
| Active | scale(0.95) |

## Features
| Estado | Comportamiento |
|--------|---------------|
| Default | Grid 3 columnas desktop, 2 tablet, 1 mobile |
| Hover card | Borde primary/30 + bg más claro |
| Sin icono | No renderiza el icono (fallback seguro) |

## HowItWorks
| Estado | Comportamiento |
|--------|---------------|
| Default | Timeline vertical con 4 pasos, línea conectora |
| Mobile | Igual pero sin línea conectora (solo iconos) |

## Comparison
| Estado | Comportamiento |
|--------|---------------|
| Default | 3 columnas (papel | nube | local). Local destacado con borde primary |
| Mobile | Stack vertical |

## DeviceMockup

| Componente | SVG Features |
|------------|-------------|
| **LaptopFrame** | Lid con bisel + teclado con teclas + trackpad + bisagra + cámara. Screenshot clip dentro de la pantalla |
| **MobileFrame** | Body con botones laterales + Dynamic Island + cámara + home indicator. Screenshot clip dentro de la pantalla |

Ambos SVGs usan `clipPath` para recortar el screenshot dentro del área de pantalla, gradientes para el acabado metálico, y sombra. Intentan `.avif` y caen a PNG via `onerror` (ver `optimizacion-imagenes.md`).

## TechStack
| Estado | Comportamiento |
|--------|---------------|
| Default | Badge flex-wrap centrados |
| Hover badge | Tooltip flotante con descripción de la tecnología |

## DownloadSection
| Estado | Comportamiento |
|--------|---------------|
| Default | ContactButton grande + LaptopFrame (admin desktop) + QR connector + MobileFrame (admin mobile) |
| Sin screenshot | Fallback: SVG sin screenshot (no debería pasar) |

## ViewsShowcase
| Estado | Comportamiento |
|--------|---------------|
| Default | Tabs/filtros de vistas + LaptopFrame + MobileFrame lado a lado (grid 3 cols en md+) |
| Mobile | Desktop mockup full width + mobile debajo centrado |
| Vista sin AVIF | Muestra PNG via fallback onerror (solo pesa más) |

## Footer
| Estado | Comportamiento |
|--------|---------------|
| Default | Logo + copyright + Solicitar App (mailto) |

## Páginas (React Router)

| Página | Ruta | Contenido |
|--------|------|-----------|
| HomePage | `/` | Hero (con AmbientGlow) + Features + HowItWorks + Comparison + DashboardSection + TechStack + CTA cierre |
| FeaturesPage | `/funcionalidades` | Header (con AmbientGlow) + GetStarted + Infrastructure + ViewsShowcase + CTA |
| ContactPage | `/contacto` | Header (con AmbientGlow) + pasos de entrega + DownloadSection + FAQ + CTA final + ContactForm |
| NotFoundPage | `*` | 404 (con AmbientGlow) con fallback a home |

> Todos los headers de páginas comparten el fondo ambiental via `AmbientGlow` (ver arriba).