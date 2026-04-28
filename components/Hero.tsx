import Link from 'next/link'
import { Star, MapPin, Calendar, Shield } from 'lucide-react'

const trustItems = [
  { icon: Star, label: '4.9/5 Google Rating' },
  { icon: MapPin, label: '47 Businesses Ranked' },
  { icon: Calendar, label: '6+ Years Local SEO' },
  { icon: Shield, label: 'No Contracts' },
]

export default function Hero({ className = '' }: { className?: string }) {
  return (
    <section
      className={`relative min-h-[90vh] flex items-center bg-primary ${className}`}
      aria-label="Hero section"
    >
      {/* CSS diagonal texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg,rgba(255,255,255,0.03) 0px,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <MapPin size={13} className="text-trust" />
            <span>Katy, TX 77494 — Fort Bend County</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] text-white leading-[1.12] mb-5">
            Katy&apos;s #1 Local SEO Expert —{' '}
            <span className="text-accent">Get Found on Google &amp; Maps</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            I help Katy, TX businesses rank in the local 3-pack, drive real foot traffic, and beat
            competitors who&apos;ve been online longer. Not an agency — a specialist who knows
            this market.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-white font-bold text-base rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Your Free Local SEO Audit
            </Link>
            <Link
              href="/local-seo-services-katy"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 border border-white/30 text-white font-semibold text-base rounded-lg hover:bg-white/20 transition-colors"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-2.5"
              >
                <item.icon size={15} className="text-trust flex-shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm font-medium leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
