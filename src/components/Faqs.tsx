import { Container } from '@/components/Container'
import { Heading } from './ui/heading'
import { Text, TextLink } from './ui/text'

type FaqsProps = {
  faqs: {
    question: string
    answer: string
  }[][]
}

export function Faqs({ faqs }: FaqsProps) {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Heading
            level={2}
            id="faqs-title"
            className="text-3xl font-medium tracking-tight sm:text-3xl"
          >
            Frequently asked questions
          </Heading>
          <Text className="mt-2 text-lg sm:text-lg">
            If you have anything else you want to ask,{' '}
            <TextLink href="mailto:info@inxtruc.com">reach out to us</TextLink>,
            we always read your messages.
          </Text>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <Heading
                      level={3}
                      className="text-lg font-semibold leading-6 sm:text-lg"
                    >
                      {faq.question}
                    </Heading>
                    <Text className="mt-4 text-sm sm:text-sm">
                      {faq.answer}
                    </Text>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
