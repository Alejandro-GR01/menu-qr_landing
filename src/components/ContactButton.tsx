import { Mail } from 'lucide-react'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const CONTACT_FORM_ID = 'contact-form'
export const SCROLL_TO_FORM_KEY = 'scroll-to-contact-form'

interface ContactButtonProps {
  className?: string
  large?: boolean
  onClick?: () => void
}

export function ContactButton({
  className = '',
  large = false,
  onClick,
}: ContactButtonProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = useCallback(() => {
    onClick?.()

    if (pathname === '/contacto') {
      document
        .getElementById(CONTACT_FORM_ID)
        ?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    sessionStorage.setItem(SCROLL_TO_FORM_KEY, '1')
    navigate('/contacto')
  }, [navigate, pathname, onClick])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-primary-solid text-white hover:bg-primary-solid-hover transition-all duration-200 hover:scale-105 active:scale-95 ${large ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'} ${className}`}
    >
      <Mail className={large ? 'w-6 h-6' : 'w-5 h-5'} aria-hidden="true" />
      Solicitar App
    </button>
  )
}
