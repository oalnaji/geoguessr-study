import { lazy } from 'react'

// Loaded on first visit to /languages, so the home screen doesn't wait for the content.
export const LanguagesModule = lazy(() => import('./LanguagesModule').then((m) => ({ default: m.LanguagesModule })))
