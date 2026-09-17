import { Navbar } from '@/components/seriate/navbar'
import { Footer } from '@/components/seriate/footer'
import { ExternalLink, BookOpen } from 'lucide-react'

const publications = [
  {
    title: 'Comprehensive effort on electrode slurry preparation for better electrochemical performance of LiFePO4 battery',
    authors: 'Kumari Konda, Sahana B Moodakare, P Logesh Kumar, Manjusha Battabyal, Jyoti R Seth, Vinay A Juvekar, Raghavan Gopalan',
    journal: 'Journal of Power Sources',
    year: '2020',
    description: 'Crucial research demonstrating how pre-mixing and continuous shear processing achieve desired microstructures in electrode coatings, directly translating to the Autoformulator\'s capabilities in Energy & Advanced Materials.',
    link: 'https://www.sciencedirect.com/science/article/pii/S0378775320311411',
    category: 'Energy Materials & Slurries',
  },
  {
    title: 'A micromechanical model to predict the flow of soft particle glasses',
    authors: 'JR Seth, L Mohan, C Locatelli-Champagne, M Cloitre, RT Bonnecaze',
    journal: 'Nature Materials',
    year: '2011',
    description: 'Highly cited foundational paper providing a micromechanical model to predict the complex rheological behavior of densely packed soft particles, forming the theoretical basis for continuous formulation processing.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eCXqKxwAAAAJ&citation_for_view=eCXqKxwAAAAJ:d1gkVwhDpl0C',
    category: 'Complex Fluids & Rheology',
  },
  {
    title: 'Crystallization and rheology of mono-and diglycerides and their role in stabilization of emulsion droplets in model topical ointments',
    authors: 'S Ali, A Tiwari, T Yeoh, P Doshi, N Kelkar, JC Shah, JR Seth',
    journal: 'Langmuir',
    year: '2022',
    description: 'Investigates the role of lipid emulsifiers (mono- and diglycerides) in stabilizing complex pharmaceutical and cosmetic emulsions. Highly relevant to Seriate\'s work in Topical Pharmaceuticals & Dermatology.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eCXqKxwAAAAJ&citation_for_view=eCXqKxwAAAAJ:KlAtU1dfN6UC',
    category: 'Pharma & Cosmetics',
  },
  {
    title: 'Polymer–Surfactant Driven Interactions and the Resultant Microstructure in Protein-Containing Liquid Crystal Droplets',
    authors: 'PM Naveenkumar, RK Singh, S Mann, JR Seth, KP Sharma',
    journal: 'Langmuir',
    year: '2021',
    description: 'Explores phase behavior and microstructure evolution of protein-surfactant complexes, with deep implications for Functional Foods, Nutraceuticals, and bioactive aqueous delivery systems.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eCXqKxwAAAAJ&citation_for_view=eCXqKxwAAAAJ:LkGwnXOMwfcC',
    category: 'Food & Bio-actives',
  },
  {
    title: 'How do soft particle glasses yield and flow near solid surfaces?',
    authors: 'JR Seth, C Locatelli-Champagne, F Monti, RT Bonnecaze, M Cloitre',
    journal: 'Soft Matter',
    year: '2011',
    description: 'Analyzes wall-slip and yielding phenomena critical for understanding how high-viscosity semi-solids behave within the precision shear zones of continuous processing equipment.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eCXqKxwAAAAJ&citation_for_view=eCXqKxwAAAAJ:9yKSN-GCB0IC',
    category: 'Complex Fluids & Rheology',
  },
  {
    title: 'Influence of short-range forces on wall-slip in microgel pastes',
    authors: 'JR Seth, M Cloitre, RT Bonnecaze',
    journal: 'Journal of Rheology',
    year: '2008',
    description: 'Pioneering work in the field of soft matter rheology, establishing the framework for manipulating shear forces to achieve targeted microstructures in gels and pastes.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eCXqKxwAAAAJ&citation_for_view=eCXqKxwAAAAJ:u5HHmVD_uO8C',
    category: 'Complex Fluids & Rheology',
  }
]

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-cobalt/10 px-4 py-1.5 mb-6">
              <BookOpen className="mr-2 size-4 text-cobalt" />
              <span className="text-sm font-semibold tracking-wide text-cobalt uppercase">Research & Publications</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              The Science Behind The System
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              The Autoformulator is the commercial realization of over a decade of rigorous academic research. Explore selected publications by Dr. Jyoti R. Seth and the Seriate team that form the foundation of our continuous formulation technology.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://scholar.google.com/citations?user=eCXqKxwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 transition-all hover:border-cobalt hover:text-cobalt"
              >
                View Full Profile on Google Scholar
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {publications.map((pub) => (
              <div key={pub.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
                <div className="mb-4 inline-block self-start rounded bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {pub.category}
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-900">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-cobalt transition-colors inline-flex items-baseline gap-2">
                    {pub.title}
                    <ExternalLink className="size-4 shrink-0 text-slate-400" />
                  </a>
                </h3>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  {pub.authors}
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-cobalt font-semibold">
                  <span>{pub.journal}</span>
                  <span>&bull;</span>
                  <span>{pub.year}</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 flex-grow">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}