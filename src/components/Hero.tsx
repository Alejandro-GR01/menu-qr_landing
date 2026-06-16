import { ContactButton } from '@/components/ContactButton'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-dvh flex flex-col items-center justify-center px-4 pt-24 pb-12 md:pb-16 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* App icon */}
        <img
          src={`${import.meta.env.BASE_URL}icon.png`}
          alt="Menu QR"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl shadow-lg shadow-primary/10 mb-6 md:mb-8 animate-fade-in"
        />

        {/* Headline */}
        <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-text-primary leading-tight animate-fade-in-up animate-delay-100">
          Tu menú digital,
          <br />
          <span className="text-primary">siempre disponible</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl animate-fade-in-up animate-delay-200">
          Sin internet, sin demoras, sin mensualidades. Una app de escritorio
          que convierte tu menú en un QR — accesible desde cualquier celular
          en la red local.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10 animate-fade-in-up animate-delay-300">
          <ContactButton large />
        </div>

        {/* Secondary CTA */}
        <p className="mt-3 md:mt-4 text-xs sm:text-sm text-text-secondary animate-fade-in-up animate-delay-400">
          Pago único · Sin registros · Listo en 2 minutos
        </p>
      </div>

      {/* Screenshot preview */}
      <div className="relative z-10 mt-12 md:mt-16 w-full max-w-4xl animate-fade-in-up animate-delay-500">
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
          <img
            src={`${import.meta.env.BASE_URL}screenshot-menu-desktop.png`}
            alt="Vista previa del menú digital"
            className="w-full h-auto hidden md:block"
          />
          <img
            src={`${import.meta.env.BASE_URL}screenshot-menu-mobile.png`}
            alt="Vista previa del menú digital en mobile"
            className="w-full h-auto md:hidden"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="mt-8 md:mt-12 text-text-secondary hover:text-text-primary transition-colors animate-bounce"
        aria-label="Scroll para ver características"
      >
        <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </section>
  )
}
