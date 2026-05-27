# SOLORZANO M&S — Sitio Web

Stack: **React 18 + Vite 5 + Tailwind CSS 3 + React Router 6**

---

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
solorzano/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx        # Wrapper con Navbar + Footer
│   │   │   ├── Navbar.jsx        # Navegación con dropdown y mobile menu
│   │   │   └── Footer.jsx        # Footer con columnas de contacto
│   │   └── sections/
│   │       ├── HeroSection.jsx   # Slider con Ken Burns + animaciones
│   │       ├── StatsSection.jsx  # Contadores animados al scroll
│   │       ├── SomosSection.jsx  # Sección "Quiénes somos" + video
│   │       ├── ServicesSection.jsx # Grid de servicios con hover
│   │       ├── FleetSection.jsx  # Maquinaria y flota propia
│   │       ├── ProjectsSection.jsx # Proyectos con tabs por categoría
│   │       └── ContactSection.jsx  # Formulario de cotización
│   ├── hooks/
│   │   ├── useCounter.js         # Contador animado (Intersection Observer)
│   │   └── useInView.js          # Trigger de animaciones al scroll
│   ├── data/
│   │   └── constants.js          # Datos: stats, servicios, proyectos, flota
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Servicios.jsx
│   │   ├── Flota.jsx
│   │   ├── Proyectos.jsx
│   │   ├── TrabajaConNosotros.jsx
│   │   ├── Cotizar.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx                   # Router principal
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + componentes CSS
├── tailwind.config.js            # Tokens: colores, fuentes, animaciones
├── vite.config.js                # Alias @/ → src/
├── postcss.config.js
└── package.json
```

---

## 🎨 Design Tokens

| Token | Valor |
|-------|-------|
| `gold` | `#E8A020` |
| `navy` | `#0D1B2E` |
| `navy-2` | `#1E3A55` |
| Font heading | Barlow Condensed 700/900 |
| Font body | Barlow 400/600/700 |

---

## 🧩 Componentes reutilizables (en `index.css`)

- `.btn-gold` — Botón dorado principal
- `.btn-outline` — Botón borde blanco (para fondos oscuros)
- `.btn-navy` — Botón navy
- `.section-eyebrow` — Etiqueta superior con líneas doradas
- `.section-title` / `.section-title-white` — Títulos de sección
- `.nav-link` / `.nav-link-white` — Links de nav con underline dorado
- `.form-input` / `.form-select` / `.form-textarea` — Campos de formulario
- `.fleet-card` — Tarjeta de flota con hover dorado
- `.job-item` — Item de oferta laboral con hover glow
- `.play-btn` — Botón play con ring pulsante
- `.upload-zone` — Zona de upload con hover dorado

---

## 📋 Próximos pasos

1. **Reemplazar imágenes placeholder** de Unsplash por fotos reales en `src/data/constants.js`
2. **Agregar logo SVG real** en `Navbar.jsx` y `Footer.jsx`
3. **Completar datos** en `src/data/constants.js` (teléfono, RUC, proyectos reales)
4. **Conectar formulario** en `ContactSection.jsx` a un backend o servicio como Formspree / EmailJS
5. **Expandir páginas** de Servicios, Flota con catálogos completos
6. **SEO**: agregar meta tags por página en cada `<Page>.jsx`
7. **Imágenes**: usar `<picture>` con WebP para optimizar rendimiento

---

## 🔧 Alias configurado

```js
// En cualquier archivo:
import { STATS } from '@/data/constants'
import { useInView } from '@/hooks/useInView'
```
