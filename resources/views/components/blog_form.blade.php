@extends("layouts.layout")


@section("content")

    <div class="container w-5/6 mx-auto border border-black h-screen">

        <div class="w-full" id="blogContainer">
            <p class="text-4xl text-center mx-auto" id="blogTitle" contenteditable="true">Click to change title!</p>
        </div>

        <div id="editorjs">

        </div>

        <div class="container flex justify-around">
            <div
                class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                id="saveButton">
                <p class="font-semibold text-white m-3">Primary Button</p>
            </div>
            <div
                class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer">
                <p class="font-semibold text-white m-3">Secondary Button</p>
            </div>
            <div
                id="thirds"
                class="text-gray-600 mt-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                <p class="font-semibold my-3 mx-4">Third Button</p>
            </div>
        </div>
    </div>

@endsection
