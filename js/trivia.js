const triviaData = [
    {
        id: 1,
        area: "Materiales",
        subtema: "Propiedades mecánicas",
        pregunta: "¿Qué propiedad mecánica indica cuánta energía puede absorber un material antes de fracturarse?",
        opciones: {
            A: "Dureza",
            B: "Tenacidad",
            C: "Elasticidad",
            D: "Fragilidad"
        },
        correcta: "B",
        explicacion: "La tenacidad mide la energía absorbida antes de la fractura, combinando resistencia y ductilidad."
    },
    {
        id: 2,
        area: "Materiales",
        subtema: "Tratamientos térmicos",
        pregunta: "¿Qué tratamiento térmico aumenta principalmente la dureza del acero?",
        opciones: {
            A: "Recocido",
            B: "Templado",
            C: "Normalizado",
            D: "Revenido suave"
        },
        correcta: "B",
        explicacion: "El templado produce una estructura martensítica que incrementa la dureza."
    },
    {
        id: 3,
        area: "Materiales",
        subtema: "Modos de falla",
        pregunta: "¿Qué tipo de falla se produce por cargas repetitivas en el tiempo?",
        opciones: {
            A: "Fluencia",
            B: "Fatiga",
            C: "Impacto",
            D: "Deformación térmica"
        },
        correcta: "B",
        explicacion: "La fatiga ocurre por esfuerzos cíclicos incluso por debajo del límite elástico."
    },
    {
        id: 4,
        area: "Materiales",
        subtema: "Ensayos mecánicos",
        pregunta: "¿Qué ensayo determina la resistencia máxima a tracción de un material?",
        opciones: {
            A: "Rockwell",
            B: "Tracción",
            C: "Izod",
            D: "Brinell"
        },
        correcta: "B",
        explicacion: "El ensayo de tracción permite obtener el esfuerzo máximo antes de la rotura."
    },
    {
        id: 5,
        area: "Materiales",
        subtema: "Corrosión",
        pregunta: "¿Qué tipo de corrosión ataca áreas muy localizadas del metal?",
        opciones: {
            A: "Uniforme",
            B: "Galvánica",
            C: "Picadura",
            D: "Intergranular"
        },
        correcta: "C",
        explicacion: "La corrosión por picadura genera pequeños agujeros profundos y es muy peligrosa."
    },
    {
        id: 6,
        area: "Materiales",
        subtema: "Temperatura",
        pregunta: "¿Qué fenómeno ocurre cuando un metal trabaja por encima de su temperatura crítica durante largo tiempo?",
        opciones: {
            A: "Fatiga",
            B: "Ablandamiento",
            C: "Fluencia",
            D: "Fragilización"
        },
        correcta: "C",
        explicacion: "La fluencia es la deformación progresiva bajo carga constante y alta temperatura."
    },
    {
        id: 7,
        area: "Tribología",
        subtema: "Fricción",
        pregunta: "¿Qué coeficiente se usa para analizar el inicio del movimiento?",
        opciones: {
            A: "Cinético",
            B: "Dinámico",
            C: "Estático",
            D: "Rodadura"
        },
        correcta: "C",
        explicacion: "El coeficiente de fricción estática determina si un cuerpo comienza a moverse."
    },
    {
        id: 8,
        area: "Elementos de máquinas",
        subtema: "Rodamientos",
        pregunta: "¿Cuál es la función principal de un rodamiento?",
        opciones: {
            A: "Aumentar fricción",
            B: "Reducir fricción",
            C: "Transmitir potencia",
            D: "Absorber impacto"
        },
        correcta: "B",
        explicacion: "Los rodamientos reducen la fricción entre partes móviles."
    },
    {
        id: 9,
        area: "Elementos de máquinas",
        subtema: "Rodamientos",
        pregunta: "¿Qué factor reduce más la vida útil de un rodamiento?",
        opciones: {
            A: "Exceso de lubricación",
            B: "Contaminación",
            C: "Baja velocidad",
            D: "Alta precisión"
        },
        correcta: "B",
        explicacion: "Partículas contaminantes generan desgaste acelerado."
    },
    {
        id: 10,
        area: "Elementos de máquinas",
        subtema: "Fajas",
        pregunta: "¿Qué provoca el patinaje de una faja?",
        opciones: {
            A: "Exceso de tensión",
            B: "Baja fricción",
            C: "Exceso de fricción",
            D: "Alta rigidez"
        },
        correcta: "B",
        explicacion: "Un bajo coeficiente de fricción causa deslizamiento entre faja y polea."
    },
    {
        id: 11,
        area: "Metrología",
        subtema: "Ajustes",
        pregunta: "¿Qué tipo de ajuste permite siempre el movimiento entre piezas?",
        opciones: {
            A: "Ajuste con interferencia",
            B: "Ajuste de transición",
            C: "Ajuste con juego",
            D: "Ajuste forzado"
        },
        correcta: "C",
        explicacion: "El ajuste con juego garantiza holgura entre eje y agujero."
    },
    {
        id: 12,
        area: "Metrología",
        subtema: "Tolerancias",
        pregunta: "¿Para qué sirven las tolerancias dimensionales?",
        opciones: {
            A: "Aumentar costos",
            B: "Controlar calidad",
            C: "Eliminar errores",
            D: "Evitar mediciones"
        },
        correcta: "B",
        explicacion: "Permiten controlar variaciones aceptables en fabricación."
    },
    {
        id: 13,
        area: "Hidráulica",
        subtema: "Principios",
        pregunta: "¿Qué principio establece que la presión se transmite igual en todas direcciones?",
        opciones: {
            A: "Bernoulli",
            B: "Pascal",
            C: "Arquímedes",
            D: "Newton"
        },
        correcta: "B",
        explicacion: "El principio de Pascal es base de los sistemas hidráulicos."
    },
    {
        id: 14,
        area: "Hidráulica",
        subtema: "Fluidos",
        pregunta: "¿Qué propiedad del fluido influye directamente en las pérdidas por fricción?",
        opciones: {
            A: "Densidad",
            B: "Viscosidad",
            C: "Color",
            D: "Presión atmosférica"
        },
        correcta: "B",
        explicacion: "La viscosidad mide la resistencia interna al flujo."
    },
    {
        id: 15,
        area: "Neumática",
        subtema: "Aire comprimido",
        pregunta: "¿Qué ventaja principal tiene la neumática frente a la hidráulica?",
        opciones: {
            A: "Mayor fuerza",
            B: "Mayor precisión",
            C: "Mayor limpieza",
            D: "Menor ruido"
        },
        correcta: "C",
        explicacion: "La neumática es más limpia y segura en ambientes sensibles."
    },
    {
        id: 16,
        area: "Fluidos",
        subtema: "Flujo",
        pregunta: "¿Qué tipo de flujo se caracteriza por trayectorias ordenadas?",
        opciones: {
            A: "Turbulento",
            B: "Caótico",
            C: "Laminar",
            D: "Compresible"
        },
        correcta: "C",
        explicacion: "En flujo laminar las partículas siguen trayectorias paralelas."
    },
    {
        id: 17,
        area: "Electricidad",
        subtema: "Fundamentos",
        pregunta: "¿Qué magnitud eléctrica se mide en amperios?",
        opciones: {
            A: "Voltaje",
            B: "Potencia",
            C: "Corriente",
            D: "Resistencia"
        },
        correcta: "C",
        explicacion: "El amperio es la unidad de corriente eléctrica."
    },
    {
        id: 18,
        area: "Electricidad",
        subtema: "Seguridad",
        pregunta: "¿Qué dispositivo protege contra sobrecorriente?",
        opciones: {
            A: "Transformador",
            B: "Interruptor termomagnético",
            C: "Relé de tiempo",
            D: "Sensor"
        },
        correcta: "B",
        explicacion: "El interruptor termomagnético protege ante sobrecargas y cortocircuitos."
    },
    {
        id: 19,
        area: "Electrónica",
        subtema: "Componentes",
        pregunta: "¿Cuál es la función principal de una resistencia?",
        opciones: {
            A: "Almacenar energía",
            B: "Limitar corriente",
            C: "Amplificar señal",
            D: "Rectificar voltaje"
        },
        correcta: "B",
        explicacion: "La resistencia controla el paso de corriente eléctrica."
    },
    {
        id: 20,
        area: "Diseño mecánico",
        subtema: "Seguridad",
        pregunta: "¿Qué se busca principalmente con un factor de seguridad?",
        opciones: {
            A: "Reducir peso",
            B: "Aumentar eficiencia",
            C: "Prevenir fallas",
            D: "Disminuir costos"
        },
        correcta: "C",
        explicacion: "El factor de seguridad compensa incertidumbres en diseño y operación."
    }
];

