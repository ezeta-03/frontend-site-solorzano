import { useState } from 'react'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS, SERVICES_LIST } from '@/data/constants'
import RelatedServicesSection from '@/components/sections/RelatedServicesSection'

import heroImg    from '@/img/maquinaria/maq_principal.webp'
import contentImg from '@/img/maquinaria/maq_principal.webp'

const FEATURES = [
  {
    title: 'Ejecución directa sin intermediarios',
    body: 'Gestionamos cada proyecto de forma directa, sin terceros, lo que nos permite tener un mayor control sobre los tiempos, costos y calidad del servicio. Esta metodología asegura una comunicación fluida y resultados más eficientes para nuestros clientes.',
  },
  {
    title: 'Flota propia moderna',
    body: 'Contamos con maquinaria y equipos propios de última generación, lo que nos permite ejecutar proyectos con mayor rapidez, precisión y seguridad. Nuestra flota moderna garantiza un rendimiento óptimo en cada operación.',
  },
  {
    title: 'Personal técnico calificado',
    body: 'Nuestro equipo está conformado por profesionales altamente capacitados y con amplia experiencia en el sector. Su conocimiento técnico y compromiso aseguran la correcta ejecución de cada proyecto, cumpliendo los más altos estándares.',
  },
  {
    title: 'Cumplimiento riguroso de estándares operativos',
    body: 'Trabajamos bajo estrictos protocolos y normativas de seguridad y calidad, garantizando procesos ordenados, eficientes y seguros. Nuestro compromiso es cumplir y superar las exigencias de cada proyecto.',
  },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img src={heroImg} alt="Cortes y Excavaciones" decoding="async"
           className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16
                    transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-body text-[11px] font-bold tracking-[4px] uppercase text-gold mb-2">
          Movimiento de Tierra
        </p>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-3">
          Cortes y excavaciones<br />
          <span className="text-gold">profundas, masivas y localizadas</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          En todo tipo de terreno, con grandes volúmenes y eficiencias de alto rendimiento.
        </p>
      </div>
    </div>
  )
}

// ── Inline contact form ───────────────────────────────────────────────────────
function SideForm({ initialServicio = '' }) {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', servicio: initialServicio, descripcion: '',
  })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Solicitud enviada! Nos contactaremos contigo pronto.')
  }
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Nombre</label>
            <input type="text" name="nombre" placeholder="Tu nombre completo" value={form.nombre} onChange={handleChange} className="form-input" required />
          </div>
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Empresa</label>
            <input type="text" name="empresa" placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} className="form-input" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} className="form-input" required />
          </div>
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Teléfono</label>
            <input type="tel" name="telefono" placeholder="+51 9XX XXX XXX" value={form.telefono} onChange={handleChange} className="form-input" />
          </div>
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Servicio de interés</label>
          <div className="relative">
            <select name="servicio" value={form.servicio} onChange={handleChange} className="form-select">
              <option value="">Selecciona un servicio...</option>
              {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none">▾</span>
          </div>
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Descripción del proyecto</label>
          <textarea name="descripcion" rows={4} placeholder="Cuéntanos sobre tu proyecto: ubicación, volúmenes, plazos..." value={form.descripcion} onChange={handleChange} className="form-textarea" />
        </div>
        <button type="submit" className="btn-gold justify-center w-full mt-1">Cotizar servicio</button>
      </form>
    </div>
  )
}

