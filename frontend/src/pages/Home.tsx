import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#7c3aed] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          {/* Trivia Button */}
          <Link to="/trivia" className="absolute top-4 right-4 md:top-6 md:right-6 z-30 group no-underline">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 pr-5 rounded-full flex items-center gap-3 hover:bg-white/20 transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-105">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md animate-[pulse_0.8s_ease-in-out_infinite]">
                <i className="fa-solid fa-trophy text-white text-sm"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wider leading-none mb-0.5">Nuevo</span>
                <span className="text-sm font-bold text-white leading-none">Trivia</span>
              </div>
            </div>
          </Link>

          {/* Decorative Content */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Ingeniería para el <br className="hidden md:block"/>Futuro</h1>
            <p className="text-blue-100 mb-8 max-w-2xl text-lg font-light leading-relaxed">Domina conceptos complejos con herramientas simples. Explora nuestra biblioteca de recursos, simuladores y calculadoras.</p>

            <div className="search-container max-w-2xl">
              <div className="flex bg-white p-1.5 rounded-2xl shadow-xl transition-transform focus-within:scale-[1.01] duration-300">
                <div className="flex items-center pl-4 pr-3 text-slate-400">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="¿Qué quieres aprender hoy?" className="flex-1 py-3 text-slate-800 focus:outline-none text-base placeholder-slate-400 bg-transparent font-medium" />
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-slate-900/20">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="filter-button px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
          Todos
        </button>
        <button className="filter-button px-5 py-2.5 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300 hover:shadow-md">
          Mecánica
        </button>
        <button className="filter-button px-5 py-2.5 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300 hover:shadow-md">
          Termodinámica
        </button>
        <button className="filter-button px-5 py-2.5 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300 hover:shadow-md">
          Fluidos
        </button>
        <button className="filter-button px-5 py-2.5 bg-white text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300 hover:shadow-md">
          Control
        </button>
      </div>

      {/* Content Cards Grid */}
      <div id="content-grid" className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12">
        {/* 1. Proyectos DIY */}
        <Link to="/diy" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-wrench text-xl"></i>
            </div>
            <span className="category-badge bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Proyectos de Ingeniería DIY</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Son proyectos de construcción, experimentación o invención que puedes llevar a cabo por ti mismo, usando recursos y conocimientos técnicos propios.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Ver proyectos <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 2. Gestión de Mantenimiento */}
        <Link to="/gestion-mantenimiento" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-clipboard-check text-xl"></i>
            </div>
            <span className="category-badge bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Gestión de Mantenimiento</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Tipos de Mantenimiento aplicados en la industria.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Leer más <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 3. Óleohidraulica */}
        <Link to="/oleohidraulica" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Fluidos">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-oil-can text-xl"></i>
            </div>
            <span className="category-badge bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Fluidos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Óleohidraulica</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La oleohidráulica es una rama fundamental de la mecánica de fluidos aplicadas en la ingeniería moderna.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 4. Neumática */}
        <Link to="/neumatica" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Fluidos">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-wind text-xl"></i>
            </div>
            <span className="category-badge bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Fluidos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Neumática</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La neumática es una rama fundamental de la mecánica de fluidos que se enfoca en el uso de aire comprimido.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 5. Turbomáquinas */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Fluidos">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-fan text-xl"></i>
            </div>
            <span className="category-badge bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Fluidos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Turbomáquinas</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Maquinas generadoras y transferencia de energía.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 6. Control CNC */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Control">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-computer-mouse text-xl"></i>
            </div>
            <span className="category-badge bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Control</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Control CNC</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Maquinas de producción en serie, que funcionan con un código de programación.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 7. Consultoría */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-briefcase text-xl"></i>
            </div>
            <span className="category-badge bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Taller de Consultoría</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Herramientas de gestión del Ingeniero Mecánico</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Ver taller <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 8. Tribología */}
        <Link to="/tribologia" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-droplet text-xl"></i>
            </div>
            <span className="category-badge bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Tribología</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Se centra en el estudio del desgaste por fricción entre componentes.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Aprender <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 9. Elementos de máquina */}
        <Link to="/elementos-maquinas" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-cogs text-xl"></i>
            </div>
            <span className="category-badge bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Elementos de Máquina</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Engranajes, rodamientos, ejes, tornillos, resortes, uniones soldadas y remachadas.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 10. Diseño Mecánico */}
        <Link to="/disenio-mecanico" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-pencil-ruler text-xl"></i>
            </div>
            <span className="category-badge bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Diseño Mecánico</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">Proceso de dar forma, dimensiones, materiales y funcionamiento a una máquina.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 11. Transferencia de calor y masa */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Termodinámica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-fire text-xl"></i>
            </div>
            <span className="category-badge bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Termodinámica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Transferencia de Calor</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La transferencia de masa y calor es un campo fundamental en la ingeniería mecánica.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 12. Mecánica de fluidos */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Fluidos">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-water text-xl"></i>
            </div>
            <span className="category-badge bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Fluidos</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Mecánica de Fluidos</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La mecánica de fluidos es una rama fundamental de la ingeniería mecánica.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 13. Ingeniería de Control */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Control">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-sliders text-xl"></i>
            </div>
            <span className="category-badge bg-violet-50 text-violet-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Control</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Ingeniería de Control</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La ingeniería de control es una rama de la ingeniería que se ocupa del modelado.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Ver temas <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 14. Termodinámica */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Termodinámica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-temperature-three-quarters text-xl"></i>
            </div>
            <span className="category-badge bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Termodinámica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Termodinámica</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La termodinámica es una rama fundamental de la ingeniería mecánica.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Aprender <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 15. Investigación de Operaciones */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Control">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-fuchsia-50 rounded-xl flex items-center justify-center text-fuchsia-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-chart-line text-xl"></i>
            </div>
            <span className="category-badge bg-fuchsia-50 text-fuchsia-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Control</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Investigación de Operaciones</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La investigación de operaciones (IO) es una disciplina que aplica métodos analíticos.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 16. Mecánica de Materiales */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-layer-group text-xl"></i>
            </div>
            <span className="category-badge bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Mecánica de Materiales</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La mecánica de materiales es una rama fundamental de la ingeniería mecánica.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Aprender <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 17. Ingeniería Eléctrica */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Control">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-bolt text-xl"></i>
            </div>
            <span className="category-badge bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Control</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Ingeniería Eléctrica</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La ingeniería eléctrica es una rama de la ingeniería que se ocupa del estudio.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Ver más <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 18. Estática */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-archway text-xl"></i>
            </div>
            <span className="category-badge bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Estática</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La estática es una rama fundamental de la mecánica que se ocupa del estudio.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Aprender <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 19. Dinámica */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center text-lime-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-person-running text-xl"></i>
            </div>
            <span className="category-badge bg-lime-50 text-lime-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Dinámica</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La dinámica es una rama de la mecánica que se ocupa del estudio del movimiento.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>

        {/* 20. Física */}
        <Link to="#" className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in" data-category="Mecánica">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-atom text-xl"></i>
            </div>
            <span className="category-badge bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Mecánica</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Física</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">La física es una ciencia fundamental que estudia la naturaleza y las propiedades.</p>
          <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
            Ver más <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home