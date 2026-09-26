import type { PlantScope } from './questions'

/** Trees / crops filter shown above a vegetation quiz. Changing it starts a new round. */
export function ScopeFilter({ value, onChange }: { value: PlantScope; onChange: (v: PlantScope) => void }) {
  return (
    <label className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">Plants:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as PlantScope)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="">Trees and crops</option>
        <option value="tree">Trees &amp; plants only</option>
        <option value="crop">Crops only</option>
      </select>
    </label>
  )
}
