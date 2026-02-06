
import Layout from '../Layouts/Layout';
import { Head, Link } from '@inertiajs/react';

const DisenioMecanico = () => {
    return (
        <Layout title="Diseño Mecánico - Ingeniamente.com">
            <Head title="Diseño Mecánico" />
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 animate-fade-in-up">
                
                {/* Hero Section */}
                <div className="mb-10 border-b border-slate-100 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <i className="fa-solid fa-drafting-compass"></i> Ingeniería Mecánica
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Diseño Mecánico</h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        El diseño mecánico es un proceso integral en la ingeniería mecánica que implica la creación, desarrollo y optimización de sistemas y componentes mecánicos para cumplir con requisitos específicos de funcionalidad, durabilidad y eficiencia.
                    </p>
                </div>

                {/* 1. Fundamentos del Diseño Mecánico */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
                        Fundamentos del Diseño Mecánico
                    </h2>
                    
                    {/* Proceso de Diseño */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><i className="fa-solid fa-clipboard-list text-blue-500 mr-2"></i> Proceso de Diseño Mecánico</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-700 mb-2">Definición y Conceptualización</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li><strong>Definición:</strong> Identificación clara del problema, recolección de requisitos y análisis de viabilidad.</li>
                                    <li><strong>Conceptualización:</strong> Tormenta de ideas, bocetos preliminares y evaluación de conceptos.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-700 mb-2">Diseño y Prototipado</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                                    <li><strong>Diseño Preliminar:</strong> Modelado 3D, análisis iniciales y simulaciones.</li>
                                    <li><strong>Diseño Detallado:</strong> Dibujos de ingeniería, selección de materiales y cálculos FEA.</li>
                                    <li><strong>Prototipado:</strong> Fabricación y pruebas de funcionalidad.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Principios Fundamentales */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center"><i className="fa-solid fa-balance-scale text-blue-500 mr-2"></i> Principios Fundamentales</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-slate-700">Mecánica de Materiales</h4>
                                <p className="text-sm text-slate-600">Estudio de respuesta ante fuerzas (esfuerzo, deformación, elasticidad, plasticidad, teoría de fallos).</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Análisis de Esfuerzos</h4>
                                <p className="text-sm text-slate-600">Evaluación estática y dinámica, teoría de vigas y análisis de tensiones.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Fatiga y Vida Útil</h4>
                                <p className="text-sm text-slate-600">Comportamiento bajo cargas cíclicas, curvas S-N y diseño para la durabilidad.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Metodologías y Herramientas */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
                        Metodologías y Herramientas
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-800 text-lg mb-3"><i className="fa-solid fa-laptop-code text-purple-500 mr-2"></i> CAD & FEA</h3>
                            <p className="text-sm text-slate-600 mb-3"><strong>CAD (SolidWorks, AutoCAD, CATIA):</strong> Visualización 3D precisa y modificaciones rápidas.</p>
                            <p className="text-sm text-slate-600"><strong>FEA (ANSYS, Abaqus):</strong> Simulación de comportamiento bajo carga (estático, térmico, vibraciones).</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-800 text-lg mb-3"><i className="fa-solid fa-industry text-purple-500 mr-2"></i> DFM & DFA</h3>
                            <p className="text-sm text-slate-600 mb-3"><strong>DFM (Manufacturabilidad):</strong> Diseño fácil de fabricar, selección de procesos y tolerancias.</p>
                            <p className="text-sm text-slate-600"><strong>DFA (Ensamblaje):</strong> Simplificación del montaje, reducción de piezas y uso de modulares.</p>
                        </div>
                    </div>
                </div>

                {/* 3. Materiales y Procesos */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
                        Materiales y Procesos
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2 text-center"><i className="fa-solid fa-cubes text-emerald-500 block text-2xl mb-2"></i> Selección</h4>
                                <p className="text-xs text-slate-600 text-center">Basada en propiedades mecánicas, térmicas, resistencia a corrosión y costos.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2 text-center"><i className="fa-solid fa-gears text-emerald-500 block text-2xl mb-2"></i> Fabricación</h4>
                                <p className="text-xs text-slate-600 text-center">Mecanizado, formado, moldeo y unión (soldadura, adhesivos).</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2 text-center"><i className="fa-solid fa-fire text-emerald-500 block text-2xl mb-2"></i> Tratamientos</h4>
                                <p className="text-xs text-slate-600 text-center">Térmicos (temple, revenido) y superficiales (nitruración, anodizado).</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Consideraciones Prácticas */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">4</span>
                        Consideraciones Prácticas
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="bg-orange-50 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Factores de Seguridad</h3>
                                <p className="text-sm text-slate-600">Márgenes para asegurar fiabilidad basados en condiciones de carga y posibles fallos.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="bg-orange-50 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                <i className="fa-solid fa-ruler-combined"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Tolerancias y Ajustes</h3>
                                <p className="text-sm text-slate-600">Límites dimensionales (deslizantes, interferencia, transición) para correcto funcionamiento.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="bg-orange-50 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                <i className="fa-solid fa-wrench"></i>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Mantenimiento</h3>
                                <p className="text-sm text-slate-600">Diseño para fácil acceso, uso de estándar y documentación clara.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Innovaciones */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                        <span className="bg-cyan-100 text-cyan-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">5</span>
                        Innovaciones y Futuro
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                            <i className="fa-solid fa-cube text-cyan-500 text-3xl mb-3"></i>
                            <h3 className="font-bold text-slate-800 text-sm mb-1">Impresión 3D</h3>
                            <p className="text-xs text-slate-500">Prototipado rápido y formas complejas</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                            <i className="fa-solid fa-microchip text-cyan-500 text-3xl mb-3"></i>
                            <h3 className="font-bold text-slate-800 text-sm mb-1">IA & ML</h3>
                            <p className="text-xs text-slate-500">Diseño generativo y predicción de fallos</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                            <i className="fa-solid fa-recycle text-cyan-500 text-3xl mb-3"></i>
                            <h3 className="font-bold text-slate-800 text-sm mb-1">Sostenibilidad</h3>
                            <p className="text-xs text-slate-500">Ecodiseño y materiales reciclables</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                            <i className="fa-solid fa-dna text-cyan-500 text-3xl mb-3"></i>
                            <h3 className="font-bold text-slate-800 text-sm mb-1">Ingeniería Inversa</h3>
                            <p className="text-xs text-slate-500">Escaneo 3D y análisis de mejoras</p>
                        </div>
                    </div>
                </div>

                {/* Referencias */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center"><i className="fa-solid fa-book text-slate-400 mr-2"></i> Referencias Bibliográficas</h3>
                    <ul className="text-xs text-slate-500 space-y-2">
                        <li>Shigley, J.E., Mischke, C.R., y Budynas, R.G. Diseño en Ingeniería Mecánica de Shigley. 8a ed. McGraw-Hill, 2008.</li>
                        <li>Juvinall, R.C., y Marshek, K.M. Fundamentals of Machine Component Design. 6a ed. Wiley, 2017.</li>
                        <li>Norton, R.L. Diseño de Máquinas: Un Enfoque Integrado. 4a ed. McGraw-Hill, 2011.</li>
                        <li>Hamrock, B.J. et al. Fundamentals of Machine Elements. 3a ed. McGraw-Hill, 2014.</li>
                        <li>Budynas, R.G., y Nisbett, J.K. Mechanical Engineering Design. 11a ed. McGraw-Hill, 2019.</li>
                        <li>Kalpakjian, S., y Schmid, S.R. Manufacturing Engineering and Technology. 7a ed. Pearson, 2014.</li>
                        <li>Autodesk & SolidWorks Docs.</li>
                    </ul>
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
};

export default DisenioMecanico;
