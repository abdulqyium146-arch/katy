import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from '@/lib/schema'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://localseoexpertskaty.com'),
  title: {
    default: 'Local SEO Expert Katy TX | #1 Katy Local SEO Specialist',
    template: '%s | Local SEO Experts Katy',
  },
  description:
    "Katy's trusted local SEO expert. Rank higher on Google Maps & local search. Free audit for Katy, TX businesses. 90-day results guarantee.",
  openGraph: {
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
