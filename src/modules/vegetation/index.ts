import { lazy } from 'react'

// Loaded on first visit to /vegetation.
export const VegetationModule = lazy(() => import('./VegetationModule').then((m) => ({ default: m.VegetationModule })))
