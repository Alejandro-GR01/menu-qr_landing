import { ViewsShowcase } from '@/components/ViewsShowcase'
import { GetStarted } from '@/components/GetStarted'
import { Infrastructure } from '@/components/Infrastructure'
import { ContactButton } from '@/components/ContactButton'
import { VIEWS } from '@/data/views'

export function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-text-primary leading-tight animate-fade-in-up">
            Funcionalidades de{' '}
            <span className="text-primary">Menu QR</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text-secondary animate-fade-in-up animate-delay-100">
            Todo lo que la app de escritorio pone a tu alcance para administrar tu
            menú digital — sin internet, sin mensualidades.
          </p>
        </div>
      </section>

      {/* Capa 3 — Primeros pasos */}
      <GetStarted />

      {/* Infraestructura — diagrama de la red local */}
      <Infrastructure />

      {/* Áreas funcionales + Showcase */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ViewsShowcase views={VIEWS} />
        </div>
      </section>

      {/* CTA -> form en /contacto */}
      <section className="pb-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary text-sm sm:text-base mb-6">
            ¿Quieres ver la app en acción? Puedes contactar al desarrollador para una demo.
          </p>
          <ContactButton large />
        </div>
      </section>
    </>
  )
}
