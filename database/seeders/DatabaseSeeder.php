<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Element;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Element::create([
            "name" => "paragraph",
            "tag" => "p"
        ]);

        Element::create([
            "name" => "image",
            "tag" => "img"
        ]);

        Element::create([
            "name" => "header",
            "tag" => "p class='header'"
        ]);

        Element::create([
            "name" => "title",
            "tag" => "p class='title'"
        ]);

        Element::create([
            "name" => "ordered list",
            "tag" => "ol"
        ]);

        Element::create([
            "name" => "list item",
            "tag" => "li"
        ]);

        Element::create([
            "name" => "code",
            "tag" => "div class='codeBlock'"
        ]);

        // \App\Models\User::factory(10)->create();
    }
}
