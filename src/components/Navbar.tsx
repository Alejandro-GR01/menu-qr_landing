import { ContactButton } from '@/components/ContactButton'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Características' },
    { href: '#how-it-works', label: 'Cómo funciona' },
    { href: '#contact', label: 'Solicitar App' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border" aria-label="Navegación principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Ir al inicio">
            <img
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt=""
              className="w-8 h-8 rounded-lg"
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
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 animate-fade-in">
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
        )}
      </div>
    </nav>
  )
}
