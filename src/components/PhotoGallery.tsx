import { useState } from 'react'
import type { Photo } from '../content/vegetation/types'

const sourceName: Record<Photo['from'], string> = { wikipedia: 'Wikimedia Commons', commons: 'Wikimedia Commons', inaturalist: 'iNaturalist' }

/** Credit line required by the photos' licences: author, licence and a link to the original. */
export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <p className="text-xs text-slate-500">
      Photo: {photo.author.replace(/^\(c\)\s*/i, '')} · {photo.license} ·{' '}
      <a href={photo.source} target="_blank" rel="noreferrer" className="underline">{sourceName[photo.from]}</a>
    </p>
  )
}

/** Large photo with a strip of thumbnails. Photos load from their source sites. */
export function PhotoGallery({ photos, alt }: { photos: Photo[]; alt: string }) {
  const [i, setI] = useState(0)
  if (!photos.length) return null
  const p = photos[Math.min(i, photos.length - 1)]
  return (
    <figure className="space-y-2">
      <a href={p.large} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
        <img src={p.url} alt={alt} className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]" />
      </a>
      <figcaption><PhotoCredit photo={p} /></figcaption>
      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {photos.map((ph, j) => (
            <button
              key={ph.source}
              type="button"
              onClick={() => setI(j)}
              aria-label={`Photo ${j + 1}`}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-md ring-2 ${j === i ? 'ring-teal-600' : 'ring-transparent'}`}
            >
              <img src={ph.url} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </figure>
  )
}
