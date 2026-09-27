import { africaPoles } from './africa'
import { americasPoles } from './americas'
import { asiaPoles } from './asia'
import { europePoles } from './europe'
import { oceaniaPoles } from './oceania'
import type { PoleType } from './types'

export const poles: PoleType[] = [...europePoles, ...asiaPoles, ...americasPoles, ...africaPoles, ...oceaniaPoles]
