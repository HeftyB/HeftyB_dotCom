<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\MainController;
use \App\Http\Controllers\AuthController;

use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get("/", [MainController::class, "index"]);

Route::get("/blog_home", [MainController::class, "blog"]);
Route::get("/contact", [MainController::class, "contact"]);
Route::get("/login", [MainController::class, "login"]);



//Route::get('/auth/redirect', function () {
//    return Socialite::driver('google')->redirect();
//});
//
//Route::get('/auth/google/callback', function () {
//    $user = Socialite::driver('google')->user();
//    return response($user->getId(), 200);
//});

Route::get('/auth/redirect', [AuthController::class, "redirect"]);

Route::get('/auth/google/callback', [AuthController::class, "callback"]);

Route::get('/logout', [AuthController::class, "logout"]);

Route::get("/blog/create", [AuthController::class, "blogForm"])->middleware("auth");