class TriviaGame {
    constructor(data) {
        this.questions = data;
        this.currentIndex = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.hasAnswered = false;
        
        // UI Elements
        this.gameContainer = document.getElementById('game-container');
        this.introContainer = document.getElementById('intro-container');
        this.progressBar = document.getElementById('progress-bar');
        this.currentQuestionSpan = document.getElementById('current-question-num');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.correctScoreSpan = document.getElementById('correct-score');
        this.incorrectScoreSpan = document.getElementById('incorrect-score');
        
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.feedbackContainer = document.getElementById('feedback-container');
        this.checkButton = document.getElementById('check-button');
        this.areaBadge = document.getElementById('area-badge');
        
        // Bind events
        this.checkButton.addEventListener('click', () => this.handleCheck());
    }

    start() {
        this.introContainer.classList.add('hidden');
        this.gameContainer.classList.remove('hidden');
        this.totalQuestionsSpan.textContent = this.questions.length;
        this.loadQuestion();
    }

    loadQuestion() {
        const question = this.questions[this.currentIndex];
        this.hasAnswered = false;
        
        // Update Progress
        this.currentQuestionSpan.textContent = this.currentIndex + 1;
        const progress = ((this.currentIndex) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        
        // Update Content
        this.areaBadge.textContent = `${question.area} - ${question.subtema}`;
        this.questionText.textContent = question.pregunta;
        
        // Reset UI
        this.feedbackContainer.classList.add('hidden');
        this.checkButton.textContent = 'Comprobar';
        this.checkButton.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        this.checkButton.classList.add('bg-slate-900', 'hover:bg-slate-800');
        this.checkButton.disabled = true;
        this.checkButton.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Render Options
        this.optionsContainer.innerHTML = '';
        Object.entries(question.opciones).forEach(([key, value]) => {
            const button = document.createElement('button');
            button.className = `option-btn w-full p-4 md:p-6 text-left border-2 border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 flex items-center group`;
            button.dataset.key = key;
            button.innerHTML = `
                <span class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-slate-100 text-slate-500 font-bold flex items-center justify-center mr-4 group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors">${key}</span>
                <span class="text-slate-700 font-medium text-lg">${value}</span>
            `;
            button.addEventListener('click', (e) => this.selectOption(key));
            this.optionsContainer.appendChild(button);
        });
    }

    selectOption(key) {
        if (this.hasAnswered) return;
        
        // Remove active class from all
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('border-blue-600', 'bg-blue-50', 'ring-2', 'ring-blue-100');
            btn.querySelector('span:first-child').classList.remove('bg-blue-600', 'text-white');
            btn.querySelector('span:first-child').classList.add('bg-slate-100', 'text-slate-500');
        });

