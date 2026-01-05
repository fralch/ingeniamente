import React from 'react';
import { Link } from 'react-router-dom';

export default function Neumatica() {
    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
            {/* Hero Section */}
            <div className="mb-10 border-b border-slate-100 pb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <i className="fa-solid fa-wind"></i> Mecánica de Fluidos
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Neumática: Principios y Aplicaciones</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    La neumática es una rama fundamental de la mecánica de fluidos que se enfoca en el uso de aire comprimido para transmitir y controlar energía. Se ha observado cómo la neumática se ha convertido en una tecnología esencial en diversas aplicaciones industriales, desde sistemas de automatización hasta maquinaria de transporte.
                </p>
            </div>

            {/* Principios Básicos */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-atom"></i></span>
                    Principios Básicos
                </h2>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                    <p className="text-slate-600 mb-4">
                        La neumática se basa en la utilización de aire comprimido para transmitir y controlar energía. Los sistemas neumáticos se caracterizan por su rapidez, limpieza y seguridad.
                    </p>
                    
                    <h3 className="font-bold text-slate-800 text-lg mb-3">Ley de Boyle</h3>
                    <p className="text-slate-600 mb-4">La operación de los sistemas neumáticos puede ser descrita por la Ley de Boyle, que establece que para un gas ideal a temperatura constante, el producto de la presión y el volumen es constante:</p>
                    
                    <div className="flex justify-center py-6 bg-white rounded-xl shadow-sm mb-4">
                        <div className="text-2xl font-serif text-slate-800">
                            {'\\[ P_1 V_1 = P_2 V_2 \\]'}
                        </div>
                    </div>

                    <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100 mb-4">
                        <strong className="block mb-2 text-slate-700">Donde:</strong>
                        <ul className="space-y-1">
                            <li>• <strong>P1:</strong> es presión inicial.</li>
                            <li>• <strong>P2:</strong> es presión final.</li>
                            <li>• <strong>V1:</strong> es volumen inicial.</li>
                            <li>• <strong>V2:</strong> es volumen final.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Componentes Principales */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-gears"></i></span>
                    Componentes Principales
                </h2>

                <div className="space-y-8">
                    
                    {/* 1. Compresor de Aire */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center">1. Compresor de Aire</h3>
                        <p className="text-slate-600 mb-4">Genera aire comprimido a partir de la energía mecánica. Los compresores pueden ser de varios tipos:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                            <li><strong>Compresores de Pistón:</strong> Utilizan un pistón para comprimir el aire en un cilindro. Son ideales para aplicaciones de alta presión.</li>
                            <li><strong>Compresores de Tornillo:</strong> Utilizan dos tornillos helicoidales para comprimir el aire. Son eficientes y adecuados para aplicaciones de alta demanda continua.</li>
                            <li><strong>Compresores de Paletas:</strong> Utilizan paletas deslizantes en un rotor para comprimir el aire. Son adecuados para aplicaciones de presión moderada.</li>
                        </ul>
                        <p className="text-slate-600 mb-4 text-sm">La capacidad de un compresor se mide en metros cúbicos por minuto (m³/min) y su presión en bares (bar). La ecuación fundamental para la capacidad del compresor es:</p>
                        <div className="flex justify-center py-4 bg-slate-50 rounded-xl mb-4">
                            <div className="text-xl font-serif text-slate-800">
                                {'\\[ Q = \\frac{V}{t} \\]'}
                            </div>
                        </div>
                        <div className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                            <strong className="block mb-1 text-slate-700">Donde:</strong>
                            <ul className="space-y-1">
                                <li>• <strong>Q:</strong> es el caudal (m³/min).</li>
                                <li>• <strong>V:</strong> es el volumen de aire comprimido (m³).</li>
                                <li>• <strong>t:</strong> es el tiempo (min).</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Válvulas Neumáticas */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center">2. Válvulas Neumáticas</h3>
                        <p className="text-slate-600 mb-4">Controlan el flujo y la dirección del aire. Existen diferentes tipos de válvulas:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            <li><strong>Válvulas Direccionales:</strong> Controlan el camino del flujo de aire, esenciales para la operación de cilindros y motores neumáticos.</li>
                            <li><strong>Válvulas de Control de Presión:</strong> Mantienen la presión dentro de límites preestablecidos, protegiendo el sistema de sobrepresiones.</li>
                            <li><strong>Válvulas de Control de Flujo:</strong> Regulan la velocidad del flujo, permitiendo un control preciso de la velocidad de los actuadores.</li>
                        </ul>
                    </div>

                    {/* 3. Actuadores Neumáticos */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center">3. Actuadores Neumáticos</h3>
                        <p className="text-slate-600 mb-4">Convierten la energía del aire comprimido en movimiento mecánico. Los tipos principales de actuadores son los cilindros neumáticos y los motores neumáticos.</p>
                        
                        <ul className="list-disc pl-5 space-y-6 text-slate-600">
                            <li>
                                <strong>Cilindros Neumáticos:</strong> Utilizados para proporcionar movimiento lineal. La fuerza generada por un cilindro neumático se calcula como:
                                <div className="flex justify-center py-4 bg-slate-50 rounded-xl my-3">
                                    <div className="text-xl font-serif text-slate-800">
                                        {'\\[ F = P \\times A \\]'}
                                    </div>
                                </div>
                                <div className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                    <strong className="block mb-1 text-slate-700">Donde:</strong>
                                    <ul className="space-y-1">
                                        <li>• <strong>F:</strong> es la fuerza (N).</li>
                                        <li>• <strong>P:</strong> es la presión del aire (Pa).</li>
                                        <li>• <strong>A:</strong> es el área del pistón (m²).</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <strong>Motores Neumáticos:</strong> Utilizados para proporcionar movimiento rotativo. La potencia generada por un motor neumático se calcula como:
                                <div className="flex justify-center py-4 bg-slate-50 rounded-xl my-3">
                                    <div className="text-xl font-serif text-slate-800">
                                        {'\\[ P = \\frac{T \\times \\omega}{9550} \\]'}
                                    </div>
                                </div>
                                <div className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                    <strong className="block mb-1 text-slate-700">Donde:</strong>
                                    <ul className="space-y-1">
                                        <li>• <strong>P:</strong> es la potencia (kW).</li>
                                        <li>• <strong>T:</strong> es el par (Nm).</li>
                                        <li>• <strong>ω:</strong> es la velocidad angular (rpm).</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Acumuladores de Aire */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center">4. Acumuladores de Aire</h3>
                        <p className="text-slate-600">Almacenan aire comprimido para su uso cuando sea necesario. Esto ayuda a mantener la presión constante en el sistema y proporciona una fuente de energía inmediata para los actuadores.</p>
                    </div>

                    {/* 5. Filtros y Lubricadores */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center">5. Filtros y Lubricadores</h3>
                        <p className="text-slate-600 mb-4">Mantienen el aire libre de partículas y proporcionan lubricación para prolongar la vida útil de los componentes neumáticos. Los tipos de filtros incluyen:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            <li><strong>Filtros de Succión:</strong> Ubicados antes del compresor para protegerlo de partículas grandes.</li>
                            <li><strong>Filtros de Línea:</strong> Ubicados en la línea de aire para eliminar partículas finas y humedad.</li>
                            <li><strong>Filtros de Retorno:</strong> Ubicados antes del tanque de almacenamiento de aire para eliminar contaminantes antes de que el aire regrese al compresor.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Aplicaciones */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-briefcase"></i></span>
                    Aplicaciones
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="fa-solid fa-check text-sky-500 mt-1 mr-3 text-sm"></i>
                            <span className="text-slate-700"><strong>Automatización Industrial:</strong> Robots, sistemas de manipulación y líneas de ensamblaje utilizan sistemas neumáticos para operaciones rápidas y repetitivas.</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check text-sky-500 mt-1 mr-3 text-sm"></i>
                            <span className="text-slate-700"><strong>Transporte:</strong> Los sistemas de frenos neumáticos son estándar en vehículos pesados como camiones y autobuses.</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check text-sky-500 mt-1 mr-3 text-sm"></i>
                            <span className="text-slate-700"><strong>Medicina:</strong> Equipos médicos, como respiradores y equipos de laboratorio, utilizan neumática para funcionamiento seguro y limpio.</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-check text-sky-500 mt-1 mr-3 text-sm"></i>
                            <span className="text-slate-700"><strong>Empaque:</strong> Máquinas de envasado y sistemas de etiquetado utilizan la neumática para operaciones precisas y rápidas.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Ventajas y Desventajas */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-scale-balanced"></i></span>
                    Ventajas y Desventajas
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-emerald-600 mb-4 flex items-center"><i className="fa-solid fa-thumbs-up mr-2"></i> Ventajas</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Seguridad y Limpieza:</strong> El aire es abundante y no contaminante, haciendo que los sistemas neumáticos sean seguros y limpios.</span>
                            </li>
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Simplicidad y Bajo Costo de Mantenimiento:</strong> Los componentes neumáticos son generalmente más simples y menos costosos de mantener que los sistemas hidráulicos.</span>
                            </li>
                            <li className="flex items-start bg-emerald-50 p-3 rounded-lg">
                                <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Velocidad de Operación Alta:</strong> Los sistemas neumáticos pueden operar a altas velocidades, lo que es ideal para aplicaciones que requieren movimientos rápidos y repetitivos.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-rose-600 mb-4 flex items-center"><i className="fa-solid fa-thumbs-down mr-2"></i> Desventajas</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Menor Capacidad de Fuerza:</strong> Los sistemas neumáticos tienen una menor capacidad de fuerza en comparación con los sistemas hidráulicos.</span>
                            </li>
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Ruidos Generados por el Escape de Aire:</strong> Los sistemas neumáticos pueden generar ruidos significativos debido al escape de aire.</span>
                            </li>
                            <li className="flex items-start bg-rose-50 p-3 rounded-lg">
                                <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                                <span className="text-sm text-slate-700"><strong>Menor Precisión en el Control de Movimientos:</strong> Los sistemas neumáticos son menos precisos en el control de movimientos comparados con los sistemas hidráulicos debido a la compresibilidad del aire.</span>
                            </li>
                        </ul>
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
