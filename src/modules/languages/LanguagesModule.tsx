import { Route, Routes } from 'react-router'
import { GroupPage } from './pages/GroupPage'
import { GroupsIndex } from './pages/GroupsIndex'
import { LanguageIndex } from './pages/LanguageIndex'
import { LanguagePage } from './pages/LanguagePage'
import { Overview } from './pages/Overview'
import { QuizzesIndex } from './pages/QuizzesIndex'
import { ScriptQuiz } from './pages/ScriptQuiz'
import { ScriptPage } from './pages/ScriptPage'
import { ScriptsIndex } from './pages/ScriptsIndex'
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
      <Route path=":id" element={<LanguagePage />} />
    </Routes>
  )
}
