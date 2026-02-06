<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class TriviaController extends Controller
{
    public function index()
    {
        return view('pages.trivia');
    }

    public function getQuestions($level)
    {
        $validLevels = ['basico', 'intermedio', 'avanzado'];
        
        if (!in_array($level, $validLevels)) {
            return response()->json(['error' => 'Nivel inválido'], 400);
        }

        // Obtener preguntas aleatorias para el nivel
        $questions = Question::where('level', $level)
            ->inRandomOrder()
            ->limit(10) // Limit to 10 questions per game for now
            ->get()
            ->map(function ($q) {
                return [
                    'id' => $q->id,
                    'area' => $q->area,
                    'subtopic' => $q->subtopic,
                    'question' => $q->question,
                    'options' => [
                        'A' => $q->option_a,
                        'B' => $q->option_b,
                        'C' => $q->option_c,
                        'D' => $q->option_d,
                    ],
                    'correct_answer' => $q->correct_option,
                    'explanation' => $q->explanation,
                ];
            });

        return response()->json($questions);
    }
}
