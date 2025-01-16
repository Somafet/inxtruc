import { RESEND_API_KEY } from '@/utils/env-vars'
import { nanoid } from '@/utils/utils'
import { Resend } from 'resend'

export const generateEmailId = () => nanoid(11)

export const resend = new Resend(RESEND_API_KEY)
