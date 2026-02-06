<x-layout>
    @push('scripts')
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    @endpush

    <!-- Hero Section -->
    <div class="mb-10 border-b border-slate-100 pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="fa-solid fa-layer-group"></i> Ciencia de Superficies
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Tribología</h1>
        <p class="text-lg text-slate-600 leading-relaxed">
            La tribología es la ciencia y tecnología que estudia la interacción de las superficies en movimiento relativo, así como los temas y prácticas relacionadas. Involucra el estudio de la fricción, el desgaste y la lubricación. El término proviene de la palabra griega "tribos", que significa frotar o rozar.
        </p>
    </div>

    <!-- 1. Fricción -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">1</span>
            <i class="fa-solid fa-arrows-left-right text-blue-500 mr-3"></i> Fricción
        </h2>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-slate-600 mb-4">La fricción es la resistencia al movimiento relativo entre dos superficies en contacto. Puede ser clasificada en:</p>
            <ul class="list-disc pl-5 space-y-2 text-slate-600 mb-4">
                <li><strong>Fricción Seca:</strong> Ocurre entre superficies sólidas sin presencia de lubricante.
                    <ul class="list-none pl-4 mt-1 text-sm text-slate-500">
                        <li>• <em>Leyes de Amontons-Coulomb:</em> La fuerza de fricción es proporcional a la carga normal y es independiente del área aparente de contacto.</li>
                    </ul>
                </li>
                <li><strong>Fricción Fluida:</strong> Ocurre entre capas de un fluido en movimiento (viscosidad).</li>
            </ul>
            
            <div class="mt-4 bg-white p-4 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-700 text-sm mb-2">Cálculo del Coeficiente de Fricción</h4>
                <div class="flex justify-center py-2">
                    \[ \mu = \frac{F_f}{N} \]
                </div>
                <div class="text-xs text-slate-500 text-center mt-2">
                    Donde <strong>μ</strong> es el coeficiente de fricción, <strong>Ff</strong> es la fuerza de fricción y <strong>N</strong> es la fuerza normal.
                </div>
            </div>
        </div>
    </div>

    <!-- 2. Desgaste -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">2</span>
            <i class="fa-solid fa-eraser text-blue-500 mr-3"></i> Desgaste
        </h2>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-slate-600 mb-4">El desgaste es la pérdida progresiva de material de las superficies en contacto debido al movimiento relativo. Tipos principales:</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl shadow-sm">
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Desgaste Adhesivo</h4>
                    <p class="text-xs text-slate-500">Transferencia de material por soldadura en frío entre asperezas.</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm">
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Desgaste Abrasivo</h4>
                    <p class="text-xs text-slate-500">Causado por partículas duras que surcan la superficie más blanda.</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm">
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Desgaste por Fatiga</h4>
                    <p class="text-xs text-slate-500">Agrietamiento superficial debido a cargas cíclicas repetidas.</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-sm">
                    <h4 class="font-bold text-slate-800 text-sm mb-1">Desgaste Corrosivo</h4>
                    <p class="text-xs text-slate-500">Reacción química con el entorno combinada con remoción mecánica.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 3. Lubricación -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">3</span>
            <i class="fa-solid fa-oil-can text-blue-500 mr-3"></i> Lubricación
        </h2>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p class="text-slate-600 mb-4">Introducción de una sustancia (lubricante) entre las superficies para reducir la fricción y el desgaste.</p>
            <ul class="space-y-3">
                <li class="flex items-start">
                    <span class="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                    <div>
                        <strong class="text-slate-800">Lubricación Hidrodinámica:</strong>
                        <span class="text-slate-600 text-sm block">Película gruesa de fluido separa completamente las superficies.</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                    <div>
                        <strong class="text-slate-800">Lubricación Elastohidrodinámica (EHL):</strong>
                        <span class="text-slate-600 text-sm block">Ocurre en contactos concentrados (engranajes, rodamientos) con altas presiones.</span>
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                    <div>
                        <strong class="text-slate-800">Lubricación Límite:</strong>
                        <span class="text-slate-600 text-sm block">Contacto extenso entre asperezas; la protección depende de aditivos químicos.</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 4. Tipos de Lubricantes -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">4</span>
            Tipos de Lubricantes
        </h2>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <ul class="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Aceites Minerales:</strong> Derivados del petróleo, uso general.</li>
                <li><strong>Aceites Sintéticos:</strong> (PAO, Ésteres) Mejor rendimiento en temperaturas extremas.</li>
                <li><strong>Grasas:</strong> Aceite + Espesante (jabón). Para puntos de difícil acceso o sellado.</li>
                <li><strong>Lubricantes Sólidos:</strong> Grafito, Disulfuro de Molibdeno (MoS2). Para condiciones extremas.</li>
            </ul>
        </div>
    </div>

    <!-- 5. Materiales en Tribología -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">5</span>
            Materiales en Tribología
        </h2>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <ul class="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Metales:</strong> Aceros endurecidos, hierros fundidos, aleaciones de cobre (bronces).</li>
                <li><strong>Cerámicas:</strong> Carburo de silicio, alúmina (alta dureza y resistencia térmica).</li>
                <li><strong>Polímeros:</strong> PTFE (Teflón), Nylon (baja fricción, autolubricantes).</li>
                <li><strong>Compuestos:</strong> Materiales diseñados para aplicaciones específicas.</li>
            </ul>
        </div>
    </div>

    <!-- 6. Técnicas de Diagnóstico -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">6</span>
            Técnicas de Diagnóstico
        </h2>
        <div class="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
            <div class="p-5">
                <h4 class="font-bold text-slate-800 mb-1">Análisis de Aceite</h4>
                <p class="text-sm text-slate-600">Monitoreo de la viscosidad, acidez, contenido de agua y conteo de partículas.</p>
            </div>
            <div class="p-5">
                <h4 class="font-bold text-slate-800 mb-1">Ferrografía</h4>
                <p class="text-sm text-slate-600">Análisis microscópico de las partículas de desgaste presentes en el lubricante para determinar el modo de fallo.</p>
            </div>
            <div class="p-5">
                <h4 class="font-bold text-slate-800 mb-1">Termografía</h4>
                <p class="text-sm text-slate-600">Detección de puntos calientes causados por fricción excesiva.</p>
            </div>
            <div class="p-5">
                <h4 class="font-bold text-slate-800 mb-1">Análisis de Vibraciones</h4>
                <p class="text-sm text-slate-600">Detección de anomalías en rodamientos y engranajes.</p>
            </div>
        </div>
    </div>

    <!-- 7. Innovaciones y Futuro -->
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3">7</span>
            Innovaciones y Futuro
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <i class="fa-solid fa-leaf text-emerald-500 text-2xl mb-3"></i>
                <h3 class="font-bold text-slate-900 mb-2">Lubricación Verde</h3>
                <p class="text-sm text-slate-600">Desarrollo de biolubricantes biodegradables y ambientalmente amigables.</p>
            </div>
            <div class="bg-purple-50 p-5 rounded-xl border border-purple-100">
                <i class="fa-solid fa-microchip text-purple-500 text-2xl mb-3"></i>
                <h3 class="font-bold text-slate-900 mb-2">Nanotecnología</h3>
                <p class="text-sm text-slate-600">Uso de nanopartículas como aditivos anti-desgaste y reductores de fricción.</p>
            </div>
            <div class="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <i class="fa-solid fa-robot text-blue-500 text-2xl mb-3"></i>
                <h3 class="font-bold text-slate-900 mb-2">Tribología Inteligente</h3>
                <p class="text-sm text-slate-600">Sensores integrados para monitoreo en tiempo real de las condiciones tribológicas.</p>
            </div>
        </div>
    </div>

    <!-- Back to Home Button -->
    <div class="mt-12 text-center">
        <a href="{{ route('home') }}" class="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
            <i class="fa-solid fa-arrow-left mr-2"></i> Volver al Inicio
        </a>
    </div>
</x-layout>
