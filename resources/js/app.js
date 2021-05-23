import EditorJS from "@editorjs/editorjs";
import ImageTool from '@editorjs/image';
import Undo from 'editorjs-undo';
import {StyleInlineTool} from './dist/index';
import Paragraph from 'editorjs-paragraph-with-alignment';
import Underline from '@editorjs/underline';
import axios from 'axios';

$(document).ready(function () {
    const token = window.localStorage.getItem("api_token");
    const saveButton = document.getElementById('saveButton');
    const edit = document.getElementById('editorjs');

    $(document)
        .ajaxStart(function () {
            $("#loadingModal").removeClass("hidden");
        })
        .ajaxStop(function () {
            $("#loadingModal").addClass("hidden");
        })

    $("#user-menu").click(e => {
        $("#userDropDown").toggleClass("hidden");
    })

    const editor = edit ? new EditorJS({
        holder: 'editorjs',
        tools: {
            style: StyleInlineTool,
            underline: Underline,
            paragraph: {
                class: Paragraph,
                inlineToolbar: ["bold", "italic", "underline", "style"],
                preserveBlank: true,
                // tunes: ['alignTune']
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
            }
        },
        data: data ? data : null,
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
                            title: $("#blogTitle").val(),
                            img: $("#blogImgMain").attr("src"),
                            data: savedData
                        }),
                        contentType: "application/json",
                        success: res => {
                            window.location.assign("/dashboard");
                        }
                    });
                })
                .catch(error => {
                    console.error("Saving error", error);
                });
        })
    }

    $("#edUpdate").click(function () {
        editor.save()
            .then(savedData => {
                $.ajax({
                    type: "PUT",
                    url: `/api/blog/update/${ids}`,
                    headers: {"Authorization": `Bearer ${token}`},
                    data: JSON.stringify({
                        data: savedData
                    }),
                    contentType: "application/json",
                    success: res => {
                        $("#loadingModal").removeClass("hidden");
                        window.location.assign("/dashboard");
                    }
                });
            })
            .catch(error => {
                console.error("Saving error", error);
            });
    })

    $("#edDelete").click(() => {
        axios.delete(`/blog/delete/${ids}`)
            .then(res => {
                $("#loadingModal").removeClass("hidden");
                window.location.assign("/dashboard");
            })
            .catch(res => {
                debugger;
            })
    })

    /*
    hover modal for blog tiles
     */
    // $(".blogTile").each((index, element) => {
    //     $(`#${element.id}`).click(e => {
    //         e.preventDefault();
    //         // window.location.replace(`/blog/post/${element.id}`);
    //     })


    //     $(`#${element.id}`).hover(e => {
    //         // var buttonId = $(`#${element.id}`).attr("id");
    //         // $(`#${element.id}`).removeClass("out").addClass("active");
    //
    //         // $(`#para-${element.id}`).removeClass("outs").addClass("actives");
    //         $(`#para-${element.id}`).removeClass("animate-blowUpModalTwo").addClass("animate-blowUpModal");
    //         $("body").addClass("modal-active");
    //     }, e => {
    //         // $(`#${element.id}`).removeClass("active").addClass("out");
    //
    //         // $(`#para-${element.id}`).removeClass("actives").addClass("outs");
    //         $(`#para-${element.id}`).removeClass("animate-blowUpModal").addClass("animate-blowUpModalTwo");
    //         $("body").removeClass("modal-active");
    //     })
    // })

    $("#blogImgMainFile").change(function () {
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
            alert("Please select a file");
        }
    })

    $("#infoFormHeader").click(function () {
        $("#infoFormIcon").toggleClass("bg-gray-700");
        $("#blogFormInfo").toggleClass("hidden");
    })

    $("#userFiledHeader").click(function () {
        $("#filedIcon").toggleClass("bg-black");
        $("#userFiled").toggleClass("hidden");
    })

    $(".userFile").each((index, element) => {
        const path = $(`#p${element.id}`).text()
        $(`#d${element.id}`).click(function (e) {
            $.ajax({
                url: `/api/delete`,
                type: "DELETE",
                headers: {"Authorization": `Bearer ${token}`},
                data: {"path": path, "id": element.id.replace("f", "")},
                success: function (response) {
                    $(`#${element.id}`).addClass("bg-red-500");
                    $(`#${element.id}`).find(".fileName").text("DELETED");
                    $(`#${element.id}`).find(".paths").text("DELETED");
                    $(`#${element.id}`).find(".fileActive").text("DELETED").removeClass("bg-green-100").addClass("bg-red-500");
                    $(`#${element.id}`).addClass("hidden");

                    let t = $("#fileCount").text();
                    t = parseInt(t);
                    t--;
                    $("#fileCount").text(t);
                }
            })
        })

        $(`#i${element.id}`).click(function () {
            let s = $(this).attr("src");
            $("#userFileModal").attr("src", s);
            $("#imgModal").toggleClass("hidden");
        })
    })

    /**
     * Jquery animation just because why not
     */
    $("#dashWelcome").delay(1500).animate({
        display: "show",
        width: "50%",
        height: "100%"

    }, "slow", "linear", function () {
        $(this).show();
    })

    /**
     * Modal functions
     */

    $("#imgModal").click(function () {
        $(this).toggleClass("hidden");
    })

    $("#blogModal").click(e => {
        e.stopPropagation();
    })

    $("#closeTitleButton").click(function () {
        $("#imgModal").toggleClass("hidden");
    })

    $("#tiButton").click(function () {
        $("#imgModal").toggleClass("hidden");
    })

    $("#wProjectsButton").click(function () {
        window.location.assign("/#projects");
    })

    $("#githubButton").click(function () {
        window.location.href = "https://www.github.com/heftyb";
    })

    $("#contactButton").click(function () {
        window.location.assign("/contact");
    })
})

