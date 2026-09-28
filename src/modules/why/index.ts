import { lazy } from 'react'

// Loaded on first visit to /why.
export const WhyModule = lazy(() => import('./WhyModule').then((m) => ({ default: m.WhyModule })))
