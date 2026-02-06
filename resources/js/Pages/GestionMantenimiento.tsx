import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function GestionMantenimiento() {
  return (
    <Layout>
      <Head title="Gestión de Mantenimiento" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Gestión de Mantenimiento</h1>
        
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Dentro de la gestión de mantenimiento, tenemos 4 estrategias de mantenimiento, los cuales los podemos agrupar por tipos de mantenimiento, según la SMRP (The Society for Maintenance & Reliability Professionals).
        </p>

        {/* Tipos de Mantenimientos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-layer-group text-sm"></i></span>
            Tipos de Mantenimientos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Proactivos */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                <i className="fa-solid fa-shield-halved mr-2"></i> Mantenimiento Proactivo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-emerald-700 bg-white/60 px-3 py-2 rounded-lg">
                  <i className="fa-solid fa-check-circle text-sm mr-2 opacity-70"></i> Mantenimiento Predictivo
                </li>
                <li className="flex items-center text-emerald-700 bg-white/60 px-3 py-2 rounded-lg">
                  <i className="fa-solid fa-check-circle text-sm mr-2 opacity-70"></i> Mantenimiento Preventivo
                </li>
                <li className="flex items-center text-emerald-700 bg-white/60 px-3 py-2 rounded-lg">
                  <i className="fa-solid fa-check-circle text-sm mr-2 opacity-70"></i> Mantenimiento Modificativo
                </li>
              </ul>
            </div>

            {/* Reactivos */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center">
                <i className="fa-solid fa-fire-extinguisher mr-2"></i> Mantenimiento Reactivo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-amber-700 bg-white/60 px-3 py-2 rounded-lg">
                  <i className="fa-solid fa-circle-exclamation text-sm mr-2 opacity-70"></i> Mantenimiento Correctivo
                </li>
                <li className="flex items-center text-amber-700 bg-white/60 px-3 py-2 rounded-lg">
                  <i className="fa-solid fa-circle-exclamation text-sm mr-2 opacity-70"></i> Mantenimiento Modificativo
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detalles de Estrategias */}
        <div className="space-y-12">
          
          {/* 1. Predictivo */}
          <div id="predictivo" className="scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-4">
                <i className="fa-solid fa-chart-line text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 font-heading">Mantenimiento Predictivo</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-6">El mantenimiento predictivo es una estrategia de gestión de activos que se ha convertido en un pilar fundamental en la industria moderna. Con el objetivo de maximizar la vida útil de los equipos y minimizar las interrupciones no planificadas, el mantenimiento predictivo utiliza técnicas avanzadas de monitoreo y análisis de datos para predecir cuándo ocurrirá una falla. Este enfoque proporciona una comprensión integral de su aplicación en la ingeniería mecánica.</p>
              <a href="/pages/mantenimiento/predictivo" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                Ver detalle completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* 2. Preventivo */}
          <div id="preventivo" className="scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                <i className="fa-solid fa-calendar-check text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 font-heading">Mantenimiento Preventivo</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-4">El mantenimiento preventivo se refiere a la acción sistemática de revisar y realizar mantenimiento en equipos o aparatos de diferentes tipos (mecánicos, eléctricos, informáticos, etc.) con el objetivo de evitar averías causadas por el uso, desgaste o paso del tiempo.</p>
              <a href="/pages/mantenimiento/preventivo" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Ver detalle completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* 3. Correctivo */}
          <div id="correctivo" className="scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mr-4">
                <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 font-heading">Mantenimiento Correctivo</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-4">El mantenimiento correctivo se refiere a las acciones tomadas después de que se haya producido una falla en un equipo o sistema, con el objetivo de devolverlo a su estado de funcionamiento normal.</p>
              <a href="/pages/mantenimiento/correctivo" className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-800 transition-colors">
                Ver detalle completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* 4. Modificativo */}
          <div id="modificativo" className="scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4">
                <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 font-heading">Mantenimiento Modificativo</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="mb-4">El mantenimiento modificativo es una estrategia avanzada de gestión de activos que se centra en la <strong>mejora continua</strong> y la adaptación de equipos y sistemas para aumentar su eficiencia, fiabilidad y vida útil.</p>
              <a href="/pages/mantenimiento/modificativo" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Ver detalle completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
            <i className="fa-solid fa-arrow-left mr-2"></i> Volver al Inicio
          </Link>
        </div>

      </div>
    </Layout>
  )
}