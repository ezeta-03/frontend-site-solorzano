import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Servicios from '@/pages/Servicios'
import Flota from '@/pages/Flota'
import Proyectos from '@/pages/Proyectos'
import TrabajaConNosotros from '@/pages/TrabajaConNosotros'
import Cotizar from '@/pages/Cotizar'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
