import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, CheckCircle } from 'lucide-react'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import CTABanner from '@/components/CTABanner'
import { generateArticleSchema, generateBreadcrumbSchema, generatePersonSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'What Is Local SEO? Guide for Katy TX Business Owners',
  description:
    'Learn what local SEO is and why it matters for your Katy, TX business. Covers Google Maps, GBP, citations, and ranking factors.',
  alternates: { canonical: 'https://localseoexpertskaty.com/blog/what-is-local-seo-katy-tx/' },
  openGraph: {
    title: 'What Is Local SEO? Guide for Katy TX Business Owners',
    description: 'Learn what local SEO is and why it matters for your Katy, TX business.',
    url: 'https://localseoexpertskaty.com/blog/what-is-local-seo-katy-tx/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Local SEO? Guide for Katy TX Business Owners',
    description: 'Learn what local SEO is and why it matters for your Katy, TX business.',
  },
}

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'What Is Local SEO?', href: '/blog/what-is-local-seo-katy-tx' },
]

const publishDate = '2025-01-15'

export default function WhatIsLocalSeoPost() {
  const articleSchema = generateArticleSchema(
    'What Is Local SEO? A Plain-English Guide for Katy, TX Business Owners',
    'Learn what local SEO is and why it matters for your Katy, TX business. Covers Google Maps, GBP, citations, and local ranking factors.',
    publishDate,
    'https://localseoexpertskaty.com/blog/what-is-local-seo-katy-tx/'
  )
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://localseoexpertskaty.com/' },
    { name: 'Blog', url: 'https://localseoexpertskaty.com/blog/' },
    { name: 'What Is Local SEO?', url: 'https://localseoexpertskaty.com/blog/what-is-local-seo-katy-tx/' },
  ])
  const personSchema = generatePersonSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />

          <div className="mb-5">
            <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
              Local SEO Basics
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold leading-tight mb-5">
            What Is Local SEO? A Plain-English Guide for Katy, TX Business Owners
          </h1>

          <div className="flex items-center gap-4 text-muted text-sm mb-8 flex-wrap">
            <span className="flex items-center gap-1.5">
              <User size={13} />
              <Link href="/local-seo-expert-katy" className="hover:text-accent transition-colors">
                Local SEO Expert
              </Link>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />8 min read
            </span>
          </div>

          {/* Direct Answer — Featured Snippet Target */}
          <section className="direct-answer" id="direct-answer">
            <p className="text-text-main text-base leading-relaxed">
              <strong>Local SEO</strong> is the process of optimizing your online presence —
              primarily your Google Business Profile and website — so your business appears when
              people nearby search for your services on Google. For Katy, TX business owners,
              it means showing up in the Google Map Pack (the top 3 local results) when someone
              searches for what you offer from anywhere in Fort Bend County or the surrounding
              Greater Houston area.
            </p>
          </section>

          <div className="prose-local mt-8">
            <p>
              If you&apos;ve ever searched &ldquo;HVAC near me&rdquo; or &ldquo;dentist Katy TX&rdquo;
              on your phone, you&apos;ve seen local SEO in action. Those three businesses in the
              map section at the top of Google? They&apos;re there because of deliberate
              optimization — not luck, and not just having a nice website.
            </p>
            <p>
              This guide covers what local SEO actually is, why it matters specifically for
              Katy businesses, and what it takes to rank. No jargon, no fluff.
            </p>

            <h2>Why Local SEO Matters More Than Regular SEO for Katy Businesses</h2>
            <p>
              Regular SEO is about ranking for broad informational searches — things like
              &ldquo;how to fix an air conditioner&rdquo; or &ldquo;dental implant cost.&rdquo;
              That drives national or global traffic and takes years to see results.
            </p>
            <p>
              Local SEO targets a completely different type of search: people with buying intent
              who are physically close to you. &ldquo;AC repair Cinco Ranch TX&rdquo; or
              &ldquo;emergency dentist near Katy Mills.&rdquo; These searchers are ready to call
              or walk in — they just need to find you first.
            </p>
            <p>
              For most Katy small businesses, 70-80% of new customers come from Google local
              searches. And since <strong>76% of local searches result in a store visit within
              24 hours</strong>, ranking higher translates to real revenue — fast.
            </p>

            {/* Quick Facts */}
            <div className="quick-facts-box my-8">
              <h3 className="font-sans font-bold text-primary text-base mb-3">
                Quick Facts: Local SEO for Katy, TX Businesses
              </h3>
              <ul className="space-y-2">
                {[
                  '46% of all Google searches are looking for local information',
                  '76% of local searchers visit a business within 24 hours',
                  'The Google Map Pack gets 44% of all clicks on local search results',
                  'Most Katy businesses see ranking movement within 60-90 days',
                  'Google Business Profile is the #1 local ranking factor',
                  'Fort Bend County is one of the fastest-growing counties in Texas',
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm text-text-main">
                    <CheckCircle size={13} className="text-trust flex-shrink-0 mt-0.5" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <h2>The 4 Core Components of Local SEO</h2>
            <p>
              Local SEO isn&apos;t one thing — it&apos;s a combination of signals that Google
              weighs together. Getting all four right separates Map Pack rankings from page-2
              invisibility.
            </p>

            <h3>Google Business Profile</h3>
            <p>
              Your Google Business Profile (GBP) is the single most powerful factor in local
              search. It&apos;s the listing that appears in Google Maps and the Knowledge Panel
              when someone searches for your business or your category near Katy.
            </p>
            <p>
              The biggest mistakes I see in Katy audits: wrong primary category, no services
              listed, missing attributes, no regular posts, stock photos instead of real ones,
              and unmonitored Q&amp;A sections with incorrect information. Each sends weak
              signals to Google and costs you ranking positions.
            </p>
            <p>
              A fully optimized GBP has the right primary and secondary categories, a complete
              services list with descriptions, keyword-rich business description, regular photo
              uploads, weekly posts, and an active Q&amp;A section.
            </p>

            <h3>Local Citations &amp; NAP Consistency</h3>
            <p>
              A citation is any online mention of your business name, address, and phone number
              (NAP). Every major directory — Yelp, BBB, YellowPages, Bing Maps, Apple Maps —
              should have your exact NAP, identical to what&apos;s on your GBP.
            </p>
            <p>
              When Google crawls the web and finds inconsistencies in how your business
              information appears, it loses confidence in your data. That shows up as lower Map
              Pack rankings. I&apos;ve seen businesses jump 5-7 positions just from cleaning
              up citation inconsistencies — no other changes required.
            </p>
            <p>
              For Katy businesses specifically, there are local Texas and Fort Bend County
              directories that carry more weight than generic national ones. Those are part of
              any serious citation strategy for this market.
            </p>

            <h3>On-Page Local Signals</h3>
            <p>
              Your website needs to confirm your location and service area to Google&apos;s
              algorithm. That means &ldquo;Katy, TX&rdquo; in your title tags, properly
              structured local schema markup with your geo coordinates, a Google Maps embed,
              and content that naturally references your service areas — Cinco Ranch, Mason Road,
              the I-10 corridor, Fort Bend County.
            </p>
            <p>
              Most small business websites in Katy have generic copy that could describe any
              business anywhere in the country. That&apos;s a missed opportunity. Google wants
              to see location specificity before it trusts your GBP data and moves you up in
              the Map Pack.
            </p>

            <h3>Reviews &amp; Reputation</h3>
            <p>
              Google reviews serve two purposes: they&apos;re a direct Map Pack ranking signal,
              and they convert searchers into customers. A business with 80 Google reviews at
              4.8 stars almost always outranks a competitor with 12 reviews at 5.0 stars —
              volume and recency both matter to the algorithm.
            </p>
            <p>
              For Katy businesses, review velocity matters. Google wants to see that customers
              are actively reviewing you — not 50 reviews from two years ago. Building a
              consistent system to generate reviews from your actual customers is a core part
              of any local SEO strategy.
            </p>

            <h2>What &ldquo;Best Local SEO Near Me&rdquo; Really Means</h2>
            <p>
              When someone searches &ldquo;best local SEO near me,&rdquo; Google interprets
              that as a proximity + relevance query. It checks the searcher&apos;s GPS location,
              finds matching businesses, and ranks them by relevance, distance, and prominence.
            </p>
            <p>
              This is why you can rank for searches in Cinco Ranch even if your office is on
              Mason Road — if your GBP service area, website signals, and citations confirm
              you serve Cinco Ranch. And it&apos;s why a competitor in Fulshear might outrank
              you for Katy searches if they&apos;ve done the SEO work and you haven&apos;t.
            </p>
            <p>
              There&apos;s no single &ldquo;best&rdquo; provider — there&apos;s the one that
              produces results in your specific market. In Katy, TX, that means someone who
              understands the Fort Bend County search landscape, knows which industries are
              over-saturated, and tracks what&apos;s actually ranking.
            </p>

            <h2>How to Know If Your Katy Business Needs Local SEO</h2>
            <p>
              Here&apos;s a simple test: search for your main service + &ldquo;Katy TX&rdquo;
              on Google Maps. If you&apos;re not in the top 3 results, you&apos;re losing
              customers to whoever is. Those aren&apos;t hypothetical customers — they searched
              for exactly what you do, from exactly where you operate, and called someone else.
            </p>
            <p>Signs your Katy business needs local SEO help:</p>
            <ul>
              <li>You don&apos;t show up on Google Maps for your main service keywords</li>
              <li>You&apos;re in the Map Pack but ranking 4-7 (just outside the 3-pack)</li>
              <li>Your GBP has fewer than 20 Google reviews</li>
              <li>You&apos;ve had the same Google Business Profile for years without changes</li>
              <li>Your website has no &ldquo;Katy, TX&rdquo; in the title tags</li>
              <li>Competitors outrank you who you know are worse at the job</li>
            </ul>
            <p>
              If two or more describe your business, local SEO work is likely to produce
              measurable results within 60-90 days. The question isn&apos;t whether local SEO
              works in Katy — it&apos;s whether you&apos;re doing it or your competitors are.
            </p>
            <p>
              If you&apos;d like to see exactly where your business stands,{' '}
              <Link href="/contact" className="text-accent hover:underline font-medium">
                request a free local SEO audit
              </Link>
              . I&apos;ll pull your rankings, check your GBP, and identify your biggest gaps —
              no sales call required.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-muted text-sm mb-4 font-medium">Continue reading:</p>
            <div className="flex flex-col gap-2">
              <Link href="/local-seo-services-katy" className="text-accent hover:underline text-sm font-medium">
                → Local SEO Services for Katy, TX Businesses
              </Link>
              <Link href="/google-maps-seo-houston" className="text-accent hover:underline text-sm font-medium">
                → Google Maps SEO for Houston &amp; Katy Area
              </Link>
              <Link href="/local-seo-expert-katy" className="text-accent hover:underline text-sm font-medium">
                → About the Katy Local SEO Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTABanner
        headline="Ready to rank higher in Katy, TX?"
        subtext="Get a free local SEO audit — I'll show you exactly where you stand and what it takes to move up on Google Maps."
        buttonText="Get Your Free Audit"
        buttonHref="/contact"
      />
    </>
  )
}
