import { useState } from 'react'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS, SERVICES_LIST } from '@/data/constants'
import RelatedServicesSection from '@/components/sections/RelatedServicesSection'

import heroImg    from '@/img/projects/minería/2_el_brocal.webp'
import contentImg from '@/img/projects/minería/2_el_brocal.webp'

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
      <img src={heroImg} alt="Explotación de Canteras" decoding="async"
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
          Explotación de canteras<br />
          <span className="text-gold">y suministro de agregados</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          Extracción y suministro de materiales para la industria de la construcción.
        </p>
      </div>
    </div>
  )
}

// ── Inline contact form ───────────────────────────────────────────────────────
function SideForm() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', servicio: '', descripcion: '',
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

          {/* Left — article */}
          <div className="flex-1 min-w-0">

            <div
              ref={ref}
              className={`border-t border-navy/20 pt-6 mb-6 flex items-start justify-between
                          transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div>
                <h2 className="font-heading font-black text-xl text-gold uppercase tracking-wide mb-1">
                  Explotación de canteras y suministro de agregados
                </h2>
                <p className="font-body text-sm text-navy/60 leading-relaxed max-w-lg">
                  El servicio de explotación de canteras y suministro de agregados consiste en explotar las canteras
                  adecuadas para cada tipo de material solicitado, incluyendo: Material de relleno, material de cuerpo,
                  material de corona, afirmado para sub-base y base.
                </p>
              </div>
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
                <ArrowDownLeft size={16} className="text-white" />
              </div>
            </div>

            <img src={contentImg} alt="Explotación de canteras" loading="lazy" decoding="async"
                 className="w-full h-64 object-cover rounded-xl mb-8" />

            <h3 className="font-heading font-bold text-lg text-navy mb-3">¿Qué es la explotación de canteras?</h3>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-6">
              Se entiende por canteras a las explotaciones mineras al aire libre, de donde se extrae la materia prima
              para la industria de la construcción. En este sentido, durante la explotación de canteras se obtienen
              diversos materiales en estado sólido, utilizando principalmente la minería a cielo abierto. Entre los
              materiales que se pueden extraer de una cantera, es posible mencionar: Granito, pizarra, piedra caliza,
              mármol y travertinos.
            </p>

            <h3 className="font-heading font-bold text-lg text-navy mb-3">Suministro de agregados: Usos</h3>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-4">
              Los agregados son una combinación de los materiales extraídos de las canteras, incluyendo: Piedra
              pulverizada, grava y arena, que en principio, resultan del proceso de erosión que sufren las rocas
              expuestas a las condiciones del entorno (aire y agua).
            </p>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-4">
              Generalmente, el suministro de agregados aporta mayor resistencia mecánica a materiales como el
              hormigón y el cemento, obtenidos al unir agua, cemento y agregados. Asimismo, cuando se trata de
              mortero y asfalto, la concentración de agregados representa aproximadamente un 70% del volumen de
              la mezcla, y al secarse, lo que indica que son de gran importancia al hablar de calidad.
            </p>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-8">
              En resumen, los agregados tienen diversas aplicaciones en canchas deportivas, campos de golf e
              hipódromos. Al mismo tiempo, son un ingrediente necesario en el desarrollo de vías (pasos peatonales,
              carreteras, pistas y caminos), participan en el levantamiento de estructuras y edificios, y en algunos
              casos, se utilizan como relleno para eliminar la erosión, e incluso, reparar filtraciones.
            </p>

            <h3 className="font-heading font-bold text-lg text-navy mb-3">
              ¿Por qué confiar a SOLORZANO tu servicio de explotación de canteras y suministro de agregados?
            </h3>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-8">
              En <strong>Solorzano</strong> contamos con profesionales expertos en el área de explotación de canteras
              y suministro de agregados, capacitados en la aplicación de técnicas manuales, y manejo de máquinas
              industriales, para garantizar la calidad del trabajo, de acuerdo al tipo de material. Al mismo tiempo,
              nuestro objetivo principal es velar por la seguridad dentro y fuera del área de explotación de canteras,
              para llevar cada proyecto a un fin satisfactorio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
            </div>
          </div>

          {/* Right — sticky form */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-24">
            <SideForm />
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

export default function ExplotacionCanteras() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <Content />
      <RelatedServicesSection currentId="explotacion-canteras" />
      <ClientLogos />
    </>
  )
}
