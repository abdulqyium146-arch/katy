import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, BarChart2, TrendingUp } from 'lucide-react'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import LocalAreaSection from '@/components/LocalAreaSection'
import { generateLocalBusinessSchema, generateFAQSchema, generateWebSiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Local SEO Expert Katy TX | #1 Katy Local SEO Specialist',
  description:
    "Katy's trusted local SEO expert. Rank higher on Google Maps & local search. Free audit for Katy, TX businesses. Results in 60-90 days.",
  alternates: { canonical: 'https://localseoexpertskaty.com/' },
  openGraph: {
    title: 'Local SEO Expert Katy TX | #1 Katy Local SEO Specialist',
    description:
      "Katy's trusted local SEO expert. Rank higher on Google Maps & local search. Free audit for Katy, TX businesses.",
    url: 'https://localseoexpertskaty.com/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Local SEO Expert Katy TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Expert Katy TX | #1 Katy Local SEO Specialist',
    description: "Katy's trusted local SEO expert. Rank higher on Google Maps & local search.",
  },
}

const services = [
  {
    icon: MapPin,
    title: 'Google Business Profile Optimization',
    description:
      'Your GBP is your single most powerful ranking asset. I optimize every field, category, and post so Google puts you in front of Katy customers who are ready to buy — not just browse.',
    href: '/local-seo-services-katy#gbp',
  },
  {
    icon: BarChart2,
    title: 'Local Citation Building',
    description:
      'Consistent NAP data across 50+ directories signals legitimacy to Google. I build and clean citations that stick — and specifically target the Fort Bend County directories that matter.',
    href: '/local-seo-services-katy#citations',
  },
  {
    icon: TrendingUp,
    title: 'Google Maps Ranking',
    description:
      'Getting into the local 3-pack in Katy, TX takes more than a filled-out profile. I work the proximity signals, review velocity, and on-page factors that actually move Map Pack rankings.',
    href: '/google-maps-seo-houston',
  },
]

const testimonials = [
  {
    quote:
      "Before this we were invisible on Google. In 8 weeks we ranked #1 for 'bakery near Katy TX' and Cinco Ranch bakery. The phone started ringing more than we could handle during the holiday rush.",
    name: 'Sarah M.',
    business: 'Cinco Ranch Bakery',
    location: 'Katy, TX',
    stars: 5 as const,
  },
  {
    quote:
      "As an HVAC contractor on Mason Road, summer is everything. In 60 days my Google calls tripled — from 3-4 per week to 10-15. The ROI paid for a full year of service in one month.",
    name: 'Jason T.',
    business: 'HVAC Contractor',
    location: 'Mason Road, Katy TX',
    stars: 5 as const,
  },
  {
    quote:
      'New patient inquiries from Google are up 40% since we optimized our Google Business Profile. We went from page 2 to the Map Pack for searches near Katy Mills. Worth every penny.',
    name: 'Dr. Priya K.',
    business: 'Dental Clinic',
    location: 'Katy Mills area, TX',
    stars: 5 as const,
  },
]

