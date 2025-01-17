'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState, useEffect, useState } from 'react'
import {
  applyToWaitlist,
  WaitlistApplicationState,
} from '@/app/actions/actions'
import confetti from 'canvas-confetti'


export default function JoinWaitlist() {
  const [isAnimating, setIsAnimating] = useState(false)
  const initialState: WaitlistApplicationState = {
    error: null,
    email: '',
  }

  const [state, formAction, isPending] = useActionState(
    applyToWaitlist,
    initialState,
  )

  const shootConfetti = () => {
    setIsAnimating(true)

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    setTimeout(() => setIsAnimating(false), 1000)
  }

  useEffect(() => {
    if (!!state.email) {
      shootConfetti()
    }
  }, [state.email])

  return (
    <form
      className="relative flex w-full flex-col justify-center gap-4 sm:flex-row md:w-auto"
      action={formAction}
    >
      <div className="absolute top-0 h-9 w-9"></div>
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
