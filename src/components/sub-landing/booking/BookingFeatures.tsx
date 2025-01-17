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
  BuildingIcon,
  FlameIcon,
  HouseIcon,
  MartiniIcon,
  UtensilsIcon,
  WavesLadder,
} from 'lucide-react'

export const bookingFeatures: Feature[] = [
  {
    name: 'Add all your guests',
    description:
      'Add up to 5 guests at a time to view and create guides for your Booking.com.',
    icon: <DeviceUserIcon className="h-8 w-8" />,
    screen: (
      <InviteScreen
        title="Invite your guests"
        nameValue="Albert H. Wiggin"
        subtitle={
          <>
            Get up to <span className="text-white">5</span> if your guests at
            the same time.
          </>
        }
      />
    ),
  },
  {
    name: 'Limit Access',
    description:
      'Limit access to certain guides for certain guests. Set auto expiration for guides to ensure guests only have access when they need it.',
    icon: <DeviceNotificationIcon className="h-8 w-8" />,
    screen: (
      <GuidesList
        title="Guides"
        subtitle="All your property guides in one place"
        guides={[
          {
            name: 'Access Guides',
            guides: [
              {
                name: 'Access the Building',
                description:
                  'Learn how to access the property in a few simple steps.',
                steps: 2,
                icon: <HouseIcon />,
                bgClass: 'bg-[#003b95]',
              },
              {
                name: 'Aparment Access',
                description:
                  'Learn how to access the apartment in a few simple steps.',
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
                description:
                  'Learn how to use the sauna in a few simple steps.',
                steps: 4,
                icon: <FlameIcon />,
                bgClass: 'bg-gray-600',
              },
              {
                name: 'Jacuzzi',
                description:
                  'Learn how to use the jacuzzi in a few simple steps.',
                steps: 2,
                icon: <WavesLadder />,
                bgClass: 'bg-blue-600',
              },
            ],
          },
          {
            name: 'Local Recommendations',
            guides: [
              {
                name: 'Restaurants',
                description:
                  'Find the best local restaurants in a few simple steps.',
                steps: 1,
                icon: <UtensilsIcon />,
                bgClass: 'bg-teal-600',
              },
              {
                name: 'Nightlife',
                description:
                  'Find the best local nightlife in a few simple steps.',
                steps: 1,
                icon: <MartiniIcon />,
                bgClass: 'bg-pink-600',
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
