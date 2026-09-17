'use client'

import { useState } from 'react'
import { Mail, MapPin, ShieldCheck, Check } from 'lucide-react'
import { LinkedinIcon } from './linkedin-icon'

const subjects = [
  'Screening-as-a-Service',
  'Hardware Leasing',
  'Partnership / Licensing',
  'Lab Visit Request',
  'General Enquiry',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "2f101f20-59c2-47c7-9364-fc89256eee39")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        console.error("Form submission failed", data)
      }
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
              Get in Touch
            </span>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s reformulate what&apos;s possible
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-slate-600">
              Have a specific formulation challenge in mind? Drop us a message. We keep all conversations strictly confidential and are happy to sign an NDA before discussing your IP.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-cobalt px-5 py-4 text-white transition-colors hover:bg-cobalt-dark"
              >
                <LinkedinIcon className="size-5" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-slate-200 px-5 py-4 text-slate-700">
                <MapPin className="size-5 text-cobalt" />
                <span className="font-medium">SINE, IIT Bombay, Powai, Mumbai 400076</span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50 p-5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cobalt" />
              <div>
                <p className="font-semibold text-slate-900">NDA Assured</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Your formulations and data are treated as strictly confidential from
                  the very first conversation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-cobalt/10">
                  <Check className="size-7 text-cobalt" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">Message received</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-600">
                  Thank you — our team will be in touch shortly, under NDA.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" required />
                  <Field label="Organization" name="org" placeholder="Acme Labs" required />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@acmelabs.com"
                  required
                />
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                    defaultValue={subjects[0]}
                  >
                    {subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us a bit about what you're working on..."
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-cobalt px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-cobalt-dark disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
      />
    </div>
  )
}
