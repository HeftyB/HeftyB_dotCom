<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeftyB</title>
    @yield("head")
</head>
<body class="bg-gray-200 font-serif">
<x-nav/>
<div style="margin: 1rem 0;">
    @yield("content")
</div>
<x-footer/>
</body>
    @yield("scripts")
</html>
