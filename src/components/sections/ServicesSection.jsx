import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { SERVICES } from '@/data/constants'

function ServiceTag({ label }) {
  return (
    <span className="text-[10px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded
                     bg-navy/80 text-white border border-white/20">
      {label}
    </span>
  )
}

function ServiceCard({ service, index }) {
  const { ref, inView } = useInView(0.1)
  const delay = index * 100

  return (
    <div
      ref={ref}
      className={`card-service transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to={service.href} className="block group relative">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: service.large ? '280px' : '220px' }}
        />
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-card opacity-90" />

        {/* Tags top-right */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          {service.tags.map((t) => <ServiceTag key={t} label={t} />)}
        </div>

        {/* Arrow top-right (hover) */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>

        {/* Content bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading font-bold text-xl text-white uppercase mb-2 leading-tight">
            {service.title}
          </h3>
          <span className="btn-hover text-xs px-4 py-2 inline-flex items-center gap-1.5">
            Ver más <ArrowUpRight size={12} />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function ServicesSection() {
  const { ref, inView } = useInView()
  const [large, ...rest] = SERVICES

  return (
    <section className="py-20 px-6 bg-gray-site">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow justify-center">Lo que hacemos</div>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="font-body text-navy/50 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales para la industria minera y de construcción, con equipos
            especializados y personal certificado listo para el proyecto más exigente.
          </p>
        </div>

        {/* Large card */}
        <div className="mb-4">
          <ServiceCard service={large} index={0} />
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
