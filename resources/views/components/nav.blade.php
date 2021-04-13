<nav class="bg-gray-800 px-3 pt-2 pb-1">
    <div class="container mx-auto flex flex-wrap items-end justify-between">
        <div class="mid flex items-end justify-start w-3/12 text-lg">
            <div class="px-3 pl-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                <a href="/">Home</a></div>
            <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"><a
                    href="/contact">Contact</a></div>
            <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"><a
                    href="/#projects">Projects</a></div>
            <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"><a
                    href="/blog">Blog</a></div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                            Settings / Create
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
