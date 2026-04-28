'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={`divide-y divide-border ${className}`} itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className="font-sans font-semibold text-primary text-base leading-snug"
                itemProp="name"
              >
                {item.question}
              </span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                {isOpen ? (
                  <Minus size={14} className="text-accent" />
                ) : (
                  <Plus size={14} className="text-accent" />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p className="text-muted text-sm leading-relaxed" itemProp="text">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
