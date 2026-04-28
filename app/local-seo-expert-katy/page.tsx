import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Users, MapPin, BarChart2, CheckCircle, Search, FileText, TrendingUp, Star } from 'lucide-react'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTABanner from '@/components/CTABanner'
import { generatePersonSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Local SEO Expert in Katy TX | About | Proven Results',
  description:
    "Meet Katy's dedicated local SEO specialist. 6+ years ranking local businesses on Google. A specialist who knows Katy, TX inside out.",
  alternates: { canonical: 'https://localseoexpertskaty.com/local-seo-expert-katy/' },
  openGraph: {
    title: 'Local SEO Expert in Katy TX | About | Proven Results',
    description: "Meet Katy's dedicated local SEO specialist. 6+ years ranking local businesses on Google.",
    url: 'https://localseoexpertskaty.com/local-seo-expert-katy/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'profile',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Expert in Katy TX | About',
    description: "Meet Katy's dedicated local SEO specialist. 6+ years ranking local businesses on Google.",
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Local SEO Expert Katy', href: '/local-seo-expert-katy' },
]

const credentials = [
  { icon: Award, stat: '6+ Years', label: 'Local SEO in Katy & Fort Bend County' },
  { icon: Users, stat: '47+', label: 'Katy-area businesses ranked on Google Maps' },
  { icon: BarChart2, stat: '60+', label: 'Google Business Profiles fully optimized' },
  { icon: MapPin, stat: 'Top 3', label: 'Average Map Pack result after 90 days' },
]

const industries = [
  'HVAC & Home Services',
  'Dental & Medical Practices',
  'Legal & Law Firms',
  'Restaurants & Food Service',
  'Real Estate & Property',
  'Auto Repair & Automotive',
  'Retail & Boutiques',
  'Fitness & Wellness',
]

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Audit',
    description:
      "Full analysis of your Google Business Profile, local citations, on-page signals, and competitor rankings in Katy's search landscape. You see exactly what's broken and what it'll take to fix it.",
  },
  {
    step: '02',
    icon: FileText,
    title: 'Strategy',
    description:
      'A specific 90-day action plan built around your Katy business — not a generic template from a national agency. Prioritized by impact, with realistic timelines.',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Optimize',
    description:
      'Execute: GBP optimization, citation building, on-page fixes, review generation system, and local link acquisition. All of it tracked with before/after baselines.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Track & Report',
    description:
      'Monthly ranking reports showing exactly where you stand in Google Maps for your target keywords in Katy and surrounding areas. No vanity metrics — just rankings and calls.',
  },
]

const resultTestimonials = [
  {
    quote:
      "Ranked #1 for 'bakery near Katy TX' in 8 weeks. The holiday rush was the busiest we've ever had — more walk-ins than we could handle.",
    name: 'Sarah M.',
    business: 'Cinco Ranch Bakery',
    location: 'Katy, TX',
  },
  {
    quote:
      'Google calls tripled in 60 days. As an HVAC contractor, summer is everything — that one summer paid for two years of service.',
    name: 'Jason T.',
    business: 'HVAC Contractor',
    location: 'Mason Road, Katy TX',
  },
  {
    quote:
      'New patient inquiries up 40% from Google in 90 days. We went from buried on page 2 to the Map Pack near Katy Mills.',
    name: 'Dr. Priya K.',
    business: 'Dental Clinic',
    location: 'Katy Mills area, TX',
  },
]

