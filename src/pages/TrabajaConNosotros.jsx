import { useState, useRef } from 'react'
import { MapPin, Clock, ArrowDownLeft, Download } from 'lucide-react'
import StatsSection from '@/components/sections/StatsSection'
import { useInView } from '@/hooks/useInView'
import { CLIENT_LOGOS } from '@/data/constants'

import heroImg  from '@/img/trabaja_con_nosotros/hero_trabaja_con_nosotros.webp'
import imgJob1  from '@/img/trabaja_con_nosotros/job01.webp'
import imgJob2  from '@/img/trabaja_con_nosotros/job02.webp'
import imgJob3  from '@/img/trabaja_con_nosotros/job03.webp'
import imgJob4  from '@/img/trabaja_con_nosotros/job04.jpg'
import ContactSection from '../components/sections/ContactSection'

const JOBS = [
  { title: 'Operador de Excavadora',    location: 'Junín', time: 'Tiempo completo', regime: 'Régimen 20x10', image: imgJob1 },
  { title: 'Operador de Motoniveladora',location: 'Junín', time: 'Tiempo completo', regime: 'Régimen 14x7',  image: imgJob2 },
  { title: 'Conductor de Volquete',     location: 'Junín', time: 'Tiempo completo', regime: 'Régimen 14x7',  image: imgJob3 },
  { title: 'Técnico en HSE',            location: 'Junín', time: 'Tiempo completo', regime: 'Con experiencia', image: imgJob4 },
  { title: 'Otro puesto',            location: 'Junín', time: 'Tiempo completo', regime: 'otro puesto', image: imgJob4 },
]

const PERFIL = [
  'Experiencia en operación de maquinaria pesada en mina o construcción',
  'Certificación vigente en su especialidad (SENATI, MTC, etc.)',
  'Disponibilidad para trabajar en régimen de campamento (14x7 o 20x10)',
  'Compromiso con estándares HSE y cultura de seguridad',
  'Actitud proactiva, trabajo en equipo y responsabilidad',
]

const BENEFICIOS = [
  'Remuneración competitiva + bonos',
  'Seguro de vida y SCTR',
  'Capacitación y certificaciones',
  'Alimentación y alojamiento',
  'Planilla formal con todos los beneficios de ley',
  'Transporte a zona de trabajo',
]

