import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local SEO Blog for Katy TX Businesses | Tips & Guides',
  description:
    'Local SEO tips, Google Maps strategies, and GBP guides for Katy, TX business owners. Written by a Katy-based SEO specialist.',
  alternates: { canonical: 'https://localseoexpertskaty.com/blog/' },
  openGraph: {
    title: 'Local SEO Blog for Katy TX Businesses | Tips & Guides',
    description: 'Local SEO tips, Google Maps strategies, and GBP guides for Katy, TX business owners.',
    url: 'https://localseoexpertskaty.com/blog/',
    siteName: 'Local SEO Experts Katy',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Blog for Katy TX Businesses',
    description: 'Local SEO tips, Google Maps strategies, and GBP guides for Katy, TX business owners.',
  },
}

const posts = [
  {
    slug: 'what-is-local-seo-katy-tx',
    title: 'What Is Local SEO? A Guide for Katy, TX Business Owners',
    excerpt:
      "Local SEO is how your Katy business shows up when nearby customers search on Google — and it's completely different from regular website SEO. This guide breaks down exactly what it is, why it matters, and what it takes to rank in the local 3-pack.",
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Local SEO Basics',
    live: true,
  },
  {
    slug: 'rank-google-maps-katy-tx',
    title: 'How to Rank on Google Maps in Katy, TX (2025 Guide)',
    excerpt:
      'A step-by-step breakdown of the Google Maps ranking process for Katy businesses — from GBP setup to citation building to review velocity. What the algorithm actually responds to in Fort Bend County.',
    date: '2025-02-03',
    readTime: '10 min read',
    category: 'Google Maps SEO',
    live: false,
  },
  {
    slug: 'gbp-optimization-katy',
    title: 'Google Business Profile Optimization Checklist for Katy Businesses',
    excerpt:
      "A complete 22-point GBP checklist built for Katy, TX businesses. Most profiles I audit are missing at least 5 of these — and those gaps directly cost you Map Pack rankings. Go through this before anything else.",
    date: '2025-03-10',
    readTime: '6 min read',
    category: 'GBP Optimization',
    live: false,
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted py-3 mb-2">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li className="text-border">/</li>
            <li className="text-text-main font-medium" aria-current="page">Blog</li>
          </ol>
        </nav>

        <div className="mb-10">
          <span className="section-label">Local SEO Insights</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold leading-tight mb-4">
            Local SEO Tips for Katy, TX Business Owners
          </h1>
          <p className="text-muted text-base max-w-xl leading-relaxed">
            Practical guides on Google Maps SEO, Google Business Profile optimization, and local
            search strategy — written for Katy businesses, not a generic national audience.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                {!post.live && (
                  <span className="text-xs text-muted bg-slate-100 px-2.5 py-1 rounded-full">
                    Coming soon
                  </span>
                )}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-primary font-bold mb-3 leading-snug">
                {post.live ? (
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                ) : (
                  post.title
                )}
              </h2>

              <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-muted text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />{formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />{post.readTime}
                  </span>
                </div>
                {post.live && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-slate-50 border border-border rounded-xl p-6 text-center">
          <p className="text-text-main text-base font-semibold mb-2">
            Skip the guides — get a personalized audit instead
          </p>
          <p className="text-muted text-sm mb-4">
            A free local SEO audit tells you exactly what&apos;s wrong with your Katy
            business&apos;s Google presence. No generic advice — your specific gaps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Free Audit
          </Link>
        </div>
      </div>
    </div>
  )
}
