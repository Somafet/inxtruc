import { Logomark } from '@/components/Logo'
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface WelcomeEmailProps {
  links?: { name: string; href: string }[]
}

const baseUrl = 'https://inxtruc.com'

const PropDefaults: WelcomeEmailProps = {
  links: [
    { name: 'Visit Inxtruc', href: 'https://inxtruc.com' },
    { name: 'Join our Discord', href: 'https://discord.gg/ATVcrbnpMY' },
  ],
}

export const WelcomeEmail = ({
  links = PropDefaults.links,
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>You're on the waitlist for Inxtruc!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className={twMerge('bg-offwhite font-sans text-base')}>
          <Container className="p-45 bg-white">
            <div className="mx-auto text-center">
              <Img
                src={`https://inxtruc.imgix.net/logo.png`}
                alt="Inxtruc logo"
                className="mx-auto mb-8"
                width={64}
                height={64}
              />
            </div>
            <Heading className="my-0 text-center leading-8">
              Welcome to Inxtruc!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Thank you for joining the waitlist for Inxtruc! We're excited
                  to have you on board. As a member, you will be among the first
                  to have access to Instrux when it launches. You will also
                  receive exclusive updates and early access to tutorials and
                  resources to help you get the most out of Instrux!
                </Text>

                <Text className="text-base">
                  We are dedicated to making this community the best it can be
                  and we would love for you to participate. Please feel free to
                  join our{' '}
                  <Link href="https://discord.gg/ATVcrbnpMY">Discord</Link> and
                  reach out to us with any questions or feedback you may have.
                  We are always happy to chat!
                </Text>
              </Row>
            </Section>

            {/* <Section className="text-center">
              <Button
                href={`${baseUrl}/dash`}
                className="rounded-lg bg-zinc-900 px-[18px] py-3 text-white"
              >
                Go to your dashboard
              </Button>
            </Section> */}

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link.name}>
                    <Link
                      className="font-bold text-black underline"
                      href={link.href}
                    >
                      {link.name}
                    </Link>{' '}
                    <span className="text-[#FF8C00]">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <></>
                {/* <Column className="px-20 text-right">
                  <Link href={`${baseUrl}/privacy-policy`}>Privacy Policy</Link>
                </Column>
                <Column className="text-left">
                  <Link href={`${baseUrl}/terms`}>Terms of Service</Link>
                </Column> */}
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              Inxtruc, Hungary, 2100 Gödöllő, Úrréti utca 20.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeEmail
