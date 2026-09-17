'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'

const tabs = [
  {
    id: 'pharma',
    label: 'Topical Pharmaceuticals & Dermatology',
    challenge:
      'Topical emulsions and suspensions demand tight control of droplet size and viscosity - batch trials burn API and rarely reproduce.',
    solution:
      'Continuous plug-flow screening dials in shear and thermal profiles in minutes, delivering reproducible formulations that scale 1:1.',
    metrics: [
      { value: '120x', label: 'Faster screening' },
      { value: '95%', label: 'API conserved' },
      { value: '<2%', label: 'Batch-to-batch CV' },
    ],
  },
  {
    id: 'personal-care',
    label: 'Personal Care & Cosmetics',
    challenge:
      'Creams, serums, and lotions require stable, elegant textures - legacy mixing gives inconsistent sensory outcomes across scale.',
    solution:
      'Precision shear zones reproduce target rheology and microstructure, so lab-scale sensory profiles carry straight through to production.',
    metrics: [
      { value: '5 min', label: 'Formulation cycle' },
      { value: '90%', label: 'Waste reduction' },
      { value: '1:1', label: 'Scale-up ratio' },
    ],
  },
  {
    id: 'foods',
    label: 'Functional Foods & Nutraceuticals',
    challenge:
      'Encapsulated actives and emulsified nutrients degrade under harsh batch processing and inconsistent thermal exposure.',
    solution:
      'Gentle, precisely controlled flow preserves bioactivity while ensuring stable, scalable emulsions and dispersions.',
    metrics: [
      { value: '4x', label: 'Actives retained' },
      { value: '85%', label: 'Energy saved' },
      { value: '100%', label: 'Traceable QbD data' },
    ],
  },
  {
    id: 'energy',
    label: 'Energy & Advanced Materials',
    challenge:
      'Electrode slurries are highly sensitive to shear and dispersion - inconsistency drives cell performance variability.',
    solution:
      'Deterministic mixing and inline characterization yield uniform dispersion and viscosity for high-reliability coatings.',
    metrics: [
      { value: '3x', label: 'Throughput gain' },
      { value: '99%', label: 'Dispersion uniformity' },
      { value: '24/7', label: 'Continuous operation' },
    ],
  },
]

export function Applications() {
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (tabs.some((t) => t.id === hash)) {
        setActive(hash)
      }
    }
    
    // Check on mount
    handleHashChange()
    
    // Listen for subsequent changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <section id="applications" className="relative bg-slate-50 py-20 md:py-28">
      {/* Invisible anchor divs with scroll-margin to account for the sticky navbar (h-16 / 64px) */}
      {tabs.map((tab) => (
        <div key={`anchor-${tab.id}`} id={tab.id} className="absolute -top-24" />
      ))}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            Applications
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            One platform, many industries
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                active === tab.id
                  ? 'bg-cobalt text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-cobalt/40 hover:text-cobalt'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                The Challenge
              </p>
              <p className="mt-2 leading-relaxed text-slate-600">{current.challenge}</p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cobalt">
                The Autoformulator Solution
              </p>
              <p className="mt-2 leading-relaxed text-slate-700">{current.solution}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Benchmarks
            </p>
            {current.metrics.map((m) => (
              <div key={m.label} className="flex items-baseline gap-3">
                <span className="w-24 shrink-0 whitespace-nowrap text-2xl font-black text-cobalt">
                  {m.value}
                </span>
                <span className="text-sm text-slate-600">{m.label}</span>
              </div>
            ))}
            <div className="mt-2 flex items-center gap-2 rounded-lg bg-cobalt/5 px-3 py-2 text-xs text-cobalt">
              <Check className="size-3.5" />
              Validated on The Autoformulator
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
