'use client'

import { AppScreen } from '@/components/AppScreen'

import {
  bodyAnimation,
  headerAnimation,
  MotionAppScreenBody,
  MotionAppScreenHeader,
  ScreenProps,
} from '@/components/Screen'
import { ReactNode } from 'react'

type GuideScreenProps = {
  guide: ReactNode
} & ScreenProps

export default function GuideScreen({
  title,
  subtitle,
  guide,
  ...props
}: GuideScreenProps) {
  return (
    <AppScreen className="max-h-full w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>{title}</AppScreen.Title>
        <AppScreen.Subtitle>{subtitle}</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        className="max-h-[567px] overflow-y-auto"
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="flex flex-col items-center px-4 py-6">{guide}</div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}
