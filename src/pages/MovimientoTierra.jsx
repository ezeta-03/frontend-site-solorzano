import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS } from '@/data/constants'

import heroImg   from '@/img/carousel/item4.webp'
import imgSrv1   from '@/img/projects/construcción/1_volcan.webp'
import imgSrv2   from '@/img/projects/minería/2_el_brocal.webp'
import imgSrv3   from '@/img/maquinaria/maq_principal.webp'
import imgSrv4   from '@/img/projects/construcción/2_cacray.png'
import imgSrv5   from '@/img/projects/transporte/2_minera_volcan.png'
import imgSrv6   from '@/img/maquinaria/equipos_pesados.webp'

const SERVICES = [
  { id: 1, title: 'Demolición y eliminación de desmonte',                    image: imgSrv1, href: '/movimiento-de-tierra/demolicion-desmonte' },
  { id: 2, title: 'Explotación de canteras y suministros agregados.',         image: imgSrv2, href: '/movimiento-de-tierra/explotacion-canteras' },
  { id: 3, title: 'Cortes y excavaciones profundas, masivas y localizadas',   image: imgSrv3, href: '/movimiento-de-tierra/cortes-excavaciones' },
  { id: 4, title: 'Servicio de relleno masivo y localizado',                  image: imgSrv4, href: '/movimiento-de-tierra/relleno-masivo' },
  { id: 5, title: 'Infraestructura Vial',                                     image: imgSrv5, href: '/movimiento-de-tierra/infraestructura-vial' },
  { id: 6, title: 'Materiales de demolición y alquiler de maquinaria pesada', image: imgSrv6, href: '/cotizar' },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img
        src={heroImg}
        alt="Movimiento de Tierra"
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
          Movimiento de <span className="text-gold">Tierra</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          Excavación, corte y relleno con maquinaria de última generación.
        </p>
        <Link to="/proyectos" className="btn-pulse self-start inline-flex items-center gap-2">
          Ver proyectos <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}

// ── Service card ──────────────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`relative rounded-xl overflow-hidden group cursor-pointer
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-card" />

      {/* Top controls */}
      <div className="absolute top-3 left-3">
        <Link to={service.href} className="btn-pulse text-[10px] px-3 py-1.5 inline-flex items-center gap-1">
          Ver más
        </Link>
      </div>
      <div className="absolute top-3 right-3 w-7 h-7 rounded bg-gold flex items-center justify-center">
        <ArrowUpRight size={13} className="text-white" />
      </div>

      {/* Bottom title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-heading font-bold text-sm text-white uppercase leading-tight">
          {service.title}
        </h3>
      </div>
    </div>
  )
}

// ── Services section ──────────────────────────────────────────────────────────
function MovimientoServices() {
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
              Servicios
            </h2>
            <p className="font-body text-sm text-navy/60">
              Servicios especializados para movimiento de tierra.
            </p>
          </div>
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0">
            <ArrowDownLeft size={16} className="text-white" />
          </div>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
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
      <div ref={ref} className="max-w-7xl mx-auto flex items-center justify-center gap-10 md:gap-16 flex-wrap">
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
export default function MovimientoTierra() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <MovimientoServices />
      <ClientLogos />
      <ContactSection />
    </>
  )
}
