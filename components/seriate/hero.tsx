import { ArrowRight } from 'lucide-react'

const applications = [
  { name: 'Topical Pharmaceuticals & Dermatology', href: '/#pharma' },
  { name: 'Personal Care & Cosmetics', href: '/#personal-care' },
  { name: 'Functional Foods & Nutraceuticals', href: '/#foods' },
  { name: 'Energy & Advanced Materials', href: '/#energy' },
]

export function Hero() {
  return (
    <section id="technology" className="relative overflow-hidden bg-slate-50">
      {/* ... keeping the background SVGs and divs untouched ... */}
      {/* Uploaded Image Background 1 (Subtle - Full Image Visible) */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/hero-machine.jpg')] bg-contain bg-center bg-no-repeat opacity-[0.07] mix-blend-multiply" 
      />

      {/* Abstract Modular Flowsheet & DCS Background */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          {/* Main Flowsheet */}
          <path d="M100,200 L250,200 L250,100 L400,100 L400,200 L550,200 L550,300 L700,300 L700,200 L850,200 L950,200" stroke="#1575bb" strokeWidth="4" fill="none" strokeDasharray="10 5" />
          <rect x="80" y="180" width="40" height="40" rx="8" fill="#1575bb" />
          <rect x="230" y="80" width="40" height="40" rx="8" fill="#1575bb" />
          <rect x="380" y="180" width="40" height="40" rx="8" fill="#1575bb" />
          <rect x="530" y="280" width="40" height="40" rx="8" fill="#1575bb" />
          <rect x="680" y="180" width="40" height="40" rx="8" fill="#1575bb" />
          <rect x="830" y="180" width="40" height="40" rx="8" fill="#1575bb" />
          <circle cx="175" cy="200" r="6" fill="#0f5a91" />
          <circle cx="325" cy="100" r="6" fill="#0f5a91" />
          <circle cx="475" cy="200" r="6" fill="#0f5a91" />
          <circle cx="625" cy="300" r="6" fill="#0f5a91" />
          <circle cx="775" cy="200" r="6" fill="#0f5a91" />

          {/* Abstract DCS Control Screen (Top Right) */}
          <g transform="translate(750, 40)">
            {/* Monitor Bezel */}
            <rect x="0" y="0" width="220" height="140" rx="6" fill="none" stroke="#1575bb" strokeWidth="4" />
            {/* Top bar */}
            <rect x="0" y="0" width="220" height="20" rx="6" fill="#1575bb" opacity="0.6" />
            
            {/* Reactor Tank Schematic on Screen */}
            <path d="M140,50 L140,90 A20,10 0 0,0 180,90 L180,50 A20,10 0 0,0 140,50 Z" fill="none" stroke="#1575bb" strokeWidth="3" />
            <path d="M140,50 A20,10 0 0,0 180,50" fill="none" stroke="#1575bb" strokeWidth="3" />
            <line x1="160" y1="35" x2="160" y2="85" stroke="#0f5a91" strokeWidth="3" />
            <path d="M145,65 L175,75 M145,75 L175,85" stroke="#0f5a91" strokeWidth="3" />
            
            {/* Control Graph on Screen */}
            <rect x="15" y="35" width="100" height="60" fill="none" stroke="#1575bb" strokeWidth="3" />
            <polyline points="15,80 35,55 55,70 75,40 95,50 115,25" fill="none" stroke="#0f5a91" strokeWidth="3" />
            <polyline points="15,90 40,85 60,95 85,70 115,75" fill="none" stroke="#1575bb" strokeWidth="2" strokeDasharray="4 2" />
            
            {/* Dials / Control Knobs on Screen */}
            <circle cx="30" cy="115" r="8" fill="none" stroke="#1575bb" strokeWidth="3" />
            <circle cx="65" cy="115" r="8" fill="none" stroke="#1575bb" strokeWidth="3" />
            <circle cx="100" cy="115" r="8" fill="none" stroke="#1575bb" strokeWidth="3" />
            
            {/* Connecting pipe from Tank */}
            <polyline points="160,100 160,120 130,120" fill="none" stroke="#1575bb" strokeWidth="3" />
            <circle cx="125" cy="120" r="6" fill="#0f5a91" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-cobalt tracking-tight drop-shadow-sm uppercase">
          The Autoformulator
        </h1>
        <h2 className="mx-auto mt-8 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Accelerating Design of Experiments for Complex Semi-Solid Formulations
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
          A state-of-the-art modular R&D device for the rapid screening of ingredients and optimization of process parameters for your ideal formulation.
        </p>

        {/* Application Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {applications.map(app => (
            <a 
              key={app.name} 
              href={app.href}
              className="px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-slate-300/50 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-white hover:border-cobalt/50 hover:text-cobalt"
            >
              {app.name}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#advantages"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300/80 bg-white/80 backdrop-blur-md px-6 py-4 text-base font-bold text-slate-700 shadow-sm transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Core Advantages
          </a>
          <a
            href="#offerings"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300/80 bg-white/80 backdrop-blur-md px-6 py-4 text-base font-bold text-slate-700 shadow-sm transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Explore Our Offerings
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cobalt px-6 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-cobalt-dark"
          >
            Accelerate Your DoE
            <ArrowRight className="size-5" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200/60">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
            Incubated & Supported By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            <img src="/logos/logo_set1_1.png" alt="IIT Bombay" className="h-16 md:h-20 object-contain opacity-70 mix-blend-multiply grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            <img src="/logos/logo_set1_2.png" alt="SINE Incubated" className="h-16 md:h-20 object-contain opacity-70 mix-blend-multiply grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            <img src="/logos/logo_set1_3.png" alt="BIRAC BIG Grantee" className="h-16 md:h-20 object-contain opacity-70 mix-blend-multiply grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            <img src="/logos/logo_set2_1.png" alt="GDC" className="h-12 md:h-14 object-contain opacity-70 mix-blend-multiply grayscale transition-all hover:opacity-100 hover:grayscale-0" />
            <img src="/logos/logo_set2_2.png" alt="WRCB Wadhwani" className="h-12 md:h-14 object-contain opacity-70 mix-blend-multiply grayscale transition-all hover:opacity-100 hover:grayscale-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
