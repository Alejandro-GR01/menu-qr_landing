import { Link, NavLink } from "react-router-dom";
import { ContactButton } from "@/components/ContactButton";
import { AvifImg } from "@/lib/imageUtils";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/funcionalidades", label: "Funcionalidades" },
    { to: "/contacto", label: "Contacto" },
  ];

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative z-20 bg-bg-primary/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
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
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA -> form en /contacto */}
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
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors rounded-lg py-2.5 px-3 text-sm font-medium ${
                      isActive
                        ? "text-primary-text bg-bg-surface"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2 px-3">
                <ContactButton
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => closeModal()}
            className={`bg-black/60 backdrop-blur-sm absolute top-0 left-0 right-0   h-svh! z-10 animate-fade-in ${isClosing && "animate-fade-out"}`}
          />
        </>
      )}
    </nav>
  );
}