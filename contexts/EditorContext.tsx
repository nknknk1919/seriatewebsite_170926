'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { cloneContent, defaultEditableContent, type EditableContent } from '@/lib/editable-content'

type Selection = 'hero' | `advantage-${number}`
type EditorContextValue = {
  content: EditableContent
  selected: Selection
  setSelected: (selection: Selection) => void
  updateHero: (field: keyof EditableContent['hero'], value: string | number) => void
  updateAdvantage: (index: number, field: 'title' | 'desc', value: string) => void
  undo: () => void
  redo: () => void
  reset: () => void
  save: () => void
  saved: boolean
}

const STORAGE_KEY = 'seriate_editable_content'
const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState(defaultEditableContent)
  const [history, setHistory] = useState<EditableContent[]>([])
  const [future, setFuture] = useState<EditableContent[]>([])
  const [selected, setSelected] = useState<Selection>('hero')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setContent({ ...cloneContent(defaultEditableContent), ...parsed, hero: { ...defaultEditableContent.hero, ...parsed.hero }, advantages: parsed.advantages ?? defaultEditableContent.advantages })
      } catch { window.localStorage.removeItem(STORAGE_KEY) }
    }
  }, [])

  function commit(next: EditableContent) {
    setHistory((items) => [...items.slice(-19), cloneContent(content)])
    setFuture([])
    setContent(next)
    setSaved(false)
  }

  const value = useMemo<EditorContextValue>(() => ({
    content,
    selected,
    setSelected,
    updateHero: (field, value) => commit({ ...cloneContent(content), hero: { ...content.hero, [field]: value } }),
    updateAdvantage: (index, field, value) => {
      const next = cloneContent(content)
      next.advantages[index][field] = value
      commit(next)
    },
    undo: () => {
      const previous = history.at(-1)
      if (!previous) return
      setFuture((items) => [...items, cloneContent(content)])
      setContent(previous)
      setHistory((items) => items.slice(0, -1))
      setSaved(false)
    },
    redo: () => {
      const next = future.at(-1)
      if (!next) return
      setHistory((items) => [...items, cloneContent(content)])
      setContent(next)
      setFuture((items) => items.slice(0, -1))
      setSaved(false)
    },
    reset: () => { setContent(cloneContent(defaultEditableContent)); setHistory([]); setFuture([]); setSaved(false) },
    save: () => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content)); setSaved(true) },
    saved,
  }), [content, future, history, saved, selected])

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}

export function useEditor() {
  const context = useContext(EditorContext)
  if (!context) throw new Error('useEditor must be used inside EditorProvider')
  return context
}
