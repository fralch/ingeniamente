import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CalculadoraMTBF() {
    const [totalTime, setTotalTime] = useState('');
    const [failures, setFailures] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState({ time: false, failures: false });

    const calculate = (e) => {
        e.preventDefault();
        
        const timeVal = parseFloat(totalTime);
        const failVal = parseFloat(failures);
        
        let newError = { time: false, failures: false };
        let hasError = false;

        if (isNaN(timeVal) || timeVal <= 0) {
            newError.time = true;
            hasError = true;
        }
        if (isNaN(failVal) || failVal < 0) {
            newError.failures = true;
            hasError = true;
        }

        setError(newError);

        if (hasError) return;

        let mtbf = 0;
        let failureRate = 0;
        let mtbfText = '';
        let rateText = '';

        if (failVal === 0) {
            mtbfText = "Infinito (Sin fallos)";
            rateText = "0.00000 fallos/hora";
        } else {
            mtbf = timeVal / failVal;
            failureRate = failVal / timeVal;
            mtbfText = mtbf.toFixed(2) + " horas";
            rateText = failureRate.toFixed(5) + " fallos/hora";
        }

        setResult({ mtbf: mtbfText, rate: rateText });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
            
            {/* Breadcrumbs */}
            <nav className="flex mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                            <i className="fa-solid fa-house mr-2"></i>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <i className="fa-solid fa-chevron-right text-slate-300 mx-2"></i>
                            <span className="ml-1 font-medium text-slate-800 md:ml-2">Calculadora de MTBF</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 font-heading">Cálculadora de <span className="bg-slate-800 text-white px-2 py-1 transform -rotate-2 inline-block rounded-md">MTBF</span></h1>
            
            <hr className="border-slate-200 my-8" />

            {/* Section 1: What is MTBF */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">¿Qué es el MTBF?</h2>
                <p className="text-slate-600 leading-relaxed">
                    El Tiempo Medio Entre Fallos (MTBF) es una medida clave en la gestión de mantenimiento y confiabilidad de equipos. Se utiliza para predecir el tiempo promedio entre fallos de un sistema, ayudando a planificar mantenimientos preventivos y mejorar la eficiencia operativa.
                </p>
            </div>

            {/* Section 2: Instructions */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">¿Cómo Utilizar la Calculadora MTBF y Tasa de Fallas?</h2>
                <p className="text-slate-600 mb-4">Para utilizar la calculadora, sigue estos pasos:</p>
                <ul className="space-y-2 text-slate-600 list-disc list-inside ml-2">
                    <li><strong>Tiempo Total de Operación</strong>: Introduce el tiempo total de operación en horas.</li>
                    <li><strong>Número de Fallos</strong>: Introduce el número de fallos ocurridos.</li>
                    <li>Haz clic en el botón «<strong>Calcular MTBF y Tasa de Fallas</strong>» para obtener los resultados.</li>
                </ul>
                <p className="text-slate-500 text-sm mt-4 italic">Nota: Asegúrate de ingresar valores válidos en los campos.</p>
            </div>

            {/* Calculator Card */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm max-w-lg mx-auto mb-12">
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-6 font-heading">Calculadora MTBF y Tasa de Fallas</h3>
                
                <form onSubmit={calculate}>
                    <div className="mb-5">
                        <label htmlFor="totalTime" className="block mb-2 text-sm font-bold text-slate-700">Tiempo Total de Operación (horas):</label>
                        <input 
                            type="number" 
                            id="totalTime" 
                            step="any" 
                            min="0" 
                            placeholder="Ej. 1000" 
                            value={totalTime}
                            onChange={(e) => setTotalTime(e.target.value)}
                            className={`w-full p-3 rounded-xl border ${error.time ? 'border-red-500' : 'border-slate-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700`}
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="failures" className="block mb-2 text-sm font-bold text-slate-700">Número de Fallos:</label>
                        <input 
                            type="number" 
                            id="failures" 
                            step="any" 
                            min="0" 
                            placeholder="Ej. 5" 
                            value={failures}
                            onChange={(e) => setFailures(e.target.value)}
                            className={`w-full p-3 rounded-xl border ${error.failures ? 'border-red-500' : 'border-slate-300'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700`}
                        />
                    </div>

                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-lg shadow-green-600/20 mb-6">
                        Calcular MTBF y Tasa de Fallas
                    </button>
                </form>

                {/* Results */}
                {result && (
                    <div className="text-center fade-in">
                        <div className="mb-2">
                            <span className="block text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">MTBF</span>
                            <span className="text-2xl font-bold text-slate-800">{result.mtbf}</span>
                        </div>
                        <div>
                            <span className="block text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Tasa de Fallas</span>
                            <span className="text-xl font-bold text-slate-800">{result.rate}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Section 3: Benefits */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4 font-heading">Beneficios del Cálculo del MTBF y la Tasa de Fallas</h2>
                <p className="text-slate-600 leading-relaxed">
                    El cálculo del MTBF y la tasa de fallas proporciona información valiosa sobre la confiabilidad de los equipos, permitiendo a los ingenieros y profesionales de mantenimiento tomar decisiones informadas para mejorar la disponibilidad y reducir costos operativos.
                </p>
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
