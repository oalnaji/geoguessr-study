import { lazy } from 'react'

// Loaded on first visit to /uncovered.
export const UncoveredModule = lazy(() => import('./UncoveredModule').then((m) => ({ default: m.UncoveredModule })))
