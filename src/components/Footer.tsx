import { Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt="Menu QR"
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <p className="text-text-primary text-sm font-semibold">Menu QR</p>
              <p className="text-text-secondary text-xs">
                © {year} — Pago único, cero suscripciones
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:alejandrogr011231@gmail.com?subject=Solicitud%20Menu%20QR"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              Solicitar App
            </a>
            <span className="flex items-center gap-1 text-text-secondary text-sm">
              Hecho con <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
