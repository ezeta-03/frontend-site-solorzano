import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import logoImg from '@/img/logos/logo-solorzano-nav.png'
import iconFb from '@/img/logos/redes/fb.png'
import iconIg from '@/img/logos/redes/ig.png'
import iconLd from '@/img/logos/redes/ld.png'
import iconWa from '@/img/logos/redes/wa.png'

const SOCIAL = [
  { icon: iconFb, label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61573234172364' },
  { icon: iconIg, label: 'Instagram', href: 'https://www.instagram.com/solorzanogroup_ms/?hl=es' },
  { icon: iconLd, label: 'LinkedIn',  href: '#' },
  { icon: iconWa, label: 'WhatsApp',  href: '#' },
]

const NAV_LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Flota', href: '/flota' },
  {
    label: 'Proyectos',
    href: '/proyectos',
    children: [
      { label: 'Actuales', href: '/proyectos/actuales' },
      { label: 'Histórico', href: '/proyectos/historico' },
    ],
  },
  { label: 'Trabaja con Nosotros', href: '/trabaja-con-nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  return (
    <>
      {/* Social top bar */}
      <div className="bg-navy hidden md:flex items-center justify-end px-8 py-1.5 gap-3">
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-gold transition-colors duration-200 flex items-center justify-center p-1"
            aria-label={s.label}
          >
            <img src={s.icon} alt={s.label} className="w-full h-full object-contain" />
          </a>
        ))}
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 animate-nav-fade-in ${
          scrolled
            ? 'bg-white shadow-card'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="Solorzano Holding Group" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-card
                                    border border-gray-100 overflow-hidden py-1">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-body font-semibold text-navy/70
                                     hover:text-navy hover:bg-gray-site transition-colors duration-150"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-navy after:w-full' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/cotizar" className="btn-shimmer">
              Cotizar
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} className="text-navy" /> : <Menu size={22} className="text-navy" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <NavLink
                  to={link.href}
                  className="block py-3 font-body font-semibold text-navy/70 hover:text-navy
                             border-b border-gray-100 transition-colors"
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-sm font-body text-navy/60 hover:text-gold
                                   transition-colors"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/cotizar" className="btn-shimmer mt-4 justify-center">
              Cotizar <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </header>
    </>
  )
}
