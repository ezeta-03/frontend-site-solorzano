import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { PROJECTS, PROJECT_TABS, CLIENT_LOGOS } from '@/data/constants'

function ProjectCard({ project, delay }) {
  const { ref, inView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`relative rounded-xl overflow-hidden group cursor-pointer
                  transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={project.image}
        alt={project.client}
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-card" />

      {/* Location pill */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20
                      rounded-full px-3 py-1 text-xs font-body font-semibold text-white">
        {project.location}
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded bg-gold/0 group-hover:bg-gold
                      flex items-center justify-center transition-all duration-200 border border-white/20
                      group-hover:border-gold">
        <ArrowUpRight size={14} className="text-white" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gold
                         text-white px-2.5 py-1 rounded mb-2">
          {project.tag}
        </span>
        <h3 className="font-heading font-bold text-lg text-white leading-tight mb-1">
          {project.client}
        </h3>
        <p className="font-body text-xs text-white/60 leading-relaxed">{project.service}</p>
        <p className="font-body text-xs text-gold mt-2">{project.date}</p>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('mineria')
  const { ref, inView } = useInView()

  const filtered = PROJECTS.filter((p) => p.category === activeTab)

  return (
    <section className="py-20 px-6 bg-gray-site">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow">Track Record</div>
          <h2 className="section-title">Proyectos Ejecutados</h2>
          <p className="font-body text-navy/50 text-sm mt-3 max-w-xl leading-relaxed">
            Ofrecemos soluciones integrales para la industria minera y de construcción, con equipos
            especializados y personal certificado listo para el proyecto más exigente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {PROJECT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-body font-bold text-sm px-6 py-3 border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-gold text-navy bg-white'
                  : 'border-transparent text-navy/50 hover:text-navy'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {filtered.length > 0
            ? filtered.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 100} />)
            : (
              <div className="col-span-3 text-center py-16 text-navy/30 font-body">
                Próximamente se agregarán proyectos de esta categoría.
              </div>
            )}
        </div>

        {/* Client logos */}
        <ClientLogos />
      </div>
    </section>
  )
}

function ClientLogos() {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
      {CLIENT_LOGOS.map((logo, i) => (
        <a
          key={logo.name}
          href={logo.url}
          className={`font-heading font-black text-base text-navy/30 hover:text-gold
                      transition-all duration-300 tracking-wide uppercase
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {logo.name}
        </a>
      ))}
    </div>
  )
}
