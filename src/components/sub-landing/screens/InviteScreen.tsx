import { AppScreen } from '@/components/AppScreen'
import {
  ScreenProps,
  MotionAppScreenHeader,
  headerAnimation,
  MotionAppScreenBody,
  bodyAnimation,
} from '@/components/Screen'
import { Button } from '@/components/ui/button'

type InviteScreenProps = {
  nameValue: string
} & ScreenProps

export default function InviteScreen({
  title,
  subtitle,
  nameValue,
  ...props
}: InviteScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>{title}</AppScreen.Title>
        <AppScreen.Subtitle>{subtitle}</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              { label: 'Name', value: nameValue },
              { label: 'Email address', value: 'awiggin@example.com' },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500 dark:text-white">
                  {field.label}
                </div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900 dark:text-gray-300">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full">Invite person</Button>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}
