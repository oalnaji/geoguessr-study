import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router'
import { boundsOf, useMapFeatures, usePhysical, type MapOverlay } from '../../../components/mapData'
import { PhotoCredit } from '../../../components/PhotoGallery'
import { PickList } from '../../../components/PickList'
import { cardClass } from '../../../components/ui'
import { WorldMap } from '../../../components/WorldMap'
import { landformById, landformPhotos, landforms, type Landform } from '../../../content/topography'
import type { Photo } from '../../../content/vegetation/types'
import { pick, ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'

interface TopoQuestion { key: string; landform: Landform; photo?: Photo }
type Answer = string | null

function makeRound(photoMode: boolean, known: ReadonlySet<string>, rng: Rng = Math.random): TopoQuestion[] {
  return shuffle(landforms.filter((l) => !known.has(l.id) && (!photoMode || landformPhotos(l.id).length)), rng)
    .slice(0, ROUND_LENGTH)
    .map((landform) => ({ key: landform.id, landform, photo: photoMode ? pick(landformPhotos(landform.id), rng) : undefined }))
}

const grade = (q: TopoQuestion, a: Answer): Grade => ({ points: Number(a === q.landform.id), max: 1 })
const options = [...landforms].sort((a, b) => a.name.localeCompare(b.name)).map((l) => ({ value: l.id, label: `${l.name} (${l.kind === 'river' ? 'river' : 'range'})` }))

export function TopoQuiz() {
  const [params] = useSearchParams()
  const photoMode = params.get('mode') === 'photo'
  const { features } = useMapFeatures('languages')
  const overlays = usePhysical('languages')
  const quiz = useQuiz<TopoQuestion, Answer>({
    id: photoMode ? 'topo-photo' : 'topo-map',
    make: (known) => makeRound(photoMode, known),
    grade,
    empty: null,
  })
  const q = quiz.q
  const labelled = useMemo<MapOverlay[]>(() => (overlays ?? []).map((o) => ({ ...o, label: quiz.checked ? landformById.get(o.id)?.name : undefined })), [overlays, quiz.checked])
  const target = q ? labelled.filter((o) => o.id === q.landform.id) : []

  return (
    <QuizShell
      title={photoMode ? 'Name it from a photo' : 'Find it on the map'}
      crumbs={[{ to: '/topography', label: 'Mountains & Rivers' }]}
      quiz={quiz}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => landformById.get(id)?.name ?? id}
      feedback={(q, a) => (
        <>
          {a && a !== q.landform.id && <p className="text-sm text-slate-600 dark:text-slate-400">You picked: {landformById.get(a)?.name}</p>}
          <p className="text-sm">
            <Link to={`/topography/${q.landform.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.landform.name}</Link>: {q.landform.summary}
          </p>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.landform.remember}</p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <span className="font-semibold">{q.landform.name}</span>
          <span className="text-slate-500"> · you picked {a ? landformById.get(a)?.name : '—'}</span>
        </p>
      )}
    >
      {q && (photoMode ? (
        <>
          {q.photo && (
            <figure className="space-y-1">
              <img src={q.photo.url} alt="Which range or river is this?" className="aspect-[16/9] w-full rounded-xl object-cover" />
              <figcaption><PhotoCredit photo={q.photo} /></figcaption>
            </figure>
          )}
          <PickList key={`${quiz.round[0]?.key}-${quiz.index}`} label="Range or river" options={options} value={quiz.answer} onChange={quiz.setAnswer} reveal={quiz.checked} isCorrect={(v) => v === q.landform.id} />
        </>
      ) : (
        <>
          <div className={cardClass}>
            <p className="text-sm text-slate-500">{q.landform.kind === 'river' ? 'River' : 'Mountain range'}</p>
            <p className="text-2xl font-bold">{q.landform.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tap it on the map (brown = ranges, blue = rivers).</p>
          </div>
          {features && overlays ? (
            <WorldMap
              key={`${quiz.round[0]?.key}-${quiz.index}`}
              features={features}
              colorOf={() => '#e7e5e4'}
              overlays={labelled}
              activeOverlay={quiz.checked ? q.landform.id : quiz.answer}
              onOverlay={quiz.checked ? undefined : (id) => quiz.setAnswer(id)}
              focus={quiz.checked && target.length ? boundsOf(target) : undefined}
              hideLabels
            />
          ) : (
            <p className={`${cardClass} text-center text-slate-500`}>Loading map…</p>
          )}
          {quiz.answer && !quiz.checked && <p className="text-sm text-slate-500">Selected. Press Check answer.</p>}
        </>
      ))}
    </QuizShell>
  )
}
