import { ReactNode } from 'react'

export type Guide = {
  id?: string
  name: string
  description?: string
  stepsNumber: number
  icon: ReactNode
  bgClass: string
  steps?: Step[]
}

export type Step = {
  name: string
  content: ReactNode
}

export type GuideCategory = {
  name: string
  guides: Guide[]
}

export type GuideScreenProps = {
  guide: Guide
}
