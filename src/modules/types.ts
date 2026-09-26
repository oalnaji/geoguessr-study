import type { ReactNode } from 'react'

// A study module (Languages, Vegetation, …). See SPEC.md §7.2.
// Flashcard and quiz generators get added to this interface in Phase 1.
export interface MetaModule {
  id: string
  title: string
  description: string
  /** Route segment, e.g. "languages" → /#/languages */
  path: string
  status: 'active' | 'next' | 'planned'
  /** Module content rendered under /<path>/*. Absent for modules not built yet. */
  element?: ReactNode
}
