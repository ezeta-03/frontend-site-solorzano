import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownLeft, CheckSquare } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS } from '@/data/constants'

import heroImg       from '@/img/carousel/item1.webp'
import imgMovTierra  from '@/img/services/mov_de_tierra.webp'
import imgMineria    from '@/img/services/minería.webp'
import imgConst      from '@/img/services/construcción.webp'
import imgTransporte from '@/img/services/transporte.webp'

const CATEGORIES = [
  {
    id: 'movimiento',
    title: 'Movimiento de Tierra',
    tag: 'Construcción · Minería',
    description: 'Soluciones integrales de excavación, corte y relleno con maquinaria pesada de última generación para proyectos de cualquier envergadura.',
    href: '/movimiento-de-tierra',
    image: imgMovTierra,
    services: [
      'Demolición y eliminación de desmonte',
      'Explotación de canteras y suministro de agregados',
      'Cortes y excavaciones profundas, masivas y localizadas',
      'Servicio de relleno masivo y localizado',
      'Infraestructura Vial',
    ],
  },
  {
    id: 'mineria',
    title: 'Minería',
    tag: 'Minería',
    description: 'Operaciones mineras con los más altos estándares de seguridad. Traslado de mineral, desmonte y servicios de soporte a operaciones mineras.',
    href: '/mineria',
    image: imgMineria,
    services: [
      'Supervisión y Carguío',
      'Traslado de Mineral',
      'Traslado de Concentrado',
      'Transporte de Residuos Peligrosos',
      'Transporte de Personal',
      'Alquiler de Maquinaria',
    ],
  },
  {
    id: 'construccion',
    title: 'Construcción',
    tag: 'Construcción',
    description: 'Infraestructura, carreteras y obras civiles con estándares internacionales. Desde obras pequeñas hasta proyectos de gran escala.',
    href: '/construccion',
    image: imgConst,
    services: [
      'Obras civiles',
      'Obras pequeñas',
      'Presas y diques',
      'Mantenimientos',
      'Obras de concreto',
      'Montajes',
    ],
  },
  {
    id: 'transporte',
    title: 'Transporte',
    tag: 'Transporte',
    description: 'Flota propia de volquetes, cisternas y equipos de carga pesada para las rutas más exigentes del país. 100% propia, sin intermediarios.',
    href: '/flota',
    image: imgTransporte,
    services: [
      'Transporte de carga y acarreo minero',
      'Volquetes de 15 a 20 m³',
      'Cisternas de agua',
      'Equipos pesados con operador',
      'Transporte de personal',
    ],
  },
]

const FEATURES = [
  { title: 'Ejecución directa sin intermediarios',    body: 'Gestionamos cada proyecto de forma directa, sin terceros, asegurando mayor control sobre tiempos, costos y calidad.' },
  { title: 'Flota propia moderna',                    body: 'Maquinaria y equipos propios de última generación para ejecutar proyectos con mayor rapidez, precisión y seguridad.' },
  { title: 'Personal técnico calificado',             body: 'Equipo de profesionales altamente capacitados y certificados, asegurando la correcta ejecución de cada proyecto.' },
  { title: 'Cumplimiento riguroso de estándares HSE', body: 'Protocolos estrictos de seguridad y calidad que garantizan procesos ordenados, eficientes y seguros.' },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img src={heroImg} alt="Servicios Solorzano" decoding="async"
           className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16
                    transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="block h-0.5 w-8 bg-gold" />
          <span className="font-body text-[11px] font-bold tracking-[4px] uppercase text-gold">Lo que hacemos</span>
        </div>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white uppercase leading-none mb-3">
          Nuestros <span className="text-gold">servicios</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-md leading-relaxed">
          Soluciones integrales para la industria minera y de construcción, con equipos especializados
          y personal certificado listo para el proyecto más exigente.
        </p>
      </div>
    </div>
  )
}

// ── Category card ─────────────────────────────────────────────────────────────
function CategoryCard({ cat, index }) {
  const { ref, inView } = useInView(0.1)
  const imageRight = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`md:w-2/5 flex-shrink-0 ${imageRight ? 'md:order-2' : 'md:order-1'}`}>
        <img src={cat.image} alt={cat.title} loading="lazy" decoding="async"
             className="w-full h-64 md:h-full object-cover" />
      </div>

      <div className={`flex-1 p-8 flex flex-col justify-between ${imageRight ? 'md:order-1' : 'md:order-2'}`}>
        <div>
          <span className="inline-block font-body text-[10px] font-bold uppercase tracking-[3px] text-gold
                           border border-gold/30 bg-gold/5 px-3 py-1 rounded mb-4">
            {cat.tag}
          </span>
          <h2 className="font-heading font-black text-3xl text-navy uppercase tracking-wide mb-3">
            {cat.title}
          </h2>
          <p className="font-body text-sm text-navy/60 leading-relaxed mb-5">{cat.description}</p>

          <ul className="flex flex-col gap-2 mb-6">
            {cat.services.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <CheckSquare size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-navy/70">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link to={cat.href} className="btn-pulse self-start inline-flex items-center gap-2">
          Ver más <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}

// ── Categories section ────────────────────────────────────────────────────────
function CategoriesSection() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-gray-site">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`flex items-start justify-between border-t border-navy/20 pt-6 mb-10
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <h2 className="font-heading font-black text-3xl text-gold uppercase tracking-wide mb-1">
              Áreas de servicio
            </h2>
            <p className="font-body text-sm text-navy/60">
              Cuatro líneas especializadas para abarcar toda la cadena operativa.
            </p>
          </div>
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
            <ArrowDownLeft size={16} className="text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Why choose us ─────────────────────────────────────────────────────────────
function FeatureCard({ feature, index }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`bg-navy-2 rounded-xl p-6 relative border border-white/5
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute top-4 right-4 w-7 h-7 rounded bg-gold flex items-center justify-center">
        <ArrowUpRight size={13} className="text-white" />
      </div>
      <h3 className="font-heading font-bold text-base text-white uppercase leading-tight mb-3 pr-8">
        {feature.title}
      </h3>
      <p className="font-body text-sm text-white/60 leading-relaxed">{feature.body}</p>
    </div>
  )
}

function WhyUs() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="section-eyebrow justify-center">¿Por qué elegirnos?</div>
          <h2 className="section-title-white mt-2">Ventajas competitivas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
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
      <div ref={ref} className="max-w-7xl mx-auto flex items-center justify-center gap-10 md:gap-16 flex-wrap">
        {CLIENT_LOGOS.map((logo, i) => (
          <a key={logo.name} href={logo.url}
             className={`grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500
                         ${inView ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-4'}`}
             style={{ transitionDelay: `${i * 80}ms` }}>
            <img src={logo.image} alt={logo.name} loading="lazy" decoding="async" className="h-10 w-auto object-contain" />
          </a>
        ))}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Servicios() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <CategoriesSection />
      <WhyUs />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
