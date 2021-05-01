@extends("layouts.layout")


@section("content")
    <div class="w-9/12 mx-auto">
        <div class="container">
            <img src="/blog/{{ $img }}" alt="blogImg" class="w-5/6 mx-auto rounded">
        </div>
        <p class="text-5xl font-extrabold italic">{{ $title }}</p>
        @foreach($elements as $element)
            @if($element->img_flag)
                <div class="m-4">
                    <img src="/blog/{!! $element->value !!}" class="mx-auto {{$element->class}}">
                    <p class="text-center font-bold">{!! $element->img_caption !!}</p>
                </div>
            @else
                <p class="container m-2 p-4 {{$element->class}}">{!! $element->value !!}</p>
            @endif
        @endforeach
    </div>
@endsection
