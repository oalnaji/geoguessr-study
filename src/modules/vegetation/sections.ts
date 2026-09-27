import { cropList, forestList, soilList, treeList, type Plant } from '../../content/vegetation'

/** The tabs of the Vegetation overview. */
export const sectionTabs = [
  { id: 'trees', label: 'Trees & plants', count: () => treeList.length },
  { id: 'crops', label: 'Crops', count: () => cropList.length },
  { id: 'forests', label: 'Forests & biomes', count: () => forestList.length },
  { id: 'soils', label: 'Soils', count: () => soilList.length },
] as const

export type SectionTab = (typeof sectionTabs)[number]['id']

/** The overview tab a plant belongs to, for breadcrumbs. */
export function tabOf(p: Plant): { to: string; label: string } {
  const id: SectionTab = p.section === 'soil' ? 'soils' : p.section === 'forest' ? 'forests' : p.section === 'crop' ? 'crops' : 'trees'
  const tab = sectionTabs.find((t) => t.id === id)!
  return { to: id === 'trees' ? '/vegetation' : `/vegetation?tab=${id}`, label: tab.label }
}
