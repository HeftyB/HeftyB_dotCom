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

{{--    <hr>--}}


{{--    <div id="modal-container" class="border-black border">--}}
{{--        <div class="modal-background">--}}
{{--            <div class="modal">--}}
{{--                <h2>I'm a Modal</h2>--}}
{{--                <p>Hear me roar.</p>--}}
{{--                <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">--}}
{{--                    <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>--}}
{{--                </svg>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--    <div class="content">--}}
{{--        <h1>Modal Animations</h1>--}}
{{--        <div class="buttons">--}}
{{--            <div id="one" class="button">Unfolding</div>--}}
{{--            <div id="two" class="button">Revealing</div>--}}
{{--            <div id="three" class="button">Uncovering</div>--}}
{{--            <div id="four" class="button">Blow Up</div><br>--}}
{{--            <div id="five" class="button">Meep Meep</div>--}}
{{--            <div id="six" class="button">Sketch</div>--}}
{{--            <div id="seven" class="button">Bond</div>--}}
{{--        </div>--}}
{{--    </div>--}}

{{--    <hr>--}}











{{--            <a--}}
{{--          class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"--}}
{{--          style="height: 24em;"--}}
{{--          href="./blog.html"--}}
{{--        >--}}
{{--          <div class="absolute left-0 bottom-0 w-full h-full z-10"--}}
{{--            style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>--}}
{{--          <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />--}}
{{--          <div class="p-4 absolute bottom-0 left-0 z-20">--}}
{{--            <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</span>--}}
{{--            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">--}}
{{--              Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.--}}
{{--            </h2>--}}
{{--            <div class="flex mt-3">--}}
{{--              <img src="https://randomuser.me/api/portraits/men/97.jpg"--}}
{{--                class="h-10 w-10 rounded-full mr-2 object-cover" />--}}
{{--              <div>--}}
{{--                <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>--}}
{{--                <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>--}}
{{--              </div>--}}
{{--            </div>--}}
{{--          </div>--}}
{{--        </a>--}}


    <div class="container grid grid-cols-6 grid-rows-5 gap-4 grid-flow-row gridContainer bg-white">
        @foreach($blogPosts as $blogPost)
            <x-blog_tile :blogPost="$blogPost" :num="$loop->iteration"/>
        @endforeach
    </div>

@endsection
