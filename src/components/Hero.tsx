import { useId } from 'react'

import { AppDemo } from '@/components/AppDemo'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Heading } from './ui/heading'
import { Text } from './ui/text'
import JoinWaitlist from './JoinWaitlist'
import { toOrdinal } from '@/utils/utils'
import { GuideCategory } from '@/types/Guide'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0f766e" />
            <stop offset="1" stopColor="#0f766e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0f766e" />
            <stop offset="1" stopColor="#0f766e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

type HeroProps = {
  title: string
  subtitle: string
  guides: GuideCategory[]
  demoTitle: string
}

export function Hero({ title, subtitle, guides, demoTitle }: HeroProps) {
  const numberInLine = 1

  const numberInLineText =
    numberInLine === 1 ? 'first' : toOrdinal(numberInLine)

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Text className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-700">
              Inxtruc
            </Text>
            <Heading level={1} className="text-4xl tracking-tight sm:text-4xl">
              {title}, Step by Step
            </Heading>
            <Text className="mt-6 text-lg sm:text-xl">{subtitle}</Text>
            <div className="mt-8 space-y-2">
              <Text className="mt-6 text-sm sm:text-sm">
                Be the {numberInLineText} to try Inxtruc! Join our waitlist
                today and get early access.
              </Text>
              <div className="flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <JoinWaitlist />
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo guideCategories={guides} subtitle={demoTitle} />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            {/* There was a section here. For now this is just a placeholder */}
            <div className="min-h-0 sm:min-h-40" />
          </div>
        </div>
      </Container>
    </div>
  )
}
