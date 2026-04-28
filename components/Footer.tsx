import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react'
import { generateLocalBusinessSchema } from '@/lib/schema'

const footerSchema = generateLocalBusinessSchema()

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer role="contentinfo" aria-label="Site footer" className={`bg-primary text-slate-300 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COL 1 — Brand + Trust */}
          <div>
            <Link href="/" className="font-serif text-xl text-white font-bold block mb-2">
              Local SEO Experts Katy
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Katy&apos;s dedicated local SEO specialist — not an agency, a specialist.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-white text-sm font-semibold ml-0.5">4.9/5</span>
            </div>
            <p className="text-slate-500 text-xs mb-3">Based on 47 Google reviews</p>
            <a
              href="https://g.page/r/localseoexpertskaty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-xs hover:underline"
            >
              See Our Reviews →
            </a>

            {/* Cert badges */}
            <div className="flex gap-2 mt-4">
              <span className="px-2 py-1 bg-white/10 text-xs text-slate-300 rounded border border-white/20">
                Google Partner
              </span>
              <span className="px-2 py-1 bg-white/10 text-xs text-slate-300 rounded border border-white/20">
                Local SEO Certified
              </span>
            </div>
          </div>

          {/* COL 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Local SEO Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Local SEO Services Katy', href: '/local-seo-services-katy' },
                { label: 'Google Maps SEO Houston', href: '/google-maps-seo-houston' },
                { label: 'Google Business Profile Optimization', href: '/local-seo-services-katy#gbp' },
                { label: 'Local Citation Building', href: '/local-seo-services-katy#citations' },
                { label: 'Review Management Katy TX', href: '/local-seo-services-katy#reviews' },
                { label: 'Local Link Building', href: '/local-seo-services-katy#links' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Quick Links + Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                { label: 'About the Local SEO Expert', href: '/local-seo-expert-katy' },
                { label: 'Blog & Local SEO Resources', href: '/blog' },
                { label: 'Get Free Local SEO Audit', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Areas Served
            </h4>
            <address className="not-italic">
              <p className="text-slate-400 text-xs leading-relaxed">
                Katy, TX &nbsp;|&nbsp; Cinco Ranch &nbsp;|&nbsp; Sugar Land
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">
                Richmond, TX &nbsp;|&nbsp; Fulshear &nbsp;|&nbsp; Missouri City
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mt-1">
                West Houston &nbsp;|&nbsp; Fort Bend County
              </p>
            </address>
          </div>

          {/* COL 4 — NAP + Hours + CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>

            <address
              className="not-italic flex flex-col gap-3 mb-5"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content="Local SEO Experts Katy" />
              <meta itemProp="url" content="https://localseoexpertskaty.com" />

              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-trust mt-0.5 flex-shrink-0" />
                <span
                  className="text-slate-400 text-sm"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="name" className="text-white font-medium block">
                    Local SEO Experts Katy
                  </span>
                  <span itemProp="addressLocality">Katy</span>,{' '}
                  <span itemProp="addressRegion">TX</span>{' '}
                  <span itemProp="postalCode">77494</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-trust flex-shrink-0" />
                <a
                  href="tel:+18320000000"
                  itemProp="telephone"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  (832) 000-0000
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-trust flex-shrink-0" />
                <a
                  href="mailto:info@localseoexpertskaty.com"
                  itemProp="email"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  info@localseoexpertskaty.com
                </a>
              </div>
            </address>

            <div className="flex items-start gap-2.5 mb-5">
              <Clock size={14} className="text-trust mt-0.5 flex-shrink-0" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <p>Mon–Fri: 9:00 AM – 6:00 PM CST</p>
                <p>Sat: 10:00 AM – 2:00 PM CST</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <p className="text-white text-sm font-semibold mb-2">Ready to rank in Katy?</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Audit →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2025 Local SEO Experts Katy. All rights reserved.</span>
          <span className="hidden sm:block">Proudly serving Katy, TX &amp; Greater Houston</span>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
