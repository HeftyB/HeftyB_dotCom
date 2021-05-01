@extends("layouts.layout")


@section("content")
    <div>
        <div
            id="dashWelcome"
            class="bg-blue-200 px-6 py-4 mx-2 my-4 rounded-md text-lg mx-auto hidden w-0 max-h-20">
            <div class="midDiv flex justify-between items-center my-auto">
                <svg
                    viewBox="0 0 24 24"
                    class="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3 inline animate-ping-slow">
                    <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"/>
                </svg>
                <div><span class="inline-block animate-shakes">👋</span> <span class="text-blue-800">Welcome {{\Illuminate\Support\Facades\Auth::user()->name}}!</span>
                </div>
                <svg
                    viewBox="0 0 24 24"
                    class="text-blue-600 w-5 h-5 sm:w-5 sm:h-5 mr-3 inline animate-ping-slow">
                    <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"/>
                </svg>
            </div>
        </div>
    </div>
    <div class="flex-1 max-h-full">
        <hr class="my-12 border-black">
        <div class="flex justify-between">
            <p class="pl-8 mt-4 text-3xl">
                Your Posts:
            </p>
            <p class="pl-8 mt-4">
                Total Post: {{ $blogPosts->total() }}
            </p>
        </div>
        <div class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
            @foreach($blogPosts as $blogPost)
                <x-dashboard_blog :blogPost="$blogPost"/>
            @endforeach
        </div>
        {{ $blogPosts->links() }}
        <hr class="my-12 border-black">
        <div class="bg-gray-500 rounded-2xl">
            <div id="imgModal"
                 class="modal h-screen w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50 hidden">
                <div class="container flex flex-col bg-transparent h-4/6 w-8/12 justify-center p-4">
                    <img id="userFileModal" src="" alt="img">
                </div>
            </div>
            <header class="flex justify-between items-center py-5 px-8 cursor-pointer select-none"
                    id="userFiledHeader">
                <p class="text-grey-darkest text-center text-xl">
                    <span class="pl-8 text-3xl">Your files:</span>
                </p>
                <div class="flex w-44 justify-between">
                    <p>Total Files: <span id="fileCount">{{ $files->total() }}</span></p>
                    <div
                        class="rounded-full border border-grey w-7 h-7 flex items-center justify-center bg-blue-500"
                        id="filedIcon">
                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#ffffff"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"
                             width="24" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </div>
                </div>
            </header>
            <div class="mx-auto" id="userFiled">

                <div class="flex flex-col mt-6">
                    <div class="overflow-x-auto">
                        <div class="min-w-full py-2 align-middle sm:px-0 lg:px-2">
                            <div class="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                                <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            File Name
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Path
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                            Created
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    @foreach($files as $file)
                                        <x-dashboard_userfile :file="$file"/>
                                    @endforeach
                                    </tbody>
                                </table>
                                {{ $files->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        window.localStorage.setItem("api_token", "{{ $token }}");
    </script>
@endsection
