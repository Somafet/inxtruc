import { Button } from '@/components/ui/button'
import { CirclesBackground } from '@/components/CirclesBackground'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'

export default function NotFound() {
  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <CirclesBackground className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
        <Text className="text-sm font-semibold sm:text-sm">404</Text>
        <Heading
          level={1}
          className="mt-2 text-3xl font-medium tracking-tight sm:text-3xl"
        >
          Page not found
        </Heading>
        <Text className="mt-2 text-lg sm:text-lg">
          Sorry, we couldn’t find the page you’re looking for.
        </Text>
        <Button href="/" outline className="mt-8">
          Go back home
        </Button>
      </Container>
    </Layout>
  )
}
