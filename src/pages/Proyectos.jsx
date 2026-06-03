import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import { GitCommitHorizontal } from 'lucide-react'

export default function Proyectos({ tab }) {
  return (
    <div className="min-h-screen">
      <div className="bg-navy py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow justify-center">
            <span className="block h-px w-8 bg-gold" />
            Track Record
            <span className="block h-px w-8 bg-gold" />
          </div>
          <h1 className="section-title-white">Proyectos Ejecutados</h1>
        </div>
      </div>
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
