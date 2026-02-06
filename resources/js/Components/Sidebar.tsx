import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar: _toggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId)
  }

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col h-screen transition-all duration-300 shadow-2xl z-50">
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
      <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <div className="px-2 mb-4 mt-2">
          <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Explorar</h3>
        </div>

        <Link to="/" className="nav-item group flex items-center px-4 py-3.5 gap-3 rounded-xl transition-all duration-200 hover:bg-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <i className="fa-solid fa-house w-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
        </Link>

        <div className="space-y-1">
          <button 
            onClick={() => toggleDropdown('entradas')}
            className="w-full nav-item group flex items-center justify-between px-4 py-3.5 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
          >
            <div className="flex items-center gap-3 relative z-10 pointer-events-none">
              <i className="fa-solid fa-newspaper w-6 text-center group-hover:text-blue-300 transition-colors"></i>
              <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Entradas</span>
            </div>
            <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${activeDropdown === 'entradas' ? 'rotate-180' : ''}`}></i>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </button>

          {activeDropdown === 'entradas' && (
            <div className="ml-10 pl-3 border-l-2 border-blue-500/30 mt-1 mb-2 space-y-1">
              <Link to="/mantenimiento/correctivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Correctivo</Link>
              <Link to="/calculadora-mtbf" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Cálculadora de MTBF</Link>
              <Link to="#" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calculadora MTTR</Link>
              <Link to="/mantenimiento/preventivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Preventivo</Link>
              <Link to="/mantenimiento/predictivo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Predictivo</Link>
              <Link to="/mantenimiento/modificativo" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Modificativo</Link>
              <Link to="/rodamiento" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Rodamientos</Link>
              <Link to="/tribologia" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Tribología</Link>
              <Link to="/disenio-mecanico" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Diseño Mecánico</Link>
              <Link to="/oleohidraulica" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Oleohidráulica</Link>
              <Link to="/neumatica" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Neumática</Link>
              <Link to="/fajas" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Fajas</Link>
              <Link to="/poleas" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Poleas</Link>
              <Link to="/ejes" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Ejes</Link>
              <Link to="#" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calc. Mantenimiento</Link>
              <Link to="/fmea" className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">FMEA</Link>
            </div>
          )}
        </div>

        <div className="px-2 mt-6 mb-3">
          <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Calculadoras</h3>
        </div>

        {/* Calculators Links */}
        <div className="space-y-1">
          <TemperatureCalculator active={activeDropdown === 'temperatura'} toggle={() => toggleDropdown('temperatura')} />
          <LengthCalculator active={activeDropdown === 'longitud'} toggle={() => toggleDropdown('longitud')} />
          <AreaCalculator active={activeDropdown === 'area'} toggle={() => toggleDropdown('area')} />
          <VolumeCalculator active={activeDropdown === 'volumen'} toggle={() => toggleDropdown('volumen')} />
          <WeightCalculator active={activeDropdown === 'peso'} toggle={() => toggleDropdown('peso')} />
          <SpeedCalculator active={activeDropdown === 'velocidad'} toggle={() => toggleDropdown('velocidad')} />
          <PressureCalculator active={activeDropdown === 'presion'} toggle={() => toggleDropdown('presion')} />
          <FlowCalculator active={activeDropdown === 'flujo'} toggle={() => toggleDropdown('flujo')} />
        </div>
        {/* Spacer para asegurar que el scroll funcione */}
        <div className="h-20"></div>
      </nav>
    </aside>
  )
}

// Componente base para calculadoras
interface CalculatorProps {
  active: boolean;
  toggle: () => void;
  icon: string;
  name: string;
  color: string;
  children: React.ReactNode;
}

const CalculatorBase: React.FC<CalculatorProps> = ({ active, toggle, icon, name, color, children }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-3 py-2.5 text-slate-400 rounded-lg transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-2.5 relative z-10 pointer-events-none">
          <i className={`fa-solid ${icon} w-5 text-center text-slate-500 group-hover:${color} transition-colors`}></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">{name}</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-3 mb-3 bg-slate-900/80 rounded-lg p-3 border border-white/5 shadow-inner mt-1">
          {children}
        </div>
      )}
    </div>
  )
}

// Subcomponentes para calculadoras
const TemperatureCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-temperature-three-quarters" name="Temperatura" color="text-emerald-400">
      <TemperatureCalculatorForm />
    </CalculatorBase>
  )
}

const TemperatureCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('c')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Conversiones de temperatura
    let celsius, kelvin, fahrenheit, reaumur, rankine

    switch (unit) {
      case 'c': // Celsius
        celsius = numValue
        kelvin = numValue + 273.15
        fahrenheit = (numValue * 9/5) + 32
        reaumur = numValue * 0.8
        rankine = (numValue + 273.15) * 9/5
        break
      case 'k': // Kelvin
        celsius = numValue - 273.15
        kelvin = numValue
        fahrenheit = (numValue - 273.15) * 9/5 + 32
        reaumur = (numValue - 273.15) * 0.8
        rankine = numValue * 9/5
        break
      case 'f': // Fahrenheit
        celsius = (numValue - 32) * 5/9
        kelvin = (numValue - 32) * 5/9 + 273.15
        fahrenheit = numValue
        reaumur = (numValue - 32) * 4/9
        rankine = numValue + 459.67
        break
      case 're': // Réaumur
        celsius = numValue * 1.25
        kelvin = numValue * 1.25 + 273.15
        fahrenheit = numValue * 2.25 + 32
        reaumur = numValue
        rankine = (numValue * 1.25 + 273.15) * 9/5
        break
      case 'ra': // Rankine
        celsius = (numValue - 491.67) * 5/9
        kelvin = numValue * 5/9
        fahrenheit = numValue - 459.67
        reaumur = (numValue - 491.67) * 4/9
        rankine = numValue
        break
    }

    setResult({
      celsius: celsius?.toFixed(2) || '0.00',
      kelvin: kelvin?.toFixed(2) || '0.00',
      fahrenheit: fahrenheit?.toFixed(2) || '0.00',
      reaumur: reaumur?.toFixed(2) || '0.00',
      rankine: rankine?.toFixed(2) || '0.00'
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
            <option value="c">°C (Celsius)</option>
            <option value="k">K (Kelvin)</option>
            <option value="f">°F (Fahrenheit)</option>
            <option value="re">°R (Réaumur)</option>
            <option value="ra">°Ra (Rankine)</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Celsius: <span className="text-white">{result.celsius} °C</span></div>
          <div className="text-xs text-slate-400">Kelvin: <span className="text-white">{result.kelvin} K</span></div>
          <div className="text-xs text-slate-400">Fahrenheit: <span className="text-white">{result.fahrenheit} °F</span></div>
          <div className="text-xs text-slate-400">Réaumur: <span className="text-white">{result.reaumur} °R</span></div>
          <div className="text-xs text-slate-400">Rankine: <span className="text-white">{result.rankine} °Ra</span></div>
        </div>
      )}
    </div>
  )
}

// Otros calculadores (simplificados para este ejemplo)
const LengthCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-ruler-combined" name="Longitud" color="text-amber-400">
      <LengthCalculatorForm />
    </CalculatorBase>
  )
}

const LengthCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('m')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base unit: meters
    const factors: Record<string, number> = {
      m: 1,
      cm: 0.01,
      km: 1000,
      pulg: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344,
      um: 1e-6,
      nm: 1e-9,
      ang: 1e-10,
      nmi: 1852
    }

    const valInMeters = numValue * factors[unit]

    setResult({
      m: (valInMeters / factors.m).toFixed(4),
      cm: (valInMeters / factors.cm).toFixed(4),
      km: (valInMeters / factors.km).toFixed(6),
      pulg: (valInMeters / factors.pulg).toFixed(4),
      ft: (valInMeters / factors.ft).toFixed(4),
      yd: (valInMeters / factors.yd).toFixed(4),
      mi: (valInMeters / factors.mi).toFixed(6),
      nmi: (valInMeters / factors.nmi).toFixed(6)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="m">m (Metros)</option>
             <option value="cm">cm (Centímetros)</option>
             <option value="km">km (Kilómetros)</option>
             <option value="pulg">pulg (Pulgadas)</option>
             <option value="ft">ft (Pies)</option>
             <option value="yd">yd (Yardas)</option>
             <option value="mi">mi (Millas)</option>
             <option value="um">µm (Micrómetros)</option>
             <option value="nm">nm (Nanómetros)</option>
             <option value="ang">Å (Angstroms)</option>
             <option value="nmi">nmi (Millas náuticas)</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Metros: <span className="text-white">{result.m} m</span></div>
          <div className="text-xs text-slate-400">Centímetros: <span className="text-white">{result.cm} cm</span></div>
          <div className="text-xs text-slate-400">Kilómetros: <span className="text-white">{result.km} km</span></div>
          <div className="text-xs text-slate-400">Pulgadas: <span className="text-white">{result.pulg} in</span></div>
          <div className="text-xs text-slate-400">Pies: <span className="text-white">{result.ft} ft</span></div>
          <div className="text-xs text-slate-400">Yardas: <span className="text-white">{result.yd} yd</span></div>
          <div className="text-xs text-slate-400">Millas: <span className="text-white">{result.mi} mi</span></div>
          <div className="text-xs text-slate-400">Millas N.: <span className="text-white">{result.nmi} nmi</span></div>
        </div>
      )}
    </div>
  )
}

const AreaCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-vector-square" name="Área" color="text-rose-400">
      <AreaCalculatorForm />
    </CalculatorBase>
  )
}

const AreaCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('m2')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base unit: m2
    const factors: Record<string, number> = {
      m2: 1,
      km2: 1e6,
      cm2: 1e-4,
      in2: 0.00064516,
      ft2: 0.092903,
      yd2: 0.836127,
      mi2: 2589988.11,
      ac: 4046.86,
      ha: 10000
    }

    const valInM2 = numValue * factors[unit]

    setResult({
      m2: (valInM2 / factors.m2).toFixed(4),
      km2: (valInM2 / factors.km2).toExponential(4),
      cm2: (valInM2 / factors.cm2).toFixed(2),
      ft2: (valInM2 / factors.ft2).toFixed(4),
      ac: (valInM2 / factors.ac).toFixed(6),
      ha: (valInM2 / factors.ha).toFixed(6)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
            placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="m2">m²</option>
             <option value="km2">km²</option>
             <option value="cm2">cm²</option>
             <option value="in2">in²</option>
             <option value="ft2">ft²</option>
             <option value="yd2">yd²</option>
             <option value="mi2">mi²</option>
             <option value="ac">ac</option>
             <option value="ha">ha</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-rose-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Metros²: <span className="text-white">{result.m2}</span></div>
          <div className="text-xs text-slate-400">Km²: <span className="text-white">{result.km2}</span></div>
          <div className="text-xs text-slate-400">Pies²: <span className="text-white">{result.ft2}</span></div>
          <div className="text-xs text-slate-400">Hectáreas: <span className="text-white">{result.ha}</span></div>
        </div>
      )}
    </div>
  )
}

const VolumeCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-cube" name="Volumen" color="text-cyan-400">
      <VolumeCalculatorForm />
    </CalculatorBase>
  )
}

const VolumeCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('m3')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return
    
    // Base: m3
    const factors: Record<string, number> = {
      m3: 1,
      l: 0.001,
      in3: 1.6387e-5,
      ft3: 0.0283168,
      gal_us: 0.00378541,
      gal_imp: 0.00454609,
      cm3: 1e-6,
      ml: 1e-6,
      yd3: 0.764555,
      oz: 2.9574e-5
    }

    const valInM3 = numValue * factors[unit]

    setResult({
      m3: (valInM3 / factors.m3).toFixed(4),
      l: (valInM3 / factors.l).toFixed(4),
      gal_us: (valInM3 / factors.gal_us).toFixed(4),
      ft3: (valInM3 / factors.ft3).toFixed(4),
      ml: (valInM3 / factors.ml).toFixed(2)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
             type="number" 
             value={value} 
             onChange={(e) => setValue(e.target.value)} 
             className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="m3">m³</option>
             <option value="l">Litros</option>
             <option value="in3">in³</option>
             <option value="ft3">ft³</option>
             <option value="gal_us">US gal</option>
             <option value="gal_imp">Imp gal</option>
             <option value="cm3">cm³</option>
             <option value="ml">ml</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Metros³: <span className="text-white">{result.m3}</span></div>
          <div className="text-xs text-slate-400">Litros: <span className="text-white">{result.l}</span></div>
          <div className="text-xs text-slate-400">Galones US: <span className="text-white">{result.gal_us}</span></div>
          <div className="text-xs text-slate-400">Pies³: <span className="text-white">{result.ft3}</span></div>
        </div>
      )}
    </div>
  )
}

const WeightCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-weight-hanging" name="Peso" color="text-violet-400">
      <WeightCalculatorForm />
    </CalculatorBase>
  )
}

const WeightCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('kg')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base: kg
    const factors: Record<string, number> = {
      kg: 1,
      lb: 0.453592,
      oz: 0.0283495,
      uk_ton: 1016.05,
      us_ton: 907.185,
      ton: 1000,
      g: 0.001,
      mg: 1e-6,
      ng: 1e-12,
      pg: 1e-15,
      ug: 1e-9
    }

    const valInKg = numValue * factors[unit]

    setResult({
      kg: (valInKg / factors.kg).toFixed(4),
      lb: (valInKg / factors.lb).toFixed(4),
      ton: (valInKg / factors.ton).toFixed(6),
      g: (valInKg / factors.g).toFixed(2),
      oz: (valInKg / factors.oz).toFixed(4)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
             type="number" 
             value={value} 
             onChange={(e) => setValue(e.target.value)} 
             className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="kg">kg</option>
             <option value="lb">lbs</option>
             <option value="oz">oz</option>
             <option value="uk_ton">ton UK</option>
             <option value="us_ton">ton US</option>
             <option value="ton">ton Mét.</option>
             <option value="g">g</option>
             <option value="mg">mg</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-violet-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Kg: <span className="text-white">{result.kg}</span></div>
          <div className="text-xs text-slate-400">Libras: <span className="text-white">{result.lb}</span></div>
          <div className="text-xs text-slate-400">Toneladas: <span className="text-white">{result.ton}</span></div>
          <div className="text-xs text-slate-400">Gramos: <span className="text-white">{result.g}</span></div>
        </div>
      )}
    </div>
  )
}

const SpeedCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-gauge-high" name="Velocidad" color="text-red-400">
      <SpeedCalculatorForm />
    </CalculatorBase>
  )
}

const SpeedCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('ms')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base: m/s
    const factors: Record<string, number> = {
      ms: 1,
      kmh: 0.277778,
      ft_min: 0.00508,
      ft_s: 0.3048,
      mph: 0.44704,
      kn: 0.514444
    }

    const valInMs = numValue * factors[unit]

    setResult({
      ms: (valInMs / factors.ms).toFixed(2),
      kmh: (valInMs / factors.kmh).toFixed(2),
      mph: (valInMs / factors.mph).toFixed(2),
      kn: (valInMs / factors.kn).toFixed(2)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
             type="number" 
             value={value} 
             onChange={(e) => setValue(e.target.value)} 
             className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="ms">m/s</option>
             <option value="kmh">km/h</option>
             <option value="ft_min">ft/min</option>
             <option value="ft_s">ft/s</option>
             <option value="mph">mph</option>
             <option value="kn">kt</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-red-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">m/s: <span className="text-white">{result.ms}</span></div>
          <div className="text-xs text-slate-400">km/h: <span className="text-white">{result.kmh}</span></div>
          <div className="text-xs text-slate-400">mph: <span className="text-white">{result.mph}</span></div>
          <div className="text-xs text-slate-400">Nudos: <span className="text-white">{result.kn}</span></div>
        </div>
      )}
    </div>
  )
}

const PressureCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-arrows-down-to-line" name="Presión" color="text-orange-400">
      <PressureCalculatorForm />
    </CalculatorBase>
  )
}

const PressureCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('pa')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base: Pascal
    const factors: Record<string, number> = {
      pa: 1,
      bar: 100000,
      mmh2o: 9.80665,
      kgcm2: 98066.5,
      psi: 6894.76,
      psf: 47.8803,
      inh2o: 249.089,
      fth2o: 2989.07,
      atm: 101325,
      kgfm2: 9.80665,
      kgfcm2: 98066.5
    }

    const valInPa = numValue * factors[unit]

    setResult({
      pa: (valInPa / factors.pa).toFixed(2),
      bar: (valInPa / factors.bar).toFixed(4),
      psi: (valInPa / factors.psi).toFixed(4),
      atm: (valInPa / factors.atm).toFixed(4)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
             type="number" 
             value={value} 
             onChange={(e) => setValue(e.target.value)} 
             className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="pa">Pa</option>
             <option value="bar">bar</option>
             <option value="psi">psi</option>
             <option value="atm">atm</option>
             <option value="mmh2o">mmH2O</option>
             <option value="kgcm2">kg/cm²</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">Pa: <span className="text-white">{result.pa}</span></div>
          <div className="text-xs text-slate-400">Bar: <span className="text-white">{result.bar}</span></div>
          <div className="text-xs text-slate-400">PSI: <span className="text-white">{result.psi}</span></div>
          <div className="text-xs text-slate-400">Atm: <span className="text-white">{result.atm}</span></div>
        </div>
      )}
    </div>
  )
}

const FlowCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <CalculatorBase active={active} toggle={toggle} icon="fa-water" name="Flujo" color="text-blue-400">
      <FlowCalculatorForm />
    </CalculatorBase>
  )
}

const FlowCalculatorForm: React.FC = () => {
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState('m3s')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) return

    // Base: m3/s
    const factors: Record<string, number> = {
      m3s: 1,
      m3m: 1/60,
      m3h: 1/3600,
      ls: 0.001,
      lmin: 0.001/60,
      lh: 0.001/3600,
      gpm: 6.309e-5,
      gpd: 6.309e-5 / 1440,
      cfm: 0.000471947,
      gpm_imp: 7.577e-5
    }

    const valInM3s = numValue * factors[unit]

    setResult({
      m3s: (valInM3s / factors.m3s).toFixed(4),
      ls: (valInM3s / factors.ls).toFixed(2),
      m3h: (valInM3s / factors.m3h).toFixed(2),
      gpm: (valInM3s / factors.gpm).toFixed(2),
      cfm: (valInM3s / factors.cfm).toFixed(2)
    })
  }

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
          <input 
             type="number" 
             value={value} 
             onChange={(e) => setValue(e.target.value)} 
             className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" 
             placeholder="0"
          />
        </div>
        <div className="w-24">
          <label className="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
          <select 
            value={unit} 
            onChange={(e) => setUnit(e.target.value)} 
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
          >
             <option value="m3s">m³/s</option>
             <option value="m3h">m³/h</option>
             <option value="ls">l/s</option>
             <option value="lmin">l/min</option>
             <option value="gpm">GPM</option>
             <option value="cfm">CFM</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculate} 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-calculator"></i> Calcular
      </button>
      {result && (
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
          <div className="text-xs text-slate-400">m³/s: <span className="text-white">{result.m3s}</span></div>
          <div className="text-xs text-slate-400">l/s: <span className="text-white">{result.ls}</span></div>
          <div className="text-xs text-slate-400">m³/h: <span className="text-white">{result.m3h}</span></div>
          <div className="text-xs text-slate-400">GPM: <span className="text-white">{result.gpm}</span></div>
        </div>
      )}
    </div>
  )
}

export default Sidebar