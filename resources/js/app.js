import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import List from '@editorjs/list';

import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';
import Undo from 'editorjs-undo';
import Paragraph from 'editorjs-paragraph-with-alignment';
import FontSize from 'editorjs-inline-font-size-tool';

const token = window.localStorage.getItem("api_token");
const saveButton = document.getElementById('saveButton');

const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
        header: Header,
        list: List,
        // quote: Quote,
        fontSize: FontSize,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true
        },
        image: {
            class: ImageTool,
            config: {
                actions: [
                    {
                        name: "resize",
                        icon: "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
                            "\t viewBox=\"0 0 317.215 317.215\" style=\"enable-background:new 0 0 317.215 317.215;\" xml:space=\"preserve\">\n" +
                            "<g>\n" +
                            "\t<path style=\"fill:#231F20;\" d=\"M309.715,1.107h-71.223c-4.143,0-7.5,3.358-7.5,7.5v20c0,4.142,3.357,7.5,7.5,7.5h18.973\n" +
                            "\t\tl-57.129,57.127c-1.406,1.406-2.197,3.314-2.197,5.303c0,1.989,0.791,3.897,2.197,5.303l14.143,14.143\n" +
                            "\t\tc1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.733,5.304-2.197l57.129-57.127V79.83c0,4.142,3.357,7.5,7.5,7.5h20\n" +
                            "\t\tc4.143,0,7.5-3.358,7.5-7.5V8.607C317.215,4.465,313.857,1.107,309.715,1.107z\"/>\n" +
                            "\t<path style=\"fill:#231F20;\" d=\"M59.75,36.107h18.973c4.143,0,7.5-3.358,7.5-7.5v-20c0-4.142-3.357-7.5-7.5-7.5H7.5\n" +
                            "\t\tc-4.143,0-7.5,3.358-7.5,7.5V79.83c0,4.142,3.357,7.5,7.5,7.5h20c4.143,0,7.5-3.358,7.5-7.5V60.857l57.125,57.126\n" +
                            "\t\tc1.465,1.464,3.385,2.197,5.305,2.197c1.919,0,3.839-0.733,5.305-2.197l14.142-14.143c1.406-1.406,2.196-3.314,2.196-5.303\n" +
                            "\t\tc0-1.989-0.79-3.897-2.196-5.303L59.75,36.107z\"/>\n" +
                            "\t<path style=\"fill:#231F20;\" d=\"M102.734,199.233c-2.93-2.929-7.678-2.929-10.609,0L35,256.358v-18.974c0-4.142-3.357-7.5-7.5-7.5\n" +
                            "\t\th-20c-4.143,0-7.5,3.358-7.5,7.5v71.223c0,4.142,3.357,7.5,7.5,7.5h71.223c4.143,0,7.5-3.358,7.5-7.5v-20\n" +
                            "\t\tc0-4.142-3.357-7.5-7.5-7.5H59.75l57.126-57.125c1.406-1.406,2.196-3.314,2.196-5.303c0-1.989-0.79-3.897-2.196-5.303\n" +
                            "\t\tL102.734,199.233z\"/>\n" +
                            "\t<path style=\"fill:#231F20;\" d=\"M309.715,229.885h-20c-4.143,0-7.5,3.358-7.5,7.5v18.976l-57.13-57.127\n" +
                            "\t\tc-2.929-2.929-7.677-2.929-10.606,0l-14.143,14.143c-1.406,1.406-2.197,3.314-2.197,5.303c0,1.989,0.791,3.897,2.198,5.303\n" +
                            "\t\tl57.128,57.125h-18.973c-4.143,0-7.5,3.358-7.5,7.5v20c0,4.142,3.357,7.5,7.5,7.5h71.223c4.143,0,7.5-3.358,7.5-7.5v-71.223\n" +
                            "\t\tC317.215,233.243,313.857,229.885,309.715,229.885z\"/>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            // "<g>\n" +
                            // "</g>\n" +
                            "</svg>",
                        title: "Resize Image",
                        action: name => {
                            // alert(`${name} button clicked`);
                            // $(this).addClass("ui-widget-content");
                            $(".image-tool").resizable();
                            $(".image-tool").draggable();
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
        code: CodeTool,
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        },
    },

    // autofocus: true,
    placeholder: "Come on, write something already!",
    onReady: () => {
        new Undo({editor});
    },
});

saveButton.addEventListener("click", () => {



    editor.save()
        .then(savedData => {
            $.ajax({
                type: "POST",
                url: "/api/blog/create",
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
        .catch(error => {
            console.error("Saving error", error);
        });
});


$("#thirds").resizable();
