import Link from 'next/link'

interface CTABannerProps {
  headline: string
  subtext?: string
  buttonText: string
  buttonHref: string
  className?: string
}

export default function CTABanner({
  headline,
  subtext,
  buttonText,
  buttonHref,
  className = '',
}: CTABannerProps) {
  return (
    <section className={`bg-accent py-14 sm:py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 leading-tight">
          {headline}
        </h2>
        {subtext && (
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {subtext}
          </p>
        )}
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-accent font-bold text-base rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
