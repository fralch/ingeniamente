import React from 'react';

export default function HeroSection() {
    return (
        <div className="mb-10 fade-in">
            <div className="bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#7c3aed] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                {/* Decorative Content */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Ingeniería para el <br className="hidden md:block" /> Futuro
                    </h1>
                    <p className="text-blue-100 mb-8 max-w-2xl text-lg font-light leading-relaxed">
                        Domina conceptos complejos con herramientas simples. Explora nuestra biblioteca de recursos, simuladores y calculadoras.
                    </p>
                    
                    <div className="search-container max-w-2xl">
                        <div className="flex bg-white p-1.5 rounded-2xl shadow-xl transition-transform focus-within:scale-[1.01] duration-300">
                            <div className="flex items-center pl-4 pr-3 text-slate-400">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input 
                                type="text" 
                                placeholder="¿Qué quieres aprender hoy?" 
                                className="flex-1 py-3 text-slate-800 focus:outline-none text-base placeholder-slate-400 bg-transparent font-medium" 
                            />
                            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-slate-900/20">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
