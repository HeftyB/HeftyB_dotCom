<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeftyB</title>
    <!-- Fonts -->
    {{--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">--}}
    {{--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>--}}
    <link href="{{ asset("../../css/app.css") }}" rel="stylesheet">

</head>
<body class="bg-gray-200">

<x-nav/>

<div class="my-0 mx-auto bg-white w-5/6">

    <div class="container mx-auto">

{{--        <div class="h1 text-center font-bold my-7">Welcome, {{ \Illuminate\Support\Facades\Auth::user() ? \Illuminate\Support\Facades\Auth::user()->getAuthIdentifierName() : "please sign in!" }}!</div>--}}

        @yield("content")
    </div>
</div>
{{--<script src="https://apis.google.com/js/platform.js" async defer></script>--}}
<script>
    const userDropDown = e => {
        document.getElementById("userDropDown").classList.toggle("hidden");
    }
</script>

</body>
</html>
