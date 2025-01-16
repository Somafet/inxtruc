'use server'

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

  const response = await resend.emails.send({
    from: 'Inxtruc <info@inxtruc.com>',
    to: [email],
    subject: `Welcome to Inxtruc!`,
    react: WelcomeEmail({}),
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

  return { email, error: null }
}
