import { LinkedinIcon } from './linkedin-icon'
import { BookOpen } from 'lucide-react'

const affiliations = [
  { src: '/logo-iitb.png', alt: 'Indian Institute of Technology Bombay', label: 'IIT Bombay' },
  { src: '/logo-sine.png', alt: 'SINE, IIT Bombay incubator', label: 'SINE Incubated' },
  { src: '/logo-birac.png', alt: 'BIRAC - Ignite Innovate Incubate', label: 'BIRAC BIG Grantee' },
  { src: '/logos/logo_set2_2.png', alt: 'Wadhwani Research Foundation', label: 'Wadhwani Research Foundation' },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            Our Team
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Leadership & Expertise
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Prof Jyoti Seth */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-6">
              <img 
                src="/dr-seth.png" 
                alt="Prof. Jyoti Seth" 
                className="size-20 shrink-0 rounded-2xl object-cover shadow-sm bg-slate-200"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Prof. Jyoti Seth</h3>
                <p className="mt-1 text-sm font-medium text-cobalt">
                  Professor, IIT Bombay | Co-Founder
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 flex-1">
              Prof. Seth brings over 25 years of experience in complex fluids, rheology, and continuous processing. Her research at IIT Bombay forms the core of Seriate's technology, translating deep-tech research into practical, scalable process solutions for industrial formulations.
            </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.linkedin.com/in/jyotiseth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <LinkedinIcon className="size-3.5" />
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=eCXqKxwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <BookOpen className="size-3.5" />
                Google Scholar
              </a>
            </div>
          </div>

          {/* Ashish Seth */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6K3eS2vDWqhk2mm5Bf4H13wtSLb4Xq.png"
                alt="Mr. Ashish Seth"
                className="size-20 shrink-0 rounded-2xl object-cover shadow-sm bg-slate-200"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mr. Ashish Seth</h3>
                <p className="mt-1 text-sm font-medium text-cobalt">
                  Co-Founder
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 flex-1">
              Mr. Seth brings over 25 years of experience in strategic sourcing, project management, and design. With a background in Six Sigma methodologies, international procurement, and lean manufacturing, he leads hardware development and production at Seriate to deliver reliable, high-performance equipment.
            </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.linkedin.com/in/ashish-seth-6939659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cobalt hover:text-cobalt"
              >
                <LinkedinIcon className="size-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Scientific Lead */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8 border-dashed">
            <div className="flex items-center gap-6">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-300 shadow-sm border border-slate-200">
                <span className="sr-only">Placeholder</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-400">Scientific Lead</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  Joining soon
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 flex-1">
              This role will oversee the technical application and formulation science, ensuring our platform continues to meet the exacting standards of the industry.
            </p>
          </div>

          {/* COO */}
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm sm:p-8 border-dashed">
            <div className="flex items-center gap-6">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-300 shadow-sm border border-slate-200">
                <span className="sr-only">Placeholder</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-400">Chief Operating Officer</h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  Joining soon
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 flex-1">
              This role will drive daily operations, strategic partnerships, and business scaling as Seriate transitions into full commercial deployment.
            </p>
          </div>

        </div>

        <div className="mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500">
            Incubated, funded & validated by
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {affiliations.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-20 items-center justify-center">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-slate-900 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
