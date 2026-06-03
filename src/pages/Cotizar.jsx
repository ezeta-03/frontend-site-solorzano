import ContactSection from '@/components/sections/ContactSection'

export default function Cotizar() {
  return (
    <div className="min-h-screen bg-navy flex items-center py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <ContactSection personasBg showPersona={false} />
      </div>
    </div>
  )
}
