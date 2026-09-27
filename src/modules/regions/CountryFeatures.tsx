import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { PhotoCredit } from '../../components/PhotoGallery'
import { cardClass } from '../../components/ui'
import {
  featureCategories, featuresOf, regionById, studyByCountry, type CountryFeature, type FeatureCategory,
} from '../../content/regions'
import { plantById } from '../../content/vegetation'
import { countryFocus, featureImages, useRegionFeatures } from './mapFocus'
import { MiniMap } from './MiniMap'

const chip = (active: boolean) =>
  `rounded-full border px-3 py-1 text-sm ${active ? 'border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300' : 'border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-400'}`

function FeatureCard({ feature: f, country, map }: { feature: CountryFeature; country: string; map: React.ReactNode }) {
  const photo = featureImages(f)[0]
  const plant = f.plant ? plantById.get(f.plant) : undefined
  const regions = f.regions.map((id) => regionById.get(id)!).filter(Boolean)
  const total = studyByCountry.get(country)?.regions.length ?? 0
  return (
    <li className={`${cardClass} space-y-3 !p-3 ${f.notable ? 'border-amber-400 dark:border-amber-600' : ''}`}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-tight">
          {f.title}
          {f.notable && <span className="ml-1.5 rounded bg-amber-100 px-1.5 text-xs font-normal text-amber-800 dark:bg-amber-950 dark:text-amber-300">notable</span>}
        </h3>
        <span className="shrink-0 text-xs text-slate-500">{f.category}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {map}
        {photo ? (
          <figure>
            <img src={photo.url} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="mt-0.5 [&_p]:text-[0.6rem] [&_p]:leading-tight"><PhotoCredit photo={photo} /></figcaption>
          </figure>
        ) : (
          <p className="text-sm leading-relaxed">{f.text}</p>
        )}
      </div>
      {photo && <p className="text-sm leading-relaxed">{f.text}</p>}
      <p className="text-xs text-slate-500">
        {regions.length === total ? 'Everywhere in the country: ' : `${regions.length} of ${total}: `}
        {regions.map((r, i) => (
          <span key={r.id}>
            {i > 0 && ', '}
            <Link to={`/regions/${country}/${r.id}`} className="hover:text-teal-700 hover:underline dark:hover:text-teal-400">{r.name}</Link>
          </span>
        ))}
        {plant && (
          <>
            {' · '}
            <Link to={`/vegetation/${plant.id}`} className="text-teal-700 underline dark:text-teal-400">{plant.name} page</Link>
          </>
        )}
      </p>
    </li>
  )
}

/** Notable features by area for one country, each with a small map of where it is found. */
export function CountryFeatures({ country }: { country: string }) {
  const { features: mapFeatures } = useRegionFeatures()
  const [notableOnly, setNotableOnly] = useState(false)
  const [category, setCategory] = useState<FeatureCategory | ''>('')
  const all = featuresOf(country)
  const present = featureCategories.filter((c) => all.some((f) => f.category === c))
  const shown = all.filter((f) => (!notableOnly || f.notable) && (!category || f.category === category))
  const focus = useMemo(() => (mapFeatures ? countryFocus(mapFeatures, country) : null), [mapFeatures, country])

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Things you can spot that point to one part of the country: poles, bollards, road surfaces, codes, crops, soil and buildings. Mostly from the PlonkIt guide, in our own words. Highlighted: the most distinctive ones.
      </p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setNotableOnly((n) => !n)} className={chip(notableOnly)}>
          {notableOnly ? '★ Notable only' : '☆ Notable only'}
        </button>
        <button type="button" onClick={() => setCategory('')} className={chip(category === '')}>All</button>
        {present.map((c) => (
          <button key={c} type="button" onClick={() => setCategory(c)} className={chip(category === c)}>{c}</button>
        ))}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {shown.map((f) => (
          <FeatureCard
            key={f.id}
            feature={f}
            country={country}
            map={focus && mapFeatures ? <MiniMap features={mapFeatures} focus={focus} country={country} highlight={new Set(f.regions)} /> : <div className="aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-800" />}
          />
        ))}
      </ul>
      {shown.length === 0 && <p className="text-sm text-slate-500">Nothing in this category.</p>}
    </div>
  )
}
