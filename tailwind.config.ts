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
      animation: {
        'pulse-cta': 'pulseCta 2s ease-in-out 3',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        pulseCta: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)',
        'card-hover': '0 10px 25px -3px rgba(0,0,0,0.09), 0 4px 6px -4px rgba(0,0,0,0.07)',
        nav: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}

export default config
