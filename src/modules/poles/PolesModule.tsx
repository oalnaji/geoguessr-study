import { Route, Routes } from 'react-router'
import { HowPolesWork } from './pages/HowPolesWork'
import { Overview } from './pages/Overview'
import { PoleQuiz } from './pages/PoleQuiz'

export function PolesModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="how" element={<HowPolesWork />} />
      <Route path="quiz" element={<PoleQuiz />} />
    </Routes>
  )
}
