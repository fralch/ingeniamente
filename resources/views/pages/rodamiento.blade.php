<x-layout>
    @push('scripts')
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    @endpush

    <!-- Hero Section -->
    <div class="mb-10 border-b border-slate-100 pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="fa-solid fa-gear"></i> Elementos de Máquinas
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Rodamientos: Fundamentos y Tipos</h1>
        <p class="text-lg text-slate-600 leading-relaxed">
            Los rodamientos son componentes esenciales en una amplia gama de aplicaciones mecánicas y electromecánicas. Su función principal es reducir la fricción y facilitar el movimiento relativo entre dos partes, ya sea en rotación o en movimiento lineal. Permiten un movimiento eficiente, suave y controlado, prolongando la vida útil de los equipos y reduciendo el desgaste de las piezas móviles.
        </p>
    </div>

    <!-- Historia y Evolución -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-clock-rotate-left"></i></span>
            Historia y Evolución
        </h2>
        
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
            <p class="text-slate-600 mb-4">
                La historia de los rodamientos se remonta a la antigüedad, con registros de dispositivos rudimentarios utilizados por los egipcios para mover bloques de piedra. Sin embargo, los rodamientos modernos comenzaron a desarrollarse en el siglo XVIII con la Revolución Industrial. Los avances en la ciencia de los materiales y las técnicas de fabricación han llevado a la creación de rodamientos más eficientes y duraderos.
            </p>
            
            <h3 class="font-bold text-slate-800 text-lg mb-3">Cronología</h3>
            <ul class="space-y-2 text-slate-600 text-sm">
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Antigüedad:</span> Los egipcios utilizaban troncos de madera para mover grandes bloques de piedra.</li>
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Siglo XV:</span> Leonardo da Vinci esbozó diseños de rodamientos de bolas.</li>
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Siglo XVIII:</span> Desarrollo de rodamientos más avanzados durante la Revolución Industrial.</li>
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Siglo XIX:</span> Primeras patentes y producción en masa de rodamientos de bolas y rodillos.</li>
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Siglo XX:</span> Avances en materiales y técnicas de fabricación, introducción de rodamientos de alta precisión.</li>
                <li class="flex gap-3"><span class="font-bold min-w-[100px] text-slate-800">Siglo XXI:</span> Incorporación de tecnologías inteligentes y materiales avanzados.</li>
            </ul>
        </div>
    </div>

    <!-- Tipos de Rodamientos -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-layer-group"></i></span>
            Tipos de Rodamientos
        </h2>
        <p class="text-slate-600 mb-6">Los rodamientos se dividen en grupos principales según su elemento rodante o mecanismo de funcionamiento:</p>
        
        <div class="grid md:grid-cols-2 gap-4 mb-8">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
                <div class="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mr-3"><i class="fa-solid fa-circle-dot"></i></div>
                <span class="font-semibold text-slate-700">Rodamientos de Bolas</span>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
                <div class="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mr-3"><i class="fa-solid fa-grip-lines-vertical"></i></div>
                <span class="font-semibold text-slate-700">Rodamientos de Rodillos</span>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
                <div class="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mr-3"><i class="fa-solid fa-lines-leaning"></i></div>
                <span class="font-semibold text-slate-700">Rodamientos de Agujas</span>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
                <div class="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mr-3"><i class="fa-solid fa-minimize"></i></div>
                <span class="font-semibold text-slate-700">Cojinetes (Deslizamiento)</span>
            </div>
        </div>

        <!-- Rodamientos de Bolas -->
        <h3 class="font-bold text-slate-800 text-xl mb-4 mt-8 flex items-center"><i class="fa-solid fa-circle-dot text-cyan-500 mr-2"></i> Rodamientos de Bolas</h3>
        <div class="space-y-4 mb-8">
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">1. Una Hilera de Bolas</h4>
                <p class="text-sm text-slate-600 mb-2">Los más comunes y versátiles. Soportan cargas radiales y axiales moderadas y son adecuados para altas velocidades.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> motores eléctricos, electrodomésticos, maquinaria ligera.</div>
            </div>
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">2. Contacto Angular</h4>
                <p class="text-sm text-slate-600 mb-2">Tienen un ángulo de contacto (15°-40°) que les permite manejar mayores cargas axiales en una dirección.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> husillos de máquinas herramientas, turbocompresores, bombas.</div>
            </div>
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">3. Doble Hilera de Bolas</h4>
                <p class="text-sm text-slate-600 mb-2">Dos hileras de bolas para aumentar la capacidad de carga radial. Soportan cargas axiales en ambas direcciones.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> maquinaria pesada, cajas de engranajes.</div>
            </div>
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">4. Axiales de Bolas</h4>
                <p class="text-sm text-slate-600 mb-2">Diseñados para soportar exclusivamente cargas axiales. No adecuados para altas velocidades.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> mesas giratorias, equipos de construcción.</div>
            </div>
        </div>

        <!-- Rodamientos de Rodillos -->
        <h3 class="font-bold text-slate-800 text-xl mb-4 mt-8 flex items-center"><i class="fa-solid fa-grip-lines-vertical text-cyan-500 mr-2"></i> Rodamientos de Rodillos</h3>
        <div class="space-y-4 mb-8">
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">1. Rodillos Cilíndricos</h4>
                <p class="text-sm text-slate-600 mb-2">Alta capacidad de carga radial. Baja capacidad axial.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> cajas de engranajes, maquinaria industrial pesada.</div>
            </div>
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">2. Rodillos Cónicos</h4>
                <p class="text-sm text-slate-600 mb-2">Soportan cargas radiales y axiales combinadas. Alta rigidez y precisión.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> vehículos automotrices, equipos de minería.</div>
            </div>
            <div class="bg-white p-5 rounded-xl border border-slate-200">
                <h4 class="font-bold text-slate-800 mb-2">3. Rodillos Esféricos</h4>
                <p class="text-sm text-slate-600 mb-2">Autoalineables, pueden corregir desalineaciones. Alta capacidad de carga radial y axial.</p>
                <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded"><strong>Aplicaciones:</strong> molinos, transportadores, maquinaria de construcción.</div>
            </div>
        </div>

        <!-- Rodamientos de Agujas -->
        <h3 class="font-bold text-slate-800 text-xl mb-4 mt-8 flex items-center"><i class="fa-solid fa-lines-leaning text-cyan-500 mr-2"></i> Rodamientos de Agujas</h3>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
            <p class="text-slate-600 mb-4">
                Tienen rodillos cilíndricos largos y delgados (relación longitud/diámetro > 2.5). Ideales para espacios radiales limitados con altas cargas.
            </p>
            <h4 class="font-bold text-slate-800 mb-2">Tipos Comunes:</h4>
            <ul class="list-disc pl-5 space-y-2 text-slate-600 text-sm mb-4">
                <li><strong>Sin anillos:</strong> Directamente sobre el eje (requiere eje endurecido). Ahorra espacio.</li>
                <li><strong>Con anillos:</strong> Mayor rigidez y precisión.</li>
                <li><strong>Combinados:</strong> Incorporan bolas/rodillos para soportar también cargas axiales.</li>
            </ul>
            <div class="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-100">
                <strong class="block mb-1 text-slate-700">Nota sobre Dilatación Térmica:</strong>
                Es crítica en rodamientos de agujas. Se requiere selección cuidadosa de materiales y holguras para evitar fallos por expansión diferencial.
            </div>
        </div>

        <!-- Cojinetes de Deslizamiento -->
        <h3 class="font-bold text-slate-800 text-xl mb-4 mt-8 flex items-center"><i class="fa-solid fa-minimize text-cyan-500 mr-2"></i> Cojinetes de Deslizamiento</h3>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
            <p class="text-slate-600 mb-4">
                Operan mediante deslizamiento entre superficies (fricción), a diferencia de la rodadura. Soportan cargas elevadas y choques mejor que los rodamientos de elementos rodantes, pero tienen mayor fricción.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="bg-white p-3 rounded border border-slate-200">
                    <strong class="block text-slate-800 text-sm">Bujes:</strong> Cilíndricos, de bronce o plástico.
                </div>
                <div class="bg-white p-3 rounded border border-slate-200">
                    <strong class="block text-slate-800 text-sm">Casquillos:</strong> Para mayor desalineación.
                </div>
                <div class="bg-white p-3 rounded border border-slate-200">
                    <strong class="block text-slate-800 text-sm">Embutición (Journal):</strong> Eje en rotación dentro de orificio.
                </div>
                <div class="bg-white p-3 rounded border border-slate-200">
                    <strong class="block text-slate-800 text-sm">Superficie Plana:</strong> Para movimiento lineal.
                </div>
            </div>
        </div>
    </div>

    <!-- Componentes y Materiales -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-gears"></i></span>
            Componentes y Materiales
        </h2>
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-800 mb-4">Estructura Básica</h3>
                <ul class="space-y-3 text-slate-600">
                    <li class="flex items-start"><i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-xs"></i> <span><strong>Anillos (Interior/Exterior):</strong> Pistas de rodadura endurecidas.</span></li>
                    <li class="flex items-start"><i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-xs"></i> <span><strong>Elementos Rodantes:</strong> Bolas o rodillos que distribuyen la carga.</span></li>
                    <li class="flex items-start"><i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-xs"></i> <span><strong>Jaula:</strong> Separa los elementos rodantes para evitar fricción entre ellos.</span></li>
                    <li class="flex items-start"><i class="fa-solid fa-check text-cyan-500 mt-1 mr-3 text-xs"></i> <span><strong>Sellos:</strong> Protegen contra contaminantes y retienen lubricante.</span></li>
                </ul>
            </div>
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-800 mb-4">Materiales Comunes</h3>
                <ul class="space-y-3 text-slate-600">
                    <li><strong>Acero al cromo:</strong> Estándar por dureza y resistencia.</li>
                    <li><strong>Acero inoxidable:</strong> Para ambientes corrosivos (alimentaria, médica).</li>
                    <li><strong>Cerámicos:</strong> Alta velocidad, baja fricción, pero frágiles y costosos.</li>
                </ul>
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
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 class="font-bold text-slate-800 mb-2"><i class="fa-solid fa-car text-cyan-500 mr-2"></i> Automotriz</h4>
                    <p class="text-sm text-slate-600">Ruedas, transmisiones, motores, suspensión.</p>
                </div>
                <div>
                    <h4 class="font-bold text-slate-800 mb-2"><i class="fa-solid fa-plane text-cyan-500 mr-2"></i> Aeroespacial</h4>
                    <p class="text-sm text-slate-600">Motores de aviones, trenes de aterrizaje (alta fiabilidad).</p>
                </div>
                <div>
                    <h4 class="font-bold text-slate-800 mb-2"><i class="fa-solid fa-industry text-cyan-500 mr-2"></i> Industrial</h4>
                    <p class="text-sm text-slate-600">Maquinaria pesada, minería, transportadores.</p>
                </div>
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