import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Comparison } from '@/components/Comparison'
import { DashboardSection } from '@/components/DashboardSection'
import { TechStack } from '@/components/TechStack'
import { ContactButton } from '@/components/ContactButton'

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <DashboardSection />
      <TechStack />

      {/* CTA de cierre -> form en /contacto */}
      <section className="py-24 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            ¿Listo para <span className="text-primary">digitalizar tu menú</span>?
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Contactas al desarrollador para recibir la app en tu sistema operativo.
          </p>
          <div className="mt-8">
            <ContactButton large />
          </div>
        </div>
      </section>
    </>
  )
}
