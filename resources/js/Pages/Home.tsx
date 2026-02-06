import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

interface CardData {
    title: string;
    description: string;
    category: string;
    icon: string;
    colorClass: string; // e.g., "blue"
    href: string;
}

const cards: CardData[] = [
    {
        title: "Proyectos de Ingeniería DIY",
        description: "Son proyectos de construcción, experimentación o invención que puedes llevar a cabo por ti mismo, usando recursos y conocimientos técnicos propios. Este enfoque permite explorar conceptos de ingeniería y ciencias aplicadas mediante proyectos prácticos que puedes desarrollar con materiales accesibles y en el entorno doméstico.",
        category: "Mecánica",
        icon: "fa-solid fa-wrench",
        colorClass: "blue",
        href: "/pages/diy"
    },
    {
        title: "Gestión de Mantenimiento",
        description: "Tipos de Mantenimiento aplicados en la industria.",
        category: "Mecánica",
        icon: "fa-solid fa-clipboard-check",
        colorClass: "amber",
        href: "/pages/gestion-mantenimiento"
    },
    {
        title: "Óleohidraulica",
        description: "La oleohidráulica es una rama fundamental de la mecánica de fluidos aplicadas en la ingeniería moderna. Estas tecnologías han evolucionado y se han integrado en diversas aplicaciones industriales, desde maquinaria pesada hasta sistemas automatizados de producción.",
        category: "Fluidos",
        icon: "fa-solid fa-oil-can",
        colorClass: "cyan",
        href: "/pages/oleohidraulica"
    },
    {
        title: "Neumática",
        description: "La neumática es una rama fundamental de la mecánica de fluidos que se enfoca en el uso de aire comprimido para transmitir y controlar energía.",
        category: "Fluidos",
        icon: "fa-solid fa-wind",
        colorClass: "sky",
        href: "/pages/neumatica"
    },
    {
        title: "Turbomáquinas",
        description: "Maquinas generadoras y transferencia de enrgía, entre las principales: Turbinas, Compresoras y Bombas.",
        category: "Fluidos",
        icon: "fa-solid fa-fan",
        colorClass: "indigo",
        href: "#"
    },
    {
        title: "Control CNC",
        description: "Maquinas de producción en serie, que funcionan con un código de programación.",
        category: "Control",
        icon: "fa-solid fa-computer-mouse",
        colorClass: "purple",
        href: "#"
    },
    {
        title: "Taller de Consultoría",
        description: "Herramientas de gestión del Ingeniero Mecánico",
        category: "Mecánica",
        icon: "fa-solid fa-briefcase",
        colorClass: "blue",
        href: "#"
    },
    {
        title: "Tribología",
        description: "Se centra en el estudio del desgaste por fricción entre componentes, cómo evitarlo, los diferentes tipos de lubricantes, sus aplicaciones y el análisis de aceites.",
        category: "Mecánica",
        icon: "fa-solid fa-droplet",
        colorClass: "slate",
        href: "/pages/tribologia"
    },
    {
        title: "Elementos de Máquina",
        description: "Engranajes, rodamientos, ejes, tornillos, resortes, uniones soldadas y remachadas.",
        category: "Mecánica",
        icon: "fa-solid fa-cogs",
        colorClass: "orange",
        href: "/pages/elementos-maquinas"
    },
    {
        title: "Diseño Mecánico",
        description: "Proceso de dar forma, dimensiones, materiales y funcionamiento a una máquina.",
        category: "Mecánica",
        icon: "fa-solid fa-pencil-ruler",
        colorClass: "red",
        href: "/pages/disenio-mecanico"
    },
    {
        title: "Transferencia de Calor",
        description: "La transferencia de masa y calor es un campo fundamental en la ingeniería mecánica y otras disciplinas relacionadas, que se ocupa del movimiento de energía térmica y de partículas a través de diferentes medios. Estos fenómenos son esenciales para el diseño y operación de una amplia gama de sistemas industriales y de ingeniería, desde intercambiadores de calor hasta reactores químicos.",
        category: "Termodinámica",
        icon: "fa-solid fa-fire",
        colorClass: "red",
        href: "#"
    },
    {
        title: "Mecánica de Fluidos",
        description: "La mecánica de fluidos es una rama fundamental de la ingeniería mecánica que estudia el comportamiento de los fluidos (líquidos y gases) en reposo y en movimiento. Comprender los principios y fenómenos de la mecánica de fluidos es esencial para el diseño, análisis y optimización de sistemas industriales y naturales, tales como tuberías, bombas, compresores, aeronaves y sistemas hidráulicos.",
        category: "Fluidos",
        icon: "fa-solid fa-water",
        colorClass: "cyan",
        href: "#"
    },
    {
        title: "Ingeniería de Control",
        description: "La ingeniería de control es una rama de la ingeniería que se ocupa del modelado, análisis y diseño de sistemas de control para gestionar el comportamiento dinámico de sistemas físicos y procesos. Estos sistemas son fundamentales en diversas aplicaciones industriales y tecnológicas, desde la automatización de manufactura hasta la navegación de aeronaves.",
        category: "Control",
        icon: "fa-solid fa-sliders",
        colorClass: "violet",
        href: "#"
    },
    {
        title: "Termodinámica",
        description: "La termodinámica es una rama fundamental de la ingeniería mecánica que se ocupa del estudio de la energía, el calor y el trabajo, así como de las leyes que gobiernan las transformaciones energéticas en los sistemas.",
        category: "Termodinámica",
        icon: "fa-solid fa-temperature-three-quarters",
        colorClass: "rose",
        href: "#"
    },
    {
        title: "Investigación de Operaciones",
        description: "La investigación de operaciones (IO) es una disciplina que aplica métodos analíticos avanzados para ayudar a tomar decisiones complejas y optimizar sistemas en diversas industrias. Se basa en modelos matemáticos, estadísticos y algoritmos para analizar problemas y encontrar soluciones óptimas.",
        category: "Control",
        icon: "fa-solid fa-chart-line",
        colorClass: "fuchsia",
        href: "#"
    },
    {
        title: "Mecánica de Materiales",
        description: "La mecánica de materiales es una rama fundamental de la ingeniería mecánica que estudia el comportamiento de los materiales sólidos bajo diversas cargas. Este campo se centra en comprender cómo los materiales responden a fuerzas externas, deformaciones y tensiones, y es esencial para el diseño y análisis de estructuras y componentes mecánicos.",
        category: "Mecánica",
        icon: "fa-solid fa-layer-group",
        colorClass: "stone",
        href: "#"
    },
    {
        title: "Ingeniería Eléctrica",
        description: "La ingeniería eléctrica es una rama de la ingeniería que se ocupa del estudio y la aplicación de la electricidad, la electrónica y el electromagnetismo. Esta disciplina es fundamental para el diseño, análisis y operación de sistemas eléctricos y electrónicos en diversas industrias.",
        category: "Control",
        icon: "fa-solid fa-bolt",
        colorClass: "yellow",
        href: "#"
    },
    {
        title: "Estática",
        description: "La estática es una rama fundamental de la mecánica que se ocupa del estudio de los cuerpos en equilibrio. En ingeniería mecánica, la estática es esencial para analizar y diseñar estructuras y componentes que no deben moverse bajo la influencia de fuerzas y momentos aplicados.",
        category: "Mecánica",
        icon: "fa-solid fa-archway",
        colorClass: "zinc",
        href: "#"
    },
    {
        title: "Dinámica",
        description: "La dinámica es una rama de la mecánica que se ocupa del estudio del movimiento de los cuerpos y las fuerzas que lo producen. En ingeniería mecánica, la dinámica es esencial para analizar y diseñar sistemas en movimiento, desde mecanismos simples hasta complejos sistemas mecánicos y automotrices.",
        category: "Mecánica",
        icon: "fa-solid fa-person-running",
        colorClass: "lime",
        href: "#"
    },
    {
        title: "Física",
        description: "La física es una ciencia fundamental que estudia la naturaleza y las propiedades de la materia y la energía. Proporciona los principios y las leyes que son la base de muchas disciplinas de ingeniería, incluyendo la mecánica, la termodinámica, la electricidad y el magnetismo, y la óptica.",
        category: "Mecánica",
        icon: "fa-solid fa-atom",
        colorClass: "teal",
        href: "#"
    }
];

