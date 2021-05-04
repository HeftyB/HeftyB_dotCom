<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeftyB</title>
    <link href="{{ asset("../../css/app.css") }}" rel="stylesheet">
</head>
<body class="bg-gray-200 font-serif">
<x-nav/>
<div class="my-0 mx-auto bg-white w-11/12 py-2 shadow-lg rounded-b-2xl">
    <div class="container mx-auto w-11/12 min-h-screen">
        @yield("content")
    </div>
    <div id="loadingModal"
         class="modal h-screen w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-70 z-50 hidden">
        <div class="container flex justify-center">
            <div class="mx-auto">
                <svg class="animate-spin -ml-1 mr-3 h-20 w-20 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        </div>
    </div>
</div>
<x-footer/>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="{{ asset('../../js/app.js') }}"></script>
</body>
</html>
