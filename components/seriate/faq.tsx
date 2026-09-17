'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How does 1:1 scale-up actually work?',
    a: 'Because continuous plug-flow systems rely on deterministic residence time, shear, and thermal profiles rather than tank geometry, the exact conditions validated in the lab are reproduced at production scale simply by running the line longer - no re-development.',
  },
  {
    q: 'How is our intellectual property protected?',
    a: 'All engagements begin under a mutual NDA. Your formulations, data, and process parameters remain fully confidential and are never shared or reused. Seriate&apos;s own architecture is protected by granted patents.',
  },
  {
    q: 'How much material do I need to provide?',
    a: 'Our micro-volume screening typically requires 90-95% less active material than equivalent batch trials - often just grams of API to fully characterise a formulation space.',
  },
  {
    q: 'Are the results regulatory compliant?',
    a: 'Yes. The platform captures Quality-by-Design (QbD) data aligned to ICH guidelines, producing traceable, audit-ready documentation for every continuous run.',
  },
  {
    q: 'Can we lease the Autoformulator hardware?',
    a: 'We offer flexible engagement models including screening-as-a-service, hardware leasing, and full platform deployment at your site. We tailor the model to your development stage.',
  },
  {
    q: 'Can we visit the lab at IIT Bombay?',
    a: 'Absolutely. We welcome qualified partners to our SINE-incubated lab in Powai to see the continuous plug-flow platform in operation and discuss your formulation challenges.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Technical questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-cobalt transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed text-slate-600"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
