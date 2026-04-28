export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://localseoexpertskaty.com/#business',
    name: 'Local SEO Experts Katy',
    description:
      'Local SEO specialist serving Katy, TX and Greater Houston. Google Maps ranking, GBP optimization, local citation building, and local search services.',
    url: 'https://localseoexpertskaty.com',
    telephone: '+18320000000',
    email: 'info@localseoexpertskaty.com',
    priceRange: '$$',
    image: 'https://localseoexpertskaty.com/og-home.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Katy',
      addressRegion: 'TX',
      postalCode: '77494',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.7858,
      longitude: -95.8245,
    },
    areaServed: [
      { '@type': 'City', name: 'Katy', sameAs: 'https://en.wikipedia.org/wiki/Katy,_Texas' },
      { '@type': 'City', name: 'Cinco Ranch' },
      { '@type': 'City', name: 'Sugar Land' },
      { '@type': 'City', name: 'Richmond' },
      { '@type': 'City', name: 'Fulshear' },
      { '@type': 'City', name: 'Missouri City' },
      { '@type': 'City', name: 'Houston' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Local SEO Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local Citation Building' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Maps SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Page Local SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review Generation & Management' } },
      ],
    },
    sameAs: ['https://www.linkedin.com/company/local-seo-experts-katy'],
  }
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Local SEO Experts Katy',
      url: 'https://localseoexpertskaty.com',
    },
    areaServed: [
      { '@type': 'City', name: 'Katy' },
      { '@type': 'City', name: 'Cinco Ranch' },
      { '@type': 'City', name: 'Sugar Land' },
      { '@type': 'City', name: 'Richmond' },
      { '@type': 'City', name: 'Houston' },
    ],
    serviceType: 'Local SEO',
  }
}

export function generatePersonSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://localseoexpertskaty.com/local-seo-expert-katy/#person',
    name: 'Local SEO Expert',
    jobTitle: 'Local SEO Specialist',
    description:
      'A dedicated local SEO specialist based in Katy, TX with 6+ years of experience ranking local businesses on Google Maps and local search.',
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'Local SEO Experts Katy',
      url: 'https://localseoexpertskaty.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Katy',
      addressRegion: 'TX',
      postalCode: '77494',
      addressCountry: 'US',
    },
    url: 'https://localseoexpertskaty.com/local-seo-expert-katy',
    knowsAbout: [
      'Local SEO',
      'Google Business Profile Optimization',
      'Google Maps SEO',
      'Local Citation Building',
      'On-Page SEO',
      'Review Generation',
    ],
  }
}

export function generateArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  url: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    url,
    author: {
      '@type': 'Person',
      name: 'Local SEO Expert',
      url: 'https://localseoexpertskaty.com/local-seo-expert-katy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Local SEO Experts Katy',
      url: 'https://localseoexpertskaty.com',
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: [
      { '@type': 'Thing', name: 'Local SEO' },
      { '@type': 'Thing', name: 'Google Business Profile' },
      { '@type': 'Place', name: 'Katy, Texas' },
    ],
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateWebSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://localseoexpertskaty.com/#website',
    name: 'Local SEO Experts Katy',
    url: 'https://localseoexpertskaty.com',
    description: 'Local SEO expert serving Katy, TX and Greater Houston area businesses.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://localseoexpertskaty.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateContactPageSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Local SEO Experts Katy — Free Audit',
    url: 'https://localseoexpertskaty.com/contact/',
    description:
      'Request a free local SEO audit for your Katy, TX business. No commitment. Response within 48 hours.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Local SEO Experts Katy',
      telephone: '+18320000000',
      email: 'info@localseoexpertskaty.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katy',
        addressRegion: 'TX',
        postalCode: '77494',
        addressCountry: 'US',
      },
    },
  }
}
