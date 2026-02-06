<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TriviaController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/trivia', function () {
    return Inertia::render('Trivia');
})->name('trivia');
Route::get('/api/trivia/questions/{level}', [TriviaController::class, 'getQuestions'])->name('trivia.questions');

Route::get('/calculadora-mtbf', function () {
    return Inertia::render('CalculadoraMtbf');
})->name('calculators.mtbf');

// Static Pages
Route::prefix('pages')->name('pages.')->group(function () {
    Route::get('/disenio-mecanico', function () {
        return Inertia::render('DisenioMecanico');
    })->name('disenio-mecanico');

    Route::get('/diy', function () {
        return Inertia::render('DIY');
    })->name('diy');

    Route::get('/ejes', function () {
        return Inertia::render('Ejes');
    })->name('ejes');

    Route::get('/elementos-maquinas', function () {
        return Inertia::render('ElementosMaquinas');
    })->name('elementos-maquinas');

    Route::get('/fajas', function () {
        return Inertia::render('Fajas');
    })->name('fajas');

    Route::get('/fmea', function () {
        return Inertia::render('Fmea');
    })->name('fmea');

    Route::get('/gestion-mantenimiento', function () {
        return Inertia::render('GestionMantenimiento');
    })->name('gestion-mantenimiento');

    Route::get('/neumatica', function () {
        return Inertia::render('Neumatica');
    })->name('neumatica');

    Route::get('/oleohidraulica', function () {
        return Inertia::render('Oleohidraulica');
    })->name('oleohidraulica');

    Route::get('/poleas', function () {
        return Inertia::render('Poleas');
    })->name('poleas');

    Route::get('/rodamiento', function () {
        return Inertia::render('Rodamiento');
    })->name('rodamiento');

    Route::get('/tribologia', function () {
        return Inertia::render('Tribologia');
    })->name('tribologia');

    // Mantenimiento Subpages
    Route::prefix('mantenimiento')->name('mantenimiento.')->group(function () {
        Route::get('/correctivo', function () {
            return Inertia::render('Mantenimiento/Correctivo');
        })->name('correctivo');

        Route::get('/modificativo', function () {
            return Inertia::render('Mantenimiento/Modificativo');
        })->name('modificativo');

        Route::get('/predictivo', function () {
            return Inertia::render('Mantenimiento/Predictivo');
        })->name('predictivo');

        Route::get('/preventivo', function () {
            return Inertia::render('Mantenimiento/Preventivo');
        })->name('preventivo');
    });
});
