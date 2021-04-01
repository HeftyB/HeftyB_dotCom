@extends("layouts.layout")


@section("content")

    <div class="container">
        <img src="{{ $img }}" alt="blogImg" class="w-5/6 mx-auto rounded">
    </div>

    <p class="text-6xl font-extrabold">{{ $title }}</p>

    @foreach($elements as $element)
        <p class="container">{{ $element->value }}</p>
    @endforeach

@endsection
