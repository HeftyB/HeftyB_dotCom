import EditorJS from "@editorjs/editorjs";
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Undo from 'editorjs-undo';
import {StyleInlineTool} from '../../../editorjs-style/dist/index';

const token = window.localStorage.getItem("api_token");
const saveButton = document.getElementById('saveButton');
const edit = document.getElementById('editorjs');

$(document).ready(function () {
    $("#user-menu").click(e => {
        $("#userDropDown").toggleClass("hidden");
    })

    const editor = edit ? new EditorJS({
        holder: 'editorjs',
        tools: {
            // list: List,
            style: StyleInlineTool,
            paragraph: {
                // class: Paragraph,
                inlineToolbar: ['style']
            },
            image: {
                class: ImageTool,
                config: {
                    actions: [
                        {
                            name: "large",
                            icon: "LG",
                            title: "Large",
                            action: x => {
                                return true;
                            }
                        },
                        {
                            name: "medium",
                            icon: "MD",
                            title: "Medium",
                            action: x => {
                                return true;
                            }
                        },
                        {
                            name: "small",
                            icon: "SM",
                            title: "Small",
                            action: x => {
                                return true;
                            }
                        }
                    ],
                    endpoints: {
                        byFile: '/api/upload', // Your backend file uploader endpoint
                        byUrl: '/api/upload_url', // Your endpoint that provides uploading by Url
                    },
                    additionalRequestHeaders: {"Authorization": `Bearer ${token}`}
                }
            },
            // code: CodeTool,
        },
        // autofocus: true,
        placeholder: "Come on, write something already!",
        onReady: () => {
            new Undo({editor});
        },
    }) : null;

    if (saveButton) {
        saveButton.addEventListener("click", () => {
            editor.save()
                .then(savedData => {
                    $.ajax({
                        type: "POST",
                        url: "/api/blog/create",
                        headers: {"Authorization": `Bearer ${token}`},
                        data: JSON.stringify({
                            title: $("#blogTitle").text(),
                            img: $("#blogImgMain").attr("src"),
                            data: savedData
                        }),
                        contentType: "application/json",
                        success: data => {
                            alert("success!")
                            console.log(data);
                        }
                    });
                })
                .catch(error => {
                    console.error("Saving error", error);
                });
        })
    }

    $(".blogTile").each((index, element) => {
        $(`#${element.id}`).click(e => {
            e.preventDefault();
            window.location.replace(`/blog/post/${element.id}`);
        })

        $(`#${element.id}`).hover(e => {
            // var buttonId = $(`#${element.id}`).attr("id");
            $(`#${element.id}`).removeClass("out").addClass("active");
            $(`#para-${element.id}`).removeClass("outs").addClass("actives");
            $("body").addClass("modal-active");
        }, e => {
            $(`#${element.id}`).removeClass("active").addClass("out");
            $(`#para-${element.id}`).removeClass("actives").addClass("outs");
            $('body').removeClass('modal-active');
        });


    })

    $(".button").click(function () {
        $("#modal-container").removeAttr("class").addClass("four");
        $("body").addClass("modal-active");
    })

    $(".modal-container").click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });


    $("#sub").click(e => {
        console.log($("#img"));

        $.ajax({
            type: "POST",
            url: "/api/upload",
            headers: {"Authorization": `Bearer ${token}`},
            data: JSON.stringify({
                title: $("#blogTitle").text(),
                data: savedData
            }),
            contentType: "application/json",
            success: data => {
                console.log(data);
            }
        });
    })


    $("#blogImgMainUpload").click(function () {

        const fd = new FormData();
        const files = $('#blogImgMainFile')[0].files;

        if (files.length > 0) {
            fd.append("image", files[0]);

            $.ajax({
                url: "/api/upload",
                type: "POST",
                headers: {"Authorization": `Bearer ${token}`},
                data: fd,
                contentType: false,
                processData: false,
                success: function (response) {
                    if (response != 0) {
                        $("#blogImgMain").attr("src", response.file.url);
                        $("#blogImgMain").removeClass("hidden");
                    } else {
                        alert('file not uploaded');
                    }
                },
            });
        } else {
            alert("Please select a file.");
        }
    })
})

