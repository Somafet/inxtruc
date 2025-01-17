import { ReactNode } from 'react'

import { Container } from '@/components/Container'
import { Heading } from './ui/heading'
import { Text } from './ui/text'

export type SecondaryFeature = {
  title: string
  description: string
  icon: ReactNode
}

export type SecondaryFeaturesProps = {
  title: string
  subtitle: string
  features: SecondaryFeature[]
}

export function SecondaryFeatures({
  title,
  subtitle,
  features,
}: SecondaryFeaturesProps) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Heading
            level={2}
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl"
          >
            {title}
          </Heading>
          <Text className="mt-2 text-lg text-gray-600 sm:text-lg">
            {subtitle}
          </Text>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-gray-200 p-8"
            >
              {feature.icon}
              <Heading level={3} className="mt-6 font-semibold text-gray-900">
                {feature.title}
              </Heading>
              <Text className="mt-2 text-gray-700">{feature.description}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
