import { Feature } from '@/components/Features'
import DeviceNotificationIcon from '@/components/svg/DeviceNotificationIcon'
import DeviceTouchIcon from '@/components/svg/DeviceTouchIcon'
import DeviceUserIcon from '@/components/svg/DeviceUserIcon'
import GuideScreen from './screens/GuideScreen'
import GuidesList from './screens/GuidesListScreen'
import InviteScreen from './screens/InviteScreen'
import Image from 'next/image'
import { Text } from '@/components/ui/text'
import settingsStep from '@/images/iphone-settings-step.png'
import {
  AtSignIcon,
  PresentationIcon,
  PrinterIcon,
  SmartphoneIcon,
  WifiIcon,
} from 'lucide-react'

export const homeFeatures: Feature[] = [
  {
    name: 'Add all your members',
    description:
      'Add up to 5 members in the free plan to view and create guides for.',
    icon: <DeviceUserIcon className="h-8 w-8" />,
    screen: (
      <InviteScreen
        title="Invite your team"
        nameValue="Albert H. Wiggin"
        subtitle={
          <>
            Get up to <span className="text-white">5</span> of your team or
            community members to learn together.
          </>
        }
      />
    ),
  },
  {
    name: 'Notifications on new guides',
    description: 'Get notified when a new guide is shared to your team.',
    icon: <DeviceNotificationIcon className="h-8 w-8" />,
    screen: (
      <GuidesList
        title="Guides"
        subtitle="All your team guides in one place"
        guides={[
          {
            name: 'Workplace Essentials',
            guides: [
              {
                name: 'Company email setup',
                description:
                  'Step-by-step guide to configure your work email on any device.',
                stepsNumber: 4,
                icon: <AtSignIcon />,
                bgClass: 'bg-pink-600',
              },
              {
                name: 'Use a shared printer',
                description:
                  'Learn how to connect to and use a shared office printer.',
                stepsNumber: 5,
                icon: <PrinterIcon />,
                bgClass: 'bg-blue-600',
              },
              {
                name: 'Organize a meeting',
                description:
                  'Plan and execute effective team meetings with this guide.',
                stepsNumber: 6,
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
                stepsNumber: 3,
                icon: <WifiIcon />,
                bgClass: 'bg-teal-600',
              },
              {
                name: 'Set up a new smartphone',
                description:
                  'Get your new smartphone ready to use with this quick setup guide.',
                stepsNumber: 5,
                icon: <SmartphoneIcon />,
                bgClass: 'bg-yellow-600',
              },
            ],
          },
        ]}
      />
    ),
  },
  {
    name: 'View guides on any device',
    description:
      'View step-by-step guides on your phone, tablet, or computer. Each guide only shows one step at a time so you can make progress without getting overwhelmed.',
    icon: <DeviceTouchIcon className="h-8 w-8" />,
    screen: (
      <GuideScreen
        title="Connect to Wi-Fi"
        subtitle={
          <>
            Step <span className="text-white">1</span> of 3
          </>
        }
        guide={
          <>
            <Text className="sm:mb-4">
              Start by tapping the Settings icon on your iPhone. It should be on
              the first screen when you unlock your phone.
            </Text>
            <Image
              src={settingsStep.src}
              placeholder="blur"
              blurDataURL={settingsStep.blurDataURL}
              alt="highlighting iphone settings icon"
              width={300}
              height={500}
              style={{ objectFit: 'contain' }}
            />
          </>
        }
      />
    ),
  },
]
