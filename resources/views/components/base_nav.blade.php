<nav id="baseNav">
    <div id="baseNavCon">
        <div id="baseNavLinks">
            <div class="baseNavButton">
                <a href="/">Home</a></div>
            <div class="baseNavButton"><a
                    href="/contact">Contact</a></div>
            <div class="baseNavButton"><a
                    href="/#projects">Projects</a></div>
            <div class="baseNavButton"><a
                    href="/blog">Blog</a></div>
        </div>

        <div id="baseNavMenCon">
            @if (\Illuminate\Support\Facades\Auth::check())
                <a href="/dashborad">
                    <div id="baseNavUserCon" class="ml-3 relative">
                        <div id="user-menu">
                            <img
                                id="baseNavAva"
                                src="{{ \Illuminate\Support\Facades\Auth::user()->avatar }}"
                                alt="Avatar"/>
                        </div>
                    </div>
                </a>
            @else
                <x-google_button/>
            @endif
        </div>
    </div>
</nav>
