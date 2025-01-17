import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://inxtruc.com',
      priority: 1,
    },
    {
      url: 'https://inxtruc.com/airbnb',
      priority: 0.9,
    },
    {
      url: 'https://inxtruc.com/booking',
      priority: 0.9,
    },
    {
      url: 'https://inxtruc.com/families',
      priority: 0.9,
    },
  ]
}
