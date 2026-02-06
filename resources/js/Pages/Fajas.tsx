import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Fajas() {

  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typesetPromise && (window as any).MathJax.typesetPromise();
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Fajas Industriales</title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </Head>
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        {/* Hero Section */}
        <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fa-solid fa-gears"></i> Transmisión de Potencia
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Fajas Industriales</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
                Las fajas industriales son elementos fundamentales en la ingeniería mecánica, esenciales para la transmisión de potencia y el manejo de materiales en múltiples industrias. Su correcta selección y mantenimiento son clave para garantizar la eficiencia operativa y la durabilidad de los sistemas mecánicos.
            </p>
        </div>

        {/* Tipos de Fajas */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-layer-group"></i></span>
                Tipos de Fajas y Características
            </h2>
            
            <div className="space-y-8">
                
                {/* Fajas Transportadoras */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-conveyor-belt text-cyan-500 mr-3"></i> Fajas Transportadoras</h3>
                    <p className="text-slate-600 mb-4">Usadas principalmente para el movimiento de materiales a lo largo de líneas de producción o en sistemas de manejo de materiales.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <strong className="block text-slate-800 mb-1">Materiales:</strong>
                            <span className="text-slate-600">Varían desde goma hasta materiales sintéticos como PVC o PU, seleccionados por resistencia a abrasión y flexibilidad.</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <strong className="block text-slate-800 mb-1">Aplicaciones:</strong>
                            <span className="text-slate-600">Minería, agricultura y manufactura (transporte a granel, piezas).</span>
                        </div>
                    </div>
                </div>

                {/* Fajas de Transmisión */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-right-left text-cyan-500 mr-3"></i> Fajas de Transmisión</h3>
                    <p className="text-slate-600 mb-4">Transmiten fuerza motriz de un punto a otro, típicamente desde un motor principal a máquinas secundarias.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <strong className="block text-slate-800 mb-1">Tipos:</strong>
                            <span className="text-slate-600">En V, planas, acanaladas, adaptadas a diferentes potencias.</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <strong className="block text-slate-800 mb-1">Aplicaciones:</strong>
                            <span className="text-slate-600">Industria automotriz, maquinaria de construcción, equipos pesados.</span>
                        </div>
                    </div>
                </div>

                {/* Fajas Planas */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-minus text-cyan-500 mr-3"></i> Fajas Planas</h3>
                    <p className="text-slate-600 mb-4">Caracterizadas por su sección transversal rectangular, ideales para transmisiones de alta velocidad y larga distancia.</p>
                    <ul className="space-y-2 text-sm text-slate-600 mb-3">
                        <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Ventajas:</strong> Alta eficiencia, bajo ruido, capacidad para altos torques.</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-briefcase text-blue-500 mt-1 mr-2 text-xs"></i> <span><strong>Aplicaciones:</strong> Molinos, prensas, sistemas HVAC.</span></li>
                    </ul>
                </div>

                {/* Fajas en V */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-v text-cyan-500 mr-3"></i> Fajas en V</h3>
                    <p className="text-slate-600 mb-4">Sección transversal en forma de V que se acopla en ranuras de poleas.</p>
                    <ul className="space-y-2 text-sm text-slate-600 mb-3">
                        <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Ventajas:</strong> Transmisión de alto torque con menos tensión, minimiza deslizamiento.</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-briefcase text-blue-500 mt-1 mr-2 text-xs"></i> <span><strong>Aplicaciones:</strong> Motores de automóviles, bombas, maquinaria agrícola.</span></li>
                    </ul>
                </div>

                {/* Fajas Redondas */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-regular fa-circle text-cyan-500 mr-3"></i> Fajas Redondas</h3>
                    <p className="text-slate-600 mb-4">Sección circular, flexibles y versátiles para cambios de dirección.</p>
                    <ul className="space-y-2 text-sm text-slate-600 mb-3">
                        <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Ventajas:</strong> Trabajan en poleas con diferentes orientaciones.</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-briefcase text-blue-500 mt-1 mr-2 text-xs"></i> <span><strong>Aplicaciones:</strong> Embalaje, ensamblaje con rutas complejas.</span></li>
                    </ul>
                </div>

                {/* Fajas Dentadas (Sincrónicas) */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-teeth text-cyan-500 mr-3"></i> Fajas Dentadas (Sincrónicas)</h3>
                    <p className="text-slate-600 mb-4">Tienen dientes que encajan en ranuras, proporcionando transmisión precisa sin deslizamientos.</p>
                    <ul className="space-y-2 text-sm text-slate-600 mb-3">
                        <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Ventajas:</strong> Movimiento sincronizado, temporización precisa.</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-briefcase text-blue-500 mt-1 mr-2 text-xs"></i> <span><strong>Aplicaciones:</strong> Camshafts automotrices, robótica.</span></li>
                    </ul>
                </div>

                {/* Fajas Acanaladas */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-grip-lines text-cyan-500 mr-3"></i> Fajas Acanaladas</h3>
                    <p className="text-slate-600 mb-4">Múltiples canales longitudinales que aumentan el área de contacto.</p>
                    <ul className="space-y-2 text-sm text-slate-600 mb-3">
                        <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Ventajas:</strong> Compactas y eficientes, ideales para espacios limitados.</span></li>
                        <li className="flex items-start"><i className="fa-solid fa-briefcase text-blue-500 mt-1 mr-2 text-xs"></i> <span><strong>Aplicaciones:</strong> Aire acondicionado, alternadores.</span></li>
                    </ul>
                </div>

            </div>
        </div>

        {/* Consideraciones para la Selección */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-clipboard-check"></i></span>
                Criterios de Selección
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-600 mb-6">La elección adecuada depende de varios factores técnicos y operativos:</p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-cyan-600"><i className="fa-solid fa-weight-hanging"></i></div>
                        <div>
                            <strong className="block text-slate-800">Capacidad de Carga y Potencia</strong>
                            <span className="text-sm text-slate-600">Evaluar la carga máxima y la potencia que la faja debe soportar.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-cyan-600"><i className="fa-solid fa-industry"></i></div>
                        <div>
                            <strong className="block text-slate-800">Tipo de Aplicación</strong>
                            <span className="text-sm text-slate-600">Definir si es para transmisión de potencia o manejo de materiales.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-cyan-600"><i className="fa-solid fa-temperature-three-quarters"></i></div>
                        <div>
                            <strong className="block text-slate-800">Condiciones Ambientales</strong>
                            <span className="text-sm text-slate-600">Exposición a químicos, temperatura, aceites o agua (ej. PVC para corrosión).</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-cyan-600"><i className="fa-solid fa-ruler-horizontal"></i></div>
                        <div>
                            <strong className="block text-slate-800">Distancia entre Ejes</strong>
                            <span className="text-sm text-slate-600">Largas distancias (Planas) vs Cortas/Precisas (V, Dentadas).</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-cyan-600"><i className="fa-solid fa-wrench"></i></div>
                        <div>
                            <strong className="block text-slate-800">Mantenimiento</strong>
                            <span className="text-sm text-slate-600">Necesidad de ajustes y revisiones periódicas.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Aplicaciones Específicas */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-briefcase"></i></span>
                Aplicaciones por Sector
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-car text-cyan-500 mr-2"></i> Industria Automotriz</h3>
                    <p className="text-sm text-slate-600">Fajas en V y acanaladas para motores y componentes auxiliares (alternador, bomba de agua).</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-boxes-packing text-cyan-500 mr-2"></i> Manejo de Materiales</h3>
                    <p className="text-sm text-slate-600">Fajas transportadoras y dentadas en almacenes y líneas de montaje.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-truck-monster text-cyan-500 mr-2"></i> Maquinaria Pesada</h3>
                    <p className="text-sm text-slate-600">Fajas robustas para construcción y minería (trituradoras, transportadores).</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-robot text-cyan-500 mr-2"></i> Electrodomésticos y Robótica</h3>
                    <p className="text-sm text-slate-600">Pequeñas fajas dentadas y en V para movimiento preciso (lavadoras, robots).</p>
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
  );
}
