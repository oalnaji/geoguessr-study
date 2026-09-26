import { HashRouter, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { activeModules } from './modules/registry'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Settings } from './pages/Settings'

// HashRouter (/#/languages) because GitHub Pages can't rewrite deep links to index.html.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {activeModules.map((m) => (
            <Route key={m.id} path={`${m.path}/*`} element={m.element} />
          ))}
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
