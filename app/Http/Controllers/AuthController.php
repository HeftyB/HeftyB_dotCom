<?php

namespace App\Http\Controllers;

use App\Models\Element;
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
use services\BlogService;

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
        $user = User::find(Auth::user()->getAuthIdentifier());
        $title = $request->input("title");
        $blocks = $request->input("data.blocks");

        $blogPost = new BlogPost([
            "title" => $title,
            "img" => "/test/testdir/test.jpeg"
        ]);

        $elementList = array();

        foreach ($blocks as $key=>$block)
        {
            if($block["type"] == "image")
            {
                continue;
            }

            $element = Element::firstWhere("name", $block["type"]);
            $ret = $this->blogElementValue($block["type"], $block["data"]);

            $e = new BlogElement([
                "value" => $ret["value"],
                "styles" => $ret["styles"],
                "order" => $key,
                "element_id" => $element->id
            ]);

            array_push($elementList, $e);
        }

        $user->blogPosts()->save($blogPost);
        $blogPost->refresh();
        $blogPost->blogElements()->saveMany($elementList);

        return redirect()->route("dashboard");
    }

    public function uploadImg(Request $request)
    {
        if ($request->hasFile("image") && $request->file("image")->isValid())
        {
//            $validated = $request->validate([
//                "img" => ["mimes:jpeg,png", "max:4096"]
//            ]);
            $path = $request->image->store("heftyb/imgs");

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
            abort(500, "File could not be uploaded!");
        }
    }

    public function uploadURL(Request $request)
    {
        $url = $request->input("url");
        $image = new File($url);
        $request->files->set("image", $image);

        return $this->uploadImg($request);
    }



    public function blogElementValue($type, $data)
    {
        switch ($type) {
            case "paragraph":
                $ret = [
                    "value" => $data["text"],
                    "styles" => "text-".$data["alignment"]
                ];
                break;
            case "image":
                $ret = [];
                break;
            case "header":
                $ret = [
                    "value" => $data["text"],
                    "styles" => "text-".$data["level"]
                ];
                break;
            case "code":
                $ret = [
                    "value" => $data["code"],
                    "styles" => "code-block"
                ];
                break;
            case "list":
                $ret = [
                    "value" => implode("|", $data["items"]),
                    "styles" => "ordered"
                ];
                break;
            default:
                $ret = null;
        }
        return $ret;
    }
}
