import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { SERVICES_LIST } from '@/data/constants'

const AREAS = ['Transporte', 'Minería', 'Construcción']

export default function ContactSection() {
  const { ref, inView } = useInView()
  const [activeArea, setActiveArea] = useState('Transporte')
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '', servicio: '', descripcion: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to backend / email service
    alert('¡Solicitud enviada! Nos contactaremos contigo pronto.')
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-card
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >

          {/* Left panel — dark */}
          <div className="bg-navy-2 p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative bg text */}
            <div className="absolute -bottom-4 -right-4 text-[120px] font-heading font-black
                            text-white/[0.03] leading-none select-none pointer-events-none">
              S
            </div>

            <div>
              <span className="inline-block text-[10px] font-bold tracking-[3px] uppercase
                               bg-gold/20 text-gold border border-gold/30 rounded px-3 py-1.5 mb-6">
                Trabajemos juntos
              </span>
              <div className="flex items-start justify-between">
                <h2 className="font-heading font-black text-4xl text-white uppercase leading-tight">
                  Hablemos de tu<br />
                  <span className="text-gold">proyecto</span>
                </h2>
                <ArrowUpRight size={24} className="text-gold mt-1 flex-shrink-0" />
              </div>
              <p className="font-body text-sm text-white/50 mt-5 leading-relaxed max-w-xs">
                Ya sea transporte, minería, construcción o alquiler de maquinaria, nuestro equipo
                está listo para brindarte una propuesta a la medida de tu operación.
              </p>
            </div>

            {/* Area buttons */}
            <div className="mt-8 flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <button
                  key={area}
                  onClick={() => setActiveArea(area)}
                  className={`font-body font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 ${
                    activeArea === area
                      ? 'bg-gold text-white shadow-gold'
                      : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel — form */}
          <div className="bg-white p-10">
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

              <button type="submit" className="btn-gold justify-center mt-2">
                Enviar solicitud
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
