@extends("layouts.layout")


@section("content")

    <div>
        This will be a beautiful page to display all of my blog post about each one of my projects / things I am
        learning about so I can revist them in the future
        and get super dope brownie points.

        <div class="text-large text-center">
            This is a sweet ass header for the blog page!
        </div>
    </div>

    <div class="container grid grid-cols-6 grid-rows-5 gap-3 grid-flow-row gridContainer bg-white">
        @foreach($blogPosts as $blogPost)
            <x-blog_tile :blogPost="$blogPost" :num="$loop->iteration"/>
        @endforeach
    </div>

@endsection
