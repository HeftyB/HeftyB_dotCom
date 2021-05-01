<?php

namespace App\Http\Controllers;

use App\Models\Element;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
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
            ["google_id" => $user->getId()],
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
        $user = User::find(Auth::user()->getAuthIdentifier());
        $blogPosts = BlogPost::where("user_id", $user->id)->paginate(8);
        $files = UserFile::where("user_id", $user->id)->paginate(10);

        return view("dashboard", ["token" => $token, "blogPosts" => $blogPosts, "files" => $files]);
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

    public function saveBlogPost(Request $request, $id = 0)
    {
        $user = User::find(Auth::user()->getAuthIdentifier());

        if ($id == 0) {
            $title = $request->input("title");
            $img = $request->input("img");
            $blogPost = new BlogPost([
                "title" => $title,
                "img" => $img
            ]);
        } else {
            $blogPost = BlogPost::findOrFail($id);
            BlogElement::where("blog_post_id", $id)->delete();
        }

        $blocks = $request->input("data.blocks");
        $elementList = array();

        foreach ($blocks as $key => $block) {

            $ret = $this->blogElementValue($block["type"], $block["data"]);

            $e = new BlogElement([
                "value" => $ret["value"],
                "class" => $ret["class"],
                "order" => $key,
                "img_caption" => $ret["caption"],
                "img_flag" => $ret["img_flag"]
            ]);

            array_push($elementList, $e);
        }

        if ($id == 0) {
            $user->blogPosts()->save($blogPost);
        }

        $blogPost->refresh();
        $blogPost->blogElements()->saveMany($elementList);

        return response("Success!", 201);
    }

    public function uploadImg(Request $request)
    {
        if ($request->hasFile("image")
//            && $request->file("image")->isValid()
        ) {
//            $validated = $request->validate([
//                "img" => ["mimes:jpeg,png", "max:4096"]
//            ]);
            $path = $request->image->store("/heftyb/imgs");

            $file = new UserFile([
                "name" => "" . basename("/" . $path),
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
        } else {
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

    public function deleteFile(Request $request)
    {
        $userid = Auth::user()->id;
        $path = $request->get("path");
        $id = $request->get("id");
        $file = UserFile::find($id);

        if ($userid != $file->user_id || !($userid == 1 || $userid == 2)) {
            abort(401);
        }

        $file->delete();
        Storage::delete($path);

        return response("Success!", 200);
    }

    public function editPost(Request $request, $id)
    {
        $blogPost = BlogPost::find($id);
        $elements = $blogPost->blogElements->sortBy("order");

        $blocks = array();

        foreach ($elements as $element) {
            array_push($blocks, $this->blogElementsToBlocks($element));
        }

        $data = [
            "time" => 1619562451963,
            "blocks" => $blocks,
            "version" => "2.20.0"
        ];

        return view("components.edit_blog", ["blogPost" => $blogPost, "data" => $data]);
    }

    public function deletePost(Request $request, $id)
    {
        $user = Auth::user();
        $blogPost = BlogPost::findOrFail($id);

        if ($user->id != $blogPost->user_id || !($user->id == 1 || $user->id == 2)) {
            abort(401);
        }

        $blogPost->delete();

        return response("Success!", 200);
    }

    public function blogElementValue($type, $data)
    {
        switch ($type) {
            case "paragraph":
                $ret = [
                    "value" => $data["text"],
                    "class" => $data["alignment"],
                    "img_flag" => null,
                    "caption" => null
                ];
                break;
            case "header":
                $ret = [
                    "value" => $data["text"],
                    "class" => "text-" . $data["level"],
                    "img_flag" => null,
                    "caption" => null
                ];
                break;
            case "image":
                $ret = [
                    "value" => $data["file"]["url"],
                    "class" => $this->getImgAttr($data),
                    "img_flag" => true,
                    "caption" => $data["caption"]
                ];
                break;
            case "list":
                $ret = [
                    "value" => implode("|", $data["items"]),
                    "class" => "ordered",
                    "img_flag" => null,
                    "caption" => null
                ];
                break;
            default:
                $ret = null;
        }
        return $ret;
    }

    public function getImgAttr($data)
    {
        $ret = [];
        if (Arr::has($data, "small")) {
            array_push($ret, "img-small");
        } elseif (Arr::has($data, "medium")) {
            array_push($ret, "img-medium");
        } elseif (Arr::has($data, "large")) {
            array_push($ret, "img-large");
        } else {
            array_push($ret, "img-medium");
        }

        if ($data["stretched"]) {
            array_push($ret, "img-stretched");
        }
        if ($data["withBackground"]) {
            array_push($ret, "img-bg");
        }
        if ($data["withBorder"]) {
            array_push($ret, "img-border");
        }

        $str = "";
        $spc = " ";
        foreach ($ret as $key => $s) {
            if ($key == 0) {
                $str = $str . $s;
            } else {
                $str = $str . $spc . $s;
            }
        }

        return $str;
    }

    public function blogElementsToBlocks($el)
    {
        if ($el->img_flag) {
            $border = false;
            $stretched = false;
            $background = false;
            $lg = false;
            $md = false;
            $sm = false;

            $classes = Str::of($el->class)->split('/[\s]+/');

            foreach ($classes as $class) {
                if ($class == "img-border") {
                    $border = true;
                } elseif ($class == "img-stretched") {
                    $stretched = true;
                } elseif ($class == "img-bg") {
                    $background = true;
                } elseif ($class == "img-large") {
                    $lg = true;
                } elseif ($class == "img-medium") {
                    $md = true;
                } elseif ($class == "img-small") {
                    $sm = true;
                }
            }

            $block = [
                "type" => "image",
                "data" => [
                    "file" => [
                        "url" => $el->value
                    ],
                    "caption" => $el->img_caption,
                    "withBorder" => $border,
                    "stretched" => $stretched,
                    "withBackground" => $background,
                    "large" => $lg,
                    "medium" => $md,
                    "small" => $sm
                ]
            ];
        } else {
            $block = [
                "type" => "paragraph",
                "data" => [
                    "text" => $el->value,
                    "alignment" => $el->class
                ]];
        }

        return $block;
    }

}

