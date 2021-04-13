@extends("layouts.layout")


@section("content")

    <div class="container w-5/6 mx-auto border border-black h-full">

        <div class="w-full" id="blogContainer">

            <div class="container h-36 m-auto">

                <p class="text-4xl text-center mx-auto cursor-text" id="blogTitle" contenteditable="true">Click to
                    change title!</p>

                <div class="container text-center">
                    <form method="post" action="" enctype="multipart/form-data" id="blogImgForm">
                        <div class="preview">
                            <img src="" id="blogImgMain" class="w-24 h-24 mx-auto border-black border hidden">
                        </div>
                        <div>
                            <input type="file" id="blogImgMainFile" name="file"/>
                            <input type="button" class="button" value="Upload" id="blogImgMainUpload">
                        </div>
                    </form>
                </div>

                <p class="text-red-500 text-xs text-center">*Before you begin writing your thoughts, please take a
                    moment to choose a title for your blog post and a background img*</p>
            </div>

            <hr>
            <hr>

            <div id="editorjs">

            </div>

            <div class="container flex justify-around">
                <div
                    class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                    id="cancelButton">
                    <p class="font-semibold text-white m-3 resize">Primary Button</p>
                </div>
                <div
                    id="saveButton"
                    class="text-gray-600 mt-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                    <p class="font-semibold my-3 mx-4 resize">Third Button</p>
                </div>
            </div>
        </div>

@endsection
