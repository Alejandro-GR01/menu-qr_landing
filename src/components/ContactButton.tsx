import { Mail } from 'lucide-react'

interface ContactButtonProps {
  className?: string
  large?: boolean
}

export function ContactButton({ className = '', large = false }: ContactButtonProps) {
  return (
    <a
      href="mailto:alejandrogr011231@gmail.com?subject=Solicitud%20Menu%20QR"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover transition-all duration-200 hover:scale-105 active:scale-95 ${large ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'} ${className}`}
    >
      <Mail className={large ? 'w-6 h-6' : 'w-5 h-5'} />
      Solicitar App
    </a>
  )
}
