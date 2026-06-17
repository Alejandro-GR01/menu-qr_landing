import { ContactButton } from "@/components/ContactButton";
import { LaptopFrame, MobileFrame } from "@/components/DeviceMockup";
import { AvifImg } from "@/lib/imageUtils";
import { ArrowDown, QrCode } from "lucide-react";

export function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="min-h-dvh flex flex-col items-center justify-center px-4 pt-24 pb-12 md:pb-16 relative overflow-hidden">
      {/* Background layers - centrado perfecto */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Glow principal - centro exacto */}
        <div className="absolute w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] rounded-full bg-primary/5 blur-[150px]" />

        {/* Glow secundario - offset sutil */}
        <div className="absolute w-[500px] h-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold/5 blur-[100px]" />

        {/* Grilla de fondo sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fafafa 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* App icon — LCP candidate, eager */}
        <AvifImg
          src={`${import.meta.env.BASE_URL}icon.png`}
          alt="Menu QR"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl shadow-lg shadow-primary/10 mb-6 md:mb-8 animate-fade-in"
          loading="eager"
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
          que convierte tu menú en un QR — accesible desde cualquier celular en
          la red local.
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

      {/* Device mockups */}
      <div className="relative z-10 mt-12 md:mt-16 w-full max-w-5xl animate-fade-in-up animate-delay-500">
        <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-5 md:grid-rows-1 items-center justify-center gap-6 md:gap-4 lg:gap-8">
          {/* Laptop — menú público desktop */}
          <div className="row-span-2 md:row-span-1 md:col-span-2 w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <LaptopFrame
              src={`${baseUrl}screenshot-menu-desktop.png`}
              alt="Menú digital en PC"
            />
            <p className="text-center text-text-secondary text-xs sm:text-sm mt-3">
              Menú público desde cualquier PC
            </p>
          </div>

          {/* QR connector */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <QrCode className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
              QR
            </span>
            <div className="hidden md:block w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
            <div className="md:hidden h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          {/* Mobile — menú público mobile — eager: above the fold */}
          <div className="mx-auto row-span-2 md:row-span-1 md:col-span-2 w-full max-w-[90px] sm:max-w-[120px] md:max-w-[150px] ">
            <MobileFrame
              src={`${baseUrl}screenshot-menu-mobile.png`}
              alt="Menú digital en celular"
            />
            <p className="text-center text-text-secondary text-xs sm:text-sm mt-3">
              Escanea el QR al instante
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="relative z-10 mt-8 md:mt-12 text-text-secondary hover:text-text-primary transition-colors animate-bounce"
        aria-label="Scroll para ver características"
      >
        <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
      </a>
    </section>
  );
}
