// ─────────────────────────────────────────
//  SOLORZANO M&S — Data Constants
// ─────────────────────────────────────────

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
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=70',
    large: true,
  },
  {
    id: 'mineria',
    title: 'Minería',
    tags: ['Minería'],
    description: 'Traslado de mineral, desmonte y servicios de soporte a operaciones mineras.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=70',
    large: false,
  },
  {
    id: 'transporte',
    title: 'Transporte',
    tags: ['Transporte'],
    description: 'Flota propia de volquetes, cisternas y equipos de carga pesada para rutas exigentes.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=70',
    large: false,
  },
  {
    id: 'construccion',
    title: 'Construcción',
    tags: ['Construcción'],
    description: 'Infraestructura, carreteras y obras civiles con estándares internacionales.',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&q=70',
    large: false,
  },
]

export const FLEET_CATEGORIES = [
  {
    id: 'transporte',
    label: 'Transporte',
    items: [
      { name: 'Camioneta 4x4', model: 'Toyota Hilux', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70' },
    ],
  },
  {
    id: 'equipos-pesados',
    label: 'Equipos Pesados',
    items: [
      { name: 'Motoniveladora', model: 'Jhon Deere 620 G', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=70' },
    ],
  },
  {
    id: 'volquetes',
    label: 'Volquetes',
    items: [
      { name: 'Volquetes 15 m³', model: 'Mercedes Benz Euro 5', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=70' },
    ],
  },
  {
    id: 'cisternas',
    label: 'Cisternas',
    items: [
      { name: 'Cisterna De Agua', model: 'TBN-902', image: 'https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=400&q=70' },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    category: 'mineria',
    location: 'Huarón',
    client: 'Minera Pan American Silver',
    service: 'Traslado de Mineral y Desmonte · Servicio de Transporte',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Minería',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=70',
  },
  {
    id: 2,
    category: 'mineria',
    location: 'Colquijirca',
    client: 'Sociedad Minera El Brocal',
    service: 'Transporte de mineral: Boca Mina a Plantas',
    date: 'Mar 2016 — Mar 2021',
    tag: 'Minería',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=70',
  },
  {
    id: 3,
    category: 'mineria',
    location: 'Alpamarca',
    client: 'Cía. Minera Volcán (Alpamarca)',
    service: 'Construcción de infraestructura e instalaciones · Movimiento de Tierras',
    date: 'Feb 2016 — Dic 2016',
    tag: 'Minería',
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&q=70',
  },
]

export const CLIENT_LOGOS = [
  { name: 'El Brocal', url: '#' },
  { name: 'Stracon',   url: '#' },
  { name: 'Cosapi',    url: '#' },
  { name: 'Volcán',    url: '#' },
  { name: 'Pan American Silver', url: '#' },
]

export const PROJECT_TABS = [
  { id: 'mineria',      label: 'Minería' },
  { id: 'construccion', label: 'Construcción' },
  { id: 'transporte',   label: 'Transporte' },
]

export const SERVICES_LIST = [
  'Movimiento de tierra',
  'Minería',
  'Transporte de carga',
  'Construcción',
  'Alquiler de maquinaria',
  'Consultoría HSE',
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
    subtitle: 'Conectamos personas',
    cta: 'Ver proyectos',
    ctaHref: '/proyectos',
    image: 'https://images.unsplash.com/photo-1581093458791-9d23fe12bc76?w=1400&q=75',
  },
  {
    id: 2,
    eyebrow: 'Flota propia 100%',
    title: 'Maquinaria',
    titleAccent: 'de élite',
    subtitle: 'Para los proyectos más exigentes',
    cta: 'Ver flota',
    ctaHref: '/flota',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=75',
  },
]
