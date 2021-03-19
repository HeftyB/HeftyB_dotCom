import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import List from '@editorjs/list';

import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';
import Undo from 'editorjs-undo';

console.log("Hello!");
const editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holder: 'editorjs',

    /**
     * Available Tools list.
     * Pass Tool's class or Settings object for each Tool you want to use
     */
    tools: {
        header: Header,
        list: List,
        quote: Quote,
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
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

