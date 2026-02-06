import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Preventivo() {

  useEffect(() => {
    // Re-render MathJax equations when component mounts/updates
    if ((window as any).MathJax) {
      (window as any).MathJax.typesetPromise && (window as any).MathJax.typesetPromise();
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Mantenimiento Preventivo</title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </Head>
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        {/* Hero Section */}
        <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fa-solid fa-calendar-check"></i> Estrategia Planificada
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Mantenimiento Preventivo</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
                El mantenimiento preventivo es una estrategia de mantenimiento en la que se realizan acciones proactivas para prevenir fallas y asegurar el buen funcionamiento de los equipos y sistemas. Se trata de una forma de realizar mantenimiento antes de que precisen un problema o falla, y se basa en la inspección regular, la reparación programada y otros procesos preventivos.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
                El objetivo del mantenimiento preventivo es prevenir interrupciones no planificadas en el funcionamiento de los equipos y sistemas, prolongar su vida útil, mejorar su disponibilidad y reducir los costos totales de propiedad. Además, el mantenimiento preventivo también puede ayudar a mejorar la seguridad de los trabajadores y minimizar los impactos en el negocio.
            </p>
        </div>

        {/* MTBF */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-clock"></i></span>
                MTBF (Mean Time Between Failures)
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                    <li>El MTBF se refiere al tiempo promedio que transcurre entre dos fallas consecutivas de un equipo o sistema. Este término se utiliza para determinar la confiabilidad de un sistema y es una herramienta útil para identificar los componentes o sistemas que requieren más atención durante el mantenimiento preventivo.</li>
                    <li>El MTBF se utiliza para estimar la frecuencia de los planes de mantenimiento preventivo, ya que proporciona una idea de cuánto tiempo puede transcurrir antes de que se produzca una caída. Esto puede ayudar a identificar los puntos críticos en el ciclo de vida del equipo ya desarrollar un plan de mantenimiento preventivo efectivo que ayude a prolongar su vida útil y a minimizar los fallos.</li>
                </ul>
                
                <h3 className="font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">Ecuación de MTBF</h3>
                <p className="text-slate-600 mb-4">El MTBF se puede calcular dividiendo el tiempo total que un equipo o sistema está en funcionamiento sin fallas por el número de fallas que ha experimentado.</p>
                
                <div className="flex flex-wrap justify-center gap-8 py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div className="text-2xl font-serif text-slate-800">
                        {`\\[ MTBF = \\frac{h_T}{P} \\]`}
                    </div>
                    <div className="text-2xl font-serif text-slate-800">
                        {`\\[ MTBF = \\frac{1}{\\lambda} \\]`}
                    </div>
                </div>

                <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100">
                    <strong className="block mb-2 text-slate-700">Donde:</strong>
                    <ul className="space-y-1">
                        <li>• <strong>hT:</strong> Horas trabajadas o de marcha durante el periodo de evaluación.</li>
                        <li>• <strong>P:</strong> Número de paros durante el periodo de evaluación.</li>
                        <li>• <strong>λ:</strong> Tasa de fallas.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* MTTR */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                MTTR (Mean Time To Repair)
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                    <li>Por otro lado, el MTTR se refiere al tiempo promedio que se requiere para reparar un equipo o sistema después de un fallo. Este término es útil para medir la eficiencia de la reparación y la capacidad de recuperación después de un fallo.</li>
                    <li>El MTTR es un indicador importante de la eficiencia y la efectividad de mantenimiento preventivo, ya que proporciona una idea del tiempo requerido para reparar un fallo y volver a poner el equipo en funcionamiento. Al conocer el MTTR, es posible desarrollar un plan de mantenimiento preventivo que ayude a reducir el tiempo de inactividad del equipo y a maximizar su disponibilidad.</li>
                </ul>
                
                <h3 className="font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">Ecuación de MTTR</h3>
                <p className="text-slate-600 mb-4">El MTTR se puede calcular dividiendo el tiempo total que se ha utilizado para reparar todos los fallos por el número total de fallos.</p>
                
                <div className="flex flex-wrap justify-center gap-8 py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div className="text-2xl font-serif text-slate-800">
                        {`\\[ MTTR = \\frac{h_p}{P} \\]`}
                    </div>
                    <div className="text-2xl font-serif text-slate-800">
                        {`\\[ MTTR = \\frac{1}{\\mu} \\]`}
                    </div>
                </div>

                <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100">
                    <strong className="block mb-2 text-slate-700">Donde:</strong>
                    <ul className="space-y-1">
                        <li>• <strong>hp:</strong> Horas de reparación durante el periodo de evaluación.</li>
                        <li>• <strong>P:</strong> Número de reparaciones durante el periodo de evaluación.</li>
                        <li>• <strong>μ:</strong> Tasa de reparaciones.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Summary MTBF & MTTR */}
        <div className="mb-12 bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-3">MTBF y MTTR</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-700">
                <li>En resumen, MTBF y MTTR son dos términos clave en el mantenimiento preventivo que se utilizan para determinar la frecuencia de mantenimiento y para evaluar la eficiencia y efectividad de los equipos.</li>
                <li>Al utilizar estos indicadores, es posible mejorar la confiabilidad del equipo, prolongar su vida útil y minimizar los costos totales de propiedad.</li>
            </ul>
        </div>

        {/* Confiabilidad */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-shield-halved"></i></span>
                Confiabilidad
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                    <li>La confiabilidad de un equipo es la probabilidad de que un sistema, activo o componente lleve a cabo su función adecuadamente durante un periodo bajo condiciones operacionales previamente definidas y constantes.</li>
                    <li>La confiabilidad es un dato estadístico, pues es una probabilidad la cual es determinada o calculada a partir de la información de los registros de los paros.</li>
                    <li>La confiabilidad se puede aplicar a un sistema, a un activo o a un componente. Es en este punto donde se debe tener en cuenta si el sistema es en serie, en paralelo o redundante.</li>
                </ul>
                
                <h3 className="font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">Ecuación de Confiabilidad</h3>
                <p className="text-slate-600 mb-4">La confiabilidad de un equipo o producto puede ser expresada a través de la expresión:</p>
                
                <div className="flex flex-wrap justify-center gap-8 py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div className="text-xl font-serif text-slate-800">
                        {`\\[ R(t) = e^{(-t/MTBF)} \\]`}
                    </div>
                    <div className="text-xl font-serif text-slate-800">
                        {`\\[ R(t) = e^{(-\\lambda t)} \\]`}
                    </div>
                </div>

                <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100 mb-8">
                    <strong className="block mb-2 text-slate-700">Donde:</strong>
                    <ul className="space-y-1">
                        <li>• <strong>R(t):</strong> Confiabilidad.</li>
                        <li>• <strong>e:</strong> Constante Neperiana (≈2.71828...)</li>
                        <li>• <strong>MTBF:</strong> Tiempo Medio Entre Fallas.</li>
                        <li>• <strong>λ:</strong> Tasa de fallas (número total de fallas por periodo de operación).</li>
                        <li>• <strong>t:</strong> Tiempo.</li>
                    </ul>
                </div>

                {/* Systems Types */}
                <div className="space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2 text-lg">Sistema en Serie</h4>
                        <p className="text-slate-600 text-sm mb-3">Los sistemas en serie se caracterizan por que el funcionamiento de cada ítem que lo compone depende directamente del funcionamiento del componente que le antecede y precede es decir, si uno de los componentes falla, falla todo el sistema.</p>
                        <p className="text-xs text-slate-400 mb-2">Donde Cf1, Cf2, ..., Cfn son las confiabilidades de cada ítem.</p>
                        <div className="flex justify-center py-2">
                             {`\\[ R_s = C_{f1} \\times C_{f2} \\times C_{f3} \\times C_{f4} \\]`}
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2 text-lg">Sistema en Paralelo</h4>
                        <p className="text-slate-600 text-sm mb-3">Según Lourival Tavares: "La confiabilidad final de un conjunto de equipos, será obtenida por la suma de los productos de las confiabilidades de cada ítem por sus capacidades de producción, dividido por la suma de las capacidades de producción de esos ítems".</p>
                        <p className="text-xs text-slate-400 mb-2">Donde Cf1, Cf2, Cfn son las confiabilidades de cada uno de los equipos. Pr1, Pr2, ..., Prn son las participaciones de cada uno de los equipos en la producción del sistema evaluado.</p>
                        <div className="flex justify-center py-2">
                            {`\\[ R_s = \\left[ \\frac{(C_{f1} \\times P_{r1}) + (C_{f2} \\times P_{r2}) + (C_{f3} \\times P_{r3})}{P_{r1} + P_{r2} + P_{r3}} \\right] \\]`}
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2 text-lg">Sistema Redundante</h4>
                        <p className="text-slate-600 text-sm mb-3">Un sistema redundante se puede definir como: "Cualquier elemento que tenga por un período el 100% de confiabilidad hace '1' a toda la ecuación. Ocurrida la falla, si la conmutación es inmediata, la confiabilidad se mantendrá en el 100% hasta la siguiente falta de este elemento".</p>
                        <p className="text-xs text-slate-400 mb-2">Donde Cf1, Cf2, ..., Cfn son las confiabilidades de cada uno de los equipos.</p>
                        <div className="flex justify-center py-2">
                             {`\\[ R_s = 1 - [(1 - C_{f1}) \\times (1 - C_{f2}) \\times (1 - C_{f3})] \\]`}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Disponibilidad */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-check-to-slot"></i></span>
                Disponibilidad
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                    <li>La disponibilidad es un término probabilístico exclusivo de los "equipos reparables" que se define como la probabilidad de que el equipo esté operando (es decir que no este en reparación) a un tiempo «t». Para estimar la disponibilidad se requiere estimar la "tasa de falla (λ)" y la "tasa de reparación (μ)", es decir, se requiere analizar estadísticamente los tiempos para la falla, y los tiempos en reparación para un periodo de tiempo «t».</li>
                    <li>El objetivo de este indicador es medir la disponibilidad de los equipos, con la finalidad de incrementarla, ya que en la medida que esto ocurra, significara que se disminuye el tiempo de los paros por falla o paros no programados del equipo.</li>
                </ul>
                
                <h3 class="font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">Ecuación de la Disponibilidad</h3>
                <p className="text-slate-600 mb-4">La disponibilidad de un equipo puede ser expresada a través de la expresión:</p>
                
                <div className="flex flex-wrap justify-center gap-8 py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div className="text-2xl font-serif text-slate-800">
                         {`\\[ D(t) = \\frac{MTBF}{MTBF + MTTR} \\]`}
                    </div>
                </div>

                <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100">
                    <strong className="block mb-2 text-slate-700">Donde:</strong>
                    <ul className="space-y-1">
                        <li>• <strong>D(t):</strong> Disponibilidad.</li>
                        <li>• <strong>MTBF:</strong> Tiempo Medio Entre Fallas.</li>
                        <li>• <strong>MTTR:</strong> Tiempo Medio Entre Reparaciones.</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Mantenibilidad */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i className="fa-solid fa-tools"></i></span>
                Mantenibilidad
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 mb-6">
                    <li>La Mantenibilidad trata con la duración de paros por fallas y paros por mantenimiento o cuánto tiempo toma para lograr (facilidad y velocidad) restituir las condiciones del equipo a su condición operativa después de una parada por falla o para realizar una actividad planificada.</li>
                    <li>Las características de Mantenibilidad son normalmente determinadas por el diseño del equipo el cual especifica los procedimientos de mantenimiento y determina la duración de tiempos de la reparación.</li>
                </ul>
                
                <h3 className="font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-3">Ecuación de la Mantenibilidad</h3>
                <p className="text-slate-600 mb-4">La mantenibilidad de un equipo puede ser expresada a través de la expresión:</p>
                
                <div className="flex flex-wrap justify-center gap-8 py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div className="text-xl font-serif text-slate-800">
                         {`\\[ M(t) = e^{(-t/MTTR)} \\]`}
                    </div>
                    <div className="text-xl font-serif text-slate-800">
                         {`\\[ M(t) = e^{(-\\mu t)} \\]`}
                    </div>
                </div>

                <div className="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100">
                    <strong className="block mb-2 text-slate-700">Donde:</strong>
                    <ul className="space-y-1">
                        <li>• <strong>M(t):</strong> Mantenibilidad.</li>
                        <li>• <strong>e:</strong> Constante Neperiana (≈2.71828...)</li>
                        <li>• <strong>MTTR:</strong> Tiempo Medio Entre Reparaciones.</li>
                        <li>• <strong>μ:</strong> Tasa de reparaciones (número total de reparaciones por periodo de operación).</li>
                        <li>• <strong>t:</strong> Tiempo.</li>
                    </ul>
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
