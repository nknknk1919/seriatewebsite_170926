'use client'

import Link from 'next/link'
import { ArrowLeft, Check, Eye, Redo2, RotateCcw, Save, Undo2 } from 'lucide-react'
import { EditorProvider, useEditor } from '@/contexts/EditorContext'

function EditableBlock({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return <div role="button" tabIndex={0} onClick={onClick} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') onClick() }} className={`relative w-full rounded-2xl text-left transition ${selected ? 'outline outline-2 outline-cobalt outline-offset-4' : 'hover:outline hover:outline-1 hover:outline-cobalt/40 hover:outline-offset-2'}`}>{children}</div>
}

function InlineText({ value, onChange, className, multiline = false }: { value: string; onChange: (value: string) => void; className?: string; multiline?: boolean }) {
  return <span contentEditable suppressContentEditableWarning role="textbox" aria-label="Editable text" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (!multiline && event.key === 'Enter') { event.preventDefault(); event.currentTarget.blur() } }} onBlur={(event) => onChange(event.currentTarget.textContent ?? '')} className={`cursor-text outline-none focus:bg-cobalt/5 focus:ring-2 focus:ring-cobalt/20 ${className ?? ''}`}>{value}</span>
}

function Canvas() {
  const { content, selected, setSelected, updateHero, updateAdvantage } = useEditor()
  return (
    <main className="min-w-0 flex-1 overflow-auto bg-slate-100 p-5 md:p-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white shadow-xl shadow-slate-300/30">
        <section className="border-b border-slate-100 px-7 py-16 text-center md:px-20 md:py-24">
          <EditableBlock selected={selected === 'hero'} onClick={() => setSelected('hero')}>
            <div className="mx-auto max-w-3xl px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: content.hero.accentColor }}><InlineText value={content.hero.eyebrow} onChange={(value) => updateHero('eyebrow', value)} /></p>
              <h1 className="mt-5 font-black leading-[1.05] tracking-tight" style={{ color: content.hero.headlineColor, fontSize: `clamp(2.25rem, 5vw, ${content.hero.headlineSize}px)` }}><InlineText value={content.hero.headline} onChange={(value) => updateHero('headline', value)} multiline /></h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"><InlineText value={content.hero.description} onChange={(value) => updateHero('description', value)} multiline /></p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="rounded-md bg-cobalt px-5 py-3 text-sm font-bold text-white">{content.hero.primaryCta}</span>
                <span className="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800">{content.hero.secondaryCta}</span>
              </div>
            </div>
          </EditableBlock>
        </section>
        <section className="px-7 py-16 md:px-16">
          <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Core Advantages</p><h2 className="mt-4 text-3xl font-black text-slate-950">A better way to formulate</h2></div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {content.advantages.map((item, index) => <EditableBlock key={item.title} selected={selected === `advantage-${index}`} onClick={() => setSelected(`advantage-${index}`)}><article className="border-t border-slate-200 px-2 pt-5"><span className="flex size-10 items-center justify-center rounded-full bg-cobalt text-sm font-bold text-white">{index + 1}</span><h3 className="mt-4 text-lg font-bold text-slate-950"><InlineText value={item.title} onChange={(value) => updateAdvantage(index, 'title', value)} /></h3><p className="mt-2 text-sm leading-relaxed text-slate-600"><InlineText value={item.desc} onChange={(value) => updateAdvantage(index, 'desc', value)} multiline /></p></article></EditableBlock>)}
          </div>
        </section>
      </div>
    </main>
  )
}

function PropertyPanel() {
  const { content, selected, updateHero, updateAdvantage } = useEditor()
  const isHero = selected === 'hero'
  const index = isHero ? -1 : Number(selected.split('-')[1])
  const item = isHero ? content.hero : content.advantages[index]
  return <aside className="w-full shrink-0 border-t border-slate-200 bg-white p-5 md:w-80 md:border-l md:border-t-0 md:p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Selected element</p><h2 className="mt-2 text-lg font-bold text-slate-950">{isHero ? 'Hero section' : `Value proposition ${index + 1}`}</h2><div className="mt-6 space-y-5">{isHero ? <><Field label="Eyebrow" value={item.eyebrow} onChange={(v) => updateHero('eyebrow', v)} /><Field label="Headline" value={item.headline} onChange={(v) => updateHero('headline', v)} multiline /><Field label="Description" value={item.description} onChange={(v) => updateHero('description', v)} multiline /><Field label="Primary button" value={item.primaryCta} onChange={(v) => updateHero('primaryCta', v)} /><Field label="Secondary button" value={item.secondaryCta} onChange={(v) => updateHero('secondaryCta', v)} /><RangeField label="Headline size" value={item.headlineSize} min={36} max={88} onChange={(v) => updateHero('headlineSize', v)} /><ColorField label="Headline color" value={item.headlineColor} onChange={(v) => updateHero('headlineColor', v)} /><ColorField label="Accent color" value={item.accentColor} onChange={(v) => updateHero('accentColor', v)} /></> : <><Field label="Title" value={item.title} onChange={(v) => updateAdvantage(index, 'title', v)} /><Field label="Description" value={item.desc} onChange={(v) => updateAdvantage(index, 'desc', v)} multiline /></>}</div><div className="mt-8 border-t border-slate-100 pt-5"><p className="text-xs leading-relaxed text-slate-500">Click any outlined element on the canvas to edit its content. Changes are saved in this browser.</p></div></aside>
}

function Field({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  const className = "mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/15"
  return <label className="block text-sm font-semibold text-slate-700">{label}{multiline ? <textarea rows={3} className={className} value={value} onChange={(e) => onChange(e.target.value)} /> : <input className={className} value={value} onChange={(e) => onChange(e.target.value)} />}</label>
}

function RangeField({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return <label className="block text-sm font-semibold text-slate-700">{label}<div className="mt-2 flex items-center gap-3"><input className="w-full accent-cobalt" type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} /><span className="w-10 text-right text-xs text-slate-500">{value}px</span></div></label>
}

function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="flex items-center justify-between text-sm font-semibold text-slate-700">{label}<span className="flex items-center gap-2"><input className="size-8 cursor-pointer rounded border-0 bg-transparent p-0" type="color" value={value} onChange={(e) => onChange(e.target.value)} /><span className="font-mono text-xs font-normal text-slate-500">{value}</span></span></label>
}

function Toolbar() {
  const { undo, redo, reset, save, saved } = useEditor()
  return <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 md:px-6"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700"><ArrowLeft className="size-4" /> Exit editor</Link><div className="flex items-center gap-1"><button type="button" onClick={undo} className="rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Undo"><Undo2 className="size-4" /></button><button type="button" onClick={redo} className="rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Redo"><Redo2 className="size-4" /></button><button type="button" onClick={reset} className="rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Reset"><RotateCcw className="size-4" /></button><span className="mx-2 hidden h-5 w-px bg-slate-200 sm:block" /><Link href="/" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 sm:inline-flex"><Eye className="size-4" /> Preview</Link><button type="button" onClick={save} className="inline-flex items-center gap-2 rounded-md bg-cobalt px-3 py-2 text-sm font-bold text-white hover:bg-cobalt-dark">{saved ? <Check className="size-4" /> : <Save className="size-4" />}{saved ? 'Saved' : 'Save changes'}</button></div></header>
}

export function EditorMode() { return <EditorProvider><div className="min-h-screen bg-slate-100 font-sans"><Toolbar /><div className="flex min-h-[calc(100vh-65px)] flex-col md:flex-row"><Canvas /><PropertyPanel /></div></div></EditorProvider> }
