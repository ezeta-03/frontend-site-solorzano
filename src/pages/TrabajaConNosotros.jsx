import { useState } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { JOB_LISTINGS } from '@/data/constants'

export default function TrabajaConNosotros() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow justify-center">
            <span className="block h-px w-8 bg-gold" />
            Únete al equipo
            <span className="block h-px w-8 bg-gold" />
          </div>
          <h1 className="section-title-white">Trabaja con Nosotros</h1>
          <p className="font-body text-white/50 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Sé parte de una empresa peruana con estándares globales. Buscamos personas comprometidas,
            con vocación de servicio y pasión por los proyectos.
          </p>
        </div>
      </div>

      {/* Job listings */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-heading font-black text-2xl text-navy uppercase mb-6">Puestos Disponibles</h2>
        <div className="flex flex-col gap-3">
          {JOB_LISTINGS.map((job, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="job-item cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-body font-bold text-navy text-base">{job.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold
                                     border border-gold/20 px-2 py-0.5 rounded">
                      {job.area}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-body text-navy/40">
                    <MapPin size={11} />
                    {job.location} · Régimen {job.regime}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className={`text-navy/30 transition-transform duration-200 ${selected === i ? 'rotate-90 text-gold' : ''}`}
                />
              </div>

              {selected === i && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="font-body text-sm text-navy/60 mb-4 leading-relaxed">
                    Para postular a esta posición, envía tu CV actualizado con el asunto
                    "{job.title}" a nuestro email de reclutamiento.
                  </p>
                  <a
                    href="mailto:rrhh@solorzanomys.com.pe"
                    className="btn-gold text-xs px-4 py-2 inline-flex items-center gap-1.5"
                  >
                    Postular ahora <ArrowRight size={13} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
