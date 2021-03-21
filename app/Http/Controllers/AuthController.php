<?php

namespace App\Http\Controllers;

use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Models\BlogPost;
use App\Models\BlogElement;
use App\Models\UserFile;

class AuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback(Request $request)
    {

        $user = Socialite::driver('google')->user();
        $u = User::firstOrCreate(
            [ "google_id" => $user->getId() ],
            [
                "name" => $user->getName(),
                "email" => $user->getEmail(),
                "avatar" => $user->getAvatar(),
                "api_token" => Str::random(60)
            ]);

        Auth::login($u);

        return redirect()->route("dashboard");
    }

    public function dashboard()
    {
        $token = Auth::user()->api_token;
        return view("dashboard", ["token" => $token]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function blogForm()
    {
        return view("components.blog_form");
    }

    public function createBlogPost(Request $request)
    {
        $userId = Auth::user()->getAuthIdentifier();
        $title = $request->input("title");
        $blocks = $request->input("data.blocks");


        $blogPost = BlogPost::create([
            "title" => $title,
            "user_id" => $userId,
            "img" => "/test/testdir/test.jpeg"
        ]);

        $elements = array();

//        foreach ($blocks as $block)
//        {
//            $e = new BlogElement([
//
//            ]);
//            BlogElement::create([
//
//        ]);
//        }

        return $blocks;
    }

    public function uploadImg(Request $request)
    {
        if ($request->hasFile("image") && $request->file("image")->isValid())
        {
            $validated = $request->validate([
                "img" => ["mimes:jpeg,png", "max:4096"]
            ]);
//            dd($validated);
            $path = $request->image->store("heftyb/imgs");

//            $file = UserFile::create([
//                "name" => "test name",
//                "path" => $path,
//                "user_id" => Auth::user()->getAuthIdentifier()
//            ]);

            $file = new UserFile([
                "name" => "test Name",
                "path" => $path
            ]);
            $user = User::find(Auth::user()->getAuthIdentifier());

            $user->userFiles()->save($file);

            return [
                "success" => 1,
                "file" => [
                    "url" => $path
                ]
            ];
        }
        else {
            abort(500);
        }
    }

    public function uploadURL(Request $request)
    {
        $url = $request->input("url");

//        $content = file_get_contents($url);
        $image = new File($url);

//        Storage::put("/heftyb/imgs", $content);

        $request->files->set("image", $image);

        return $this->uploadImg($request);
    }
}
