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

        <div className="px-2 mt-8 mb-4">
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
      </nav>
    </aside>
  )
}

// Subcomponentes para calculadoras
const TemperatureCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-temperature-three-quarters w-6 text-center text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Temperatura</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <TemperatureCalculatorForm />
        </div>
      )}
    </div>
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
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-ruler-combined w-6 text-center text-slate-500 group-hover:text-amber-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Longitud</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de longitud (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const AreaCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-vector-square w-6 text-center text-slate-500 group-hover:text-rose-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Área</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de área (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const VolumeCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-cube w-6 text-center text-slate-500 group-hover:text-cyan-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Volumen</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de volumen (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const WeightCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-weight-hanging w-6 text-center text-slate-500 group-hover:text-violet-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Peso</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de peso (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const SpeedCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-gauge-high w-6 text-center text-slate-500 group-hover:text-red-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Velocidad</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de velocidad (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const PressureCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-arrows-down-to-line w-6 text-center text-slate-500 group-hover:text-orange-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Presión</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de presión (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

const FlowCalculator: React.FC<{ active: boolean; toggle: () => void }> = ({ active, toggle }) => {
  return (
    <div className="space-y-1">
      <button 
        onClick={toggle}
        className="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left"
      >
        <div className="flex items-center gap-3 relative z-10 pointer-events-none">
          <i className="fa-solid fa-water w-6 text-center text-slate-500 group-hover:text-blue-400 transition-colors"></i>
          <span className="font-medium text-sm group-hover:translate-x-1 transition-transform">Flujo</span>
        </div>
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 ${active ? 'rotate-180' : ''}`}></i>
      </button>
      {active && (
        <div className="mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
          <div className="text-center text-slate-400 text-sm py-4">Calculadora de flujo (implementación pendiente)</div>
        </div>
      )}
    </div>
  )
}

export default Sidebar