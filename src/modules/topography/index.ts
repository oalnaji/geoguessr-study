import { lazy } from 'react'

// Loaded on first visit to /topography.
export const TopographyModule = lazy(() => import('./TopographyModule').then((m) => ({ default: m.TopographyModule })))
