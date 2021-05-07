<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function howTo()
    {
        return view("how_to");
    }

    public function citrics()
    {
        return view("citrics");
    }
}
