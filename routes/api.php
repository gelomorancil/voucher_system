<?php 
use App\Http\Controllers\VoucherChildController;
use Illuminate\Support\Facades\Route;

Route::post('/buy', [VoucherChildController::class, 'mobileUpdateBuy']);
