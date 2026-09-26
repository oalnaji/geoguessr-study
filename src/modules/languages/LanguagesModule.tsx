import { Route, Routes } from 'react-router'
import { GroupPage } from './pages/GroupPage'
import { GroupsIndex } from './pages/GroupsIndex'
import { LanguageIndex } from './pages/LanguageIndex'
import { LanguagePage } from './pages/LanguagePage'
import { Overview } from './pages/Overview'
import { GiveawayQuiz } from './pages/GiveawayQuiz'
import { LanguageQuiz } from './pages/LanguageQuiz'
import { MapQuiz } from './pages/MapQuiz'
import { QuizzesIndex } from './pages/QuizzesIndex'
import { RegionQuiz } from './pages/RegionQuiz'
import { ScriptQuiz } from './pages/ScriptQuiz'
import { ScriptPage } from './pages/ScriptPage'
import { ScriptsIndex } from './pages/ScriptsIndex'
import { SignWordQuiz } from './pages/SignWordQuiz'
import { WordFinder } from './pages/WordFinder'

export function LanguagesModule() {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="scripts" element={<ScriptsIndex />} />
      <Route path="scripts/:id" element={<ScriptPage />} />
      <Route path="groups" element={<GroupsIndex />} />
      <Route path="groups/:id" element={<GroupPage />} />
      <Route path="all" element={<LanguageIndex />} />
      <Route path="words" element={<WordFinder />} />
      <Route path="quizzes" element={<QuizzesIndex />} />
      <Route path="quizzes/script" element={<ScriptQuiz />} />
      <Route path="quizzes/language" element={<LanguageQuiz />} />
      <Route path="quizzes/giveaway" element={<GiveawayQuiz />} />
      <Route path="quizzes/sign-words" element={<SignWordQuiz />} />
      <Route path="quizzes/map" element={<MapQuiz />} />
      <Route path="quizzes/region" element={<RegionQuiz />} />
      <Route path=":id" element={<LanguagePage />} />
    </Routes>
  )
}
