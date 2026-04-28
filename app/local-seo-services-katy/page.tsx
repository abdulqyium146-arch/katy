import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTABanner from '@/components/CTABanner'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Local SEO Services Katy TX | Local Search Optimization',
  description:
    'Expert local SEO services in Katy, TX. Google Maps ranking, GBP optimization, citations & more. Most clients rank in 60-90 days.',
  alternates: { canonical: 'https://localseoexpertskaty.com/local-seo-services-katy/' },
  openGraph: {
    title: 'Local SEO Services Katy TX | Local Search Optimization',
    description: 'Expert local SEO services in Katy, TX. Google Maps ranking, GBP optimization, citations & more.',
    url: 'https://localseoexpertskaty.com/local-seo-services-katy/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services Katy TX',
    description: 'Expert local SEO services in Katy, TX. Google Maps ranking, GBP optimization, citations & more.',
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Local SEO Services Katy', href: '/local-seo-services-katy' },
]

const services = [
  {
    id: 'gbp',
    icon: Award,
    title: 'Google Business Profile Optimization',
    description:
      "Your Google Business Profile is the single most important factor in local search rankings — and most Katy businesses have it set up wrong. I audit every field: business categories, service areas, attributes, hours, Q&A, photos, and posts. The wrong primary category alone can cost you dozens of ranking positions. After optimization, your GBP sends the exact signals Google needs to place you in the Map Pack for searches in Katy, TX and surrounding Fort Bend County.",
  },
  {
    id: 'citations',
    icon: CheckCircle,
    title: 'Local Citation Building & Cleanup',
    description:
      'Inconsistent NAP data across directories is one of the fastest ways to hurt your local rankings. I build new citations on the 50+ directories that matter most for Katy businesses and clean up existing inconsistencies that send mixed signals to Google. This includes industry-specific directories for HVAC, dental, legal, restaurants, and other local business types — not just the generic ones every agency builds.',
  },
  {
    id: 'on-page',
    icon: TrendingUp,
    title: 'On-Page Local SEO',
    description:
      "Your website needs to tell Google's algorithm exactly where you are and what you serve. I optimize your homepage and service pages with proper schema markup, geo-targeted title tags, local content signals, and internal linking structure. Most Katy business websites I audit are missing at least 5 critical on-page signals. Fixing them typically takes 2-3 weeks and produces movement within 30-45 days — sometimes faster.",
  },
  {
    id: 'links',
    icon: TrendingUp,
    title: 'Local Link Building',
    description:
      "Links from other Katy and Fort Bend County websites tell Google your business has real local authority. I build these through legitimate outreach: local business associations, Fort Bend Chamber of Commerce listings, Katy-area news sites, and industry partners. This isn't buying links — it's earning them from the local sources Google actually trusts for Map Pack rankings.",
  },
  {
    id: 'reviews',
    icon: Users,
    title: 'Review Generation & Management',
    description:
      "Google reviews are a direct Map Pack ranking factor. Beyond rankings, they're what converts a searcher into a customer. I set up a repeatable system to generate reviews from your actual Katy customers — without violating Google's guidelines. Most clients double their review count within 90 days using the system I build for them. I also monitor and help craft responses that reinforce your local authority.",
  },
]

const quickFacts = [
  { value: '60-90 days', label: 'Average ranking timeline' },
  { value: '47+', label: 'Katy-area businesses served' },
  { value: '60+', label: 'GBP profiles optimized' },
  { value: 'Top 3', label: 'Average Map Pack result' },
]

export default function LocalSeoServicesPage() {
  const serviceSchema = generateServiceSchema(
    'Local SEO Services Katy TX',
    'Expert local SEO services for Katy, TX businesses: Google Business Profile optimization, local citation building, on-page SEO, local link building, and review management.',
    'https://localseoexpertskaty.com/local-seo-services-katy/'
  )
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://localseoexpertskaty.com/' },
    { name: 'Local SEO Services Katy', url: 'https://localseoexpertskaty.com/local-seo-services-katy/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />

          {/* Direct Answer Block */}
          <section className="direct-answer">
            <p className="text-text-main text-base leading-relaxed">
              <strong>Local SEO services</strong> are targeted optimization strategies that help
              your business show up on Google Maps and in local search results when customers
              in Katy, TX search for what you offer. Unlike general SEO, these services focus on
              the signals Google uses to rank local businesses — your Google Business Profile,
              local citations, reviews, and geo-targeted website content.
            </p>
          </section>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mt-8 mb-5 leading-tight">
            Local SEO Services in Katy, TX
          </h1>

          <p className="text-text-main text-base leading-relaxed mb-4">
            Local SEO services for Katy, TX businesses are what I do — not as part of a broader
            digital marketing menu, but as my entire focus. That specialization matters. The
            search landscape in Fort Bend County is different from Sugar Land, which is different
            from central Houston. I know which categories are over-saturated in Katy, where the
            citation gaps are, and how competitive the Map Pack is for your specific industry.
          </p>
          <p className="text-text-main text-base leading-relaxed mb-10">
            Most clients who come to me have tried generic agencies and gotten generic results.
            When your whole business depends on showing up for searches in a 10-mile radius,
            you need someone who works that exact geography every day.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-slate-50 border-y border-border py-10 mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl text-primary font-bold text-center mb-6">
              Quick Facts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-white border border-border rounded-xl p-4 text-center shadow-card">
                  <p className="font-serif text-2xl text-accent font-bold">{fact.value}</p>
                  <p className="text-muted text-xs mt-1 leading-snug">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-8 text-center">
            What&apos;s Included in Local SEO Services
          </h2>
          <div className="flex flex-col gap-6">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="bg-white rounded-xl border border-border p-6 shadow-card scroll-mt-20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <s.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-primary text-xl mb-3">{s.title}</h3>
                    <p className="text-text-main text-base leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="quick-facts-box">
            <h3 className="font-sans font-bold text-primary text-lg mb-4 flex items-center gap-2">
              <Clock size={17} className="text-accent" />
              What to Expect — 90-Day Timeline
            </h3>
            <ul className="space-y-3">
              {[
                { period: 'Days 1-14', action: 'Full audit: GBP health, citation gaps, on-page signals, competitor analysis' },
                { period: 'Days 15-30', action: 'GBP optimization, citation corrections, and on-page fixes go live' },
                { period: 'Days 31-60', action: 'Citation building continues, review system deployed, local content updated' },
                { period: 'Days 61-90', action: 'Ranking movement visible — link building and review velocity increase' },
                { period: 'Monthly', action: 'Reporting, ongoing optimization, algorithm adaptation' },
              ].map((item) => (
                <li key={item.period} className="flex gap-3 items-start">
                  <span className="text-accent font-semibold text-sm w-24 flex-shrink-0 pt-0.5">{item.period}</span>
                  <span className="text-text-main text-sm leading-relaxed">{item.action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 text-center">
          <p className="text-muted text-sm">
            Also explore:{' '}
            <Link href="/google-maps-seo-houston" className="text-accent hover:underline">Google Maps SEO Houston &amp; Katy</Link>
            {' '}|{' '}
            <Link href="/local-seo-expert-katy" className="text-accent hover:underline">About the Local SEO Expert</Link>
            {' '}|{' '}
            <Link href="/contact" className="text-accent hover:underline">Get a Free Audit</Link>
          </p>
        </div>
      </div>

      <CTABanner
        headline="Let's get your Katy business into the Map Pack"
        subtext="Free local SEO audit — I'll review your GBP, rankings, and competitors and tell you what needs fixing."
        buttonText="Request Your Free Audit"
        buttonHref="/contact"
      />
    </>
  )
}
