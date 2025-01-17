'use client'

import { AppScreen } from '@/components/AppScreen'
import {
  ScreenProps,
  MotionAppScreenHeader,
  headerAnimation,
  MotionAppScreenBody,
  bodyAnimation,
} from '@/components/Screen'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import {
  ChevronUpIcon,
  WifiIcon,
  ChevronRight,
  PrinterCheckIcon,
  WashingMachineIcon,
  CookingPot,
} from 'lucide-react'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from '@/components/ui/text'
import { Link } from '@/components/ui/link'
import { GuideCategory } from '@/types/Guide'

type GuidesListProps = {
  guides: GuideCategory[]
} & ScreenProps

export default function GuidesList({
  title,
  subtitle,
  guides,
  ...props
}: GuidesListProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>{title}</AppScreen.Title>
        <AppScreen.Subtitle>{subtitle}</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        className="max-h-[567px] overflow-y-auto px-4 py-6"
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="grid grid-cols-1 gap-4">
          {guides.map((category, index) => (
            <Disclosure key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <div className="overflow-hidden rounded-lg border-1 ring-1 ring-inset ring-black/5">
                  <dt>
                    <DisclosureButton
                      className={twMerge(
                        'group flex w-full items-start justify-between rounded-lg bg-white px-4 py-2 text-left dark:bg-gray-800',
                        open ? 'border-b-1' : 'border-0',
                      )}
                    >
                      <Text className="font-semibold">{category.name}</Text>
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
                        {category.guides.map((guide, index) => (
                          <li
                            className="shadow-xs col-span-1 flex rounded-md"
                            key={index}
                          >
                            <div
                              className={twMerge(
                                'flex w-10 shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white',
                                guide.bgClass,
                              )}
                            >
                              {guide.icon}
                            </div>
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                              <div className="flex-1 truncate px-4 py-2 text-sm">
                                <Link
                                  href="#"
                                  className="font-medium text-gray-900 hover:text-gray-600"
                                >
                                  {guide.name}
                                </Link>
                                <Text>{guide.steps} Steps</Text>
                              </div>
                              <div className="shrink-0 pr-2">
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </motion.div>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}
