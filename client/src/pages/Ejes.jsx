import React from 'react';
import { Link } from 'react-router-dom';

export default function Ejes() {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
            
            {/* Hero Section */}
            <div className="mb-10 border-b border-slate-100 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-arrows-to-dot"></i> Elementos de Máquinas
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Ejes Mecánicos</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Los ejes mecánicos son componentes fundamentales en sistemas de maquinaria y transmisión, diseñados para soportar cargas y transmitir potencia. Constituyen el eje de rotación u oscilación de elementos como engranes, poleas, volantes de inercia, manivelas y catarinas, controlando la geometría de su movimiento.
                </p>
            </div>

            {/* Definición y Conceptos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-book-open"></i></span>
                    Definición y Conceptos Básicos
                </h2>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                    <p className="text-slate-600 mb-4">
                        Un <strong>Eje</strong> o flecha es un elemento rotatorio, generalmente de sección transversal circular, utilizado para transmitir potencia o movimiento. 
                        Por otro lado, un <strong>eje fijo</strong> (a veces llamado "eje muerto" o simplemente eje en ciertos contextos como automotriz) es un elemento no giratorio que no transmite par de torsión y se utiliza para soportar ruedas rotatorias o poleas.
                    </p>
                    <p className="text-slate-600 text-sm italic">
                        Nota: El diseño de un eje tiene mucha interdependencia con el de sus componentes (engranes, poleas, cojinetes). El diseño de la máquina dicta tentativamente su tamaño y espaciamiento.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4">Consideraciones de Diseño</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Selección del material</li>
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Configuración geométrica</li>
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Esfuerzo y resistencia (estática y fatiga)</li>
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Deflexión (flexión y torsión) y rigidez</li>
                        </ul>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Pendiente en cojinetes</li>
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Deflexión por cortante (ejes cortos)</li>
                            <li className="flex items-center"><i className="fa-solid fa-circle-check text-cyan-500 mr-2 text-xs"></i> Vibración (frecuencia natural)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-layer-group"></i></span>
                    Clasificación
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-cyan-600 text-xl mb-3"><i className="fa-solid fa-bolt"></i></div>
                        <h3 className="font-bold text-slate-800 mb-2">Ejes de Transmisión</h3>
                        <p className="text-sm text-slate-600">Transmiten potencia entre la fuente y la máquina receptora (ej. eje de motor a máquina vía correas/engranajes).</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-cyan-600 text-xl mb-3"><i className="fa-solid fa-gears"></i></div>
                        <h3 className="font-bold text-slate-800 mb-2">Ejes de Máquina</h3>
                        <p className="text-sm text-slate-600">Parte integral de la máquina, diseñados para soportar componentes como engranajes, poleas y rodamientos.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-cyan-600 text-xl mb-3"><i className="fa-solid fa-train"></i></div>
                        <h3 className="font-bold text-slate-800 mb-2">Ejes Estructurales</h3>
                        <p className="text-sm text-slate-600">Soportan cargas pero no transmiten torque (ej. ejes en carros de ferrocarril).</p>
                    </div>
                </div>
            </div>

            {/* Materiales y Tratamientos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-flask"></i></span>
                    Materiales y Tratamientos
                </h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-3 flex items-center"><i className="fa-solid fa-cubes-stacked text-cyan-500 mr-2"></i> Materiales Comunes</h3>
                        <p className="text-slate-600 mb-4">
                            Se utilizan principalmente aceros al carbono y aleados por su alta resistencia a la torsión y flexión. La selección depende de la aplicación, cargas y ambiente.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">SAE 1040</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">SAE 4140</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">SAE 4340</span>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-3 flex items-center"><i className="fa-solid fa-fire-burner text-cyan-500 mr-2"></i> Acabados y Tratamientos</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Tratamientos Térmicos:</strong> Temple y revenido para mejorar resistencia y durabilidad.</span></li>
                            <li className="flex items-start"><i className="fa-solid fa-check text-emerald-500 mt-1 mr-2 text-xs"></i> <span><strong>Acabados Superficiales:</strong> Para reducir fricción y mejorar resistencia a la corrosión.</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Diseño y Mantenimiento */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-pen-ruler"></i></span>
                        Factores de Diseño
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-full">
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-cyan-600"><i className="fa-solid fa-rotate-right"></i></div>
                                <div>
                                    <strong className="block text-slate-800 text-sm">Torsión</strong>
                                    <span className="text-xs">Debido al torque transmitido.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-cyan-600"><i className="fa-solid fa-down-long"></i></div>
                                <div>
                                    <strong className="block text-slate-800 text-sm">Flexión</strong>
                                    <span className="text-xs">Debido a cargas radiales.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-cyan-600"><i className="fa-solid fa-arrows-spin"></i></div>
                                <div>
                                    <strong className="block text-slate-800 text-sm">Fatiga</strong>
                                    <span className="text-xs">Debido a cargas repetitivas o cíclicas.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 text-cyan-600"><i className="fa-solid fa-minimize"></i></div>
                                <div>
                                    <strong className="block text-slate-800 text-sm">Rigidez</strong>
                                    <span className="text-xs">Para evitar deflexiones excesivas.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                        Mantenimiento y Aplicaciones
                    </h2>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                        <div className="mb-6">
                            <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide text-cyan-600">Aplicaciones</h3>
                            <p className="text-sm text-slate-600">Desde electrodomésticos hasta equipos industriales pesados: motores eléctricos, transmisiones de vehículos, turbinas y maquinaria agrícola.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide text-cyan-600">Mantenimiento</h3>
                            <p className="text-sm text-slate-600 mb-3">Es esencial inspeccionar regularmente los ejes en busca de signos de desgaste, corrosión o fatiga.</p>
                            <ul className="text-xs text-slate-500 list-disc pl-4 space-y-1">
                                <li>Lubricación adecuada.</li>
                                <li>Verificación de alineación.</li>
                                <li>Reemplazo de rodamientos si es necesario.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
                    <i className="fa-solid fa-arrow-left mr-2"></i> Volver al Inicio
                </Link>
            </div>

        </div>
    );
};