        // Add active class to selected
        const selectedBtn = document.querySelector(`.option-btn[data-key="${key}"]`);
        selectedBtn.classList.add('border-blue-600', 'bg-blue-50', 'ring-2', 'ring-blue-100');
        selectedBtn.querySelector('span:first-child').classList.remove('bg-slate-100', 'text-slate-500');
        selectedBtn.querySelector('span:first-child').classList.add('bg-blue-600', 'text-white');
        
        this.selectedAnswer = key;
        
        // Enable check button
        this.checkButton.disabled = false;
        this.checkButton.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    handleCheck() {
        if (!this.hasAnswered) {
            this.submitAnswer();
        } else {
            this.nextQuestion();
        }
    }

    submitAnswer() {
        this.hasAnswered = true;
        const question = this.questions[this.currentIndex];
        const isCorrect = this.selectedAnswer === question.correcta;
        
        // Update stats
        if (isCorrect) {
            this.correctCount++;
            this.correctScoreSpan.textContent = this.correctCount;
        } else {
            this.incorrectCount++;
            this.incorrectScoreSpan.textContent = this.incorrectCount;
        }

        // Highlight answers
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => {
            const key = btn.dataset.key;
            btn.disabled = true;
            btn.classList.remove('hover:border-blue-400', 'hover:bg-blue-50');
            
            if (key === question.correcta) {
                btn.classList.add('border-green-500', 'bg-green-50');
                btn.querySelector('span:first-child').className = 'w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500 text-white font-bold flex items-center justify-center mr-4';
                // Add check icon
                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-check text-green-500 ml-auto text-xl';
                btn.appendChild(icon);
            } else if (key === this.selectedAnswer && !isCorrect) {
                btn.classList.add('border-red-500', 'bg-red-50');
                btn.querySelector('span:first-child').className = 'w-8 h-8 md:w-10 md:h-10 rounded-lg bg-red-500 text-white font-bold flex items-center justify-center mr-4';
                // Add x icon
                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-xmark text-red-500 ml-auto text-xl';
                btn.appendChild(icon);
            }
        });

