<div class="px-4 pt-4 pb-1 transition-shadow border rounded-lg shadow-sm hover:shadow-lg bg-yellow-50">
    <div class="flex items-start justify-between">
        <div class="flex flex-col justify-between h-24 my-auto">
            <div>
                <p class="text-lg font-semibold">{{ number_format(random_int(101, 10678)) }} <span
                        class="text-gray-400 font-normal text-sm">views</span></p>
                <p class="text-sm font-semibold text-green-500">{{ number_format(random_int(74, 99)) }}%<span
                        class="text-gray-400 font-normal text-xs"> liked</span></p>
            </div>
            <span class="text-xs font-medium text-right -mt-1 text-black"><a href="blog/edit/{{$blogPost->id}}">Edit</a></span>
            <p class="text-xs">{{ $blogPost->created_at->toDayDateTimeString() }}</p>
        </div>
        <div class="bg-gray-200">
            <img src="/blog/{{ $blogPost->img }}" class="rounded-md w-32 h-24 border-black border cursor-pointer">
        </div>
    </div>
    <div class="border-black border-t mt-2 h-full">
        <p class="px-4 py-4 h-16 truncate font-extrabold text-lg text-black"><a
                href="blog/post/{{$blogPost->id}}">{{$blogPost->title}}</a></p>
    </div>
</div>