const Home: React.FC = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredCards = filter === 'Todos' ? cards : cards.filter(card => card.category === filter);

    const getColors = (color: string) => {
        // Simple mapping for background and text colors based on the color name
        // This is a simplified version, ideally you'd use a full map or safelist in tailwind
        const map: Record<string, { bg: string, text: string, iconBg: string, iconText: string, badgeBg: string, badgeText: string }> = {
            blue: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-blue-50', iconText: 'text-blue-500', badgeBg: 'bg-blue-50', badgeText: 'text-blue-600' },
            amber: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-amber-50', iconText: 'text-amber-500', badgeBg: 'bg-amber-50', badgeText: 'text-amber-600' },
            cyan: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-cyan-50', iconText: 'text-cyan-500', badgeBg: 'bg-cyan-50', badgeText: 'text-cyan-600' },
            sky: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-sky-50', iconText: 'text-sky-500', badgeBg: 'bg-sky-50', badgeText: 'text-sky-600' },
            indigo: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-indigo-50', iconText: 'text-indigo-500', badgeBg: 'bg-indigo-50', badgeText: 'text-indigo-600' },
            purple: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-purple-50', iconText: 'text-purple-500', badgeBg: 'bg-purple-50', badgeText: 'text-purple-600' },
            slate: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-slate-100', iconText: 'text-slate-600', badgeBg: 'bg-slate-100', badgeText: 'text-slate-600' },
            orange: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-orange-50', iconText: 'text-orange-500', badgeBg: 'bg-orange-50', badgeText: 'text-orange-600' },
            red: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-red-50', iconText: 'text-red-500', badgeBg: 'bg-red-50', badgeText: 'text-red-600' },
            violet: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-violet-50', iconText: 'text-violet-500', badgeBg: 'bg-violet-50', badgeText: 'text-violet-600' },
            rose: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-rose-50', iconText: 'text-rose-500', badgeBg: 'bg-rose-50', badgeText: 'text-rose-600' },
            fuchsia: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-fuchsia-50', iconText: 'text-fuchsia-500', badgeBg: 'bg-fuchsia-50', badgeText: 'text-fuchsia-600' },
            stone: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-stone-100', iconText: 'text-stone-600', badgeBg: 'bg-stone-100', badgeText: 'text-stone-600' },
            yellow: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-yellow-50', iconText: 'text-yellow-500', badgeBg: 'bg-yellow-50', badgeText: 'text-yellow-600' },
            zinc: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-zinc-100', iconText: 'text-zinc-600', badgeBg: 'bg-zinc-100', badgeText: 'text-zinc-600' },
            lime: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-lime-50', iconText: 'text-lime-500', badgeBg: 'bg-lime-50', badgeText: 'text-lime-600' },
            teal: { bg: 'bg-white', text: 'text-slate-800', iconBg: 'bg-teal-50', iconText: 'text-teal-500', badgeBg: 'bg-teal-50', badgeText: 'text-teal-600' },
        };
        return map[color] || map['blue'];
    };

    return (
        <Layout>
            <Head title="Ingeniamente.com - Ingeniería Premium" />
            
            {/* Hero Section */}
            <div className="mb-10 fade-in">
                <div className="bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#7c3aed] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                    
                    {/* Trivia Button */}
                    <a href="/trivia" className="absolute top-4 right-4 md:top-6 md:right-6 z-30 group no-underline">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 pr-5 rounded-full flex items-center gap-3 hover:bg-white/20 transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-105">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md animate-[pulse_0.8s_ease-in-out_infinite]">
                                <i className="fa-solid fa-trophy text-white text-sm"></i>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-wider leading-none mb-0.5">Nuevo</span>
                                <span className="text-sm font-bold text-white leading-none">Trivia</span>
                            </div>
                        </div>
                    </a>

                    {/* Decorative Content */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10">
                        
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Ingeniería para el <br className="hidden md:block" />Futuro</h1>
                        <p className="text-blue-100 mb-8 max-w-2xl text-lg font-light leading-relaxed">Domina conceptos complejos con herramientas simples. Explora nuestra biblioteca de recursos, simuladores y calculadoras.</p>
                        
                        <div className="search-container max-w-2xl">
                            <div className="flex bg-white p-1.5 rounded-2xl shadow-xl transition-transform focus-within:scale-[1.01] duration-300">
                                <div className="flex items-center pl-4 pr-3 text-slate-400">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input type="text" placeholder="¿Qué quieres aprender hoy?" className="flex-1 py-3 text-slate-800 focus:outline-none text-base placeholder-slate-400 bg-transparent font-medium" />
                                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-slate-900/20">
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
                {['Todos', 'Mecánica', 'Termodinámica', 'Fluidos', 'Control'].map(f => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`filter-button px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg ${
                            filter === f 
                                ? 'bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700' 
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Content Cards Grid */}
            <div id="content-grid" className="columns-1 md:columns-2 lg:columns-3 gap-6 mb-12">
                {filteredCards.map((card, index) => {
                    const colors = getColors(card.colorClass);
                    const isInertia = card.href === '/pages/diy' || card.href === '/';
                    const Component = isInertia ? Link : 'a';
                    return (
                        <Component key={index} href={card.href} className="card group bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 flex flex-col break-inside-avoid mb-6 fade-in">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center ${colors.iconText} group-hover:scale-110 transition-transform duration-300`}>
                                    <i className={`${card.icon} text-xl`}></i>
                                </div>
                                <span className={`category-badge ${colors.badgeBg} ${colors.badgeText} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide`}>{card.category}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{card.description}</p>
                            <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                                Explorar <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </Component>
                    );
                })}
            </div>
        </Layout>
    );
};

export default Home;
