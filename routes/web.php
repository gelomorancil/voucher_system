<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VoucherParentsController;
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


    // VOUCHER PROFILE ROUTES
    // DISPLAY ALL VOUCHER PROFILE
    Route::get('/voucher/list', [VoucherProfileController::class, 'index'])->name('voucher.index');
    // CREATE VOUCHER
    Route::get('/voucher/create', [VoucherProfileController::class, 'create'])->name('voucher.create');
    Route::post('/voucher/store', [VoucherProfileController::class, 'store'])->name('voucher.store');
    // EDIT VOUCHER PROFILE
    // Route::get('/voucher/edit/{id}', [VoucherProfileController::class, 'edit'])->name('voucher.edit');
    Route::patch('/voucher/edit/{id}', [VoucherProfileController::class, 'update'])->name('voucher.update');
    // HARD DELETE KAY NA TAMAD NAKO MAG UBRA DANAY SA SOFT DELETE
    Route::delete('/voucher/delete/{id}', [VoucherProfileController::class, 'destroy'])->name('voucher.destroy');


    // VOUCHER PARENTS ROUTES
    // DISPLAY ALL VOUCHER PARENT
    Route::get('/parent/voucher/list', [VoucherParentsController::class, 'index'])->name('parent.index');
    // CREATE VOUCHER
    Route::get('/parent/voucher/create', [VoucherParentsController::class, 'create'])->name('parent.create');
    Route::post('/parent/voucher/store', [VoucherParentsController::class, 'store'])->name('parent.store');
    // EDIT VOUCHER PARENTS
    Route::get('/parent/voucher/edit/{id}', [VoucherParentsController::class, 'edit'])->name('parent.edit');
    Route::patch('/parent/voucher/edit/{id}', [VoucherParentsController::class, 'update'])->name('parent.update');
    // HARD DELETE KAY NA TAMAD NAKO MAG UBRA DANAY SA SOFT DELETE
    Route::delete('/parent/voucher/delete/{id}', [VoucherParentsController::class, 'destroy'])->name('parent.destroy');
});



require __DIR__.'/auth.php';
