<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;

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

//Route::post("/blog/create", function (Request $request) {
//    return response()->json($request);
//});

Route::middleware('auth:api')->post("/blog/create", [AuthController::class, "createBlogPost"]);

Route::middleware('auth:api')->post("/upload", [AuthController::class, "uploadImg"]);

Route::middleware('auth:api')->post("/upload_url", [AuthController::class, "uploadURL"]);
