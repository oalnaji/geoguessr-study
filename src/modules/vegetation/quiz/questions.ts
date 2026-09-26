import { cropList, plantData, plants, topProducers, treeList, type Photo, type Plant } from '../../../content/vegetation'
import { pick, ROUND_LENGTH, shuffle, type Grade, type Rng } from '../../../quiz/engine'

export const vegetationQuizCrumbs = [{ to: '/vegetation', label: 'Vegetation & Crops' }, { to: '/vegetation/quizzes', label: 'Quizzes' }]

export type PlantScope = '' | 'tree' | 'crop'
export const plantsInScope = (scope: PlantScope) => (scope === 'tree' ? treeList : scope === 'crop' ? cropList : plants)

export const plantOptions = (scope: PlantScope) =>
  [...plantsInScope(scope)].sort((a, b) => a.name.localeCompare(b.name)).map((p) => ({ value: p.id, label: p.name }))

// ---- Name the plant from a photo ---------------------------------------------------------------

export interface PhotoQuestion { key: string; plant: Plant; photo: Photo }

export function makePhotoRound(scope: PlantScope, known: ReadonlySet<string>, rng: Rng = Math.random): PhotoQuestion[] {
  return shuffle(plantsInScope(scope).filter((p) => !known.has(p.id) && plantData(p.id).photos.length), rng)
    .slice(0, ROUND_LENGTH)
    .map((plant) => ({ key: plant.id, plant, photo: pick(plantData(plant.id).photos, rng) }))
}

export const gradePhoto = (q: PhotoQuestion, a: string | null): Grade => ({ points: Number(a === q.plant.id), max: 1 })

// ---- Where does it grow? -----------------------------------------------------------------------

export interface WhereQuestion {
  key: string
  plant: Plant
  /** Countries that count as correct */
  answers: string[]
  /** How the answer set was chosen, shown in the prompt */
  kind: 'clue' | 'producer'
}

/** Crops: the top 10 producers. Trees: the countries where the tree is a useful GeoGuessr clue. */
export function whereAnswers(plant: Plant): Pick<WhereQuestion, 'answers' | 'kind'> {
  const producers = plant.section === 'crop' ? topProducers(plant, 10) : []
  return producers.length ? { answers: producers, kind: 'producer' } : { answers: plant.clueCountries, kind: 'clue' }
}

export function makeWhereRound(scope: PlantScope, known: ReadonlySet<string>, rng: Rng = Math.random): WhereQuestion[] {
  return shuffle(plantsInScope(scope).filter((p) => !known.has(p.id)), rng)
    .slice(0, ROUND_LENGTH)
    .map((plant) => ({ key: plant.id, plant, ...whereAnswers(plant) }))
}

export const gradeWhere = (q: WhereQuestion, a: { country: string } | null): Grade =>
  ({ points: Number(a !== null && q.answers.includes(a.country)), max: 1 })
