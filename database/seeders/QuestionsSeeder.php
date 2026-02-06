<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            // Nivel Básico
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Propiedades mecánicas",
                'question' => "¿Qué propiedad mecánica indica cuánta energía puede absorber un material antes de fracturarse?",
                'option_a' => "Dureza",
                'option_b' => "Tenacidad",
                'option_c' => "Elasticidad",
                'option_d' => "Fragilidad",
                'correct_option' => "B",
                'explanation' => "La tenacidad mide la energía absorbida antes de la fractura, combinando resistencia y ductilidad."
            ],
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Tratamientos térmicos",
                'question' => "¿Qué tratamiento térmico aumenta principalmente la dureza del acero?",
                'option_a' => "Recocido",
                'option_b' => "Templado",
                'option_c' => "Normalizado",
                'option_d' => "Revenido suave",
                'correct_option' => "B",
                'explanation' => "El templado produce una estructura martensítica que incrementa la dureza."
            ],
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Modos de falla",
                'question' => "¿Qué tipo de falla se produce por cargas repetitivas en el tiempo?",
                'option_a' => "Fluencia",
                'option_b' => "Fatiga",
                'option_c' => "Impacto",
                'option_d' => "Deformación térmica",
                'correct_option' => "B",
                'explanation' => "La fatiga ocurre por esfuerzos cíclicos incluso por debajo del límite elástico."
            ],
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Ensayos mecánicos",
                'question' => "¿Qué ensayo determina la resistencia máxima a tracción de un material?",
                'option_a' => "Rockwell",
                'option_b' => "Tracción",
                'option_c' => "Izod",
                'option_d' => "Brinell",
                'correct_option' => "B",
                'explanation' => "El ensayo de tracción permite obtener el esfuerzo máximo antes de la rotura."
            ],
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Corrosión",
                'question' => "¿Qué tipo de corrosión ataca áreas muy localizadas del metal?",
                'option_a' => "Uniforme",
                'option_b' => "Galvánica",
                'option_c' => "Picadura",
                'option_d' => "Intergranular",
                'correct_option' => "C",
                'explanation' => "La corrosión por picadura genera pequeños agujeros profundos y es muy peligrosa."
            ],
            [
                'level' => 'basico',
                'area' => "Materiales",
                'subtopic' => "Temperatura",
                'question' => "¿Qué fenómeno ocurre cuando un metal trabaja por encima de su temperatura crítica durante largo tiempo?",
                'option_a' => "Fatiga",
                'option_b' => "Ablandamiento",
                'option_c' => "Fluencia",
                'option_d' => "Fragilización",
                'correct_option' => "C",
                'explanation' => "La fluencia es la deformación progresiva bajo carga constante y alta temperatura."
            ],
            [
                'level' => 'basico',
                'area' => "Tribología",
                'subtopic' => "Fricción",
                'question' => "¿Qué coeficiente se usa para analizar el inicio del movimiento?",
                'option_a' => "Cinético",
                'option_b' => "Dinámico",
                'option_c' => "Estático",
                'option_d' => "Rodadura",
                'correct_option' => "C",
                'explanation' => "El coeficiente de fricción estática determina si un cuerpo comienza a moverse."
            ],
            [
                'level' => 'basico',
                'area' => "Elementos de máquinas",
                'subtopic' => "Rodamientos",
                'question' => "¿Cuál es la función principal de un rodamiento?",
                'option_a' => "Aumentar fricción",
                'option_b' => "Reducir fricción",
                'option_c' => "Transmitir potencia",
                'option_d' => "Absorber impacto",
                'correct_option' => "B",
                'explanation' => "Los rodamientos reducen la fricción entre partes móviles."
            ],
            [
                'level' => 'basico',
                'area' => "Elementos de máquinas",
                'subtopic' => "Rodamientos",
                'question' => "¿Qué factor reduce más la vida útil de un rodamiento?",
                'option_a' => "Exceso de lubricación",
                'option_b' => "Contaminación",
                'option_c' => "Baja velocidad",
                'option_d' => "Alta precisión",
                'correct_option' => "B",
                'explanation' => "Partículas contaminantes generan desgaste acelerado."
            ],
            [
                'level' => 'basico',
                'area' => "Elementos de máquinas",
                'subtopic' => "Fajas",
                'question' => "¿Qué provoca el patinaje de una faja?",
                'option_a' => "Exceso de tensión",
                'option_b' => "Baja fricción",
                'option_c' => "Exceso de fricción",
                'option_d' => "Alta rigidez",
                'correct_option' => "B",
                'explanation' => "Un bajo coeficiente de fricción causa deslizamiento entre faja y polea."
            ],
            [
                'level' => 'basico',
                'area' => "Metrología",
                'subtopic' => "Ajustes",
                'question' => "¿Qué tipo de ajuste permite siempre el movimiento entre piezas?",
                'option_a' => "Ajuste con interferencia",
                'option_b' => "Ajuste de transición",
                'option_c' => "Ajuste con juego",
                'option_d' => "Ajuste forzado",
                'correct_option' => "C",
                'explanation' => "El ajuste con juego garantiza holgura entre eje y agujero."
            ],
            [
                'level' => 'basico',
                'area' => "Metrología",
                'subtopic' => "Tolerancias",
                'question' => "¿Para qué sirven las tolerancias dimensionales?",
                'option_a' => "Aumentar costos",
                'option_b' => "Controlar calidad",
                'option_c' => "Eliminar errores",
                'option_d' => "Evitar mediciones",
                'correct_option' => "B",
                'explanation' => "Permiten controlar variaciones aceptables en fabricación."
            ],
            [
                'level' => 'basico',
                'area' => "Hidráulica",
                'subtopic' => "Principios",
                'question' => "¿Qué principio establece que la presión se transmite igual en todas direcciones?",
                'option_a' => "Bernoulli",
                'option_b' => "Pascal",
                'option_c' => "Arquímedes",
                'option_d' => "Newton",
                'correct_option' => "B",
                'explanation' => "El principio de Pascal es base de los sistemas hidráulicos."
            ],
            [
                'level' => 'basico',
                'area' => "Hidráulica",
                'subtopic' => "Fluidos",
                'question' => "¿Qué propiedad del fluido influye directamente en las pérdidas por fricción?",
                'option_a' => "Densidad",
                'option_b' => "Viscosidad",
                'option_c' => "Color",
                'option_d' => "Presión atmosférica",
                'correct_option' => "B",
                'explanation' => "La viscosidad mide la resistencia interna al flujo."
            ],
            [
                'level' => 'basico',
                'area' => "Neumática",
                'subtopic' => "Aire comprimido",
                'question' => "¿Qué ventaja principal tiene la neumática frente a la hidráulica?",
                'option_a' => "Mayor fuerza",
                'option_b' => "Mayor precisión",
                'option_c' => "Mayor limpieza",
                'option_d' => "Menor ruido",
                'correct_option' => "C",
                'explanation' => "La neumática es más limpia y segura en ambientes sensibles."
            ],
            [
                'level' => 'basico',
                'area' => "Fluidos",
                'subtopic' => "Flujo",
                'question' => "¿Qué tipo de flujo se caracteriza por trayectorias ordenadas?",
                'option_a' => "Turbulento",
                'option_b' => "Caótico",
                'option_c' => "Laminar",
                'option_d' => "Compresible",
                'correct_option' => "C",
                'explanation' => "En flujo laminar las partículas siguen trayectorias paralelas."
            ],
            [
                'level' => 'basico',
                'area' => "Electricidad",
                'subtopic' => "Fundamentos",
                'question' => "¿Qué magnitud eléctrica se mide en amperios?",
                'option_a' => "Voltaje",
                'option_b' => "Potencia",
                'option_c' => "Corriente",
                'option_d' => "Resistencia",
                'correct_option' => "C",
                'explanation' => "El amperio es la unidad de corriente eléctrica."
            ],
            [
                'level' => 'basico',
                'area' => "Electricidad",
                'subtopic' => "Seguridad",
                'question' => "¿Qué dispositivo protege contra sobrecorriente?",
                'option_a' => "Transformador",
                'option_b' => "Interruptor termomagnético",
                'option_c' => "Relé de tiempo",
                'option_d' => "Sensor",
                'correct_option' => "B",
                'explanation' => "El interruptor termomagnético protege ante sobrecargas y cortocircuitos."
            ],
            [
                'level' => 'basico',
                'area' => "Electrónica",
                'subtopic' => "Componentes",
                'question' => "¿Cuál es la función principal de una resistencia?",
                'option_a' => "Almacenar energía",
                'option_b' => "Limitar corriente",
                'option_c' => "Amplificar señal",
                'option_d' => "Rectificar voltaje",
                'correct_option' => "B",
                'explanation' => "La resistencia controla el paso de corriente eléctrica."
            ],
            [
                'level' => 'basico',
                'area' => "Diseño mecánico",
                'subtopic' => "Seguridad",
                'question' => "¿Qué se busca principalmente con un factor de seguridad?",
                'option_a' => "Reducir peso",
                'option_b' => "Aumentar eficiencia",
                'option_c' => "Prevenir fallas",
                'option_d' => "Disminuir costos",
                'correct_option' => "C",
                'explanation' => "El factor de seguridad compensa incertidumbres en diseño y operación."
            ],

            // Nivel Intermedio
            [
                'level' => 'intermedio',
                'area' => "Materiales",
                'subtopic' => "Diagramas de fase",
                'question' => "¿Qué fase del acero tiene mayor dureza y fragilidad?",
                'option_a' => "Austenita",
                'option_b' => "Ferrita",
                'option_c' => "Martensita",
                'option_d' => "Cementita",
                'correct_option' => "C",
                'explanation' => "La martensita es la fase más dura pero también más frágil del acero."
            ],
            [
                'level' => 'intermedio',
                'area' => "Materiales",
                'subtopic' => "Ensayos no destructivos",
                'question' => "¿Qué método NDT usa ondas sonoras para detectar defectos internos?",
                'option_a' => "Líquidos penetrantes",
                'option_b' => "Partículas magnéticas",
                'option_c' => "Ultrasonido",
                'option_d' => "Radiografía",
                'correct_option' => "C",
                'explanation' => "El ultrasonido detecta discontinuidades internas mediante ondas acústicas."
            ],
            [
                'level' => 'intermedio',
                'area' => "Tribología",
                'subtopic' => "Lubricación",
                'question' => "¿Qué régimen de lubricación separa completamente las superficies?",
                'option_a' => "Límite",
                'option_b' => "Mixta",
                'option_c' => "Hidrodinámica",
                'option_d' => "Elastohidrodinámica",
                'correct_option' => "C",
                'explanation' => "La lubricación hidrodinámica crea una película completa que evita contacto."
            ],
            [
                'level' => 'intermedio',
                'area' => "Elementos de máquinas",
                'subtopic' => "Engranajes",
                'question' => "¿Qué tipo de engranaje transmite movimiento entre ejes perpendiculares?",
                'option_a' => "Helicoidal",
                'option_b' => "Cónico",
                'option_c' => "Cremallera",
                'option_d' => "Tornillo sinfín",
                'correct_option' => "B",
                'explanation' => "Los engranajes cónicos transmiten potencia entre ejes que se cruzan."
            ],
            [
                'level' => 'intermedio',
                'area' => "Elementos de máquinas",
                'subtopic' => "Tornillos",
                'question' => "¿Qué tipo de rosca se usa comúnmente en aplicaciones de potencia?",
                'option_a' => "Métrica",
                'option_b' => "Whitworth",
                'option_c' => "Cuadrada",
                'option_d' => "Acme",
                'correct_option' => "D",
                'explanation' => "La rosca Acme tiene mayor eficiencia y resistencia para transmisión de potencia."
            ],
            [
                'level' => 'intermedio',
                'area' => "Metrología",
                'subtopic' => "Instrumentos",
                'question' => "¿Qué instrumento mide con mayor precisión en el rango de micras?",
                'option_a' => "Pie de rey",
                'option_b' => "Micrómetro",
                'option_c' => "Calibre",
                'option_d' => "Regla",
                'correct_option' => "B",
                'explanation' => "El micrómetro tiene precisión de 0.01 mm o 10 micras."
            ],
            [
                'level' => 'intermedio',
                'area' => "Hidráulica",
                'subtopic' => "Componentes",
                'question' => "¿Qué componente regula la dirección del flujo en un circuito hidráulico?",
                'option_a' => "Bomba",
                'option_b' => "Válvula direccional",
                'option_c' => "Actuador",
                'option_d' => "Filtro",
                'correct_option' => "B",
                'explanation' => "Las válvulas direccionales controlan el sentido del flujo hidráulico."
            ],
            [
                'level' => 'intermedio',
                'area' => "Neumática",
                'subtopic' => "Circuitos",
                'question' => "¿Qué componente neumático convierte energía de presión en movimiento lineal?",
                'option_a' => "Compresor",
                'option_b' => "Cilindro",
                'option_c' => "Válvula",
                'option_d' => "Secador",
                'correct_option' => "B",
                'explanation' => "Los cilindros neumáticos generan movimiento lineal mediante presión de aire."
            ],
            [
                'level' => 'intermedio',
                'area' => "Electricidad",
                'subtopic' => "Motores",
                'question' => "¿Qué tipo de motor eléctrico tiene mayor par de arranque?",
                'option_a' => "Síncrono",
                'option_b' => "Asíncrono",
                'option_c' => "De corriente continua",
                'option_d' => "De jaula de ardilla",
                'correct_option' => "C",
                'explanation' => "Los motores DC ofrecen excelente control de par en el arranque."
            ],
            [
                'level' => 'intermedio',
                'area' => "Electrónica",
                'subtopic' => "Sensores",
                'question' => "¿Qué sensor mide temperatura sin contacto físico?",
                'option_a' => "Termopar",
                'option_b' => "RTD",
                'option_c' => "Pirómetro",
                'option_d' => "Termistor",
                'correct_option' => "C",
                'explanation' => "Los pirómetros miden temperatura mediante radiación infrarroja."
            ],

            // Nivel Avanzado
            [
                'level' => 'avanzado',
                'area' => "Materiales",
                'subtopic' => "Metalurgia avanzada",
                'question' => "¿Qué fenómeno explica la fragilización por hidrógeno en aceros?",
                'option_a' => "Difusión atómica",
                'option_b' => "Corrosión galvánica",
                'option_c' => "Deformación plástica",
                'option_d' => "Recristalización",
                'correct_option' => "A",
                'explanation' => "El hidrógeno atómico difunde en la red cristalina causando fragilidad."
            ],
            [
                'level' => 'avanzado',
                'area' => "Materiales",
                'subtopic' => "Fractura",
                'question' => "¿Qué teoría explica mejor la propagación de grietas en materiales frágiles?",
                'option_a' => "Von Mises",
                'option_b' => "Griffith",
                'option_c' => "Tresca",
                'option_d' => "Mohr-Coulomb",
                'correct_option' => "B",
                'explanation' => "La teoría de Griffith analiza el balance energético en propagación de grietas."
            ],
            [
                'level' => 'avanzado',
                'area' => "Tribología",
                'subtopic' => "Desgaste",
                'question' => "¿Qué tipo de desgaste ocurre por contacto repetido entre asperidades?",
                'option_a' => "Abrasivo",
                'option_b' => "Adhesivo",
                'option_c' => "Fatiga superficial",
                'option_d' => "Corrosivo",
                'correct_option' => "C",
                'explanation' => "La fatiga superficial genera microgrietas y desprendimiento de material."
            ],
            [
                'level' => 'avanzado',
                'area' => "Elementos de máquinas",
                'subtopic' => "Diseño avanzado",
                'question' => "¿Qué criterio se usa para diseño de ejes sometidos a cargas variables?",
                'option_a' => "Soderberg",
                'option_b' => "Goodman",
                'option_c' => "Gerber",
                'option_d' => "Todas las anteriores",
                'correct_option' => "D",
                'explanation' => "Todos estos criterios evalúan resistencia a fatiga en diseño de ejes."
            ],
            [
                'level' => 'avanzado',
                'area' => "Elementos de máquinas",
                'subtopic' => "Rodamientos",
                'question' => "¿Qué factor tiene mayor influencia en la vida útil L10 de un rodamiento?",
                'option_a' => "Temperatura",
                'option_b' => "Carga",
                'option_c' => "Velocidad",
                'option_d' => "Lubricación",
                'correct_option' => "B",
                'explanation' => "La carga es el factor predominante en el cálculo de vida útil L10."
            ],
            [
                'level' => 'avanzado',
                'area' => "Metrología",
                'subtopic' => "Incertidumbre",
                'question' => "¿Qué método se usa para calcular incertidumbre combinada en mediciones?",
                'option_a' => "Propagación de errores",
                'option_b' => "Regla del 50%",
                'option_c' => "Método de Monte Carlo",
                'option_d' => "A y C son correctas",
                'correct_option' => "D",
                'explanation' => "Ambos métodos son válidos para calcular incertidumbre combinada."
            ],
            [
                'level' => 'avanzado',
                'area' => "Hidráulica",
                'subtopic' => "Sistemas avanzados",
                'question' => "¿Qué tecnología permite control proporcional en válvulas hidráulicas?",
                'option_a' => "Servoválvulas",
                'option_b' => "Válvulas on/off",
                'option_c' => "Válvulas de cartucho",
                'option_d' => "Válvulas de alivio",
                'correct_option' => "A",
                'explanation' => "Las servoválvulas ofrecen control continuo y preciso del caudal."
            ],
            [
                'level' => 'avanzado',
                'area' => "Neumática",
                'subtopic' => "Automatización",
                'question' => "¿Qué estándar se usa comúnmente en redes de campo para neumática?",
                'option_a' => "Profibus",
                'option_b' => "Ethernet/IP",
                'option_c' => "DeviceNet",
                'option_d' => "AS-i",
                'correct_option' => "D",
                'explanation' => "AS-Interface es ampliamente usado en automatización neumática."
            ],
            [
                'level' => 'avanzado',
                'area' => "Electricidad",
                'subtopic' => "Control avanzado",
                'question' => "¿Qué tipo de controlador ofrece mejor respuesta para sistemas no lineales?",
                'option_a' => "PID",
                'option_b' => "Fuzzy Logic",
                'option_c' => "On/Off",
                'option_d' => "Proporcional",
                'correct_option' => "B",
                'explanation' => "La lógica difusa maneja mejor sistemas complejos y no lineales."
            ],
            [
                'level' => 'avanzado',
                'area' => "Electrónica",
                'subtopic' => "Sistemas embebidos",
                'question' => "¿Qué arquitectura es más eficiente para procesamiento en tiempo real?",
                'option_a' => "Von Neumann",
                'option_b' => "Harvard",
                'option_c' => "RISC",
                'option_d' => "CISC",
                'correct_option' => "B",
                'explanation' => "La arquitectura Harvard separa buses de datos e instrucciones mejorando rendimiento."
            ]
        ];

        foreach ($questions as $question) {
            Question::create($question);
        }
    }
}
