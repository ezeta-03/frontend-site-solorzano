import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { FLEET_CATEGORIES } from '@/data/constants'

export default function FleetSection() {
  const { ref, inView } = useInView()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Maquinaria header */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h2 className="section-title mb-4">Maquinaria y Equipos</h2>
            <p className="font-body text-navy/60 text-sm leading-relaxed mb-6 max-w-md">
              Ofrecemos soluciones integrales para la industria minera y de construcción, con equipos
              especializados y personal certificado listo para el proyecto más exigente.
            </p>
            <Link to="/flota" className="btn-gold">Ver flota completa <ArrowUpRight size={15} /></Link>
          </div>
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=70"
              alt="Excavadora Volvo EC360"
              className="rounded-xl w-full h-64 object-cover shadow-card"
            />
          </div>
        </div>

        {/* Flota propia */}
        <div className="bg-navy rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide">
              Flota Propia
            </h3>
            <Link to="/flota" className="btn-outline text-xs px-4 py-2">
              Ver flota completa
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FLEET_CATEGORIES.map((cat, i) => (
              <FleetCard key={cat.id} category={cat} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FleetCard({ category, delay }) {
  const { ref, inView } = useInView(0.1)
  const item = category.items[0]

  return (
    <div
      ref={ref}
      className={`fleet-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to="/flota" className="block group">
        {/* Category label */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="font-heading font-bold text-xs text-white/60 uppercase tracking-[2px]">
            {category.label}
          </span>
          <ArrowUpRight size={14} className="text-white/30 group-hover:text-gold transition-colors" />
        </div>

        {/* Image */}
        <div className="overflow-hidden mx-4 rounded-lg mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="px-4 pb-4">
          <h4 className="font-body font-bold text-sm text-white leading-tight">{item.name}</h4>
          <p className="font-body text-xs text-white/40 mt-0.5">{item.model}</p>
          <button className="mt-3 text-[10px] font-bold text-gold border border-gold/30 hover:bg-gold hover:text-white
                             rounded px-3 py-1.5 transition-all duration-200 uppercase tracking-wider w-full">
            Ver flota
          </button>
        </div>
      </Link>
    </div>
  )
}
