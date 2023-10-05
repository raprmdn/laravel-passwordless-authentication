<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/login', [\App\Http\Controllers\SignInController::class, 'index'])->name('login');
    Route::post('/login', [\App\Http\Controllers\SignInController::class, 'store'])->name('login.store');
    Route::post('/register', \App\Http\Controllers\SignUpController::class)->name('register.store');
    Route::get('/login/magic-link/{email}', \App\Http\Controllers\AuthenticatedController::class)->name('passwordless.authentication');
});

Route::middleware('auth')->group(function () {
    Route::get('/', \App\Http\Controllers\IndexController::class)->name('index');
    Route::post('/sign-out', \App\Http\Controllers\SignOutController::class)->name('sign-out');
});
