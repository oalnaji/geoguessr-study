import { Route, Routes } from 'react-router'
import { GeoQuiz } from './pages/GeoQuiz'
import { Overview } from './pages/Overview'
import { TopicPage } from './pages/TopicPage'

export function GeologyModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="quiz" element={<GeoQuiz />} />
      <Route path=":id" element={<TopicPage />} />
    </Routes>
  )
}
