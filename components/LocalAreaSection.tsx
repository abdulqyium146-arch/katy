const areas = [
  'Katy',
  'Cinco Ranch',
  'Sugar Land',
  'Richmond',
  'Fulshear',
  'Missouri City',
  'West Houston',
  'Memorial',
]

export default function LocalAreaSection({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-slate-50 border-y border-border py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-3">
          Service Area
        </p>
        <h2 className="font-serif text-xl sm:text-2xl text-primary font-bold mb-6">
          Serving Katy, TX and Surrounding Areas
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((area) => (
            <span
              key={area}
              className="px-3 py-1.5 bg-white border border-border rounded-full text-sm text-text-main font-medium shadow-sm hover:border-accent hover:text-accent transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="text-muted text-sm mt-6 max-w-lg mx-auto">
          Based in Katy, TX 77494 — Fort Bend County. Focused on this market so you get depth, not
          a generalist who serves 50 cities.
        </p>
      </div>
    </section>
  )
}
