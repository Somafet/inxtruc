import { ReactNode } from 'react'

export type Guide = {
  name: string
  description?: string
  steps: number
  icon: ReactNode
  bgClass: string
}

export type GuideCategory = {
  name: string
  guides: Guide[]
}
