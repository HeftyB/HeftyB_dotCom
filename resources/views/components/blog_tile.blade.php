<div class="blogTile i-{{ $num }} h-64 w-full mx-auto" id="{{ $blogPost->id }}">
    <div
        class="flex flex-col justify-end items-stretch h-full pb-4 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl relative">


        <div class="absolute left-0 bottom-0 w-full h-full z-10"
             style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.9));"></div>


        <div class="md:flex-shrink-0">
            <img
                src="/blog/{{ $blogPost->img }}"
                alt="Blog Cover"
                class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
            />
        </div>


        <div id="para-{{ $blogPost->id }}"
             class="
                tilePara
                absolute left-0 bottom-0
                w-full h-full
                z-30
                opacity-0
                px-4 py-2
                text-gray-700
                border-8 border-black border-double">
            <div
                class="whitespace-normal overflow-ellipsis overflow-y-scroll h-full break-words modal-container"
                style="text-indent: 40px">
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

    </div>
</div>


<div class="relative container h-auto z-20">
    <div class="flex items-center justify-end overflow-hidden w-11/12 mx-auto h-12">

        <section class="">
            <div class="flex items-center place-items-center">
                <div class="flex justify-start">
                    <div class="mx-auto">
                        <img
                            class="object-cover h-8 rounded-full mx-auto"
                            src="{{ $blogPost->user->avatar }}"
                            alt="Avatar"
                        />
                    </div>
                    <div class="flex flex-col mx-2">
                        <a href="" class="font-semibold text-gray-300 hover:underline">
                            {{ $blogPost->user->name }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <div class="w-11/12 mx-auto">
        <a href="#" class="hover:underline ">
            <h2 class="text-xl font-bold tracking-normal text-gray-50">
                {{ $blogPost->title }}
            </h2>
        </a>
    </div>
</div>
