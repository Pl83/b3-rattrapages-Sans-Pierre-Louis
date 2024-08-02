<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index']);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/profile', [UserController::class, 'index']);
});

Route::post('/validate', [ProductController::class, 'buy']);
