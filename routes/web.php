<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TriviaController;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/trivia', [TriviaController::class, 'index'])->name('trivia');
Route::get('/api/trivia/questions/{level}', [TriviaController::class, 'getQuestions'])->name('trivia.questions');

Route::get('/calculadora-mtbf', function () {
    return view('pages.calculadora-mtbf');
})->name('calculators.mtbf');

// Static Pages
Route::prefix('pages')->name('pages.')->group(function () {
    Route::get('/disenio-mecanico', function () {
        return view('pages.disenio-mecanico');
    })->name('disenio-mecanico');

    Route::get('/diy', function () {
        return view('pages.diy');
    })->name('diy');

    Route::get('/ejes', function () {
        return view('pages.ejes');
    })->name('ejes');

    Route::get('/elementos-maquinas', function () {
        return view('pages.elementos-maquinas');
    })->name('elementos-maquinas');

    Route::get('/fajas', function () {
        return view('pages.fajas');
    })->name('fajas');

    Route::get('/fmea', function () {
        return view('pages.fmea');
    })->name('fmea');

    Route::get('/gestion-mantenimiento', function () {
        return view('pages.gestion-mantenimiento');
    })->name('gestion-mantenimiento');

    Route::get('/neumatica', function () {
        return view('pages.neumatica');
    })->name('neumatica');

    Route::get('/oleohidraulica', function () {
        return view('pages.oleohidraulica');
    })->name('oleohidraulica');

    Route::get('/poleas', function () {
        return view('pages.poleas');
    })->name('poleas');

    Route::get('/rodamiento', function () {
        return view('pages.rodamiento');
    })->name('rodamiento');

    Route::get('/tribologia', function () {
        return view('pages.tribologia');
    })->name('tribologia');

    // Mantenimiento Subpages
    Route::prefix('mantenimiento')->name('mantenimiento.')->group(function () {
        Route::get('/correctivo', function () {
            return view('pages.mantenimiento.correctivo');
        })->name('correctivo');

        Route::get('/modificativo', function () {
            return view('pages.mantenimiento.modificativo');
        })->name('modificativo');

        Route::get('/predictivo', function () {
            return view('pages.mantenimiento.predictivo');
        })->name('predictivo');

        Route::get('/preventivo', function () {
            return view('pages.mantenimiento.preventivo');
        })->name('preventivo');
    });
});
