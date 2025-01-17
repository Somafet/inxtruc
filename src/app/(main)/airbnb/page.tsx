import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
import { Features } from '@/components/Features'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { GuideCategory } from '@/types/Guide'
import { BuildingIcon, FlameIcon, HouseIcon } from 'lucide-react'
import DeviceArrowIcon from '@/components/svg/DeviceArrowIcon'
import { DeviceCardsIcon } from '@/components/svg/DeviceCardsIcon'
import DeviceClockIcon from '@/components/svg/DeviceClockIcon'
import DeviceListIcon from '@/components/svg/DeviceListIcon'
import DeviceLockIcon from '@/components/svg/DeviceLockIcon'
import DeviceUserIcon from '@/components/svg/DeviceUserIcon'
import { Metadata } from 'next/types'
import AirbnbIcon from '@/components/svg/AirbnbIcon'
import { airbnbFeatures } from '@/components/sub-landing/airbnb/AirbnbFeatures'

export const dynamic = 'force-dynamic'

const appDemoGuides: GuideCategory[] = [
  {
    name: 'Access Guides',
    guides: [
      {
        name: 'Access the Building',
        description: 'Learn how to access the property in a few simple steps.',
        steps: 2,
        icon: <HouseIcon />,
        bgClass: 'bg-[#FF5A5F]',
      },
      {
        name: 'Aparment Access',
        description: 'Learn how to access the apartment in a few simple steps.',
        steps: 2,
        icon: <BuildingIcon />,
        bgClass: 'bg-pink-600',
      },
    ],
  },
  {
    name: 'Ammenities',
    guides: [
      {
        name: 'Sauna',
        description: 'Learn how to use the sauna in a few simple steps.',
        steps: 4,
        icon: <FlameIcon />,
        bgClass: 'bg-gray-600',
      },
    ],
  },
]

const secondaryFeatures = [
  {
    title: 'View anytime, anywhere',
    description:
      'Whether it’s on the go or at your property, with offline access, guests can view your guides anytime, anywhere for a seamless experience.',
    icon: <DeviceArrowIcon className="h-8 w-8" />,
  },
  {
    title: 'Build a diverse list of guides',
    description:
      'From appliance instructions to local recommendations, you can build a diverse list of guides that cater to your guests’ needs.',
    icon: <DeviceCardsIcon className="h-8 w-8" />,
  },
  {
    title: 'Lifetime access',
    description:
      'With lifetime access, you can maintain a library of guides for your property, ensuring consistent service for all future guests.',
    icon: <DeviceClockIcon className="h-8 w-8" />,
  },
  {
    title: 'Profit from the community',
    description:
      'It’s on our roadmap to allow hosts to share their guides with the community. Searching and downloading community guides will be free!',
    icon: <DeviceListIcon className="h-8 w-8" />,
  },
  {
    title: 'Security first',
    description:
      'All of your guides are encrypted and stored securely in the cloud. Only you and your team have access, unless you share them with the community.',
    icon: <DeviceLockIcon className="h-8 w-8" />,
  },
  {
    title: 'Personalized for your property',
    description:
      'Tailor your guides to suit your property’s unique offerings with custom tags, categories, and even photos or videos. Every guide can be personalized to enhance the guest experience!',
    icon: <DeviceUserIcon className="h-8 w-8" />,
  },
]

const faqs = [
  [
    {
      question: 'What is Inxtruc, and how can it help me as a host?',
      answer:
        'Inxtruc is a guide creation app designed to help Airbnb hosts streamline communication with guests. Create step-by-step guides for tasks like check-in, operating appliances, and exploring the local area to enhance your guest experience.',
    },
    {
      question: 'How do I share guides with my guests?',
      answer:
        'Once you’ve created a guide, you can share it via a link, QR code, or through your Airbnb messaging platform. Guests can easily access the guides anytime during their stay.',
    },
    {
      question: 'Can I customize guides for my property?',
      answer:
        'Absolutely! You can add photos, videos, custom tags, and categories to make guides specific to your property’s unique needs and features.',
    },
  ],
  [
    {
      question: 'Is Inxtruc available offline?',
      answer:
        'Yes! Guests can download guides for offline use, ensuring they have access even without internet connectivity.',
    },
    {
      question: 'What types of guides can I create?',
      answer:
        'You can create a variety of guides, including check-in instructions, appliance manuals, local restaurant recommendations, and emergency procedures, among others.',
    },
    {
      question: 'Is my data and my guests’ information secure?',
      answer:
        'Yes. All guides are encrypted and stored securely in the cloud. Only you and your guests have access, unless you choose to share guides publicly.',
    },
  ],
  [
    {
      question: 'How many guides can I create?',
      answer:
        'The number of guides depends on your subscription plan. Inxtruc offers free and premium plans to cater to different hosting needs. Premium plans allow unlimited guide creation and additional features.',
    },
    {
      question: 'Can I use Inxtruc on different devices?',
      answer:
        'Yes. Inxtruc will be available on iOS and Android devices, and on the web, ensuring you can manage and share guides across platforms.',
    },
    {
      question: 'What does it cost to use Inxtruc?',
      answer:
        'Inxtruc offers a free tier with limited features and affordable premium plans for hosts who need more storage, advanced customization options, and additional tools. Pricing details are going to be available on our website.',
    },
  ],
]

export const metadata: Metadata = {
  title: 'Guiding Airbnb guests, Step by Step',
  description:
    'Empower Your Airbnb Hosting with Inxtruc – Streamline Guest Experiences Effortlessly!',
  keywords: [
    'inxtruc airbnb',
    'airbnb',
    'hosting',
    'guides',
    'guests',
    'property',
    'management',
  ],
}

export default function AirbnbLanding() {
  return (
    <>
      <Hero
        guides={appDemoGuides}
        demoTitle="Your Airbnb’s Knowledge Base"
        title={
          <span className="inline-flex items-center gap-2">
            Guiding <AirbnbIcon className="h-8 w-8 fill-[#FF5A5F]" /> Guests
          </span>
        }
        subtitle="Craft detailed, easy-to-follow guides for your Airbnb guests. Elevate your hosting game with Inxtruc."
      />
      <Features
        features={airbnbFeatures}
        title="Every feature you need to keep your guests informed. Try it yourself."
        subtitle="Inxtruc was built to make hosting easier. With guides for everything from property access to appliance usage, you can keep your guests informed and ensure a seamless stay."
      />
      <SecondaryFeatures
        title="Now is the time to start building your guest guides."
        subtitle="Inxtruc is the perfect investment for hosts looking to organize, share, and streamline essential property details, turning everyday tasks into easy-to-follow step-by-step guides for an unforgettable guest experience."
        features={secondaryFeatures}
      />
      <CallToAction
        title="Start creating guest-friendly guides and elevate your hosting game!"
        subtitle="Sign up for our waitlist and get early access to Inxtruc. Create
                  your first guide after you gain early access and share it with your guests."
      />
      {/* <Pricing /> */}
      <Faqs faqs={faqs} />
    </>
  )
}
