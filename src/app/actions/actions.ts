'use server'

import { redisClient } from '@/lib/redis/redis.service'
import WelcomeEmail from '@/lib/resend/emails/welcome-email'
import { generateEmailId, resend } from '@/lib/resend/resend.service'

export type WaitlistApplicationState = {
  email: string
  error: string | null
}

export async function applyToWaitlist(
  prevState: WaitlistApplicationState,
  formData?: FormData,
): Promise<WaitlistApplicationState> {
  const email = formData?.get('email') as string

  if (!email) {
    return { ...prevState, error: 'Please enter an email address' }
  }

  const countValue = await redisClient.get('waitlistCount')
  const countParsed = Number(countValue?.valueOf())
  const count = isNaN(countParsed) ? 0 : countParsed

  const response = await resend.emails.send({
    from: 'Inxtruc <info@inxtruc.com>',
    to: [email],
    subject: `Welcome to Inxtruc!`,
    react: WelcomeEmail({ count: count + 1 }),
    headers: {
      'X-Entity-Ref-ID': generateEmailId(),
    },
  })

  if (response.error) {
    console.error('failed_to_send_welcome_email', response.error)

    return {
      ...prevState,
      error: "We couldn't send the email. Please try again.",
    }
  }

  await redisClient.set('waitlistCount', count + 1)

  return { email, error: null }
}
