import { ContactButton } from "@/components/ContactButton";
import { AvifImg } from "@/lib/imageUtils";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navLinks = [
    { href: "#features", label: "Características" },
    { href: "#how-it-works", label: "Cómo funciona" },
    { href: "#contact", label: "Solicitar App" },
  ];

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 200);
  }, [mobileOpen, isClosing]);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative z-20 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 shrink-0"
              aria-label="Ir al inicio"
            >
              <AvifImg
                src={`${import.meta.env.BASE_URL}icon.png`}
                alt=""
                className="w-8 h-8 rounded-lg"
                loading="eager"
              />
              <span className="text-text-primary font-bold text-lg hidden sm:block">
                Menu QR
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <ContactButton />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div
            className={` bg-bg-primary rounded-b-2xl px-4 relative z-20 md:hidden pb-4 border-t border-border  pt-4 animate-fade-in ${isClosing && "animate-fade-out"}`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-text-primary hover:bg-bg-surface transition-colors rounded-lg py-2.5 px-3 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 px-3">
                <ContactButton className="w-full justify-center" />
              </div>
            </div>
          </div>
          <div
            onClick={() => closeModal()}
            className={`bg-black/5 backdrop-blur-xs absolute top-0 left-0 right-0   h-svh! z-10 animate-fade-in ${isClosing && "animate-fade-out"}`}
          />
        </>
      )}
    </nav>
  );
}
