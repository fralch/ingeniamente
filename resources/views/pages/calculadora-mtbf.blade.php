<x-layout>
    <!-- Hero Section -->
    <div class="mb-10 border-b border-slate-100 pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="fa-solid fa-calculator"></i> Herramientas de Gestión
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 font-heading">Calculadora de <span class="bg-slate-800 text-white px-2 py-1 transform -rotate-2 inline-block rounded-md">MTBF</span></h1>
        <p class="text-lg text-slate-600 leading-relaxed mt-4">
            El Tiempo Medio Entre Fallos (MTBF) es una medida clave en la gestión de mantenimiento y confiabilidad de equipos. Se utiliza para predecir el tiempo promedio entre fallos de un sistema.
        </p>
    </div>

    <!-- Section 1: What is MTBF -->
    <div class="mb-10">
        <h2 class="text-xl font-bold text-slate-800 mb-4 font-heading">¿Qué es el MTBF?</h2>
        <p class="text-slate-600 leading-relaxed">
            El Tiempo Medio Entre Fallos (MTBF) es una medida clave en la gestión de mantenimiento y confiabilidad de equipos. Se utiliza para predecir el tiempo promedio entre fallos de un sistema, ayudando a planificar mantenimientos preventivos y mejorar la eficiencia operativa.
        </p>
    </div>

    <!-- Section 2: Instructions -->
    <div class="mb-10">
        <h2 class="text-xl font-bold text-slate-800 mb-4 font-heading">¿Cómo Utilizar la Calculadora?</h2>
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <ul class="space-y-3 text-slate-700">
                <li class="flex items-start">
                    <span class="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <span><strong>Tiempo Total de Operación</strong>: Introduce el tiempo total de operación en horas.</span>
                </li>
                <li class="flex items-start">
                    <span class="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <span><strong>Número de Fallos</strong>: Introduce el número de fallos ocurridos durante ese periodo.</span>
                </li>
                <li class="flex items-start">
                    <span class="bg-blue-200 text-blue-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <span>Haz clic en el botón «<strong>Calcular</strong>» para obtener el MTBF y la Tasa de Fallas.</span>
                </li>
            </ul>
        </div>
    </div>

    <!-- Calculator Card -->
    <div class="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg max-w-lg mx-auto mb-12 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        <h3 class="text-2xl font-bold text-center text-slate-800 mb-8 font-heading">Calculadora MTBF</h3>
        
        <form id="mtbfForm" onsubmit="event.preventDefault(); calculateMTBF();">
            <div class="mb-6">
                <label for="totalTime" class="block mb-2 text-sm font-bold text-slate-700">Tiempo Total de Operación (horas):</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <input type="number" id="totalTime" step="any" min="0" placeholder="Ej. 1000" class="w-full pl-10 p-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700 bg-slate-50 focus:bg-white">
                </div>
            </div>
            
            <div class="mb-8">
                <label for="failures" class="block mb-2 text-sm font-bold text-slate-700">Número de Fallos:</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <input type="number" id="failures" step="any" min="0" placeholder="Ej. 5" class="w-full pl-10 p-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-slate-700 bg-slate-50 focus:bg-white">
                </div>
            </div>

            <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-slate-900/20 mb-8 transform hover:-translate-y-1">
                Calcular Resultados
            </button>
        </form>

        <!-- Results -->
        <div id="results" class="hidden">
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <div>
                        <span class="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">MTBF</span>
                        <span id="mtbfResult" class="text-3xl font-extrabold text-blue-600">0.00</span>
                        <span class="text-sm text-slate-400 block mt-1">horas</span>
                    </div>
                    <div class="md:border-l md:border-slate-200">
                        <span class="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Tasa de Fallas</span>
                        <span id="failureRateResult" class="text-3xl font-extrabold text-red-500">0.00000</span>
                        <span class="text-sm text-slate-400 block mt-1">fallos/hora</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section 3: Benefits -->
    <div class="mb-6">
        <h2 class="text-xl font-bold text-slate-800 mb-4 font-heading">Beneficios del Cálculo</h2>
        <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div class="text-cyan-500 mb-2"><i class="fa-solid fa-chart-line text-2xl"></i></div>
                <h3 class="font-bold text-slate-800 mb-1">Mejora Continua</h3>
                <p class="text-sm text-slate-600">Permite medir la efectividad de los planes de mantenimiento.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div class="text-cyan-500 mb-2"><i class="fa-solid fa-coins text-2xl"></i></div>
                <h3 class="font-bold text-slate-800 mb-1">Reducción de Costos</h3>
                <p class="text-sm text-slate-600">Ayuda a optimizar el stock de repuestos y reducir paradas no planificadas.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div class="text-cyan-500 mb-2"><i class="fa-solid fa-stopwatch text-2xl"></i></div>
                <h3 class="font-bold text-slate-800 mb-1">Disponibilidad</h3>
                <p class="text-sm text-slate-600">Aumenta el tiempo operativo de los equipos críticos.</p>
            </div>
        </div>
    </div>

    @push('scripts')
    <script>
        function calculateMTBF() {
            const timeInput = document.getElementById('totalTime');
            const failuresInput = document.getElementById('failures');
            const resultsDiv = document.getElementById('results');
            const mtbfDisplay = document.getElementById('mtbfResult');
            const rateDisplay = document.getElementById('failureRateResult');

            const time = parseFloat(timeInput.value);
            const failures = parseFloat(failuresInput.value);

            // Validation
            let isValid = true;
            if (isNaN(time) || time <= 0) {
                timeInput.classList.add('border-red-500', 'bg-red-50');
                isValid = false;
            } else {
                timeInput.classList.remove('border-red-500', 'bg-red-50');
            }

            if (isNaN(failures) || failures < 0) {
                failuresInput.classList.add('border-red-500', 'bg-red-50');
                isValid = false;
            } else {
                failuresInput.classList.remove('border-red-500', 'bg-red-50');
            }

            if (!isValid) return;

            let mtbf = 0;
            let failureRate = 0;

            if (failures === 0) {
                mtbfDisplay.textContent = "∞";
                mtbfDisplay.classList.add('text-4xl'); // Make infinity larger
                rateDisplay.textContent = "0.00000";
            } else {
                mtbfDisplay.classList.remove('text-4xl');
                mtbf = time / failures;
                failureRate = failures / time;
                
                mtbfDisplay.textContent = mtbf.toFixed(2);
                rateDisplay.textContent = failureRate.toFixed(5);
            }

            resultsDiv.classList.remove('hidden');
            resultsDiv.classList.add('animate-fade-in-up');
        }

        // Add input listeners to remove error styling
        document.getElementById('totalTime').addEventListener('input', function() {
            this.classList.remove('border-red-500', 'bg-red-50');
        });
        document.getElementById('failures').addEventListener('input', function() {
            this.classList.remove('border-red-500', 'bg-red-50');
        });
    </script>
    @endpush
</x-layout>