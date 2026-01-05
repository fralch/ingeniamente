import React from 'react';
import { Link } from 'react-router-dom';

export default function ElementosMaquinas() {
    return (
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
                                    <li>Ciclo de vida y mantenimiento</li>
                                    <li>Compatibilidad con el entorno operativo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Clasificación: Elementos de Sellado */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">5</span>
                    Elementos de Sellado
                </h2>
                <div className="space-y-6">
                    {/* Sellos Mecánicos */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-ring text-blue-500 mr-3"></i> Sellos Mecánicos</h3>
                        <p className="text-slate-600 mb-4">Evitan fugas de fluidos y contaminantes en ejes rotativos y recipientes a presión.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li>Sellos labiales</li>
                                    <li>Sellos de anillo O</li>
                                    <li>Sellos de laberinto</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li>Compatibilidad química</li>
                                    <li>Resistencia a la presión y temperatura</li>
                                    <li>Durabilidad y mantenimiento</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Juntas */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-slate-800 text-xl mb-3 flex items-center"><i className="fa-solid fa-square-ring text-blue-500 mr-3"></i> Juntas</h3>
                        <p className="text-slate-600 mb-4">Proporcionan un sellado estático entre superficies fijas para evitar fugas de fluidos.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-slate-700 text-sm mb-2">Tipos Comunes</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li>Juntas tóricas</li>
                                    <li>Juntas planas</li>
                                    <li>Juntas de expansión</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700 text-sm mb-2">Diseño y Consideraciones</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li>Material y compatibilidad</li>
                                    <li>Presión de sellado</li>
                                    <li>Facilidad de instalación y reemplazo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Materiales y Procesos de Fabricación */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">6</span>
                    Materiales y Procesos de Fabricación
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-slate-700 mb-4 border-b pb-2">Materiales Comunes</h3>
                        <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                            <li><strong>Aceros:</strong> Utilizados por su alta resistencia, durabilidad y capacidad de tratamiento térmico.</li>
                            <li><strong>Aluminio:</strong> Utilizado en aplicaciones donde la reducción de peso es crucial y se necesita buena resistencia a la corrosión.</li>
                            <li><strong>Plásticos de Alta Resistencia:</strong> Utilizados en aplicaciones donde se requiere baja fricción, resistencia a la corrosión y reducción de peso.</li>
                            <li><strong>Materiales Compuestos:</strong> Combinan propiedades de varios materiales para mejorar el rendimiento y la durabilidad.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-700 mb-4 border-b pb-2">Procesos de Fabricación</h3>
                        <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                            <li><strong>Forjado:</strong> Mejora las propiedades mecánicas mediante la deformación plástica en caliente.</li>
                            <li><strong>Mecanizado de Precisión:</strong> Para crear componentes con tolerancias muy ajustadas y acabados superficiales precisos.</li>
                            <li><strong>Tratamiento Térmico:</strong> Mejora la dureza y resistencia de los materiales mediante procesos como el templado y el revenido.</li>
                            <li><strong>Recubrimientos y Tratamientos Superficiales:</strong> Mejoran la resistencia al desgaste y la corrosión mediante técnicas como el recubrimiento de PVD y la anodización.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 7. Mantenimiento y Diagnóstico */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">7</span>
                    Mantenimiento y Diagnóstico
                </h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <h3 className="font-bold text-slate-800 mb-2">Lubricación</h3>
                        <p className="text-slate-600 mb-4 text-sm">La lubricación adecuada es esencial para reducir la fricción y el desgaste en elementos de máquinas. Puede ser a base de grasa, aceite o lubricantes sólidos, y debe seleccionarse según las condiciones de operación.</p>
                        <h4 className="font-bold text-slate-700 text-xs uppercase mb-2">Tipos Comunes de Lubricantes:</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">Grasas a base de litio</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">Aceites minerales</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">Lubricantes sintéticos</span>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">Sólidos (grafito, PTFE)</span>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <h3 className="font-bold text-slate-800 mb-2">Monitoreo de Condiciones</h3>
                        <p className="text-slate-600 mb-4 text-sm">El monitoreo continuo de las condiciones de los elementos de máquinas mediante técnicas como el análisis de vibraciones, la termografía y la acústica ayuda a detectar fallos incipientes y planificar el mantenimiento predictivo.</p>
                        <h4 className="font-bold text-slate-700 text-xs uppercase mb-2">Técnicas Comunes:</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600">
                            <li>Análisis de vibraciones</li>
                            <li>Termografía infrarroja</li>
                            <li>Análisis de aceite</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 8. Fallos Comunes y Soluciones */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">8</span>
                    Fallos Comunes y Soluciones
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-700 mb-2 flex items-center"><i className="fa-solid fa-triangle-exclamation mr-2"></i> Desgaste</h3>
                        <p className="text-sm text-slate-700 mb-2">Debido a una lubricación insuficiente o contaminantes.</p>
                        <div className="bg-white p-3 rounded-lg text-xs text-slate-600 border border-red-100">
                            <strong>Solución:</strong> Asegurar una lubricación adecuada y el uso de sellos.
                        </div>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
                        <h3 className="font-bold text-orange-700 mb-2 flex items-center"><i className="fa-solid fa-arrows-left-right-to-line mr-2"></i> Desalineación</h3>
                        <p className="text-sm text-slate-700 mb-2">Causada por la instalación incorrecta.</p>
                        <div className="bg-white p-3 rounded-lg text-xs text-slate-600 border border-orange-100">
                            <strong>Solución:</strong> Alinear correctamente los componentes durante la instalación.
                        </div>
                    </div>
                    <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
                        <h3 className="font-bold text-yellow-700 mb-2 flex items-center"><i className="fa-solid fa-crack mr-2"></i> Fatiga</h3>
                        <p className="text-sm text-slate-700 mb-2">Por cargas excesivas o mal distribuidas.</p>
                        <div className="bg-white p-3 rounded-lg text-xs text-slate-600 border border-yellow-100">
                            <strong>Solución:</strong> Seleccionar elementos adecuados para las cargas esperadas y asegurarse de una instalación correcta.
                        </div>
                    </div>
                </div>
            </div>

            {/* 9. Innovaciones y Futuro */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">9</span>
                    Innovaciones y Futuro
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                        <i className="fa-solid fa-flask text-indigo-500 text-2xl mb-3"></i>
                        <h3 className="font-bold text-slate-900 mb-2">Materiales Avanzados</h3>
                        <p className="text-sm text-slate-600">El uso de materiales avanzados como compuestos y recubrimientos de baja fricción está mejorando el rendimiento y la vida útil.</p>
                    </div>
                    <div className="bg-cyan-50 p-5 rounded-xl border border-cyan-100">
                        <i className="fa-solid fa-microchip text-cyan-500 text-2xl mb-3"></i>
                        <h3 className="font-bold text-slate-900 mb-2">Tecnología Inteligente</h3>
                        <p className="text-sm text-slate-600">Sensores y tecnología IoT permiten un monitoreo en tiempo real y un mantenimiento predictivo más eficiente.</p>
                    </div>
                    <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                        <i className="fa-solid fa-leaf text-emerald-500 text-2xl mb-3"></i>
                        <h3 className="font-bold text-slate-900 mb-2">Eficiencia Energética</h3>
                        <p className="text-sm text-slate-600">Reducción de fricción para contribuir a sistemas más sostenibles y ecológicos.</p>
                    </div>
                </div>
            </div>

            {/* 10. Detalles Avanzados */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">10</span>
                    Detalles Avanzados
                </h2>
                
                <div className="space-y-8">
                    {/* Diseño y Selección */}
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg mb-3">Diseño y Selección</h3>
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-2">Cálculo de Vida Útil</h4>
                            <p className="text-sm text-slate-600 mb-4">La vida útil se evalúa en función de la capacidad para soportar cargas sin desgaste excesivo. Factores clave:</p>
                            <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                                <li><strong>Carga:</strong> Debe ser adecuada para evitar desgaste prematuro.</li>
                                <li><strong>Velocidad:</strong> Afecta el régimen de lubricación y fricción.</li>
                                <li><strong>Lubricación:</strong> Calidad y cantidad influyen en la fricción.</li>
                                <li><strong>Ambiente:</strong> Temperatura, humedad y contaminantes.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Instalación y Desmontaje */}
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg mb-3">Instalación y Desmontaje</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-700 mb-2 text-center border-b pb-2">Instalación</h4>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li><strong>Métodos Térmicos:</strong> Calentar componentes para expandirlos. Controlar temperatura para evitar daños.</li>
                                    <li><strong>Métodos Mecánicos:</strong> Uso de prensas y herramientas específicas para no dañar componentes.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-700 mb-2 text-center border-b pb-2">Desmontaje</h4>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li><strong>Extractores Mecánicos:</strong> Aplicar fuerza uniforme sin dañar piezas.</li>
                                    <li><strong>Métodos Térmicos/Hidráulicos:</strong> Calor o presión hidráulica para componentes ajustados.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 11. Casos de Estudio */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">11</span>
                    Casos de Estudio
                </h2>
                <div className="space-y-6">
                    <div className="bg-slate-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                        <h3 className="font-bold text-slate-800 mb-2">Caso 1: Transmisión de Potencia en Plantas de Energía</h3>
                        <div className="text-sm text-slate-600 space-y-2">
                            <p><strong>Desafíos:</strong> Altas cargas, alta temperatura, necesidad de alta fiabilidad.</p>
                            <p><strong>Soluciones:</strong> Ejes/engranajes de alta resistencia con recubrimientos especiales. Lubricación automatizada.</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 border-l-4 border-green-500 p-5 rounded-r-xl">
                        <h3 className="font-bold text-slate-800 mb-2">Caso 2: Soporte y Guiado en Maquinaria Industrial</h3>
                        <div className="text-sm text-slate-600 space-y-2">
                            <p><strong>Desafíos:</strong> Altas cargas, desalineaciones, condiciones difíciles.</p>
                            <p><strong>Soluciones:</strong> Rodamientos/guías con recubrimientos de polímeros. Monitoreo continuo para mantenimiento predictivo.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 12. Referencias */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">12</span>
                    Referencias
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs text-slate-500">
                    <ul className="space-y-2">
                        <li>Shigley, J.E., Mischke, C.R., y Budynas, R.G. Diseño en Ingeniería Mecánica de Shigley. 8a ed. McGraw-Hill, 2008.</li>
                        <li>Juvinall, R.C., y Marshek, K.M. Fundamentals of Machine Component Design. 6a ed. Wiley, 2017.</li>
                        <li>Norton, R.L. Diseño de Máquinas: Un Enfoque Integrado. 4a ed. McGraw-Hill, 2011.</li>
                        <li>Hamrock, B.J., et al. Fundamentals of Machine Elements. 3a ed. McGraw-Hill, 2014.</li>
                        <li>Budynas, R.G., y Nisbett, J.K. Mechanical Engineering Design. 11a ed. McGraw-Hill, 2019.</li>
                        <li className="pt-2 border-t border-slate-200 mt-2">Recursos en línea: SKF, NSK, Timken, NTN, NTN-SNR.</li>
                    </ul>
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
