import { LanguagesModule } from './languages'
import { PolesModule } from './poles'
import { RegionsModule } from './regions'
import { TopographyModule } from './topography'
import { UncoveredModule } from './uncovered'
import { WhyModule } from './why'
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
    id: 'topography',
    title: 'Mountains & Rivers',
    description: 'The great mountain ranges and rivers: where they are, how they formed, and their history.',
    path: 'topography',
    status: 'active',
    element: <TopographyModule />,
  },
  {
    id: 'uncovered',
    title: 'Uncovered Countries',
    description: 'Landscapes, roads, crops and culture of countries with little or no Street View.',
    path: 'uncovered',
    status: 'active',
    element: <UncoveredModule />,
  },
  {
    id: 'world-maps',
    title: 'World Maps',
    description: 'Elevation and climate zones.',
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
    id: 'poles',
    title: 'Utility Poles',
    description: 'How poles work, their parts, and why each region builds them differently.',
    path: 'poles',
    status: 'active',
    element: <PolesModule />,
  },
  {
    id: 'why',
    title: 'Why Is It Like This?',
    description: 'Explainers for road lines, frost heaves, water tanks, missing poles and more.',
    path: 'why',
    status: 'active',
    element: <WhyModule />,
  },
]

export const activeModules = modules.filter((m) => m.status === 'active' && m.element)
