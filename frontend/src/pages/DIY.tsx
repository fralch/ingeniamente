import React from 'react'
import { Link } from 'react-router-dom'

const DIY: React.FC = () => {
  return (
    <div className="fade-in">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-4">
          <i className="fa-solid fa-arrow-left"></i>
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Proyectos de Ingeniería DIY</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-4xl">
          Los proyectos DIY (Do It Yourself - Hazlo Tú Mismo) son iniciativas de construcción, experimentación o invención que puedes llevar a cabo por ti mismo, usando recursos y conocimientos técnicos propios. Este enfoque permite explorar conceptos de ingeniería y ciencias aplicadas mediante proyectos prácticos que puedes desarrollar con materiales accesibles y en el entorno doméstico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Project Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4">
            <i className="fa-solid fa-robot text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Robot Brazo Articulado</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">Construye tu propio brazo robótico con materiales reciclados y servomotores. Ideal para aprender sobre cinemática y control de movimiento.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold">
            Ver proyecto <i className="fa-solid fa-arrow-right ml-2"></i>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-4">
            <i className="fa-solid fa-wind-turbine text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Mini Turbina Eólica</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">Fabrica una turbina eólica en miniatura para entender los principios de conversión de energía eólica en eléctrica.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold">
            Ver proyecto <i className="fa-solid fa-arrow-right ml-2"></i>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4">
            <i className="fa-solid fa-lightbulb text-xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Lámpara Solar</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">Crea una lámpara que funcione con energía solar utilizando paneles fotovoltaicos pequeños y baterías recargables.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold">
            Ver proyecto <i className="fa-solid fa-arrow-right ml-2"></i>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">¿Por qué hacer proyectos DIY?</h2>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
            <span>Desarrollas habilidades prácticas y creatividad</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
            <span>Aprendizaje activo de conceptos teóricos</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
            <span>Solución de problemas reales con recursos limitados</span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
            <span>Preparación para proyectos profesionales más complejos</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DIY