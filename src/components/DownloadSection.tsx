import { ContactButton } from '@/components/ContactButton'

export function DownloadSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Solicitar <span className="text-primary">Menu QR</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Contactame y te paso la app para tu restaurante o bar
          </p>
        </div>

        {/* Main CTA */}
        <div className="flex justify-center mb-16">
          <ContactButton large />
        </div>

        {/* Admin screenshot preview */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
            <img
              src={`${import.meta.env.BASE_URL}screenshot-admin-desktop.png`}
              alt="Panel de administración"
              className="w-full h-auto hidden md:block"
            />
            <img
              src={`${import.meta.env.BASE_URL}screenshot-admin-mobile.png`}
              alt="Panel de administración en mobile"
              className="w-full h-auto md:hidden"
            />
          </div>
          <p className="text-center text-text-secondary text-sm mt-4">
            Panel de administración simple e intuitivo
          </p>
        </div>
      </div>
    </section>
  )
}
