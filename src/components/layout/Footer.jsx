import { Link } from 'react-router-dom'
import footerLogo from '@/img/logos/logo-solorzano-footer.png'
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

const MENU = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Maquinaria', href: '/flota' },
  { label: 'Clientes', href: '/proyectos' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo */}
        <div className="col-span-2 md:col-span-1 flex items-start">
          <Link to="/">
            <img src={footerLogo} alt="Solorzano Holding Group" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Menú */}
        <div>
          <h4 className="font-body font-bold text-sm text-white mb-4">Menú</h4>
          <ul className="flex flex-col gap-2">
            {MENU.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm font-body text-white/60 hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Grupo */}
        <div>
          <h4 className="font-body font-bold text-sm text-white mb-4">Grupo Solorzano Velariz</h4>
          {/* <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm font-body text-white/60 hover:text-gold transition-colors duration-200">
                Velariz
              </a>
            </li>
          </ul> */}
        </div>

        {/* Sede + Teléfono */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-body font-bold text-sm text-white mb-1">Sede Principal</h4>
            <p className="text-sm font-body text-white/60">Huancayo, Junín — Perú</p>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm text-white mb-1">Teléfono</h4>
            <p className="text-sm font-body text-white/60">+51 (Agregar número)</p>
          </div>
        </div>

        {/* Email + RUC */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-body font-bold text-sm text-white mb-1">Email Comercial</h4>
            <a
              href="mailto:comercial@solorzanomys.com.pe"
              className="text-sm font-body text-white/60 hover:text-gold transition-colors"
            >
              comercial@solorzanomys.com.pe
            </a>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm text-white mb-1">RUC</h4>
            <p className="text-sm font-body text-white/60">20600XXXXXX</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xs font-body text-white/25">
          © {new Date().getFullYear()} SOLORZANO M&S S.A.C. Todos los derechos reservados.
        </p>
        <div className="flex gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-gold transition-colors duration-200
                         flex items-center justify-center p-1.5"
            >
              <img src={s.icon} alt={s.label} className="w-full h-full object-contain" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
