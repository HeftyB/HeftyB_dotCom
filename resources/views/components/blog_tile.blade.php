{{--<div class="container rounded bg-yellow-200 text-center flex flex-col mx-auto blogTile{{ $num }}">--}}
{{--    <p>{{ $blogPost->title }}</p> // title--}}
{{--    <p>{{ $num }}</p>--}}
{{--    <p>MAYBE_FIRST_FEW_CHARS</p>--}}
{{--    <p>{{ $blogPost->photo }} // photo</p>--}}
{{--    <p>{{ $blogPost->author }} // author</p>--}}
{{--    <p>{{ $blogPost->published }} // published</p>--}}
{{--</div>--}}

<div class="blogTile" id="i-{{ $num }}">
    <div
        class="flex flex-col justify-end items-stretch h-full pb-4 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl relative">


        <div class="absolute left-0 bottom-0 w-full h-full z-10"
             style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.9));"></div>


        <div class="md:flex-shrink-0">
            <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                alt="Blog Cover"
                class="
{{--                object-fill w-full rounded-lg rounded-b-none md:h-56--}}
                    absolute left-0 top-0 w-full h-full rounded z-0 object-cover
"
            />
        </div>


        <div id="parai-{{ $num }}" class="
                tilePara
{{--            flex flex-row flex-wrap--}}
        {{--            overflow-hidden --}}
        {{--            overflow-ellipsis --}}
        {{--            whitespace-pre-wrap--}}
            absolute left-0 bottom-0
            w-full h-full
            z-30
            px-4 py-2
            text-lg text-justify
            text-gray-700
            invisible
            border-8 border-black border-double
{{--                bg-white--}}
        {{--                truncate--}}
        {{--                overflow-hidden overflow-clip--}}
        {{--                transition-transform duration-300 ease-in-out transform-gpu rotate-180--}}
            "
            {{--            float-left--}}
            {{--            style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.9));"--}}
        >
            <div class="truncate whitespace-normal h-full break-words modal-container"
                               style="text-indent: 40px"
            >
                Lorem

                ipsum dolor sit amet consectetur adipisicing elit. Alias, magni
                fugiat, odit incidunt necessitatibus aut nesciunt exercitationem aliquam
                id voluptatibus quisquam maiores officia sit amet accusantium aliquid
                quo obcaecati quasi.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem commodi corporis excepturi
                facilis minima minus, nobis pariatur quae, sed soluta tempore ut vitae. Aliquam architecto doloribus,
                excepturi id in itaque maiores molestias nesciunt odit possimus quasi quos vitae voluptatem? A beatae
                culpa deserunt ducimus earum eos error esse eveniet ex exercitationem, facere hic illo, incidunt itaque
                laudantium libero maxime minus nemo porro quae quo reprehenderit sint tempore vero voluptatibus. Est
                excepturi possimus totam ut!
            </div>
        </div>

        {{--        <hr class="border-gray-300"/>--}}


        <div class="relative container h-auto z-20">


            <div class="flex items-center justify-between overflow-hidden w-11/12 mx-auto h-12">


                {{--                    <span class="text-xs font-medium text-blue-600 uppercase">--}}
                {{--                      Web Programming {{ $num }}--}}
                {{--                    </span>--}}
                {{--                --}}

                <section class="">
                    <div class="flex items-center place-items-center">
                        <div class="flex items-center flex-1">
                            <div class="mx-auto">
                                <img
                                    class="object-cover h-8 rounded-full mx-auto"
                                    src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                                    alt="Avatar"
                                />
                            </div>
                            <div class="flex flex-col mx-2">
                                <a href="" class="font-semibold text-gray-400 hover:underline">
                                    Fajrian Aidil Pratama
                                </a>
                                <span class="mx-1 text-xs text-gray-200">28 Sep 2020</span>
                            </div>
                        </div>
                        <p class="text-xs text-gray-200">9 minutes read</p>
                    </div>
                </section>

                <div class="flex flex-row items-center">
                    <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                        <svg
                            class="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                        </svg>
                        <span>1.5k</span>
                    </div>

                    <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                        <svg
                            class="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                        </svg>
                        <span>25</span>
                    </div>

                    <div class="text-xs font-medium text-gray-500 flex flex-row items-center">
                        <svg
                            class="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            ></path>
                        </svg>
                        <span>7</span>
                    </div>
                </div>
            </div>

            {{--            <hr class="border-gray-300"/>--}}

            <div class="w-11/12 mx-auto">
                <a href="#" class="hover:underline ">
                    <h2 class="text-xl font-bold tracking-normal text-gray-50">
                        How you can change you life by not sucking: The legend of the man who conquered the world only
                        to set it free
                    </h2>
                </a>
            </div>


        </div>


    </div>
</div>
