@extends("layouts.layout")


@section("content")
    <h1>DASHBOARD!</h1>
    <div>
        {{ $token }}
    </div>

    <script>
        window.localStorage.setItem("api_token", "{{ $token }}");
    </script>
@endsection
