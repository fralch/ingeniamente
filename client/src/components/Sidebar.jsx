import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateTemp, calculateLength, calculateArea, calculateVolume, calculateWeight, calculateSpeed, calculatePressure, calculateFlow } from '../utils/calculators';

// ... (Rest of CalculatorResult and CalculatorDropdown remain unchanged, I will skip them in the replacement content if I can, but replace_file_content requires replacing the chunk.
// Actually, I can do this in two chunks or one larger chunk if I include the import.
// Let's do the import first as a separate edit or include it in a larger ReplaceFileContent call?
// The tool allows "AllowMultiple". I'll use that.



const CalculatorResult = ({ results }) => {
    if (!results) return null;
    return (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
            {results.map((res, idx) => (
                <div key={idx} className="bg-slate-800/50 p-2 rounded border border-white/5 flex flex-col items-center text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider mb-1">{res.label}</div>
                    <div className="text-xs font-semibold text-white break-all">{res.value}</div>
                </div>
            ))}
        </div>
    );
};

const CalculatorDropdown = ({ id, label, iconClass, colorClass, unitOptions, calculateFn, isOpen, onToggle }) => {
    const [val, setVal] = useState('');
    const [unit, setUnit] = useState(unitOptions[0]?.value || '');
    const [results, setResults] = useState(null);

    const handleCalculate = () => {
        if (!val) return;
        setResults(calculateFn(parseFloat(val), unit));
    };

    return (
        <>
            <button 
                onClick={() => onToggle(id)} 
                className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
            >
                <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i className={`${iconClass} w-6 text-center text-slate-500 group-hover:${colorClass} transition-colors`}></i>
                    <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">{label}</span>
                </div>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${isOpen ? '' : 'rotate-180'}`}></i>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1`}>
                <div className="flex gap-2 mb-3">
                    <div className="flex-1">
                        <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input 
                            type="number" 
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
                            placeholder="0"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                        />
                    </div>
                    <div className="w-24">
                        <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                        <select 
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                        >
                            {unitOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button 
                    onClick={handleCalculate}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                    <i className="fa-solid fa-calculator"></i> Calcular
                </button>
                <CalculatorResult results={results} />
            </div>
        </>
    );
};

