import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

interface Option {
  [key: string]: string;
}

interface Question {
  id: number;
  level: string;
  area: string;
  subtopic: string | null;
  question: string;
  options: string | Option; // can be JSON string or object depending on API response
  correct_answer: string;
  explanation: string | null;
}

export default function Trivia() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [parsedOptions, setParsedOptions] = useState<Option>({});

  const selectLevel = (level: string) => {
    setSelectedLevel(level);
  };

  const startGame = async () => {
    if (!selectedLevel) return;

    setLoading(true);
    setGameStarted(true);

    try {
      const response = await fetch(`/api/trivia/questions/${selectedLevel}`);
      if (!response.ok) throw new Error('Error al cargar preguntas');
      
      const data = await response.json();
      
      if (data.length === 0) {
        alert('No hay preguntas disponibles para este nivel.');
        window.location.reload();
        return;
      }

      setQuestions(data);
      setCurrentQuestionIndex(0);
      setScore(0);
      setIncorrect(0);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('Hubo un error al iniciar el juego. Por favor intenta de nuevo.');
      window.location.reload();
    }
  };

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const currentQ = questions[currentQuestionIndex];
      let opts = currentQ.options;
      if (typeof opts === 'string') {
        try {
          opts = JSON.parse(opts);
        } catch (e) {
          console.error("Error parsing options", e);
          opts = {};
        }
      }
      setParsedOptions(opts as Option);
      setSelectedOption(null);
      setHasAnswered(false);
    }
  }, [questions, currentQuestionIndex]);

  const handleOptionSelect = (key: string) => {
    if (hasAnswered) return;
    setSelectedOption(key);
  };

  const checkAnswer = () => {
    if (!selectedOption || hasAnswered) return;

    setHasAnswered(true);
    const currentQ = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQ.correct_answer;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
      window.location.reload();
  };

  // Helper for rendering results
  const renderFeedback = () => {
      const currentQ = questions[currentQuestionIndex];
      const isCorrect = selectedOption === currentQ.correct_answer;

      if (isCorrect) {
          return (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-4 fade-in">
                  <div className="flex-shrink-0">
                      <i className="fa-solid fa-circle-check text-2xl text-green-500"></i>
                  </div>
                  <div>
                      <h4 className="font-bold text-green-800 mb-1">¡Correcto!</h4>
                      <p className="text-green-700 text-sm">{currentQ.explanation || '¡Muy bien contestado!'}</p>
                  </div>
              </div>
          );
      } else {
          return (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-4 fade-in">
                  <div className="flex-shrink-0">
                      <i className="fa-solid fa-circle-xmark text-2xl text-red-500"></i>
                  </div>
                  <div>
                      <h4 className="font-bold text-red-800 mb-1">Incorrecto</h4>
                      <p className="text-red-700 text-sm">La respuesta correcta era la <strong>{currentQ.correct_answer}</strong>.</p>
                      <p className="text-red-600 text-sm mt-2">{currentQ.explanation || ''}</p>
                  </div>
              </div>
          );
      }
  };

  const accuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <Layout>
      <Head title="Trivia de Ingeniería - Ingeniamente.com" />
      
      <div className="max-w-4xl mx-auto fade-in">
        <nav className="flex mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">Trivia</span>
        </nav>

        {!gameStarted ? (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden" id="intro-container">
                {/* Hero Image Area */}
                <div className="h-48 md:h-64 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 relative flex items-center justify-center overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>

                    <div className="relative z-10 text-center p-8">
                         <i className="fa-solid fa-trophy text-6xl md:text-7xl text-yellow-400 mb-4 drop-shadow-lg"></i>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-bold tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Ingeniería General</span>
                        <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Trivia</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                        ¿Cuánto dominas los fundamentos de la ingeniería?
                    </h1>

                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                        Pon a prueba tus conocimientos técnicos con este desafío integral. Selecciona tu nivel de dificultad.
                    </p>

                    {/* Nivel Selection */}
                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Selecciona tu nivel</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Básico */}
                            <button 
                                onClick={() => selectLevel('basico')} 
                                className={`group p-6 border-2 rounded-2xl hover:border-green-400 hover:bg-green-50 transition-all duration-200 text-left w-full ${selectedLevel === 'basico' ? 'ring-4 ring-blue-200 bg-blue-50 border-blue-500' : 'border-slate-200'}`}
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mr-3 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-seedling"></i>
                                    </div>
                                    <span className="font-bold text-slate-800">Básico</span>
                                </div>
                                <p className="text-sm text-slate-500">Conceptos fundamentales y definiciones básicas de ingeniería.</p>
                                <div className="mt-3 flex items-center text-xs text-green-600 font-medium">
                                    <i className="fa-solid fa-star mr-1"></i> Principiante
                                </div>
                            </button>

                            {/* Intermedio */}
                            <button 
                                onClick={() => selectLevel('intermedio')} 
                                className={`group p-6 border-2 rounded-2xl hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 text-left w-full ${selectedLevel === 'intermedio' ? 'ring-4 ring-blue-200 bg-blue-50 border-blue-500' : 'border-slate-200'}`}
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-cogs"></i>
                                    </div>
                                    <span className="font-bold text-slate-800">Intermedio</span>
                                </div>
                                <p className="text-sm text-slate-500">Aplicaciones prácticas y cálculos moderados.</p>
                                <div className="mt-3 flex items-center text-xs text-yellow-600 font-medium">
                                    <i className="fa-solid fa-star mr-1"></i><i className="fa-solid fa-star mr-1"></i> Estudiante
                                </div>
                            </button>

                            {/* Avanzado */}
                            <button 
                                onClick={() => selectLevel('avanzado')} 
                                className={`group p-6 border-2 rounded-2xl hover:border-red-400 hover:bg-red-50 transition-all duration-200 text-left w-full ${selectedLevel === 'avanzado' ? 'ring-4 ring-blue-200 bg-blue-50 border-blue-500' : 'border-slate-200'}`}
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mr-3 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-rocket"></i>
                                    </div>
                                    <span className="font-bold text-slate-800">Avanzado</span>
                                </div>
                                <p className="text-sm text-slate-500">Problemas complejos y análisis profundo.</p>
                                <div className="mt-3 flex items-center text-xs text-red-600 font-medium">
                                    <i className="fa-solid fa-star mr-1"></i><i className="fa-solid fa-star mr-1"></i><i className="fa-solid fa-star mr-1"></i> Experto
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6 text-sm text-slate-500 border-y border-slate-100 py-4">
                        <div className="flex items-center">
                            <i className="fa-solid fa-circle-question w-6 text-blue-500"></i>
                            10 Preguntas aleatorias
                        </div>
                        <div className="flex items-center">
                            <i className="fa-solid fa-database w-6 text-purple-500"></i>
                            Banco de preguntas por nivel
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="text-slate-500 text-sm">
                            {selectedLevel ? (
                                <span className="text-blue-600 font-bold capitalize"><i className="fa-solid fa-check-circle mr-2"></i>Nivel {selectedLevel} seleccionado</span>
                            ) : (
                                <span><i className="fa-solid fa-hand-pointer mr-2"></i> Selecciona un nivel para comenzar</span>
                            )}
                        </div>

                        <button 
                            onClick={startGame} 
                            disabled={!selectedLevel} 
                            className={`w-full md:w-auto text-xl font-bold py-4 px-16 rounded-full transition-all duration-300 ${!selectedLevel ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'}`}
                        >
                            Comenzar
                        </button>
                    </div>
                </div>
            </div>
        ) : !gameOver ? (
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100">
                {/* Game Interface */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <i className="fa-solid fa-circle-notch fa-spin text-4xl text-blue-500"></i>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Trivia: Ingeniería General</h2>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
                                <div 
                                    className="bg-red-600 h-3 rounded-full transition-all duration-500 ease-out" 
                                    style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                            
                            {/* Stats */}
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center text-sm font-medium text-slate-500 gap-2">
                                <div>Preguntas contestadas <span className="text-slate-900 font-bold ml-1 border-l-2 border-slate-300 pl-2">{currentQuestionIndex + 1}/{questions.length}</span></div>
                                <div className="flex gap-4">
                                    <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                                        <i className="fa-solid fa-circle-check mr-2"></i>
                                        <span className="font-bold mr-1">{score}</span> Correcto
                                    </div>
                                    <div className="flex items-center text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                                        <i className="fa-solid fa-circle-xmark mr-2"></i>
                                        <span className="font-bold mr-1">{incorrect}</span> Incorrecto
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100 mb-8" />

                        {/* Question */}
                        <div>
                            <div className="mb-8">
                                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide border border-blue-100">
                                    {questions[currentQuestionIndex].area} • {questions[currentQuestionIndex].subtopic || 'General'}
                                </span>
                                <h3 className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                                    {questions[currentQuestionIndex].question}
                                </h3>
                            </div>

                            {/* Options */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {Object.entries(parsedOptions).map(([key, value]) => {
                                    let btnClass = "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left relative group ";
                                    let keyClass = "w-8 h-8 flex-shrink-0 rounded-lg font-bold flex items-center justify-center mr-3 transition-colors ";
                                    
                                    if (hasAnswered) {
                                        if (key === questions[currentQuestionIndex].correct_answer) {
                                            btnClass += "border-green-500 bg-green-50 cursor-default";
                                            keyClass += "bg-green-200 text-green-800";
                                        } else if (key === selectedOption && key !== questions[currentQuestionIndex].correct_answer) {
                                            btnClass += "border-red-500 bg-red-50 cursor-default";
                                            keyClass += "bg-red-200 text-red-800";
                                        } else {
                                            btnClass += "border-slate-200 opacity-50 cursor-default";
                                            keyClass += "bg-slate-100 text-slate-500";
                                        }
                                    } else {
                                        if (selectedOption === key) {
                                            btnClass += "ring-2 ring-blue-500 bg-blue-50 border-blue-500";
                                            keyClass += "bg-slate-100 text-slate-500"; // Keep default unless purely custom style needed
                                        } else {
                                            btnClass += "border-slate-200 hover:border-blue-400 hover:bg-blue-50";
                                            keyClass += "bg-slate-100 text-slate-500 group-hover:bg-blue-200 group-hover:text-blue-700";
                                        }
                                    }

                                    return (
                                        <button 
                                            key={key} 
                                            onClick={() => handleOptionSelect(key)}
                                            className={btnClass}
                                            disabled={hasAnswered}
                                        >
                                            <div className="flex items-start">
                                                <span className={keyClass}>{key}</span>
                                                <span className={`font-medium ${hasAnswered ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>{value}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Feedback */}
                            {hasAnswered && renderFeedback()}

                            {/* Actions */}
                            <div className="flex justify-center pt-4">
                                {!hasAnswered ? (
                                    <button 
                                        onClick={checkAnswer}
                                        disabled={!selectedOption}
                                        className={`bg-slate-900 text-white text-lg font-bold py-3.5 px-16 rounded-xl transition-all duration-300 shadow-lg transform ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800 hover:-translate-y-0.5'}`}
                                    >
                                        Comprobar
                                    </button>
                                ) : (
                                    <button 
                                        onClick={nextQuestion}
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3.5 px-16 rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Siguiente Pregunta <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        ) : (
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100 text-center py-8">
                <div className="mb-6">
                    {accuracy >= 80 ? (
                        <i className="fa-solid fa-trophy text-6xl text-yellow-400 mb-4 animate-bounce"></i>
                    ) : accuracy >= 60 ? (
                        <i className="fa-solid fa-medal text-6xl text-slate-400 mb-4"></i>
                    ) : (
                        <i className="fa-solid fa-book-open text-6xl text-blue-400 mb-4"></i>
                    )}
                    
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">¡Juego Terminado!</h2>
                    <p className="text-slate-600">
                        {accuracy >= 80 ? "¡Excelente trabajo! Eres un verdadero ingeniero." : 
                         accuracy >= 60 ? "¡Buen trabajo! Tienes buenos conocimientos." : 
                         "Sigue estudiando para mejorar tus resultados."}
                    </p>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                        <span className="text-slate-600">Puntaje Final</span>
                        <span className="text-2xl font-bold text-blue-600">{score}/{questions.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600">Precisión</span>
                        <span className="text-xl font-bold text-slate-800">{accuracy}%</span>
                    </div>
                </div>
                
                <button 
                    onClick={restartGame}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg"
                >
                    <i className="fa-solid fa-rotate-right mr-2"></i> Jugar de Nuevo
                </button>
            </div>
        )}
      </div>
    </Layout>
  );
}
