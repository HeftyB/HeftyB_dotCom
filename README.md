# www.HeftyB.com 

> ### A Laravel application locally hosted on a Raspberry Pi LAMP stack.

This repo is a continous work in progress — questions, comments, PRs, and issues welcome!

----------

# Getting started

## Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/8.x)
 

Clone the repository

    git clone git@github.com:HeftyB/HeftyB_dotCom.git

Switch to the repo folder

    cd HeftyB_dotCom

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

The dev server can now be accessed at

    http://localhost:8000

The api can now be accessed at

    http://localhost:8000/api

   
----------

## Dependencies

- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) - Utility First CSS framework
- [TailwindCSS/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp) - Tailwind plugin for visually truncating text after a fixed number of lines
- [Editor.js](https://github.com/codex-team/editor.js) - A block style editor
- [Editor.js/underline](https://github.com/editor-js/underline) - Editor.js tool for underlining text
- [Editor.js-paragraph-with-alignment](https://github.com/kaaaaaaaaaaai/paragraph-with-alignment) - Editor.js tool for block alignment

## Folders

- [Directory Structure Docs](https://laravel.com/docs/8.x/structure)
