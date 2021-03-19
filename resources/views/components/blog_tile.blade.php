<div class="container rounded bg-yellow-200 text-center flex flex-col mx-auto blogTile{{ $num }}">
    <p>{{ $blogPost->title }}</p> // title
    <p>{{ $num }}</p>
    <p>MAYBE_FIRST_FEW_CHARS</p>
    <p>{{ $blogPost->photo }} // photo</p>
    <p>{{ $blogPost->author }} // author</p>
    <p>{{ $blogPost->published }} // published</p>
</div>