const PROCESO = [
  { n: 1, title: 'Envío de postulación',         desc: 'Completa el formulario y adjunta tu CV y certificados' },
  { n: 2, title: 'Revisión de perfil',            desc: 'RRHH evalúa tu experiencia y documentación (3-5 días)' },
  { n: 3, title: 'Entrevista / Prueba técnica',   desc: 'Evaluación técnica y entrevista con el jefe de área' },
  { n: 4, title: 'Examen médico ocupacional',     desc: 'Evaluación de aptitud para trabajo en altura y mina' },
  { n: 5, title: 'Incorporación',                 desc: 'Bienvenida, inducción y asignación al proyecto' },
]

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroBanner() {
  const { ref, inView } = useInView()
  return (
    <div className="relative h-[520px] md:h-[600px] overflow-hidden">
      <img src={heroImg} alt="Trabaja con Nosotros" decoding="async"
           className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        ref={ref}
        className={`relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16
                    transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="font-body text-[11px] font-bold tracking-[4px] uppercase text-gold mb-2">
          Únete al equipo
        </p>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white uppercase leading-none mb-3">
          Trabaja con <span className="text-gold">nosotros</span>
        </h1>
        <p className="font-body text-[13px] text-white/70 mb-5 max-w-sm leading-relaxed">
          Sé parte de una empresa peruana con estándares globales.
        </p>
      </div>
    </div>
  )
}

// ── Postulación form ──────────────────────────────────────────────────────────
function PostulaForm() {
  const fileRef = useRef(null)
  const [file, setFile] = useState(null)
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', puesto: '', experiencia: '', sobre: '', terms: false,
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Postulación enviada! Nos contactaremos contigo pronto.')
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
      {/* Header */}
      <div className="bg-navy px-6 py-4">
        <h3 className="font-heading font-black text-lg text-white uppercase tracking-wide">Postula aquí</h3>
        <p className="font-body text-xs text-white/50 mt-0.5">Descarga los requisitos de cada puesto</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 flex flex-col gap-4">
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

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Puesto al que postula *</label>
            <div className="relative">
              <select name="puesto" value={form.puesto} onChange={handleChange} className="form-select" required>
                <option value="">Seleccionar puesto</option>
                {JOBS.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none">▾</span>
            </div>
          </div>
          <div>
            <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Años de experiencia</label>
            <div className="relative">
              <select name="experiencia" value={form.experiencia} onChange={handleChange} className="form-select">
                <option value="">Seleccionar</option>
                {['Menos de 1 año', '1-3 años', '3-5 años', 'Más de 5 años'].map((o) => <option key={o}>{o}</option>)}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none">▾</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Cuéntanos brevemente sobre ti</label>
          <textarea name="sobre" rows={3} placeholder="Experiencia, habilidades, disponibilidad para régimen de trabajo en mina." value={form.sobre} onChange={handleChange} className="form-textarea" />
        </div>

        {/* Upload zone */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">Adjuntar CV / Certificados *</label>
          <div
            onClick={() => fileRef.current?.click()}
            className="upload-zone"
          >
            <input ref={fileRef} type="file" className="hidden" accept=".pdf,.doc,.docx,.jpg,.png"
                   onChange={(e) => setFile(e.target.files[0])} />
            <p className="font-body text-sm text-navy/50 mb-2">
              {file ? file.name : 'Arrastra tu archivo o haz clic aquí'}
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {['PDF', 'DOC', 'JPG', 'PNG', 'MÁX. 10MB'].map((t) => (
                <span key={t} className="text-[10px] font-bold border border-navy/20 rounded px-2 py-0.5 text-navy/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange}
                 className="mt-0.5 accent-gold flex-shrink-0" required />
          <span className="font-body text-xs text-navy/50 leading-relaxed">
            Acepto el <span className="text-gold underline">tratamiento de mis datos personales</span> conforme
            a la Ley N.° 29733 de Protección de Datos Personales del Perú.
          </span>
        </label>

        <button type="submit" className="btn-gold justify-center w-full mt-1 uppercase tracking-wider">
          Enviar postulación
        </button>
      </form>
    </div>
  )
}

// ── Job card ──────────────────────────────────────────────────────────────────
function JobCard({ job, index }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img src={job.image} alt={job.title} loading="lazy" decoding="async"
           className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading font-bold text-base text-navy leading-tight">{job.title}</h3>
          <button className="btn-gold text-xs px-3 py-1.5 flex-shrink-0">Ver más</button>
        </div>
        <div className="flex items-center gap-4 mb-3">
          <span className="flex items-center gap-1 font-body text-xs text-navy/50">
            <MapPin size={11} className="text-gold" /> {job.location}
          </span>
          <span className="flex items-center gap-1 font-body text-xs text-navy/50">
            <Clock size={11} className="text-navy/40" /> {job.time}
          </span>
          <span className="flex items-center gap-1 font-body text-xs text-navy/50">
            <span className="text-gold text-[10px]">▲</span> {job.regime}
          </span>
        </div>
        <button className="w-full border border-gray-200 rounded py-2.5 font-body font-bold text-xs text-navy
                           uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-200
                           flex items-center justify-center gap-2">
          <Download size={13} /> Descargar requisitos
        </button>
      </div>
    </div>
  )
}

// ── Puestos section ───────────────────────────────────────────────────────────
function PuestosSection() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">

          {/* Left — job cards */}
          <div className="flex-1 min-w-0">
            <div
              ref={ref}
              className={`border-t border-navy/20 pt-6 mb-8 flex items-start justify-between
                          transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <div>
                <h2 className="font-heading font-black text-2xl text-gold uppercase tracking-wide mb-1">
                  Puestos Disponibles
                </h2>
                <p className="font-body text-sm text-navy/60">Descarga los requisitos de cada puesto</p>
              </div>
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
                <ArrowDownLeft size={16} className="text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {JOBS.map((job, i) => <JobCard key={i} job={job} index={i} />)}
            </div>
          </div>

          {/* Right — sticky form */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-24">
            <PostulaForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Perfil + Beneficios ───────────────────────────────────────────────────────
function PerfilBeneficios() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-gray-site">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-6
                    transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {/* Perfil */}
        <div className="rounded-xl overflow-hidden">
          <div className="bg-gold px-8 py-6">
            <h3 className="font-heading font-black text-2xl text-white uppercase tracking-wide text-center">
              Perfil que buscamos
            </h3>
          </div>
          <div className="bg-white px-8 py-6 flex flex-col gap-4">
            {PERFIL.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <span className="w-4 h-4 rounded-sm bg-gold flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-navy/70 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-navy rounded-xl px-8 py-6">
          <h3 className="font-heading font-black text-2xl text-gold uppercase tracking-wide mb-6">
            Beneficios
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {BENEFICIOS.map((b, i) => (
              <div key={i} className="bg-navy-2 rounded-lg px-4 py-5">
                <p className="font-body text-sm text-white/80 font-semibold leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Proceso de selección ──────────────────────────────────────────────────────
function ProcesoSeleccion() {
  const { ref, inView } = useInView()
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`border-t border-navy/20 pt-6 mb-12 flex items-start justify-between
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-heading font-black text-3xl text-navy uppercase tracking-wide">
            Proceso de Selección
          </h2>
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0 ml-4">
            <ArrowDownLeft size={16} className="text-white" />
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col md:hidden">
          {PROCESO.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center
                                font-heading font-black text-white text-sm z-10
                                transition-transform duration-200 hover:scale-125 cursor-default">
                  {step.n}
                </div>
                {i < PROCESO.length - 1 && (
                  <div className="w-px bg-gray-200 my-1" style={{ height: '36px' }} />
                )}
              </div>
              <div className="pt-1 pb-4">
                <h4 className="font-heading font-bold text-sm text-navy uppercase leading-tight mb-1">
                  {step.title}
                </h4>
                <p className="font-body text-xs text-navy/50 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start justify-between gap-2">
          {PROCESO.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {i < PROCESO.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200" />
              )}
              <div className="relative z-10 w-10 h-10 rounded-full bg-gold flex items-center justify-center
                              font-heading font-black text-white text-sm mb-4
                              transition-transform duration-200 hover:scale-125 cursor-default">
                {step.n}
              </div>
              <h4 className="font-heading font-bold text-sm text-navy mb-2 leading-tight px-1 uppercase">
                {step.title}
              </h4>
              <p className="font-body text-xs text-navy/50 leading-relaxed px-2">{step.desc}</p>
            </div>
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

export default function TrabajaConNosotros() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <PuestosSection />
      <PerfilBeneficios />
      <ProcesoSeleccion />
      <ClientLogos />
      <ContactSection />
    </>
  )
}
