import { lazy } from 'react'

// Loaded on first visit to /geology.
export const GeologyModule = lazy(() => import('./GeologyModule').then((m) => ({ default: m.GeologyModule })))
