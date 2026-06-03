import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDownLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import { useInView } from '@/hooks/useInView'
import heroTransporte from '@/img/transporte/hero_transporte.webp'
import movTierraImg   from '@/img/movimiento_tierra/srv03.webp'
import ContactSection from '@/components/sections/ContactSection'
import { CLIENT_LOGOS } from '@/data/constants'

// ── Fleet images ──────────────────────────────────────────────────────────────
import imgCamioneta   from '@/img/transporte/transporte/FLOTA_Toyota 4X4.webp'
import imgMinivan     from '@/img/transporte/transporte/FLOTA_Mercedes-Benz Sprinter.webp'
import imgCouster     from '@/img/transporte/transporte/FLOTA_Mercedes-Benz Sprinter - copia.webp'
import imgBus         from '@/img/transporte/transporte/FLOTA_Bus Marcopolo G8.webp'
import imgVolquete1   from '@/img/transporte/volquetes/FLOTA_MERCEDES BENZ ACTROS 4144.webp'
import imgVolquete2   from '@/img/transporte/volquetes/FLOTA_VOLVO FMX 8X4R-5.webp'
import imgCisterna1   from '@/img/transporte/cisternas/FLOTA_CISTERNA-DE-AGUA-TBN-902-2022.webp'
import imgCisterna2   from '@/img/transporte/cisternas/FLOTA_CISTERNA-DE-AGUA.webp'
import imgMoto        from '@/img/transporte/equipos_pesados/FLOTA_MOTONIVELADORA JHON DEERE 620 G.webp'
import imgCargador    from '@/img/transporte/equipos_pesados/FLOTA_VOLVO L120H FRONT.webp'
import imgExcavadora  from '@/img/transporte/equipos_pesados/FLOTA_EC380DLC.webp'
import imgCompactador from '@/img/transporte/equipos_pesados/FLOTA_COMPACTADOR.webp'

// ── Carousel hero images ───────────────────────────────────────────────────────
import carousel1 from '@/img/transporte/maquinaria_en_accion/01_EN_ACCION.webp'
import carousel2 from '@/img/transporte/maquinaria_en_accion/02_EN_ACCION.webp'
import carousel3 from '@/img/transporte/maquinaria_en_accion/03_EN_ACCION.webp'
import carousel4 from '@/img/transporte/maquinaria_en_accion/04_EN_ACCION.webp'
import carousel5 from '@/img/transporte/maquinaria_en_accion/05_EN_ACCION.webp'
import carousel6 from '@/img/transporte/maquinaria_en_accion/06_EN_ACCION.webp'
import carousel7 from '@/img/transporte/maquinaria_en_accion/07_EN_ACCION.webp'
import carousel8 from '@/img/transporte/maquinaria_en_accion/08_EN_ACCION.webp'

const CAROUSEL_IMGS = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8]

// ── Fleet data ────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'transporte', label: 'TRANSPORTE' },
  { id: 'volquetes',  label: 'VOLQUETES' },
  { id: 'cisternas',  label: 'CISTERNAS' },
  { id: 'equipos',    label: 'EQUIPOS PESADOS' },
]

