import { Feature } from '@/components/Features'
import DeviceNotificationIcon from '@/components/svg/DeviceNotificationIcon'
import DeviceTouchIcon from '@/components/svg/DeviceTouchIcon'
import DeviceUserIcon from '@/components/svg/DeviceUserIcon'
import GuideScreen from '../screens/GuideScreen'
import GuidesList from '../screens/GuidesListScreen'
import InviteScreen from '../screens/InviteScreen'
import Image from 'next/image'
import { Text } from '@/components/ui/text'
import settingsStep from '@/images/iphone-settings-step.png'
import {
  CookingPotIcon,
  PrinterIcon,
  WashingMachineIcon,
  WifiIcon,
} from 'lucide-react'

export const familyFeatures: Feature[] = [
  {
    name: 'Add all your family members',
    description:
      'Add up to 5 family members to view and create guides for your household.',
    icon: <DeviceUserIcon className="h-8 w-8" />,
    screen: (
      <InviteScreen
        title="Invite your family"
        nameValue="Pop-pop"
        subtitle={
          <>
            Get up to <span className="text-white">5</span> of your loved ones
            to learn together.
          </>
        }
      />
    ),
  },
  {
    name: 'Notifications on new guides',
    description: 'Get notified when a new guide is shared to your household.',
    icon: <DeviceNotificationIcon className="h-8 w-8" />,
    screen: (
      <GuidesList
        title="Guides"
        subtitle="All your household guides in one place"
        guides={[
          {
            name: 'Tech guides',
            guides: [
              {
                icon: <WifiIcon />,
                name: 'Connect to Wi-Fi',
                steps: 3,
                bgClass: 'bg-pink-600',
              },
              {
                icon: <PrinterIcon />,
                name: 'Print a document',
                steps: 8,
                bgClass: 'bg-blue-600',
              },
              {
                icon: (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 fill-[#FF0000]"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                  </svg>
                ),
                name: 'Youtube on TV',
                steps: 4,
                bgClass: 'bg-white',
              },
            ],
          },
          {
            name: 'Cleaning',
            guides: [
              {
                name: 'Run a laundry cycle',
                steps: 5,
                icon: <WashingMachineIcon />,
                bgClass: 'bg-green-600',
              },
            ],
          },
          {
            name: 'Cooking',
            guides: [
              {
                name: 'Perfectly Fluffy Pancakes',
                steps: 6,
                icon: <CookingPotIcon />,
                bgClass: 'bg-blue-600',
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
