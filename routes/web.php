<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VoucherProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // CREATE VOUCHER
    Route::get('/voucher/list', [VoucherProfileController::class, 'index'])->name('voucher.index');
    Route::get('/voucher/create', [VoucherProfileController::class, 'create'])->name('voucher.create');
    Route::post('/voucher/store', [VoucherProfileController::class, 'store'])->name('voucher.store');
});



require __DIR__.'/auth.php';
