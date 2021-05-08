<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @yield("head")
    <link href="{{ asset('css/base.css') }}" rel="stylesheet">
</head>
<body class="bg-gray-200 font-serif">
<x-base_nav/>
<div class="baseNav">
    <p class="text-white text-center" style="font-size: x-large;">
        Project Demo:
    </p>
</div>
<div style="margin: 1rem 0;">
    @yield("content")
</div>
<x-footer/>
</body>
    @yield("scripts")
</html>
