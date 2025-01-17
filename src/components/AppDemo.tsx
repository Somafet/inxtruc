'use client'

import { AppScreen } from '@/components/AppScreen'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRight, ChevronUpIcon } from 'lucide-react'
import { Text } from './ui/text'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Link } from './ui/link'
import { GuideCategory } from '@/types/Guide'
import { Button } from './ui/button'

type AppDemoProps = {
  subtitle: string
  guideCategories: GuideCategory[]
}

export function AppDemo({ subtitle, guideCategories }: AppDemoProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <Text className="flex items-baseline gap-2 text-sm font-semibold sm:text-sm">
              Ease your life with Inxtructions
            </Text>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <Text className="my-4">{subtitle}</Text>

            <div className="grid grid-cols-1 gap-4">
              {guideCategories.map((category, index) => (
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

            <Button className="mt-4 w-full">Create a new guide</Button>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
