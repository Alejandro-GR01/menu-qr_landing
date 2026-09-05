import type { ComparisonItem } from '@/types'
import { CheckCircle2 } from 'lucide-react'

const COMPARISONS: ComparisonItem[] = [
  {
    aspect: 'Actualizar precios',
    paper: 'Reimprimir todo',
    cloud: 'Al instante',
    local: 'Al instante',
    localWins: true,
  },
  {
    aspect: 'Costo mensual',
    paper: 'Imprenta en cada cambio',
    cloud: 'Suscripción + hosting',
    local: 'Pago único',
    localWins: true,
  },
  {
    aspect: 'Funciona sin internet',
    paper: 'Siempre',
    cloud: 'No',
    local: '100%',
    localWins: true,
  },
  {
    aspect: 'Acceso desde celular',
    paper: 'Foto del menú',
    cloud: 'Escanean QR',
    local: 'Escanean QR',
    localWins: true,
  },
  {
    aspect: 'Tiempo de carga',
    paper: 'Inmediato',
    cloud: '1-3 seg',
    local: '< 100ms',
    localWins: true,
  },
  {
    aspect: 'Privacidad de datos',
    paper: 'En el local',
    cloud: 'En servidor externo',
    local: 'En tu PC',
    localWins: true,
  },
  {
    aspect: 'Configuración',
    paper: 'Diseñador gráfico',
    cloud: 'Registro web + API keys',
    local: 'Descargas, abres, listo',
    localWins: true,
  },
  {
    aspect: 'Actualización remota',
    paper: 'Ir al local',
    cloud: 'Desde cualquier lado',
    local: 'Desde cualquier dispositivo en la red',
    localWins: true,
  },
]

export function Comparison() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Papel, nube, o{' '}
            <span className="text-primary">tu propia PC</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Compara las tres opciones y elige la que mejor se adapte a tu negocio
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-bg-surface">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-bg-surface py-4 px-4 align-bottom text-xs font-semibold uppercase tracking-wider text-text-secondary border-r border-border"
                >
                  Aspecto<span className="sr-only"> qué comparar</span>
                </th>
                <th scope="col" className="py-4 px-4 align-bottom font-semibold text-text-primary">
                  📋 Menú de Papel
                </th>
                <th scope="col" className="py-4 px-4 align-bottom font-semibold text-text-primary">
                  ☁️ Menú Online
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 align-bottom text-primary-text"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">🖥️ Menu QR + Electron</span>
                    <span className="inline-flex w-fit items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/15 text-primary-text">
                      Recomendado
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPARISONS.map((item) => (
                <tr key={item.aspect} className="even:bg-white/[0.02]">
                  <td className="sticky left-0 z-10 bg-bg-surface py-4 px-4 align-top font-medium text-text-primary border-r border-border">
                    {item.aspect}
                  </td>
                  <td className="py-4 px-4 align-top text-text-secondary">{item.paper}</td>
                  <td className="py-4 px-4 align-top text-text-secondary">{item.cloud}</td>
                  <td className="py-4 px-4 align-top text-primary-text font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      {item.localWins && (
                        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      )}
                      {item.local}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Pago único, sin mensualidades
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            100% offline
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            POS con impresión térmica
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            QR servido desde tu PC
          </span>
        </p>
      </div>
    </section>
  )
}