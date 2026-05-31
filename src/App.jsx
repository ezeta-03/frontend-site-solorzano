import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Servicios from '@/pages/Servicios'
import Flota from '@/pages/Flota'
import Proyectos from '@/pages/Proyectos'
import TrabajaConNosotros from '@/pages/TrabajaConNosotros'
import Cotizar from '@/pages/Cotizar'
import Construccion from '@/pages/Construccion'
import Mineria from '@/pages/Mineria'
import MovimientoTierra from '@/pages/MovimientoTierra'
import DemolicionDesmonte from '@/pages/DemolicionDesmonte'
import ExplotacionCanteras from '@/pages/ExplotacionCanteras'
import CortesExcavaciones from '@/pages/CortesExcavaciones'
import RellenoMasivo from '@/pages/RellenoMasivo'
import InfraestructuraVial from '@/pages/InfraestructuraVial'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="flota" element={<Flota />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="proyectos/actuales" element={<Proyectos tab="actuales" />} />
          <Route path="proyectos/historico" element={<Proyectos tab="historico" />} />
          <Route path="trabaja-con-nosotros" element={<TrabajaConNosotros />} />
          <Route path="cotizar" element={<Cotizar />} />
          <Route path="construccion" element={<Construccion />} />
          <Route path="mineria" element={<Mineria />} />
          <Route path="movimiento-de-tierra" element={<MovimientoTierra />} />
          <Route path="movimiento-de-tierra/demolicion-desmonte" element={<DemolicionDesmonte />} />
          <Route path="movimiento-de-tierra/explotacion-canteras" element={<ExplotacionCanteras />} />
          <Route path="movimiento-de-tierra/cortes-excavaciones" element={<CortesExcavaciones />} />
          <Route path="movimiento-de-tierra/relleno-masivo" element={<RellenoMasivo />} />
          <Route path="movimiento-de-tierra/infraestructura-vial" element={<InfraestructuraVial />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
