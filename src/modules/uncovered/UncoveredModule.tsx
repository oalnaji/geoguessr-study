import { Route, Routes } from 'react-router'
import { GuidePage } from './pages/GuidePage'
import { Overview } from './pages/Overview'

export function UncoveredModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path=":id" element={<GuidePage />} />
    </Routes>
  )
}
