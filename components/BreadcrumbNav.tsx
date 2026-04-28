import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-muted py-3 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.href} className="flex items-center gap-1">
              {isLast ? (
                <span className="text-text-main font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight size={13} className="text-border" aria-hidden="true" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
