import { X, Check } from 'lucide-react'
import type { ComparisonItem } from '@/types'

const COMPARISONS: ComparisonItem[] = [
  {
    aspect: 'Funciona sin internet',
    cloud: '❌ No',
    local: '✅ 100%',
    localWins: true,
  },
  {
    aspect: 'Latencia',
    cloud: '⏱️ Depende del servidor',
    local: '⚡ Instantánea (red local)',
    localWins: true,
  },
  {
    aspect: 'Costo mensual',
    cloud: '💰 Suscripción + hosting',
    local: '🔒 Pago único',
    localWins: true,
  },
  {
    aspect: 'Privacidad de datos',
    cloud: '☁️ En servidor externo',
    local: '💻 En tu PC',
    localWins: true,
  },
  {
    aspect: 'Configuración',
    cloud: '⚙️ Registro web + API keys',
    local: '📦 Descargar, abrir, listo',
    localWins: true,
  },
  {
    aspect: 'Velocidad de carga',
    cloud: '🐢 1-3 segundos (depende de internet)',
    local: '🚀 < 100ms (red local)',
    localWins: true,
  },
]

export function Comparison() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Menú en la nube vs{' '}
            <span className="text-primary">Menu QR Local</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            La diferencia es abismal cuando el internet no es perfecto
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cloud column */}
          <div className="md:col-span-1 p-6 rounded-2xl border border-border bg-bg-surface">
            <div className="flex items-center gap-2 mb-6">
              <X className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-text-primary">Menú en la nube</h3>
            </div>
            <ul className="space-y-4">
              {COMPARISONS.map((item) => (
                <li key={item.aspect} className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-text-primary font-medium block mb-0.5">{item.aspect}</span>
                  {item.cloud}
                </li>
              ))}
            </ul>
          </div>

          {/* VS divider (desktop) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">VS</span>
            </div>
          </div>

          {/* Local column */}
          <div className="md:col-span-1 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex items-center gap-2 mb-6">
              <Check className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Menu QR Local</h3>
            </div>
            <ul className="space-y-4">
              {COMPARISONS.map((item) => (
                <li key={item.aspect} className="text-sm leading-relaxed">
                  <span className="text-text-primary font-medium block mb-0.5">{item.aspect}</span>
                  <span className="text-primary/90">{item.local}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
