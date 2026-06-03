import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { SERVICES_LIST } from '@/data/constants'
import fondoImg    from '@/img/contactanos/fondo.png'
import personasImg from '@/img/contactanos/personas.webp'
import personaImg  from '@/img/contactanos/persona.png'

const AREAS = ['Transporte', 'Minería', 'Construcción']

export default function ContactSection({ personasBg = false, showPersona = true }) {
  const { ref, inView } = useInView()
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [activeArea, setActiveArea] = useState('Transporte')
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    servicio: searchParams.get('servicio') || '',
    descripcion: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-card
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >

          {/* Left panel — image background + person */}
          <div className="relative overflow-hidden flex flex-col justify-between p-10" style={{ minHeight: '480px' }}>

            {/* Background */}
            <img
              src={personasBg ? personasImg : fondoImg}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-navy/60" />

            {/* persona.png — difuminada, centrada (solo en home) */}
            {showPersona && (
              <img
                src={personaImg}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                style={{ filter: 'blur(3px)', opacity: 0.35 }}
              />
            )}

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <span className="inline-block text-[10px] font-bold tracking-[3px] uppercase
                                 bg-gold text-white rounded px-3 py-1.5">
                  Trabajemos juntos
                </span>
                <div className="w-8 h-8 rounded bg-gold flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>

              <h2 className="font-heading font-black text-4xl text-white uppercase leading-tight mb-5">
                Hablemos de tu<br />proyecto
              </h2>
              <p className="font-body text-sm text-white/70 leading-relaxed max-w-xs">
                Ya sea transporte, minería, construcción o alquiler de maquinaria, nuestro equipo
                está listo para brindarte una propuesta a la medida de tu operación.
              </p>
            </div>

            {/* Area buttons */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-8">
              {AREAS.map((area) => (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`font-body font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 ${
                    activeArea === area
                      ? 'bg-navy text-white'
                      : 'bg-navy/70 text-white/70 hover:bg-navy hover:text-white'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel — form / thank-you */}
          <div className="bg-white p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-8">
                <div>
                  <h2 className="font-heading font-black text-5xl text-navy uppercase mb-4">¡Gracias!</h2>
                  <p className="font-body text-sm text-navy/60 leading-relaxed max-w-xs mx-auto">
                    Hemos recibido tu registro. Nuestro equipo se comunicará contigo pronto.
                  </p>
                </div>
                <Link to="/" className="btn-gold">Ver más servicios</Link>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+51 9XX XXX XXX"
                    value={form.telefono}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                  Servicio de interés
                </label>
                <div className="relative">
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Selecciona un servicio...</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none">▾</span>
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-navy/50 mb-1.5 uppercase tracking-wider">
                  Descripción del proyecto
                </label>
                <textarea
                  name="descripcion"
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto: ubicación, volúmenes, plazos..."
                  value={form.descripcion}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-gold justify-center mt-2 w-full">
                Enviar solicitud
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
