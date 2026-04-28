import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Compass, Star, AlertTriangle, CheckCircle } from 'lucide-react'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTABanner from '@/components/CTABanner'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Google Maps SEO Houston & Katy TX | Maps Ranking Expert',
  description:
    'Rank higher on Google Maps in Houston & Katy, TX. Expert Maps SEO — GBP optimization, local citations, proximity signals. Free audit available.',
  alternates: { canonical: 'https://localseoexpertskaty.com/google-maps-seo-houston/' },
  openGraph: {
    title: 'Google Maps SEO Houston & Katy TX | Maps Ranking Expert',
    description:
      'Rank higher on Google Maps in Houston & Katy, TX. Expert Maps SEO — GBP optimization, local citations, proximity signals. Free audit available.',
    url: 'https://localseoexpertskaty.com/google-maps-seo-houston/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Maps SEO Houston & Katy TX',
    description: 'Rank higher on Google Maps in Houston & Katy, TX. Expert Maps SEO — free audit available.',
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Google Maps SEO Houston', href: '/google-maps-seo-houston' },
]

const rankingFactors = [
  {
    icon: Search,
    title: 'Relevance',
    description:
      "Relevance is about how well your Google Business Profile matches what the customer searched for. Google reads your business categories, services listed, GBP description, and website content to determine relevance. A Katy HVAC company that only has 'Air Conditioning Repair' in its profile will lose to a competitor who also lists heating, duct cleaning, and indoor air quality. Relevance optimization means matching your profile language to the exact search terms your customers use — including seasonal Katy-specific searches like 'AC repair Cinco Ranch' every summer.",
  },
  {
    icon: Compass,
    title: 'Distance',
    description:
      "Distance is the proximity between your business location and where the searcher is. You can't move your physical address — but you can optimize your service area settings, ensure your pin is dropped accurately, and build local content signals that tell Google you actively serve specific Katy zip codes. For businesses serving the I-10 corridor from Katy to west Houston, proper service area configuration is critical. Many businesses serving all of Fort Bend County are invisible for searches 8 miles from their address simply because their GBP service area is set up wrong.",
  },
  {
    icon: Star,
    title: 'Prominence',
    description:
      "Prominence is Google's assessment of how well-known and trusted your business is — both online and offline. This is driven by your review count and rating, the number of quality citations pointing to your business, links from other local Katy websites, and your domain authority. A business with 80 reviews and 4.8 stars almost always outranks a competitor with 12 reviews and 4.9 stars. Prominence takes the longest to build but it's the most durable ranking signal. Once you have it, competitors can't easily take it from you.",
  },
]

const commonProblems = [
  'Incomplete or missing Google Business Profile — over 60% of Katy businesses have at least one critical field empty',
  'Wrong primary business category — this single mistake can cost 30+ ranking positions',
  'Duplicate GBP listings from old addresses or previous owners that split your ranking signals',
  'Inconsistent NAP data — different phone numbers or addresses across directories confuse Google',
  'Zero or very few Google reviews compared to top-ranking competitors in Katy',
  'No local content on the website — generic copy with no Katy, TX or Fort Bend County signals',
  'Service area set to the entire United States instead of the specific areas around Katy',
  'GBP profile using stock photos instead of real location and staff photos',
]

const actions = [
  'Complete GBP audit — every field, category, attribute, and service entry reviewed',
  'Fix or claim duplicate listings that are diluting your ranking signals',
  'Correct your service area to match where you actually get calls in Katy and surrounding areas',
  'Build citations on the 50+ directories that carry the most weight for Google Maps in Texas',
  'Implement a systematic review generation process using your existing Katy customers',
  'Add local schema markup to your website with geo coordinates and service area data',
  'Create geo-targeted content that signals Fort Bend County and Katy TX relevance',
  'Build local links from Katy-area organizations, chambers, and industry directories',
  'Set up monthly rank tracking so you can see exactly which keywords are moving',
]

