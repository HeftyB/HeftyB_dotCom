@extends("layouts.layout")


@section("content")

    <div class="container w-5/6 mx-auto border-l border-r border-black h-full p-4">

        <div class="w-full" id="blogContainer">

            <div
                class="modal h-screen w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50"
                id="imgModal">
                <div id="blogModal" class="container flex flex-col bg-gray-200 h-4/6 w-8/12 justify-center p-4">
                    <p class="text-red-500 text-xs text-center">*Before you begin writing your thoughts, please take a
                        moment to choose a title for your blog post and a background img*</p>

                    <hr class="my-4"/>

                    <div class="flex justify-around w-full">
                        <div class="w-2/5 flex align-middle justify-end pr-16 text-center text-3xl font-bold">
                            <p class="my-auto">Choose a title:</p>
                        </div>
                        <input type="text"
                               class="shadow appearance-none border rounded py-2 px-3 mx-auto text-grey-darker w-2/4"
                               id="blogTitle">
                    </div>

                    <div class="flex justify-around h-4/6 my-2 py-4">
                        <div
                            class="w-2/5 text-right flex align-middle justify-end pr-16 mb-1 text-3xl font-bold border-r border-black">
                            <p class="my-auto">Choose a cover photo:</p>
                        </div>

                        <div class="w-3/5 text-center border-t border-black mb-1">
                            <form method="post" action="" enctype="multipart/form-data" id="blogImgForm"
                                  class="flex flex-col justify-between h-full">
                                <div class="text-center text-xl">
                                    Image preview:
                                </div>
                                <div class="preview h-full">
                                    <img src="" id="blogImgMain"
                                         class="w-32 my-2 mx-auto border-black border inline-block hidden">
                                </div>
                                <div>
                                    <label
                                        for="blogImgMainFile"
                                        class="font-semibold text-xl p-4 text-gray-600 m-2 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                                        Select image file
                                    </label>
                                    <input type="file" id="blogImgMainFile" name="file" class="hidden"/>
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

            <div>


                <div class="border-l-2 border-transparent bg-green-50">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
                            id="infoFormHeader">
                        <span class="text-grey-darkest text-center text-xl">
                            Editing tips -
                        </span>
                        <div
                            class="rounded-full border border-grey w-7 h-7 flex items-center justify-center bg-gray-700"
                            id="infoFormIcon">
                            <!-- icon by feathericons.com -->
                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9">
                                </polyline>
                            </svg>
                        </div>
                    </header>
                    <div class="p-4 rounded-2xl border-t-0 bg-yellow-50" id="blogFormInfo">

                        <div class="m-4">

                            <ol class="list-disc">
                                <li>
                                    This application is styled using Tailwind Css, using Tailwind CSS classes you are
                                    able to style selected text using the inline class style tool
                                </li>
                                <li>
                                    You are able to edit the title and cover image for this post using the title/img
                                    button at the bottom of this page
                                </li>
                                <li>
                                    You are also able to upload and embed images into the post and style the image using
                                    some predefined block style tools
                                </li>
                                <li>
                                    To change a paragraphs text alignment or to apply sizing and other styles to images
                                    click on the <img
                                        src="https://i.ibb.co/4dxs1gJ/Screen-Shot-2021-04-21-at-5-14-07-PM.png"
                                        class="inline-block">
                                    button located on the right side of the active block(paragraph or image)
                                </li>
                                <li>
                                    You are able to apply nested styles and classes such as changing the background
                                    color of a few characters inside of a sentence that you have already
                                    enlarged the text from
                                </li>
                                <div>
                                    <p>Custom Classes:</p>
                                    <ol class="list-square list-inside">
                                        <li>
                                            <b><i>marker</i></b> - highlights text like a highlighter <span
                                                class="marker">TEXT</span>
                                        </li>
                                        <li>
                                            <b><i>code</i></b> - provides a code block for the selection <span
                                                class="code">int x = 4;</span>
                                        </li>
                                        <li>
                                            <b><i>inline-code</i></b> - provides a inline code block for the selection
                                            <span class="inline-code">int x = 4;</span>
                                        </li>
                                    </ol>

                                    <p>Tailwind CSS Style Classes:</p>
                                    <ol class="list-square list-inside">
                                        <li>
                                            <b><i>text-sm / text-lg / text-7xl</i></b> - change font size
                                        </li>
                                        <li>
                                            <b><i>text-white / text-blue-400</i></b> - change font color
                                        </li>
                                        <li>
                                            <b><i>bg-red-400 / bg-black</i></b> - change background color of selection
                                        </li>
                                        <li>
                                            <b><i>p-4 m-4 / pt-1 mb-3 pl-6 mr-5</i></b> - padding / margin
                                            (padding-left, margin-bottom, padding-left, margin-right)
                                        </li>
                                    </ol>
                                </div>

                                <span>For a more complete reference see these links:</span>
                                <div class="text-blue-900 underline">
                                    <a href="https://nerdcave.com/tailwind-cheat-sheet">Tailwind CSS cheat sheet</a>
                                </div>


                                <div class="text-blue-900 underline">
                                    <a href="https://tailwindcss.com/docs/font-size">TailWind CSS docs</a>
                                </div>

                            </ol>

                        </div>
                    </div>
                </div>

            </div>

            <hr>
            <hr>

            <div id="editorjs" class="min-h-screen m-2 border-black border-t">

            </div>

            <div class="container flex justify-around">
                <div
                    class="bg-red-500 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                    id="cancelButton">
                    <p class="font-semibold text-white m-3 resize">Cancel</p>
                </div>
                <div
                    class="bg-gray-800 rounded-lg mt-4 border text-center shadow transition duration-200 ease-in-out transform hover:-translate-y-px hover:shadow-md cursor-pointer"
                    id="tiButton">
                    <p class="font-semibold text-white m-3 resize">Title/Img</p>
                </div>
                <div
                    id="saveButton"
                    class="bg-blue-500 text-white mt-4 bg-white border border-gray-400 rounded-lg text-center transition duration-200 ease-in-out transform hover:-translate-y-px shadow hover:shadow-md cursor-pointer">
                    <p class="font-semibold my-3 mx-4 resize">Save</p>
                </div>
            </div>
        </div>
        <script>
            let data;
        </script>
@endsection
