<nav class="bg-gray-800 px-3 pt-2 pb-1 h-20">
    <div class="w-11/12 mx-auto flex justify-start sm:hidden">
        <div id="mNavIcon" class="border-2 border-white w-12 p-4">
            <hr class="border-2 border-white my-1">
            <hr class="border-2 border-white my-1">
            <hr class="border-2 border-white my-1">
        </div>

        <script>
            let mn = document.querySelector("#mNavIcon");

            mn.addEventListener("click", e => {
                mn.classList.add("animate-spin");
            })
        </script>

        <div id="mobileNav"
             class="absolute left-0 top-24 -mt-4 bg-gray-800 w-screen h-screen flex flex-col justify-evenly text-lg hidden">

            <div
                class="px-3 pl-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                <a href="/">Home</a></div>

            <hr>

            <div
                class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                <a
                    href="/contact">Contact</a></div>

            <hr>


            <div
                class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 relative text-4xl m-4 text-center"
                id="navjectButt">
                <a href="/#projects">Projects</a>

            </div>

            <hr>

            <div
                class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                <a
                    href="/blog">Blog</a></div>

            <hr>

            @if (\Illuminate\Support\Facades\Auth::check())

                <div
                    class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                    <a
                        href="/dashboard">Dashboard</a></div>

                <hr>

                <div
                    class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                    <a
                        href="/blog/create">Create a Blog Post</a></div>

                <hr>

                <div
                    class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                    <a
                        href="/logout">Logout</a></div>

            @else
                <div
                    class="px-3 py-2 rounded-md font-medium text-gray-300 hover:text-white hover:bg-gray-700 text-4xl m-4 text-center">
                    <a
                        href="/auth/redirect">Login with Google</a></div>
            @endif

        </div>

    </div>

    <div class="container mx-auto sm:flex flex-wrap items-end justify-between hidden">
        <div class="mid flex items-end justify-start w-3/12 text-lg">
            <div class="px-3 pl-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                <a href="/">Home</a></div>
            <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"><a
                    href="/contact">Contact</a></div>


            <div
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 relative"
                id="navProjectButt">
                Projects


                <div
                    class="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden"
                    role="menu"
                    id="navProjects">
                    <a
                        href="#projects"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        Project Cards
                    </a>
                    <a
                        href="/citrics"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        Citrics
                    </a>
                    <a
                        href="/how_to"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem">
                        How-To
                    </a>
                </div>
            </div>

            <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"><a
                    href="/blog">Blog</a></div>
        </div>

        <div
            class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
            @if (\Illuminate\Support\Facades\Auth::check())
                <div class="ml-3 relative">
                    <div>
                        <button
                            class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            id="user-menu"
                            aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <img
                                class="h-8 w-8 rounded-full"
                                src="{{ \Illuminate\Support\Facades\Auth::user()->avatar }}"
                                alt=""
                            />
                        </button>
                    </div>


                    <div
                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden"
                        role="menu"
                        id="userDropDown">
                        <a
                            href="/dashboard"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem">
                            Dashboard
                        </a>
                        <a
                            href="/blog/create"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem">
                            Create blog post
                        </a>
                        <a
                            href="/logout"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem">
                            Sign out
                        </a>
                    </div>
                </div>
            @else
                <x-google_button/>
            @endif
        </div>
    </div>

</nav>