export default function Sidebar({ isOpen, onClose }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <>
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white flex flex-col h-full transition-transform duration-300 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
                
                {/* Logo */}
                <div className="h-20 flex items-center px-6 mb-2 relative overflow-hidden group shrink-0">
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

                    <Link to="/" className="nav-item active group flex items-center px-4 py-3.5 gap-3 rounded-xl transition-all duration-200 hover:bg-white/5 relative overflow-hidden">
                        <i className="fa-solid fa-house w-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors"></i>
                        <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
                    </Link>

                    {/* Entradas Dropdown */}
                    <button onClick={() => toggleDropdown('entradas')} className="w-full nav-item group flex items-center justify-between px-4 py-3.5 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                            <i className="fa-solid fa-newspaper w-6 text-center group-hover:text-blue-300 transition-colors"></i>
                            <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Entradas</span>
                        </div>
                        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${openDropdown === 'entradas' ? '' : 'rotate-180'}`}></i>
                    </button>
                    <div className={`${openDropdown === 'entradas' ? 'block' : 'hidden'} ml-10 pl-3 border-l-2 border-blue-500/30 mt-1 mb-2 space-y-1`}>
                        {[
                            { label: 'Mantenimiento Correctivo', path: '/pages/mantenimiento/mantenimiento_correctivo.html', external: true },
                            { label: 'Cálculadora de MTBF', path: '/calculadora-mtbf' },
                            { label: 'Calculadora MTTR', path: '#' },
                            { label: 'Mantenimiento Preventivo', path: '/pages/mantenimiento/mantenimiento_preventivo.html', external: true },
                            { label: 'Mantenimiento Predictivo', path: '/pages/mantenimiento/mantenimiento_predictivo.html', external: true },
                            { label: 'Mantenimiento Modificativo', path: '/pages/mantenimiento/mantenimiento_modificativo.html', external: true },
                            { label: 'Rodamientos', path: '/rodamiento' },
                            { label: 'Tribología', path: '/tribologia' },
                            { label: 'Diseño Mecánico', path: '/disenio-mecanico' },
                            { label: 'Oleohidráulica', path: '/oleohidraulica' },
                            { label: 'Neumática', path: '/neumatica' },
                            { label: 'Fajas', path: '/fajas' },
                            { label: 'Poleas', path: '/poleas' },
                            { label: 'Ejes', path: '/ejes' },
                            { label: 'FMEA', path: '/fmea' },
                        ].map((item, index) => (
                            item.external ? (
                                <a key={index} href={item.path} className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">{item.label}</a>
                            ) : (
                                <Link key={index} to={item.path} className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">{item.label}</Link>
                            )
                        ))}
                    </div>

                    <div className="px-2 mt-8 mb-4">
                        <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Calculadoras</h3>
                    </div>

                    <CalculatorDropdown 
                        id="calc-temp"
                        label="Temperatura"
                        iconClass="fa-solid fa-temperature-three-quarters"
                        colorClass="text-emerald-400"
                        unitOptions={[
                            { value: 'c', label: '°C (Celsius)' },
                            { value: 'k', label: 'K (Kelvin)' },
                            { value: 'f', label: '°F (Fahrenheit)' },
                            { value: 're', label: '°R (Réaumur)' },
                            { value: 'ra', label: '°Ra (Rankine)' }
                        ]}
                        calculateFn={calculateTemp}
                        isOpen={openDropdown === 'calc-temp'}
                        onToggle={toggleDropdown}
                    />
                    
                    <CalculatorDropdown 
                        id="calc-length"
                        label="Longitud"
                        iconClass="fa-solid fa-ruler-combined"
                        colorClass="text-amber-400"
                        unitOptions={[
                            { value: 'm', label: 'm (Metros)' },
                            { value: 'cm', label: 'cm (Centímetros)' },
                            { value: 'km', label: 'km (Kilómetros)' },
                            { value: 'pulg', label: 'pulg (Pulgadas)' },
                            { value: 'ft', label: 'ft (Pies)' },
                            { value: 'mi', label: 'mi (Millas)' }
                        ]}
                        calculateFn={calculateLength}
                        isOpen={openDropdown === 'calc-length'}
                        onToggle={toggleDropdown}
                    />

                    <CalculatorDropdown 
                        id="calc-area"
                        label="Área"
                        iconClass="fa-solid fa-vector-square"
                        colorClass="text-rose-400"
                        unitOptions={[
                            { value: 'm2', label: 'm² (Metros cuadrados)' },
                            { value: 'km2', label: 'km² (Kilómetros cuadrados)' },
                            { value: 'ft2', label: 'ft² (Pies cuadrados)' }
                        ]}
                        calculateFn={calculateArea}
                        isOpen={openDropdown === 'calc-area'}
                        onToggle={toggleDropdown}
                    />

                    <CalculatorDropdown 
                        id="calc-volume"
                        label="Volumen"
                        iconClass="fa-solid fa-cube"
                        colorClass="text-cyan-400"
                        unitOptions={[
                            { value: 'm3', label: 'm³ (Metros cúbicos)' },
                            { value: 'l', label: 'L (Litros)' },
                            { value: 'gal_us', label: 'US gal (Galones US)' }
                        ]}
                        calculateFn={calculateVolume}
                        isOpen={openDropdown === 'calc-volume'}
                        onToggle={toggleDropdown}
                    />

                    <CalculatorDropdown 
                        id="calc-weight"
                        label="Peso"
                        iconClass="fa-solid fa-weight-hanging"
                        colorClass="text-violet-400"
                        unitOptions={[
                            { value: 'kg', label: 'kg (Kilogramos)' },
                            { value: 'lb', label: 'lbs (Libras)' }
                        ]}
                        calculateFn={calculateWeight}
                        isOpen={openDropdown === 'calc-weight'}
                        onToggle={toggleDropdown}
                    />

                    <CalculatorDropdown 
                        id="calc-speed"
                        label="Velocidad"
                        iconClass="fa-solid fa-gauge-high"
                        colorClass="text-red-400"
                        unitOptions={[
                            { value: 'ms', label: 'm/s' },
                            { value: 'kmh', label: 'km/h' },
                            { value: 'mph', label: 'mph' }
                        ]}
                        calculateFn={calculateSpeed}
                        isOpen={openDropdown === 'calc-speed'}
                        onToggle={toggleDropdown}
                    />

                    <CalculatorDropdown 
                        id="calc-pressure"
                        label="Presión"
                        iconClass="fa-solid fa-arrows-down-to-line"
                        colorClass="text-orange-400"
                        unitOptions={[
                            { value: 'pa', label: 'Pa (Pascales)' },
                            { value: 'bar', label: 'bar' },
                            { value: 'psi', label: 'psi' }
                        ]}
                        calculateFn={calculatePressure}
                        isOpen={openDropdown === 'calc-pressure'}
                        onToggle={toggleDropdown}
                    />
                    
                    <CalculatorDropdown 
                        id="calc-flow"
                        label="Flujo"
                        iconClass="fa-solid fa-water"
                        colorClass="text-blue-400"
                        unitOptions={[
                            { value: 'lmin', label: 'L/min' },
                            { value: 'gpm', label: 'GPM' }
                        ]}
                        calculateFn={calculateFlow}
                        isOpen={openDropdown === 'calc-flow'}
                        onToggle={toggleDropdown}
                    />

                </nav>
            </aside>
            
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    onClick={onClose}
                ></div>
            )}
        </>
    );
}
