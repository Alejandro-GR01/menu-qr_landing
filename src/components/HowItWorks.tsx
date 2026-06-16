import { Download, Settings, QrCode, Smartphone } from 'lucide-react'
import type { Step } from '@/types'

const STEPS: Step[] = [
  {
    number: 1,
    icon: 'Download',
    title: 'Descarga la app',
    description:
      'Descarga el instalador para tu sistema operativo. No requiere registros ni cuentas.',
  },
  {
    number: 2,
    icon: 'Settings',
    title: 'Configura tu menú',
    description:
      'Agrega categorías, productos, precios y fotos desde el panel de administración. Todo visual, sin código.',
  },
  {
    number: 3,
    icon: 'QrCode',
    title: 'Generá tu QR',
    description:
      'La app genera automáticamente un código QR con acceso al menú público y al panel de admin.',
  },
  {
    number: 4,
    icon: 'Smartphone',
    title: 'Listo para tus clientes',
    description:
      'Imprimí el QR y ponelo en la mesa. Tus clientes lo escanean y ven el menú al instante.',
  },
]

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Download, Settings, QrCode, Smartphone,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-bg-surface/50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Cómo <span className="text-primary">funciona</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            De la descarga a la primera mesa escaneando en menos de 5 minutos
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {STEPS.map((step) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <div key={step.number} className="relative flex items-start gap-6 md:gap-8">
                  {/* Number + icon */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 shrink-0 rounded-2xl bg-bg-surface border-2 border-primary/30">
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
