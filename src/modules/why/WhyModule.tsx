import { Route, Routes } from 'react-router'
import { ExplainerPage } from './pages/ExplainerPage'
import { Overview } from './pages/Overview'
import { WhyQuiz } from './pages/WhyQuiz'

export function WhyModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="quiz" element={<WhyQuiz />} />
      <Route path=":id" element={<ExplainerPage />} />
    </Routes>
  )
}
