// ─────────────────────────────────────────
//  SOLORZANO M&S — Data Constants
// ─────────────────────────────────────────
import imgFlotaTransporte   from '@/img/maquinaria/transporte.webp'
import imgFlotaEquipos     from '@/img/maquinaria/equipos_pesados.webp'
import imgFlotaVolquetes   from '@/img/maquinaria/volquetes.webp'
import imgFlotaCisterna    from '@/img/maquinaria/cisterna.webp'

import imgMovTierra   from '@/img/services/mov_de_tierra.webp'
import imgMineria     from '@/img/services/minería.webp'
import imgTransporte  from '@/img/services/transporte.webp'
import imgConstruccion from '@/img/services/construcción.webp'

import item1 from '@/img/carousel/item1.webp'
import item2 from '@/img/carousel/item2.webp'
import item3 from '@/img/carousel/item3.webp'
import item4 from '@/img/carousel/item4.webp'
import item5 from '@/img/carousel/item5.webp'

import imgLogoElBrocal    from '@/img/logos/marcas/1_el_brocal.png'
import imgLogoStracon     from '@/img/logos/marcas/2_stracon.png'
import imgLogoCosapi      from '@/img/logos/marcas/3_cosapi.png'
import imgLogoVolcan      from '@/img/logos/marcas/4_volcan.png'
import imgLogoPanAmerican from '@/img/logos/marcas/5_panamerican.png'

import imgProjMin1 from '@/img/projects/minería/1_minera_pan.jpg'
import imgProjMin2 from '@/img/projects/minería/2_el_brocal.webp'
import imgProjMin3 from '@/img/projects/minería/3_alpamarca.jpg'
import imgProjCon1 from '@/img/projects/construcción/1_volcan.webp'
import imgProjCon2 from '@/img/projects/construcción/2_cacray.png'
import imgProjCon3 from '@/img/projects/construcción/3_alpamarca.webp'
import imgProjTra1 from '@/img/projects/transporte/1_minera_pan.png'
import imgProjTra2 from '@/img/projects/transporte/2_minera_volcan.png'
import imgProjTra3 from '@/img/projects/transporte/3_mineria_volcan.webp'

export const STATS = [
  { prefix: '+', value: 12, suffix: '', label: 'Años de trayectoria' },
  { prefix: '',  value: 100, suffix: '%', label: 'Flota propia' },
  { prefix: '+', value: 20, suffix: '', label: 'Proyectos' },
  { prefix: '',  value: 100, suffix: '%', label: 'Compromiso HSE' },
]

export const SERVICES = [
  {
    id: 'movimiento-tierra',
    title: 'Movimiento de Tierra',
    tags: ['Minería', 'Construcción'],
    description:
      'Soluciones integrales de excavación, corte y relleno con maquinaria pesada de última generación.',
    image: imgMovTierra,
    large: true,
    href: '/movimiento-de-tierra',
  },
  {
    id: 'mineria',
    title: 'Minería',
    tags: ['Minería'],
    description: 'Traslado de mineral, desmonte y servicios de soporte a operaciones mineras.',
    image: imgMineria,
    large: false,
    href: '/mineria',
  },
  {
    id: 'transporte',
    title: 'Transporte',
    tags: ['Transporte'],
    description: 'Flota propia de volquetes, cisternas y equipos de carga pesada para rutas exigentes.',
    image: imgTransporte,
    large: false,
    href: '/flota',
  },
  {
    id: 'construccion',
    title: 'Construcción',
    tags: ['Construcción'],
    description: 'Infraestructura, carreteras y obras civiles con estándares internacionales.',
    image: imgConstruccion,
    large: false,
    href: '/construccion',
  },
]

export const FLEET_CATEGORIES = [
  {
    id: 'transporte',
    label: 'Transporte',
    items: [
      { name: 'Camioneta 4x4', model: 'Toyota Hilux', image: imgFlotaTransporte },
    ],
  },
  {
    id: 'equipos-pesados',
    label: 'Equipos Pesados',
    items: [
      { name: 'Motoniveladora', model: 'Jhon Deere 620 G', image: imgFlotaEquipos },
    ],
  },
  {
    id: 'volquetes',
    label: 'Volquetes',
    items: [
      { name: 'Volquetes 15 m³', model: 'Mercedes Benz Euro 5', image: imgFlotaVolquetes },
    ],
  },
  {
    id: 'cisternas',
    label: 'Cisternas',
    items: [
      { name: 'Cisterna De Agua', model: 'TBN-902', image: imgFlotaCisterna },
    ],
  },
]

