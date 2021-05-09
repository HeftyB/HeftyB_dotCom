<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->post("/blog/create", [AuthController::class, "saveBlogPost"]);

Route::middleware('auth:api')->post("/upload", [AuthController::class, "uploadImg"]);

Route::middleware('auth:api')->post("/upload_url", [AuthController::class, "uploadURL"]);

Route::middleware('auth:api')->delete("/delete", [AuthController::class, "deleteFile"]);

Route::middleware('auth:api')->put("/blog/update/{id}", [AuthController::class, "saveBlogPost"]);

Route::get("/send_message", [MainController::class, "sendMail"]);
