<x-layout>
    @push('scripts')
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    @endpush

    <!-- Hero Section -->
    <div class="mb-10 border-b border-slate-100 pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
            <i class="fa-solid fa-circle-notch"></i> Máquinas Simples
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-heading">Poleas: Fundamentos y Aplicaciones</h1>
        <p class="text-lg text-slate-600 leading-relaxed">
            Una polea es un dispositivo mecánico simple que consiste en una rueda, generalmente circular, que gira alrededor de un eje. La rueda tiene un canal periférico o ranura, conocido como garganta, por donde pasa una cuerda, correa, cadena o el elemento de transmisión.
        </p>
        <!-- Imagen con mejor UX: skeleton + fade-in + alt descriptivo -->
        <figure class="relative w-full h-auto rounded-2xl overflow-hidden bg-slate-200 mt-6" id="img-wrapper">
            <img
                src="{{ asset('asset/poleas.jpg') }}"
                alt="Conjunto de poleas metálicas en un sistema de grúa industrial"
                class="w-full h-auto object-contain transition-opacity duration-700 ease-in-out"
                loading="lazy"
            >
        </figure>
    </div>

    <!-- Componentes Principales -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-puzzle-piece"></i></span>
            Componentes Principales
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-800 text-lg mb-3 flex items-center"><i class="fa-solid fa-ring text-cyan-500 mr-2"></i> Rueda</h3>
                <p class="text-sm text-slate-600">Es el componente principal y puede ser fabricada de diversos materiales como metal, plástico o madera, dependiendo de la aplicación y las cargas involucradas.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-800 text-lg mb-3 flex items-center"><i class="fa-solid fa-crosshairs text-cyan-500 mr-2"></i> Eje o Buje</h3>
                <p class="text-sm text-slate-600">Es el punto central sobre el cual gira la rueda. Puede ser fijo o rotativo.</p>
            </div>
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 class="font-bold text-slate-800 text-lg mb-3 flex items-center"><i class="fa-solid fa-grip-lines text-cyan-500 mr-2"></i> Garganta</h3>
                <p class="text-sm text-slate-600">Es el canal o ranura en la periferia de la rueda donde se aloja la cuerda o correa.</p>
            </div>
        </div>
    </div>

    <!-- Tipos de Poleas -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-layer-group"></i></span>
            Tipos de Poleas
        </h2>
        
        <div class="space-y-4">
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start">
                <div class="mt-1 mr-4 text-cyan-600 text-xl"><i class="fa-solid fa-anchor"></i></div>
                <div>
                    <h3 class="font-bold text-slate-800 text-lg">Polea Fija</h3>
                    <p class="text-slate-600">Su eje está fijo y no se mueve. Cambia la dirección de la fuerza aplicada pero no ofrece ventaja mecánica.</p>
                </div>
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start">
                <div class="mt-1 mr-4 text-cyan-600 text-xl"><i class="fa-solid fa-arrows-up-down"></i></div>
                <div>
                    <h3 class="font-bold text-slate-800 text-lg">Polea Móvil</h3>
                    <p class="text-slate-600">Se mueve junto con la carga. Aunque cambia la dirección de la fuerza, también proporciona ventaja mecánica.</p>
                </div>
            </div>
            <div class="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start">
                <div class="mt-1 mr-4 text-cyan-600 text-xl"><i class="fa-solid fa-network-wired"></i></div>
                <div>
                    <h3 class="font-bold text-slate-800 text-lg">Polea Compuesta</h3>
                    <p class="text-slate-600">Combinación de poleas fijas y móviles para aumentar la ventaja mecánica (polipastos).</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Mecanismo y Ventaja Mecánica -->
    <div class="mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
            <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-gears"></i></span>
            Funcionamiento
        </h2>
        
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <h3 class="font-bold text-slate-800 text-xl mb-3">Mecanismo de Funcionamiento</h3>
            <p class="text-slate-600">
                Cuando se tira de la cuerda o correa en una dirección, la polea transfiere esta fuerza en una dirección diferente (generalmente vertical a horizontal o viceversa). En sistemas con múltiples poleas, la fuerza necesaria para mover una carga puede reducirse, permitiendo levantar cargas pesadas con menos esfuerzo.
            </p>
        </div>

        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 class="font-bold text-blue-800 text-xl mb-3 flex items-center"><i class="fa-solid fa-scale-balanced mr-2"></i> Ventaja Mecánica</h3>
            <p class="text-blue-700">
                La ventaja mecánica de un sistema de poleas se refiere a la relación entre la fuerza de salida (la que actúa sobre la carga) y la fuerza de entrada (la que se aplica).
            </p>
            <div class="mt-4 pl-4 border-l-4 border-blue-200">
                <p class="text-sm text-blue-800 italic">
                    "En sistemas de poleas simples, la ventaja mecánica puede ser igual a uno, mientras que, en sistemas compuestos, la ventaja mecánica es mayor que uno."
                </p>
            </div>
        </div>
    </div>

    <!-- Aplicaciones y Diseño -->
    <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-building"></i></span>
                Aplicaciones
            </h2>
            <div class="bg-white p-6 rounded-2xl border border-slate-200 h-full">
                <p class="text-slate-600 mb-4">Las poleas se utilizan en una variedad de aplicaciones, desde las más simples hasta las más complejas:</p>
                <ul class="space-y-3 text-slate-600">
                    <li class="flex items-center"><i class="fa-solid fa-check text-emerald-500 mr-3 text-xs"></i> <span>Poleas de ropa en viviendas</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-check text-emerald-500 mr-3 text-xs"></i> <span>Grúas de construcción</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-check text-emerald-500 mr-3 text-xs"></i> <span>Ascensores</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-check text-emerald-500 mr-3 text-xs"></i> <span>Sistemas de transmisión industrial</span></li>
                </ul>
            </div>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center font-heading">
                <span class="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-lg mr-3"><i class="fa-solid fa-pen-ruler"></i></span>
                Diseño
            </h2>
            <div class="bg-white p-6 rounded-2xl border border-slate-200 h-full">
                <p class="text-slate-600 mb-4">Factores esenciales a considerar al diseñar un sistema con poleas:</p>
                <ul class="space-y-3 text-slate-600">
                    <li class="flex items-center"><i class="fa-solid fa-circle-exclamation text-cyan-500 mr-3 text-xs"></i> <span>Carga máxima</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-circle-exclamation text-cyan-500 mr-3 text-xs"></i> <span>Velocidad de operación</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-circle-exclamation text-cyan-500 mr-3 text-xs"></i> <span>Tipo y material de la cuerda/correa</span></li>
                    <li class="flex items-center"><i class="fa-solid fa-circle-exclamation text-cyan-500 mr-3 text-xs"></i> <span>Condiciones ambientales</span></li>
                </ul>
                <p class="text-xs text-slate-400 mt-4 italic">Estos factores determinarán el material, el tamaño y el tipo de polea a utilizar.</p>
            </div>
        </div>
    </div>

    <!-- Conclusion -->
    <div class="mb-12 bg-blue-50 p-6 rounded-2xl border border-blue-100">
        <p class="text-slate-700 italic text-center">
            "Cada tipo de faja tiene características únicas que la hacen más adecuada para ciertas aplicaciones. Entender estos detalles no solo mejora la selección de componentes, sino que también ayuda en el diseño de sistemas más eficientes y efectivos."
        </p>
    </div>

    <!-- Back to Home Button -->
    <div class="mt-12 text-center">
        <a href="{{ route('home') }}" class="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold shadow-lg shadow-slate-900/20">
            <i class="fa-solid fa-arrow-left mr-2"></i> Volver al Inicio
        </a>
    </div>
</x-layout>
