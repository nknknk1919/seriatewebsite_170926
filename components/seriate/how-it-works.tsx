import { Target, Microscope } from 'lucide-react'

function GradatedThermometerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Glass Outline */}
      <path d="M14 14.5a4 4 0 1 1-4 0V5a2 2 0 0 1 4 0v9.5Z" />
      
      {/* Internal Fluid Bulb */}
      <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
      
      {/* Internal Fluid Column */}
      <path d="M12 18V9" />
      
      {/* Temperature Gradations (Tick marks) */}
      <path d="M14 7h3" />
      <path d="M14 9h2" />
      <path d="M14 11h3" />
      <path d="M14 13h2" />
    </svg>
  )
}

function ShearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Top Plate */}
      <rect x="3" y="4" width="18" height="2" rx="1" />
      
      {/* Velocity Profile / Streamlines */}
      <path d="M6 9h12l-2-2m2 2l-2 2" />
      <path d="M6 13h7l-2-2m2 2l-2 2" />
      <path d="M6 17h2" /> {/* Shortest streamline at the bottom */}
      
      {/* Bottom Plate */}
      <rect x="3" y="20" width="18" height="2" rx="1" />
    </svg>
  )
}

function MorphologyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Well-dispersed Droplets (Hollow) */}
      <circle cx="11" cy="13" r="4" />
      <circle cx="16" cy="5" r="3" />
      <circle cx="6" cy="18" r="2.5" />
      
      {/* Well-dispersed Particles (Filled) */}
      <circle cx="5" cy="5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="4" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="20" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const offerings = [
  {
    icon: GradatedThermometerIcon,
    title: 'Controlled Temperature',
    desc: 'Precise thermal management across all stages, including phase addition, heating, and cooling rates.',
  },
  {
    icon: ShearIcon,
    title: 'Controlled Shear',
    desc: 'Dynamically adjust mixing RPM and shear rates to achieve the exact mechanical forces your formulation requires.',
  },
  {
    icon: MorphologyIcon,
    title: 'Controlled Droplet & Particle Size',
    desc: 'Achieve tight, consistent droplet and particle size distributions to guarantee optimal microstructure and long-term stability.',
  },
  {
    icon: Microscope,
    title: 'Consultation & Rheological Analysis',
    desc: 'Expert guidance to determine the most appropriate rheological testing protocols for your specific sample and application, complete with comprehensive analytical reports.',
  }
]

export function HowItWorks() {
  return (
    <section id="offerings" className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* We add a subtle divider here to visually separate it from the materials grid above while keeping it in the same white block */}
        <div className="mb-20 h-px w-full bg-slate-200/60"></div>

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            Our Offerings
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Precision Capabilities & Expert Consultation
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
            We provide the hardware precision and the analytical expertise required to perfect your complex semi-solid formulations.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-transform hover:-translate-y-1 flex flex-col">
                <div className="flex size-12 items-center justify-center rounded-full bg-cobalt/10 mb-6">
                  <Icon className="size-6 text-cobalt" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 flex-grow">{item.desc}</p>
                {item.title === 'Consultation & Rheological Analysis' && (
                  <a 
                    href="#contact" 
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cobalt px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cobalt/90 transition-colors"
                  >
                    Connect with an Expert Now
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
