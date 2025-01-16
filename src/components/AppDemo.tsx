'use client'

import { AppScreen } from '@/components/AppScreen'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  ChevronRight,
  ChevronUpIcon,
  WashingMachineIcon,
  WifiIcon,
} from 'lucide-react'
import { Text } from './ui/text'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Link } from './ui/link'

export function AppDemo() {
  const contentRef = useRef<HTMLDivElement>(null)
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <Text className="flex items-baseline gap-2 text-sm font-semibold sm:text-sm">
              Ease your life with guides
            </Text>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <div className="my-4 flex gap-4 text-xs text-gray-500">
              Your family how-tos
            </div>

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
                        <ul role="list">
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
            </div>

            <div className="mt-4 rounded-lg bg-teal-700 px-4 py-2 text-center text-sm font-semibold text-white">
              Create a new guide
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
