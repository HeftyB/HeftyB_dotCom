<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class MainController extends Controller
{
    public function index()
    {
        return view("landing");
    }

    public function blog()
    {
        $blogPosts = \App\Models\BlogPost::all();

        return view("blog_home",
            ["blogPosts" => $blogPosts]);
    }

    public function blogPost(Request $request, $id)
    {
        $blogPost = BlogPost::findOrFail($id);
        $elements = $blogPost->blogElements->sortBy("order");

        return view("blog_post",
            ["title" => $blogPost->title,
                "img" => $blogPost->img,
                "author" => $blogPost->user,
                "elements" => $elements]);
    }

    public function contact()
    {
        return view("contact");
    }

    public function login()
    {
        return view("login");
    }

    public function getImg(Request $request, $filename)
    {
        return Storage::get("heftyb/imgs/" . $filename);
    }
}
