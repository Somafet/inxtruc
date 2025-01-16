import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Heading } from './ui/heading'
import { Text } from './ui/text'
import JoinWaitlist from './JoinWaitlist'

export function CallToAction() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Heading
            level={2}
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Create your first guide as soon as we release.
          </Heading>
          <Text className="mt-4 text-lg text-gray-300">
            Sign up for our waitlist and get early access to Inxtruc. Create
            your first guide after you gain early access and share it with the
            ones you love most.
          </Text>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="white" /> */}
            <JoinWaitlist />
          </div>
        </div>
      </Container>
    </section>
  )
}
