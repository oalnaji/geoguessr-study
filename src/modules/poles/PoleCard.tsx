import { Link } from 'react-router'
import { PhotoGallery } from '../../components/PhotoGallery'
import { cardClass } from '../../components/ui'
import { polePhotos, type PoleType } from '../../content/poles'
import { regionById } from '../../content/regions'

export function PoleCard({ pole }: { pole: PoleType }) {
  const photos = polePhotos(pole.id)
  const regions = (pole.regions ?? []).map((id) => regionById.get(id)).filter((r) => r !== undefined)
  return (
    <article className={`${cardClass} space-y-3`}>
      <h3 className="text-lg font-semibold leading-tight">{pole.title}</h3>
      {photos.length > 0 ? (
        <PhotoGallery photos={photos} alt={pole.title} />
      ) : (
        <p className="rounded-lg bg-slate-100 p-3 text-sm text-slate-500 dark:bg-slate-800">
          No open-licence photo found yet: see the PlonkIt guide for pictures.
        </p>
      )}
      <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
        {pole.look.map((l) => <li key={l}>{l}</li>)}
      </ul>
      {pole.where && (
        <p className="text-sm">
          <span className="font-semibold">Where: </span>{pole.where}
          {regions.length > 0 && (
            <span className="text-slate-500">
              {' ('}
              {regions.map((r, i) => (
                <span key={r.id}>{i > 0 && ', '}<Link to={`/regions/${pole.country}/${r.id}`} className="underline hover:text-teal-700">{r.name}</Link></span>
              ))}
              {')'}
            </span>
          )}
        </p>
      )}
      {pole.lookalikes && <p className="text-sm"><span className="font-semibold">Don't confuse with: </span>{pole.lookalikes}</p>}
      {pole.why && <p className="text-sm text-slate-600 dark:text-slate-400"><span className="font-semibold">Why: </span>{pole.why}</p>}
    </article>
  )
}
