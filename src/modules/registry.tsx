import { LanguagesModule } from './languages'
import { RegionsModule } from './regions'
import { VegetationModule } from './vegetation'
import type { MetaModule } from './types'

export const modules: MetaModule[] = [
  {
    id: 'languages',
    title: 'Languages & Scripts',
    description: 'Writing systems, look-alike languages, and where each is spoken.',
    path: 'languages',
    status: 'active',
    element: <LanguagesModule />,
  },
  {
    id: 'vegetation',
    title: 'Vegetation & Crops',
    description: 'Which trees and crops grow where, and why.',
    path: 'vegetation',
    status: 'active',
    element: <VegetationModule />,
  },
  {
    id: 'regions',
    title: 'Regions',
    description: 'States and provinces of big countries: where each is and what gives it away.',
    path: 'regions',
    status: 'active',
    element: <RegionsModule />,
  },
  {
    id: 'world-maps',
    title: 'World Maps',
    description: 'Topography and climate zones.',
    path: 'world-maps',
    status: 'planned',
  },
  {
    id: 'landscapes',
    title: 'Landscapes',
    description: 'What regions within countries look like.',
    path: 'landscapes',
    status: 'planned',
  },
  {
    id: 'places',
    title: 'Places & History',
    description: 'Historically significant places and their stories.',
    path: 'places',
    status: 'planned',
  },
  {
    id: 'why',
    title: 'Why Is It Like This?',
    description: 'Explainers for roads, poles, roofs and more.',
    path: 'why',
    status: 'planned',
  },
]

export const activeModules = modules.filter((m) => m.status === 'active' && m.element)
