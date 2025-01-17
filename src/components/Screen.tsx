'use client'

import { motion, MotionProps, Variant, Variants } from 'framer-motion'
import { AppScreen } from './AppScreen'
import { ReactNode } from 'react'

export const MotionAppScreenHeader = motion.create(AppScreen.Header)
export const MotionAppScreenBody = motion.create(AppScreen.Body)

export const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export const maxZIndex = 2147483647

export const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

export interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

export const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

export const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

export type ScreenProps = {
  title: ReactNode
  subtitle: ReactNode
} & (
  | {
      animated: true
      custom: CustomAnimationProps
    }
  | { animated?: false }
)
