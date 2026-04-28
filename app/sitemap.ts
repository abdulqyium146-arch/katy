import type { MetadataRoute } from 'next'

const BASE = 'https://localseoexpertskaty.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/local-seo-services-katy/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/google-maps-seo-houston/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/local-seo-expert-katy/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE}/blog/what-is-local-seo-katy-tx/`, lastModified: new Date('2025-01-15'), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
