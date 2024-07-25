<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Products;

Route::prefix('products')->group(function () {
    Route::get('get/{category}', [Products::class, 'getPaginated']);
});

Route::fallback(function (Request $request) {
    return response()->json([
        'code' => 404,
        'status' => false,
        'message' => 'Route not found',
        'url' => $request->url(),
        'method' => $request->method(),
    ], 404);
});