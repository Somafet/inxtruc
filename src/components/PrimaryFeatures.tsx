'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
} from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import {
  AnimatePresence,
  type MotionProps,
  type Variant,
  type Variants,
  motion,
} from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import {
  ChevronUpIcon,
  WifiIcon,
  ChevronRight,
  WashingMachineIcon,
  PrinterCheckIcon,
  CookingPot,
} from 'lucide-react'
import { Text } from '@/components/ui/text'
import { Link } from '@/components/ui/link'
import settingsStep from '@/images/iphone-settings-step.png'
import Image from 'next/image'
import { Heading } from './ui/heading'

const MotionAppScreenHeader = motion.create(AppScreen.Header)
const MotionAppScreenBody = motion.create(AppScreen.Body)

interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

const features = [
  {
    name: 'Add all your family members',
    description:
      'Add up to 5 family members to view and create guides for your household.',
    icon: DeviceUserIcon,
    screen: InviteScreen,
  },
  {
    name: 'Notifications on new guides',
    description: 'Get notified when a new guide is shared to your household.',
    icon: DeviceNotificationIcon,
    screen: GuidesList,
  },
  {
    name: 'View guides on any device',
    description:
      'View step-by-step guides on your phone, tablet, or computer. Each guide only shows one step at a time so you can make progress without getting overwhelmed.',
    icon: DeviceTouchIcon,
    screen: GuideScreen,
  },
]

function DeviceUserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation: MotionProps = {
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

type ScreenProps =
  | {
      animated: true
      custom: CustomAnimationProps
    }
  | { animated?: false }

function InviteScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Invite your family</AppScreen.Title>
        <AppScreen.Subtitle>
          Get up to <span className="text-white">5</span> of your loved ones to
          learn together.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              { label: 'Name', value: 'Pop-pop' },
              { label: 'Email address', value: 'awiggin@example.com' },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500 dark:text-white">
                  {field.label}
                </div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900 dark:text-gray-300">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-teal-700 px-3 py-2 text-center text-sm font-semibold text-white">
            Invite person
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function GuidesList(props: ScreenProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Guides</AppScreen.Title>
        <AppScreen.Subtitle>
          All your household guides in one place
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        className="px-4 py-6"
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="grid grid-cols-1 gap-4">
          <Disclosure defaultOpen>
            {({ open }) => (
              <div className="border-1 overflow-hidden rounded-lg ring-1 ring-inset ring-black/5">
                <dt>
                  <DisclosureButton
                    className={twMerge(
                      'group flex w-full items-start justify-between rounded-lg bg-white px-4 py-2 text-left dark:bg-gray-800',
                      open ? 'border-b-1' : 'border-0',
                    )}
                  >
                    <Text className="font-semibold">Tech guides</Text>
                    <motion.div
                      animate={{
                        rotate: open ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 flex h-7 items-center"
                    >
                      <ChevronUpIcon className="h-5 w-5 text-gray-400 dark:text-gray-100" />
                    </motion.div>
                  </DisclosureButton>
                </dt>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: open
                      ? contentRef.current?.scrollHeight || 'auto'
                      : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <DisclosurePanel
                    ref={contentRef}
                    className="bg-gray-50 p-4 dark:bg-gray-900"
                  >
                    <ul role="list" className="space-y-4">
                      <li className="shadow-xs col-span-1 flex rounded-md">
                        <div className="flex w-10 shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">
                          <WifiIcon className="size-5" />
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-600"
                            >
                              Connect to Wi-Fi
                            </Link>
                            <Text>3 Steps</Text>
                          </div>
                          <div className="shrink-0 pr-2">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </li>
                      <li className="shadow-xs col-span-1 flex rounded-md">
                        <div className="flex w-10 shrink-0 items-center justify-center rounded-l-md bg-blue-600 text-sm font-medium text-white">
                          <PrinterCheckIcon className="size-5" />
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-600"
                            >
                              Print a document
                            </Link>
                            <Text>8 Steps</Text>
                          </div>
                          <div className="shrink-0 pr-2">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </li>
                      <li className="shadow-xs col-span-1 flex rounded-md">
                        <div className="border-1 flex w-10 shrink-0 items-center justify-center rounded-l-md bg-white text-sm font-medium text-white">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 fill-[#FF0000]"
                          >
                            <title>YouTube</title>
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-600"
                            >
                              YouTube on TV
                            </Link>
                            <Text>4 Steps</Text>
                          </div>
                          <div className="shrink-0 pr-2">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </motion.div>
              </div>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <div className="border-1 overflow-hidden rounded-lg ring-1 ring-inset ring-black/5">
                <dt>
                  <DisclosureButton
                    className={twMerge(
                      'group flex w-full items-start justify-between rounded-lg bg-white px-4 py-2 text-left dark:bg-gray-800',
                      open ? 'border-b-1' : 'border-0',
                    )}
                  >
                    <Text className="font-semibold">Cleaning</Text>
                    <motion.div
                      animate={{
                        rotate: open ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 flex h-7 items-center"
                    >
                      <ChevronUpIcon className="h-5 w-5 text-gray-400 dark:text-gray-100" />
                    </motion.div>
                  </DisclosureButton>
                </dt>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: open
                      ? contentRef.current?.scrollHeight || 'auto'
                      : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <DisclosurePanel
                    ref={contentRef}
                    className="bg-gray-50 p-4 dark:bg-gray-900"
                  >
                    <ul role="list">
                      <li className="shadow-xs col-span-1 flex rounded-md">
                        <div className="flex w-10 shrink-0 items-center justify-center rounded-l-md bg-cyan-600 text-sm font-medium text-white">
                          <WashingMachineIcon className="size-5" />
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-600"
                            >
                              Run a laundry cycle
                            </Link>
                            <Text>4 Steps</Text>
                          </div>
                          <div className="shrink-0 pr-2">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </motion.div>
              </div>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <div className="border-1 overflow-hidden rounded-lg ring-1 ring-inset ring-black/5">
                <dt>
                  <DisclosureButton
                    className={twMerge(
                      'group flex w-full items-start justify-between rounded-lg bg-white px-4 py-2 text-left dark:bg-gray-800',
                      open ? 'border-b-1' : 'border-0',
                    )}
                  >
                    <Text className="font-semibold">Cooking</Text>
                    <motion.div
                      animate={{
                        rotate: open ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 flex h-7 items-center"
                    >
                      <ChevronUpIcon className="h-5 w-5 text-gray-400 dark:text-gray-100" />
                    </motion.div>
                  </DisclosureButton>
                </dt>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: open
                      ? contentRef.current?.scrollHeight || 'auto'
                      : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <DisclosurePanel
                    ref={contentRef}
                    className="bg-gray-50 p-4 dark:bg-gray-900"
                  >
                    <ul role="list">
                      <li className="shadow-xs col-span-1 flex rounded-md">
                        <div className="flex w-10 shrink-0 items-center justify-center rounded-l-md bg-blue-600 text-sm font-medium text-white">
                          <CookingPot className="size-5" />
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                          <div className="flex-1 truncate px-4 py-2 text-sm">
                            <Link
                              href="#"
                              className="font-medium text-gray-900 hover:text-gray-600"
                            >
                              Perfectly Fluffy Rice
                            </Link>
                            <Text>6 Steps</Text>
                          </div>
                          <div className="shrink-0 pr-2">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DisclosurePanel>
                </motion.div>
              </div>
            )}
          </Disclosure>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function GuideScreen(props: ScreenProps) {
  return (
    <AppScreen className="max-h-full w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Connect to Wi-Fi</AppScreen.Title>
        <AppScreen.Subtitle>
          Step <span className="text-white">1</span> of 3
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        className="max-h-[567px] overflow-y-auto"
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="flex flex-col items-center px-4 py-6">
          <Text className="sm:mb-4">
            Start by tapping the Settings icon on your iPhone. It should be on
            the first screen when you unlock your phone.
          </Text>
          <Image
            src={settingsStep.src}
            placeholder="blur"
            blurDataURL={settingsStep.blurDataURL}
            alt="highlighting iphone settings icon"
            width={300}
            height={500}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious<T>(value: T) {
  let ref = useRef<T>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#0f766e" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null,
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              ref && (slideRefs.current[featureIndex] = ref)
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={twMerge(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <Heading
            level={2}
            className="text-3xl font-medium tracking-tight text-white sm:text-3xl"
          >
            Every feature you need to keep your family up to date. Try it
            yourself.
          </Heading>
          <Text className="mt-2 text-lg text-gray-400">
            Inxtruc was built to make you family’s life easier. With guides for
            a variety of tasks, you can keep your family up to date with the
            latest tech or household chores.
          </Text>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
