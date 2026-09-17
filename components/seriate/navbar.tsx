'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { LinkedinIcon } from './linkedin-icon'

const navLinks = [
  { label: 'The Autoformulator', href: '/' },
  { label: 'Core Advantages', href: '/#advantages' },
]

const applicationsLinks = [
  { label: 'Topical Pharmaceuticals & Dermatology', href: '/#pharma' },
  { label: 'Personal Care & Cosmetics', href: '/#personal-care' },
  { label: 'Energy & Advanced Materials', href: '/#energy' },
  { label: 'Functional Foods & Nutraceuticals', href: '/#foods' },
]

const aboutLinks = [
  { label: 'About the Founder', href: '/#team' },
  { label: 'Research & Publications', href: '/publications' },
  { label: 'FAQ', href: '/#faq' },
]

function Dropdown({
  label,
  items,
}: {
  label: string
  items: { label: string; href: string }[]
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-cobalt">
        {label}
        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-1 rounded-lg border border-slate-200 bg-white p-1.5 opacity-0 shadow-md transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-cobalt"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center" aria-label="Seriate Innovations home">
          <Image
            src="/seriate-logo.png"
            alt="Seriate Innovations"
            width={170}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-cobalt"
            >
              {link.label}
            </a>
          ))}
          <Dropdown label="Applications" items={applicationsLinks} />
          <Dropdown label="About" items={aboutLinks} />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/seriate-innovations-private-limited/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seriate Innovations on LinkedIn"
            className="hidden size-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:border-cobalt hover:text-cobalt sm:flex"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="/#contact"
            className="hidden rounded-lg bg-cobalt px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cobalt-dark sm:inline-flex"
          >
            Accelerate Your DoE
          </a>
          <button
            className="inline-flex size-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {[...navLinks, ...applicationsLinks, ...aboutLinks].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-cobalt"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-cobalt px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Accelerate Your DoE
            </a>
          </div>
        </div>
      )}
    </header>
  )
}