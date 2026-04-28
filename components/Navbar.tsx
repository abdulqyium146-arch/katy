'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/local-seo-services-katy' },
  { label: 'Google Maps SEO', href: '/google-maps-seo-houston' },
  { label: 'About', href: '/local-seo-expert-katy' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ className = '' }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${className}`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className={`font-serif text-xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          LocalSEOExpertsKaty
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  pathname === link.href || pathname === link.href + '/'
                    ? 'text-accent font-semibold'
                    : scrolled
                    ? 'text-text-main hover:text-accent'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Free Audit
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded transition-colors ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    pathname === link.href || pathname === link.href + '/'
                      ? 'text-accent bg-blue-50 font-semibold'
                      : 'text-text-main hover:text-accent hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Free Audit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
