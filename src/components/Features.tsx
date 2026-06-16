import { Wifi, Zap, CreditCard, Shield, Settings, Smartphone } from 'lucide-react'
import type { Feature } from '@/types'

const FEATURES: Feature[] = [
  {
    icon: 'Wifi',
    title: 'Sin internet necesario',
    description:
      'El menú se sirve desde tu PC a la red local. Si se corta internet, el menú sigue funcionando al instante.',
  },
  {
    icon: 'Zap',
    title: 'Rápido como un rayo',
    description:
      'Cero latencia de red externa. Los cambios que hacés en el admin se ven al instante en los celulares de tus clientes.',
  },
  {
    icon: 'CreditCard',
    title: 'Pago único, cero suscripciones',
    description:
      'Comprás una vez y la app es tuya para siempre. Sin cuotas mensuales, sin costos de hosting, sin sorpresas.',
  },
  {
    icon: 'Shield',
    title: 'Tus datos, tu PC',
    description:
      'Toda la información de tu menú, configuraciones e imágenes se guardan localmente. Sin depender de servidores externos.',
  },
  {
    icon: 'Settings',
    title: 'Configuración simple',
    description:
      'Descargás, abrís y ya está. Categorías, productos, fotos y precios se administran desde un panel visual e intuitivo.',
  },
  {
    icon: 'Smartphone',
    title: 'Accesible desde cualquier celular',
    description:
      'Tus clientes escanean el QR con la cámara de su celular — sin apps, sin registros, al instante.',
  },
]

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi, Zap, CreditCard, Shield, Settings, Smartphone,
}

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            ¿Por qué <span className="text-primary">Menu QR</span>?
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Pensado para restaurantes que necesitan algo que simplemente funcione
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon]
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-border bg-bg-surface hover:border-primary/30 hover:bg-[#222] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {Icon && <Icon className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
