@extends("layouts.layout")


@section("content")
    <div>
        <div class="border-l-2 border-transparent bg-green-50">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
                    id="infoFormHeader">
                <p class="text-grey-darkest text-center text-xl">
                    Editing tips -
                </p>

                <div
                    class="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
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
            <div class="p-4 rounded-2xl border-t-0 bg-yellow-50 hidden" id="blogFormInfo">

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
        <p class="text-4xl font-extrabold italic text-center m-8">{{ $blogPost->title }}</p>
        <hr class="m-4"/>
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
