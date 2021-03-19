<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class AuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback(Request $request)
    {
//        $state = $request->get("state");
//        $request->session()->put("state", $state);



        $user = Socialite::driver('google')->user();

        $u = User::firstOrCreate(
            [ "google_id" => $user->getId() ],
            [
                "name" => $user->getName(),
                "email" => $user->getEmail(),
                "avatar" => $user->getAvatar()
            ]);

//        $userAuth::login($u));
        Auth::login($u);
//
//        session()->regenerate();

        return redirect()->action([MainController::class, "blog"]);


        // $user->token
//
//        $flight = Flight::firstOrCreate([
//            'name' => 'London to Paris'
//        ]);
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
}
