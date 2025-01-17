import { ensure } from '@/utils/utils'
import { Redis } from 'ioredis'

const REDIS_URL = ensure(process.env.REDIS_URL, 'REDIS_URL')

export const redisClient = new Redis(REDIS_URL)

redisClient.on('error', (err) => console.log('Redis Client Error', err))
