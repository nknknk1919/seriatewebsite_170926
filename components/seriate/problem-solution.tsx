const materials = [
  {
    category: 'Continuous Phase',
    color: 'bg-blue-50 border-blue-100',
    items: [
      { name: 'Aqueous & Polar Bases', desc: 'Water, Alcohols, Glycols, Polyols, and Edible Syrups.' },
      { name: 'Natural Polysaccharides', desc: 'Gums, Cellulose derivatives, and complex Sugars.' },
      { name: 'Lipid & Wax Matrices', desc: 'Mineral oils, Petrolatum, and edible fatty acid derivatives.' },
      { name: 'Industrial & Battery Solvents', desc: 'N-methyl-2-pyrrolidone (NMP), Carboxylic acids, and Ionic liquids.' },
    ]
  },
  {
    category: 'Dispersed Phase',
    color: 'bg-indigo-50 border-indigo-100',
    items: [
      { name: 'Active Lipids & Oils', desc: 'Essential oils, Vitamins, Omega fatty acids, and Sterols.' },
      { name: 'High-Load Hydrocarbons', desc: 'Mineral oils, Petrolatum, and Synthetic Waxes.' },
      { name: 'Bio-Active Aqueous', desc: 'Encapsulated nutrients, peptides, and botanical extracts.' },
      { name: 'Solid Particulates & Actives', desc: 'Electrode materials (LiFePO4, Graphite), Carbon Black, and APIs.' },
    ]
  },
  {
    category: 'Stabilizer Network',
    color: 'bg-sky-50 border-sky-100',
    items: [
      { name: 'Multi-Charge Surfactants', desc: 'Anionic, Cationic, Non-ionic, and Zwitterionic systems.' },
      { name: 'Structural Polymers & Binders', desc: 'PVDF, CMC/SBR binders, Polysorbates, and Polyolefins.' },
      { name: 'Food-Grade & Lipid Emulsifiers', desc: 'Phospholipids, Mono/Diglycerides (MDG), and Sodium Stearoyl Lactylate.' },
      { name: 'Solid-Particle Tech', desc: 'Finely divided sub-micron particles for Pickering emulsion stability.' },
    ]
  }
]

export function ProblemSolution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            The Universal Formulation Platform
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            The Autoformulator for every formulation
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
            From ultra-light aqueous serums to high-viscosity industrial waxes, our process offers unrivaled compatibility. Seamlessly integrating diverse phases and multi-layer stabilizers without compromising on stability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {materials.map((col) => (
            <div key={col.category} className={`rounded-2xl border p-8 ${col.color}`}>
              <h3 className="text-xl font-black text-slate-900 mb-6">{col.category}</h3>
              <ul className="space-y-6">
                {col.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <span className="font-bold text-slate-900">{item.name}</span>
                    <span className="mt-1 text-sm leading-relaxed text-slate-700">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
