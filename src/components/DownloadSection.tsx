import { ContactButton } from "@/components/ContactButton";
import { LaptopFrame, MobileFrame } from "@/components/DeviceMockup";
import { useAvifSrc } from "@/lib/imageUtils";
import { QrCode, Smartphone, Monitor } from "lucide-react";

export function DownloadSection() {
  const adminDesktopSrc = useAvifSrc(`${import.meta.env.BASE_URL}screenshot-admin-desktop.png`)
  const adminMobileSrc = useAvifSrc(`${import.meta.env.BASE_URL}screenshot-admin-mobile.png`)
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Administra desde{" "}
            <span className="text-primary">cualquier dispositivo</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            El panel de administración también es accesible vía QR. Gestiona tu
            menú desde la PC del local, tu celular o una tablet.
          </p>
        </div>

        {/* Admin devices */}
        <div className="grid grid-rows-5 md:grid-cols-5 md:grid-rows-1  items-center justify-center gap-8 md:gap-6 lg:gap-10 mb-16">
          {/* Laptop — admin desktop */}
          <div className="row-span-2 md:row-span-1 md:col-span-2 w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <LaptopFrame
              src={adminDesktopSrc}
              alt="Panel de administración en PC"
            />
            <div className="flex items-center gap-2 justify-center mt-3">
              <Monitor className="w-4 h-4 text-primary" />
              <p className="text-text-secondary text-xs sm:text-sm">
                Admin en desktop
              </p>
            </div>
          </div>

          {/* QR connector */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <QrCode className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              QR
            </span>
            <div className="hidden md:block w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
            <div className="md:hidden h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          {/* Mobile — admin mobile */}
          <div className=" mx-auto row-span-2 md:row-span-1 md:col-span-2 w-full max-w-[90px] sm:max-w-[120px] md:max-w-[150px] ">
            <MobileFrame
              src={adminMobileSrc}
              alt="Panel de administración en celular"
            />
            <div className="flex items-center gap-2 justify-center mt-3">
              <Smartphone className="w-4 h-4 text-primary" />
              <p className="text-text-secondary text-xs sm:text-sm">
                Admin en mobile
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-secondary text-sm sm:text-base mb-6 max-w-md mx-auto">
            ¿Listo para digitalizar tu menú? Solicítalo y te envío todos los
            detalles.
          </p>
          <ContactButton large />
        </div>
      </div>
    </section>
  );
}
