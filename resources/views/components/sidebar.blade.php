<aside class="w-72 bg-slate-900 text-white flex flex-col h-full transition-all duration-300 shadow-2xl z-50">
    <!-- Logo -->
    <div class="h-20 flex items-center px-6 mb-2 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="flex items-center gap-3 relative z-10">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <i class="fa-solid fa-brain text-white text-lg"></i>
            </div>
            <div>
                <span class="text-xl font-bold block leading-tight tracking-tight">Ingeniamente</span>
                <span class="text-[10px] uppercase tracking-widest text-blue-300/80">Premium Learning</span>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar py-6">
        
        <div class="px-2 mb-4 mt-2">
            <h3 class="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Explorar</h3>
        </div>
        
        <a href="{{ url('/') }}" onclick="setActive(this)" class="nav-item {{ request()->is('/') ? 'active' : '' }} group flex items-center px-4 py-3.5 gap-3 rounded-xl transition-all duration-200 hover:bg-white/5 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i class="fa-solid fa-house w-6 text-center text-blue-400 group-hover:text-blue-300 transition-colors"></i>
            <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
        </a>

        <div class="space-y-1">
            <button onclick="toggleDropdown('entradas-dropdown', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3.5 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-newspaper w-6 text-center group-hover:text-blue-300 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Entradas</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </button>
            <div id="entradas-dropdown" class="ml-10 pl-3 border-l-2 border-blue-500/30 mt-1 mb-2 space-y-1">
                <a href="{{ url('pages/mantenimiento/mantenimiento_correctivo') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Correctivo</a>
                <a href="{{ url('pages/calculadora_MTBF') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Cálculadora de MTBF</a>
                <a href="#" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calculadora MTTR</a>
                <a href="{{ url('pages/mantenimiento/mantenimiento_preventivo') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Preventivo</a>
                <a href="{{ url('pages/mantenimiento/mantenimiento_predictivo') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Predictivo</a>
                <a href="{{ url('pages/mantenimiento/mantenimiento_modificativo') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Mantenimiento Modificativo</a>
                <a href="{{ url('pages/rodamiento') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Rodamientos</a>
                <a href="{{ url('pages/tribologia') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Tribología</a>
                <a href="{{ url('pages/disenio_mecanico') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Diseño Mecánico</a>
                <a href="{{ url('pages/oleohidraulica') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Oleohidráulica</a>
                <a href="{{ url('pages/neumatica') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Neumática</a>
                <a href="{{ url('pages/fajas') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Fajas</a>
                <a href="{{ url('pages/poleas') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Poleas</a>
                <a href="{{ url('pages/ejes') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Ejes</a>
                <a href="#" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Calc. Mantenimiento</a>
                <a href="{{ url('pages/fmea') }}" class="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">FMEA</a>
            </div>
        </div>

        <div class="px-2 mt-8 mb-4">
            <h3 class="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Calculadoras</h3>
        </div>

        <!-- Calculators Links -->
        <div class="space-y-1">
            
            <!-- Temperatura -->
            <button onclick="toggleDropdown('calc-temp', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-temperature-three-quarters w-6 text-center text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Temperatura</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-temp" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="temp-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="temp-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="c">°C (Celsius)</option>
                             <option value="k">K (Kelvin)</option>
                             <option value="f">°F (Fahrenheit)</option>
                             <option value="re">°R (Réaumur)</option>
                             <option value="ra">°Ra (Rankine)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateTemp()" class="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="temp-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Longitud -->
            <button onclick="toggleDropdown('calc-length', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-ruler-combined w-6 text-center text-slate-500 group-hover:text-amber-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Longitud</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
             <div id="calc-length" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                         <input type="number" id="length-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                        <select id="length-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
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
                <button onclick="calculateLength()" class="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                 <div id="length-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Área -->
            <button onclick="toggleDropdown('calc-area', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-vector-square w-6 text-center text-slate-500 group-hover:text-rose-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Área</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-area" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="area-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="area-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="m2">m² (Metros cuadrados)</option>
                             <option value="km2">km² (Kilómetros cuadrados)</option>
                             <option value="cm2">cm² (Centímetros cuadrados)</option>
                             <option value="in2">in² (Pulgadas cuadradas)</option>
                             <option value="ft2">ft² (Pies cuadrados)</option>
                             <option value="yd2">yd² (Yardas cuadradas)</option>
                             <option value="mi2">mi² (Millas cuadradas)</option>
                             <option value="ac">ac (Acres)</option>
                             <option value="ha">ha (Hectáreas)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateArea()" class="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-rose-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="area-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Volumen -->
            <button onclick="toggleDropdown('calc-volume', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-cube w-6 text-center text-slate-500 group-hover:text-cyan-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Volumen</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-volume" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="volume-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="volume-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="m3">m³ (Metros cúbicos)</option>
                             <option value="l">l (Litros)</option>
                             <option value="in3">in³ (Pulgadas cúbicas)</option>
                             <option value="ft3">ft³ (Pies cúbicos)</option>
                             <option value="gal_us">US gal (Galones US)</option>
                             <option value="gal_imp">imp gal (Galones Imperiales)</option>
                             <option value="cm3">cm³ (Centímetros cúbicos)</option>
                             <option value="ml">ml (Mililitros)</option>
                             <option value="yd3">yd³ (Yardas cúbicas)</option>
                             <option value="oz">oz (Onzas líquidas)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateVolume()" class="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-cyan-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="volume-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Peso -->
            <button onclick="toggleDropdown('calc-weight', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-weight-hanging w-6 text-center text-slate-500 group-hover:text-violet-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Peso</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-weight" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="weight-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="weight-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="kg">kg (Kilogramos)</option>
                             <option value="lb">lbs (Libras)</option>
                             <option value="oz">oz (Onzas)</option>
                             <option value="uk_ton">uk ton (Toneladas UK)</option>
                             <option value="us_ton">us ton (Toneladas US)</option>
                             <option value="ton">ton (Toneladas métricas)</option>
                             <option value="g">g (Gramos)</option>
                             <option value="mg">mg (Miligramos)</option>
                             <option value="ng">ng (Nanómetros)</option>
                             <option value="pg">pg (Picogramos)</option>
                             <option value="ug">µg (Microgramos)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateWeight()" class="w-full bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-violet-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="weight-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Velocidad -->
            <button onclick="toggleDropdown('calc-speed', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-gauge-high w-6 text-center text-slate-500 group-hover:text-red-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Velocidad</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-speed" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="speed-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="speed-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="ms">m/s (Metros por segundo)</option>
                             <option value="kmh">km/h (Kilómetros por hora)</option>
                             <option value="ft_min">ft/min (Pies por minuto)</option>
                             <option value="ft_s">ft/s (Pies por segundo)</option>
                             <option value="mph">mph (Millas por hora)</option>
                             <option value="kn">kt (Nudos)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateSpeed()" class="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-red-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="speed-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Presión -->
            <button onclick="toggleDropdown('calc-pressure', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-arrows-down-to-line w-6 text-center text-slate-500 group-hover:text-orange-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Presión</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-pressure" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="pressure-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="pressure-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="pa">Pa (Pascales)</option>
                             <option value="bar">bar (Bar)</option>
                             <option value="mmh2o">mm H2O (Milímetros de agua)</option>
                             <option value="kgcm2">kg/cm² (Kilogramos por cm²)</option>
                             <option value="psi">psi (Libras por pulgada cuadrada)</option>
                             <option value="psf">psf (Libras por pie cuadrado)</option>
                             <option value="inh2o">inches H2O (Pulgadas de agua)</option>
                             <option value="fth2o">ft H2O (Pies de agua)</option>
                             <option value="atm">atm (Atmósferas)</option>
                             <option value="kgfm2">kgf/m² (kg-fuerza por m²)</option>
                             <option value="kgfcm2">kgf/cm² (kg-fuerza por cm²)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculatePressure()" class="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="pressure-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>

            <!-- Flujo -->
            <button onclick="toggleDropdown('calc-flow', this)" class="w-full nav-item group flex items-center justify-between px-4 py-3 text-slate-400 rounded-xl transition-all duration-200 hover:bg-white/5 hover:text-white relative overflow-hidden cursor-pointer text-left">
                <div class="flex items-center gap-3 relative z-10 pointer-events-none">
                    <i class="fa-solid fa-water w-6 text-center text-slate-500 group-hover:text-blue-400 transition-colors"></i>
                    <span class="font-medium text-sm group-hover:translate-x-1 transition-transform">Flujo</span>
                </div>
                <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 relative z-10 rotate-180"></i>
            </button>
            <div id="calc-flow" class="hidden mx-4 mb-4 bg-slate-900/80 rounded-xl p-4 border border-white/5 shadow-inner mt-1">
                <div class="flex gap-2 mb-3">
                    <div class="flex-1">
                        <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Valor</label>
                        <input type="number" id="flow-input" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="0">
                    </div>
                    <div class="w-24">
                         <label class="text-[10px] uppercase text-slate-500 font-bold tracking-widest block mb-1.5">Unidad</label>
                         <select id="flow-unit" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                             <option value="m3s">m3/s (Metros cúbicos por segundo)</option>
                             <option value="m3m">m3/m (Metros cúbicos por minuto)</option>
                             <option value="m3h">m3/h (Metros cúbicos por hora)</option>
                             <option value="ls">l/s (Litros por segundo)</option>
                             <option value="lmin">l/m (Litros por minuto)</option>
                             <option value="lh">l/h (Litros por hora)</option>
                             <option value="gpm">gpm (Galones por minuto EE.UU.)</option>
                             <option value="gpd">gpd (Galones por día EE.UU.)</option>
                             <option value="cfm">cfm (Pies cúbicos por minuto)</option>
                             <option value="gpm_imp">gpm imperial (Galones por minuto Imperial)</option>
                             <option value="gpd_imp">gpd imperial (Galones por día Imperial)</option>
                         </select>
                    </div>
                </div>
                <button onclick="calculateFlow()" class="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-calculator"></i> Calcular
                </button>
                <div id="flow-result" class="grid grid-cols-2 gap-2 hidden mt-4 pt-4 border-t border-white/5"></div>
            </div>
            
        </div>
    </nav>
</aside>