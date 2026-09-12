# Componentes y sus estados

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
| HomePage | `/` | Hero, Features, ViewsShowcase (resumen), HowItWorks, Comparison, Infrastructure, FAQ, GetStarted |
| FeaturesPage | `/funcionalidades` | ViewsShowcase completo + Features + Comparison |
| ContactPage | `/contacto` | ContactForm + FAQ + DownloadSection |
| NotFoundPage | `*` | 404 con fallback a home |