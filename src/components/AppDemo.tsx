'use client'

import { AppScreen } from '@/components/AppScreen'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRight, ChevronUpIcon } from 'lucide-react'
import { Text } from './ui/text'
import { createElement, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Guide, GuideCategory } from '@/types/Guide'
import { Button } from './ui/button'
import AppDemoGuide from './AppDemoGuide'

type AppDemoProps = {
  subtitle: string
  guideCategories: GuideCategory[]
}

export function AppDemo({ subtitle, guideCategories }: AppDemoProps) {
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const transitionVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  }

  return (
    <AppScreen className="relative">
      <AnimatePresence>
        {activeGuide ? (
          <motion.div
            key="active-guide"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-0 top-[5%]"
          >
            <Button
              onClick={() => setActiveGuide(null)}
              size="small"
              className="absolute left-4 top-8 z-50 h-10 w-auto text-gray-900 dark:text-gray-100"
            >
              Back
            </Button>
            <AppScreen.Body>
              {activeGuide ? (
                createElement(AppDemoGuide, {
                  guide: activeGuide,
                })
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-4 py-2">
                  <Text>No content available</Text>
                </div>
              )}
            </AppScreen.Body>
          </motion.div>
        ) : (
          <motion.div
            key="guide-list"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-0 top-[5%]"
          >
            <AppScreen.Body>
              <div className="p-4">
                <div>
                  <Text className="flex items-baseline gap-2 text-sm font-semibold sm:text-sm">
                    👋 Ease your life with Inxtructions
                  </Text>
                  <Text>
                    This is a live Inxtruc guide. Feel free to try it out and
                    see how it looks and feels. 👀
                  </Text>
                </div>
                <div className="mt-3 border-t border-gray-200">
                  <Text className="my-4">{subtitle}</Text>

                  <dl className="grid grid-cols-1 gap-4">
                    {guideCategories.map((category, index) => (
                      <Disclosure key={index} defaultOpen={index === 0}>
                        {({ open }) => (
                          <div className="rounded-lg border-1 ring-1 ring-inset ring-black/5">
                            <dt>
                              <DisclosureButton
                                className={twMerge(
                                  'group flex w-full items-start justify-between rounded-lg bg-white px-4 py-2 text-left dark:bg-gray-800',
                                  open ? 'border-b-1' : 'border-0',
                                )}
                              >
                                <Text className="relative font-semibold">
                                  {category.name}
                                </Text>
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
                                  {category.guides.map((guide) => (
                                    <li
                                      className="shadow-xs col-span-1 flex rounded-md"
                                      key={guide.name}
                                    >
                                      <div
                                        className={twMerge(
                                          'flex w-10 shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white',
                                          guide.bgClass,
                                        )}
                                      >
                                        {guide.icon}
                                      </div>
                                      <div
                                        onClick={() =>
                                          setActiveGuide(guide ?? null)
                                        }
                                        className="flex flex-1 cursor-pointer items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
                                      >
                                        <div className="flex-1 truncate px-4 py-2 text-sm">
                                          <Text className="font-medium text-gray-800 hover:text-gray-600 dark:text-gray-800">
                                            {guide.name}
                                          </Text>
                                          <Text>{guide.stepsNumber} Steps</Text>
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
                  </dl>

                  <Button className="mt-4 w-full">Create a new guide</Button>
                </div>
              </div>
            </AppScreen.Body>
          </motion.div>
        )}
      </AnimatePresence>
    </AppScreen>
  )
}
