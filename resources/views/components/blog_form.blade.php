@extends("layouts.layout")


@section("content")

    <div class="container w-5/6 mx-auto border border-black h-full">

        <div class="w-full" id="blogContainer">

            <div class="
            modal h-screen w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50
{{--            container h-36 m-auto--}}
            ">
                <div class="container flex flex-col bg-gray-200 h-2/4 w-8/12 justify-center p-4">
                    <p class="text-red-500 text-xs text-center">*Before you begin writing your thoughts, please take a
                        moment to choose a title for your blog post and a background img*</p>

                    <hr class="my-4"/>

                    <div class="flex justify-around w-full">
                        <div class="w-1/2 flex align-middle justify-end pr-16 text-center text-4xl font-bold">
                            <p class="my-auto">Choose a title:</p>
                        </div>
                        <input type="text" class="shadow appearance-none border rounded py-2 px-3 mx-auto text-grey-darker w-5/12">
{{--                        <div class="text-4xl text-center mx-auto cursor-text" id="blogTitle" contenteditable="true">Click to--}}
{{--                            change title!</div>--}}
                    </div>

                    <div class="flex justify-around h-4/6">
                        <div class="w-1/2 text-right flex align-middle justify-end pr-16 text-3xl font-bold border-r border-black">
                            <p class="my-auto">Choose a cover photo:</p>
                        </div>

                        <div class="w-1/2 text-center">
                            <form method="post" action="" enctype="multipart/form-data" id="blogImgForm" class="flex flex-col justify-between h-full">
                                <div class="text-center text-xl">
                                    Image preview:
                                </div>
                                <div class="preview h-full">
                                    <img src="" id="blogImgMain" class="w-1/3 my-4 mx-auto border-black border inline-block hidden">
                                </div>
                                <div>
                                    <label
                                        for="blogImgMainFile"
                                        class="font-semibold text-xl p-4 text-gray-600 m-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                                        Select image file
                                    </label>
                                    <input type="file" id="blogImgMainFile" name="file" class="hidden"/>
                                    <input
                                        type="button"
                                        class="font-semibold text-xl px-4 py-3 text-gray-600 m-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer"
                                        value="Upload"
                                        id="blogImgMainUpload">
                                </div>
                            </form>
                        </div>
                    </div>

                    <div
                        class="h-16 bg-gray-800 rounded-lg border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                        id="closeTitleButton">
                        <p class="font-semibold text-white m-3 resize">OK</p>
                    </div>

                </div>

            </div>

            <hr>
            <hr>

            <div id="editorjs">

            </div>

            <div class="container flex justify-around">
                <div
                    class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                    id="cancelButton">
                    <p class="font-semibold text-white m-3 resize">Cancel</p>
                </div>
                <div
                    class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                    id="cancelButton">
                    <p class="font-semibold text-white m-3 resize">Title/Img</p>
                </div>
                <div
                    id="saveButton"
                    class="text-gray-600 mt-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                    <p class="font-semibold my-3 mx-4 resize">Save</p>
                </div>
            </div>
        </div>

@endsection
