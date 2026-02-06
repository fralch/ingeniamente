import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Sidebar: React.FC = () => {
    const { url } = usePage();
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const [calcResults, setCalcResults] = useState<Record<string, string>>({});

    const toggleDropdown = (id: string) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const isActive = (path: string) => {
        if (path === '/') return url === '/';
        return url.startsWith(path);
    };

    // Calculator States
    const [tempVal, setTempVal] = useState('');
    const [tempUnit, setTempUnit] = useState('c');

    const calculateTemp = () => {
        const val = parseFloat(tempVal);
        if (isNaN(val)) return;

        let c = 0, f = 0, k = 0, re = 0, ra = 0;

        if (tempUnit === 'c') {
            c = val;
            f = (val * 9/5) + 32;
            k = val + 273.15;
            re = val * 0.8;
            ra = (val + 273.15) * 1.8;
        } else if (tempUnit === 'f') {
            c = (val - 32) * 5/9;
            f = val;
            k = (val - 32) * 5/9 + 273.15;
            re = (val - 32) * 4/9;
            ra = val + 459.67;
        } else if (tempUnit === 'k') {
            c = val - 273.15;
            f = (val - 273.15) * 9/5 + 32;
            k = val;
            re = (val - 273.15) * 0.8;
            ra = val * 1.8;
        } else if (tempUnit === 're') {
            c = val * 1.25;
            f = (val * 2.25) + 32;
            k = (val * 1.25) + 273.15;
            re = val;
            ra = (val * 2.25) + 491.67;
        } else if (tempUnit === 'ra') {
            c = (val - 491.67) * 5/9;
            f = val - 459.67;
            k = val * 5/9;
            re = (val - 491.67) * 4/9;
            ra = val;
        }

        const result = `
            <div class="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
                ${formatResultItem('Celsius', c.toFixed(2) + ' °C')}
                ${formatResultItem('Fahrenheit', f.toFixed(2) + ' °F')}
                ${formatResultItem('Kelvin', k.toFixed(2) + ' K')}
                ${formatResultItem('Réaumur', re.toFixed(2) + ' °R')}
                ${formatResultItem('Rankine', ra.toFixed(2) + ' °Ra')}
            </div>
        `;
        setCalcResults(prev => ({ ...prev, temp: result }));
    };

    const formatResultItem = (label: string, value: string) => {
        return `
        <div class="bg-slate-800/50 p-2 rounded border border-white/5 flex flex-col items-center text-center">
            <div class="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1">${label}</div>
            <div class="text-xs font-semibold text-white break-all">${value}</div>
        </div>`;
    };

    return (
        <aside className="w-72 bg-slate-900 text-white flex flex-col h-full transition-all duration-300 shadow-2xl z-50">
            {/* Logo */}
            <div className="h-20 flex items-center px-6 mb-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <i className="fa-solid fa-brain text-white text-lg"></i>
                    </div>
                    <div>
                        <span className="text-xl font-bold block leading-tight tracking-tight">Ingeniamente</span>
                        <span className="text-[10px] uppercase tracking-widest text-blue-300/80">Premium Learning</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar py-6">
                
                <div className="px-2 mb-4 mt-2">
                    <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Explorar</h3>
                </div>
                
                <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''} group flex items-center px-4 py-3.5 gap-3 rounded-xl transition-all duration-200 hover:bg-white/5 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <i className={`fa-solid fa-house w-6 text-center ${isActive('/') ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-300'} transition-colors`}></i>
                    <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
                </Link>

                <div className="space-y-1">
                    <button onClick={() => toggleDropdown('entradas')} className="w-full nav-item group flex items-center justify-between px-4 py-3.5 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                            <i className="fa-solid fa-newspaper w-6 text-center group-hover:text-blue-300 transition-colors"></i>
                            <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Entradas</span>
                        </div>
                        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${openDropdowns['entradas'] ? '' : 'rotate-180'}`}></i>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </button>
                    <div className={`ml-10 pl-3 border-l-2 border-blue-500/30 mt-1 mb-2 space-y-1 ${openDropdowns['entradas'] ? 'block' : 'hidden'}`}>
                        <a href="/pages/mantenimiento/correctivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Correctivo</a>
                        <a href="/calculadora-mtbf" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Cálculadora de MTBF</a>
                        <a href="#" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calculadora MTTR</a>
                        <a href="/pages/mantenimiento/preventivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Preventivo</a>
                        <a href="/pages/mantenimiento/predictivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Predictivo</a>
                        <a href="/pages/mantenimiento/modificativo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Modificativo</a>
                        <a href="/pages/rodamiento" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Rodamientos</a>
                        <a href="/pages/tribologia" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Tribología</a>
                        <a href="/pages/disenio-mecanico" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Diseño Mecánico</a>
                        <a href="/pages/oleohidraulica" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Oleohidráulica</a>
                        <a href="/pages/neumatica" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Neumática</a>
                        <a href="/pages/fajas" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Fajas</a>
                        <a href="/pages/poleas" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Poleas</a>
                        <a href="/pages/ejes" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Ejes</a>
                        <a href="#" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calc. Mantenimiento</a>
                        <a href="/pages/fmea" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">FMEA</a>
                    </div>
                </div>

                <div className="px-2 mt-8 mb-4">
                    <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Calculadoras</h3>
                </div>

                {/* Calculators */}
                <div className="space-y-1">
                    {/* Temperatura */}
                    <button onClick={() => toggleDropdown('temp')} className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                            <i className="fa-solid fa-temperature-three-quarters w-6 text-center text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                            <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Temperatura</span>
                        </div>
                        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${openDropdowns['temp'] ? '' : 'rotate-180'}`}></i>
                    </button>
                    <div className={`${openDropdowns['temp'] ? 'block' : 'hidden'} mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1`}>
                        <div className="flex gap-2 mb-3">
                            <div className="flex-1">
                                <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                                <input type="number" value={tempVal} onChange={(e) => setTempVal(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0" />
                            </div>
                            <div className="w-24">
                                <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                                <select value={tempUnit} onChange={(e) => setTempUnit(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                                    <option value="c">°C (Celsius)</option>
                                    <option value="k">K (Kelvin)</option>
                                    <option value="f">°F (Fahrenheit)</option>
                                    <option value="re">°R (Réaumur)</option>
                                    <option value="ra">°Ra (Rankine)</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={calculateTemp} className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2">
                            <i className="fa-solid fa-calculator"></i> Calcular
                        </button>
                        {calcResults['temp'] && <div dangerouslySetInnerHTML={{ __html: calcResults['temp'] }} />}
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
