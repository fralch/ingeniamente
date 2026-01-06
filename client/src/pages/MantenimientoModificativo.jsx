import React from 'react';
import { Link } from 'react-router-dom';

export default function MantenimientoModificativo() {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
            
            {/* Hero Section */}
            <div className="mb-10 border-b border-slate-100 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Mejora Continua
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Mantenimiento Modificativo</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    El mantenimiento modificativo es una estrategia avanzada de gestión de activos que se centra en la mejora continua y la adaptación de equipos y sistemas para aumentar su eficiencia, fiabilidad y vida útil. A diferencia de otros tipos de mantenimiento que se centran en la reparación o prevención de fallas, el mantenimiento modificativo busca realizar cambios proactivos que optimicen el rendimiento del equipo.
                </p>
            </div>

            {/* Fundamentos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
                    Fundamentos del Mantenimiento Modificativo
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-slate-600 mb-6">
                        El mantenimiento modificativo se basa en la premisa de que los equipos y sistemas pueden ser mejorados constantemente a través de modificaciones y actualizaciones. Estas mejoras pueden implicar cambios en el diseño, la configuración, los materiales o los procesos operativos.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Optimización Continua</h3>
                                <p className="text-sm text-slate-500">Buscar constantemente maneras de mejorar el rendimiento y la eficiencia del equipo.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-lightbulb"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Innovación</h3>
                                <p className="text-sm text-slate-500">Implementar nuevas tecnologías y metodologías para mejorar los sistemas existentes.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-puzzle-piece"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Adaptabilidad</h3>
                                <p className="text-sm text-slate-500">Modificar el equipo para adaptarse a nuevas condiciones operativas o requisitos.</p>
                            </div>
                        </div>
                        <div className="flex items-start p-4 bg-white rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 mb-1">Mejora de la Fiabilidad</h3>
                                <p className="text-sm text-slate-500">Aumentar la vida útil y reducir las tasas de fallos a través de mejoras específicas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Técnicas */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
                    Técnicas de Mantenimiento Modificativo
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:border-purple-200 transition-colors shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mr-5 text-xl">
                            <i className="fa-solid fa-gear"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Reingeniería de Componentes</h3>
                            <p className="text-slate-600 text-sm">Rediseñar partes del equipo para mejorar su rendimiento o durabilidad.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:border-purple-200 transition-colors shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mr-5 text-xl">
                            <i className="fa-solid fa-microchip"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Actualización de Tecnología</h3>
                            <p className="text-slate-600 text-sm">Integrar nuevas tecnologías, como sistemas de control avanzados o materiales de alta resistencia.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:border-purple-200 transition-colors shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mr-5 text-xl">
                            <i className="fa-solid fa-sliders"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Optimización de Procesos</h3>
                            <p className="text-slate-600 text-sm">Ajustar los parámetros operativos para maximizar la eficiencia y minimizar el desgaste.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-5 bg-white rounded-xl border border-slate-200 hover:border-purple-200 transition-colors shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mr-5 text-xl">
                            <i className="fa-solid fa-book-open"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Implementación de Mejores Prácticas</h3>
                            <p className="text-slate-600 text-sm">Adoptar métodos operativos y de mantenimiento basados en las mejores prácticas de la industria.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Beneficios */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
                    Beneficios del Mantenimiento Modificativo
                </h2>
                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex items-start">
                            <i className="fa-solid fa-circle-check text-purple-500 mt-1 mr-3"></i>
                            <div>
                                <strong className="text-slate-900">Mejora del Rendimiento:</strong>
                                <span className="text-slate-700 block text-sm mt-1">Las modificaciones pueden aumentar la eficiencia operativa y la capacidad de producción.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-circle-check text-purple-500 mt-1 mr-3"></i>
                            <div>
                                <strong className="text-slate-900">Aumento de la Vida Útil del Equipo:</strong>
                                <span className="text-slate-700 block text-sm mt-1">Las mejoras estructurales y funcionales pueden extender significativamente la vida útil de los activos.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-circle-check text-purple-500 mt-1 mr-3"></i>
                            <div>
                                <strong className="text-slate-900">Reducción de Costos a Largo Plazo:</strong>
                                <span className="text-slate-700 block text-sm mt-1">Los beneficios a largo plazo en términos de reducción de fallas y mejoras de rendimiento pueden resultar en ahorros significativos.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-circle-check text-purple-500 mt-1 mr-3"></i>
                            <div>
                                <strong className="text-slate-900">Flexibilidad Operativa:</strong>
                                <span className="text-slate-700 block text-sm mt-1">Permite que los equipos se adapten a nuevos requisitos de producción o cambios en las condiciones operativas.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Implementación */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">4</span>
                    Implementación
                </h2>
                <div className="relative pl-8 border-l-2 border-slate-200 space-y-8">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">1. Evaluación Inicial</h4>
                        <p className="text-sm text-slate-600">Identificar qué equipos y sistemas pueden beneficiarse más de las modificaciones.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">2. Análisis de Costos y Beneficios</h4>
                        <p className="text-sm text-slate-600">Evaluar los costos de las modificaciones en comparación con los beneficios esperados.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">3. Diseño de Modificaciones</h4>
                        <p className="text-sm text-slate-600">Desarrollar planes detallados incluyendo especificaciones técnicas y cronogramas.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">4. Pruebas y Validación</h4>
                        <p className="text-sm text-slate-600">Implementar en entorno controlado y realizar pruebas para validar resultados.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">5. Implementación Completa</h4>
                        <p className="text-sm text-slate-600">Desplegar las modificaciones a gran escala y monitorear su desempeño.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm"></span>
                        <h4 className="font-bold text-slate-800 mb-1">6. Mejora Continua</h4>
                        <p className="text-sm text-slate-600">Establecer un proceso para revisar y mejorar continuamente las modificaciones.</p>
                    </div>
                </div>
            </div>

            {/* Casos de Estudio */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">5</span>
                    Casos de Estudio
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="text-blue-500 text-2xl mb-4"><i className="fa-solid fa-car"></i></div>
                        <h3 className="font-bold text-slate-900 mb-2">Industria Automotriz</h3>
                        <p className="text-sm text-slate-600">Toyota y Ford implementan modificaciones para mejorar la eficiencia y calidad en líneas de ensamblaje.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="text-emerald-500 text-2xl mb-4"><i className="fa-solid fa-solar-panel"></i></div>
                        <h3 className="font-bold text-slate-900 mb-2">Energía Renovable</h3>
                        <p className="text-sm text-slate-600">Modificaciones en sistemas de generación solar y eólica para maximizar producción y reducir costos.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="text-amber-500 text-2xl mb-4"><i className="fa-solid fa-utensils"></i></div>
                        <h3 className="font-bold text-slate-900 mb-2">Alimentos y Bebidas</h3>
                        <p className="text-sm text-slate-600">Nestlé y Coca-Cola modifican equipos para eficiencia y seguridad alimentaria.</p>
                    </div>
                </div>
            </div>

            {/* Desafíos */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">6</span>
                    Desafíos y Futuro
                </h2>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-money-bill text-slate-400 mr-2"></i> Costo Inicial</h4>
                            <p className="text-sm text-slate-600">Puede requerir una inversión significativa, siendo una barrera para algunas organizaciones.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-people-group text-slate-400 mr-2"></i> Gestión del Cambio</h4>
                            <p className="text-sm text-slate-600">Resistencia organizacional ante cambios significativos en procesos operativos.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-stopwatch text-slate-400 mr-2"></i> Interrupciones</h4>
                            <p className="text-sm text-slate-600">Las modificaciones pueden causar pausas temporales en la producción.</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2"><i className="fa-solid fa-rocket mr-2"></i> Futuro Prometedor</h4>
                        <p className="text-sm text-blue-800">
                            Avances continuos en tecnología y metodologías facilitan la identificación e implementación de mejoras. La integración de herramientas de análisis de datos y simulación mejorará la precisión y efectividad de las modificaciones.
                        </p>
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
