import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS } from '@/data/constants'

import heroImg     from '@/img/carousel/item2.webp'
import movTierraImg from '@/img/services/mov_de_tierra.webp'
import imgCon1     from '@/img/projects/construcción/1_volcan.webp'
import imgCon2     from '@/img/projects/construcción/2_cacray.png'
import imgCon3     from '@/img/projects/construcción/3_alpamarca.webp'
import imgConst    from '@/img/services/construcción.webp'
import imgItem4    from '@/img/carousel/item4.webp'
import imgEquipos  from '@/img/maquinaria/equipos_pesados.webp'
import imgVol      from '@/img/maquinaria/volquetes.webp'

const SUB_SERVICES = [
  { id: 1, title: 'Obras civiles',        description: 'Ejecución integral de infraestructura cumpliendo altos estándares técnicos y operativos.',  image: imgCon1,   servicio: 'Obras civiles y construcción' },
  { id: 2, title: 'Obras pequeñas',       description: 'Desarrollo de soluciones constructivas rápidas, precisas y adaptadas a cada proyecto.',      image: imgCon2,   servicio: 'Obras civiles y construcción' },
  { id: 3, title: 'Presas y diques',      description: 'Construcción y reforzamiento de estructuras de contención seguras y controladas.',           image: imgCon3,   servicio: 'Obras civiles y construcción' },
  { id: 4, title: 'Mantenimientos',       description: 'Servicios de mantenimiento que garantizan continuidad operativa y óptimo rendimiento.',       image: imgConst,  servicio: 'Mantenimiento de vías' },
  { id: 5, title: 'Infraestructura vial', description: 'Construcción y mantenimiento de vías garantizando transitabilidad en condiciones exigentes.', image: imgItem4,  servicio: 'Mantenimiento de vías' },
  { id: 6, title: 'Obras de concreto',    description: 'Construcción de estructuras resistentes con control técnico y materiales de calidad.',        image: imgEquipos,servicio: 'Obras civiles y construcción' },
  { id: 7, title: 'Montajes',             description: 'Instalación de estructuras y equipos con precisión técnica y seguridad operativa.',           image: imgVol,    servicio: 'Obras civiles y construcción' },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img
        src={heroImg}
        alt="Construcción"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16
                    transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-body text-[11px] font-bold tracking-[4px] uppercase text-gold mb-2">
          Sector Construcción
        </p>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white uppercase leading-none mb-3">
          Constru<span className="text-gold">cción</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          Impulsamos el desarrollo del Perú desde la operación y la experiencia.
        </p>
        <Link to="/proyectos" className="btn-pulse self-start inline-flex items-center gap-2">
          Ver proyectos <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}

// ── Service row ───────────────────────────────────────────────────────────────
function ServiceRow({ service, index }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`flex rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-2/5 flex-shrink-0 h-48">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-lg text-navy mb-2">{service.title}</h3>
          <p className="font-body text-sm text-navy/60 leading-relaxed">{service.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link to={`/cotizar?servicio=${encodeURIComponent(service.servicio)}`} className="btn-gold text-xs px-4 py-2">Solicitar Servicio</Link>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === index % 5 ? 'bg-gold' : 'bg-gray-200'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Construction services section ─────────────────────────────────────────────
function ConstruccionServices() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`flex items-start justify-between border-t border-navy/20 pt-6 mb-8
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <h2 className="font-heading font-black text-2xl text-gold uppercase tracking-wide mb-1">
              Construcción
            </h2>
            <p className="font-body text-sm text-navy/60">
              Servicios especializados para operaciones mineras:
            </p>
          </div>
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0">
            <ArrowDownLeft size={16} className="text-white" />
          </div>
        </div>

        {/* Featured card */}
        <div className="relative rounded-xl overflow-hidden mb-6 group cursor-pointer">
          <img
            src={movTierraImg}
            alt="Movimiento de Tierra"
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-card" />
          <div className="absolute top-4 right-4 w-8 h-8 rounded bg-gold flex items-center justify-center">
            <ArrowUpRight size={14} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl text-white uppercase mb-3">
                Movimiento de tierra
              </h3>
              <Link to="/cotizar" className="btn-hover text-xs px-4 py-2 inline-flex items-center gap-1.5">
                Ver más <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="flex gap-2">
              {['Minería', 'Construcción'].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded
                             bg-navy/80 text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-4">
          {SUB_SERVICES.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Client logos ──────────────────────────────────────────────────────────────
function ClientLogos() {
  const { ref, inView } = useInView()
  return (
    <section className="py-12 px-6 bg-gray-site">
      <div
        ref={ref}
        className="max-w-7xl mx-auto flex items-center justify-center gap-10 md:gap-16 flex-wrap"
      >
        {CLIENT_LOGOS.map((logo, i) => (
          <a
            key={logo.name}
            href={logo.url}
            className={`grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500
                        ${inView ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <img src={logo.image} alt={logo.name} loading="lazy" decoding="async" className="h-10 w-auto object-contain" />
          </a>
        ))}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Construccion() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <ConstruccionServices />
      <ClientLogos />
      <ContactSection />
    </>
  )
}
