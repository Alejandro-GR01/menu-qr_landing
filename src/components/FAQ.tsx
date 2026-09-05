import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/types'

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-border rounded-2xl border border-border bg-bg-surface overflow-hidden">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              id={`faq-question-${item.id}`}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
            >
              <span className="text-text-primary font-medium text-sm sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-primary-text' : ''
                }`}
              />
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-text-secondary text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
