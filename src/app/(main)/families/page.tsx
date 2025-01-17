import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
import { Features } from '@/components/Features'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { familyFeatures } from '@/components/sub-landing/families/FamilyFeatures'
import { GuideCategory } from '@/types/Guide'
import { WashingMachineIcon, WifiIcon } from 'lucide-react'
import DeviceArrowIcon from '@/components/svg/DeviceArrowIcon'
import { DeviceCardsIcon } from '@/components/svg/DeviceCardsIcon'
import DeviceClockIcon from '@/components/svg/DeviceClockIcon'
import DeviceListIcon from '@/components/svg/DeviceListIcon'
import DeviceLockIcon from '@/components/svg/DeviceLockIcon'
import DeviceUserIcon from '@/components/svg/DeviceUserIcon'
import { Metadata } from 'next/types'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

const appDemoGuides: GuideCategory[] = [
  {
    name: 'Tech guides',
    guides: [
      {
        name: 'Connect to Wi-Fi',
        description: 'Learn how to connect to Wi-Fi in a few simple steps.',
        steps: 3,
        icon: <WifiIcon />,
        bgClass: 'bg-pink-600',
      },
    ],
  },
  {
    name: 'Cleaning',
    guides: [
      {
        name: 'Run a laundry cycle',
        description: 'Learn how to run a laundry cycle in a few simple steps.',
        steps: 4,
        icon: <WashingMachineIcon />,
        bgClass: 'bg-blue-600',
      },
    ],
  },
]

const secondaryFeatures = [
  {
    title: 'View anytime anywhere',
    description:
      'Whether it’s on the go or at home, with offline access you can view your guides anytime, anywhere.',
    icon: <DeviceArrowIcon className="h-8 w-8" />,
  },
  {
    title: 'Build a diverse list of guides',
    description:
      'From cooking to gardening, you can build a diverse list of guides that cater to your family’s interests.',
    icon: <DeviceCardsIcon className="h-8 w-8" />,
  },
  {
    title: 'Lifetime access',
    description:
      'With lifetime access, you can build a library of guides that can be passed down for generations.',
    icon: <DeviceClockIcon className="h-8 w-8" />,
  },
  {
    title: 'Profit from the community',
    description:
      'It’s on our roadmap to allow families to share their guides with the community. Searching and downloading community guides will be free!',
    icon: <DeviceListIcon className="h-8 w-8" />,
  },
  {
    title: 'Security first',
    description:
      'All of your guides are encrypted and stored securely in the cloud. Only you and your family have access to your guides. Unless you share them with the community.',
    icon: <DeviceLockIcon className="h-8 w-8" />,
  },
  {
    title: 'Personalized for Your Family',
    description:
      'Tailor your guides to suit your household’s unique needs with custom tags, categories, and even photos or videos. Every guide can be personalized to make it truly yours!',
    icon: <DeviceUserIcon className="h-8 w-8" />,
  },
]

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

export const metadata: Metadata = {
  title: 'Guiding Families, Step by Step',
  description:
    'Inxtruc is designed to help families create, organize, and share homemade tutorials for everyday tasks.',
}

export default function FamiliesLanding() {
  return (
    <>
      <Hero
        guides={appDemoGuides}
        demoTitle="Your family how-tos"
        title="Guiding Families"
        subtitle="A simple app to create and share home-made tutorials within your
              household."
      />
      <Features
        features={familyFeatures}
        title="Every feature you need to keep your family up to date. Try it
            yourself."
        subtitle="Inxtruc was built to make your family’s life easier. With guides for
                    a variety of tasks, you can keep your family up to date with the
                    latest tech or household chores."
      />
      <SecondaryFeatures
        title="Now is the time to start building your family guides."
        subtitle="Inxtruc is the perfect investment for families looking to preserve,
                  organize, and share their collective knowledge, turning everyday
                  tasks into lasting step-by-step guides that everyone can follow."
        features={secondaryFeatures}
      />
      <CallToAction
        title="Create your first guide as soon as we release."
        subtitle="Sign up for our waitlist and get early access to Inxtruc. Create
                  your first guide after you gain early access and share it with the
                  ones you love most."
      />
      {/* <Pricing /> */}
      <Faqs faqs={faqs} />
    </>
  )
}
