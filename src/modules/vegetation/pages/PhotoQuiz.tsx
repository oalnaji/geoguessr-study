import { useState } from 'react'
import { Link } from 'react-router'
import { PhotoCredit } from '../../../components/PhotoGallery'
import { PickList } from '../../../components/PickList'
import { plantById } from '../../../content/vegetation'
import { QuizShell } from '../../../quiz/QuizShell'
import { useQuiz } from '../../../quiz/useQuiz'
import { gradePhoto, makePhotoRound, plantOptions, vegetationQuizCrumbs, type PhotoQuestion, type PlantScope } from '../quiz/questions'
import { ScopeFilter } from '../quiz/ScopeFilter'

const plantName = (id: string) => plantById.get(id)?.name ?? id

export function PhotoQuiz() {
  const [scope, setScope] = useState<PlantScope>('')
  const quiz = useQuiz<PhotoQuestion, string | null>({
    id: 'plant-photo',
    make: (known) => makePhotoRound(scope, known),
    grade: gradePhoto,
    empty: null,
  })
  const q = quiz.q
  const changeScope = (s: PlantScope) => {
    setScope(s)
    quiz.restart(undefined, (known) => makePhotoRound(s, known))
  }

  return (
    <QuizShell
      title="Name the plant or forest"
      crumbs={vegetationQuizCrumbs}
      quiz={quiz}
      filter={<ScopeFilter value={scope} onChange={changeScope} />}
      canCheck={quiz.answer !== null}
      knownLabel={plantName}
      feedback={(q) => (
        <>
          <p className="text-sm">
            It's <Link to={`/vegetation/${q.plant.id}`} className="text-teal-700 underline dark:text-teal-400">{q.plant.name}</Link>.
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Tip: {q.plant.recognise[0]}</p>
          {q.plant.remember?.[0] && <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">💡 {q.plant.remember[0]}</p>}
        </>
      )}
      review={(q, a) => (
        <div className="flex gap-3">
          <img src={q.photo.url} alt="" className="h-16 w-24 shrink-0 rounded-md object-cover" />
          <p className="text-sm">
            <Link to={`/vegetation/${q.plant.id}`} className="font-semibold text-teal-700 underline dark:text-teal-400">{q.plant.name}</Link>
            <span className="text-slate-500"> · you said {a ? plantName(a) : '—'}</span>
          </p>
        </div>
      )}
    >
      {q && (
        <>
          <figure className="space-y-1">
            <img src={q.photo.url} alt="Which plant is this?" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <figcaption><PhotoCredit photo={q.photo} /></figcaption>
          </figure>
          <PickList
            key={`${quiz.round[0]?.key}-${quiz.index}`}
            label="Which is this?"
            options={plantOptions(scope)}
            value={quiz.answer}
            onChange={quiz.setAnswer}
            reveal={quiz.checked}
            isCorrect={(v) => v === q.plant.id}
          />
        </>
      )}
    </QuizShell>
  )
}
