import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function ElementosMaquinas() {
  return (
    <Layout>
      <Head title="Elementos de Máquinas" />
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        {/* Hero Section */}
        <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                <i className="fa-solid fa-cogs"></i> Ingeniería Mecánica
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Elementos de Máquinas</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
                Los elementos de máquinas son componentes fundamentales en la ingeniería mecánica, diseñados para transmitir y transformar energía, movimiento y fuerzas dentro de sistemas mecánicos. Comprender estos elementos es esencial para el diseño, análisis y mantenimiento de maquinaria industrial y comercial.
            </p>
            <div className="mt-8 mb-2">
                <img src="/asset/elementos_maquinas.jpg" alt="Engranajes helicoidales de transmisión de potencia" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
                <p className="text-sm text-slate-400 text-center mt-2 italic">Detalle de engranajes helicoidales en una caja de transmisión</p>
            </div>
        </div>

        {/* 1. Clasificación: Elementos de Transmisión de Potencia */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
                Elementos de Transmisión de Potencia
            </h2>
            <div className="space-y-6">
                {/* Ejes y Árboles */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-arrows-spin text-blue-500 mr-3"></i> Ejes y Árboles</h3>
                    <p className="text-slate-600 mb-4">Elementos rotativos que transmiten potencia y movimiento desde una fuente de energía a otros componentes.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Materiales Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Aceros al carbono</li>
                                <li>Aceros aleados</li>
                                <li>Materiales compuestos</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Resistencia a la torsión y flexión</li>
                                <li>Minimización de deflexiones</li>
                                <li>Selección de cojinetes adecuados</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Acoplamientos */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-link text-blue-500 mr-3"></i> Acoplamientos</h3>
                    <p className="text-slate-600 mb-4">Conectan dos ejes, permitiendo la transmisión de potencia y acomodando desalineaciones.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Acoplamientos rígidos</li>
                                <li>Acoplamientos flexibles</li>
                                <li>Acoplamientos de fuelle</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Alineación de ejes</li>
                                <li>Absorción de choques y vibraciones</li>
                                <li>Facilidad de montaje y desmontaje</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Engranajes */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-gear text-blue-500 mr-3"></i> Engranajes</h3>
                    <p className="text-slate-600 mb-4">Ruedas dentadas que transmiten movimiento y potencia entre ejes mediante el engranaje de sus dientes.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Engranajes rectos</li>
                                <li>Engranajes helicoidales</li>
                                <li>Engranajes cónicos</li>
                                <li>Engranajes de tornillo sin fin</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Relación de transmisión</li>
                                <li>Carga y velocidad</li>
                                <li>Material y tratamiento superficial</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. Clasificación: Elementos de Soporte y Guiado */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
                Elementos de Soporte y Guiado
            </h2>
            <div className="space-y-6">
                {/* Rodamientos */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-circle-notch text-blue-500 mr-3"></i> Rodamientos</h3>
                    <p className="text-slate-600 mb-4">Reducen la fricción y soportan cargas radiales y axiales en componentes rotativos.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Rodamientos de bolas</li>
                                <li>Rodamientos de rodillos</li>
                                <li>Rodamientos de agujas</li>
                                <li>Rodamientos de deslizamiento</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Capacidad de carga</li>
                                <li>Lubricación</li>
                                <li>Precisión y tolerancias</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Guías Lineales */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-ruler-horizontal text-blue-500 mr-3"></i> Guías Lineales</h3>
                    <p className="text-slate-600 mb-4">Permiten el movimiento lineal suave y preciso de componentes en una dirección.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Guías de rodillos</li>
                                <li>Guías de bolas</li>
                                <li>Guías planas</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Capacidad de carga y rigidez</li>
                                <li>Precisión y suavidad de movimiento</li>
                                <li>Protección contra contaminantes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. Clasificación: Elementos de Sujeción */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
                Elementos de Sujeción
            </h2>
            <div className="space-y-6">
                {/* Tornillos y Pernos */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-screw text-blue-500 mr-3"></i> Tornillos y Pernos</h3>
                    <p className="text-slate-600 mb-4">Elementos de fijación que ensamblan componentes mediante roscas y fuerza de apriete.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Tornillos de cabeza hexagonal</li>
                                <li>Tornillos prisioneros</li>
                                <li>Pernos de alta resistencia</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Resistencia a la tracción y cizallamiento</li>
                                <li>Torque de apriete adecuado</li>
                                <li>Protección contra la corrosión</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pasadores y Chavetas */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-key text-blue-500 mr-3"></i> Pasadores y Chavetas</h3>
                    <p className="text-slate-600 mb-4">Transmiten torque y fijan componentes en su lugar.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Pasadores cilíndricos</li>
                                <li>Pasadores cónicos</li>
                                <li>Chavetas paralelas</li>
                                <li>Chavetas Woodruff</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Ajuste y alineación</li>
                                <li>Capacidad de carga y desgaste</li>
                                <li>Facilidad de montaje y desmontaje</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. Clasificación: Elementos de Resorte */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">4</span>
                Elementos de Resorte
            </h2>
            <div className="space-y-6">
                {/* Resortes Helicoidales */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-compress-arrows-alt text-blue-500 mr-3"></i> Resortes Helicoidales</h3>
                    <p className="text-slate-600 mb-4">Almacenan y liberan energía elástica, proporcionando fuerza de retorno.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Resortes de compresión</li>
                                <li>Resortes de tracción</li>
                                <li>Resortes de torsión</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Constante de resorte</li>
                                <li>Límite elástico y fatiga</li>
                                <li>Material y tratamiento térmico</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Amortiguadores */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-sort-amount-down text-blue-500 mr-3"></i> Amortiguadores</h3>
                    <p className="text-slate-600 mb-4">Disipan energía y controlan el movimiento oscilatorio mediante fricción y viscosidad.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Amortiguadores hidráulicos</li>
                                <li>Amortiguadores de gas</li>
                                <li>Amortiguadores de fricción</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                <li>Capacidad de amortiguación</li>
                                <li>Disipación de calor</li>
                                <li>Durabilidad y sellado</li>
                            </ul>
                        </div>
                    </div>
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
