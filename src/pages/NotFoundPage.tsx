import { Link } from 'react-router-dom'
import { MapPinOff } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="min-h-dvh flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto">
        <div className="animate-fade-in-up animate-delay-0">
          <MapPinOff className="w-12 h-12 text-text-secondary/40 mx-auto mb-6" aria-hidden="true" />
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-7xl sm:text-8xl font-bold text-primary">
          404
        </h1>

        <p className="animate-fade-in-up animate-delay-200 mt-4 text-2xl sm:text-3xl font-semibold text-text-primary">
          Esta página no existe
        </p>

        <p className="animate-fade-in-up animate-delay-300 mt-4 text-text-secondary text-lg">
          La ruta que buscas no se encuentra en esta red local. Puede que la
          página haya sido movida o que no exista.
        </p>

        <span className="animate-fade-in-up animate-delay-400 inline-block mt-6 font-mono text-sm text-text-secondary/60">
          404 &mdash; Not Found
        </span>

        <div className="animate-fade-in-up animate-delay-500 mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-primary-solid text-white px-6 py-3 text-base hover:bg-primary-solid-hover transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
