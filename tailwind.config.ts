import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1628',
        accent: '#2563EB',
        trust: '#10B981',
        bg: '#F8FAFC',
        'text-main': '#1E293B',
        muted: '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['3rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h2-mobile': ['1.625rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.375rem', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'hero-texture': "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 80px)",
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
