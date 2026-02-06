import React, { useState } from 'react';
import Layout from '../Layouts/Layout';
import { Head } from '@inertiajs/react';

const CalculadoraMtbf = () => {
    const [totalTime, setTotalTime] = useState<string>('');
    const [failures, setFailures] = useState<string>('');
    const [mtbf, setMtbf] = useState<string | null>(null);
    const [failureRate, setFailureRate] = useState<string | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [errors, setErrors] = useState({ time: false, failures: false });

    const calculateMTBF = (e: React.FormEvent) => {
        e.preventDefault();

        const time = parseFloat(totalTime);
        const failCount = parseFloat(failures);
        
        const newErrors = {
            time: isNaN(time) || time <= 0,
            failures: isNaN(failCount) || failCount < 0
        };

        setErrors(newErrors);

        if (newErrors.time || newErrors.failures) return;

        if (failCount === 0) {
            setMtbf('∞');
            setFailureRate('0.00000');
        } else {
            setMtbf((time / failCount).toFixed(2));
            setFailureRate((failCount / time).toFixed(5));
        }

        setShowResults(true);
    };

    return (
        <Layout title="Calculadora de MTBF - Ingeniamente.com">
            <Head title="Calculadora de MTBF" />
            
            {/* Hero Section */}
            <div className="mb-10 border-b border-slate-100 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-calculator"></i> Herramientas de Gestión
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 font-heading">
                    Calculadora de <span className="bg-slate-800 text-white px-2 py-1 transform -rotate-2 inline-block rounded-md">MTBF</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mt-4">
                    El Tiempo Medio Entre Fallos (MTBF) es una medida clave en la gestión de mantenimiento y confiabilidad de equipos. Se utiliza para predecir el tiempo promedio entre fallos de un sistema.
                </p>
            </div>

            {/* Section 1: What is MTBF */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">¿Qué es el MTBF?</h2>
                <p className="text-slate-600 leading-relaxed">
                    El Tiempo Medio Entre Fallos (MTBF) es una medida clave en la gestión de mantenimiento y confiabilidad de equipos. Se utiliza para predecir el tiempo promedio entre fallos de un sistema, ayudando a planificar mantenimientos preventivos y mejorar la eficiencia operativa.
                </p>
            </div>

            {/* Section 2: Instructions */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">¿Cómo Utilizar la Calculadora?</h2>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start">
                            <span className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                            <span><strong>Tiempo Total de Operación</strong>: Introduce el tiempo total de operación en horas.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                            <span><strong>Número de Fallos</strong>: Introduce el número de fallos ocurridos durante ese periodo.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                            <span>Haz clic en el botón «<strong>Calcular</strong>» para obtener el MTBF y la Tasa de Fallas.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Calculator Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg max-w-lg mx-auto mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-8 font-heading">Calculadora MTBF</h3>
                
                <form onSubmit={calculateMTBF}>
                    <div className="mb-6">
                        <label htmlFor="totalTime" className="block mb-2 text-sm font-bold text-slate-700">Tiempo Total de Operación (horas):</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <input 
                                type="number" 
                                id="totalTime" 
                                step="any" 
                                min="0" 
                                placeholder="Ej. 1000" 
                                className={`w-full pl-10 p-3 rounded-xl border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700 focus:bg-white ${errors.time ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                                value={totalTime}
                                onChange={(e) => {
                                    setTotalTime(e.target.value);
                                    if(errors.time) setErrors({...errors, time: false});
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <label htmlFor="failures" className="block mb-2 text-sm font-bold text-slate-700">Número de Fallos:</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <i className="fa-solid fa-triangle-exclamation"></i>
                            </div>
                            <input 
                                type="number" 
                                id="failures" 
                                step="any" 
                                min="0" 
                                placeholder="Ej. 5" 
                                className={`w-full pl-10 p-3 rounded-xl border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700 focus:bg-white ${errors.failures ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'}`}
                                value={failures}
                                onChange={(e) => {
                                    setFailures(e.target.value);
                                    if(errors.failures) setErrors({...errors, failures: false});
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/20 mb-8 transform hover:-translate-y-1">
                        Calcular Resultados
                    </button>
                </form>

                {/* Results */}
                {showResults && (
                    <div id="results" className="animate-fade-in-up">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                                <div>
                                    <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">MTBF</span>
                                    <span className={`block font-extrabold text-blue-600 ${mtbf === '∞' ? 'text-4xl' : 'text-3xl'}`}>{mtbf}</span>
                                    <span className="text-sm text-slate-400 block mt-1">horas</span>
                                </div>
                                <div className="md:border-l md:border-slate-200">
                                    <span className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Tasa de Fallas</span>
                                    <span className="text-3xl font-extrabold text-red-500">{failureRate}</span>
                                    <span className="text-sm text-slate-400 block mt-1">fallos/hora</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Section 3: Benefits */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">Beneficios del Cálculo</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-cyan-500 mb-2"><i className="fa-solid fa-chart-line text-2xl"></i></div>
                        <h3 className="font-bold text-slate-800 mb-1">Mejora Continua</h3>
                        <p className="text-sm text-slate-600">Permite medir la efectividad de los planes de mantenimiento.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-cyan-500 mb-2"><i className="fa-solid fa-coins text-2xl"></i></div>
                        <h3 className="font-bold text-slate-800 mb-1">Reducción de Costos</h3>
                        <p className="text-sm text-slate-600">Ayuda a optimizar el stock de repuestos y reducir paradas no planificadas.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-cyan-500 mb-2"><i className="fa-solid fa-stopwatch text-2xl"></i></div>
                        <h3 className="font-bold text-slate-800 mb-1">Disponibilidad</h3>
                        <p className="text-sm text-slate-600">Aumenta el tiempo operativo de los equipos críticos.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CalculadoraMtbf;
