import { Link } from 'react-router-dom'

const MENU = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Maquinaria', href: '/flota' },
  { label: 'Clientes', href: '/proyectos' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + copy */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center">
              <span className="text-white font-heading font-black text-sm">S</span>
            </div>
            <div>
              <span className="font-heading font-black text-white text-lg leading-none tracking-wide">
                SOLORZANO
              </span>
              <span className="block text-[9px] font-body font-semibold text-white/30 tracking-[3px] uppercase leading-none">
                Holding Group
              </span>
            </div>
          </div>
          <p className="text-sm text-white/40 font-body leading-relaxed max-w-[220px]">
            Empresa peruana con más de 12 años de trayectoria en transporte, minería y construcción.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-4">
            Menú
          </h4>
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
          <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-4">
            Grupo Solorzano
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm font-body text-white/60 hover:text-gold transition-colors duration-200">
                Velariz
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <div className="mb-6">
            <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-1">
              Sede Principal
            </h4>
            <p className="text-sm font-body text-white/60">Huancayo, Junín — Perú</p>
          </div>
          <div className="mb-6">
            <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-1">
              Teléfono
            </h4>
            <p className="text-sm font-body text-white/60">+51 (Agregar número)</p>
          </div>
          <div className="mb-6">
            <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-1">
              Email Comercial
            </h4>
            <a
              href="mailto:comercial@solorzanomys.com.pe"
              className="text-sm font-body text-gold hover:text-gold-light transition-colors"
            >
              comercial@solorzanomys.com.pe
            </a>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[3px] uppercase text-white/30 mb-1">
              RUC
            </h4>
            <p className="text-sm font-body text-white/60">20600XXXXXX</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xs font-body text-white/25">
          © {new Date().getFullYear()} SOLORZANO M&S S.A.C. Todos los derechos reservados.
        </p>
        <div className="flex gap-3">
          {['F', 'I', 'in', 'YT'].map((s) => (
            <a
              key={s}
              href="#"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-gold transition-colors duration-200
                         flex items-center justify-center text-[9px] font-bold text-white/40 hover:text-white"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
