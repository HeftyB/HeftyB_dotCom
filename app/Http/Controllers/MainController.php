<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class blogPost
{
    public $title;
    public $photo;
    public $author;
    public $published;

    public function __construct($title, $photo, $author, $published)
    {
        $this->title = $title;
        $this->photo = $photo;
        $this->author = $author;
        $this->published = $published;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @param mixed $photo
     */
    public function setPhoto($photo): void
    {
        $this->photo = $photo;
    }

    /**
     * @return mixed
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @param mixed $author
     */
    public function setAuthor($author): void
    {
        $this->author = $author;
    }

    /**
     * @return mixed
     */
    public function getPublished()
    {
        return $this->published;
    }

    /**
     * @param mixed $published
     */
    public function setPublished($published): void
    {
        $this->published = $published;
    }

}

class MainController extends Controller
{
    public function index() {
        return view("landing");
    }

    public function blog()
    {

        $b1 = new blogPost("Blog post 1", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b2 = new blogPost("Blog post 2", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b3 = new blogPost("Blog post 3", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b4 = new blogPost("Blog post 4", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b5 = new blogPost("Blog post 5", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b6 = new blogPost("Blog post 6", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b7 = new blogPost("Blog post 7", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b8 = new blogPost("Blog post 8", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b9 = new blogPost("Blog post 9", "this would be a photo", "Andrew Shields", "12/12/2012");
        $b10 = new blogPost("Blog post 10", "this would be a photo", "Andrew Shields", "12/12/2012");


        $blogPosts = array($b1, $b2, $b3, $b4, $b5, $b6, $b7, $b8, $b9, $b10);


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
