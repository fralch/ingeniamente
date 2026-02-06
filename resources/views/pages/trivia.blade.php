<x-layout>
    <x-slot:title>Trivia de Ingeniería - Ingeniamente.com</x-slot:title>

    <div class="max-w-4xl mx-auto fade-in">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm text-slate-500">
            <a href="{{ route('home') }}" class="hover:text-blue-600 transition-colors">Inicio</a>
            <span class="mx-2">/</span>
            <span class="text-slate-800 font-medium">Trivia</span>
        </nav>

        <div class="bg-white rounded-3xl shadow-xl overflow-hidden" id="intro-container">
            <!-- Hero Image Area -->
            <div class="h-48 md:h-64 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative flex items-center justify-center overflow-hidden">
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>

                <div class="relative z-10 text-center p-8">
                     <i class="fa-solid fa-trophy text-6xl md:text-7xl text-yellow-400 mb-4 drop-shadow-lg"></i>
                </div>
            </div>

            <div class="p-8 md:p-12">
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-xs font-bold tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Ingeniería General</span>
                    <span class="text-xs font-bold tracking-wider text-slate-500 uppercase">Trivia</span>
                </div>

                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                    ¿Cuánto dominas los fundamentos de la ingeniería?
                </h1>

                <p class="text-lg text-slate-600 font-light leading-relaxed mb-6">
                    Pon a prueba tus conocimientos técnicos con este desafío integral. Selecciona tu nivel de dificultad.
                </p>

                <!-- Nivel Selection -->
                <div class="mb-8">
                    <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Selecciona tu nivel</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <!-- Básico -->
                        <button onclick="selectLevel('basico')" id="btn-basico" class="level-btn group p-6 border-2 border-slate-200 rounded-2xl hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-left w-full">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-3 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <i class="fa-solid fa-seedling"></i>
                                </div>
                                <span class="font-bold text-slate-800">Básico</span>
                            </div>
                            <p class="text-sm text-slate-500">Conceptos fundamentales y definiciones básicas de ingeniería.</p>
                            <div class="mt-3 flex items-center text-xs text-green-600 font-medium">
                                <i class="fa-solid fa-star mr-1"></i> Principiante
                            </div>
                        </button>

                        <!-- Intermedio -->
                        <button onclick="selectLevel('intermedio')" id="btn-intermedio" class="level-btn group p-6 border-2 border-slate-200 rounded-2xl hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 text-left w-full">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                    <i class="fa-solid fa-cogs"></i>
                                </div>
                                <span class="font-bold text-slate-800">Intermedio</span>
                            </div>
                            <p class="text-sm text-slate-500">Aplicaciones prácticas y cálculos moderados.</p>
                            <div class="mt-3 flex items-center text-xs text-yellow-600 font-medium">
                                <i class="fa-solid fa-star mr-1"></i><i class="fa-solid fa-star mr-1"></i> Estudiante
                            </div>
                        </button>

                        <!-- Avanzado -->
                        <button onclick="selectLevel('avanzado')" id="btn-avanzado" class="level-btn group p-6 border-2 border-slate-200 rounded-2xl hover:border-red-400 hover:bg-red-50 transition-all duration-200 text-left w-full">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mr-3 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                    <i class="fa-solid fa-rocket"></i>
                                </div>
                                <span class="font-bold text-slate-800">Avanzado</span>
                            </div>
                            <p class="text-sm text-slate-500">Problemas complejos y análisis profundo.</p>
                            <div class="mt-3 flex items-center text-xs text-red-600 font-medium">
                                <i class="fa-solid fa-star mr-1"></i><i class="fa-solid fa-star mr-1"></i><i class="fa-solid fa-star mr-1"></i> Experto
                            </div>
                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-6 mb-6 text-sm text-slate-500 border-y border-slate-100 py-4">
                    <div class="flex items-center">
                        <i class="fa-solid fa-circle-question w-6 text-blue-500"></i>
                        10 Preguntas aleatorias
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-database w-6 text-purple-500"></i>
                        Banco de preguntas por nivel
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div id="selected-level-display" class="text-slate-500 text-sm">
                        <i class="fa-solid fa-hand-pointer mr-2"></i> Selecciona un nivel para comenzar
                    </div>

                    <button onclick="initGame()" id="start-btn" disabled class="w-full md:w-auto bg-slate-300 text-slate-500 text-xl font-bold py-4 px-16 rounded-full transition-all duration-300 cursor-not-allowed">
                        Comenzar
                    </button>
                </div>
            </div>
        </div>

        <!-- Game Container -->
        <div id="game-container" class="hidden bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100">
            <!-- Header: Title & Progress -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-slate-800 mb-6">Trivia: Ingeniería General</h2>
                
                <!-- Progress Bar -->
                <div class="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
                    <div id="progress-bar" class="bg-red-600 h-3 rounded-full transition-all duration-500 ease-out" style="width: 0%"></div>
                </div>
                
                <!-- Stats -->
                <div class="flex flex-col sm:flex-row justify-between sm:items-center text-sm font-medium text-slate-500 gap-2">
                    <div>Preguntas contestadas <span class="text-slate-900 font-bold ml-1 border-l-2 border-slate-300 pl-2"><span id="current-question-num">1</span>/<span id="total-questions">10</span></span></div>
                    <div class="flex gap-4">
                        <div class="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                            <i class="fa-solid fa-circle-check mr-2"></i>
                            <span id="correct-score" class="font-bold mr-1">0</span> Correcto
                        </div>
                        <div class="flex items-center text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                            <i class="fa-solid fa-circle-xmark mr-2"></i>
                            <span id="incorrect-score" class="font-bold mr-1">0</span> Incorrecto
                        </div>
                    </div>
                </div>
            </div>

            <hr class="border-slate-100 mb-8">

            <!-- Loading Spinner -->
            <div id="loading-spinner" class="hidden flex justify-center py-12">
                <i class="fa-solid fa-circle-notch fa-spin text-4xl text-blue-500"></i>
            </div>

            <!-- Question Area -->
            <div id="question-area">
                <div class="mb-8">
                    <span id="area-badge" class="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide border border-blue-100">Área - Subtema</span>
                    <h3 id="question-text" class="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                        Cargando pregunta...
                    </h3>
                </div>

                <!-- Options Grid -->
                <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <!-- Options will be injected here via JS -->
                </div>

                <!-- Feedback Area -->
                <div id="feedback-container" class="hidden mb-8 animate-fade-in">
                    <div id="feedback-content">
                        <!-- Feedback content -->
                    </div>
                </div>

                <!-- Action Button -->
                <div class="flex justify-center pt-4">
                    <button id="check-button" class="bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold py-3.5 px-16 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5" onclick="checkAnswer()">
                        Comprobar
                    </button>
                    <button id="next-button" class="hidden bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3.5 px-16 rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-0.5" onclick="nextQuestion()">
                        Siguiente Pregunta <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
            
            <!-- Game Over Area -->
            <div id="game-over-area" class="hidden text-center py-8">
                <div class="mb-6">
                    <i id="game-over-icon" class="fa-solid fa-trophy text-6xl text-yellow-400 mb-4"></i>
                    <h2 class="text-3xl font-bold text-slate-800 mb-2">¡Juego Terminado!</h2>
                    <p class="text-slate-600" id="game-over-text">Has completado la trivia.</p>
                </div>
                
                <div class="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
                    <div class="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                        <span class="text-slate-600">Puntaje Final</span>
                        <span class="text-2xl font-bold text-blue-600" id="final-score">0/10</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-slate-600">Precisión</span>
                        <span class="text-xl font-bold text-slate-800" id="final-accuracy">0%</span>
                    </div>
                </div>
                
                <button onclick="location.reload()" class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
                    <i class="fa-solid fa-rotate-right mr-2"></i> Jugar de Nuevo
                </button>
            </div>
        </div>
    </div>

    @push('scripts')
    <script>
        let selectedLevel = null;
        let questions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let incorrect = 0;
        let selectedOption = null;
        let hasAnswered = false;

        function selectLevel(level) {
            selectedLevel = level;
            
            // Update UI
            document.querySelectorAll('.level-btn').forEach(btn => {
                btn.classList.remove('ring-4', 'ring-blue-200', 'bg-blue-50', 'border-blue-500');
                btn.classList.add('border-slate-200');
            });
            
            const btn = document.getElementById('btn-' + level);
            btn.classList.remove('border-slate-200');
            btn.classList.add('ring-4', 'ring-blue-200', 'bg-blue-50', 'border-blue-500');
            
            // Enable start button
            const startBtn = document.getElementById('start-btn');
            startBtn.disabled = false;
            startBtn.classList.remove('bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
            startBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'shadow-lg', 'shadow-blue-500/30');
            
            // Update text
            const display = document.getElementById('selected-level-display');
            display.innerHTML = `<span class="text-blue-600 font-bold capitalize"><i class="fa-solid fa-check-circle mr-2"></i>Nivel ${level} seleccionado</span>`;
        }

        async function initGame() {
            if (!selectedLevel) return;

            // Hide intro, show game container
            document.getElementById('intro-container').classList.add('hidden');
            document.getElementById('game-container').classList.remove('hidden');
            document.getElementById('loading-spinner').classList.remove('hidden');
            document.getElementById('question-area').classList.add('hidden');

            try {
                // Fetch questions from API
                const response = await fetch(`{{ route('trivia.questions', ':level') }}`.replace(':level', selectedLevel));
                if (!response.ok) throw new Error('Error al cargar preguntas');
                
                questions = await response.json();
                
                if (questions.length === 0) {
                    alert('No hay preguntas disponibles para este nivel.');
                    location.reload();
                    return;
                }

                document.getElementById('total-questions').textContent = questions.length;
                document.getElementById('loading-spinner').classList.add('hidden');
                document.getElementById('question-area').classList.remove('hidden');
                
                loadQuestion();

            } catch (error) {
                console.error(error);
                alert('Hubo un error al iniciar el juego. Por favor intenta de nuevo.');
                location.reload();
            }
        }

        function loadQuestion() {
            const question = questions[currentQuestionIndex];
            hasAnswered = false;
            selectedOption = null;

            // Reset UI
            document.getElementById('check-button').classList.remove('hidden');
            document.getElementById('next-button').classList.add('hidden');
            document.getElementById('feedback-container').classList.add('hidden');
            document.getElementById('check-button').disabled = true;
            document.getElementById('check-button').classList.add('opacity-50', 'cursor-not-allowed');
            
            // Update stats
            document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
            const progress = ((currentQuestionIndex) / questions.length) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;

            // Set content
            document.getElementById('area-badge').textContent = `${question.area} • ${question.subtopic || 'General'}`;
            document.getElementById('question-text').textContent = question.question;

            // Render options
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            // Assuming options are stored as JSON in the database
            const options = typeof question.options === 'string' ? JSON.parse(question.options) : question.options;
            
            // If options is an object {A: "...", B: "..."}, convert to array for consistent rendering
            const optionsEntries = Object.entries(options);
            
            optionsEntries.forEach(([key, value]) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn w-full p-4 rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left relative group';
                btn.onclick = () => selectOption(key, btn);
                btn.innerHTML = `
                    <div class="flex items-start">
                        <span class="w-8 h-8 flex-shrink-0 rounded-lg bg-slate-100 text-slate-500 font-bold flex items-center justify-center mr-3 group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors">${key}</span>
                        <span class="font-medium text-slate-700 group-hover:text-slate-900">${value}</span>
                    </div>
                `;
                optionsContainer.appendChild(btn);
            });
        }

        function selectOption(key, btnElement) {
            if (hasAnswered) return;

            selectedOption = key;
            
            // Reset all options
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50', 'border-blue-500');
                btn.classList.add('border-slate-200');
            });
            
            // Highlight selected
            btnElement.classList.remove('border-slate-200');
            btnElement.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50', 'border-blue-500');
            
            // Enable check button
            const checkBtn = document.getElementById('check-button');
            checkBtn.disabled = false;
            checkBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        function checkAnswer() {
            if (!selectedOption || hasAnswered) return;
            
            hasAnswered = true;
            const question = questions[currentQuestionIndex];
            const isCorrect = selectedOption === question.correct_answer;
            
            // Update stats
            if (isCorrect) {
                score++;
                document.getElementById('correct-score').textContent = score;
            } else {
                incorrect++;
                document.getElementById('incorrect-score').textContent = incorrect;
            }

            // Show feedback
            const feedbackContainer = document.getElementById('feedback-container');
            const feedbackContent = document.getElementById('feedback-content');
            
            feedbackContainer.classList.remove('hidden');
            
            if (isCorrect) {
                feedbackContent.innerHTML = `
                    <div class="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-4">
                        <div class="flex-shrink-0">
                            <i class="fa-solid fa-circle-check text-2xl text-green-500"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-green-800 mb-1">¡Correcto!</h4>
                            <p class="text-green-700 text-sm">${question.explanation || '¡Muy bien contestado!'}</p>
                        </div>
                    </div>
                `;
            } else {
                feedbackContent.innerHTML = `
                    <div class="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-4">
                        <div class="flex-shrink-0">
                            <i class="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-red-800 mb-1">Incorrecto</h4>
                            <p class="text-red-700 text-sm">La respuesta correcta era la <strong>${question.correct_answer}</strong>.</p>
                            <p class="text-red-600 text-sm mt-2">${question.explanation || ''}</p>
                        </div>
                    </div>
                `;
            }

            // Highlight correct/incorrect options
            document.querySelectorAll('.option-btn').forEach(btn => {
                // Extract key from button text (a bit hacky but works with our structure)
                // Actually we can find the button by index or by checking its content
                // Better: iterate and check if it corresponds to the key
                // But we didn't store the key on the element. Let's rely on the order A, B, C, D
                // Or better, let's look at the span with the key
                const keySpan = btn.querySelector('span:first-child');
                const key = keySpan.textContent.trim();
                
                if (key === question.correct_answer) {
                    btn.classList.remove('border-slate-200', 'hover:border-blue-400');
                    btn.classList.add('border-green-500', 'bg-green-50');
                    keySpan.classList.add('bg-green-200', 'text-green-800');
                } else if (key === selectedOption && !isCorrect) {
                    btn.classList.remove('border-slate-200', 'hover:border-blue-400', 'ring-2', 'ring-blue-500', 'bg-blue-50');
                    btn.classList.add('border-red-500', 'bg-red-50');
                    keySpan.classList.add('bg-red-200', 'text-red-800');
                }
                
                btn.disabled = true;
                btn.classList.remove('hover:bg-blue-50', 'cursor-pointer');
                btn.classList.add('cursor-default');
            });

            // Toggle buttons
            document.getElementById('check-button').classList.add('hidden');
            document.getElementById('next-button').classList.remove('hidden');
        }

        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showGameOver();
            }
        }

        function showGameOver() {
            document.getElementById('question-area').classList.add('hidden');
            document.getElementById('game-over-area').classList.remove('hidden');
            
            document.getElementById('final-score').textContent = `${score}/${questions.length}`;
            const accuracy = Math.round((score / questions.length) * 100);
            document.getElementById('final-accuracy').textContent = `${accuracy}%`;
            
            const progressBar = document.getElementById('progress-bar');
            progressBar.style.width = '100%';
            progressBar.classList.remove('bg-red-600');
            progressBar.classList.add('bg-green-500');
            
            const icon = document.getElementById('game-over-icon');
            const text = document.getElementById('game-over-text');
            
            if (accuracy >= 80) {
                icon.className = "fa-solid fa-trophy text-6xl text-yellow-400 mb-4 animate-bounce";
                text.textContent = "¡Excelente trabajo! Eres un verdadero ingeniero.";
            } else if (accuracy >= 60) {
                icon.className = "fa-solid fa-medal text-6xl text-slate-400 mb-4";
                text.textContent = "¡Buen trabajo! Tienes buenos conocimientos.";
            } else {
                icon.className = "fa-solid fa-book-open text-6xl text-blue-400 mb-4";
                text.textContent = "Sigue estudiando para mejorar tus resultados.";
            }
        }
    </script>
    @endpush
</x-layout>
