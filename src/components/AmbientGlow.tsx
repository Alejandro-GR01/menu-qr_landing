interface AmbientGlowProps {
  /**
   * 'center' — glow centrado (Hero, ocupando toda la sección).
   * 'top' — glow anclado arriba (headers compactos de rutas interiores).
   */
  align?: 'center' | 'top'
}

/**
 * Capas de fondo ambiental reutilizables:
 * glow primario naranja + glow dorado + grilla de puntos.
 * Extraído del Hero para dar consistencia a todos los headers de rutas.
 */
export function AmbientGlow({ align = 'center' }: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex justify-center pointer-events-none overflow-hidden ${
        align === 'top' ? 'items-start' : 'items-center'
      }`}
    >
      {/* Glow principal - centro exacto */}
      <div className="absolute w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] rounded-full bg-primary/5 blur-[150px]" />

      {/* Glow secundario - offset sutil */}
      <div className="absolute w-[500px] h-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold/5 blur-[100px]" />

      {/* Grilla de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fafafa 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}