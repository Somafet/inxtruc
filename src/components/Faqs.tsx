import { Container } from '@/components/Container'
import { Heading } from './ui/heading'
import { Text, TextLink } from './ui/text'

const faqs = [
  [
    {
      question: 'What is Inxtruc, and how does it work?',
      answer:
        'Inxtruc is an app that lets families create, organize, and share home-made tutorials for everyday tasks. You can build step-by-step guides with text, images, and videos, accessible anytime, anywhere.',
    },
    {
      question: 'Who is Inxtruc for?',
      answer:
        'Inxtruc is designed for families, couples, or households looking to preserve knowledge, teach new skills, or share instructions on recurring tasks.',
    },
    {
      question: 'Can I access my guides offline?',
      answer:
        'Yes, Inxtruc allows you to download guides for offline access so you can view them even without an internet connection.',
    },
  ],
  [
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. All guides are encrypted and stored securely in the cloud. Only you and your family have access to them unless you choose to share guides with the community.',
    },
    {
      question: 'What can I include in a guide?',
      answer:
        'You can include text instructions, audio recordings, photos, videos, and custom tags to make your guides detailed and personalized.',
    },
    {
      question: 'How many guides can I create?',
      answer:
        'The number of guides depends on your subscription plan. The free tier includes a limited number, while premium plans offer unlimited guide creation.',
    },
  ],
  [
    {
      question: 'Can I share my guides with others?',
      answer:
        'Yes, you can share guides within your household or, in the future, with the wider Inxtruc community. Community sharing is on our roadmap and will allow families to exchange knowledge freely.',
    },
    {
      question: 'What devices is Inxtruc available on?',
      answer:
        'Inxtruc is available on iOS, Android devices and it is on our roadmap to include web ensuring you can use it on any platform you prefer.',
    },
    {
      question: 'How much does Inxtruc cost?',
      answer:
        'Inxtruc offers a free tier with limited features and paid plans for those who need additional storage, family profiles, and more. Pricing details will be revealed when we are closer to launch. Rest assured, all early adopters will receive a special discount.',
    },
  ],
]

export function Faqs() {
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
