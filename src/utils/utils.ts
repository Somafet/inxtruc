import { customAlphabet } from 'nanoid'
export const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890')

export function ensure<T>(
  value: T | null | undefined,
  argName?: string,
  message: string = 'Missing required argument',
): T {
  if (value == null) {
    const errorMessage = argName ? `${message}: ${argName}` : message
    throw new Error(errorMessage)
  }
  return value
}

export function toOrdinal(num: number): string {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = num % 100
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0])
}
