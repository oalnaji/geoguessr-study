import { Link } from 'react-router'
import type { MapFeature } from '../../../components/mapData'
import { useMapFeatures } from '../../../components/mapData'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { geoTopicById, geoTopics, type GeoTopic } from '../../../content/geology'
import { ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'

interface GeoQuestion { key: string; topic: GeoTopic }

const placesOf = (t: GeoTopic) => new Set([...t.countries, ...(t.producers ?? [])])

function makeRound(known: ReadonlySet<string>, rng: Rng = Math.random): GeoQuestion[] {
  // Only topics limited to a smallish set of countries make a fair question.
  return shuffle(geoTopics.filter((t) => !known.has(t.id) && placesOf(t).size > 0 && placesOf(t).size <= 20), rng)
    .slice(0, ROUND_LENGTH)
    .map((topic) => ({ key: topic.id, topic }))
}

const grade = (q: GeoQuestion, a: MapFeature | null): Grade => ({ points: Number(a !== null && placesOf(q.topic).has(a.country)), max: 1 })

export function GeoQuiz() {
  const { features } = useMapFeatures('languages')
  const quiz = useQuiz<GeoQuestion, MapFeature | null>({ id: 'geology-where', make: makeRound, grade, empty: null })
  const q = quiz.q
  return (
    <QuizShell
      title="Where is it found?"
      crumbs={[{ to: '/geology', label: 'Geology' }]}
      quiz={quiz}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => geoTopicById.get(id)?.title ?? id}
      feedback={(q, a) => (
        <>
          {a && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {a.label}</p>}
          <p className="text-sm">{q.topic.where}</p>
          <Link to={`/geology/${q.topic.id}`} className="text-sm text-teal-700 underline dark:text-teal-400">Read more</Link>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm"><span className="font-semibold">{q.topic.title}</span><span className="text-slate-500"> · you picked {a?.label ?? '—'}</span></p>
      )}
    >
      {q && (
        <>
          <div className={cardClass}>
            <p className="font-semibold">{q.topic.category === 'Mining' ? `Where is ${q.topic.title.toLowerCase()} mined?` : q.topic.title}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{/* Summaries name the places, so show something that does not */}
              {q.topic.uses ? `Used for: ${q.topic.uses}` : q.topic.looks[0]}</p>
            <p className="mt-2 text-sm text-slate-500">Tap a country where {q.topic.category === 'Mining' ? 'it is mined' : 'you find it'}.</p>
          </div>
          {features && (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              selected={quiz.answer?.id ?? null}
              onSelect={quiz.setAnswer}
              reveal={quiz.checked}
              isCorrect={(f) => placesOf(q.topic).has(f.country)}
            />
          )}
        </>
      )}
    </QuizShell>
  )
}
