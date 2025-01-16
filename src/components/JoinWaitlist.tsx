import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function JoinWaitlist() {
  return (
    <form className="flex w-full flex-col justify-center gap-4 sm:flex-row md:w-auto">
      <Input
        type="email"
        aria-label="Email address"
        placeholder="Email address"
        autoComplete="email"
        required
        className="w-60 min-w-0 shrink"
      />
      <Button type="submit" className="flex-none">
        <span className="hidden lg:inline">Join our waitlist</span>
        <span className="lg:hidden">Join waitlist</span>
      </Button>
    </form>
  )
}