const faqs = [
  {
    question: 'What is local SEO and why does my Katy business need it?',
    answer:
      "Local SEO is the process of optimizing your online presence so your business shows up when nearby customers search for your services on Google. For Katy, TX businesses, that means appearing in the Google Map Pack — the top 3 local results — before your competitors do. Without it, you're invisible to customers who are ready to spend money within a few miles of your front door.",
  },
  {
    question: 'How long does it take to rank on Google Maps in Katy, TX?',
    answer:
      "Most Katy businesses see meaningful movement in 60-90 days after we start optimizing. The timeline depends on your industry competition, current GBP health, and how many reviews you have. HVAC, dental, and legal niches in Katy can be competitive — but with the right strategy, the Map Pack is achievable. I can show you what results have looked like for similar businesses after 90 days.",
  },
  {
    question: "What's included in your local SEO services?",
    answer:
      "Every engagement includes Google Business Profile optimization, local citation building, on-page local SEO fixes, review generation strategy, and monthly ranking reports. Your plan is built around what your specific Katy business actually needs — not a generic template. Most clients also get a competitor gap analysis in the first 30 days so we know exactly what's holding you back.",
  },
  {
    question: 'Do you work with businesses outside Katy, TX?',
    answer:
      "I primarily serve Katy, Cinco Ranch, Sugar Land, Richmond, and Fulshear businesses in Fort Bend County and West Houston. I stay focused on this geography because deep local knowledge produces better results than spreading thin across 50 markets. If you're within roughly 30 miles of Katy, TX 77494, chances are I can help.",
  },
  {
    question: 'How is local SEO different from regular SEO?',
    answer:
      "Regular SEO targets broad national rankings for informational searches. Local SEO is specifically about ranking in Google's Map Pack and local organic results for people searching near you — 'dentist near Katy TX' or 'HVAC company Cinco Ranch.' It requires entirely different tactics: Google Business Profile optimization, local citations, review management, and proximity signals that national SEO doesn't touch.",
  },
]

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema()
  const faqSchema = generateFAQSchema(faqs)
  const webSiteSchema = generateWebSiteSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      <Hero />

      {/* Direct Answer Block — AEO / Featured Snippet */}
      <section id="what-is-local-seo" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="direct-answer">
          <p className="text-text-main text-base leading-relaxed">
            <strong>Local SEO for Katy, TX businesses</strong> means optimizing your Google
            Business Profile, website, and local citations so you appear when nearby customers
            search for your services. It&apos;s the difference between being found on Google
            Maps or being invisible while your competitors take your customers — and it&apos;s
            measurable within 60-90 days.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="section-label">What I Do</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold">
            Local SEO Services Built for Katy Businesses
          </h2>
          <p className="text-muted text-base mt-3 max-w-xl mx-auto">
            Three core services that move the needle. No bloated retainers, no busywork.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Why Katy */}
      <section className="bg-slate-50 border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">Why It Matters</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold mb-5 leading-tight">
                Why Katy Businesses Can&apos;t Ignore Local SEO in 2025
              </h2>
              <p className="text-text-main text-base leading-relaxed mb-4">
                Katy, TX has exploded. The I-10 corridor from Mason Road out to Cinco Ranch is one
                of the fastest-growing business corridors in Greater Houston — which means more
                competition for every search your potential customers make.
              </p>
              <p className="text-text-main text-base leading-relaxed mb-4">
                When someone near Katy Mills Mall searches for an HVAC tech, dentist, or
                restaurant on their phone, they click one of three businesses in the Map Pack.
                That&apos;s it. Everyone else goes unnoticed.
              </p>
              <p className="text-text-main text-base leading-relaxed mb-4">
                Fort Bend County added over 30,000 residents in the last three years. Those new
                Fulshear and Cinco Ranch families are searching for every service you offer —
                and they don&apos;t know your business exists yet. Local SEO is how you get
                found first, before they build loyalty with a competitor.
              </p>
              <p className="text-text-main text-base leading-relaxed">
                Businesses along FM 1463, the Grand Parkway, and off Mason Road all compete in
                the same local pack. The ones showing up aren&apos;t necessarily better —
                they&apos;re just better optimized.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '76%', label: 'of local searches result in a store visit within 24 hours' },
                { stat: '28%', label: 'of local searches result in a purchase' },
                { stat: '44%', label: 'of all clicks go to the Google 3-Pack' },
                { stat: '60-90', label: 'days average to see results in Katy, TX' },
              ].map((item) => (
                <div key={item.stat} className="bg-white border border-border rounded-xl p-5 shadow-card">
                  <p className="font-serif text-3xl text-accent font-bold mb-1">{item.stat}</p>
                  <p className="text-muted text-xs leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="section-label">Client Results</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold">
            Real Katy Businesses. Real Results.
          </h2>
          <p className="text-muted text-base mt-3 max-w-lg mx-auto">
            These are Katy-area businesses that show up in the Map Pack today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-6">
          <Link href="/contact" className="text-accent hover:underline font-medium">
            Get results like these for your Katy business →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-y border-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-label">FAQ</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-bold">
              Common Questions from Katy Business Owners
            </h2>
          </div>
          <FAQAccordion items={faqs} />
          <p className="text-center text-muted text-sm mt-8">
            More questions?{' '}
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Ask me directly — no sales call required.
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to rank #1 in Katy, TX?"
        subtext="Get a free local SEO audit — I'll tell you exactly where you stand and what it takes to get into the Map Pack."
        buttonText="Get Your Free Audit"
        buttonHref="/contact"
      />

      <LocalAreaSection />
    </>
  )
}
