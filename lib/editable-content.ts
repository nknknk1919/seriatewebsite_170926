export type EditableContent = {
  hero: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: string
    secondaryCta: string
    headlineSize: number
    headlineColor: string
    accentColor: string
  }
  advantages: Array<{ title: string; desc: string }>
}

export const defaultEditableContent: EditableContent = {
  hero: {
    eyebrow: 'The Technology',
    headline: 'Reimagining Design of Experiments with The Autoformulator',
    description: 'R&D device for high-throughput screening for complex formulation design & development.',
    primaryCta: 'Explore the Technology',
    secondaryCta: 'Start a Conversation',
    headlineSize: 60,
    headlineColor: '#020617',
    accentColor: '#1575bb',
  },
  advantages: [
    { title: 'High Throughput', desc: 'Screen more formulations in less time with continuous, repeatable experimentation.' },
    { title: 'Simplified Tech Transfer', desc: 'Move from development to production with a process that carries across scales.' },
    { title: 'Wider Process Parameters', desc: 'Explore a broader operating window without rebuilding the experiment each time.' },
    { title: 'Shorter Time to Market', desc: 'Compress iteration cycles so promising formulations reach the line sooner.' },
    { title: 'Online Quality Checks', desc: 'See process signals as they happen and make informed decisions earlier.' },
    { title: 'Rapid Design of Experiments', desc: 'Run structured experiments quickly and turn results into the next question.' },
    { title: 'Reduction in Work-in-Progress Inventory', desc: 'Continuous flow reduces material waiting between process stages.' },
    { title: 'Reduction in Human Error', desc: 'A repeatable system removes unnecessary manual handoffs.' },
    { title: 'Low on Utility', desc: 'Efficient processing helps reduce the energy and resource load.' },
  ],
}

export function cloneContent(content: EditableContent) {
  return JSON.parse(JSON.stringify(content)) as EditableContent
}
