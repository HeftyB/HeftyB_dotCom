<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

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

Route::get("/", [MainController::class, "index"]);

Route::get("/contact", [MainController::class, "contact"]);
Route::get("/privacy", [MainController::class, "privacy"]);
Route::get("/tos", [MainController::class, "tos"]);
Route::get("/login", [MainController::class, "login"]);
Route::get('/logout', [AuthController::class, "logout"])->name("login");

Route::get('/auth/redirect', [AuthController::class, "redirect"]);
Route::get('/auth/google/callback', [AuthController::class, "callback"]);

Route::get("/dashboard", [AuthController::class, "dashboard"])->middleware("auth")->name("dashboard");

Route::get("/blog", [MainController::class, "blog"]);
Route::get("/blog/create", [AuthController::class, "blogForm"])->middleware("auth");
Route::get("/blog/post/{id}", [MainController::class, "blogPost"]);
Route::get("/blog/heftyb/imgs/{filename}", [MainController::class, "getImg"]);
Route::get("/blog/edit/{id}", [AuthController::class, "editPost"])->middleware("auth");
Route::delete("/blog/delete/{id}", [AuthController::class, "deletePost"])->middleware("auth");

Route::post("/upload", [AuthController::class, "uploadImg"])->middleware("auth");


//Route::get("/how_to", [ProjectController::class, "howTo"]);
//Route::get("/citrics", [ProjectController::class, "citrics"]);
Route::view("/how_to/{path?}", "howTo");
Route::view("/citrics/{path?}", "citrics");
