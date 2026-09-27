import { lazy } from 'react'

// Loaded on first visit to /regions.
export const RegionsModule = lazy(() => import('./RegionsModule').then((m) => ({ default: m.RegionsModule })))
