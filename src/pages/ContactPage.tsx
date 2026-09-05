import { useEffect } from 'react'
import {
  ContactButton,
  CONTACT_FORM_ID,
  SCROLL_TO_FORM_KEY,
} from '@/components/ContactButton'
import { ContactForm } from '@/components/ContactForm'
import { DownloadSection } from '@/components/DownloadSection'
import { FAQ } from '@/components/FAQ'
import { Mail, Download, Settings, CheckCircle } from 'lucide-react'
import type { FAQItem } from '@/types'

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'internet',
    question: '¿Necesito conexión a internet?',
    answer:
      'No. Todo funciona en la red local de tu negocio — la PC del local hace de servidor y los clientes se conectan por WiFi. Sin nube, sin dependencia de ningún servicio externo.',
  },
  {
    id: 'technical',
    question: '¿Necesito saber programar o instalar servidores?',
    answer:
      'No. Se descarga el instalador, se abre, y configuras el menú desde un panel visual intuitivo. Sin código, sin terminal, sin conocimientos técnicos.',
  },
  {
    id: 'clients',
    question: '¿Cómo acceden los clientes al menú?',
    answer:
      'Escanean el QR que genera la app con la cámara de su celular. Sin apps, sin registros, sin datos personales. Abren el navegador y ven el menú al instante.',
  },
  {
    id: 'pricing',
    question: '¿Cuánto cuesta? ¿Hay mensualidad?',
    answer:
      'Pago único. Sin suscripción, sin hosting, sin costos de servidor. Pagás una vez y la app es tuya para siempre.',
  },
  {
    id: 'offline',
    question: '¿Y si se corta el internet del local?',
    answer:
      'El menú sigue funcionando igual, porque se sirve desde la PC del local por la red local. Mientras haya luz y la PC esté encendida, todo funciona.',
  },
  {
    id: 'delivery',
    question: '¿Cómo recibo la app?',
    answer:
      'Contactas por el email del desarrollador y te coordina la entrega del instalador para Windows (.exe). Lo instalas en la PC del local y en minutos tienes el menú funcionando.',
  },
  {
    id: 'tickets',
    question: '¿Se puede imprimir tickets?',
    answer:
      'Sí. La app incluye un POS integrado que permite imprimir tickets de venta y cobro, incluso con impresora térmica.',
  },
  {
    id: 'pos',
    question: '¿Qué es el POS de vendedor?',
    answer:
      'Es un punto de venta integrado para que el vendedor cobre desde su celular o tablet en la red local. Sin hardware adicional, sin suscripciones.',
  },
]

const STEPS = [
  {
    icon: Mail,
    title: 'Nos contactas',
    description: 'Escribes por email al desarrollador y cuentas tu necesidad.',
  },
  {
    icon: Download,
    title: 'Recibes el instalador',
    description: 'Te envían el .exe para Windows, listo para instalar.',
  },
  {
    icon: Settings,
    title: 'Configuras tu menú',
    description:
      'Abres la app, agregas categorías, productos y precios desde el panel visual.',
  },
  {
    icon: CheckCircle,
    title: 'Listo para escanear',
    description:
      'Generas el QR, lo pones en las mesas y tus clientes acceden al menú.',
  },
]

export function ContactPage() {
  useEffect(() => {
    if (sessionStorage.getItem(SCROLL_TO_FORM_KEY)) {
      sessionStorage.removeItem(SCROLL_TO_FORM_KEY)
      document
        .getElementById(CONTACT_FORM_ID)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-text-primary leading-tight animate-fade-in-up">
            Solicitas tu <span className="text-primary">Menu QR</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text-secondary animate-fade-in-up animate-delay-100">
            Me escribes y coordinamos la entrega del instalador para tu negocio.
            Sin complicaciones, sin costos recurrentes.
          </p>
          <div className="mt-8 animate-fade-in-up animate-delay-200">
            <ContactButton large />
          </div>
        </div>
      </section>

      {/* Pasos de entrega */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary text-center mb-12">
            ¿Cómo funciona el{' '}
            <span className="text-primary">proceso</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-bg-surface border border-border rounded-2xl p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-text" />
                </div>
                <p className="text-primary-text text-xs font-semibold tracking-wider uppercase mb-2">
                  Paso {i + 1}
                </p>
                <h3 className="text-text-primary font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin desde cualquier dispositivo + CTA */}
      <DownloadSection />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Todo lo que necesitas saber sobre Menu QR, en un solo lugar.
          </p>
        </div>
        <FAQ items={FAQ_ITEMS} />
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 text-center border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            ¿Listo para digitalizar tu menú?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Un pago, sin mensualidades, sin internet. Escribes y te envío todo.
          </p>
          <ContactButton large />
        </div>
      </section>

      {/* Formulario de solicitud — al fondo de la página */}
      <section className="py-20 px-4 border-t border-border">
        <ContactForm />
      </section>
    </>
  )
}
