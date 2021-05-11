@extends("layouts.layout")


@section("content")
    <div class="text-6xl text-center bg-black text-white my-4 p-6 rounded-2xl">
        <x-hefty-blog-logo/>
    </div>

    <div class="text-4xl bg-white my-6 px-4">
        Featured Blog Posts:
        <hr class="my-2">
    </div>

    <div class="container grid grid-cols-6 auto-rows-auto grid-flow-row gap-8 gridContainer bg-gray-50 relative p-4">
        @foreach($blogPosts as $blogPost)
            <x-blog_tile :blogPost="$blogPost" :num="$loop->iteration"/>
        @endforeach
    </div>
    <hr class="m-4">
    {{ $blogPosts->links() }}
    <hr class="m-4">
@endsection
