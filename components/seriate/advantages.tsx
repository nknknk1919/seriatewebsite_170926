import { 
  Clock, Zap, Maximize, Timer, Settings2, 
  FastForward, ArrowRightLeft, SlidersHorizontal, Rocket, 
  ShieldCheck, FlaskConical, PackageMinus, UserCheck, Leaf
} from 'lucide-react'

const metrics = [
  { icon: Clock, value: '96%', title: 'Man-Hour Reduction', desc: 'Estimated decrease in manual labor and handoffs.' },
  { icon: Zap, value: '30%', title: 'Energy Savings', desc: 'Increased energy savings due to efficient processing.' },
  { icon: Maximize, value: '75%', title: 'Footprint Reduction', desc: 'Compact bench-top design (approx 1ft x 1ft x 1ft).' },
  { icon: Timer, value: '75%', title: 'Production Time Saved', desc: 'Faster iteration compresses development cycles.' },
]

const qualitativeAdvantages = [
  { icon: FastForward, title: 'High-Throughput Processing', desc: 'Continuous flow keeps materials moving without batching delays.', bgClass: 'bg-purple-100', textClass: 'text-purple-600' },
  { icon: ArrowRightLeft, title: 'Seamless Tech Transfer', desc: 'A unified process architecture accelerates scale-up from lab to commercial production.', bgClass: 'bg-blue-100', textClass: 'text-blue-600' },
  { icon: SlidersHorizontal, title: 'Expanded Operating Windows', desc: 'Broaden design spaces to maximize formulation optimization and robustness.', bgClass: 'bg-blue-100', textClass: 'text-blue-600' },
  { icon: Rocket, title: 'Faster Time to Market', desc: 'Accelerated iteration cycles compress overall formulation development timelines.', bgClass: 'bg-purple-100', textClass: 'text-purple-600' },
  { icon: ShieldCheck, title: 'Real-Time Quality Monitoring', desc: 'Track critical process parameters (CPPs) continuously during live runs.', bgClass: 'bg-sky-100', textClass: 'text-sky-600' },
  { icon: FlaskConical, title: 'Rapid DoE Execution', desc: 'Execute small, highly efficient matrix runs to evaluate complex variables faster.', bgClass: 'bg-purple-100', textClass: 'text-purple-600' },
  { icon: PackageMinus, title: 'Reduced WIP Inventory', desc: 'Continuous processing minimizes material hold times and work-in-progress stock.', bgClass: 'bg-emerald-100', textClass: 'text-emerald-600' },
  { icon: UserCheck, title: 'Minimized Manual Error', desc: 'Automated workflows reduce manual handoffs and ensure complete run repeatability.', bgClass: 'bg-emerald-100', textClass: 'text-emerald-600' },
  { icon: Leaf, title: 'Optimized Utility Efficiency', desc: 'Energy-efficient operation lowers overall consumption and resource burdens.', bgClass: 'bg-emerald-100', textClass: 'text-emerald-600' },
]

const parameterGroups = [
  {
    category: 'Thermal Control',
    items: ['Phase Addition Temperature', 'Heating Rate', 'Cooling Rate', 'Final Temperature']
  },
  {
    category: 'Kinetic & Flow Control',
    items: ['Shear Rate', 'Mixing RPM', 'Flow Rate', 'Droplet Size']
  }
]

export function Advantages() {
  return (
    <section id="advantages" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Core Advantages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Compared to conventional batch pilot-scale manufacturing
          </p>
        </div>

        {/* Quantitative Metrics */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group text-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-cobalt/30 hover:shadow-md">
                <span className="mx-auto flex size-14 shrink-0 items-center justify-center rounded-full bg-cobalt text-white transition-colors group-hover:bg-cobalt-dark">
                  <Icon className="size-6" strokeWidth={1.8} />
                </span>
                <div className="mt-6">
                  <h3 className="text-4xl font-black text-cobalt">{item.value}</h3>
                  <p className="mt-2 text-lg font-bold leading-tight text-slate-900">{item.title}</p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Qualitative Advantages Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualitativeAdvantages.map((adv) => {
            const Icon = adv.icon
            return (
              <div key={adv.title} className="flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-md cursor-default">
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${adv.bgClass}`}>
                  <Icon className={`size-5 ${adv.textClass}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2 min-h-[3rem] flex items-center leading-tight">
                    {adv.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{adv.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Parameters Callout */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-sm">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-cobalt/10 mb-6">
            <Settings2 className="size-6 text-cobalt" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Access a wider range of crucial process parameters</h3>
          
          <div className="mt-10 grid gap-8 md:grid-cols-2 text-left max-w-4xl mx-auto">
            {parameterGroups.map(group => (
              <div key={group.category} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">{group.category}</h4>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {group.items.map(param => (
                    <span key={param} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-cobalt hover:bg-cobalt hover:text-white cursor-pointer shadow-sm">
                      {param}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next Section CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#offerings"
            className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cobalt hover:text-cobalt hover:shadow-md"
          >
            Explore Our Core Offerings &darr;
          </a>
        </div>
      </div>
    </section>
  )
}
