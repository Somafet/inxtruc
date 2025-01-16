'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import {
  applyToWaitlist,
  WaitlistApplicationState,
} from '@/app/actions/actions'

export default function JoinWaitlist() {
  const initialState: WaitlistApplicationState = {
    error: null,
    email: '',
  }

  const [state, formAction, isPending] = useActionState(
    applyToWaitlist,
    initialState,
  )

  return (
    <form
      className="flex w-full flex-col justify-center gap-4 sm:flex-row md:w-auto"
      action={formAction}
    >
      <div>
        <Input
          type="email"
          name="email"
          aria-label="Email address"
          placeholder="Email address"
          autoComplete="email"
          required
          className="w-60 min-w-0 shrink"
        />
        {state.error && (
          <div className="text-sm text-red-500">{state.error}</div>
        )}
      </div>
      <Button type="submit" className="h-min flex-none" loading={isPending}>
        <span className="hidden lg:inline">Join our waitlist</span>
        <span className="lg:hidden">Join waitlist</span>
      </Button>
    </form>
  )
}
