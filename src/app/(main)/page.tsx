import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
import { Features } from '@/components/Features'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { familyFeatures } from '@/components/sub-landing/families/FamilyFeatures'
import { GuideCategory } from '@/types/Guide'
import {
  AtSignIcon,
  PresentationIcon,
  PrinterIcon,
  SmartphoneIcon,
  WifiIcon,
} from 'lucide-react'
import DeviceArrowIcon from '@/components/svg/DeviceArrowIcon'
import { DeviceCardsIcon } from '@/components/svg/DeviceCardsIcon'
import DeviceClockIcon from '@/components/svg/DeviceClockIcon'
import DeviceListIcon from '@/components/svg/DeviceListIcon'
import DeviceLockIcon from '@/components/svg/DeviceLockIcon'
import DeviceUserIcon from '@/components/svg/DeviceUserIcon'
import { Metadata } from 'next/types'
import { homeFeatures } from '@/components/sub-landing/HomeFeatures'

export const dynamic = 'force-dynamic'

const appDemoGuides: GuideCategory[] = [
  {
    name: 'Workplace Essentials',
    guides: [
      {
        name: 'Company email setup',
        description:
          'Step-by-step guide to configure your work email on any device.',
        steps: 4,
        icon: <AtSignIcon />,
        bgClass: 'bg-pink-600',
      },
      {
        name: 'Use a shared printer',
        description: 'Learn how to connect to and use a shared office printer.',
        steps: 5,
        icon: <PrinterIcon />,
        bgClass: 'bg-blue-600',
      },
      {
        name: 'Organize a meeting',
        description:
          'Plan and execute effective team meetings with this guide.',
        steps: 6,
        icon: <PresentationIcon />,
        bgClass: 'bg-green-600',
      },
    ],
  },
  {
    name: 'Tech guides',
    guides: [
      {
        name: 'Connect to Wi-Fi',
        description:
          'Learn how to connect to any Wi-Fi network in just a few steps.',
        steps: 3,
        icon: <WifiIcon />,
        bgClass: 'bg-teal-600',
      },
      {
        name: 'Set up a new smartphone',
        description:
          'Get your new smartphone ready to use with this quick setup guide.',
        steps: 5,
        icon: <SmartphoneIcon />,
        bgClass: 'bg-yellow-600',
      },
    ],
  },
]

const secondaryFeatures = [
  {
    title: 'View anytime anywhere',
    description:
      'With offline access, you can view your guides anytime, anywhere—whether on the go, at the office or at home.',
    icon: <DeviceArrowIcon className="h-8 w-8" />,
  },
  {
    title: 'Build a diverse list of guides',
    description:
      'From professional skills to personal hobbies, you can create and share guides for any interest.',
    icon: <DeviceCardsIcon className="h-8 w-8" />,
  },
  {
    title: 'Lifetime access',
    description:
      'With lifetime access, you can build a library of guides that will never expire.',
    icon: <DeviceClockIcon className="h-8 w-8" />,
  },
  {
    title: 'Profit from the community',
    description:
      'It’s on our roadmap to users to share their Inxtructions with the Inxtruc community. Searching and downloading community guides will be free!',
    icon: <DeviceListIcon className="h-8 w-8" />,
  },
  {
    title: 'Security first',
    description:
      'All guides are encrypted and stored securely in the cloud, ensuring that only you or your intended audience have access unless you choose to share them with the community.',
    icon: <DeviceLockIcon className="h-8 w-8" />,
  },
  {
    title: 'Personalized for You',
    description:
      'Tailor your guides to suit your unique needs with custom tags, categories, and even photos or videos. Every guide can be personalized to make it truly yours!',
    icon: <DeviceUserIcon className="h-8 w-8" />,
  },
]

const faqs = [
  [
    {
      question: 'What is Inxtruc, and how does it work?',
      answer:
        'Inxtruc is an app that lets users create, organize, and share personalized tutorials for any task. You can build step-by-step guides with text, images, and videos, accessible anytime, anywhere.',
    },
    {
      question: 'Who is Inxtruc for?',
      answer:
        'Inxtruc is designed for anyone—individuals, teams, or communities—looking to preserve knowledge, teach new skills, or share instructions on recurring tasks.',
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
        'Absolutely. All guides are encrypted and stored securely in the cloud. Only you or your intended audience have access to them unless you choose to share guides with the community.',
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
        'Yes, you can share guides with anyone you choose or, in the future, with the wider Inxtruc community. Community sharing is on our roadmap and will allow users to exchange knowledge freely.',
    },
    {
      question: 'What devices is Inxtruc available on?',
      answer:
        'Inxtruc will be available on the web, iOS and Android devices, ensuring you can use it on any platform you prefer.',
    },
    {
      question: 'How much does Inxtruc cost?',
      answer:
        'Inxtruc offers a free tier with limited features and paid plans for those who need additional storage, advanced customization, and more. Pricing details will be revealed closer to launch, and early adopters will receive a special discount.',
    },
  ],
]

export const metadata: Metadata = {
  title: 'Your Guide, Step by Step',
}

export default function HomePage() {
  return (
    <>
      <Hero
        guides={appDemoGuides}
        demoTitle="Your essential guides"
        title="Your Guide"
        subtitle="A simple app to create and share step-by-step tutorials with anyone, anywhere."
      />
      <Features
        features={homeFeatures}
        title="Create and share guides tailored to your unique needs."
        subtitle="Inxtruc is designed to help people create, organize, and share step-by-step tutorials for any task, from everyday activities to specialized skills."
      />
      <SecondaryFeatures
        title="Now is the time to start building your community’s guides."
        subtitle="Inxtruc is the perfect investment for communities looking to preserve,
                  organize, and share their collective knowledge, turning everyday
                  tasks into lasting step-by-step guides that everyone can follow."
        features={secondaryFeatures}
      />
      <CallToAction
        title="Create your first guide as soon as we release."
        subtitle="Sign up for our waitlist and get early access to Inxtruc. Create
                  your first guide after you gain early access and share it with your community."
      />
      {/* <Pricing /> */}
      <Faqs faqs={faqs} />
    </>
  )
}
