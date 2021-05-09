<?php

namespace App\Http\Controllers;

use App\Mail\ContactMe;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{
    public function index()
    {
        return view("landing");
    }

    public function blog()
    {
        $blogPosts = \App\Models\BlogPost::orderBy("id", "desc")->paginate(13);

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

    public function privacy()
    {
        return view("privacy");
    }

    public function tos()
    {
        return view("tos");
    }

    public function login()
    {
        return view("login");
    }

    public function getImg(Request $request, $filename)
    {
        return Storage::get("heftyb/imgs/" . $filename);
    }

    public function sendMail(Request $request)
    {
        $name = $request->input("name");
        $email = $request->input("email");
        $phone = $request->input("tel");
        $message = $request->input("mes");

        Mail::to("heftyb@heftyb.com")->send(new ContactMe($name, $email, $phone, $message));

        return redirect()->route("dashboard");
    }
}