export const PROJECTS = [
  // ── Minería ──
  {
    id: 1,
    category: 'mineria',
    location: 'Huarón',
    client: 'Minera Pan American Silver',
    service: 'Traslado de Mineral y Desmonte · Servicio de Transporte',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Minería',
    image: imgProjMin1,
  },
  {
    id: 2,
    category: 'mineria',
    location: 'Colquijirca',
    client: 'Sociedad Minera El Brocal',
    service: 'Transporte de mineral: Boca Mina a Plantas',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Minería',
    image: imgProjMin2,
  },
  {
    id: 3,
    category: 'mineria',
    location: 'Alpamarca',
    client: 'Cía. Minera Volcán (Alpamarca)',
    service: 'Construcción de infraestructura e instalaciones · Movimiento de Tierras',
    date: 'Feb 2016 — Dic 2016',
    tag: 'Minería',
    image: imgProjMin3,
  },
  // ── Construcción ──
  {
    id: 4,
    category: 'construccion',
    location: 'Chungar',
    client: 'Cía. Minera Volcán',
    service: 'Construcción de infraestructura e instalaciones — Movimiento de Tierras',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Construcción',
    image: imgProjCon1,
  },
  {
    id: 5,
    category: 'construccion',
    location: 'Campamento Cacray',
    client: 'Sociedad Minera El Brocal',
    service: 'Movimiento de Tierras: Accesos y Plataformas para Campamento Cacray',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Construcción',
    image: imgProjCon2,
  },
  {
    id: 6,
    category: 'construccion',
    location: 'Alpamarca',
    client: 'Cía. Minera Volcán (Alpamarca)',
    service: 'Construcción de infraestructura e instalaciones · Movimiento de Tierras',
    date: 'Feb 2016 — Dic 2016',
    tag: 'Construcción',
    image: imgProjCon3,
  },
  // ── Transporte ──
  {
    id: 7,
    category: 'transporte',
    location: 'Huarón',
    client: 'Minera Pan American Silver',
    service: 'Transporte de cemento: Ruta Cemento Andino',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Transporte',
    image: imgProjTra1,
  },
  {
    id: 8,
    category: 'transporte',
    location: 'Alpamarca',
    client: 'Cía. Minera Volcán',
    service: 'Traslado de material y acarreo con línea amarilla — Ampliación de represa',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Transporte',
    image: imgProjTra2,
  },
  {
    id: 9,
    category: 'transporte',
    location: 'Alpamarca',
    client: 'Cía. Minera Volcán',
    service: 'Traslado de material — Proyecto de ampliación de represa',
    date: 'Feb 2016 — Dic 2016',
    tag: 'Transporte',
    image: imgProjTra3,
  },
]

export const CLIENT_LOGOS = [
  { name: 'El Brocal',          image: imgLogoElBrocal,    url: '#' },
  { name: 'Stracon',            image: imgLogoStracon,     url: '#' },
  { name: 'Cosapi',             image: imgLogoCosapi,      url: '#' },
  { name: 'Volcán',             image: imgLogoVolcan,      url: '#' },
  { name: 'Pan American Silver',image: imgLogoPanAmerican, url: '#' },
]

export const PROJECT_TABS = [
  { id: 'mineria',      label: 'Minería' },
  { id: 'construccion', label: 'Construcción' },
  { id: 'transporte',   label: 'Transporte' },
]

export const SERVICES_LIST = [
  'Transporte y acarreo minero',
  'Alquiler de maquinarias pesadas',
  'Obras civiles y construcción',
  'Movimiento de tierras',
  'Mantenimiento de vías',
  'Transporte de personal',
  'Otro servicio',
]

export const JOB_LISTINGS = [
  { title: 'Operador de Excavadora',   area: 'Minería',       location: 'Junín',        regime: '14x7' },
  { title: 'Operador de Motoniveladora', area: 'Mov. Tierra', location: 'Pasco',        regime: '20x10' },
  { title: 'Conductor de Volquete',    area: 'Transporte',    location: 'Lima / Pasco', regime: '14x7' },
  { title: 'Operador de Compactadora', area: 'Construcción',  location: 'Junín',        regime: '14x7' },
  { title: 'Mecánico de Maquinaria Pesada', area: 'Taller',  location: 'Huancayo',     regime: 'Administrativo' },
]

export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'Somos Solorzano M&S',
    title: 'Impulsamos',
    titleAccent: 'proyectos.',
    titleSpace: true,
    subtitle: 'Conectamos personas',
    cta: 'Ver proyectos',
    ctaHref: '/proyectos',
    image: item1,
  },
  {
    id: 2,
    eyebrow: 'Sector Construcción',
    title: 'Constru',
    titleAccent: 'cción',
    subtitle: 'Impulsamos el desarrollo del Perú desde la operación y la experiencia.',
    cta: 'Ver proyectos',
    ctaHref: '/construccion',
    image: item2,
  },
  {
    id: 3,
    eyebrow: 'Sector Minería',
    title: 'Min',
    titleAccent: 'ería',
    subtitle: 'Operaciones mineras con los más altos estándares de seguridad.',
    cta: 'Ver proyectos',
    ctaHref: '/mineria',
    image: item3,
  },
  {
    id: 4,
    eyebrow: 'Sector Construcción',
    title: 'Movimiento de',
    titleAccent: 'Tierra',
    titleSpace: true,
    subtitle: 'Excavación, corte y relleno con maquinaria de última generación.',
    cta: 'Ver servicios',
    ctaHref: '/movimiento-de-tierra',
    image: item4,
  },
  {
    id: 5,
    eyebrow: 'Sector Transporte',
    title: 'Trans',
    titleAccent: 'porte',
    subtitle: 'Flota propia para los proyectos más exigentes del país.',
    cta: 'Ver flota completa',
    ctaHref: '/flota',
    image: item5,
  },
]
