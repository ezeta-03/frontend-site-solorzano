import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

import img1 from '@/img/projects/construcción/1_volcan.webp'
import img2 from '@/img/projects/minería/2_el_brocal.webp'
import img3 from '@/img/maquinaria/maq_principal.webp'
import img4 from '@/img/projects/construcción/2_cacray.png'
import img5 from '@/img/projects/transporte/2_minera_volcan.png'

const ALL_SERVICES = [
  { id: 'demolicion-desmonte',  title: 'Demolición y eliminación de desmonte',                    href: '/movimiento-de-tierra/demolicion-desmonte',  image: img1 },
  { id: 'explotacion-canteras', title: 'Explotación de canteras y suministros agregados.',         href: '/movimiento-de-tierra/explotacion-canteras', image: img2 },
  { id: 'cortes-excavaciones',  title: 'Cortes y excavaciones profundas, masivas y localizadas',   href: '/movimiento-de-tierra/cortes-excavaciones',  image: img3 },
  { id: 'relleno-masivo',       title: 'Servicio de relleno masivo y localizado',                  href: '/movimiento-de-tierra/relleno-masivo',       image: img4 },
  { id: 'infraestructura-vial', title: 'Infraestructura Vial',                                     href: '/movimiento-de-tierra/infraestructura-vial', image: img5 },
]

// Show 3 cards at once → max shift = total - 3
const VISIBLE = 3
const GAP = 12

export default function RelatedServicesSection({ currentId }) {
  const [idx, setIdx] = useState(0)
  const { ref, inView } = useInView()

  const services = ALL_SERVICES.filter((s) => s.id !== currentId)
  const maxIdx = services.length - VISIBLE

  const prev = () => setIdx((i) => (i <= 0 ? maxIdx : i - 1))
  const next = () => setIdx((i) => (i >= maxIdx ? 0 : i + 1))

  useEffect(() => {
    const t = setInterval(next, 3000)
    return () => clearInterval(t)
  }, [maxIdx])

  // Card width = 1/3 of container (calculated via CSS, driven by translateX in px)
  // We use percentage-based translation instead so it works at any container width
  const translatePct = idx * (100 / VISIBLE + GAP / (1232 / VISIBLE) * 100 / VISIBLE)

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`flex items-center justify-between mb-6
                      transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-heading font-black text-xl text-gold uppercase tracking-wide">
            Conoce más de otros servicios
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={idx === 0}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200
                          ${idx === 0 ? 'border-gray-100 opacity-40 cursor-not-allowed' : 'border-gray-200 hover:border-gold'}`}
            >
              <ChevronLeft size={16} className="text-navy/60" />
            </button>
            <button
              onClick={next}
              disabled={idx >= maxIdx}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200
                          ${idx >= maxIdx ? 'border-gray-100 opacity-40 cursor-not-allowed' : 'border-gray-200 hover:border-gold'}`}
            >
              <ChevronRight size={16} className="text-navy/60" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${idx} * (100% / ${VISIBLE} + ${GAP / VISIBLE}px)))` }}
          >
            {services.map((s) => (
              <Link
                key={s.id}
                to={s.href}
                className="relative rounded-xl overflow-hidden flex-shrink-0 group block"
                style={{ width: `calc(100% / ${VISIBLE} - ${GAP * (VISIBLE - 1) / VISIBLE}px)`, height: '200px' }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-card" />

                <div className="absolute top-3 left-3">
                  <span className="btn-pulse text-[10px] px-3 py-1.5 inline-flex items-center gap-1 pointer-events-none">
                    Ver más
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded bg-gold flex items-center justify-center">
                  <ArrowUpRight size={13} className="text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-heading font-bold text-xs text-white uppercase leading-tight">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
