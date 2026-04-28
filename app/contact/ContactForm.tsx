'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import BreadcrumbNav from '@/components/BreadcrumbNav'

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
]

const nextSteps = [
  {
    step: '1',
    title: 'Review within 24-48 hours',
    description:
      "I personally review every audit request — no assistant, no intake team. You'll hear back within 48 business hours.",
  },
  {
    step: '2',
    title: 'Free audit delivered',
    description:
      'I pull your current rankings, Google Business Profile health, citations, and competitor gaps. You get a clear picture of where you stand.',
  },
  {
    step: '3',
    title: 'Straight talk on next steps',
    description:
      "If there's a clear path to ranking you higher in Katy's local search results, I'll tell you what it is, what it costs, and how long it takes.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    website: '',
    challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Local SEO Experts Katy',
            url: 'https://localseoexpertskaty.com/contact/',
            description:
              'Contact page for Local SEO Experts Katy — request a free local SEO audit for your Katy, TX business.',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Local SEO Experts Katy',
              telephone: '(832) 000-0000',
              email: 'info@localseoexpertskaty.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Katy',
                addressRegion: 'TX',
                postalCode: '77494',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />

      <div className="pt-20 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbs} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4 leading-tight">
                Get a Free Local SEO Audit for Your Katy Business
              </h1>
              <p className="text-muted text-base leading-relaxed mb-8">
                I&apos;ll review your Google Business Profile, local rankings, and competitors —
                and tell you exactly what&apos;s holding you back. No sales pitch. Just data.
              </p>

              {submitted ? (
                <div className="bg-trust/10 border border-trust/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle size={22} className="text-trust" />
                    <h2 className="font-sans font-bold text-primary text-lg">
                      Audit request received!
                    </h2>
                  </div>
                  <p className="text-text-main text-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll personally review your request and get back
                    to you within 48 business hours with your free local SEO audit. Check your
                    email — including spam if you don&apos;t see it.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-4 hover:gap-2.5 transition-all"
                  >
                    Back to homepage <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-primary mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-semibold text-primary mb-1.5"
                      >
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Katy HVAC Co."
                        className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-primary mb-1.5"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(832) 555-0100"
                        className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-primary mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@mybusiness.com"
                        className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-primary mb-1.5"
                    >
                      Website URL <span className="text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.mybusiness.com"
                      className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-sm font-semibold text-primary mb-1.5"
                    >
                      What&apos;s your biggest challenge with Google or local search?
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleChange}
                      placeholder="e.g. We don't show up on Google Maps, competitors rank above us, we got fewer calls this year..."
                      className="w-full border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3.5 bg-accent text-white font-bold text-base rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send My Audit Request'}
                  </button>

                  <p className="text-muted text-xs">
                    No spam. No commitment. I respond within 48 business hours.
                  </p>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-border rounded-xl p-6 shadow-card">
                <h2 className="font-sans font-bold text-primary text-lg mb-4">
                  Contact Information
                </h2>
                <div
                  className="flex flex-col gap-3"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <meta itemProp="name" content="Local SEO Experts Katy" />
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <address
                      className="not-italic text-text-main text-sm"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <strong>Local SEO Experts Katy</strong>
                      <br />
                      <span itemProp="addressLocality">Katy</span>,{' '}
                      <span itemProp="addressRegion">TX</span>{' '}
                      <span itemProp="postalCode">77494</span>
                    </address>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-accent flex-shrink-0" />
                    <a
                      href="tel:+18320000000"
                      itemProp="telephone"
                      className="text-text-main text-sm hover:text-accent transition-colors"
                    >
                      (832) 000-0000
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-accent flex-shrink-0" />
                    <a
                      href="mailto:info@localseoexpertskaty.com"
                      itemProp="email"
                      className="text-text-main text-sm hover:text-accent transition-colors"
                    >
                      info@localseoexpertskaty.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <div className="text-text-main text-sm">
                      <p>Monday – Friday: 9:00 AM – 6:00 PM CST</p>
                      <p className="text-muted text-xs mt-0.5">Response within 48 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110837.44785!2d-95.8244!3d29.7858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d98e9f1a8fd7%3A0x8e6b8e3e1e1b1e1b!2sKaty%2C+TX+77494!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Katy TX 77494 — Local SEO Experts Katy service area"
                />
              </div>

              <div className="bg-primary rounded-xl p-6">
                <h3 className="font-sans font-bold text-white text-base mb-4">
                  What Happens After You Submit
                </h3>
                <div className="flex flex-col gap-4">
                  {nextSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {step.step}
                      </span>
                      <div>
                        <p className="text-white text-sm font-semibold mb-0.5">{step.title}</p>
                        <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
