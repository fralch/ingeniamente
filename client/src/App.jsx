import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GestionMantenimiento from './pages/GestionMantenimiento';
import Diy from './pages/Diy';
import Oleohidraulica from './pages/Oleohidraulica';
import Neumatica from './pages/Neumatica';
import Tribologia from './pages/Tribologia';
import ElementosMaquinas from './pages/ElementosMaquinas';
import DisenioMecanico from './pages/DisenioMecanico';
import Ejes from './pages/Ejes';
import Fajas from './pages/Fajas';
import Poleas from './pages/Poleas';
import FMEA from './pages/FMEA';
import CalculadoraMTBF from './pages/CalculadoraMTBF';
import Rodamientos from './pages/Rodamientos';
import MantenimientoPredictivo from './pages/MantenimientoPredictivo';
import MantenimientoPreventivo from './pages/MantenimientoPreventivo';
import MantenimientoCorrectivo from './pages/MantenimientoCorrectivo';
import MantenimientoModificativo from './pages/MantenimientoModificativo';

import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import AdminPost from './pages/AdminPost';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="gestion-mantenimiento" element={<GestionMantenimiento />} />
                <Route path="proyectos-diy" element={<Diy />} />
                <Route path="oleohidraulica" element={<Oleohidraulica />} />
                <Route path="neumatica" element={<Neumatica />} />
                <Route path="tribologia" element={<Tribologia />} />
                <Route path="elementos-maquinas" element={<ElementosMaquinas />} />
                <Route path="disenio-mecanico" element={<DisenioMecanico />} />
                <Route path="ejes" element={<Ejes />} />
                <Route path="fajas" element={<Fajas />} />
                <Route path="poleas" element={<Poleas />} />
                <Route path="rodamiento" element={<Rodamientos />} />
                <Route path="fmea" element={<FMEA />} />
                <Route path="calculadora-mtbf" element={<CalculadoraMTBF />} />
                <Route path="mantenimiento-predictivo" element={<MantenimientoPredictivo />} />
                <Route path="mantenimiento-preventivo" element={<MantenimientoPreventivo />} />
                <Route path="mantenimiento-correctivo" element={<MantenimientoCorrectivo />} />
                <Route path="mantenimiento-modificativo" element={<MantenimientoModificativo />} />
                
                {/* Blog / CMS Routes */}
                <Route path="blog" element={<BlogList />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="admin" element={<AdminPost />} />
            </Route>
        </Routes>
    );
}
