import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { CONTACT_FORM_ID } from '@/components/ContactButton'

const DEVELOPER_EMAIL = 'alejandrogr011231@gmail.com'

const CONSULTA_TYPES = [
  'Solicitar Menu QR',
  'Impresora térmica',
  'Hardware / PC recomendada',
  'Otra consulta',
] as const

const inputClasses =
  'w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-colors'

const labelClasses = 'block text-sm font-medium text-text-primary mb-2'

export function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [negocio, setNegocio] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [tipo, setTipo] = useState<string>(CONSULTA_TYPES[0])
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = negocio.trim()
      ? `Solicitud Menu QR — ${negocio.trim()}`
      : 'Solicitud Menu QR'

    const origen = [negocio.trim(), ciudad.trim() ? `(${ciudad.trim()})` : '']
      .filter(Boolean)
      .join(' ')

    const primeraLinea = origen
      ? `Hola Alejandro, soy ${nombre.trim()}, de ${origen}.`
      : `Hola Alejandro, soy ${nombre.trim()}.`

    const body = [
      primeraLinea,
      '',
      mensaje.trim(),
      '',
      `Tipo de consulta: ${tipo}`,
    ].join('\n')

    const mailto = `mailto:${DEVELOPER_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section
      id={CONTACT_FORM_ID}
      aria-labelledby="contact-form-title"
      className="scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2
            id="contact-form-title"
            className="text-3xl sm:text-4xl font-bold text-text-primary"
          >
            Envías tu <span className="text-primary">solicitud</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Cuentas sobre tu negocio: te llega el mail armado con todo, solo lo
            envías y coordinamos la entrega del instalador.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-bg-surface border border-border rounded-2xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-nombre" className={labelClasses}>
                Nombre
              </label>
              <input
                id="contact-nombre"
                name="nombre"
                type="text"
                required
                aria-required="true"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre y apellido"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-negocio" className={labelClasses}>
                Negocio / Nombre del local
              </label>
              <input
                id="contact-negocio"
                name="negocio"
                type="text"
                required
                aria-required="true"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                placeholder="Ej: Bar La Esquina"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-ciudad" className={labelClasses}>
                Ciudad o país{' '}
                <span className="text-text-secondary">(opcional)</span>
              </label>
              <input
                id="contact-ciudad"
                name="ciudad"
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                placeholder="Ej: Buenos Aires, Argentina"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-tipo" className={labelClasses}>
                ¿Qué te interesa?
              </label>
              <select
                id="contact-tipo"
                name="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className={inputClasses}
              >
                {CONSULTA_TYPES.map((tipoOption) => (
                  <option key={tipoOption} value={tipoOption}>
                    {tipoOption}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="contact-mensaje" className={labelClasses}>
                Mensaje
              </label>
              <textarea
                id="contact-mensaje"
                name="mensaje"
                rows={5}
                required
                aria-required="true"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Ej: Tengo un bar con 12 mesas y quiero menú digital. ¿Cómo funciona y cuánto tarda la instalación?"
                className={`${inputClasses} resize-y`}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 font-semibold rounded-xl bg-primary-solid text-white hover:bg-primary-solid-hover transition-all duration-200 hover:scale-105 active:scale-95 px-8 py-4 text-base"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              Enviar solicitud
            </button>
          </div>

          <p className="mt-6 text-sm text-text-secondary text-center">
            Si lo prefieres puedes escribir directo a{' '}
            <a
              href={`mailto:${DEVELOPER_EMAIL}`}
              className="text-primary-text hover:text-primary-text underline underline-offset-2 transition-colors"
            >
              {DEVELOPER_EMAIL}
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}