        // Show feedback
        this.feedbackContainer.classList.remove('hidden');
        const feedbackContent = document.getElementById('feedback-content');
        feedbackContent.className = `p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-100 text-green-800' : 'bg-red-50 border-red-100 text-red-800'}`;
        feedbackContent.innerHTML = `
            <div class="font-bold mb-1 flex items-center">
                <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-info'} mr-2"></i>
                ${isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta'}
            </div>
            <p class="text-sm opacity-90">${question.explicacion}</p>
        `;

        // Update button
        this.checkButton.textContent = this.currentIndex === this.questions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta';
        this.checkButton.classList.remove('bg-slate-900', 'hover:bg-slate-800');
        this.checkButton.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.gameContainer.innerHTML = `
            <div class="text-center py-12">
                <div class="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fa-solid fa-trophy text-4xl text-yellow-500"></i>
                </div>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">¡Juego Completado!</h2>
                <p class="text-slate-600 mb-8">Has completado la trivia de ingeniería.</p>
                
                <div class="flex justify-center gap-8 mb-10">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-green-500 mb-1">${this.correctCount}</div>
                        <div class="text-sm text-slate-500 font-medium uppercase tracking-wider">Correctas</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-red-500 mb-1">${this.incorrectCount}</div>
                        <div class="text-sm text-slate-500 font-medium uppercase tracking-wider">Incorrectas</div>
                    </div>
                </div>

                <div class="inline-block bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div class="text-sm text-slate-500 mb-2">Puntuación Final</div>
                    <div class="text-5xl font-extrabold text-blue-600">${Math.round((this.correctCount / this.questions.length) * 100)}%</div>
                </div>

                <div class="mt-10">
                    <button onclick="location.reload()" class="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                        Jugar de nuevo
                    </button>
                </div>
            </div>
        `;
    }
}

// Initialize game when button is clicked
function initGame() {
    window.game = new TriviaGame(triviaData);
    window.game.start();
}
