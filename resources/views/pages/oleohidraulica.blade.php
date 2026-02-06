<x-layout>
    @push('scripts')
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    @endpush

    <div class="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 fade-in">
        
        <!-- Hero Section -->
        <div class="mb-10 border-b border-slate-100 pb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                <i class="fa-solid fa-oil-can"></i> Mecánica de Fluidos
            </div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Oleohidráulica: Principios y Aplicaciones</h1>
            <p class="text-lg text-slate-600 leading-relaxed">
                La oleohidráulica es una rama fundamental de la mecánica de fluidos aplicadas en la ingeniería moderna. Estas tecnologías han evolucionado y se han integrado en diversas aplicaciones industriales, desde maquinaria pesada hasta sistemas automatizados de producción.
            </p>
        </div>

        <!-- Oleohidráulica -->
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-droplet"></i></span>
                Oleohidráulica
            </h2>
            
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                <h3 class="font-bold text-slate-800 text-lg mb-3">Principios Básicos</h3>
                <p class="text-slate-600 mb-4">
                    La oleohidráulica se basa en el uso de fluidos hidráulicos (aceites) para transmitir y controlar energía. El principio fundamental detrás de los sistemas oleohidráulicos es la ley de Pascal, que establece que la presión aplicada a un fluido confinado se transmite uniformemente en todas las direcciones.
                </p>
                
                <h3 class="font-bold text-slate-800 text-lg mb-3">Ley de Pascal</h3>
                <p class="text-slate-600 mb-4">La ley de Pascal puede expresarse matemáticamente como:</p>
                
                <div class="flex justify-center py-6 bg-white rounded-xl shadow-sm mb-4">
                    <div class="text-2xl font-serif text-slate-800">
                        \[ P = \frac{F}{A} \]
                    </div>
                </div>

                <div class="text-sm text-slate-500 bg-white p-4 rounded-xl border border-slate-100 mb-4">
                    <strong class="block mb-2 text-slate-700">Donde:</strong>
                    <ul class="space-y-1">
                        <li>• <strong>P:</strong> es la presión aplicada (Pa, Pascales).</li>
                        <li>• <strong>F:</strong> es la fuerza (N, Newtons).</li>
                        <li>• <strong>A:</strong> es el área (m², metros cuadrados).</li>
                    </ul>
                </div>
                <p class="text-slate-600 text-sm">
                    Esta ley es la base para el funcionamiento de numerosos dispositivos hidráulicos, permitiendo la amplificación de fuerzas a través de áreas diferenciadas de entrada y salida.
                </p>
            </div>
        </div>

        <!-- Componentes Principales -->
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-gears"></i></span>
                Componentes Principales
            </h2>
            <p class="text-slate-600 mb-6">Los sistemas oleohidráulicos se componen de varios componentes esenciales que trabajan en conjunto para controlar y transmitir energía.</p>

            <div class="space-y-8">
                
                <!-- Bomba Hidráulica -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 class="font-bold text-slate-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-pump-soap text-cyan-500 mr-3"></i> Bomba Hidráulica</h3>
                    <p class="text-slate-600 mb-4">La bomba hidráulica convierte la energía mecánica en energía hidráulica, generando un flujo de aceite a alta presión. Las bombas pueden ser de diversos tipos:</p>
                    <ol class="list-decimal pl-5 space-y-2 text-slate-600 mb-6">
                        <li><strong>Bombas de Engranajes:</strong> Son robustas y sencillas, ideales para aplicaciones de baja presión.</li>
                        <li><strong>Bombas de Paletas:</strong> Ofrecen un flujo constante y son adecuadas para presiones medias.</li>
                        <li><strong>Bombas de Pistones:</strong> Son las más eficientes y pueden manejar altas presiones, siendo comunes en aplicaciones industriales pesadas.</li>
                    </ol>
                    <p class="text-slate-600 mb-4 text-sm">La capacidad de una bomba se mide en litros por minuto (L/min) y su presión en bares (bar). La ecuación fundamental para la capacidad de la bomba es:</p>
                    <div class="flex justify-center py-4 bg-slate-50 rounded-xl mb-4">
                        <div class="text-xl font-serif text-slate-800">
                            \[ Q = V \times N \]
                        </div>
                    </div>
                    <div class="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                        <strong class="block mb-1 text-slate-700">Donde:</strong>
                        <ul class="space-y-1">
                            <li>• <strong>Q:</strong> es el caudal (L/min).</li>
                            <li>• <strong>V:</strong> es el desplazamiento volumétrico por ciclo (L).</li>
                            <li>• <strong>N:</strong> es la velocidad (rpm).</li>
                        </ul>
                    </div>
                </div>

                <!-- Válvulas -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 class="font-bold text-slate-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-sliders text-cyan-500 mr-3"></i> Válvulas</h3>
                    <p class="text-slate-600 mb-4">Las válvulas controlan la dirección, presión y flujo del fluido. Existen diferentes tipos de válvulas:</p>
                    <ol class="list-decimal pl-5 space-y-2 text-slate-600">
                        <li><strong>Válvulas Direccionales:</strong> Controlan el camino del flujo del fluido, esenciales para la operación de cilindros y motores hidráulicos.</li>
                        <li><strong>Válvulas de Presión:</strong> Mantienen la presión dentro de límites preestablecidos, protegiendo el sistema de sobrepresiones.</li>
                        <li><strong>Válvulas de Control de Flujo:</strong> Regulan la velocidad del flujo, permitiendo un control preciso de la velocidad de los actuadores.</li>
                    </ol>
                </div>

                <!-- Actuadores -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 class="font-bold text-slate-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-robot text-cyan-500 mr-3"></i> Actuadores</h3>
                    <p class="text-slate-600 mb-4">Los actuadores convierten la energía hidráulica en energía mecánica. Los dos tipos principales de actuadores son los cilindros hidráulicos y los motores hidráulicos.</p>
                    
                    <ul class="list-disc pl-5 space-y-6 text-slate-600">
                        <li>
                            <strong>Cilindros Hidráulicos:</strong> Utilizados para proporcionar movimiento lineal. La fuerza generada por un cilindro hidráulico se calcula como:
                            <div class="flex justify-center py-4 bg-slate-50 rounded-xl my-3">
                                <div class="text-xl font-serif text-slate-800">
                                    \[ F = P \times A \]
                                </div>
                            </div>
                            <div class="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                <strong class="block mb-1 text-slate-700">Donde:</strong>
                                <ul class="space-y-1">
                                    <li>• <strong>F:</strong> es la fuerza (N).</li>
                                    <li>• <strong>P:</strong> es la presión (Pa).</li>
                                    <li>• <strong>A:</strong> es el área del pistón (m²).</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <strong>Motores Hidráulicos:</strong> Utilizados para proporcionar movimiento rotativo. La potencia generada por un motor hidráulico se calcula como:
                            <div class="flex justify-center py-4 bg-slate-50 rounded-xl my-3">
                                <div class="text-xl font-serif text-slate-800">
                                    \[ P = \frac{T \times \omega}{9550} \]
                                </div>
                            </div>
                            <div class="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                                <strong class="block mb-1 text-slate-700">Donde:</strong>
                                <ul class="space-y-1">
                                    <li>• <strong>P:</strong> es la potencia (kW).</li>
                                    <li>• <strong>T:</strong> es el par (Nm).</li>
                                    <li>• <strong>ω:</strong> es la velocidad angular (rpm).</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Acumuladores -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 class="font-bold text-slate-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-battery-full text-cyan-500 mr-3"></i> Acumuladores</h3>
                    <p class="text-slate-600 mb-4">Los acumuladores almacenan energía hidráulica y ayudan a mantener la presión del sistema. Los tipos de acumuladores incluyen:</p>
                    <ol class="list-decimal pl-5 space-y-2 text-slate-600">
                        <li><strong>Acumuladores de Vejiga:</strong> Utilizan una vejiga flexible para separar el fluido hidráulico del gas.</li>
                        <li><strong>Acumuladores de Pistón:</strong> Utilizan un pistón móvil para separar el fluido hidráulico del gas.</li>
                        <li><strong>Acumuladores de Diafragma:</strong> Utilizan una membrana flexible para separar el fluido hidráulico del gas.</li>
                    </ol>
                </div>

                <!-- Filtros -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 class="font-bold text-slate-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-filter text-cyan-500 mr-3"></i> Filtros</h3>
                    <p class="text-slate-600 mb-4">Los filtros mantienen el fluido libre de contaminantes, garantizando la longevidad y eficiencia del sistema. Los filtros pueden ser de diferentes tipos:</p>
                    <ol class="list-decimal pl-5 space-y-2 text-slate-600">
                        <li><strong>Filtros de Succión:</strong> Ubicados antes de la bomba para protegerla de partículas grandes.</li>
                        <li><strong>Filtros de Presión:</strong> Ubicados después de la bomba para eliminar partículas finas.</li>
                        <li><strong>Filtros de Retorno:</strong> Ubicados antes del tanque de aceite para eliminar contaminantes antes de que el fluido regrese al depósito.</li>
                    </ol>
                </div>
            </div>
        </div>

        <!-- Aplicaciones -->
        <div class="mb-12">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-briefcase"></i></span>
                Aplicaciones
            </h2>
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p class="text-slate-600 mb-4">La oleohidráulica tiene una amplia gama de aplicaciones en diferentes industrias:</p>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-sm"></i>
                        <span class="text-slate-700"><strong>Maquinaria Pesada:</strong> Excavadoras, grúas y cargadores frontales utilizan sistemas oleohidráulicos para mover grandes cargas con precisión.</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-sm"></i>
                        <span class="text-slate-700"><strong>Aeronáutica:</strong> Los sistemas hidráulicos son cruciales en los aviones para operar los controles de vuelo y el tren de aterrizaje.</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-sm"></i>
                        <span class="text-slate-700"><strong>Industria Manufacturera:</strong> Prensas hidráulicas, máquinas de moldeo por inyección y equipos de ensamblaje utilizan oleohidráulica para operaciones precisas y de alta fuerza.</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-sm"></i>
                        <span class="text-slate-700"><strong>Automoción:</strong> Los sistemas de frenos hidráulicos y las transmisiones automáticas son ejemplos de aplicaciones oleohidráulicas en vehículos.</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Ventajas y Desventajas -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-scale-balanced"></i></span>
                Ventajas y Desventajas
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-emerald-600 mb-4 flex items-center"><i class="fa-solid fa-thumbs-up mr-2"></i> Ventajas</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start bg-emerald-50 p-3 rounded-lg">
                            <i class="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Alta Relación de Potencia a Peso:</strong> Pueden generar grandes fuerzas con componentes relativamente pequeños.</span>
                        </li>
                        <li class="flex items-start bg-emerald-50 p-3 rounded-lg">
                            <i class="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Capacidad para Generar Fuerzas Elevadas:</strong> Ideales para aplicaciones que requieren una gran fuerza de trabajo.</span>
                        </li>
                        <li class="flex items-start bg-emerald-50 p-3 rounded-lg">
                            <i class="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Precisión y Control Fino:</strong> Permiten un control preciso de la velocidad y posición de los actuadores.</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-rose-600 mb-4 flex items-center"><i class="fa-solid fa-thumbs-down mr-2"></i> Desventajas</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start bg-rose-50 p-3 rounded-lg">
                            <i class="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Posibilidad de Fugas de Aceite:</strong> Las fugas pueden causar problemas ambientales y de seguridad.</span>
                        </li>
                        <li class="flex items-start bg-rose-50 p-3 rounded-lg">
                            <i class="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Mantenimiento y Reparación Complejos:</strong> Requieren un mantenimiento regular y especializado.</span>
                        </li>
                        <li class="flex items-start bg-rose-50 p-3 rounded-lg">
                            <i class="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-xs"></i>
                            <span class="text-sm text-slate-700"><strong>Sensibilidad a la Contaminación del Fluido:</strong> La presencia de contaminantes en el fluido hidráulico puede causar fallos en el sistema.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Back to Home Button -->
        <div class="mt-12 text-center">
            <a href="{{ route('home') }}" class="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
                <i class="fa-solid fa-arrow-left mr-2"></i> Volver al Inicio
            </a>
        </div>

    </div>
</x-layout>