// ── Feature card ──────────────────────────────────────────────────────────────
function FeatureCard({ feature, index }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`bg-navy rounded-xl p-6 relative transition-all duration-700
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute top-4 right-4 w-7 h-7 rounded bg-gold flex items-center justify-center">
        <ArrowUpRight size={13} className="text-white" />
      </div>
      <h4 className="font-heading font-bold text-sm text-white uppercase leading-tight mb-3 pr-8">{feature.title}</h4>
      <p className="font-body text-xs text-white/60 leading-relaxed">{feature.body}</p>
    </div>
  )
}

// ── Main content ──────────────────────────────────────────────────────────────
function Content() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">

          <div className="flex-1 min-w-0">
            <div
              ref={ref}
              className={`border-t border-navy/20 pt-6 mb-6 flex items-start justify-between
                          transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div>
                <h2 className="font-heading font-black text-xl text-gold uppercase tracking-wide mb-1">
                  Cortes y excavaciones profundas, masivas y localizadas
                </h2>
                <p className="font-body text-sm text-navy/60 leading-relaxed max-w-lg">
                  Servicio de realización de cortes y excavaciones profundas, masivas y localizadas, en todo tipo
                  de terreno; con grandes volúmenes y/o eficiencias de alto rendimiento.
                </p>
              </div>
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
                <ArrowDownLeft size={16} className="text-white" />
              </div>
            </div>

            <img src={contentImg} alt="Cortes y excavaciones" loading="lazy" decoding="async"
                 className="w-full h-64 object-cover rounded-xl mb-8" />

            <h3 className="font-heading font-bold text-lg text-navy mb-3">¿Qué son las excavaciones profundas?</h3>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-6">
              Las excavaciones profundas son proyectos de perforación de suelos cuya función es crear túneles o zanjas
              para desarrollar distintos tipos de construcciones subterráneas, incluyendo sótanos o sistemas de
              transporte. Asimismo, se trata de un servicio que involucra la manipulación de maquinaria específica
              para la industria de la construcción y el movimiento de tierras, por ejemplo fajas transportadoras y
              grúas de tipo balde. En este sentido, existen cuatro tipos de servicios relacionados con excavaciones
              profundas, estos son:
            </p>

            <h4 className="font-body font-bold text-sm text-navy mb-1">Servicio de excavación de zanjas</h4>
            <p className="font-body text-sm text-navy/60 leading-relaxed mb-4">
              Generalmente, su propósito es instalar sistemas subterráneos de suministro de gas, fibra óptica e
              incluso, alcantarillado como primera etapa de proyectos de construcción, por lo que se trata de un
              servicio bastante común, que involucra el uso de retroexcavadoras y excavadoras.
            </p>

            <h4 className="font-body font-bold text-sm text-navy mb-1">Servicio de excavaciones a cielo abierto</h4>
            <p className="font-body text-sm text-navy/60 leading-relaxed mb-4">
              La solicitud de excavaciones a cielo abierto son las más comunes en la industria de la construcción.
              Este tipo de proyectos ocupa maquinaria pesada, específica para trabajar en espacios exteriores y de
              acuerdo a la envergadura del plan inicial, será necesario emplear más o menos unidades de maquinaria pesada.
            </p>

            <h4 className="font-body font-bold text-sm text-navy mb-1">Servicio de excavaciones con voladuras</h4>
            <p className="font-body text-sm text-navy/60 leading-relaxed mb-4">
              También denominadas excavaciones en suelos rocosos, son proyectos que requieren de equipos especiales
              para movilizar las rocas y llevar a cabo los trabajos de perforación o voladuras que sean necesarios.
              Todo esto, siguiendo las más específicas normas de seguridad para garantizar el bienestar de todo el
              equipo de trabajo.
            </p>

            <h4 className="font-body font-bold text-sm text-navy mb-1">Servicio de excavaciones de zapata</h4>
            <p className="font-body text-sm text-navy/60 leading-relaxed mb-8">
              Este tipo de proyectos no implica el uso de maquinaria pesada, o demasiadas unidades de transporte.
              Esto debido a que, su intención es desarrollar trabajos de cimentación, lo que implica que son
              servicios más enfocados a la superficie.
            </p>

            <h3 className="font-heading font-bold text-lg text-navy mb-3">
              ¿Por qué confiar a SOLORZANO tu servicio de cortes y excavaciones profundas, masivas y localizadas?
            </h3>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-8">
              En <strong>Solorzano</strong>, contamos con más de 12 años en la industria de la construcción, por lo
              que hemos llevado a cabo proyectos que implican el movimiento de tierras, de diversas envergaduras.
              En este sentido, estamos preparados para prestar nuestro servicio de excavaciones profundas en todo
              Perú, contamos con un equipo de expertos, especializados en cortes y excavaciones de zanjas, en todo
              tipo de terreno. Además, velamos por la salud y la seguridad de todo nuestro equipo de trabajo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
            </div>
          </div>

          <div className="w-full lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-24">
            <SideForm initialServicio="Movimiento de tierras" />
          </div>
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

export default function CortesExcavaciones() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <Content />
      <RelatedServicesSection currentId="cortes-excavaciones" />
      <ClientLogos />
    </>
  )
}
