import ContactSection from '@/components/sections/ContactSection'

export default function Cotizar() {
  return (
    <div className="min-h-screen bg-gray-site">
      <div className="bg-navy py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow justify-center">
            <span className="block h-px w-8 bg-gold" />
            Contáctanos
            <span className="block h-px w-8 bg-gold" />
          </div>
          <h1 className="section-title-white">Solicita tu Cotización</h1>
          <p className="font-body text-white/50 text-sm mt-4 max-w-xl mx-auto">
            Completa el formulario y uno de nuestros especialistas te contactará en menos de 24 horas.
          </p>
        </div>
      </div>
      <div className="-mt-8">
        <ContactSection />
      </div>
    </div>
  )
}