export default function LocalSeoExpertPage() {
  const personSchema = generatePersonSchema()
  const localBusinessSchema = generateLocalBusinessSchema()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://localseoexpertskaty.com/' },
    { name: 'Local SEO Expert Katy', url: 'https://localseoexpertskaty.com/local-seo-expert-katy/' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />

          <section className="direct-answer">
            <p className="text-text-main text-base leading-relaxed">
              <strong>The local SEO expert in Katy, TX</strong> behind this site is a dedicated
              local search specialist who has been ranking Fort Bend County businesses on Google
              since 2018. This is not an agency with a rotating account team — it&apos;s one
              specialist who works directly with every client and knows the Katy market at a
              granular level.
            </p>
          </section>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mt-8 mb-5 leading-tight">
            Katy&apos;s Dedicated Local SEO Expert — Not an Agency, a Specialist
          </h1>

          <div className="prose-local mb-10">
            <p>
              I&apos;ve been doing local SEO in Katy, TX for over 6 years, and this market is
              the only one I serve. That sounds like a limitation — it&apos;s actually the whole
              point. When your business depends on ranking in a specific geography, you need
              someone who knows that geography like their own backyard.
            </p>
            <p>
              I know that traffic on I-10 between Mason Road and the Grand Parkway backs up every
              weekday morning — and that people sitting in that traffic are searching for HVAC
              companies, dentists, and restaurants on their phones. I know that Cinco Ranch has
              a completely different business density than Old Katy, and that the Map Pack
              competition for &ldquo;plumber near me&rdquo; in 77494 looks nothing like 77450.
            </p>
            <p>
              Fort Bend County added over 30,000 residents in the last three years. Those are
              new customers who don&apos;t have brand loyalty yet — they&apos;re searching Google
              for everything. The businesses that show up in the Map Pack get them first.
            </p>
            <p>
              I only work with Katy-area businesses because depth beats breadth every time. A
              national agency handling 200 clients across 40 cities runs the same playbook
              everywhere. I run strategy built specifically for your market.
            </p>
          </div>

          {/* Credentials */}
          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-5">
            My Credentials &amp; Experience
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {credentials.map((c) => (
              <div key={c.label} className="bg-white border border-border rounded-xl p-5 shadow-card text-center">
                <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <c.icon size={18} className="text-accent" />
                </div>
                <p className="font-serif text-2xl text-primary font-bold">{c.stat}</p>
                <p className="text-muted text-xs mt-1 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="bg-slate-50 border border-border rounded-xl p-6 mb-10">
            <h3 className="font-sans font-bold text-primary text-lg mb-4">Industries Served in the Katy Area</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {industries.map((ind) => (
                <div key={ind} className="flex items-center gap-2 text-sm text-text-main">
                  <CheckCircle size={13} className="text-trust flex-shrink-0" />
                  {ind}
                </div>
              ))}
            </div>
            <p className="text-muted text-xs mt-4">
              Google Business Profile certified. Experienced with Google Search Console,
              Google Analytics, and local rank tracking tools.
            </p>
          </div>

          {/* Process */}
          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-5">
            My Process — How This Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white border border-border rounded-xl p-5 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif text-3xl text-accent/25 font-bold leading-none">{step.step}</span>
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <step.icon size={16} className="text-accent" />
                  </div>
                  <h3 className="font-sans font-bold text-primary text-base">{step.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Results section — anchor target for navbar */}
          <div id="results" className="scroll-mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-5">
              Results from Katy Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {resultTestimonials.map((t) => (
                <div key={t.name} className="bg-white border border-border rounded-xl p-5 shadow-card">
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-text-main text-sm italic leading-relaxed mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-muted text-xs mt-0.5">{t.business} — {t.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why only Katy */}
          <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold mb-4">
            Why I Only Focus on Katy, TX
          </h2>
          <div className="prose-local mb-12">
            <p>
              Local SEO that actually works requires knowing the territory. I&apos;ve tracked
              Google Maps rankings in this specific market long enough to know when the algorithm
              shifts, which local industries get hit hardest, and where the citation gaps are
              that most Katy businesses have never thought about.
            </p>
            <p>
              Agencies that serve 200 cities apply the same playbook everywhere. Focused
              specialization on one market for six-plus years produces better results. My clients
              don&apos;t share their results with competitors in this market — I know every major
              competitor in their Katy niche from tracking them for years.
            </p>
            <p>
              If you want someone who treats your Katy business like their only client —{' '}
              <Link href="/contact" className="text-accent hover:underline font-medium">
                let&apos;s talk.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <CTABanner
        headline="Work with Katy's dedicated local SEO specialist"
        subtext="Free audit, no pitch. I'll show you exactly where your business stands and what it'll take to rank in the local 3-pack."
        buttonText="Get a Free Local SEO Audit"
        buttonHref="/contact"
      />
    </>
  )
}
