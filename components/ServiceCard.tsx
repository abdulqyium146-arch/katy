import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={`group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-l-4 hover:border-accent transition-all duration-300 border border-border ${className}`}
    >
      <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={22} className="text-accent" />
      </div>

      <h3 className="font-sans font-bold text-primary text-lg mb-2 leading-snug">{title}</h3>

      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
      >
        Learn More
        <ArrowRight size={15} />
      </Link>
    </div>
  )
}
