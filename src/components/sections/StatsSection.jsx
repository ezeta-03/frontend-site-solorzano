import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'
import { STATS } from '@/data/constants'

function StatItem({ prefix, value, suffix, label, delay }) {
  const { ref, inView } = useInView(0.4)
  const { value: count, ref: countRef } = useCounter(value, 1800, delay)

  return (
    <div
      ref={ref}
      className={`flex-1 flex flex-col items-center text-center px-2 py-6 md:px-4 md:py-8
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div ref={countRef} className="font-heading font-black leading-none text-[clamp(1.6rem,5vw,3.75rem)]">
        <span className="text-gold">{prefix}</span>
        <span className="text-navy">{count}{suffix}</span>
      </div>
      <p className="font-body text-navy/50 font-medium mt-1 uppercase tracking-wider text-[clamp(8px,1.8vw,13px)]">
        {label}
      </p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex divide-x divide-gray-200">
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} {...stat} delay={i * 200} />
        ))}
      </div>
    </section>
  )
}
