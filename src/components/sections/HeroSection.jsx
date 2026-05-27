import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '@/data/constants'

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = (idx) => {
    setCurrent(idx)
    setAnimKey((k) => k + 1)
  }
  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  const next = () => goTo((current + 1) % HERO_SLIDES.length)

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [current])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative h-[520px] md:h-[600px] overflow-hidden select-none">

      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          key={slide.id}
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div
        key={animKey}
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 animate-hero-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="block h-px w-10 bg-gold flex-shrink-0" />
          <span className="text-gold font-body font-bold text-xs tracking-[4px] uppercase">
            {slide.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-heading font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4 animate-hero-slide"
          style={{ animationDelay: '0.15s' }}
        >
          {slide.title}{' '}
          <span className="text-gold">{slide.titleAccent}</span>
          <br />
          <span className="text-3xl md:text-5xl font-bold text-white/70">{slide.subtitle}</span>
        </h1>

        {/* CTA */}
        <div className="animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
          <Link to={slide.ctaHref} className="btn-gold mt-2">
            {slide.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Slide controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
                   bg-white/10 hover:bg-gold border border-white/20 hover:border-gold
                   flex items-center justify-center transition-all duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft size={18} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full
                   bg-white/10 hover:bg-gold border border-white/20 hover:border-gold
                   flex items-center justify-center transition-all duration-200"
        aria-label="Siguiente"
      >
        <ChevronRight size={18} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
