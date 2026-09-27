import { Route, Routes } from 'react-router'
import { ClueQuiz } from './pages/ClueQuiz'
import { CountryPage } from './pages/CountryPage'
import { FindQuiz } from './pages/FindQuiz'
import { NameQuiz } from './pages/NameQuiz'
import { Overview } from './pages/Overview'
import { QuizzesIndex } from './pages/QuizzesIndex'
import { RegionPage } from './pages/RegionPage'

export function RegionsModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="quizzes" element={<QuizzesIndex />} />
      <Route path="quizzes/name" element={<NameQuiz />} />
      <Route path="quizzes/find" element={<FindQuiz />} />
      <Route path="quizzes/clue" element={<ClueQuiz />} />
      <Route path=":country" element={<CountryPage />} />
      <Route path=":country/:region" element={<RegionPage />} />
    </Routes>
  )
}