const FLEET = {
  transporte: [
    { name: 'CAMIONETA', model: 'Toyota Hilux 4x4',      specs: [['CAPACIDAD','5 pasajeros'],       ['OTROS','']], status: 'consultar',  image: imgCamioneta  },
    { name: 'MINIVAN',   model: 'Mercedes-Benz Sprinter', specs: [['CAPACIDAD','15 y 20 pasajeros.'],['OTROS','']], status: 'consultar',  image: imgMinivan    },
    { name: 'COUSTER',   model: 'Toyota Coaster',         specs: [['CAPACIDAD','5 pasajeros'],       ['OTROS','']], status: 'consultar',  image: imgCouster    },
    { name: 'BUS',       model: 'Marcopolo G8',           specs: [['CAPACIDAD','60 pasajeros'],      ['OTROS','']], status: 'consultar',  image: imgBus        },
  ],
  volquetes: [
    { name: 'VOLQUETE', model: 'Mercedes ACTROS 4144', specs: [['CAPACIDAD','15 m3'], ['OTROS','']], status: 'disponible', image: imgVolquete1 },
    { name: 'VOLQUETE', model: 'Volvo FMX 6X4R',       specs: [['CAPACIDAD','20 m3'], ['OTROS','']], status: 'consultar',  image: imgVolquete2 },
    { name: 'VOLQUETE', model: 'Mercedes ACTROS 4144', specs: [['CAPACIDAD','20 m3'], ['OTROS','']], status: 'consultar',  image: imgVolquete1 },
    null,
  ],
  cisternas: [
    { name: 'CISTERNA', model: 'Mecedez TBN-902-2022', specs: [['CAPACIDAD','10,092 kg'],    ['OTROS','']], status: 'consultar', image: imgCisterna1 },
    { name: 'CISTERNA', model: 'Mercedes Axor 3131',   specs: [['CAPACIDAD','5000 galones'], ['OTROS','']], status: 'consultar', image: imgCisterna2 },
    null,
    null,
  ],
  equipos: [
    { name: 'MOTONIVELADORA', model: 'JHON DEERE 620G', specs: [['POTENCIA','145 HP'], ['PESO','15260']],          status: 'consultar', image: imgMoto        },
    { name: 'CARGADOR',       model: 'VOLVO L120H',     specs: [['POTENCIA','125 HP'], ['PESO','15260']],          status: 'consultar', image: imgCargador    },
    { name: 'EXCAVADORA',     model: 'EC380DLC',        specs: [['POTENCIA','125 HP'], ['PESO','15260']],          status: 'consultar', image: imgExcavadora  },
    { name: 'COMPACTADOR',    model: 'COMPACTADOR',     specs: [['POTENCIA','125 HP'], ['PESO','12.23 TONELADAS']], status: 'consultar', image: imgCompactador },
  ],
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img src={heroTransporte} alt="Flota Solorzano" decoding="async"
           className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div ref={ref}
           className={`relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16
                       transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="font-body text-[11px] font-bold tracking-[4px] uppercase text-gold mb-2">
          Sector Transporte
        </p>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white uppercase leading-none mb-3">
          Trans<span className="text-gold">porte</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          Flota propia para los proyectos más exigentes del país.
        </p>
        <Link to="/flota" className="btn-pulse self-start inline-flex items-center gap-2">
          Ver flota completa <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}

// ── Movimiento de Tierra section ──────────────────────────────────────────────
function MovimientoSection() {
  return (
    <section className="px-6 pb-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-xl overflow-hidden group cursor-pointer">
          <img src={movTierraImg} alt="Movimiento de Tierra" loading="lazy" decoding="async"
               className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-card" />
          <div className="absolute top-4 right-4 w-8 h-8 rounded bg-gold flex items-center justify-center">
            <ArrowUpRight size={14} className="text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl text-white uppercase mb-3">
                Movimiento de tierra
              </h3>
              <Link to="/movimiento-de-tierra" className="btn-hover text-xs px-4 py-2 inline-flex items-center gap-1.5">
                Ver más <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="flex gap-2">
              {['Minería', 'Construcción'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded
                                           bg-navy/80 text-white border border-white/20">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── "Maquinaria en Acción" section ────────────────────────────────────────────
function MaquinariaSection() {
  const [idx, setIdx] = useState(0)
  const total = CAROUSEL_IMGS.length
  const visible = [idx % total, (idx + 1) % total, (idx + 2) % total]

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Large text */}
      <div className="max-w-7xl mx-auto px-6 pt-10 text-center pointer-events-none select-none">
        <div className="font-heading font-black text-navy uppercase"
             style={{ fontSize: 'clamp(58px, 11vw, 120px)', lineHeight: '0.92' }}>
          MAQUINARÍA
        </div>
        <div className="font-heading font-black text-navy uppercase"
             style={{ fontSize: 'clamp(58px, 11vw, 120px)', lineHeight: '0.92' }}>
          EN ACCIÓN
        </div>
      </div>

      {/* Images — overlap only the bottom of "EN ACCIÓN" */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
        <div className="relative flex justify-center items-end gap-5 -mt-[4vw]">

          <button
            onClick={() => setIdx((idx - 1 + total) % total)}
            className="absolute -left-2 z-20 w-10 h-10 rounded-full bg-white border border-gray-300
                       shadow-sm flex items-center justify-center hover:border-gold transition-colors"
            style={{ bottom: '50%' }}
          >
            <ChevronLeft size={18} className="text-navy/60" />
          </button>

          {visible.map((i, pos) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-500 ${
                pos === 1 ? 'shadow-card' : 'opacity-75'
              }`}
              style={{
                width:  pos === 1 ? '300px' : '240px',
                height: pos === 1 ? '400px' : '340px',
              }}
            >
              <img
                src={CAROUSEL_IMGS[i]}
                alt="Maquinaria en acción"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={() => setIdx((idx + 1) % total)}
            className="absolute -right-2 z-20 w-10 h-10 rounded-full bg-white border border-gray-300
                       shadow-sm flex items-center justify-center hover:border-gold transition-colors"
            style={{ bottom: '50%' }}
          >
            <ChevronRight size={18} className="text-navy/60" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Fleet card ────────────────────────────────────────────────────────────────
function FleetCard({ item, index }) {
  const { ref, inView } = useInView(0.1)

  if (!item) {
    return (
      <div className="rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center"
           style={{ minHeight: '340px' }}>
        <span className="font-body font-semibold text-sm text-navy/30">Ver más</span>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-white flex items-center justify-center p-4" style={{ height: '180px' }}>
        <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
      </div>

      <div className="bg-navy px-4 py-3">
        <h3 className="font-heading font-black text-sm text-white uppercase tracking-wide text-center">
          {item.name}
        </h3>
      </div>

      <div className="px-4 pt-3 pb-2">
        <p className="font-body text-[11px] text-navy/70 leading-relaxed">
          <span className="font-bold">MODELO:</span> {item.model}
        </p>
        {item.specs.map(([key, val]) => (
          <p key={key} className="font-body text-[11px] text-navy/70 leading-relaxed">
            <span className="font-bold">{key}:</span> {val}
          </p>
        ))}
      </div>

      <div className="px-4 pb-4 pt-2">
        <Link
          to="/cotizar"
          className="flex items-center justify-between w-full border border-gray-200 rounded
                     px-4 py-2.5 font-body font-bold text-[11px] text-navy uppercase tracking-wider
                     hover:border-gold hover:text-gold transition-colors duration-200"
        >
          {item.status === 'disponible' ? 'DISPONIBLE' : 'CONSULTAR STOCK'}
          <span className="w-4 h-4 rounded border border-current opacity-40" />
        </Link>
      </div>
    </div>
  )
}

// ── Fleet catalog ─────────────────────────────────────────────────────────────
function FleetCatalog() {
  const [activeTab, setActiveTab] = useState('transporte')
  const { ref, inView } = useInView()

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div
          ref={ref}
          className={`flex items-center justify-between border-t border-gray-200 pt-6 mb-6
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-body text-sm text-navy/70 max-w-2xl">
            Toda nuestra flota es propia — sin intermediarios, con operación directa y mantenimiento permanente.
          </p>
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
            <ArrowDownLeft size={16} className="text-white" />
          </div>
        </div>

        <div className="flex border-b border-gray-200 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-body font-bold text-xs px-5 py-3 tracking-wider transition-all duration-200 ${
                activeTab === tab.id ? 'bg-navy text-white' : 'text-navy/50 hover:text-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FLEET[activeTab].map((item, i) => (
            <FleetCard key={i} item={item} index={i} />
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
export default function Flota() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <MaquinariaSection />
      <FleetCatalog />
      <MovimientoSection />
      <ClientLogos />
      <ContactSection />
    </>
  )
}
