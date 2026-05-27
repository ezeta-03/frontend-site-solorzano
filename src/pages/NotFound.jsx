import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center text-center px-6">
      <p className="font-heading font-black text-[120px] text-white/5 leading-none select-none">404</p>
      <h1 className="font-heading font-black text-4xl text-white uppercase -mt-8 mb-3">
        Página no encontrada
      </h1>
      <p className="font-body text-white/40 text-sm mb-8 max-w-sm">
        La página que buscas no existe o fue movida.
      </p>
      <Link to="/" className="btn-gold">
        <ArrowLeft size={15} /> Volver al inicio
      </Link>
    </div>
  )
}
