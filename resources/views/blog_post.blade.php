@extends("layouts.layout")


@section("content")
    <div class="w-9/12 mx-auto">
        <div class="container">
            <img src="{{ $img }}" alt="blogImg" class="w-5/6 mx-auto rounded">
        </div>

        <p class="text-6xl font-extrabold">{{ $title }}</p>

        @foreach($elements as $element)
            <p class="container m-2 p-4">{!! $element->value !!}</p>
        @endforeach
    </div>
@endsection
