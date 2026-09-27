import { PhotoCredit } from '../../../components/PhotoGallery'
import { PickList } from '../../../components/PickList'
import { countryLabel, poleCountries, poleById, polePhotos, poles, type PoleType } from '../../../content/poles'
import type { Photo } from '../../../content/vegetation/types'
import { pick, ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'

interface PoleQuestion { key: string; pole: PoleType; photo: Photo }

function makeRound(known: ReadonlySet<string>, rng: Rng = Math.random): PoleQuestion[] {
  return shuffle(poles.filter((p) => polePhotos(p.id).length && !known.has(p.id)), rng)
    .slice(0, ROUND_LENGTH)
    .map((pole) => ({ key: pole.id, pole, photo: pick(polePhotos(pole.id), rng) }))
}

const grade = (q: PoleQuestion, a: string | null): Grade => ({ points: Number(a === q.pole.country), max: 1 })
const options = poleCountries.map((c) => ({ value: c, label: countryLabel(c) })).sort((a, b) => a.label.localeCompare(b.label))

export function PoleQuiz() {
  const quiz = useQuiz<PoleQuestion, string | null>({ id: 'pole-country', make: makeRound, grade, empty: null })
  const q = quiz.q
  return (
    <QuizShell
      title="Which country is this pole?"
      crumbs={[{ to: '/poles', label: 'Utility Poles' }]}
      quiz={quiz}
      canCheck={quiz.answer !== null}
      knownLabel={(id) => poleById.get(id)?.title ?? id}
      feedback={(q) => (
        <>
          <p className="text-sm">It's <span className="font-semibold">{countryLabel(q.pole.country)}</span>: {q.pole.title.toLowerCase()}.</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{q.pole.look[0]}</p>
        </>
      )}
      review={(q, a) => (
        <p className="text-sm">
          <span className="font-semibold">{countryLabel(q.pole.country)}</span>
          <span className="text-slate-500"> · you said {a ? countryLabel(a) : '—'}</span>
        </p>
      )}
    >
      {q && (
        <>
          <figure className="space-y-1">
            <img src={q.photo.url} alt="A utility pole" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <figcaption><PhotoCredit photo={q.photo} /></figcaption>
          </figure>
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Country"
            options={options}
            value={quiz.answer}
            onChange={quiz.setAnswer}
            reveal={quiz.checked}
            isCorrect={(v) => v === q.pole.country}
          />
        </>
      )}
    </QuizShell>
  )
}
