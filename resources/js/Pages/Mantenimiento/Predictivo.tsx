import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Predictivo() {
  return (
    <Layout>
      <Head title="Mantenimiento Predictivo" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        {/* Hero Section */}
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fa-solid fa-chart-line"></i> Estrategia Proactiva
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Mantenimiento Predictivo</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
                El mantenimiento predictivo es una estrategia de gestión de activos que se ha convertido en un pilar fundamental en la industria moderna. Con el objetivo de maximizar la vida útil de los equipos y minimizar las interrupciones no planificadas, el mantenimiento predictivo utiliza técnicas avanzadas de monitoreo y análisis de datos para predecir cuándo ocurrirá una falla.
            </p>
        </div>

        {/* Fundamentos */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
                Fundamentos del Mantenimiento Predictivo
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-600 mb-6">
                    A diferencia del mantenimiento reactivo (que responde a fallas) y el preventivo (basado en calendario), el predictivo se basa en el <strong>estado real del equipo</strong>. Esto se logra a través de:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <h3 className="font-bold text-slate-800 mb-2">Monitoreo Continuo</h3>
                        <p className="text-sm text-slate-500">Vigilancia constante de vibración, temperatura, presión y ruido.</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                        </div>
                        <h3 className="font-bold text-slate-800 mb-2">Análisis de Datos</h3>
                        <p className="text-sm text-slate-500">Procesamiento en tiempo real con algoritmos y estadística.</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                            <i className="fa-solid fa-clock-rotate-left"></i>
                        </div>
                        <h3 className="font-bold text-slate-800 mb-2">Predicción de Fallas</h3>
                        <p className="text-sm text-slate-500">Anticipación de problemas basada en patrones históricos.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Tecnologías Clave */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
                Tecnologías Clave
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="min-w-[40px] h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm mr-4">
                        <i className="fa-solid fa-wifi"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">IoT y Sensores</h3>
                        <p className="text-sm text-slate-600">Dispositivos que recopilan datos operativos en tiempo real.</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="min-w-[40px] h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm mr-4">
                        <i className="fa-solid fa-database"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Big Data</h3>
                        <p className="text-sm text-slate-600">Procesamiento masivo para identificar tendencias ocultas.</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="min-w-[40px] h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm mr-4">
                        <i className="fa-solid fa-brain"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">IA y Machine Learning</h3>
                        <p className="text-sm text-slate-600">Algoritmos que aprenden y mejoran la precisión predictiva.</p>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="min-w-[40px] h-10 bg-white rounded-lg flex items-center justify-center text-blue-500 shadow-sm mr-4">
                        <i className="fa-solid fa-desktop"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Sistemas CMMS</h3>
                        <p className="text-sm text-slate-600">Gestión integral de mantenimiento asistido por computadora.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Beneficios */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
                Beneficios del Mantenimiento Predictivo
            </h2>
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <ul className="space-y-4 relative z-10">
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-indigo-500 mt-1 mr-3"></i>
                        <div>
                            <strong className="text-slate-900">Reducción de Costos:</strong>
                            <span className="text-slate-700 block text-sm mt-1">Evita reparaciones costosas y reemplazos de emergencia.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-indigo-500 mt-1 mr-3"></i>
                        <div>
                            <strong className="text-slate-900">Mayor Disponibilidad:</strong>
                            <span className="text-slate-700 block text-sm mt-1">Menos tiempo de inactividad no planificado, mejorando la eficiencia.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-indigo-500 mt-1 mr-3"></i>
                        <div>
                            <strong className="text-slate-900">Optimización de Recursos:</strong>
                            <span className="text-slate-700 block text-sm mt-1">Enfoque en equipos que realmente necesitan atención.</span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <i className="fa-solid fa-circle-check text-indigo-500 mt-1 mr-3"></i>
                        <div>
                            <strong className="text-slate-900">Mejora de la Seguridad:</strong>
                            <span className="text-slate-700 block text-sm mt-1">Identificación temprana de riesgos de fallas catastróficas.</span>
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
            <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-500 mr-4 text-xl">01</span>
                    <div>
                        <h4 className="font-bold text-slate-800">Evaluación de Necesidades</h4>
                        <p className="text-sm text-slate-500">Identificar equipos críticos.</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-500 mr-4 text-xl">02</span>
                    <div>
                        <h4 className="font-bold text-slate-800">Selección de Tecnología</h4>
                        <p className="text-sm text-slate-500">Elegir sensores y herramientas adecuadas.</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-500 mr-4 text-xl">03</span>
                    <div>
                        <h4 className="font-bold text-slate-800">Integración de Sistemas</h4>
                        <p className="text-sm text-slate-500">Conectar datos con CMMS y plataformas.</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-500 mr-4 text-xl">04</span>
                    <div>
                        <h4 className="font-bold text-slate-800">Capacitación</h4>
                        <p className="text-sm text-slate-500">Entrenar al personal en nuevas tecnologías.</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border-l-4 border-blue-500 shadow-sm">
                    <span className="font-bold text-blue-500 mr-4 text-xl">05</span>
                    <div>
                        <h4 className="font-bold text-slate-800">Mejora Continua</h4>
                        <p className="text-sm text-slate-500">Análisis constante para refinar modelos.</p>
                    </div>
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
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-industry text-blue-500 mr-2"></i> Manufactura</h3>
                    <p className="text-sm text-slate-600">GE y Siemens optimizan líneas de producción reduciendo tiempos muertos.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-bolt text-amber-500 mr-2"></i> Energía</h3>
                    <p className="text-sm text-slate-600">Plantas aseguran la fiabilidad de generadores mediante monitoreo constante.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center"><i className="fa-solid fa-plane text-sky-500 mr-2"></i> Aviación</h3>
                    <p className="text-sm text-slate-600">Monitoreo de motores para máxima seguridad y eficiencia de flotas.</p>
                </div>
            </div>
        </div>

        {/* Desafíos */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">6</span>
                Desafíos y Futuro
            </h2>
            <div className="space-y-4">
                <div className="flex items-start p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <i className="fa-solid fa-triangle-exclamation text-orange-500 mt-1 mr-3"></i>
                    <div>
                        <strong className="text-slate-900 font-semibold">Desafíos Actuales:</strong>
                        <span className="text-slate-600 block text-sm mt-1">Costo inicial elevado, complejidad en gestión de datos y resistencia al cambio cultural.</span>
                    </div>
                </div>
                <div className="flex items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <i className="fa-solid fa-rocket text-emerald-500 mt-1 mr-3"></i>
                    <div>
                        <strong className="text-slate-900 font-semibold">Futuro Prometedor:</strong>
                        <span className="text-slate-600 block text-sm mt-1">Avances en IA e IoT permitirán niveles aún mayores de eficiencia y accesibilidad para todo tipo de empresas.</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
            <Link href="/pages/gestion-mantenimiento" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
                <i className="fa-solid fa-arrow-left mr-2"></i> Volver a Gestión de Mantenimiento
            </Link>
        </div>

      </div>
    </Layout>
  );
}
