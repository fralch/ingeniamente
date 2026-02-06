import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DIY from './pages/DIY'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diy" element={<DIY />} />
          <Route path="/gestion-mantenimiento" element={<div>Gestión de Mantenimiento</div>} />
          <Route path="/oleohidraulica" element={<div>Oleohidráulica</div>} />
          <Route path="/neumatica" element={<div>Neumática</div>} />
          <Route path="/tribologia" element={<div>Tribología</div>} />
          <Route path="/elementos-maquinas" element={<div>Elementos de Máquinas</div>} />
          <Route path="/disenio-mecanico" element={<div>Diseño Mecánico</div>} />
          <Route path="/fmea" element={<div>FMEA</div>} />
          <Route path="/trivia" element={<div>Trivia</div>} />
          <Route path="/mantenimiento/correctivo" element={<div>Mantenimiento Correctivo</div>} />
          <Route path="/mantenimiento/preventivo" element={<div>Mantenimiento Preventivo</div>} />
          <Route path="/mantenimiento/predictivo" element={<div>Mantenimiento Predictivo</div>} />
          <Route path="/mantenimiento/modificativo" element={<div>Mantenimiento Modificativo</div>} />
          <Route path="/rodamiento" element={<div>Rodamientos</div>} />
          <Route path="/calculadora-mtbf" element={<div>Cálculadora MTBF</div>} />
          <Route path="/fajas" element={<div>Fajas</div>} />
          <Route path="/poleas" element={<div>Poleas</div>} />
          <Route path="/ejes" element={<div>Ejes</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App