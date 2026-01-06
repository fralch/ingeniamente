import React from 'react';
import { Link } from 'react-router-dom';

export default function MantenimientoCorrectivo() {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
            
            {/* Hero Section */}
            <div className="mb-10 border-b border-slate-100 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-fire-extinguisher"></i> Estrategia Reactiva
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Mantenimiento Correctivo</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    El mantenimiento correctivo es una de las estrategias de gestión de activos más tradicionales y ampliamente utilizadas en la industria. Este enfoque se centra en la reparación de equipos y sistemas después de que han fallado o han mostrado un rendimiento defectuoso. A pesar de su naturaleza reactiva, el mantenimiento correctivo sigue siendo esencial para garantizar la continuidad operativa y minimizar el impacto de las fallas en la producción.
                </p>
            </div>

            {/* Fundamentos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
                    Fundamentos del Mantenimiento Correctivo
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-slate-600 mb-6">
                        El mantenimiento correctivo se caracteriza por su enfoque reactivo, donde las acciones de mantenimiento se realizan solo después de que se ha identificado una falla. Este tipo de mantenimiento puede ser planificado o no planificado.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-screwdriver-wrench"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Reparación Posterior a la Falla</h3>
                                <p className="text-sm text-slate-500">Acciones realizadas después de producirse una avería.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-rotate-right"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Restauración de Funcionalidad</h3>
                                <p className="text-sm text-slate-500">Objetivo principal: volver al estado operativo normal rápidamente.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Evaluación de Causas</h3>
                                <p className="text-sm text-slate-500">Identificar la raíz del problema para evitar recurrencia.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-clipboard-list"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Documentación y Registro</h3>
                                <p className="text-sm text-slate-500">Registros detallados para mejorar la gestión futura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tipos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
                    Tipos de Mantenimiento Correctivo
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                        <h3 className="font-bold text-amber-800 mb-3 flex items-center text-lg"><i className="fa-regular fa-calendar-check mr-2"></i> Planificado</h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            Se lleva a cabo cuando se detecta un problema incipiente y se programa una intervención antes de que ocurra una falla catastrófica. Esto permite una gestión más controlada y reduce el tiempo de inactividad.
                        </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h3 className="font-bold text-red-800 mb-3 flex items-center text-lg"><i className="fa-solid fa-triangle-exclamation mr-2"></i> No Planificado</h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            Se realiza en respuesta a fallas inesperadas y urgentes, lo que puede resultar en interrupciones significativas de la producción y mayores costos de reparación.
                        </p>
                    </div>
                </div>
            </div>

            {/* Técnicas */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
                    Técnicas de Mantenimiento Correctivo
                </h2>
                <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
                    <div className="p-5 flex items-start">
                        <i className="fa-solid fa-stethoscope text-slate-400 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">Diagnóstico de Fallas</h4>
                            <p className="text-sm text-slate-600 mt-1">Uso de herramientas como análisis de vibraciones, termografía y ultrasonido para identificar la causa raíz.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-start">
                        <i className="fa-solid fa-wrench text-slate-400 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">Reparación y Reemplazo</h4>
                            <p className="text-sm text-slate-600 mt-1">Intervención directa para reparar o sustituir componentes defectuosos.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-start">
                        <i className="fa-solid fa-vial text-slate-400 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">Pruebas y Validación</h4>
                            <p className="text-sm text-slate-600 mt-1">Asegurar que el equipo reparado funcione correctamente antes de reintegrarlo.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-start">
                        <i className="fa-solid fa-arrow-up-right-dots text-slate-400 mt-1 mr-4"></i>
                        <div>
                            <h4 className="font-bold text-slate-800">Mejoras y Modificaciones</h4>
                            <p className="text-sm text-slate-600 mt-1">Implementar mejoras durante la reparación para prevenir fallas recurrentes.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Beneficios y Desafíos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">4</span>
                    Beneficios y Desafíos
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-emerald-600 mb-4 flex items-center"><i className="fa-solid fa-thumbs-up mr-2"></i> Beneficios</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Respuesta Inmediata:</strong> Minimiza impacto de fallas inesperadas.</span>
                            </li>
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Flexibilidad:</strong> No requiere planificación anticipada rigurosa.</span>
                            </li>
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Costo Inicial Bajo:</strong> Menor inversión en monitoreo continuo.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-rose-600 mb-4 flex items-center"><i className="fa-solid fa-thumbs-down mr-2"></i> Desafíos</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Interrupciones:</strong> Paradas no planificadas y pérdidas económicas.</span>
                            </li>
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Costos a Largo Plazo:</strong> Mayores costos de reparación y tiempo inactivo.</span>
                            </li>
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Riesgo de Fallas Graves:</strong> Posibles daños irreparables y riesgos de seguridad.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Implementación */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">5</span>
                    Implementación Efectiva
                </h2>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex items-center">
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold mr-3 text-sm">1</span>
                            <span className="text-slate-700 font-medium">Desarrollo de Procedimientos Claros</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold mr-3 text-sm">2</span>
                            <span className="text-slate-700 font-medium">Capacitación del Personal Técnico</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold mr-3 text-sm">3</span>
                            <span className="text-slate-700 font-medium">Gestión de Repuestos Críticos</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold mr-3 text-sm">4</span>
                            <span className="text-slate-700 font-medium">Monitoreo y Evaluación</span>
                        </div>
                        <div className="flex items-center md:col-span-2">
                            <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold mr-3 text-sm">5</span>
                            <span className="text-slate-700 font-medium">Documentación y Análisis de Datos</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Casos de Estudio */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">6</span>
                    Casos de Estudio
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-rose-200 transition-colors">
                        <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-industry text-rose-500 mr-2"></i> Manufactura</h3>
                        <p className="text-sm text-slate-600">Esencial para evitar interrupciones prolongadas en maquinaria de procesamiento y ensamblaje.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-rose-200 transition-colors">
                        <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-bolt text-rose-500 mr-2"></i> Energía</h3>
                        <p className="text-sm text-slate-600">Abordaje de fallas en equipos críticos como turbinas y generadores.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-rose-200 transition-colors">
                        <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-truck-fast text-rose-500 mr-2"></i> Transporte</h3>
                        <p className="text-sm text-slate-600">Reparación de vehículos y equipos de carga para garantizar la continuidad logística.</p>
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
}
