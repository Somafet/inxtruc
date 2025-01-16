import { ensure } from './utils'

export const RESEND_API_KEY = ensure(
  process.env.RESEND_API_KEY,
  'RESEND_API_KEY',
)
