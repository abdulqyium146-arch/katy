import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  business: string
  location: string
  stars?: number
  className?: string
}

export default function TestimonialCard({
  quote,
  name,
  business,
  location,
  stars = 5,
  className = '',
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-card border border-border flex flex-col gap-4 ${className}`}
    >
      <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <blockquote className="text-text-main text-sm italic leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div>
        <p className="font-sans font-semibold text-primary text-sm">{name}</p>
        <p className="text-muted text-xs mt-0.5">
          {business} — {location}
        </p>
      </div>
    </div>
  )
}