export default function GoogleMapsSeoPage() {
  const serviceSchema = generateServiceSchema(
    'Google Maps SEO Houston & Katy TX',
    'Expert Google Maps SEO services for Houston and Katy, TX businesses. Improve your Google Maps ranking through GBP optimization, local citations, proximity signals, and review management.',
    'https://localseoexpertskaty.com/google-maps-seo-houston/'
  )
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://localseoexpertskaty.com/' },
    { name: 'Google Maps SEO Houston', url: 'https://localseoexpertskaty.com/google-maps-seo-houston/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />

          <section className="direct-answer">
            <p className="text-text-main text-base leading-relaxed">
              <strong>Google Maps SEO</strong> is the process of optimizing your Google Business
              Profile and local online presence so your business appears in the Map Pack — the top
              3 results shown above organic listings on Google. For Houston and Katy, TX
              businesses, Google Maps ranking is determined by three factors: relevance to the
              search query, distance from the searcher, and the overall prominence of your
              business online.
            </p>
          </section>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mt-8 mb-6 leading-tight">
            Google Maps SEO for Houston &amp; Katy Area Businesses
          </h1>

          <p className="text-text-main text-base leading-relaxed mb-4">
            Google Maps SEO for the Houston and Katy, TX market is one of the most competitive
            local search environments in Texas — and one of the most valuable. When someone
            searches &ldquo;HVAC near Katy TX&rdquo; or &ldquo;dentist Cinco Ranch&rdquo; from
            their phone on the I-10, they&apos;re clicking one of three businesses in the local
            pack. My job is to make sure that business is yours.
          </p>
          <p className="text-text-main text-base leading-relaxed mb-10">
            I&apos;ve ranked over 47 businesses in the Katy and greater Houston area on Google
            Maps across industries including HVAC, dental, legal, restaurants, and real estate.
            The same algorithm controls all of them — and it comes down to three things.
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-6">
            The 3 Factors Google Uses to Rank on Maps
          </h2>

          <div className="flex flex-col gap-6 mb-14">
            {rankingFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-xl border border-border p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <factor.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-primary text-xl mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-text-main text-base leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-4">
            Why Houston &amp; Katy Businesses Struggle on Maps
          </h2>
          <p className="text-text-main text-base leading-relaxed mb-6">
            Most businesses that come to me aren&apos;t doing anything malicious — they just have
            common, fixable mistakes that Google quietly punishes. Here&apos;s what I find in
            nearly every audit for a Katy or Houston-area business:
          </p>

          <ul className="mb-12 space-y-3">
            {commonProblems.map((problem) => (
              <li key={problem} className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-text-main text-sm leading-relaxed">{problem}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-4">
            What I Do to Rank You in the Local 3-Pack
          </h2>
          <p className="text-text-main text-base leading-relaxed mb-6">
            Every engagement follows a structured process built around the specific ranking factors
            that move results in Katy, TX and the Greater Houston area:
          </p>

          <ul className="mb-12 space-y-3">
            {actions.map((action) => (
              <li key={action} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-trust flex-shrink-0 mt-0.5" />
                <span className="text-text-main text-sm leading-relaxed">{action}</span>
              </li>
            ))}
          </ul>

          <div className="quick-facts-box mb-14">
            <h3 className="font-sans font-bold text-primary text-lg mb-3">
              Google Maps SEO vs. Regular SEO — What&apos;s Different?
            </h3>
            <p className="text-text-main text-sm leading-relaxed mb-3">
              Regular website SEO targets organic rankings — the blue links below the map. Google
              Maps SEO specifically targets the Map Pack, which appears above those organic
              results and is driven by different signals.
            </p>
            <p className="text-text-main text-sm leading-relaxed">
              Map Pack rankings require Google Business Profile signals, local citations, and
              review velocity. Organic rankings require content, backlinks, and technical SEO.
              Both matter — but for local businesses in Katy, TX, the Map Pack drives 3-5x more
              calls than organic listings.
            </p>
          </div>

          <p className="text-muted text-sm text-center pb-10">
            Related:{' '}
            <Link href="/local-seo-services-katy" className="text-accent hover:underline">
              Local SEO Services Katy TX
            </Link>{' '}
            |{' '}
            <Link href="/contact" className="text-accent hover:underline">
              Free Google Maps SEO Audit
            </Link>
          </p>
        </div>
      </div>

      <CTABanner
        headline="Find out why your competitors outrank you on Google Maps"
        subtext="Free Maps SEO audit — I'll show you exactly what's holding your Katy business back and how long it'll take to fix."
        buttonText="Get a Free Maps SEO Audit"
        buttonHref="/contact"
      />
    </>
  )
}
