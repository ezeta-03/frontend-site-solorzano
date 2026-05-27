import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'

export default function SomosSection() {
  const { ref, inView } = useInView()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-navy py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="section-eyebrow justify-center">
            <span className="block h-px w-8 bg-gold" />
            Somos
            <span className="block h-px w-8 bg-gold" />
          </div>
          <h2 className="section-title-white">
            Una empresa peruana con<br />estándares globales
          </h2>
          <p className="font-body text-white/50 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            SOLORZANO M&S S.A.C. es una empresa peruana líder en transporte, minería y construcción.
          </p>
        </div>

        {/* Video thumbnail */}
        <div
          className={`relative rounded-2xl overflow-hidden cursor-pointer group
                      transition-all duration-700 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onClick={() => setPlaying(true)}
        >
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=75"
            alt="Operaciones Solorzano"
            className="w-full h-72 md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/40 transition-colors duration-300" />

          {/* Play button */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="play-btn shadow-gold-lg group-hover:scale-110 transition-transform duration-300">
                <Play size={24} className="text-white ml-1" fill="white" />
              </button>
            </div>
          )}

          {playing && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <p className="text-white/50 font-body text-sm">
                [Inserta aquí el embed del video]
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
