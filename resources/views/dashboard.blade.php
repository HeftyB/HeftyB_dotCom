@extends("layouts.layout")


@section("content")


    <h1>DASHBOARD!</h1>
    <div>
        {{ $token }}
    </div>
{{--    {{dd($token)}}--}}

    <script>
        // const token = ;
        window.localStorage.setItem("api_token", "{{ $token }}");
        {{--console.log({{ $token }});--}}
        {{--window.localStorage.setItem("token", {{ $token }});--}}
    </script>
@endsection
