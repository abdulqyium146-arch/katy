'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: ['Local SEO Services', 'Google Maps SEO', 'About / Expert', 'Blog', 'Contact'],
  url: [
    'https://localseoexpertskaty.com/local-seo-services-katy/',
    'https://localseoexpertskaty.com/google-maps-seo-houston/',
    'https://localseoexpertskaty.com/local-seo-expert-katy/',
    'https://localseoexpertskaty.com/blog/',
    'https://localseoexpertskaty.com/contact/',
  ],
}

const dropdownItems = [
  {
    label: 'Local SEO Services',
    sub: 'Full local search optimization',
    href: '/local-seo-services-katy',
  },
  {
    label: 'Google Maps SEO',
    sub: 'Rank in the local 3-pack',
    href: '/google-maps-seo-houston',
  },
  {
    label: 'About / Expert',
    sub: 'Credentials & results',
    href: '/local-seo-expert-katy',
  },
]

function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export default function Navbar({ className = '' }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const scrolled = useScrolled(80)
  const isHomepage = pathname === '/'
  const solidBg = !isHomepage || scrolled

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname === href + '/'

  const navTextColor = solidBg ? 'text-text-main' : 'text-slate-200'
  const logoColor = solidBg ? 'text-primary' : 'text-white'
  const taglineColor = solidBg ? 'text-muted' : 'text-slate-400'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solidBg ? 'bg-white shadow-nav' : 'bg-transparent'
        } ${className}`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        >
          {/* LOGO */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className={`font-serif text-lg font-bold tracking-tight transition-colors ${logoColor}`}>
              Local SEO Experts Katy
            </span>
            <span className={`hidden sm:block text-xs transition-colors ${taglineColor}`}>
              Katy, TX Local Search Specialists
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-0.5">
            {/* Services dropdown */}
            <li className="group relative">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${navTextColor} hover:text-accent`}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block animate-slide-down">
                <div className="bg-white rounded-xl shadow-card-hover border border-border w-64 overflow-hidden">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex flex-col px-4 py-3 hover:bg-slate-50 transition-colors border-b border-border last:border-0 ${
                        isActive(item.href) ? 'bg-blue-50' : ''
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          isActive(item.href) ? 'text-accent' : 'text-primary'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="text-xs text-muted mt-0.5">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/blog"
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-accent font-semibold' : `${navTextColor} hover:text-accent`
                }`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/local-seo-expert-katy#results"
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${navTextColor} hover:text-accent`}
              >
                Results
              </Link>
            </li>

            {/* CTA */}
            <li className="ml-2">
              <Link
                href="/contact"
                className={`inline-flex items-center px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 animate-pulse-cta ${
                  scrolled ? 'scale-105' : ''
                }`}
              >
                Get Free Audit →
              </Link>
            </li>
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              solidBg ? 'text-primary' : 'text-white'
            }`}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-white border-t border-border overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
          }`}
        >
          <ul className="px-4 py-3 flex flex-col gap-0.5">
            {dropdownItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-accent bg-blue-50 font-semibold'
                      : 'text-text-main hover:text-accent hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive('/blog')
                    ? 'text-accent bg-blue-50 font-semibold'
                    : 'text-text-main hover:text-accent hover:bg-slate-50'
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/local-seo-expert-katy#results"
                className="block px-3 py-2.5 rounded text-sm font-medium text-text-main hover:text-accent hover:bg-slate-50 transition-colors"
              >
                Results
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-3 bg-accent text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Audit →
              </Link>
            </li>
            <li className="pt-1 pb-1 text-center">
              <a
                href="tel:+18320000000"
                className="text-accent text-sm font-semibold hover:underline"
              >
                (832) 000-0000
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
