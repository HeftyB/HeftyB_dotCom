<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class MainController extends Controller
{
    public function index() {
        return view("landing");
    }

    public function blog()
    {

        $blogPosts = \App\Models\BlogPost::all();

        return view("blog_home", ["blogPosts" => $blogPosts]);
    }

    public function contact() {
        return view("contact");
    }

    public function login() {
        return view("login");
    }

    public function getImg(Request $request, $filename)
    {
        return Storage::get("heftyb/imgs/".$filename);
    }
}
