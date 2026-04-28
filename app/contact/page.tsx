import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Free Local SEO Audit Katy TX | Contact | Get Started',
  description:
    'Request your free local SEO audit for your Katy, TX business. No commitment. Clear picture of your Google rankings in 48 hours.',
  alternates: { canonical: 'https://localseoexpertskaty.com/contact/' },
  openGraph: {
    title: 'Free Local SEO Audit Katy TX | Contact | Get Started',
    description: 'Request your free local SEO audit for your Katy, TX business. No commitment.',
    url: 'https://localseoexpertskaty.com/contact/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Local SEO Audit Katy TX | Contact',
    description: 'Request your free local SEO audit for your Katy, TX business. No commitment.',
  },
}

export default function ContactPage() {
  const contactSchema = generateContactPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://localseoexpertskaty.com/' },
    { name: 'Contact', url: 'https://localseoexpertskaty.com/contact/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactForm />
    </>
  )
}
