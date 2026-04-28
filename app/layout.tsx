import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { generateWebSiteSchema } from '@/lib/schema'

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
    "Katy's trusted local SEO expert. Rank higher on Google Maps & local search. Free audit for Katy, TX businesses. Results in 60-90 days.",
  openGraph: {
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const webSiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
