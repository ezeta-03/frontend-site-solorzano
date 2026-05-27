import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'
import { STATS } from '@/data/constants'

function StatItem({ prefix, value, suffix, label, delay }) {
  const { ref, inView } = useInView(0.4)
  const { value: count, ref: countRef } = useCounter(inView ? value : 0, 1800, delay)

  return (
    <div
      ref={ref}
      className={`flex-1 flex flex-col items-center text-center px-4 py-8
                  border-r border-gray-200 last:border-r-0
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={countRef}
        className={`font-heading font-black text-5xl md:text-6xl leading-none
                    ${prefix === '+' ? 'text-gold' : 'text-navy'}`}
      >
        <span className="text-gold">{prefix}</span>
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="font-body text-sm text-navy/50 font-medium mt-2 uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-wrap divide-y md:divide-y-0">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} {...stat} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}
