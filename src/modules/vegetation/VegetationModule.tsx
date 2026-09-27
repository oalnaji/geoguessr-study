import { Route, Routes } from 'react-router'
import { Overview } from './pages/Overview'
import { PhotoQuiz } from './pages/PhotoQuiz'
import { PlantPage } from './pages/PlantPage'
import { QuizzesIndex } from './pages/QuizzesIndex'
import { SoilMap } from './pages/SoilMap'
import { WhereQuiz } from './pages/WhereQuiz'

export function VegetationModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="quizzes" element={<QuizzesIndex />} />
      <Route path="quizzes/photo" element={<PhotoQuiz />} />
      <Route path="quizzes/where" element={<WhereQuiz />} />
      <Route path="soils" element={<SoilMap />} />
      <Route path=":id" element={<PlantPage />} />
    </Routes>
  )
}
