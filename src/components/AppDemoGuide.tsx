import { Heading } from '@/components/ui/heading'
import { GuideScreenProps } from '@/types/Guide'
import { useState } from 'react'
import { Button } from './ui/button'

export default function AppDemoGuide({ guide }: GuideScreenProps) {
  const [stepIndex, setStepIndex] = useState(0)
  if (!guide.steps || guide.steps.length === 0) {
    return null
  }

  const step = guide.steps[stepIndex]

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="bg-white p-4 text-center dark:bg-gray-800">
        <Heading className="text-xl sm:text-xl">
          Step {stepIndex + 1} of {guide.stepsNumber}
        </Heading>
      </header>

      {/* Main content */}
      <main className="flex flex-grow flex-col space-y-6 p-6">
        {/* Step name */}
        <Heading level={2} className="text-center text-2xl sm:text-2xl">
          {step.name}
        </Heading>

        {step.content}

        {guide.steps[stepIndex + 1] && (
          <Button
            className="mt-auto"
            onClick={() => setStepIndex((prev) => prev + 1)}
          >
            Next Step
          </Button>
        )}
      </main>
    </div>
  )
}
