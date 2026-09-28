import { Route, Routes } from 'react-router'
import { LandformPage } from './pages/LandformPage'
import { Overview } from './pages/Overview'
import { TopoQuiz } from './pages/TopoQuiz'

export function TopographyModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="quiz" element={<TopoQuiz />} />
      <Route path=":id" element={<LandformPage />} />
    </Routes>
  )
}
