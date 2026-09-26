import { groups } from '../../../content'

/** Group filter shown above a quiz. Changing it starts a new round. */
export function GroupFilter({ value, onChange, only }: { value: string; onChange: (v: string) => void; only?: (groupId: string) => boolean }) {
  return (
    <label className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">Languages:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      >
        <option value="">All languages</option>
        {groups.filter((g) => !only || only(g.id)).map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
    </label>
  )
}
