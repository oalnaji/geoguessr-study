import { lazy } from 'react'

// Loaded on first visit to /poles.
export const PolesModule = lazy(() => import('./PolesModule').then((m) => ({ default: m.PolesModule })))
