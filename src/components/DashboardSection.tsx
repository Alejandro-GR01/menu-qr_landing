import { Link } from 'react-router-dom'
import { TrendingUp, Receipt, Calculator, BarChart3, ArrowRight } from 'lucide-react'
import { LaptopFrame } from '@/components/DeviceMockup'
import { ContactButton } from '@/components/ContactButton'

const KPIS = [
  {
    icon: TrendingUp,
    name: 'Ventas del turno',
    description: 'el monto total del turno activo, comparado con el turno anterior.',
  },
  {
    icon: Receipt,
    name: 'Tickets cerrados',
    description: 'cada venta que cierra un vendedor desde el POS se cuenta sola.',
  },
  {
    icon: Calculator,
    name: 'Ticket promedio',
    description: 'cuánto gasta en promedio cada cliente que pasa por el local.',
  },
  {
    icon: BarChart3,
    name: 'Productos más vendidos',
    description: 'el ranking de lo que más pide la gente, para decidir qué impulsar.',
  },
]

export function DashboardSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary-text border border-primary/20 px-3 py-1 text-xs font-medium">
              Panel de administración
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              Tu negocio, <span className="text-primary">en números.</span>
            </h2>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Cada ticket que cierra un vendedor en el POS se refleja al instante
              en el dashboard del turno activo. El panel muestra las ventas, los
              tickets cerrados y el producto más vendido del turno en curso, y lo
              compara con el turno anterior — sin abrir una planilla ni sumar a
              mano.
            </p>

            <ul className="mt-8 space-y-4">
              {KPIS.map((kpi) => {
                const Icon = kpi.icon
                return (
                  <li key={kpi.name} className="flex items-start gap-3">
                    <span className="p-2.5 rounded-xl bg-primary/15 text-primary-text shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <p className="text-text-secondary leading-snug pt-1.5">
                      <span className="font-semibold text-text-primary">
                        {kpi.name}:
                      </span>{' '}
                      {kpi.description}
                    </p>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/funcionalidades"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-surface text-text-primary hover:border-primary/40 px-6 py-3 font-semibold transition-all"
              >
                Ver todas las funcionalidades
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <ContactButton />
            </div>
          </div>

          <div>
            <LaptopFrame
              src={`${import.meta.env.BASE_URL}views/admin-dashboard-desktop.png`}
              alt="Dashboard del panel de administración — vista desktop"
            />
          </div>
        </div>
      </div>
    </section>
  )
}