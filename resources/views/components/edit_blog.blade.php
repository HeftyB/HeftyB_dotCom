@extends("layouts.layout")


@section("content")
    <div>
        <p>{{ $blogPost->title }}</p>
        <div id="editorjs"></div>
        <div class="container flex justify-around max-w-2xl mx-auto">
            <div
                class="bg-gray-500 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                id="edCancel">
                <p class="font-semibold text-white m-3 resize" onclick="backs()">Cancel</p>
            </div>
            <div
                class="bg-red-500 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                id="edDelete">
                <p class="font-semibold text-white m-3 resize">Delete</p>
            </div>
            <div
                id="edUpdate"
                class="bg-blue-500 text-white mt-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                <p class="font-semibold my-3 mx-4 resize">Update</p>
            </div>
        </div>
    </div>
    <script>
        let data = @json($data);
        let ids = @json($blogPost->id);
        const backs = () => {
            window.history.back();
        };
    </script>
@endsection
