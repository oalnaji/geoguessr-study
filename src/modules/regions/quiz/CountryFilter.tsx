import { countryName, countryStudies } from '../../../content/regions'
import type { CountryScope } from './questions'

/** Country filter shown above a regions quiz. Changing it starts a new round. */
export function CountryFilter({ value, onChange }: { value: CountryScope; onChange: (v: CountryScope) => void }) {
  return (
    <label className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">Country:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="">All countries</option>
        {countryStudies.map((s) => <option key={s.country} value={s.country}>{countryName(s.country)}</option>)}
      </select>
    </label>
  )
}
