{{--<!doctype html>--}}
{{--<html lang="en">--}}
{{--<head>--}}
{{--    <meta charset="UTF-8">--}}
{{--    <meta name="viewport"--}}
{{--          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">--}}
{{--    <meta http-equiv="X-UA-Compatible" content="ie=edge">--}}
{{--    <title>Contact Message</title>--}}
{{--</head>--}}
<body>
    {{ dd($name, $phone, $email, $mes, $message) }}
    <div class="">
        <p class="text-4xl text-center">New Message!</p>
        <div class="">
            <p class="">From: {{ $name }}</p>
            <p class="">Contact: {{ $phone }}, {{ $email }}</p>
        </div>

        <div class="">
            <p class="">
                {{ $message }}
            </p>
        </div>

    </div>
</body>
{{--</html>--}}
