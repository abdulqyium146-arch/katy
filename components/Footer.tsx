import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Local SEO Services Katy', href: '/local-seo-services-katy' },
  { label: 'Google Maps SEO Houston', href: '/google-maps-seo-houston' },
  { label: 'Local SEO Expert Katy', href: '/local-seo-expert-katy' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact & Free Audit', href: '/contact' },
]

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer
      className={`bg-primary text-slate-300 ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Local SEO Experts Katy" />
      <meta itemProp="url" content="https://localseoexpertskaty.com" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-serif text-xl text-white font-bold block mb-3">
              LocalSEOExpertsKaty
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A dedicated local SEO specialist serving Katy, TX and the Greater Houston area. Not
              an agency — a specialist who knows this market inside out.
            </p>
            <p className="text-xs text-slate-500">
              Serving Fort Bend County &amp; West Houston since 2018.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-trust mt-0.5 flex-shrink-0" />
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                  className="text-slate-400 text-sm"
                >
                  <span itemProp="addressLocality">Katy</span>,{' '}
                  <span itemProp="addressRegion">TX</span>{' '}
                  <span itemProp="postalCode">77494</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-trust flex-shrink-0" />
                <a
                  href="tel:+18320000000"
                  itemProp="telephone"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  (832) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-trust flex-shrink-0" />
                <a
                  href="mailto:info@localseoexpertskaty.com"
                  itemProp="email"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  info@localseoexpertskaty.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Local SEO Experts Katy. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Local SEO Services in Katy, TX &mdash; Fort Bend County
          </p>
        </div>
      </div>
    </footer>
  )
}
