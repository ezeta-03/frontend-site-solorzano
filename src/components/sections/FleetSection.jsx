import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { FLEET_CATEGORIES } from '@/data/constants'
import maqPrincipal from '@/img/maquinaria/maq_principal.webp'

export default function FleetSection() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-white">

      {/* Header con imagen de fondo */}
      <div className="relative overflow-hidden" style={{ minHeight: '800px' }}>
        {/* Imagen de fondo */}
        <img
          src={maqPrincipal}
          alt="Maquinaria Solorzano"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Overlay degradado: oscuro izquierda → transparente derecha */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" /> */}

        {/* Texto */}
        <div
          ref={ref}
          className={`relative z-10 max-w-7xl mx-auto px-6 py-16 transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="section-title">Maquinaria y Equipos</h2>
          <p className="font-body text-dark/70 text-sm leading-relaxed mb-6 max-w-lg">
            Ofrecemos soluciones integrales para la industria minera y de construcción, con equipos
            especializados y personal certificado listo para el proyecto más exigente.
          </p>
          <Link to="/flota" className="btn-pulse inline-flex items-center gap-2">
            Ver flota completa <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Flota propia */}
      <div className="bg-navy py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide">
              Flota Propia
            </h3>
            <Link to="/flota" className="btn-pulse text-xs px-4 py-2 inline-flex items-center gap-1.5">
              Ver flota completa <ArrowUpRight size={13} />
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
      className={`bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-gold transition-all duration-300
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to="/flota" className="block group">
        {/* Category label */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="font-heading font-bold text-xs text-navy uppercase tracking-[2px]">
            {category.label}
          </span>
          <div className="w-7 h-7 rounded bg-gold flex items-center justify-center">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden mx-3 rounded-lg mb-3">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="px-4 pb-4">
          <h4 className="font-body font-bold text-sm text-navy leading-tight">{item.name}</h4>
          <p className="font-body text-xs text-navy/40 mt-0.5">{item.model}</p>
          <button className="btn-navy mt-3 text-[10px] px-3 py-1.5 w-full justify-center">
            Ver flota
          </button>
        </div>
      </Link>
    </div>
  )
}
