/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/***/ ((module) => {

/*! For license information please see editor.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=183)}([function(t,e,n){var o=n(10),r=n(17),i=n(27),a=n(23),s=n(31),c=function(t,e,n){var l,u,f,d,p=t&c.F,h=t&c.G,v=t&c.S,y=t&c.P,g=t&c.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,m=h?r:r[e]||(r[e]={}),k=m.prototype||(m.prototype={});for(l in h&&(n=e),n)f=((u=!p&&b&&void 0!==b[l])?b:n)[l],d=g&&u?s(f,o):y&&"function"==typeof f?s(Function.call,f):f,b&&a(b,l,f,t&c.U),m[l]!=f&&i(m,l,d),y&&k[l]!=f&&(k[l]=f)};o.core=r,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(107);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(143),r=n(368);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(374)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);function c(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var u=function(){function t(e){var n=this,o=e.config,i=e.eventsDispatcher;if((0,r.default)(this,t),this.nodes={},this.listeners=new a.default,this.readOnlyMutableListeners={on:function(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n.mutableListenerIds.push(n.listeners.on(t,e,o,r))},clearAll:function(){var t,e=c(n.mutableListenerIds);try{for(e.s();!(t=e.n()).done;){var o=t.value;n.listeners.offById(o)}}catch(t){e.e(t)}finally{e.f()}n.mutableListenerIds=[]}},this.mutableListenerIds=[],(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=o,this.eventsDispatcher=i}return(0,i.default)(t,[{key:"removeAllNodes",value:function(){for(var t in this.nodes){var e=this.nodes[t];e instanceof HTMLElement&&e.remove()}}},{key:"state",set:function(t){this.Editor=t}},{key:"isRtl",get:function(){return"rtl"===this.config.i18n.direction}}]),t}();o.default=u,u.displayName="Module",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(367),n(22),n(15)],void 0===(i="function"==typeof(o=function(t,e,o,r,i){"use strict";var a,s=n(1);function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var i=["info","log","warn","error"].includes(n),s=[];switch(c.logLevel){case a.ERROR:if("error"!==n)return;break;case a.WARN:if(!["error","warn"].includes(n))return;break;case a.INFO:if(!i||t)return}o&&s.push(o);var l="Editor.js ".concat("2.20.0"),u="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";t&&(i?(s.unshift(u,r),e="%c".concat(l,"%c ").concat(e)):e="( ".concat(l," )").concat(e));try{if(i)if(o){var f;(f=console)[n].apply(f,["".concat(e," %o")].concat(s))}else{var d;(d=console)[n].apply(d,[e].concat(s))}else console[n](e)}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){c.logLevel=t},t.typeOf=f,t.isFunction=d,t.isObject=p,t.isString=function(t){return"string"===f(t)},t.isBoolean=function(t){return"boolean"===f(t)},t.isNumber=function(t){return"number"===f(t)},t.isUndefined=h,t.isClass=function(t){return d(t)&&/^\s*class\s+/.test(t.toString())},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object},t.isPromise=function(t){return Promise.resolve(t)===t},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||229===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223},t.sequence=function(t){return v.apply(this,arguments)},t.array=function(t){return Array.prototype.slice.call(t)},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout((function(){return t.apply(n,o)}),e)}},t.getFileExtension=function(t){return t.name.split(".").pop()},t.isValidMimeType=function(t){return/^[-\w]+\/([-+\w]+|\*)$/.test(t)},t.debounce=function(t,e,n){var o,r=arguments,i=this;return function(){var a=i,s=r,c=n&&!o;window.clearTimeout(o),o=window.setTimeout((function(){o=null,n||t.apply(a,s)}),e),c&&t.apply(a,s)}},t.copyTextToClipboard=function(t){var e=i.default.make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e)},t.getUserOS=y,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1)},t.deepMerge=function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return e;var a=r.shift();if(p(e)&&p(a))for(var s in a)p(a[s])?(e[s]||Object.assign(e,(0,o.default)({},s,{})),t(e[s],a[s])):Object.assign(e,(0,o.default)({},s,a[s]));return t.apply(void 0,[e].concat(r))},t.beautifyShortcut=function(t){var e=y();return t=t.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},t.getValidUrl=function(t){try{return new URL(t).href}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t},t.openTab=function(t){window.open(t,"_blank")},t.generateId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t).concat(Math.floor(1e8*Math.random()).toString(16))},t.deprecationAssert=function(t,e,n){var o="«".concat(e,"» is deprecated and will be removed in the next major release. Please use the «").concat(n,"» instead.");t&&u(o,"warn")},t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=s(e),o=s(o),r=s(r),i=s(i),t.LogLevels=a,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(a||(t.LogLevels=a={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},c.logLevel=a.VERBOSE;var l=c.bind(window,!1);t.log=l;var u=c.bind(window,!0);function f(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function d(t){return"function"===f(t)}function p(t){return"object"===f(t)}function h(t){return"undefined"===f(t)}function v(){return(v=(0,r.default)(e.default.mark((function t(n){var o,i,a,s,c=arguments;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=(0,r.default)(e.default.mark((function t(n,o,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.function(n.data);case 3:return t.next=5,o(h(n.data)?{}:n.data);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(h(n.data)?{}:n.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},a=function(t,e,n){return s.apply(this,arguments)},o=c.length>1&&void 0!==c[1]?c[1]:function(){},i=c.length>2&&void 0!==c[2]?c[2]:function(){},t.abrupt("return",n.reduce(function(){var t=(0,r.default)(e.default.mark((function t(n,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.abrupt("return",a(r,o,i));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find((function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t)}));return e?(t[e]=!0,t):t}t.logLabeled=u;var g="ontouchstart"in document.documentElement;t.isTouchSupported=g})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(143);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=i?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(67)("wks"),r=n(44),i=n(10).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(9),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=c(s);var u=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"isSingleTag",value:function(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName)}},{key:"isLineBreakTag",value:function(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);for(var a in Array.isArray(n)?(e=i.classList).add.apply(e,(0,r.default)(n)):n&&i.classList.add(n),o)Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a]);return i}},{key:"text",value:function(t){return document.createTextNode(t)}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}},{key:"append",value:function(t,e){Array.isArray(e)?e.forEach((function(e){return t.appendChild(e)})):t.appendChild(e)}},{key:"prepend",value:function(t,e){Array.isArray(e)?(e=e.reverse()).forEach((function(e){return t.prepend(e)})):t.prepend(e)}},{key:"swap",value:function(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n)}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e)}},{key:"get",value:function(t){return document.getElementById(t)}},{key:"findAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e)}},{key:"findAllInputs",value:function(e){return s.array(e.querySelectorAll(t.allInputsSelector)).reduce((function(e,n){return t.isNativeInput(n)||t.containsOnlyInlineElements(n)?[].concat((0,r.default)(e),[n]):[].concat((0,r.default)(e),(0,r.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getDeepestNode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",r=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var i=e[o];if(t.isSingleTag(i)&&!t.isNativeInput(i)&&!t.isLineBreakTag(i))if(i[r])i=i[r];else{if(!i.parentNode[r])return i.parentNode;i=i.parentNode[r]}return this.getDeepestNode(i,n)}return e}},{key:"isElement",value:function(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isContentEditable",value:function(t){return"true"===t.contentEditable}},{key:"isNativeInput",value:function(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName)}},{key:"canSetCaret",value:function(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1}else n=t.isContentEditable(e);return n}},{key:"isNodeEmpty",value:function(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("​","")).trim().length}},{key:"isLeaf",value:function(t){return!!t&&0===t.childNodes.length}},{key:"isEmpty",value:function(t){t.normalize();for(var e=[t];e.length>0;)if(t=e.shift()){if(this.isLeaf(t)&&!this.isNodeEmpty(t))return!1;t.childNodes&&e.push.apply(e,(0,r.default)(Array.from(t.childNodes)))}return!0}},{key:"isHTMLString",value:function(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0}},{key:"getContentLength",value:function(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}},{key:"containsOnlyInlineElements",value:function(e){var n;return s.isString(e)?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every((function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e)}))}},{key:"getDeepestBlockElements",value:function(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce((function(e,n){return[].concat((0,r.default)(e),(0,r.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getHolder",value:function(t){return s.isString(t)?document.getElementById(t):t}},{key:"isExtensionNode",value:function(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName)}},{key:"isAnchor",value:function(t){return"a"===t.tagName.toLowerCase()}},{key:"allInputsSelector",get:function(){return"[contenteditable], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(t){return'input[type="'.concat(t,'"]')})).join(", ")}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),t}();o.default=u,u.displayName="Dom",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(33),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(12),r=n(109),i=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(38);t.exports=function(t){return Object(o(t))}},function(t,e,n){t.exports=n(140)},function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,c,"next",t)}function c(t){n(a,r,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e,n){var o=n(10),r=n(27),i=n(26),a=n(44)("src"),s=n(188),c=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(i(n,a)||r(n,a,t[e]?""+t[e]:c.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var o=n(0),r=n(11),i=n(38),a=/"/g,s=function(t,e,n,o){var r=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(9),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=c(a),s=l(s);var u=function(){function t(){(0,r.default)(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}return(0,i.default)(t,[{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=t.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"findParentTag",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),r=null;if(!o||!o.anchorNode||!o.focusNode)return null;var i=[o.anchorNode,o.focusNode];return i.forEach((function(o){for(var i=n;i>0&&o.parentNode&&(o.tagName!==t||(r=o,e&&o.classList&&!o.classList.contains(e)&&(r=null),!r));)o=o.parentNode,i--})),r}},{key:"expandToTag",value:function(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n)}}],[{key:"get",value:function(){return window.getSelection()}},{key:"setCursor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=window.getSelection();if(s.default.isNativeInput(t)){if(!s.default.canSetCaret(t))return;return t.focus(),t.selectionStart=t.selectionEnd=e,t.getBoundingClientRect()}return n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var t=window.getSelection();return t?t.anchorNode:null}},{key:"anchorElement",get:function(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s.default.isElement(e)?e:e.parentElement:null}},{key:"anchorOffset",get:function(){var t=window.getSelection();return t?t.anchorOffset:null}},{key:"isCollapsed",get:function(){var t=window.getSelection();return t?t.isCollapsed:null}},{key:"isAtEditor",get:function(){var e=t.get(),n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&(o=n.closest(".".concat(t.CSS.editorZone))),o&&o.nodeType===Node.ELEMENT_NODE}},{key:"isSelectionExists",get:function(){return!!t.get().anchorNode}},{key:"range",get:function(){var t=window.getSelection();return t&&t.rangeCount?t.getRangeAt(0):null}},{key:"rect",get:function(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),t.insertNode(o),n=o.getBoundingClientRect();var r=o.parentNode;r.removeChild(o),r.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),t}();o.default=u,u.displayName="SelectionUtils",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(19),r=n(43);t.exports=n(18)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(62),r=n(38);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(357),r=n(358),i=n(141),a=n(359);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){"use strict";var o=n(11);t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(63),r=n(43),i=n(28),a=n(40),s=n(26),c=n(109),l=Object.getOwnPropertyDescriptor;e.f=n(18)?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e,n){var o=n(0),r=n(17),i=n(11);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},function(t,e,n){var o=n(31),r=n(62),i=n(20),a=n(16),s=n(125);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,y,g=i(e),b=r(g),m=o(s,h,3),k=a(b.length),x=0,w=n?p(e,k):c?p(e,0):void 0;k>x;x++)if((d||x in b)&&(y=m(v=b[x],x,g),t))if(n)w[x]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(u)return!1;return f?-1:l||u?u:w}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";if(n(18)){var o=n(45),r=n(10),i=n(11),a=n(0),s=n(78),c=n(106),l=n(31),u=n(57),f=n(43),d=n(27),p=n(58),h=n(33),v=n(16),y=n(136),g=n(47),b=n(40),m=n(26),k=n(64),x=n(13),w=n(20),S=n(98),T=n(48),E=n(50),C=n(49).f,B=n(100),_=n(44),I=n(14),O=n(36),M=n(68),R=n(65),A=n(102),N=n(55),P=n(71),L=n(56),D=n(101),j=n(127),F=n(19),U=n(34),H=F.f,z=U.f,W=r.RangeError,Y=r.TypeError,V=r.Uint8Array,X=Array.prototype,G=c.ArrayBuffer,K=c.DataView,Z=O(0),q=O(2),J=O(3),$=O(4),Q=O(5),tt=O(6),et=M(!0),nt=M(!1),ot=A.values,rt=A.keys,it=A.entries,at=X.lastIndexOf,st=X.reduce,ct=X.reduceRight,lt=X.join,ut=X.sort,ft=X.slice,dt=X.toString,pt=X.toLocaleString,ht=I("iterator"),vt=I("toStringTag"),yt=_("typed_constructor"),gt=_("def_constructor"),bt=s.CONSTR,mt=s.TYPED,kt=s.VIEW,xt=O(1,(function(t,e){return Ct(R(t,t[gt]),e)})),wt=i((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),St=!!V&&!!V.prototype.set&&i((function(){new V(1).set({})})),Tt=function(t,e){var n=h(t);if(n<0||n%e)throw W("Wrong offset!");return n},Et=function(t){if(x(t)&&mt in t)return t;throw Y(t+" is not a typed array!")},Ct=function(t,e){if(!x(t)||!(yt in t))throw Y("It is not a typed array constructor!");return new t(e)},Bt=function(t,e){return _t(R(t,t[gt]),e)},_t=function(t,e){for(var n=0,o=e.length,r=Ct(t,o);o>n;)r[n]=e[n++];return r},It=function(t,e,n){H(t,e,{get:function(){return this._d[n]}})},Ot=function(t){var e,n,o,r,i,a,s=w(t),c=arguments.length,u=c>1?arguments[1]:void 0,f=void 0!==u,d=B(s);if(null!=d&&!S(d)){for(a=d.call(s),o=[],e=0;!(i=a.next()).done;e++)o.push(i.value);s=o}for(f&&c>2&&(u=l(u,arguments[2],2)),e=0,n=v(s.length),r=Ct(this,n);n>e;e++)r[e]=f?u(s[e],e):s[e];return r},Mt=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},Rt=!!V&&i((function(){pt.call(new V(1))})),At=function(){return pt.apply(Rt?ft.call(Et(this)):Et(this),arguments)},Nt={copyWithin:function(t,e){return j.call(Et(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Et(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply(Et(this),arguments)},filter:function(t){return Bt(this,q(Et(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Et(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Et(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Et(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Et(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Et(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return lt.apply(Et(this),arguments)},lastIndexOf:function(t){return at.apply(Et(this),arguments)},map:function(t){return xt(Et(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Et(this),arguments)},reduceRight:function(t){return ct.apply(Et(this),arguments)},reverse:function(){for(var t,e=Et(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return J(Et(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Et(this),t)},subarray:function(t,e){var n=Et(this),o=n.length,r=g(t,o);return new(R(n,n[gt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,v((void 0===e?o:g(e,o))-r))}},Pt=function(t,e){return Bt(this,ft.call(Et(this),t,e))},Lt=function(t){Et(this);var e=Tt(arguments[1],1),n=this.length,o=w(t),r=v(o.length),i=0;if(r+e>n)throw W("Wrong length!");for(;i<r;)this[e+i]=o[i++]},Dt={entries:function(){return it.call(Et(this))},keys:function(){return rt.call(Et(this))},values:function(){return ot.call(Et(this))}},jt=function(t,e){return x(t)&&t[mt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return jt(t,e=b(e,!0))?f(2,t[e]):z(t,e)},Ut=function(t,e,n){return!(jt(t,e=b(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t)};bt||(U.f=Ft,F.f=Ut),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Ut}),i((function(){dt.call({})}))&&(dt=pt=function(){return lt.call(this)});var Ht=p({},Nt);p(Ht,Dt),d(Ht,ht,Dt.values),p(Ht,{slice:Pt,set:Lt,constructor:function(){},toString:dt,toLocaleString:At}),It(Ht,"buffer","b"),It(Ht,"byteOffset","o"),It(Ht,"byteLength","l"),It(Ht,"length","e"),H(Ht,vt,{get:function(){return this[mt]}}),t.exports=function(t,e,n,c){var l=t+((c=!!c)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=r[l],g=h||{},b=h&&E(h),m=!h||!s.ABV,w={},S=h&&h.prototype,B=function(t,n){H(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,wt)}(this,n)},set:function(t){return function(t,n,o){var r=t._d;c&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,wt)}(this,n,t)},enumerable:!0})};m?(h=n((function(t,n,o,r){u(t,h,l,"_d");var i,a,s,c,f=0,p=0;if(x(n)){if(!(n instanceof G||"ArrayBuffer"==(c=k(n))||"SharedArrayBuffer"==c))return mt in n?_t(h,n):Ot.call(h,n);i=n,p=Tt(o,e);var g=n.byteLength;if(void 0===r){if(g%e)throw W("Wrong length!");if((a=g-p)<0)throw W("Wrong length!")}else if((a=v(r)*e)+p>g)throw W("Wrong length!");s=a/e}else s=y(n),i=new G(a=s*e);for(d(t,"_d",{b:i,o:p,l:a,e:s,v:new K(i)});f<s;)B(t,f++)})),S=h.prototype=T(Ht),d(S,"constructor",h)):i((function(){h(1)}))&&i((function(){new h(-1)}))&&P((function(t){new h,new h(null),new h(1.5),new h(t)}),!0)||(h=n((function(t,n,o,r){var i;return u(t,h,l),x(n)?n instanceof G||"ArrayBuffer"==(i=k(n))||"SharedArrayBuffer"==i?void 0!==r?new g(n,Tt(o,e),r):void 0!==o?new g(n,Tt(o,e)):new g(n):mt in n?_t(h,n):Ot.call(h,n):new g(y(n))})),Z(b!==Function.prototype?C(g).concat(C(b)):C(g),(function(t){t in h||d(h,t,g[t])})),h.prototype=S,o||(S.constructor=h));var _=S[ht],I=!!_&&("values"==_.name||null==_.name),O=Dt.values;d(h,yt,!0),d(S,mt,l),d(S,kt,!0),d(S,gt,h),(c?new h(1)[vt]==l:vt in S)||H(S,vt,{get:function(){return l}}),w[l]=h,a(a.G+a.W+a.F*(h!=g),w),a(a.S,l,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){g.of.call(h,1)})),l,{from:Ot,of:Mt}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",e),a(a.P,l,Nt),L(l),a(a.P+a.F*St,l,{set:Lt}),a(a.P+a.F*!I,l,Dt),o||S.toString==dt||(S.toString=dt),a(a.P+a.F*i((function(){new h(1).slice()})),l,{slice:Pt}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString()}))||!i((function(){S.toLocaleString.call([1,2])}))),l,{toLocaleString:At}),N[l]=I?_:O,o||I||d(S,ht,O)}}else t.exports=function(){}},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(44)("meta"),r=n(13),i=n(26),a=n(19).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(11)((function(){return c(Object.preventExtensions({}))})),u=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[o].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!i(t,o)&&u(t),t}}},function(t,e,n){var o=n(364),r=n(365),i=n(141),a=n(366);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=!1},function(t,e,n){var o=n(111),r=n(85);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(33),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(12),r=n(112),i=n(85),a=n(84)("IE_PROTO"),s=function(){},c=function(){var t,e=n(82)("iframe"),o=i.length;for(e.style.display="none",n(86).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;o--;)delete c.prototype[i[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(111),r=n(85).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){var o=n(26),r=n(20),i=n(84)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(14)("unscopables"),r=Array.prototype;null==r[o]&&n(27)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){var o=n(19).f,r=n(26),i=n(14)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(0),r=n(38),i=n(11),a=n(88),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var r={},s=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=r[t]=s?e(f):a[t];n&&(r[n]=c),o(o.P+o.F*s,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(10),r=n(19),i=n(18),a=n(14)("species");t.exports=function(t){var e=o[t];i&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(23);t.exports=function(t,e,n){for(var r in e)o(t,r,e[r],n);return t}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(144)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"ui",value:function(e,n){return t._t(e,n)}},{key:"t",value:function(e,n){return t._t(e,n)}},{key:"setDictionary",value:function(e){t.currentDictionary=e}},{key:"_t",value:function(e,n){var o=t.getNamespace(e);return o&&o[n]?o[n]:n}},{key:"getNamespace",value:function(e){return e.split(".").reduce((function(t,e){return t&&Object.keys(t).length?t[e]:{}}),t.currentDictionary)}}]),t}();o.default=c,c.displayName="I18n",c.currentDictionary=a.default,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(375),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(9),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=c(s);var u=function(){function t(e){var n=this;(0,r.default)(this,t),this.iterator=null,this.activated=!1,this.allowArrows=!0,this.onKeyDown=function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e)}},this.allowArrows=!s.isBoolean(e.allowArrows)||e.allowArrows,this.iterator=new a.default(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback}return(0,i.default)(t,[{key:"activate",value:function(t){this.activated=!0,t&&this.iterator.setItems(t),document.addEventListener("keydown",this.onKeyDown)}},{key:"deactivate",value:function(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}},{key:"focusFirst",value:function(){this.dropCursor(),this.flipRight()}},{key:"flipLeft",value:function(){this.iterator.previous()}},{key:"flipRight",value:function(){this.iterator.next()}},{key:"dropCursor",value:function(){this.iterator.dropCursor()}},{key:"isEventReadyForHandling",value:function(t){var e=[s.keyCodes.TAB,s.keyCodes.ENTER],n=this.iterator.currentItem==document.activeElement;return this.allowArrows&&!n&&e.push(s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.UP,s.keyCodes.DOWN),this.activated&&-1!==e.indexOf(t.keyCode)}},{key:"handleTabPress",value:function(t){switch(t.shiftKey?a.default.directions.LEFT:a.default.directions.RIGHT){case a.default.directions.RIGHT:this.flipRight();break;case a.default.directions.LEFT:this.flipLeft()}}},{key:"handleEnterPress",value:function(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),s.isFunction(this.activateCallback)&&this.activateCallback(this.iterator.currentItem),t.preventDefault(),t.stopPropagation())}},{key:"currentItem",get:function(){return this.iterator.currentItem}}],[{key:"usedKeys",get:function(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN]}}]),t}();o.default=u,u.displayName="Flipper",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(42),n(21),n(22),n(2),n(3),n(15),n(8),n(148),n(25)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,c,l,u,f){"use strict";var d,p=n(9),h=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockToolAPI=void 0,e=h(e),o=h(o),r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=p(l),u=h(u),f=h(f),t.BlockToolAPI=d,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste"}(d||(t.BlockToolAPI=d={}));var v=function(){function t(e){var n=this,o=e.data,r=e.tool,i=e.api,s=e.readOnly,c=e.tunes,f=e.tunesData;(0,a.default)(this,t),this.cachedInputs=[],this.tunesInstances=new Map,this.defaultTunesInstances=new Map,this.unavailableTunesData={},this.inputIndex=0,this.modificationDebounceTimer=450,this.didMutated=l.debounce((function(){n.cachedInputs=[],n.updateCurrentInput(),n.call(d.UPDATED)}),this.modificationDebounceTimer),this.handleFocus=function(){n.cachedInputs=[],n.updateCurrentInput()},this.name=r.name,this.settings=r.settings,this.config=r.settings.config||{},this.api=i,this.blockAPI=new u.default(this),this.mutationObserver=new MutationObserver(this.didMutated),this.tool=r,this.toolInstance=r.create(o,this.blockAPI,s),this.tunes=c,this.composeTunes(f),this.holder=this.compose()}var n,p,h;return(0,s.default)(t,[{key:"call",value:function(t,e){if(this.toolInstance[t]&&this.toolInstance[t]instanceof Function){t===d.APPEND_CALLBACK&&l.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.toolInstance[t].call(this.toolInstance,e)}catch(e){l.log("Error during '".concat(t,"' call: ").concat(e.message),"error")}}}},{key:"mergeWith",value:(h=(0,i.default)(r.default.mark((function t(e){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.merge(e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"save",value:(p=(0,i.default)(r.default.mark((function t(){var n,i,a,s,c=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.save(this.pluginsContent);case 2:return n=t.sent,i=this.unavailableTunesData,[].concat((0,o.default)(this.tunesInstances.entries()),(0,o.default)(this.defaultTunesInstances.entries())).forEach((function(t){var n=(0,e.default)(t,2),o=n[0],r=n[1];if(l.isFunction(r.save))try{i[o]=r.save()}catch(t){l.log("Tune ".concat(r.constructor.name," save method throws an Error %o"),"warn",t)}})),a=window.performance.now(),t.abrupt("return",Promise.resolve(n).then((function(t){return s=window.performance.now(),{tool:c.name,data:t,tunes:i,time:s-a}})).catch((function(t){l.log("Saving proccess for ".concat(c.name," tool failed due to the ").concat(t),"log","red")})));case 7:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})},{key:"validate",value:(n=(0,i.default)(r.default.mark((function t(e){var n;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!0,!(this.toolInstance.validate instanceof Function)){t.next=5;break}return t.next=4,this.toolInstance.validate(e);case 4:n=t.sent;case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"renderTunes",value:function(){var t=document.createDocumentFragment(),e=document.createDocumentFragment();return this.tunesInstances.forEach((function(e){c.default.append(t,e.render())})),this.defaultTunesInstances.forEach((function(t){c.default.append(e,t.render())})),[t,e]}},{key:"updateCurrentInput",value:function(){this.currentInput=c.default.isNativeInput(document.activeElement)||!f.default.anchorNode?document.activeElement:f.default.anchorNode}},{key:"willSelect",value:function(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addInputEvents()}},{key:"willUnselect",value:function(){this.mutationObserver.disconnect(),this.removeInputEvents()}},{key:"destroy",value:function(){l.isFunction(this.toolInstance.destroy)&&this.toolInstance.destroy()}},{key:"renderSettings",value:function(){if(l.isFunction(this.toolInstance.renderSettings))return this.toolInstance.renderSettings()}},{key:"compose",value:function(){var e=c.default.make("div",t.CSS.wrapper),n=c.default.make("div",t.CSS.content),r=this.toolInstance.render();n.appendChild(r);var i=n;return[].concat((0,o.default)(this.tunesInstances.values()),(0,o.default)(this.defaultTunesInstances.values())).forEach((function(t){if(l.isFunction(t.wrap))try{i=t.wrap(i)}catch(e){l.log("Tune ".concat(t.constructor.name," wrap method throws an Error %o"),"warn",e)}})),e.appendChild(i),e}},{key:"composeTunes",value:function(t){var n=this;Array.from(this.tunes.values()).forEach((function(e){(e.isInternal?n.defaultTunesInstances:n.tunesInstances).set(e.name,e.create(t[e.name],n.blockAPI))})),Object.entries(t).forEach((function(t){var o=(0,e.default)(t,2),r=o[0],i=o[1];n.tunesInstances.has(r)||(n.unavailableTunesData[r]=i)}))}},{key:"addInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("focus",t.handleFocus)}))}},{key:"removeInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.removeEventListener("focus",t.handleFocus)}))}},{key:"inputs",get:function(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=c.default.findAllInputs(this.holder);return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),this.cachedInputs=t,t}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(t){var e=this.inputs.findIndex((function(e){return e===t||e.contains(t)}));-1!==e&&(this.inputIndex=e)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var t=this.inputs;return t[t.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"data",get:function(){return this.save().then((function(t){return t&&!l.isEmpty(t.data)?t.data:{}}))}},{key:"sanitize",get:function(){return this.tool.sanitizeConfig}},{key:"mergeable",get:function(){return l.isFunction(this.toolInstance.merge)}},{key:"isEmpty",get:function(){var t=c.default.isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"focused",set:function(e){this.holder.classList.toggle(t.CSS.focused,e)},get:function(){return this.holder.classList.contains(t.CSS.focused)}},{key:"selected",set:function(e){e?this.holder.classList.add(t.CSS.selected):this.holder.classList.remove(t.CSS.selected)},get:function(){return this.holder.classList.contains(t.CSS.selected)}},{key:"stretched",set:function(e){this.holder.classList.toggle(t.CSS.wrapperStretched,e)},get:function(){return this.holder.classList.contains(t.CSS.wrapperStretched)}},{key:"dropTarget",set:function(e){this.holder.classList.toggle(t.CSS.dropTarget,e)}},{key:"pluginsContent",get:function(){var e=this.holder.querySelector(".".concat(t.CSS.content));if(e&&e.childNodes.length)for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];if(!c.default.isExtensionNode(o))return o}return null}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),t}();t.default=v,v.displayName="Block"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(37),r=n(14)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(12),r=n(32),i=n(14)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i,a,s,c,l,u,f=n(9),d=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InternalTuneSettings=t.InternalInlineToolSettings=t.InternalBlockToolSettings=t.CommonInternalSettings=t.UserSettings=t.ToolType=void 0,e=d(e),o=d(o),r=f(r),t.ToolType=i,function(t){t[t.Block=0]="Block",t[t.Inline=1]="Inline",t[t.Tune=2]="Tune"}(i||(t.ToolType=i={})),t.UserSettings=a,function(t){t.Shortcut="shortcut",t.Toolbox="toolbox",t.EnabledInlineTools="inlineToolbar",t.EnabledBlockTunes="tunes",t.Config="config"}(a||(t.UserSettings=a={})),t.CommonInternalSettings=s,function(t){t.Shortcut="shortcut",t.SanitizeConfig="sanitize"}(s||(t.CommonInternalSettings=s={})),t.InternalBlockToolSettings=c,function(t){t.IsEnabledLineBreaks="enableLineBreaks",t.Toolbox="toolbox",t.ConversionConfig="conversionConfig",t.IsReadOnlySupported="isReadOnlySupported",t.PasteConfig="pasteConfig"}(c||(t.InternalBlockToolSettings=c={})),t.InternalInlineToolSettings=l,function(t){t.IsInline="isInline",t.Title="title"}(l||(t.InternalInlineToolSettings=l={})),t.InternalTuneSettings=u,function(t){t.IsTune="isTune"}(u||(t.InternalTuneSettings=u={}));var p=function(){function t(n){var o=n.name,r=n.constructable,i=n.config,a=n.api,s=n.isDefault,c=n.isInternal,l=void 0!==c&&c,u=n.defaultPlaceholder;(0,e.default)(this,t),this.api=a,this.name=o,this.constructable=r,this.config=i,this.isDefault=s,this.isInternal=l,this.defaultPlaceholder=u}return(0,o.default)(t,[{key:"reset",value:function(){if(r.isFunction(this.constructable.reset))return this.constructable.reset()}},{key:"prepare",value:function(){if(r.isFunction(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings})}},{key:"isInline",value:function(){return this.type===i.Inline}},{key:"isBlock",value:function(){return this.type===i.Block}},{key:"isTune",value:function(){return this.type===i.Tune}},{key:"settings",get:function(){var t=this.config[a.Config]||{};return this.isDefault&&!("placeholder"in t)&&this.defaultPlaceholder&&(t.placeholder=this.defaultPlaceholder),t}},{key:"shortcut",get:function(){var t=this.constructable[s.Shortcut];return this.config[a.Shortcut]||t}},{key:"sanitizeConfig",get:function(){return this.constructable[s.SanitizeConfig]}}]),t}();t.default=p,p.displayName="BaseTool"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(17),r=n(10),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(45)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(28),r=n(16),i=n(47);t.exports=function(t){return function(e,n,a){var s,c=o(e),l=r(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(37);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(14)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var o=n(12);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var o=n(64),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){"use strict";n(129);var o=n(23),r=n(27),i=n(11),a=n(38),s=n(14),c=n(103),l=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],y=n(a,d,""[t],(function(t,e,n,o,r){return e.exec===c?p&&!r?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),g=y[0],b=y[1];o(String.prototype,t,g),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var o=n(31),r=n(124),i=n(98),a=n(12),s=n(16),c=n(100),l={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,y,g=d?function(){return t}:c(t),b=o(n,f,e?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>m;m++)if((y=e?b(a(h=t[m])[0],h[1]):b(t[m]))===l||y===u)return y}else for(v=g.call(t);!(h=v.next()).done;)if((y=r(v,b,h.value,e))===l||y===u)return y}).BREAK=l,e.RETURN=u},function(t,e,n){var o=n(10).navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var o=n(10),r=n(0),i=n(23),a=n(58),s=n(41),c=n(75),l=n(57),u=n(13),f=n(11),d=n(71),p=n(53),h=n(89);t.exports=function(t,e,n,v,y,g){var b=o[t],m=b,k=y?"set":"add",x=m&&m.prototype,w={},S=function(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(g||x.forEach&&!f((function(){(new m).entries().next()})))){var T=new m,E=T[k](g?{}:-0,1)!=T,C=f((function(){T.has(1)})),B=d((function(t){new m(t)})),_=!g&&f((function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((m=e((function(e,n){l(e,m,t);var o=h(new b,e,m);return null!=n&&c(n,y,o[k],o),o}))).prototype=x,x.constructor=m),(C||_)&&(S("delete"),S("has"),y&&S("get")),(_||E)&&S(k),g&&x.clear&&delete x.clear}else m=v.getConstructor(e,t,y,k),a(m.prototype,n),s.NEED=!0;return p(m,t),w[t]=m,r(r.G+r.W+r.F*(m!=b),w),g||v.setStrong(m,t,y),m}},function(t,e,n){for(var o,r=n(10),i=n(27),a=n(44),s=a("typed_array"),c=a("view"),l=!(!r.ArrayBuffer||!r.DataView),u=l,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=r[d[f++]])?(i(o.prototype,s,!0),i(o.prototype,c,!0)):u=!1;t.exports={ABV:l,CONSTR:u,TYPED:s,VIEW:c}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(t)})}},{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods}}}]),o}((l=u(l)).default);o.default=d,d.displayName="API",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(59),n(81)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(9),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=h(f),d=v(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.Editor.Toolbox.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):(this.drawUI(),this.enableModuleBindings())}},{key:"move",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.Editor.Toolbox.close(),this.Editor.BlockSettings.close());var e=this.Editor.BlockManager.currentBlock.holder;if(e){var n=this.Editor.UI.isMobile,o=e.offsetHeight,r=e.offsetTop;if(n)r+=o;else{var i=Math.floor(o/2);this.nodes.plusButton.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)"),this.Editor.Toolbox.nodes.toolbox.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)")}this.nodes.wrapper.style.transform="translate3D(0, ".concat(Math.floor(r),"px, 0)")}}},{key:"open",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f.delay((function(){t.move(n),t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide()}),50)()}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.Editor.Toolbox.close(),this.Editor.BlockSettings.close()}},{key:"make",value:function(){var t=this;this.nodes.wrapper=u.default.make("div",this.CSS.toolbar),["content","actions"].forEach((function(e){t.nodes[e]=u.default.make("div",t.CSS[e])})),u.default.append(this.nodes.wrapper,this.nodes.content),u.default.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u.default.make("div",this.CSS.plusButton),u.default.append(this.nodes.plusButton,u.default.svg("plus",14,14)),u.default.append(this.nodes.content,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(function(){t.plusButtonClicked()}),!1);var e=u.default.make("div");e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Add"))),e.appendChild(u.default.make("div",this.CSS.plusButtonShortcut,{textContent:"⇥ Tab"})),this.Editor.Tooltip.onHover(this.nodes.plusButton,e),this.nodes.blockActionsButtons=u.default.make("div",this.CSS.blockActionsButtons),this.nodes.settingsToggler=u.default.make("span",this.CSS.settingsToggler);var n=u.default.svg("dots",8,8);u.default.append(this.nodes.settingsToggler,n),u.default.append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),u.default.append(this.nodes.actions,this.nodes.blockActionsButtons),this.Editor.Tooltip.onHover(this.nodes.settingsToggler,d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler,"Click to tune"),{placement:"top"}),u.default.append(this.nodes.content,this.Editor.Toolbox.nodes.toolbox),u.default.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}},{key:"plusButtonClicked",value:function(){this.Editor.Toolbox.toggle()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"click",(function(){t.settingsTogglerClicked()}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open()}},{key:"drawUI",value:function(){this.Editor.BlockSettings.make(),this.Editor.Toolbox.make(),this.make()}},{key:"destroy",value:function(){this.removeAllNodes()}},{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}},{key:"plusButton",get:function(){var t=this;return{hide:function(){return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden)},show:function(){t.Editor.Toolbox.isEmpty||t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden)}}}},{key:"blockActions",get:function(){var t=this;return{hide:function(){t.nodes.actions.classList.remove(t.CSS.actionsOpened)},show:function(){t.nodes.actions.classList.add(t.CSS.actionsOpened)}}}}]),o}(l.default);o.default=g,g.displayName="Toolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(144),n(8)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nInternalNS=void 0,e=i(e);var a=function t(n,o){var i={};return Object.entries(n).forEach((function(n){var a=(0,e.default)(n,2),s=a[0],c=a[1];if((0,r.isObject)(c)){var l=o?"".concat(o,".").concat(s):s,u=Object.values(c).every((function(t){return(0,r.isString)(t)}));i[s]=u?l:t(c,l)}else i[s]=c})),i}((o=i(o)).default);t.I18nInternalNS=a})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(13),r=n(10).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){e.f=n(14)},function(t,e,n){var o=n(67)("keys"),r=n(44);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(10).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(13),r=n(12),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(31)(Function.call,n(34).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var o=n(13),r=n(87).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},function(t,e,n){"use strict";var o=n(33),r=n(38);t.exports=function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var o=n(33),r=n(38);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),c=o(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(45),r=n(0),i=n(23),a=n(27),s=n(55),c=n(123),l=n(53),u=n(50),f=n(14)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,g){c(n,e,h);var b,m,k,x=function(t){if(!d&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,T=!1,E=t.prototype,C=E[f]||E["@@iterator"]||v&&E[v],B=C||x(v),_=v?S?x("entries"):B:void 0,I="Array"==e&&E.entries||C;if(I&&(k=u(I.call(new t)))!==Object.prototype&&k.next&&(l(k,w,!0),o||"function"==typeof k[f]||a(k,f,p)),S&&C&&"values"!==C.name&&(T=!0,B=function(){return C.call(this)}),o&&!g||!d&&!T&&E[f]||a(E,f,B),s[e]=B,s[w]=p,v)if(b={values:S?B:x("values"),keys:y?B:x("keys"),entries:_},g)for(m in b)m in E||i(E,m,b[m]);else r(r.P+r.F*(d||T),e,b);return b}},function(t,e,n){var o=n(96),r=n(38);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},function(t,e,n){var o=n(13),r=n(37),i=n(14)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e,n){var o=n(14)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var o=n(55),r=n(14)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(19),r=n(43);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(64),r=n(14)("iterator"),i=n(55);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var o=n(51),r=n(128),i=n(55),a=n(28);t.exports=n(94)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var o,r,i=n(72),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,o,r,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),l&&(e=c.lastIndex),o=a.call(c,t),l&&o&&(c.lastIndex=c.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=c},function(t,e,n){"use strict";var o=n(93)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},function(t,e,n){var o,r,i,a=n(31),s=n(117),c=n(86),l=n(82),u=n(10),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,y=0,g={},b=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},m=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){s("function"==typeof t?t:Function(t),e)},o(y),y},p=function(t){delete g[t]},"process"==n(37)(f)?o=function(t){f.nextTick(a(b,t,1))}:v&&v.now?o=function(t){v.now(a(b,t,1))}:h?(i=(r=new h).port2,r.port1.onmessage=m,o=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",m,!1)):o="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:p}},function(t,e,n){"use strict";var o=n(10),r=n(18),i=n(45),a=n(78),s=n(27),c=n(58),l=n(11),u=n(57),f=n(33),d=n(16),p=n(136),h=n(49).f,v=n(19).f,y=n(101),g=n(53),b=o.ArrayBuffer,m=o.DataView,k=o.Math,x=o.RangeError,w=o.Infinity,S=b,T=k.abs,E=k.pow,C=k.floor,B=k.log,_=k.LN2,I=r?"_b":"buffer",O=r?"_l":"byteLength",M=r?"_o":"byteOffset";function R(t,e,n){var o,r,i,a=new Array(n),s=8*n-e-1,c=(1<<s)-1,l=c>>1,u=23===e?E(2,-24)-E(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=T(t))!=t||t===w?(r=t!=t?1:0,o=c):(o=C(B(t)/_),t*(i=E(2,-o))<1&&(o--,i*=2),(t+=o+l>=1?u/i:u*E(2,1-l))*i>=2&&(o++,i/=2),o+l>=c?(r=0,o=c):o+l>=1?(r=(t*i-1)*E(2,e),o+=l):(r=t*E(2,l-1)*E(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8);for(o=o<<e|r,s+=e;s>0;a[f++]=255&o,o/=256,s-=8);return a[--f]|=128*d,a}function A(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,s=r-7,c=n-1,l=t[c--],u=127&l;for(l>>=7;s>0;u=256*u+t[c],c--,s-=8);for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[c],c--,s-=8);if(0===u)u=1-a;else{if(u===i)return o?NaN:l?-w:w;o+=E(2,e),u-=a}return(l?-1:1)*o*E(2,u-e)}function N(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function P(t){return[255&t]}function L(t){return[255&t,t>>8&255]}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return R(t,52,8)}function F(t){return R(t,23,4)}function U(t,e,n){v(t.prototype,e,{get:function(){return this[n]}})}function H(t,e,n,o){var r=p(+n);if(r+e>t[O])throw x("Wrong index!");var i=t[I]._b,a=r+t[M],s=i.slice(a,a+e);return o?s:s.reverse()}function z(t,e,n,o,r,i){var a=p(+n);if(a+e>t[O])throw x("Wrong index!");for(var s=t[I]._b,c=a+t[M],l=o(+r),u=0;u<e;u++)s[c+u]=l[i?u:e-u-1]}if(a.ABV){if(!l((function(){b(1)}))||!l((function(){new b(-1)}))||l((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var W,Y=(b=function(t){return u(this,b),new S(p(t))}).prototype=S.prototype,V=h(S),X=0;V.length>X;)(W=V[X++])in b||s(b,W,S[W]);i||(Y.constructor=b)}var G=new m(new b(2)),K=m.prototype.setInt8;G.setInt8(0,2147483648),G.setInt8(1,2147483649),!G.getInt8(0)&&G.getInt8(1)||c(m.prototype,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},!0)}else b=function(t){u(this,b,"ArrayBuffer");var e=p(t);this._b=y.call(new Array(e),0),this[O]=e},m=function(t,e,n){u(this,m,"DataView"),u(t,b,"DataView");var o=t[O],r=f(e);if(r<0||r>o)throw x("Wrong offset!");if(r+(n=void 0===n?o-r:d(n))>o)throw x("Wrong length!");this[I]=t,this[M]=r,this[O]=n},r&&(U(b,"byteLength","_l"),U(m,"buffer","_b"),U(m,"byteLength","_l"),U(m,"byteOffset","_o")),c(m.prototype,{getInt8:function(t){return H(this,1,t)[0]<<24>>24},getUint8:function(t){return H(this,1,t)[0]},getInt16:function(t){var e=H(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=H(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return N(H(this,4,t,arguments[1]))},getUint32:function(t){return N(H(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return A(H(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return A(H(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){z(this,1,t,P,e)},setUint8:function(t,e){z(this,1,t,P,e)},setInt16:function(t,e){z(this,2,t,L,e,arguments[2])},setUint16:function(t,e){z(this,2,t,L,e,arguments[2])},setInt32:function(t,e){z(this,4,t,D,e,arguments[2])},setUint32:function(t,e){z(this,4,t,D,e,arguments[2])},setFloat32:function(t,e){z(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){z(this,8,t,j,e,arguments[2])}});g(b,"ArrayBuffer"),g(m,"DataView"),s(m.prototype,a.VIEW,!0),e.ArrayBuffer=b,e.DataView=m},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(377)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=c(r),i=c(i),a=c(a),s=c(s);var l=function(){function t(){(0,i.default)(this,t),this.registeredShortcuts=new Map}return(0,a.default)(t,[{key:"add",value:function(t){if(this.findShortcut(t.on,t.name))throw Error("Shortcut ".concat(t.name," is already registered for ").concat(t.on,". Please remove it before add a new handler."));var e=new s.default({name:t.name,on:t.on,callback:t.handler}),n=this.registeredShortcuts.get(t.on)||[];this.registeredShortcuts.set(t.on,[].concat((0,r.default)(n),[e]))}},{key:"remove",value:function(t,e){var n=this.findShortcut(t,e);if(n){n.remove();var o=this.registeredShortcuts.get(t);this.registeredShortcuts.set(t,o.filter((function(t){return t!==n})))}}},{key:"findShortcut",value:function(t,e){return(this.registeredShortcuts.get(t)||[]).find((function(t){return t.name===e}))}}]),t}();l.displayName="Shortcuts";var u=new l;o.default=u,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){t.exports=!n(18)&&!n(11)((function(){return 7!=Object.defineProperty(n(82)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(10),r=n(17),i=n(45),a=n(83),s=n(19).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(26),r=n(28),i=n(68)(!1),a=n(84)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),c=0,l=[];for(n in s)n!=a&&o(s,n)&&l.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var o=n(19),r=n(12),i=n(46);t.exports=n(18)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,c=0;s>c;)o.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var o=n(28),r=n(49).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},function(t,e,n){"use strict";var o=n(18),r=n(46),i=n(69),a=n(63),s=n(20),c=n(62),l=Object.assign;t.exports=!l||n(11)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=o}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,f=i.f,d=a.f;l>u;)for(var p,h=c(arguments[u++]),v=f?r(h).concat(f(h)):r(h),y=v.length,g=0;y>g;)p=v[g++],o&&!d.call(h,p)||(n[p]=h[p]);return n}:l},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var o=n(32),r=n(13),i=n(117),a=[].slice,s={},c=function(t,e,n){if(!(e in s)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";s[e]=Function("F,a","return new F("+o.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function(){var o=n.concat(a.call(arguments));return this instanceof s?c(e,o.length,o):i(e,o,t)};return r(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(10).parseInt,r=n(54).trim,i=n(88),a=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=r(String(t),3);return o(n,e>>>0||(a.test(n)?16:10))}:o},function(t,e,n){var o=n(10).parseFloat,r=n(54).trim;t.exports=1/o(n(88)+"-0")!=-1/0?function(t){var e=r(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},function(t,e,n){var o=n(37);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t}},function(t,e,n){var o=n(13),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){"use strict";var o=n(48),r=n(43),i=n(53),a={};n(27)(a,n(14)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(12);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(278);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(32),r=n(20),i=n(62),a=n(16);t.exports=function(t,e,n,s,c){o(e);var l=r(t),u=i(l),f=a(l.length),d=c?f-1:0,p=c?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break}if(d+=p,c?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;c?d>=0:f>d;d+=p)d in u&&(s=e(s,u[d],d,l));return s}},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),s=r(t,a),c=r(e,a),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?a:r(l,a))-c,a-s),f=1;for(c<s&&s<c+u&&(f=-1,c+=u-1,s+=u-1);u-- >0;)c in n?n[s]=n[c]:delete n[s],s+=f,c+=f;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var o=n(103);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(72)})},function(t,e,n){"use strict";var o,r,i,a,s=n(45),c=n(10),l=n(31),u=n(64),f=n(0),d=n(13),p=n(32),h=n(57),v=n(75),y=n(65),g=n(105).set,b=n(298)(),m=n(132),k=n(299),x=n(76),w=n(133),S=c.TypeError,T=c.process,E=T&&T.versions,C=E&&E.v8||"",B=c.Promise,_="process"==u(T),I=function(){},O=r=m.f,M=!!function(){try{var t=B.resolve(1),e=(t.constructor={})[n(14)("species")]=function(t){t(I,I)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof e&&0!==C.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;b((function(){for(var o=t._v,r=1==t._s,i=0,a=function(e){var n,i,a,s=r?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(r||(2==t._h&&L(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?l(S("Promise-chain cycle")):(i=R(n))?i.call(n,c,l):c(n)):l(o)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)}))}},N=function(t){g.call(c,(function(){var e,n,o,r=t._v,i=P(t);if(i&&(e=k((function(){_?T.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)})),t._h=_||P(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},P=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){g.call(c,(function(){var e;_?T.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=R(t))?b((function(){var o={_w:n,_d:!1};try{e.call(t,l(j,o,1),l(D,o,1))}catch(t){D.call(o,t)}})):(n._v=t,n._s=1,A(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};M||(B=function(t){h(this,B,"Promise","_h"),p(t),o.call(this);try{t(l(j,this,1),l(D,this,1))}catch(t){D.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(58)(B.prototype,{then:function(t,e){var n=O(y(this,B));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=l(j,t,1),this.reject=l(D,t,1)},m.f=O=function(t){return t===B||t===a?new i(t):r(t)}),f(f.G+f.W+f.F*!M,{Promise:B}),n(53)(B,"Promise"),n(56)("Promise"),a=n(17).Promise,f(f.S+f.F*!M,"Promise",{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!M),"Promise",{resolve:function(t){return w(s&&this===a?B:this,t)}}),f(f.S+f.F*!(M&&n(71)((function(t){B.all(t).catch(I)}))),"Promise",{all:function(t){var e=this,n=O(e),o=n.resolve,r=n.reject,i=k((function(){var n=[],i=0,a=1;v(t,!1,(function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then((function(t){c||(c=!0,n[s]=t,--a||o(n))}),r)})),--a||o(n)}));return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=O(e),o=n.reject,r=k((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return r.e&&o(r.v),n.promise}})},function(t,e,n){"use strict";var o=n(32);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},function(t,e,n){var o=n(12),r=n(13),i=n(132);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var o=n(19).f,r=n(48),i=n(58),a=n(31),s=n(57),c=n(75),l=n(94),u=n(128),f=n(56),d=n(18),p=n(41).fastKey,h=n(52),v=d?"_s":"size",y=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,o){s(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&c(o,n,t[l],t)}));return i(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=y(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(h(this,e),t)}}),d&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,r,i=y(t,e);return i?i.v=n:(t._l=i={i:r=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t},getEntry:y,setStrong:function(t,e,n){l(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var o=n(58),r=n(41).getWeak,i=n(12),a=n(13),s=n(57),c=n(75),l=n(36),u=n(26),f=n(52),d=l(5),p=l(6),h=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,e){return d(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var l=t((function(t,o){s(t,l,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&c(o,n,t[i],t)}));return o(l.prototype,{delete:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i)}}),l},def:function(t,e,n){var o=r(i(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t},ufstore:v}},function(t,e,n){var o=n(33),r=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var o=n(49),r=n(69),i=n(12),a=n(10).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},function(t,e,n){var o=n(16),r=n(90),i=n(38);t.exports=function(t,e,n,a){var s=String(i(t)),c=s.length,l=void 0===n?" ":String(n),u=o(e);if(u<=c||""==l)return s;var f=u-c,d=r.call(l,Math.ceil(f/l.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d}},function(t,e,n){var o=n(18),r=n(46),i=n(28),a=n(63).f;t.exports=function(t){return function(e){for(var n,s=i(e),c=r(s),l=c.length,u=0,f=[];l>u;)n=c[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,o){var r=e&&e.prototype instanceof u?e:u,i=Object.create(r.prototype),a=new w(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return T()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=c(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function u(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==e&&n.call(v,r)&&(p=v);var y=d.prototype=u.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,s){var l=c(t[r],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=S,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(142);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t){t.exports=JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}')},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(5),n(6),n(4),n(146)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var s=n(1);function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.CriticalError=void 0,e=s(e),o=s(o),r=s(r),i=s(i);var l=function(t){(0,o.default)(s,t);var n,a=(n=s,function(){var t,e=(0,i.default)(n);if(c()){var o=(0,i.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,r.default)(this,t)});function s(){return(0,e.default)(this,s),a.apply(this,arguments)}return s}((0,(a=s(a)).default)(Error));t.CriticalError=l,l.displayName="CriticalError"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(4),r=n(107),i=n(369),a=n(370);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},s(e)}t.exports=s},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(148),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(9),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=d(l),u=p(u);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.defaultBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3?arguments[3]:void 0),r=arguments.length>4?arguments[4]:void 0;t.Editor.BlockManager.insert({tool:e,data:n,index:o,needToFocus:r})},t}return(0,i.default)(o,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockByIndex",value:function(t){var e=this.Editor.BlockManager.getBlockByIndex(t);if(void 0!==e)return new u.default(e);l.logLabeled("There is no block at index `"+t+"`","warn")}},{key:"swap",value:function(t,e){l.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(t,e),this.Editor.Toolbar.move(!1)}},{key:"move",value:function(t,e){this.Editor.BlockManager.move(t,e),this.Editor.Toolbar.move(!1)}},{key:"delete",value:function(t){try{this.Editor.BlockManager.removeBlock(t)}catch(t){return void l.logLabeled(t,"warn")}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}},{key:"render",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks)}},{key:"renderFromHTML",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0)}},{key:"stretchBlock",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.deprecationAssert(!0,"blocks.stretchBlock()","BlockAPI");var n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e)}},{key:"insertNewBlock",value:function(){l.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()}},{key:"methods",get:function(){var t=this;return{clear:function(){return t.clear()},render:function(e){return t.render(e)},renderFromHTML:function(e){return t.renderFromHTML(e)},delete:function(e){return t.delete(e)},swap:function(e,n){return t.swap(e,n)},move:function(e,n){return t.move(e,n)},getBlockByIndex:function(e){return t.getBlockByIndex(e)},getCurrentBlockIndex:function(){return t.getCurrentBlockIndex()},getBlocksCount:function(){return t.getBlocksCount()},stretchBlock:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n)},insertNewBlock:function(){return t.insertNewBlock()},insert:this.insert}}}]),o}((f=p(f)).default);o.default=v,v.displayName="BlocksAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(t){var e={get name(){return t.name},get config(){return t.config},get holder(){return t.holder},get isEmpty(){return t.isEmpty},get selected(){return t.selected},set stretched(e){t.stretched=e},get stretched(){return t.stretched},call:function(e,n){return t.call(e,n)},save:function(){return t.save()},validate:function(e){return t.validate(e)}};Object.setPrototypeOf(this,e)};n.default=o,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0)},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0)},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0)},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0)},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0)},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START)},t}return(0,i.default)(o,[{key:"methods",get:function(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}]),o}((l=u(l)).default);o.default=d,d.displayName="CaretAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e){this.eventsDispatcher.on(t,e)}},{key:"emit",value:function(t,e){this.eventsDispatcher.emit(t,e)}},{key:"off",value:function(t,e){this.eventsDispatcher.off(t,e)}},{key:"methods",get:function(){var t=this;return{emit:function(e,n){return t.emit(e,n)},off:function(e,n){return t.off(e,n)},on:function(e,n){return t.on(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="EventsAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(59),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=d(l);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){return Object.assign(this.methods,{t:function(e){return l.default.t(o.getNamespace(t),e)}})}},{key:"methods",get:function(){return{t:function(){(0,u.logLabeled)("I18n.t() method can be accessed only from Tools","warn")}}}}],[{key:"getNamespace",value:function(t){return t.isTune?"blockTunes.".concat(t.name):"tools.".concat(t.name)}}]),o}((f=d(f)).default);o.default=h,h.displayName="I18nAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.InlineToolbar.tryToShow()}},{key:"close",value:function(){this.Editor.InlineToolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="InlineToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e,n,o){this.listeners.on(t,e,n,o)}},{key:"off",value:function(t,e,n,o){this.listeners.off(t,e,n,o)}},{key:"methods",get:function(){var t=this;return{on:function(e,n,o,r){return t.on(e,n,o,r)},off:function(e,n,o,r){return t.off(e,n,o,r)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ListenersAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){return this.Editor.Notifier.show(t)}},{key:"methods",get:function(){var t=this;return{show:function(e){return t.show(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="NotifierAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggle",value:function(t){return this.Editor.ReadOnly.toggle(t)}},{key:"methods",get:function(){var t=this;return{toggle:function(e){return t.toggle(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ReadOnlyAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"clean",value:function(t,e){return this.Editor.Sanitizer.clean(t,e)}},{key:"methods",get:function(){var t=this;return{clean:function(e,n){return t.clean(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="SanitizerAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(9),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=f(l);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"save",value:function(){var t="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(l.logLabeled(t,"warn"),Promise.reject(new Error(t))):this.Editor.Saver.save()}},{key:"methods",get:function(){var t=this;return{save:function(){return t.save()}}}}]),o}((u=d(u)).default);o.default=h,h.displayName="SaverAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"findParentTag",value:function(t,e){return(new l.default).findParentTag(t,e)}},{key:"expandToTag",value:function(t){(new l.default).expandToTag(t)}},{key:"methods",get:function(){var t=this;return{findParentTag:function(e,n){return t.findParentTag(e,n)},expandToTag:function(e){return t.expandToTag(e)}}}}]),o}((u=f(u)).default);o.default=p,p.displayName="SelectionAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),o}((l=u(l)).default);o.default=d,d.displayName="StylesAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(9),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=d(l),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.Toolbar.open()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"toggleBlockSettings",value:function(t){if(-1!==this.Editor.BlockManager.currentBlockIndex){var e=null!=t?t:!this.Editor.BlockSettings.opened;t!==this.Editor.BlockSettings.opened&&(e?(this.Editor.Toolbar.opened||(this.Editor.Toolbar.open(!0,!1),this.Editor.Toolbar.plusButton.hide()),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close())}else u.logLabeled("Could't toggle the Toolbar because there is no block selected ","warn")}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()},toggleBlockSettings:function(e){return t.toggleBlockSettings(e)}}}}]),o}(l.default);o.default=h,h.displayName="ToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.Editor.Tooltip.show(t,e,n)}},{key:"hide",value:function(){this.Editor.Tooltip.hide()}},{key:"onHover",value:function(t,e,n){this.Editor.Tooltip.onHover(t,e,n)}},{key:"methods",get:function(){var t=this;return{show:function(e,n,o){return t.show(e,n,o)},hide:function(){return t.hide()},onHover:function(e,n,o){return t.onHover(e,n,o)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="TooltipAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(25),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h){"use strict";var v=n(9),y=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=y(r),i=y(i),a=y(a),s=y(s),c=y(c),l=y(l),u=y(u),f=y(f),d=v(d),p=y(p),h=y(h);var b=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(g()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){return(0,a.default)(this,f),o.apply(this,arguments)}return(0,s.default)(f,[{key:"keydown",value:function(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case d.keyCodes.BACKSPACE:this.backspace(t);break;case d.keyCodes.ENTER:this.enter(t);break;case d.keyCodes.DOWN:case d.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case d.keyCodes.UP:case d.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case d.keyCodes.TAB:this.tabPressed(t)}}},{key:"beforeKeydownProcessing",value:function(t){this.needToolbarClosing(t)&&d.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)))}},{key:"keyup",value:function(t){t.shiftKey||this.Editor.UI.checkEmptiness()}},{key:"tabPressed",value:function(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.InlineToolbar,r=e.ConversionToolbar,i=n.currentBlock;if(i){var a=i.tool.isDefault&&i.isEmpty,s=!i.isEmpty&&r.opened,c=!i.isEmpty&&!p.default.isCollapsed&&o.opened;a?this.activateToolbox():s||c||this.activateBlockSettings()}}},{key:"dragOver",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0}},{key:"dragLeave",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1}},{key:"handleCommandC",value:function(t){var e=this.Editor.BlockSelection;if(e.anyBlockSelected)return e.copySelectedBlocks(t)}},{key:"handleCommandX",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockSelection,i=n.BlockManager,a=n.Caret,o.anyBlockSelected){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,o.copySelectedBlocks(e);case 5:s=i.removeSelectedBlocks(),a.setToBlock(i.insertDefaultBlockAtIndex(s,!0),a.positions.START),o.clearSelection(e);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"enter",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.UI;if(!n.currentBlock.tool.isLineBreaksEnabled&&!(o.someToolbarOpened&&o.someFlipperButtonFocused||t.shiftKey)){var r=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):r=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(r),r.tool.isDefault&&r.isEmpty&&(this.Editor.Toolbar.open(!1),this.Editor.Toolbar.plusButton.show()),t.preventDefault()}}},{key:"backspace",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.currentBlock,a=i.tool;if(i.selected||i.isEmpty&&i.currentInput===i.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),r.setToBlock(n.currentBlock,s?r.positions.END:r.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t)}if(!a.isLineBreaksEnabled||r.isAtStart){var c=0===n.currentBlockIndex;r.isAtStart&&p.default.isCollapsed&&i.currentInput===i.firstInput&&!c&&(t.preventDefault(),this.mergeBlocks())}}},{key:"mergeBlocks",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,r=e.previousBlock,i=e.currentBlock;if(i.name!==r.name||!r.mergeable)return 0===r.inputs.length||r.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(r.pluginsContent),e.mergeBlocks(r,i).then((function(){n.restoreCaret(r.pluginsContent),r.pluginsContent.normalize(),o.close()}))}},{key:"arrowRightAndDown",value:function(t){var e=this,n=h.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===d.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===d.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():((t.keyCode===d.keyCodes.DOWN||t.keyCode===d.keyCodes.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?t.preventDefault():d.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}}},{key:"arrowLeftAndUp",value:function(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(h.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===d.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===d.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):((t.keyCode===d.keyCodes.UP||t.keyCode===d.keyCodes.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?t.preventDefault():d.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}},{key:"needToolbarClosing",value:function(t){var e=t.keyCode===d.keyCodes.ENTER&&this.Editor.Toolbox.opened,n=t.keyCode===d.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===d.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,r=t.keyCode===d.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,i=t.keyCode===d.keyCodes.TAB;return!(t.shiftKey||i||e||n||o||r)}},{key:"activateToolbox",value:function(){this.Editor.Toolbar.opened||(this.Editor.Toolbar.open(!1,!1),this.Editor.Toolbar.plusButton.show()),this.Editor.Toolbox.open()}},{key:"activateBlockSettings",value:function(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.open(!0,!1),this.Editor.Toolbar.plusButton.hide()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}]),f}(f.default);o.default=b,b.displayName="BlockEvents",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(61),n(7),n(15),n(8),n(376)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(9),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=y(f),d=g(d),p=g(p),h=y(h),v=g(v);var m=function(t){(0,c.default)(y,t);var e,n,o,d=(e=y,function(){var t,n=(0,u.default)(e);if(b()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function y(){var t;return(0,a.default)(this,y),(t=d.apply(this,arguments))._currentBlockIndex=-1,t._blocks=null,t}return(0,s.default)(y,[{key:"prepare",value:function(){var t=this,e=new v.default(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(e,{set:v.default.set,get:v.default.get}),this.listeners.on(document,"copy",(function(e){return t.Editor.BlockEvents.handleCommandC(e)}))}},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"composeBlock",value:function(t){var e=t.tool,n=t.data,o=void 0===n?{}:n,r=t.tunes,i=void 0===r?{}:r,a=this.Editor.ReadOnly.isEnabled,s=this.Editor.Tools.blockTools.get(e),c=this.Editor.Tools.getTunesForTool(s),l=new f.default({data:o,tool:s,api:this.Editor.API,readOnly:a,tunes:c,tunesData:i});return a||this.bindBlockEvents(l),l}},{key:"insert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o,i=t.index,a=t.needToFocus,s=void 0===a||a,c=t.replace,l=void 0!==c&&c,u=t.tunes,f=void 0===u?{}:u,d=i;void 0===d&&(d=this.currentBlockIndex+(l?0:1));var p=this.composeBlock({tool:n,data:r,tunes:f});return this._blocks.insert(d,p,l),s?this.currentBlockIndex=d:d<=this.currentBlockIndex&&this.currentBlockIndex++,p}},{key:"replace",value:function(t){var e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o;return this.insert({tool:n,data:r,index:this.currentBlockIndex,replace:!0})}},{key:"paste",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.insert({tool:t,replace:n});try{o.call(f.BlockToolAPI.ON_PASTE,e)}catch(e){h.log("".concat(t,": onPaste callback call is failed"),"error",e)}return o}},{key:"insertDefaultBlockAtIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[t]=n,e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:(o=(0,i.default)(r.default.mark((function t(e,n){var o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this._blocks.indexOf(n),!n.isEmpty){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.data;case 5:if(i=t.sent,h.isEmpty(i)){t.next=9;break}return t.next=9,e.mergeWith(i);case 9:this.removeBlock(o),this.currentBlockIndex=this._blocks.indexOf(e);case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"removeBlock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentBlockIndex;if(!this.validateIndex(t))throw new Error("Can't find a Block to remove");this._blocks.remove(t),this.currentBlockIndex>=t&&this.currentBlockIndex--,this.blocks.length?0===t&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,this.insert())}},{key:"removeSelectedBlocks",value:function(){for(var t,e=this.blocks.length-1;e>=0;e--)this.blocks[e].selected&&(this.removeBlock(e),t=e);return t}},{key:"removeAllBlocks",value:function(){for(var t=this.blocks.length-1;t>=0;t--)this._blocks.remove(t);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()}},{key:"split",value:function(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=p.default.make("div");e.appendChild(t);var n={text:p.default.isEmpty(e)?"":e.innerHTML};return this.insert({data:n})}},{key:"getBlockByIndex",value:function(t){return this._blocks[t]}},{key:"getBlock",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(f.default.CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o]}},{key:"highlightCurrentNode",value:function(){this.clearFocused(),this.currentBlock.focused=!0}},{key:"clearFocused",value:function(){this.blocks.forEach((function(t){t.focused=!1}))}},{key:"setCurrentBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));if(e){var n=e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));if(null==n?void 0:n.isEqualNode(this.Editor.UI.nodes.wrapper))return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock.updateCurrentInput(),this.currentBlock}}},{key:"getBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));return this.blocks.find((function(t){return t.holder===e}))}},{key:"swap",value:function(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?h.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t):h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearFocused()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(),this.Editor.UI.checkEmptiness()}},{key:"destroy",value:(n=(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.blocks.map((function(t){return t.destroy()})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"bindBlockEvents",value:function(t){var e=this.Editor.BlockEvents;this.readOnlyMutableListeners.on(t.holder,"keydown",(function(t){e.keydown(t)})),this.readOnlyMutableListeners.on(t.holder,"keyup",(function(t){e.keyup(t)})),this.readOnlyMutableListeners.on(t.holder,"dragover",(function(t){e.dragOver(t)})),this.readOnlyMutableListeners.on(t.holder,"dragleave",(function(t){e.dragLeave(t)}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(document,"cut",(function(e){return t.Editor.BlockEvents.handleCommandX(e)})),this.blocks.forEach((function(e){t.bindBlockEvents(e)}))}},{key:"validateIndex",value:function(t){return!(t<0||t>=this._blocks.length)}},{key:"currentBlockIndex",get:function(){return this._currentBlockIndex},set:function(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t}},{key:"firstBlock",get:function(){return this._blocks[0]}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find((function(t){return!!t.inputs.length}))}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((function(t){return!!t.inputs.length}))}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}},{key:"isEditorEmpty",get:function(){return this.blocks.every((function(t){return t.isEmpty}))}}]),y}(d.default);o.default=m,m.displayName="BlockManager",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(15),n(108),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(9),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=g(f),d=y(d),p=g(p),h=g(h),v=g(v);var m=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(b()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).anyBlockSelectedCache=null,t.needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t}return(0,s.default)(f,[{key:"prepare",value:function(){var t=this;this.selection=new v.default,h.default.add({name:"CMD+A",handler:function(e){var n=t.Editor,o=n.BlockManager;if(n.ReadOnly.isEnabled)return e.preventDefault(),void t.selectAllBlocks();o.currentBlock&&t.handleCommandA(e)},on:this.Editor.UI.nodes.redactor})}},{key:"toggleReadOnly",value:function(t){v.default.get().removeAllRanges(),this.allBlocksSelected=!1}},{key:"unSelectBlockByIndex",value:function(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1,this.clearCache()}},{key:"clearSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.RectangleSelection;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;var a=t&&t instanceof KeyboardEvent,s=a&&d.isPrintableKey(t.keyCode);if(this.anyBlockSelected&&a&&s&&!v.default.isSelectionExists){var c=o.removeSelectedBlocks();o.insertDefaultBlockAtIndex(c,!0),r.setToBlock(o.currentBlock),d.delay((function(){var e=t.key;r.insertContentAtCaretPosition(e.length>1?"":e)}),20)()}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!i.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}},{key:"copySelectedBlocks",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=p.default.make("div"),this.selectedBlocks.forEach((function(t){var e=s.Editor.Sanitizer.clean(t.holder.innerHTML,s.sanitizerConfig),o=p.default.make("p");o.innerHTML=e,n.appendChild(o)})),t.next=5,Promise.all(this.selectedBlocks.map((function(t){return t.save()})));case 5:o=t.sent,i=Array.from(n.childNodes).map((function(t){return t.textContent})).join("\n\n"),a=n.innerHTML,e.clipboardData.setData("text/plain",i),e.clipboardData.setData("text/html",a),e.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(o));case 11:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"selectBlockByIndex",value:function(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),v.default.get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()}},{key:"clearCache",value:function(){this.anyBlockSelectedCache=null}},{key:"destroy",value:function(){h.default.remove(this.Editor.UI.nodes.redactor,"CMD+A")}},{key:"handleCommandA",value:function(t){if(this.Editor.RectangleSelection.clearSelection(),!p.default.isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0}else this.readyToBlockSelection=!0}},{key:"selectAllBlocks",value:function(){this.selection.save(),v.default.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},{key:"sanitizerConfig",get:function(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}},{key:"allBlocksSelected",get:function(){return this.Editor.BlockManager.blocks.every((function(t){return!0===t.selected}))},set:function(t){this.Editor.BlockManager.blocks.forEach((function(e){e.selected=t})),this.clearCache()}},{key:"anyBlockSelected",get:function(){var t=this.Editor.BlockManager;return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=t.blocks.some((function(t){return!0===t.selected}))),this.anyBlockSelectedCache}},{key:"selectedBlocks",get:function(){return this.Editor.BlockManager.blocks.filter((function(t){return t.selected}))}}]),f}(f.default);o.default=m,m.displayName="BlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(9),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(v()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"setToBlock",value:function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput}if(e){var a=f.default.getDeepestNode(e,o===this.positions.END),s=f.default.getContentLength(a);switch(!0){case o===this.positions.START:r=0;break;case o===this.positions.END:case r>s:r=s}d.delay((function(){n.set(a,r)}),20)(),i.setCurrentBlockByChildNode(t.holder),i.currentBlock.currentInput=e}}},{key:"setToInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,r=f.default.getDeepestNode(t);switch(e){case this.positions.START:this.set(r,0);break;case this.positions.END:this.set(r,f.default.getContentLength(r));break;default:n&&this.set(r,n)}o.currentInput=t}},{key:"set",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=l.default.setCursor(t,e),o=n.top,r=n.bottom,i=window,a=i.innerHeight;o<0&&window.scrollBy(0,o),r>a&&window.scrollBy(0,r-a)}},{key:"setToTheLastBlock",value:function(){var t=this.Editor.BlockManager.lastBlock;if(t)if(t.tool.isDefault&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e)}}},{key:"extractFragmentFromCaretPosition",value:function(){var t=l.default.get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){if(f.default.isNativeInput(n)){var o=n,r=document.createDocumentFragment(),i=o.value.substring(0,o.selectionStart),a=o.value.substring(o.selectionStart);return r.textContent=a,o.value=i,r}var s=e.cloneRange();return s.selectNodeContents(n),s.setStart(e.endContainer,e.endOffset),s.extractContents()}}}},{key:"navigateNext",value:function(){var t=this.Editor,e=t.BlockManager,n=(t.Tools,e.currentBlock),o=e.nextContentfulBlock,r=n.nextInput,i=this.isAtEnd,a=o;if(!a&&!r){if(n.tool.isDefault||!i)return!1;a=e.insertAtEnd()}return!!i&&(r?this.setToInput(r,this.positions.START):this.setToBlock(a,this.positions.START),!0)}},{key:"navigatePrevious",value:function(){var t=this.Editor.BlockManager,e=t.currentBlock,n=t.previousContentfulBlock;if(!e)return!1;var o=e.previousInput;return!(!n&&!o||!this.isAtStart||(o?this.setToInput(o,this.positions.END):this.setToBlock(n,this.positions.END),0))}},{key:"createShadow",value:function(t){var e=document.createElement("span");e.classList.add(o.CSS.shadowCaret),t.insertAdjacentElement("beforeend",e)}},{key:"restoreCaret",value:function(t){var e=t.querySelector(".".concat(o.CSS.shadowCaret));e&&((new l.default).expandToTag(e),setTimeout((function(){var t=document.createRange();t.selectNode(e),t.extractContents()}),50))}},{key:"insertContentAtCaretPosition",value:function(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=l.default.get(),r=l.default.range;n.innerHTML=t,Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),0===e.childNodes.length&&e.appendChild(new Text(""));var i=e.lastChild;r.deleteContents(),r.insertNode(e);var a=document.createRange();a.setStart(i,i.textContent.length),o.removeAllRanges(),o.addRange(a)}},{key:"getHigherLevelSiblings",value:function(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;for(var r="left"===e?"previousSibling":"nextSibling";n[r];)n=n[r],o.push(n);return o}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}},{key:"isAtStart",get:function(){var t=l.default.get(),e=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f.default.isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var r=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[r]?(n=n.childNodes[r],r=0):r=(n=n.childNodes[r-1]).textContent.length),!(!f.default.isLineBreakTag(e)&&!f.default.isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every((function(t){var e=f.default.isLineBreakTag(t),n=1===t.children.length&&f.default.isLineBreakTag(t.children[0]),o=e||n;return f.default.isEmpty(t)&&!o}))||r!==o)||(null===e||n===e&&r<=o)}},{key:"isAtEnd",get:function(){var t=l.default.get(),e=t.focusNode,n=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f.default.isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f.default.isLineBreakTag(n)||f.default.isEmpty(n)){var r=this.getHigherLevelSiblings(e,"right");if(r.every((function(t,e){return e===r.length-1&&f.default.isLineBreakTag(t)||f.default.isEmpty(t)&&!f.default.isLineBreakTag(t)}))&&o===e.textContent.length)return!0}var i=n.textContent.replace(/\s+$/,"");return e===n&&o>=i.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}}]),o}(u.default);o.default=y,y.displayName="Caret",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(25),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(9),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=v(d),p=h(p);var g=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(y()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).onMouseUp=function(){t.listeners.off(document,"mouseover",t.onMouseOver),t.listeners.off(document,"mouseup",t.onMouseUp)},t.onMouseOver=function(e){var n=t.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,a=o.getBlockByChildNode(e.target);if(i&&a&&a!==i){if(i===t.firstSelectedBlock)return d.default.get().removeAllRanges(),i.selected=!0,a.selected=!0,void r.clearCache();if(a===t.firstSelectedBlock)return i.selected=!1,a.selected=!1,void r.clearCache();t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(i,a),t.lastSelectedBlock=a}},t}return(0,s.default)(f,[{key:"prepare",value:(n=(0,i.default)(r.default.mark((function t(){var e=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.listeners.on(document,"mousedown",(function(t){e.enableCrossBlockSelection(t)}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"watchSelection",value:function(t){if(t.button===p.mouseButtons.LEFT){var e=this.Editor.BlockManager;this.firstSelectedBlock=e.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp)}}},{key:"toggleBlockSelectedState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor,n=e.BlockManager,o=e.BlockSelection;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=n.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,o.clearCache(),d.default.get().removeAllRanges());var r=n.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),i=n.blocks[r];i&&(this.lastSelectedBlock.selected!==i.selected?(i.selected=!0,o.clearCache()):(this.lastSelectedBlock.selected=!1,o.clearCache()),this.lastSelectedBlock=i,this.Editor.InlineToolbar.close(),i.holder.scrollIntoView({block:"nearest"}))}},{key:"clear",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&i>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case p.keyCodes.DOWN:case p.keyCodes.RIGHT:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);break;case p.keyCodes.UP:case p.keyCodes.LEFT:r.setToBlock(n.blocks[Math.min(i,a)],r.positions.START);break;default:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END)}else r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null}},{key:"enableCrossBlockSelection",value:function(t){var e=this.Editor.UI;d.default.isCollapsed||this.Editor.BlockSelection.clearSelection(t),e.nodes.redactor.contains(t.target)?this.watchSelection(t):this.Editor.BlockSelection.clearSelection(t)}},{key:"toggleBlocksSelectedState",value:function(t,e){for(var n=this.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.blocks.indexOf(t),a=o.blocks.indexOf(e),s=t.selected!==e.selected,c=Math.min(i,a);c<=Math.max(i,a);c++){var l=o.blocks[c];l!==this.firstSelectedBlock&&l!==(s?t:e)&&(o.blocks[c].selected=!o.blocks[c].selected,r.clearCache())}}},{key:"isCrossBlockSelectionStarted",get:function(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}}]),f}(f.default);o.default=g,g.displayName="CrossBlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f);var v=function(t){(0,c.default)(d,t);var e,n,o=(e=d,function(){var t,n=(0,u.default)(e);if(h()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function d(){var t;return(0,a.default)(this,d),(t=o.apply(this,arguments)).isStartedAtEditor=!1,t}return(0,s.default)(d,[{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.UI;this.readOnlyMutableListeners.on(e.nodes.holder,"drop",function(){var e=(0,i.default)(r.default.mark((function e(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.processDrop(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",(function(){t.processDragStart()})),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",(function(e){t.processDragOver(e)}),!0)}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"processDrop",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach((function(t){t.dropTarget=!1})),f.default.isAtEditor&&!f.default.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1,(s=o.setCurrentBlockByChildNode(e.target))?this.Editor.Caret.setToBlock(s,i.positions.END):(c=o.setCurrentBlockByChildNode(o.lastBlock.holder),this.Editor.Caret.setToBlock(c,i.positions.END)),t.next=9,a.processDataTransfer(e.dataTransfer,!0);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"processDragStart",value:function(){f.default.isAtEditor&&!f.default.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()}},{key:"processDragOver",value:function(t){t.preventDefault()}}]),d}((d=p(d)).default);o.default=v,v.displayName="DragNDrop",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(9),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=d(u),f=p(f);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).disabled=!1,t.mutationDebouncer=u.debounce((function(){t.updateNativeInputs(),u.isFunction(t.config.onChange)&&t.config.onChange(t.Editor.API.methods)}),o.DebounceTimer),t.nativeInputs=[],t}return(0,i.default)(o,[{key:"destroy",value:function(){var t=this;this.mutationDebouncer=null,this.observer&&this.observer.disconnect(),this.observer=null,this.nativeInputs.forEach((function(e){return t.listeners.off(e,"input",t.mutationDebouncer)})),this.mutationDebouncer=null}},{key:"toggleReadOnly",value:function(t){t?this.disableModule():this.enableModule()}},{key:"disable",value:function(){this.disabled=!0}},{key:"enable",value:function(){this.disabled=!1}},{key:"setObserver",value:function(){var t=this,e=this.Editor.UI;this.observer=new MutationObserver((function(e,n){t.mutationHandler(e,n)})),this.observer.observe(e.nodes.redactor,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t,e){if(!this.disabled){var n=!1;t.forEach((function(t){switch(t.type){case"childList":case"characterData":n=!0;break;case"attributes":t.target.classList.contains(f.default.CSS.wrapper)||(n=!0)}})),n&&this.mutationDebouncer()}}},{key:"updateNativeInputs",value:function(){var t=this;this.nativeInputs&&this.nativeInputs.forEach((function(e){t.listeners.off(e,"input")})),this.nativeInputs=Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")),this.nativeInputs.forEach((function(e){return t.listeners.on(e,"input",t.mutationDebouncer)}))}},{key:"enableModule",value:function(){var t=this;window.setTimeout((function(){t.setObserver(),t.updateNativeInputs(),t.enable()}),1e3)}},{key:"disableModule",value:function(){this.disable()}}]),o}(l.default);o.default=v,v.displayName="ModificationsObserver",v.DebounceTimer=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(378)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){u.default.show(t)}}]),o}(l.default);o.default=p,p.displayName="Notifier",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(29),n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(9),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=g(f),d=g(d),p=g(p),h=g(h),v=y(v);var m=function(t){(0,u.default)(S,t);var e,n,o,p,y,g,m,k,x,w=(e=S,function(){var t,n=(0,d.default)(e);if(b()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function S(){var t;return(0,c.default)(this,S),(t=w.apply(this,arguments)).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){try{var n=e.create({},{},!1);if(!1===e.pasteConfig)return void t.exceptionList.push(e.name);if(!v.isFunction(n.onPaste))return;t.getTagsConfig(e),t.getFilesConfig(e),t.getPatternsConfig(e)}catch(t){v.log("Paste handling for «".concat(e.name,"» Tool hasn't been set up because of the error"),"warn",t)}},t.handlePasteEvent=function(){var e=(0,s.default)(a.default.mark((function e(n){var o,r,i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.Editor,r=o.BlockManager,i=o.Toolbar,r.currentBlock&&(!t.isNativeBehaviour(n.target)||n.clipboardData.types.includes("Files"))){e.next=3;break}return e.abrupt("return");case 3:if(!r.currentBlock||!t.exceptionList.includes(r.currentBlock.name)){e.next=5;break}return e.abrupt("return");case 5:n.preventDefault(),t.processDataTransfer(n.clipboardData),r.clearFocused(),i.close();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return(0,l.default)(S,[{key:"prepare",value:(x=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.processTools();case 1:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.unsetCallback():this.setCallback()}},{key:"processDataTransfer",value:(k=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s,c,l,u,f,d=arguments;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor.Sanitizer,!((r=e.types).includes?r.includes("Files"):r.contains("Files"))){t.next=8;break}return t.next=7,this.processFiles(e.files);case 7:return t.abrupt("return");case 8:if(i=e.getData(this.MIME_TYPE),s=e.getData("text/plain"),c=e.getData("text/html"),!i){t.next=19;break}return t.prev=12,this.insertEditorJSData(JSON.parse(i)),t.abrupt("return");case 17:t.prev=17,t.t0=t.catch(12);case 19:if(n&&s.trim()&&c.trim()&&(c="<p>"+(c.trim()?c:s)+"</p>"),l=Object.keys(this.toolsTags).reduce((function(t,e){return t[e.toLowerCase()]=!0,t}),{}),u=Object.assign({},l,o.getAllInlineToolsConfig(),{br:{}}),(f=o.clean(c,u)).trim()&&f.trim()!==s&&h.default.isHTMLString(f)){t.next=28;break}return t.next=26,this.processText(s);case 26:t.next=30;break;case 28:return t.next=30,this.processText(f,!0);case 30:case"end":return t.stop()}}),t,this,[[12,17]])}))),function(t){return k.apply(this,arguments)})},{key:"processText",value:(m=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,c,l,u,f=this,d=arguments;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor,r=o.Caret,i=o.BlockManager,(c=n?this.processHTML(e):this.processPlain(e)).length){t.next=5;break}return t.abrupt("return");case 5:if(1!==c.length){t.next=8;break}return c[0].isBlock?this.processSingleBlock(c.pop()):this.processInlinePaste(c.pop()),t.abrupt("return");case 8:l=i.currentBlock&&i.currentBlock.tool.isDefault,u=l&&i.currentBlock.isEmpty,c.map(function(){var t=(0,s.default)(a.default.mark((function t(e,n){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.insertBlock(e,0===n&&u));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),i.currentBlock&&r.setToBlock(i.currentBlock,r.positions.END);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"setCallback",value:function(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"unsetCallback",value:function(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var t=this.Editor.Tools.blockTools;Array.from(t.values()).forEach(this.processTool)}},{key:"getTagsConfig",value:function(t){var e=this,n=t.pasteConfig.tags||[];n.forEach((function(n){Object.prototype.hasOwnProperty.call(e.toolsTags,n)?v.log("Paste handler for «".concat(t.name,"» Tool on «").concat(n,"» tag is skipped ")+"because it is already used by «".concat(e.toolsTags[n].tool.name,"» Tool."),"warn"):e.toolsTags[n.toUpperCase()]={tool:t}})),this.tagsByTool[t.name]=n.map((function(t){return t.toUpperCase()}))}},{key:"getFilesConfig",value:function(t){var e=t.pasteConfig.files,n=void 0===e?{}:e,o=n.extensions,r=n.mimeTypes;(o||r)&&(o&&!Array.isArray(o)&&(v.log("«extensions» property of the onDrop config for «".concat(t.name,"» Tool should be an array")),o=[]),r&&!Array.isArray(r)&&(v.log("«mimeTypes» property of the onDrop config for «".concat(t.name,"» Tool should be an array")),r=[]),r&&(r=r.filter((function(e){return!!v.isValidMimeType(e)||(v.log("MIME type value «".concat(e,"» for the «").concat(t.name,"» Tool is not a valid MIME type"),"warn"),!1)}))),this.toolsFiles[t.name]={extensions:o||[],mimeTypes:r||[]})}},{key:"getPatternsConfig",value:function(t){var e=this;t.pasteConfig.patterns&&!v.isEmpty(t.pasteConfig.patterns)&&Object.entries(t.pasteConfig.patterns).forEach((function(n){var o=(0,i.default)(n,2),r=o[0],a=o[1];a instanceof RegExp||v.log("Pattern ".concat(a," for «").concat(t.name,"» Tool is skipped because it should be a Regexp instance."),"warn"),e.toolsPatterns.push({key:r,pattern:a,tool:t})}))}},{key:"isNativeBehaviour",value:function(t){return h.default.isNativeInput(t)}},{key:"processFiles",value:(g=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager,t.next=3,Promise.all(Array.from(e).map((function(t){return s.processFile(t)})));case 3:o=(o=t.sent).filter((function(t){return!!t})),r=n.currentBlock.tool.isDefault,i=r&&n.currentBlock.isEmpty,o.forEach((function(t,e){n.paste(t.type,t.event,0===e&&i)}));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"processFile",value:(y=(0,s.default)(a.default.mark((function t(e){var n,o,r,s,c;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.getFileExtension(e),o=Object.entries(this.toolsFiles).find((function(t){var o=(0,i.default)(t,2),r=(o[0],o[1]),a=r.mimeTypes,s=r.extensions,c=e.type.split("/"),l=(0,i.default)(c,2),u=l[0],f=l[1],d=s.find((function(t){return t.toLowerCase()===n.toLowerCase()})),p=a.find((function(t){var e=t.split("/"),n=(0,i.default)(e,2),o=n[0],r=n[1];return o===u&&(r===f||"*"===r)}));return!!d||!!p}))){t.next=4;break}return t.abrupt("return");case 4:return r=(0,i.default)(o,1),s=r[0],c=this.composePasteEvent("file",{file:e}),t.abrupt("return",{event:c,type:s});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"processHTML",value:function(t){var e=this,n=this.Editor,o=n.Tools,r=n.Sanitizer,i=h.default.make("DIV");return i.innerHTML=t,this.getNodes(i).map((function(t){var n,i=o.defaultTool,a=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(n=h.default.make("div")).appendChild(t);break;case Node.ELEMENT_NODE:n=t,a=!0,e.toolsTags[n.tagName]&&(i=e.toolsTags[n.tagName].tool)}var s=i.pasteConfig.tags.reduce((function(t,e){return t[e.toLowerCase()]={},t}),{}),c=Object.assign({},s,r.getInlineToolsConfig(i));n.innerHTML=r.clean(n.innerHTML,c);var l=e.composePasteEvent("tag",{data:n});return{content:n,isBlock:a,tool:i.name,event:l}})).filter((function(t){return!h.default.isNodeEmpty(t.content)||h.default.isSingleTag(t.content)}))}},{key:"processPlain",value:function(t){var e=this,n=this.config.defaultBlock;if(!t)return[];var o=n;return t.split(/\r?\n/).filter((function(t){return t.trim()})).map((function(t){var n=h.default.make("div");n.textContent=t;var r=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:r}}))}},{key:"processSingleBlock",value:(p=(0,s.default)(a.default.mark((function t(e){var n,o,r,i;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Caret,r=n.BlockManager,(i=r.currentBlock)&&e.tool===i.name&&h.default.containsOnlyInlineElements(e.content.innerHTML)){t.next=5;break}return this.insertBlock(e,(null==i?void 0:i.tool.isDefault)&&i.isEmpty),t.abrupt("return");case 5:o.insertContentAtCaretPosition(e.content.innerHTML);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"processInlinePaste",value:(o=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s,c,l,u,f;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.Sanitizer,s=e.content,!(o.currentBlock&&o.currentBlock.tool.isDefault&&s.textContent.length<S.PATTERN_PROCESSING_MAX_LENGTH)){t.next=12;break}return t.next=6,this.processPattern(s.textContent);case 6:if(!(c=t.sent)){t.next=12;break}return l=o.currentBlock&&o.currentBlock.tool.isDefault&&o.currentBlock.isEmpty,u=o.paste(c.tool,c.event,l),r.setToBlock(u,r.positions.END),t.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(f=i.getInlineToolsConfig(o.currentBlock.tool),document.execCommand("insertHTML",!1,i.clean(s.innerHTML,f))):this.insertBlock(e);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"processPattern",value:(n=(0,s.default)(a.default.mark((function t(e){var n,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.toolsPatterns.find((function(t){var n=t.pattern.exec(e);return!!n&&e===n.shift()}))){t.next=3;break}return t.abrupt("return");case 3:return o=this.composePasteEvent("pattern",{key:n.key,data:e}),t.abrupt("return",{event:o,tool:n.tool.name});case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"insertBlock",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,r=o.BlockManager,i=o.Caret,a=r.currentBlock;if(n&&a&&a.isEmpty)return e=r.paste(t.tool,t.event,!0),void i.setToBlock(e,i.positions.END);e=r.paste(t.tool,t.event),i.setToBlock(e,i.positions.END)}},{key:"insertEditorJSData",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Caret;e.Sanitizer.sanitizeBlocks(t).forEach((function(t,e){var r=t.tool,i=t.data,a=!1;0===e&&(a=n.currentBlock&&n.currentBlock.tool.isDefault&&n.currentBlock.isEmpty);var s=n.insert({tool:r,data:i,replace:a});o.setToBlock(s,o.positions.END)}))}},{key:"processElementNode",value:function(t,e,n){var o=Object.keys(this.toolsTags),i=t,a=(this.toolsTags[i.tagName]||{}).tool,s=this.tagsByTool[null==a?void 0:a.name]||[],c=o.includes(i.tagName),l=h.default.blockElements.includes(i.tagName.toLowerCase()),u=Array.from(i.children).some((function(t){var e=t.tagName;return o.includes(e)&&!s.includes(e)})),f=Array.from(i.children).some((function(t){var e=t.tagName;return h.default.blockElements.includes(e.toLowerCase())}));return l||c||u?c&&!u||l&&!f&&!u?[].concat((0,r.default)(e),[n,i]):void 0:(n.appendChild(i),[].concat((0,r.default)(e),[n]))}},{key:"getNodes",value:function(t){var e,n=this;return Array.from(t.childNodes).reduce((function t(o,i){if(h.default.isEmpty(i)&&!h.default.isSingleTag(i))return o;var a=o[o.length-1],s=new DocumentFragment;switch(a&&h.default.isFragment(a)&&(s=o.pop()),i.nodeType){case Node.ELEMENT_NODE:if(e=n.processElementNode(i,o,s))return e;break;case Node.TEXT_NODE:return s.appendChild(i),[].concat((0,r.default)(o),[s]);default:return[].concat((0,r.default)(o),[s])}return[].concat((0,r.default)(o),(0,r.default)(Array.from(i.childNodes).reduce(t,[])))}),[])}},{key:"composePasteEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}}]),S}(p.default);o.default=m,m.displayName="Paste",m.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(29),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(145)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f);var y=function(t){(0,l.default)(h,t);var e,n,o,d=(e=h,function(){var t,n=(0,f.default)(e);if(v()){var o=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function h(){var t;return(0,s.default)(this,h),(t=d.apply(this,arguments)).toolsDontSupportReadOnly=[],t.readOnlyEnabled=!1,t}return(0,c.default)(h,[{key:"prepare",value:(o=(0,a.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.Editor.Tools,n=e.blockTools,o=[],Array.from(n.entries()).forEach((function(t){var e=(0,i.default)(t,2),n=e[0];e[1].isReadOnlySupported||o.push(n)})),this.toolsDontSupportReadOnly=o,this.config.readOnly&&o.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly);case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggle",value:(n=(0,a.default)(r.default.mark((function t(){var e,n,o,i,a=arguments;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=a.length>0&&void 0!==a[0]?a[0]:!this.readOnlyEnabled)&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError(),n=this.readOnlyEnabled,this.readOnlyEnabled=e,t.t0=r.default.keys(this.Editor);case 5:if((t.t1=t.t0()).done){t.next=12;break}if(o=t.t1.value,this.Editor[o].toggleReadOnly){t.next=9;break}return t.abrupt("continue",5);case 9:this.Editor[o].toggleReadOnly(e),t.next=5;break;case 12:if(n!==e){t.next=14;break}return t.abrupt("return",this.readOnlyEnabled);case 14:return t.next=16,this.Editor.Saver.save();case 16:return i=t.sent,t.next=19,this.Editor.BlockManager.clear();case 19:return t.next=21,this.Editor.Renderer.render(i.blocks);case 21:return t.abrupt("return",this.readOnlyEnabled);case 22:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"throwCriticalError",value:function(){throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", ")," don't support read-only mode."))}},{key:"isEnabled",get:function(){return this.readOnlyEnabled}}]),h}((d=h(d)).default);o.default=y,y.displayName="ReadOnly",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f),d=p(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t.listenerIds=[],t}return(0,i.default)(o,[{key:"prepare",value:function(){this.enableModuleBindings()}},{key:"startSelection",value:function(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d.default.CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],r=n.closest("."+this.Editor.UI.CSS.editorWrapper),i=o.some((function(t){return!!n.closest(t)}));r&&!i&&(this.mousedown=!0,this.startX=t,this.startY=e)}},{key:"endSelection",value:function(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}},{key:"isRectActivated",value:function(){return this.isRectSelectionActivated}},{key:"clearSelection",value:function(){this.isRectSelectionActivated=!1}},{key:"enableModuleBindings",value:function(){var t=this,e=this.genHTML().container;this.listeners.on(e,"mousedown",(function(e){t.processMouseDown(e)}),!1),this.listeners.on(document.body,"mousemove",(function(e){t.processMouseMove(e)}),!1),this.listeners.on(document.body,"mouseleave",(function(){t.processMouseLeave()})),this.listeners.on(window,"scroll",(function(e){t.processScroll(e)}),!1),this.listeners.on(document.body,"mouseup",(function(){t.processMouseUp()}),!1)}},{key:"processMouseDown",value:function(t){t.button===this.MAIN_MOUSE_BUTTON&&this.startSelection(t.pageX,t.pageY)}},{key:"processMouseMove",value:function(t){this.changingRectangle(t),this.scrollByZones(t.clientY)}},{key:"processMouseLeave",value:function(){this.clearSelection(),this.endSelection()}},{key:"processScroll",value:function(t){this.changingRectangle(t)}},{key:"processMouseUp",value:function(){this.endSelection()}},{key:"scrollByZones",value:function(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}},{key:"genHTML",value:function(){var t=this.Editor.UI,e=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),n=u.default.make("div",o.CSS.overlay,{}),r=u.default.make("div",o.CSS.overlayContainer,{}),i=u.default.make("div",o.CSS.rect,{});return r.appendChild(i),n.appendChild(r),e.appendChild(n),this.overlayRectangle=i,{container:e,overlay:n}}},{key:"scrollVertical",value:function(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout((function(){e.scrollVertical(t)}),0)}}},{key:"changingRectangle",value:function(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,r=e.index,i=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(i||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),void 0!==r&&(this.trySelectNextBlock(r),this.inverseSelection(),f.default.get().removeAllRanges(),t.preventDefault())}}},{key:"shrinkRectangleToPoint",value:function(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px")}},{key:"inverseSelection",value:function(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e,n=h(this.stackOfSelected);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.Editor.BlockSelection.selectBlockByIndex(o)}}catch(t){n.e(t)}finally{n.f()}}if(!this.rectCrossesBlocks&&t){var r,i=h(this.stackOfSelected);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.Editor.BlockSelection.unSelectBlockByIndex(a)}}catch(t){i.e(t)}finally{i.f()}}}},{key:"updateRectangleSize",value:function(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"))}},{key:"genInfoForMouseSelection",value:function(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),r=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==r&&(t=this.Editor.BlockManager.blocks.findIndex((function(t){return t.holder===r.holder})));var i=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d.default.CSS.content),a=Number.parseInt(window.getComputedStyle(i).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a}}},{key:"addBlockInSelection",value:function(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t)}},{key:"trySelectNextBlock",value:function(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var r=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,i=0;o>1&&(i=r?1:-1);var a=t>this.stackOfSelected[o-1]&&1===i,s=t<this.stackOfSelected[o-1]&&-1===i,c=!(a||s||0===i);if(c||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!c&&t<this.stackOfSelected[o-1])for(var l=this.stackOfSelected[o-1]-1;l>=t;l--)this.addBlockInSelection(l);else if(c){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f]}:function(){return t<e.stackOfSelected[f]};u();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++)this.addBlockInSelection(d)}}}],[{key:"CSS",get:function(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}}]),o}(l.default);o.default=g,g.displayName="RectangleSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(9),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"render",value:(o=(0,i.default)(r.default.mark((function t(e){var n,o,i=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return{function:function(){return i.insertBlock(t)}}})),t.next=3,d.sequence(n);case 3:return o=t.sent,this.Editor.UI.checkEmptiness(),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"insertBlock",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c,l,u;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Tools,i=n.BlockManager,a=e.type,s=e.data,c=e.tunes,!o.available.has(a)){t.next=13;break}t.prev=3,i.insert({tool:a,data:s,tunes:c}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(3),d.log("Block «".concat(a,"» skipped because of plugins error"),"warn",s),Error(t.t0);case 11:t.next=18;break;case 13:l={savedData:{type:a,data:s},title:a},o.unavailable.has(a)&&(u=o.unavailable.get(a).toolbox,l.title=(null==u?void 0:u.title)||l.title),i.insert({tool:o.stubTool,data:l}).stretched=!0,d.log("Tool «".concat(a,"» is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 18:case"end":return t.stop()}}),t,this,[[3,7]])}))),function(t){return n.apply(this,arguments)})}]),p}(f.default);o.default=y,y.displayName="Renderer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(379)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(9),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=p(f),d=h(d);var y=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(v()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function o(){var t;return(0,i.default)(this,o),(t=n.apply(this,arguments)).configCache={},t.inlineToolsConfigCache=null,t}return(0,a.default)(o,[{key:"sanitizeBlocks",value:function(t){var e=this;return t.map((function(t){var n=e.composeToolConfig(t.tool);return f.isEmpty(n)||(t.data=e.deepSanitize(t.data,n)),t}))}},{key:"deepSanitize",value:function(t,e){return Array.isArray(t)?this.cleanArray(t,e):f.isObject(t)?this.cleanObject(t,e):f.isString(t)?this.cleanOneItem(t,e):t}},{key:"clean",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},o=this.createHTMLJanitorInstance(n);return o.clean(t)}},{key:"composeToolConfig",value:function(t){if(this.configCache[t])return this.configCache[t];var e=this.Editor.Tools.available.get(t),n=this.getInlineToolsConfig(e);if(!e.sanitizeConfig||e.sanitizeConfig&&f.isEmpty(e.sanitizeConfig))return n;var o=e.sanitizeConfig,r={};for(var i in o)if(Object.prototype.hasOwnProperty.call(o,i)){var a=o[i];f.isObject(a)?r[i]=Object.assign({},n,a):r[i]=a}return this.configCache[t]=r,r}},{key:"getInlineToolsConfig",value:function(t){var e=this.Editor.Tools,n=t.enabledInlineTools||[],o={};return f.isBoolean(n)&&n?o=this.getAllInlineToolsConfig():n.map((function(t){o=Object.assign(o,e.inlineTools.get(t).sanitizeConfig)})),o.br=!0,o.wbr=!0,o}},{key:"getAllInlineToolsConfig",value:function(){var t=this.Editor.Tools;if(this.inlineToolsConfigCache)return this.inlineToolsConfigCache;var e={};return Object.entries(t.inlineTools).forEach((function(t){var n=(0,r.default)(t,2)[1];Object.assign(e,n.sanitizeConfig)})),this.inlineToolsConfigCache=e,this.inlineToolsConfigCache}},{key:"cleanArray",value:function(t,e){var n=this;return t.map((function(t){return n.deepSanitize(t,e)}))}},{key:"cleanObject",value:function(t,e){var n={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=t[o],i=this.isRule(e[o])?e[o]:e;n[o]=this.deepSanitize(r,i)}return n}},{key:"cleanOneItem",value:function(t,e){return f.isObject(e)?this.clean(t,e):!1===e?this.clean(t,{}):t}},{key:"isRule",value:function(t){return f.isObject(t)||f.isBoolean(t)||f.isFunction(t)}},{key:"createHTMLJanitorInstance",value:function(t){return t?new d.default(t):null}}]),o}(u.default);o.default=y,y.displayName="Sanitizer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(9),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"save",value:(o=(0,i.default)(r.default.mark((function t(){var e,n,o,i,a,s,c,l,u=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Sanitizer,i=e.ModificationsObserver,a=n.blocks,s=[],i.disable(),t.prev=3,a.forEach((function(t){s.push(u.getSavedData(t))})),t.next=7,Promise.all(s);case 7:return c=t.sent,t.next=10,o.sanitizeBlocks(c);case 10:return l=t.sent,t.abrupt("return",this.makeOutput(l));case 12:return t.prev=12,i.enable(),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[3,,12,15]])}))),function(){return o.apply(this,arguments)})},{key:"getSavedData",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break}return t.next=7,e.validate(n.data);case 7:t.t0=t.sent;case 8:return o=t.t0,t.abrupt("return",Object.assign(Object.assign({},n),{isValid:o}));case 10:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"makeOutput",value:function(t){var e=this,n=0,o=[];return d.log("[Editor.js saving]:","groupCollapsed"),t.forEach((function(t){var r=t.tool,i=t.data,a=t.tunes,s=t.time,c=t.isValid;if(n+=s,d.log("".concat(r.charAt(0).toUpperCase()+r.slice(1)),"group"),!c)return d.log("Block «".concat(r,"» skipped because saved data is invalid")),void d.log(void 0,"groupEnd");if(d.log(i),d.log(void 0,"groupEnd"),r!==e.Editor.Tools.stubTool){var l={type:r,data:i};d.isEmpty(a)||(l.tunes=a),o.push(l)}else o.push(i)})),d.log("Total","log",n),d.log(void 0,"groupEnd"),{time:+new Date,blocks:o,version:"2.20.0"}}}]),p}(f.default);o.default=y,y.displayName="Saver",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(60),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h){"use strict";var v=n(9),y=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=y(r),i=y(i),a=y(a),s=y(s),c=y(c),l=y(l),u=y(u),f=y(f),d=y(d),p=v(p),h=y(h);var b=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(g()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function o(){var t;return(0,i.default)(this,o),(t=n.apply(this,arguments)).buttons=[],t.flipper=null,t.selection=new h.default,t}return(0,a.default)(o,[{key:"make",value:function(){this.nodes.wrapper=f.default.make("div",this.CSS.wrapper),this.nodes.toolSettings=f.default.make("div",this.CSS.toolSettings),this.nodes.defaultSettings=f.default.make("div",this.CSS.defaultSettings),f.default.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}},{key:"open",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.selection.save(),this.Editor.BlockManager.currentBlock.selected=!0,this.Editor.BlockSelection.clearCache(),this.addToolSettings(),this.addTunes(),this.eventsDispatcher.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),h.default.isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&(this.Editor.BlockManager.currentBlock.selected=!1),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.eventsDispatcher.emit(this.events.closed),this.buttons=[],this.flipper.deactivate()}},{key:"addToolSettings",value:function(){var t=this.Editor.BlockManager.currentBlock.renderSettings();t&&f.default.append(this.nodes.toolSettings,t)}},{key:"addTunes",value:function(){var t=this.Editor.BlockManager.currentBlock.renderTunes(),e=(0,r.default)(t,2),n=e[0],o=e[1];f.default.append(this.nodes.toolSettings,n),f.default.append(this.nodes.defaultSettings,o)}},{key:"enableFlipper",value:function(){var t=this;this.flipper=new d.default({focusedItemClass:this.CSS.focusedButton,activateCallback:function(e){e&&f.default.canSetCaret(e)?t.close():p.delay((function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)}),50)()}})}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)}},{key:"blockTunesButtons",get:function(){var t=this,e=this.Editor.StylesAPI;if(0!==this.buttons.length)return this.buttons;var n=this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton,", ").concat(f.default.allInputsSelector)),o=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return n.forEach((function(e){t.buttons.push(e)})),o.forEach((function(e){t.buttons.push(e)})),this.buttons}}]),o}(u.default);o.default=b,b.displayName="BlockSettings",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(21),n(22),n(42),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(59),n(81)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b){"use strict";var m=n(9),k=n(1);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=k(r),i=k(i),a=k(a),s=k(s),c=k(c),l=k(l),u=k(u),f=k(f),d=k(d),p=k(p),h=k(h),v=m(v),y=k(y),g=k(g);var w=function(t){(0,u.default)(p,t);var e,n,o=(e=p,function(){var t,n=(0,d.default)(e);if(x()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function p(){var t;return(0,c.default)(this,p),(t=o.apply(this,arguments)).opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t}return(0,l.default)(p,[{key:"make",value:function(){this.nodes.wrapper=h.default.make("div",[p.CSS.conversionToolbarWrapper].concat((0,s.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.tools=h.default.make("div",p.CSS.conversionToolbarTools);var t=h.default.make("div",p.CSS.conversionToolbarLabel,{textContent:g.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),h.default.append(this.nodes.wrapper,t),h.default.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}},{key:"toggle",value:function(t){this.opened?this.close():this.open(),v.isFunction(t)&&(this.togglingCallback=t)}},{key:"open",value:function(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(p.CSS.conversionToolbarShowed),setTimeout((function(){t.flipper.activate(Object.values(t.tools).filter((function(t){return!t.classList.contains(p.CSS.conversionToolHidden)}))),t.flipper.focusFirst(),v.isFunction(t.togglingCallback)&&t.togglingCallback(!0)}),50)}},{key:"close",value:function(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(p.CSS.conversionToolbarShowed),v.isFunction(this.togglingCallback)&&this.togglingCallback(!1)}},{key:"hasTools",value:function(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.defaultBlock)}},{key:"replaceWithBlock",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d,p=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager.currentBlock.tool,o=this.Editor.BlockManager.currentBlock.name,t.next=4,this.Editor.BlockManager.currentBlock.save();case 4:if(r=t.sent,a=r.data,o===e&&(e=this.config.defaultBlock),s=this.Editor.Tools.blockTools.get(e),c="",l=n.conversionConfig.export,!v.isFunction(l)){t.next=14;break}c=l(a),t.next=20;break;case 14:if(!v.isString(l)){t.next=18;break}c=a[l],t.next=20;break;case 18:return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),t.abrupt("return");case 20:if(u=this.Editor.Sanitizer.clean(c,s.sanitizeConfig),f={},d=s.conversionConfig.import,!v.isFunction(d)){t.next=27;break}f=d(u),t.next=33;break;case 27:if(!v.isString(d)){t.next=31;break}f[d]=u,t.next=33;break;case 31:return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),t.abrupt("return");case 33:this.Editor.BlockManager.replace({tool:e,data:f}),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),v.delay((function(){p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock)}),10)();case 38:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"addTools",value:function(){var t=this,e=this.Editor.Tools.blockTools;Array.from(e.entries()).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1],a=i.toolbox,s=i.conversionConfig;!v.isEmpty(a)&&a.icon&&s&&s.import&&t.addTool(o,a.icon,a.title)}))}},{key:"addTool",value:function(t,e,n){var o=this,r=h.default.make("div",[p.CSS.conversionTool]),s=h.default.make("div",[p.CSS.conversionToolIcon]);r.dataset.tool=t,s.innerHTML=e,h.default.append(r,s),h.default.append(r,h.default.text(g.default.t(b.I18nInternalNS.toolNames,n||v.capitalize(t)))),h.default.append(this.nodes.tools,r),this.tools[t]=r,this.listeners.on(r,"click",(0,a.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.replaceWithBlock(t);case 2:case"end":return e.stop()}}),e)}))))}},{key:"filterTools",value:function(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1];i.hidden=!1,i.classList.toggle(p.CSS.conversionToolHidden,o===t.name)}))}},{key:"enableFlipper",value:function(){this.flipper=new y.default({focusedItemClass:p.CSS.conversionToolFocused})}}],[{key:"CSS",get:function(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}}]),p}(p.default);o.default=w,w.displayName="ConversionToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(29),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(8),n(60),n(59),n(81),n(108),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b,m){"use strict";var k=n(9),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),c=x(c),l=x(l),u=x(u),f=x(f),d=x(d),p=x(p),h=k(h),v=x(v),y=x(y),b=x(b);var S=function(t){(0,c.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(w()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,a.default)(this,o),(t=n.apply(this,arguments)).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},t.opened=!1,t.toolbarVerticalMargin=5,t.buttonsList=null,t.width=0,t.flipper=null,t}return(0,s.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.Editor.ConversionToolbar.destroy()):this.make()}},{key:"tryToShow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.allowedToShow()?(this.move(),this.open(),this.Editor.Toolbar.close()):t&&this.close()}},{key:"move",value:function(){var t=p.default.rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,r=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,r>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px"}},{key:"close",value:function(){var t=this;this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),Array.from(this.toolsInstances.entries()).forEach((function(e){var n=(0,i.default)(e,2),o=n[0],r=n[1],a=t.getToolShortcut(o);a&&b.default.remove(t.Editor.UI.nodes.redactor,a),h.isFunction(r.clear)&&r.clear()})),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()))}},{key:"open",value:function(){if(!this.opened){this.addToolsFiltered(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var t=Array.from(this.buttonsList);t.unshift(this.nodes.conversionToggler),t=t.filter((function(t){return!t.hidden})),this.flipper.activate(t)}}},{key:"containsNode",value:function(t){return this.nodes.wrapper.contains(t)}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}},{key:"getInlineToolbarSettings",value:function(t){var e=t.enabledInlineTools;if(!0!==e&&!Array.isArray(e))return!1;if(Array.isArray(e))return e;var n=this.config.inlineToolbar;return Array.isArray(n)?n:!0===n&&Array.from(this.Editor.Tools.inlineTools.keys())}},{key:"make",value:function(){var t=this;this.nodes.wrapper=d.default.make("div",[this.CSS.inlineToolbar].concat((0,r.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.togglerAndButtonsWrapper=d.default.make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=d.default.make("div",this.CSS.buttonsWrapper),this.nodes.actions=d.default.make("div",this.CSS.actionsWrapper),this.listeners.on(this.nodes.wrapper,"mousedown",(function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault()})),d.default.append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),d.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),d.default.append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper()}},{key:"allowedToShow",value:function(){var t=p.default.get(),e=p.default.text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=d.default.isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);return!!o&&!1!==this.getInlineToolbarSettings(o.tool)}},{key:"recalculateWidth",value:function(){this.width=this.nodes.wrapper.offsetWidth}},{key:"addConversionToggler",value:function(){var t=this;this.nodes.conversionToggler=d.default.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=d.default.make("div",this.CSS.conversionTogglerContent);var e=d.default.svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.listeners.on(this.nodes.conversionToggler,"click",(function(){t.Editor.ConversionToolbar.toggle((function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate()}))})),this.Editor.Tooltip.onHover(this.nodes.conversionToggler,y.default.ui(g.I18nInternalNS.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100})}},{key:"setConversionTogglerContent",value:function(){var t=this.Editor.BlockManager.currentBlock,e=t.name,n=t.tool.conversionConfig,o=n&&n.export;this.nodes.conversionToggler.hidden=!o,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!o);var r=t.tool.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=r.icon||r.title||h.capitalize(e)}},{key:"prepareConversionToolbar",value:function(){var t=this.Editor.ConversionToolbar.make();d.default.append(this.nodes.wrapper,t)}},{key:"addToolsFiltered",value:function(){var t=this,e=p.default.get(),n=this.Editor.BlockManager.getBlock(e.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map,this.getInlineToolbarSettings(n.tool).forEach((function(e){var n=t.Editor.Tools.inlineTools.get(e);t.addTool(n)})),this.recalculateWidth()}},{key:"addTool",value:function(t){var e=this,n=this.Editor.Tooltip,o=t.create(),r=o.render();if(r){if(r.dataset.tool=t.name,this.nodes.buttons.appendChild(r),this.toolsInstances.set(t.name,o),h.isFunction(o.renderActions)){var i=o.renderActions();this.nodes.actions.appendChild(i)}this.listeners.on(r,"click",(function(t){e.toolClicked(o),t.preventDefault()}));var a=this.getToolShortcut(t.name);if(a)try{this.enableShortcuts(o,a)}catch(t){}var s=d.default.make("div"),c=y.default.t(g.I18nInternalNS.toolNames,t.title||h.capitalize(t.name));s.appendChild(d.default.text(c)),a&&s.appendChild(d.default.make("div",this.CSS.inlineToolbarShortcut,{textContent:h.beautifyShortcut(a)})),n.onHover(r,s,{placement:"top",hidingDelay:100}),o.checkState(p.default.get())}else h.log("Render method must return an instance of Node","warn",t.name)}},{key:"getToolShortcut",value:function(t){var e=this.Editor.Tools,n=e.inlineTools.get(t),o=e.internal.inlineTools;return Array.from(o.keys()).includes(t)?this.inlineTools[t][m.CommonInternalSettings.Shortcut]:n.shortcut}},{key:"enableShortcuts",value:function(t,e){var n=this;b.default.add({name:e,handler:function(e){var o=n.Editor.BlockManager.currentBlock;o&&o.tool.enabledInlineTools&&(e.preventDefault(),n.toolClicked(t))},on:this.Editor.UI.nodes.redactor})}},{key:"toolClicked",value:function(t){var e=p.default.range;t.surround(e),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.toolsInstances.forEach((function(t){t.checkState(p.default.get())}))}},{key:"enableFlipper",value:function(){this.flipper=new v.default({focusedItemClass:this.CSS.focusedButton,allowArrows:!1})}},{key:"inlineTools",get:function(){var t={};return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((function(e){var n=(0,i.default)(e,2),o=n[0],r=n[1];t[o]=r.create()})),t}}]),o}(f.default);o.default=S,S.displayName="InlineToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(61),n(59),n(81),n(108)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y){"use strict";var g=n(9),b=n(1);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=b(r),i=b(i),a=b(a),s=b(s),c=b(c),l=b(l),u=b(u),f=g(f),d=b(d),h=b(h),y=b(y);var k=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(m()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).nodes={toolbox:null,buttons:[]},t.opened=!1,t.displayedToolsCount=0,t.flipper=null,t}return(0,i.default)(o,[{key:"make",value:function(){this.nodes.toolbox=u.default.make("div",this.CSS.toolbox),this.addTools(),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes(),this.removeAllShortcuts()}},{key:"toolButtonActivate",value:function(t,e){this.insertNewBlock(e)}},{key:"open",value:function(){this.isEmpty||(this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier),this.nodes.toolbox.classList.add(this.CSS.toolboxOpened),this.opened=!0,this.flipper.activate())}},{key:"close",value:function(){this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened),this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier),this.opened=!1,this.flipper.deactivate()}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"addTools",value:function(){var t=this,e=this.Editor.Tools.blockTools;Array.from(e.values()).forEach((function(e){return t.addTool(e)}))}},{key:"addTool",value:function(t){var e=this,n=t.toolbox;if(n)if(!n||n.icon){var o=u.default.make("li",[this.CSS.toolboxButton]);o.dataset.tool=t.name,o.innerHTML=n.icon,u.default.append(this.nodes.toolbox,o),this.nodes.toolbox.appendChild(o),this.nodes.buttons.push(o),this.listeners.on(o,"click",(function(n){e.toolButtonActivate(n,t.name)}));var r=this.drawTooltip(t);this.Editor.Tooltip.onHover(o,r,{placement:"bottom",hidingDelay:200});var i=t.shortcut;i&&this.enableShortcut(t.name,i),this.displayedToolsCount++}else f.log("Toolbar icon is missed. Tool %o skipped","warn",t.name)}},{key:"drawTooltip",value:function(t){var e=t.toolbox||{},n=h.default.t(v.I18nInternalNS.toolNames,e.title||t.name),o=t.shortcut,r=u.default.make("div",this.CSS.buttonTooltip),i=document.createTextNode(f.capitalize(n));return r.appendChild(i),o&&(o=f.beautifyShortcut(o),r.appendChild(u.default.make("div",this.CSS.buttonShortcut,{textContent:o}))),r}},{key:"enableShortcut",value:function(t,e){var n=this;y.default.add({name:e,handler:function(e){e.preventDefault(),n.insertNewBlock(t)},on:this.Editor.UI.nodes.redactor})}},{key:"removeAllShortcuts",value:function(){var t=this,e=this.Editor.Tools.blockTools;Array.from(e.values()).forEach((function(e){var n=e.shortcut;n&&y.default.remove(t.Editor.UI.nodes.redactor,n)}))}},{key:"enableFlipper",value:function(){var t=Array.from(this.nodes.toolbox.childNodes);this.flipper=new d.default({items:t,focusedItemClass:this.CSS.toolboxButtonActive})}},{key:"insertNewBlock",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Caret,r=n.currentBlock,i=n.insert({tool:t,replace:r.isEmpty});i.call(p.BlockToolAPI.APPEND_CALLBACK),this.Editor.Caret.setToBlock(i),0===i.inputs.length&&(i===n.lastBlock?(n.insertAtEnd(),o.setToBlock(n.lastBlock)):o.setToBlock(n.nextBlock)),this.Editor.Toolbar.close()}},{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened",openedToolbarHolderModifier:"codex-editor--toolbox-opened",buttonTooltip:"ce-toolbox-button-tooltip",buttonShortcut:"ce-toolbox-button-tooltip__shortcut"}}},{key:"isEmpty",get:function(){return 0===this.displayedToolsCount}}]),o}(l.default);o.default=k,k.displayName="Toolbox",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(42),n(29),n(2),n(3),n(5),n(6),n(4),n(380),n(7),n(8),n(381),n(382),n(383),n(384),n(385),n(389),n(390),n(391),n(392)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b,m,k,x,w,S,T){"use strict";var E=n(9),C=n(1);function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=C(r),i=C(i),a=C(a),s=C(s),c=C(c),l=C(l),u=C(u),f=C(f),d=C(d),p=C(p),h=C(h),v=E(v),y=C(y),g=C(g),b=C(b),m=C(m),k=C(k),x=C(x),w=C(w),S=C(S),T=C(T);var _=function(t){(0,u.default)(o,t);var e,n=(e=o,function(){var t,n=(0,d.default)(e);if(B()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function o(){var t;return(0,c.default)(this,o),(t=n.apply(this,arguments)).stubTool="stub",t.toolsAvailable=new T.default,t.toolsUnavailable=new T.default,t}return(0,l.default)(o,[{key:"prepare",value:function(){var t=this;if(this.validateTools(),this.config.tools=v.deepMerge({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||0===Object.keys(this.config.tools).length)throw Error("Can't start without tools");var e=this.prepareConfig();this.factory=new k.default(e,this.config,this.Editor.API);var n=this.getListOfPrepareFunctions(e);return 0===n.length?Promise.resolve():v.sequence(n,(function(e){t.toolPrepareMethodSuccess(e)}),(function(e){t.toolPrepareMethodFallback(e)}))}},{key:"getTunesForTool",value:function(t){var e=t.enabledBlockTunes;if(!1===e)return new T.default;if(Array.isArray(e))return new T.default(Array.from(this.blockTunes.entries()).filter((function(t){var n=(0,s.default)(t,2)[1];return e.includes(n.name)})).concat((0,a.default)(this.blockTunes.internalTools.entries())));var n=this.config.tunes;return Array.isArray(n)?new T.default(Array.from(this.blockTunes.entries()).filter((function(t){var e=(0,s.default)(t,2)[1];return n.includes(e.name)})).concat((0,a.default)(this.blockTunes.internalTools.entries()))):this.blockTunes.internalTools}},{key:"destroy",value:function(){Object.values(this.available).forEach(function(){var t=(0,i.default)(r.default.mark((function t(e){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v.isFunction(e.reset)){t.next=3;break}return t.next=3,e.reset();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"toolPrepareMethodSuccess",value:function(t){var e=this.factory.get(t.toolName);if(e.isInline()){var n=["render","surround","checkState"].filter((function(t){return!e.create()[t]}));if(n.length)return v.log("Incorrect Inline Tool: ".concat(e.name,". Some of required methods is not implemented %o"),"warn",n),void this.toolsUnavailable.set(e.name,e)}this.toolsAvailable.set(e.name,e)}},{key:"toolPrepareMethodFallback",value:function(t){this.toolsUnavailable.set(t.toolName,this.factory.get(t.toolName))}},{key:"getListOfPrepareFunctions",value:function(t){var e=[];return Object.entries(t).forEach((function(t){var n=(0,s.default)(t,2),o=n[0],r=n[1];e.push({function:v.isFunction(r.class.prepare)?r.class.prepare:function(){},data:{toolName:o}})})),e}},{key:"validateTools",value:function(){for(var t in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!v.isFunction(e)&&!v.isFunction(e.class))throw Error("Tool «".concat(t,"» must be a constructor function or an object with function in the «class» property"))}}},{key:"prepareConfig",value:function(){var t={};for(var e in this.config.tools)v.isObject(this.config.tools[e])?t[e]=this.config.tools[e]:t[e]={class:this.config.tools[e]};return t}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inlineTools",get:function(){return this.available.inlineTools}},{key:"blockTools",get:function(){return this.available.blockTools}},{key:"blockTunes",get:function(){return this.available.blockTunes}},{key:"defaultTool",get:function(){return this.blockTools.get(this.config.defaultBlock)}},{key:"internal",get:function(){return this.available.internalTools}},{key:"internalTools",get:function(){return{bold:{class:y.default,isInternal:!0},italic:{class:g.default,isInternal:!0},link:{class:b.default,isInternal:!0},paragraph:{class:p.default,inlineToolbar:!0,isInternal:!0},stub:{class:m.default,isInternal:!0},moveUpTune:{class:S.default,isInternal:!0},deleteTune:{class:w.default,isInternal:!0},moveDownTune:{class:x.default,isInternal:!0}}}}]),o}(h.default);o.default=_,_.displayName="Tools",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(393)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).lib=new u.default,t}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.lib.show(t,e,n)}},{key:"hide",value:function(){this.lib.hide()}},{key:"onHover",value:function(t,e,n){this.lib.onHover(t,e,n)}}]),o}(l.default);o.default=p,p.displayName="Tooltip",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(42),n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(394),n(7),n(15),n(8),n(25),n(61),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b,m){"use strict";var k=n(9),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),c=x(c),l=x(l),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=x(v),y=k(y),g=x(g),b=x(b),m=x(m);var S=function(t){(0,u.default)(k,t);var e,o,h=(e=k,function(){var t,n=(0,d.default)(e);if(w()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function k(){var t;return(0,c.default)(this,k),(t=h.apply(this,arguments)).isMobile=!1,t.contentRectCache=void 0,t.resizeDebouncer=y.debounce((function(){t.windowResize()}),200),t}return(0,l.default)(k,[{key:"addLoader",value:function(){this.nodes.loader=v.default.make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)}},{key:"removeLoader",value:function(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)}},{key:"prepare",value:(o=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.checkIsMobile(),this.make(),this.addLoader(),this.appendSVGSprite(),this.loadStyles();case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"checkEmptiness",value:function(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"closeAllToolbars",value:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;n.close(),o.close(),r.close(),e.close()}},{key:"checkIsMobile",value:function(){this.isMobile=window.innerWidth<650}},{key:"make",value:function(){this.nodes.holder=v.default.getHolder(this.config.holder),this.nodes.wrapper=v.default.make("div",[this.CSS.editorWrapper].concat((0,i.default)(this.isRtl?[this.CSS.editorRtlFix]:[]))),this.nodes.redactor=v.default.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}},{key:"loadStyles",value:function(){var t=n(395);if(!v.default.get("editor-js-styles")){var e=v.default.make("style",null,{id:"editor-js-styles",textContent:t.toString()});v.default.prepend(document.head,e)}}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(function(e){t.redactorClicked(e)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(document,"keydown",(function(e){t.documentKeydown(e)}),!0),this.readOnlyMutableListeners.on(document,"click",(function(e){t.documentClicked(e)}),!0),this.readOnlyMutableListeners.on(document,"selectionchange",(function(e){t.selectionChanged(e)}),!0),this.readOnlyMutableListeners.on(window,"resize",(function(){t.resizeDebouncer()}),{passive:!0})}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"windowResize",value:function(){this.contentRectCache=null,this.checkIsMobile()}},{key:"documentKeydown",value:function(t){switch(t.keyCode){case y.keyCodes.ENTER:this.enterPressed(t);break;case y.keyCodes.BACKSPACE:this.backspacePressed(t);break;case y.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultBehaviour(t)}}},{key:"defaultBehaviour",value:function(t){var e=this.Editor.BlockManager.currentBlock,n=t.target.closest(".".concat(this.CSS.editorWrapper)),o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;void 0===e||null!==n?n||e&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(t)}},{key:"backspacePressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret;if(o.anyBlockSelected&&!g.default.isSelectionExists){var i=n.removeSelectedBlocks();r.setToBlock(n.insertDefaultBlockAtIndex(i,!0),r.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()}}},{key:"escapePressed",value:function(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbox.opened?this.Editor.Toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}},{key:"enterPressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=n.currentBlockIndex>=0;if(o.anyBlockSelected&&!g.default.isSelectionExists)return o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation();if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var i=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(i),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.move(),this.Editor.Toolbar.plusButton.show()}this.Editor.BlockSelection.clearSelection(t)}},{key:"documentClicked",value:function(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||g.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.InlineToolbar.close(),this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close()),this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted||this.Editor.BlockSelection.clearSelection(t)}}},{key:"documentTouched",value:function(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode()}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.hide()}},{key:"redactorClicked",value:function(t){if(g.default.isCollapsed){var e=function(){t.stopImmediatePropagation(),t.stopPropagation()},n=t.target,o=t.metaKey||t.ctrlKey;if(v.default.isAnchor(n)&&o){e();var r=n.getAttribute("href"),i=y.getValidUrl(r);y.openTab(i)}else this.Editor.BlockManager.currentBlock||(e(),this.Editor.BlockManager.insert()),this.Editor.BlockManager.currentBlock.tool.isDefault&&(e(),this.Editor.BlockManager.currentBlock.isEmpty&&this.Editor.Toolbar.plusButton.show())}}},{key:"selectionChanged",value:function(t){var e=this.Editor,n=e.CrossBlockSelection,o=e.BlockSelection,r=g.default.anchorElement;n.isCrossBlockSelectionStarted&&o.anyBlockSelected&&g.default.get().removeAllRanges(),r&&r.closest(".".concat(b.default.CSS.content))?(this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(r),this.Editor.InlineToolbar.tryToShow(!0)):this.Editor.InlineToolbar.containsNode(r)||this.Editor.InlineToolbar.close()}},{key:"appendSVGSprite",value:function(){var t=v.default.make("div");t.hidden=!0,t.style.display="none",t.innerHTML=p.default,v.default.append(this.nodes.wrapper,t)}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}},{key:"contentRect",get:function(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}},{key:"someToolbarOpened",get:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;return n.opened||o.opened||r.opened||e.opened}},{key:"someFlipperButtonFocused",get:function(){return Object.entries(this.Editor).filter((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper instanceof m.default})).some((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper.currentItem}))}}]),k}(h.default);o.default=S,S.displayName="UI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){n(184),t.exports=n(356)},function(t,e,n){n(185)},function(t,e,n){"use strict";n(186),n(329),n(331),n(334),n(336),n(338),n(340),n(342),n(344),n(346),n(348),n(350),n(352),n(140)},function(t,e,n){n(187),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(102),n(292),n(129),n(293),n(130),n(294),n(295),n(296),n(297),n(131),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),t.exports=n(17)},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(18),a=n(0),s=n(23),c=n(41).KEY,l=n(11),u=n(67),f=n(53),d=n(44),p=n(14),h=n(83),v=n(110),y=n(189),g=n(70),b=n(12),m=n(13),k=n(20),x=n(28),w=n(40),S=n(43),T=n(48),E=n(113),C=n(34),B=n(69),_=n(19),I=n(46),O=C.f,M=_.f,R=E.f,A=o.Symbol,N=o.JSON,P=N&&N.stringify,L=p("_hidden"),D=p("toPrimitive"),j={}.propertyIsEnumerable,F=u("symbol-registry"),U=u("symbols"),H=u("op-symbols"),z=Object.prototype,W="function"==typeof A&&!!B.f,Y=o.QObject,V=!Y||!Y.prototype||!Y.prototype.findChild,X=i&&l((function(){return 7!=T(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=O(z,e);o&&delete z[e],M(t,e,n),o&&t!==z&&M(z,e,o)}:M,G=function(t){var e=U[t]=T(A.prototype);return e._k=t,e},K=W&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Z=function(t,e,n){return t===z&&Z(H,e,n),b(t),e=w(e,!0),b(n),r(U,e)?(n.enumerable?(r(t,L)&&t[L][e]&&(t[L][e]=!1),n=T(n,{enumerable:S(0,!1)})):(r(t,L)||M(t,L,S(1,{})),t[L][e]=!0),X(t,e,n)):M(t,e,n)},q=function(t,e){b(t);for(var n,o=y(e=x(e)),r=0,i=o.length;i>r;)Z(t,n=o[r++],e[n]);return t},J=function(t){var e=j.call(this,t=w(t,!0));return!(this===z&&r(U,t)&&!r(H,t))&&(!(e||!r(this,t)||!r(U,t)||r(this,L)&&this[L][t])||e)},$=function(t,e){if(t=x(t),e=w(e,!0),t!==z||!r(U,e)||r(H,e)){var n=O(t,e);return!n||!r(U,e)||r(t,L)&&t[L][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(x(t)),o=[],i=0;n.length>i;)r(U,e=n[i++])||e==L||e==c||o.push(e);return o},tt=function(t){for(var e,n=t===z,o=R(n?H:x(t)),i=[],a=0;o.length>a;)!r(U,e=o[a++])||n&&!r(z,e)||i.push(U[e]);return i};W||(s((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(H,n),r(this,L)&&r(this[L],t)&&(this[L][t]=!1),X(this,t,S(1,n))};return i&&V&&X(z,t,{configurable:!0,set:e}),G(t)}).prototype,"toString",(function(){return this._k})),C.f=$,_.f=Z,n(49).f=E.f=Q,n(63).f=J,B.f=tt,i&&!n(45)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return G(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var ot=I(p.store),rt=0;ot.length>rt;)v(ot[rt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=A(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?T(t):q(T(t),e)},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var it=l((function(){B.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return B.f(k(t))}}),N&&a(a.S+a.F*(!W||l((function(){var t=A();return"[null]"!=P([t])||"{}"!=P({a:t})||"{}"!=P(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(m(e)||void 0!==t)&&!K(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,P.apply(N,o)}}),A.prototype[D]||n(27)(A.prototype,D,A.prototype.valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports=n(67)("native-function-to-string",Function.toString)},function(t,e,n){var o=n(46),r=n(69),i=n(63);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(48)})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(112)})},function(t,e,n){var o=n(28),r=n(34).f;n(35)("getOwnPropertyDescriptor",(function(){return function(t,e){return r(o(t),e)}}))},function(t,e,n){var o=n(20),r=n(50);n(35)("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},function(t,e,n){var o=n(20),r=n(46);n(35)("keys",(function(){return function(t){return r(o(t))}}))},function(t,e,n){n(35)("getOwnPropertyNames",(function(){return n(113).f}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("freeze",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("seal",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("preventExtensions",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13);n(35)("isFrozen",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(13);n(35)("isSealed",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(13);n(35)("isExtensible",(function(t){return function(e){return!!o(e)&&(!t||t(e))}}))},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(114)})},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(115)})},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(87).set})},function(t,e,n){"use strict";var o=n(64),r={};r[n(14)("toStringTag")]="z",r+""!="[object z]"&&n(23)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(116)})},function(t,e,n){var o=n(19).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var o=n(13),r=n(50),i=n(14)("hasInstance"),a=Function.prototype;i in a||n(19).f(a,i,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var o=n(0),r=n(118);o(o.G+o.F*(parseInt!=r),{parseInt:r})},function(t,e,n){var o=n(0),r=n(119);o(o.G+o.F*(parseFloat!=r),{parseFloat:r})},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(37),a=n(89),s=n(40),c=n(11),l=n(49).f,u=n(34).f,f=n(19).f,d=n(54).trim,p=o.Number,h=p,v=p.prototype,y="Number"==i(n(48)(v)),g="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=g?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>r)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(y?c((function(){v.valueOf.call(n)})):"Number"!=i(n))?a(new h(b(e)),n,p):b(e)};for(var m,k=n(18)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)r(h,m=k[x])&&!r(p,m)&&f(p,m,u(h,m));p.prototype=v,v.constructor=p,n(23)(o,"Number",p)}},function(t,e,n){"use strict";var o=n(0),r=n(33),i=n(120),a=n(90),s=1..toFixed,c=Math.floor,l=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*l[n],l[n]=o%1e7,o=c(o/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=l[e],l[e]=c(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(11)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,o,s,c=i(this,u),l=r(t),v="",y="0";if(l<0||l>20)throw RangeError(u);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*h(2,69,1))-69)<0?c*h(2,-e,1):c/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=l;o>=7;)f(1e7,0),o-=7;for(f(h(10,o,1),0),o=e-1;o>=23;)d(1<<23),o-=23;d(1<<o),f(1,1),d(2),y=p()}else f(0,n),f(1<<-e,0),y=p()+a.call("0",l);return y=l>0?v+((s=y.length)<=l?"0."+a.call("0",l-s)+y:y.slice(0,s-l)+"."+y.slice(s-l)):v+y}})},function(t,e,n){"use strict";var o=n(0),r=n(11),i=n(120),a=1..toPrecision;o(o.P+o.F*(r((function(){return"1"!==a.call(1,void 0)}))||!r((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var o=n(0),r=n(10).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(121)})},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var o=n(0),r=n(121),i=Math.abs;o(o.S,"Number",{isSafeInteger:function(t){return r(t)&&i(t)<=9007199254740991}})},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var o=n(0),r=n(119);o(o.S+o.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},function(t,e,n){var o=n(0),r=n(118);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r})},function(t,e,n){var o=n(0),r=n(122),i=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+i(t-1)*i(t+1))}})},function(t,e,n){var o=n(0),r=Math.asinh;o(o.S+o.F*!(r&&1/r(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var o=n(0),r=Math.atanh;o(o.S+o.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var o=n(0),r=n(91);o(o.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var o=n(0),r=Math.exp;o(o.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},function(t,e,n){var o=n(0),r=n(92);o(o.S+o.F*(r!=Math.expm1),"Math",{expm1:r})},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(232)})},function(t,e,n){var o=n(91),r=Math.pow,i=r(2,-52),a=r(2,-23),s=r(2,127)*(2-a),c=r(2,-126);t.exports=Math.fround||function(t){var e,n,r=Math.abs(t),l=o(t);return r<c?l*(r/c/a+1/i-1/i)*c*a:(n=(e=(1+a/i)*r)-(e-r))>s||n!=n?l*(1/0):l*n}},function(t,e,n){var o=n(0),r=Math.abs;o(o.S,"Math",{hypot:function(t,e){for(var n,o,i=0,a=0,s=arguments.length,c=0;a<s;)c<(n=r(arguments[a++]))?(i=i*(o=c/n)*o+1,c=n):i+=n>0?(o=n/c)*o:n;return c===1/0?1/0:c*Math.sqrt(i)}})},function(t,e,n){var o=n(0),r=Math.imul;o(o.S+o.F*n(11)((function(){return-5!=r(4294967295,5)||2!=r.length})),"Math",{imul:function(t,e){var n=+t,o=+e,r=65535&n,i=65535&o;return 0|r*i+((65535&n>>>16)*i+r*(65535&o>>>16)<<16>>>0)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(122)})},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(91)})},function(t,e,n){var o=n(0),r=n(92),i=Math.exp;o(o.S+o.F*n(11)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},function(t,e,n){var o=n(0),r=n(92),i=Math.exp;o(o.S,"Math",{tanh:function(t){var e=r(t=+t),n=r(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t))}})},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var o=n(0),r=n(47),i=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var o=n(0),r=n(28),i=n(16);o(o.S,"String",{raw:function(t){for(var e=r(t.raw),n=i(e.length),o=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(54)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var o=n(93)(!0);n(94)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var o=n(0),r=n(93)(!1);o(o.P,"String",{codePointAt:function(t){return r(this,t)}})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(95),a="".endsWith;o(o.P+o.F*n(97)("endsWith"),"String",{endsWith:function(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),s=void 0===n?o:Math.min(r(n),o),c=String(t);return a?a.call(e,c,s):e.slice(s-c.length,s)===c}})},function(t,e,n){"use strict";var o=n(0),r=n(95);o(o.P+o.F*n(97)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(90)})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(95),a="".startsWith;o(o.P+o.F*n(97)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o}})},function(t,e,n){"use strict";n(24)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(24)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(24)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(24)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(24)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(24)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(24)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(24)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(24)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(24)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(24)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(24)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(24)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=n(0),r=n(20),i=n(40);o(o.P+o.F*n(11)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var o=n(0),r=n(267);o(o.P+o.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},function(t,e,n){"use strict";var o=n(11),r=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!o((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},function(t,e,n){var o=Date.prototype,r=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(23)(o,"toString",(function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date"}))},function(t,e,n){var o=n(14)("toPrimitive"),r=Date.prototype;o in r||n(27)(r,o,n(270))},function(t,e,n){"use strict";var o=n(12),r=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(o(this),"number"!=t)}},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(70)})},function(t,e,n){"use strict";var o=n(31),r=n(0),i=n(20),a=n(124),s=n(98),c=n(16),l=n(99),u=n(100);r(r.S+r.F*!n(71)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,g=0,b=u(d);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=c(d.length));e>g;g++)l(n,g,y?v(d[g],g):d[g]);else for(f=b.call(d),n=new p;!(r=f.next()).done;g++)l(n,g,y?a(f,v,[r.value,g],!0):r.value);return n.length=g,n}})},function(t,e,n){"use strict";var o=n(0),r=n(99);o(o.S+o.F*n(11)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)r(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=[].join;o(o.P+o.F*(n(62)!=Object||!n(30)(i)),"Array",{join:function(t){return i.call(r(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var o=n(0),r=n(86),i=n(37),a=n(47),s=n(16),c=[].slice;o(o.P+o.F*n(11)((function(){r&&c.call(r)})),"Array",{slice:function(t,e){var n=s(this.length),o=i(this);if(e=void 0===e?n:e,"Array"==o)return c.call(this,t,e);for(var r=a(t,n),l=a(e,n),u=s(l-r),f=new Array(u),d=0;d<u;d++)f[d]="String"==o?this.charAt(r+d):this[r+d];return f}})},function(t,e,n){"use strict";var o=n(0),r=n(32),i=n(20),a=n(11),s=[].sort,c=[1,2,3];o(o.P+o.F*(a((function(){c.sort(void 0)}))||!a((function(){c.sort(null)}))||!n(30)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(0),i=n(30)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var o=n(13),r=n(70),i=n(14)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var o=n(0),r=n(36)(1);o(o.P+o.F*!n(30)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(2);o(o.P+o.F*!n(30)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(3);o(o.P+o.F*!n(30)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(4);o(o.P+o.F*!n(30)([].every,!0),"Array",{every:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(30)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(30)([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var o=n(0),r=n(68)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(30)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=n(33),a=n(16),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(c||!n(30)(s)),"Array",{lastIndexOf:function(t){if(c)return s.apply(this,arguments)||0;var e=r(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}})},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(127)}),n(51)("copyWithin")},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(101)}),n(51)("fill")},function(t,e,n){"use strict";var o=n(0),r=n(36)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("find")},function(t,e,n){"use strict";var o=n(0),r=n(36)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o(o.P+o.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)(i)},function(t,e,n){n(56)("Array")},function(t,e,n){var o=n(10),r=n(89),i=n(19).f,a=n(49).f,s=n(96),c=n(72),l=o.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,h=new l(d)!==d;if(n(18)&&(!h||n(11)((function(){return p[n(14)("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(t,e){var n=this instanceof l,o=s(t),i=void 0===e;return!n&&o&&t.constructor===l&&i?t:r(h?new u(o&&!i?t.source:t,e):u((o=t instanceof l)?t.source:t,o&&i?c.call(t):e),n?this:f,l)};for(var v=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},y=a(u),g=0;y.length>g;)v(y[g++]);f.constructor=l,l.prototype=f,n(23)(o,"RegExp",l)}n(56)("RegExp")},function(t,e,n){"use strict";n(130);var o=n(12),r=n(72),i=n(18),a=/./.toString,s=function(t){n(23)(RegExp.prototype,"toString",t,!0)};n(11)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var o=n(12),r=n(16),i=n(104),a=n(73);n(74)("match",1,(function(t,e,n,s){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=o(t),l=String(this);if(!c.global)return a(c,l);var u=c.unicode;c.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(c,l));){var h=String(f[0]);d[p]=h,""===h&&(c.lastIndex=i(l,r(c.lastIndex),u)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var o=n(12),r=n(20),i=n(16),a=n(33),s=n(104),c=n(73),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(74)("replace",2,(function(t,e,n,h){return[function(o,r){var i=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var y=f.global;if(y){var g=f.unicode;f.lastIndex=0}for(var b=[];;){var m=c(f,d);if(null===m)break;if(b.push(m),!y)break;""===String(m[0])&&(f.lastIndex=s(d,i(f.lastIndex),g))}for(var k,x="",w=0,S=0;S<b.length;S++){m=b[S];for(var T=String(m[0]),E=l(u(a(m.index),d.length),0),C=[],B=1;B<m.length;B++)C.push(void 0===(k=m[B])?k:String(k));var _=m.groups;if(p){var I=[T].concat(C,E,d);void 0!==_&&I.push(_);var O=String(e.apply(void 0,I))}else O=v(T,d,E,C,_,e);E>=w&&(x+=d.slice(w,E)+O,w=E+T.length)}return x+d.slice(w)}];function v(t,e,o,i,a,s){var c=o+t.length,l=i.length,u=p;return void 0!==a&&(a=r(a),u=d),n.call(s,u,(function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(c);case"<":s=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var o=n(12),r=n(115),i=n(73);n(74)("search",1,(function(t,e,n,a){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var u=i(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var o=n(96),r=n(12),i=n(65),a=n(104),s=n(16),c=n(73),l=n(103),u=n(11),f=Math.min,d=[].push,p="length",h=!u((function(){RegExp(4294967295,"y")}));n(74)("split",2,(function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);for(var i,a,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(i=l.call(v,r))&&!((a=v.lastIndex)>f&&(c.push(r.slice(f,i.index)),i[p]>1&&i.index<r[p]&&d.apply(c,i.slice(1)),s=i[0][p],f=a,c[p]>=h));)v.lastIndex===i.index&&v.lastIndex++;return f===r[p]?!s&&v.test("")||c.push(""):c.push(r.slice(f)),c[p]>h?c.slice(0,h):c}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):v.call(String(r),n,o)},function(t,e){var o=u(v,t,this,e,v!==n);if(o.done)return o.value;var l=r(t),d=String(this),p=i(l,RegExp),y=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),b=new p(h?l:"^(?:"+l.source+")",g),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var k=0,x=0,w=[];x<d.length;){b.lastIndex=h?x:0;var S,T=c(b,h?d:d.slice(x));if(null===T||(S=f(s(b.lastIndex+(h?0:x)),d.length))===k)x=a(d,x,y);else{if(w.push(d.slice(k,x)),w.length===m)return w;for(var E=1;E<=T.length-1;E++)if(w.push(T[E]),w.length===m)return w;x=k=S}}return w.push(d.slice(k)),w}]}))},function(t,e,n){var o=n(10),r=n(105).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,c="process"==n(37)(a);t.exports=function(){var t,e,n,l=function(){var o,r;for(c&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){a.nextTick(l)};else if(!i||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){r.call(o,l)};else{var f=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){"use strict";var o=n(134),r=n(52);t.exports=n(77)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},function(t,e,n){"use strict";var o=n(134),r=n(52);t.exports=n(77)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"Set"),t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o,r=n(10),i=n(36)(0),a=n(23),s=n(41),c=n(114),l=n(135),u=n(13),f=n(52),d=n(52),p=!r.ActiveXObject&&"ActiveXObject"in r,h=s.getWeak,v=Object.isExtensible,y=l.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return!0===e?y(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return l.def(f(this,"WeakMap"),t,e)}},m=t.exports=n(77)("WeakMap",g,b,l,!0,!0);d&&p&&(c((o=l.getConstructor(g,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(t){var e=m.prototype,n=e[t];a(e,t,(function(e,r){if(u(e)&&!v(e)){this._f||(this._f=new o);var i=this._f[t](e,r);return"set"==t?this:i}return n.call(this,e,r)}))})))},function(t,e,n){"use strict";var o=n(135),r=n(52);n(77)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"WeakSet"),t,!0)}},o,!1,!0)},function(t,e,n){"use strict";var o=n(0),r=n(78),i=n(106),a=n(12),s=n(47),c=n(16),l=n(13),u=n(10).ArrayBuffer,f=n(65),d=i.ArrayBuffer,p=i.DataView,h=r.ABV&&u.isView,v=d.prototype.slice,y=r.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!r.CONSTR,"ArrayBuffer",{isView:function(t){return h&&h(t)||l(t)&&y in t}}),o(o.P+o.U+o.F*n(11)((function(){return!new d(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),r=s(void 0===e?n:e,n),i=new(f(this,d))(c(r-o)),l=new p(this),u=new p(i),h=0;o<r;)u.setUint8(h++,l.getUint8(o++));return i}}),n(56)("ArrayBuffer")},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(78).ABV,{DataView:n(106).DataView})},function(t,e,n){n(39)("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}),!0)},function(t,e,n){n(39)("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Int32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){var o=n(0),r=n(32),i=n(12),a=(n(10).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(11)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var o=r(t),c=i(n);return a?a(o,e,c):s.call(o,e,c)}})},function(t,e,n){var o=n(0),r=n(48),i=n(32),a=n(12),s=n(13),c=n(11),l=n(116),u=(n(10).Reflect||{}).construct,f=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),d=!c((function(){u((function(){}))}));o(o.S+o.F*(f||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(l.apply(t,o))}var c=n.prototype,p=r(s(c)?c:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},function(t,e,n){var o=n(19),r=n(0),i=n(12),a=n(40);r(r.S+r.F*n(11)((function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return o.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var o=n(0),r=n(34).f,i=n(12);o(o.S,"Reflect",{deleteProperty:function(t,e){var n=r(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var o=n(0),r=n(12),i=function(t){this._t=r(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(123)(i,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),o(o.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,e,n){var o=n(34),r=n(50),i=n(26),a=n(0),s=n(13),c=n(12);a(a.S,"Reflect",{get:function t(e,n){var a,l,u=arguments.length<3?e:arguments[2];return c(e)===u?e[n]:(a=o.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(l=r(e))?t(l,n,u):void 0}})},function(t,e,n){var o=n(34),r=n(0),i=n(12);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return o.f(i(t),e)}})},function(t,e,n){var o=n(0),r=n(50),i=n(12);o(o.S,"Reflect",{getPrototypeOf:function(t){return r(i(t))}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var o=n(0),r=n(12),i=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function(t){return r(t),!i||i(t)}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(137)})},function(t,e,n){var o=n(0),r=n(12),i=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function(t){r(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,e,n){var o=n(19),r=n(34),i=n(50),a=n(26),s=n(0),c=n(43),l=n(12),u=n(13);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=r.f(l(e),n);if(!h){if(u(d=i(e)))return t(d,n,s,p);h=c(0)}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=r.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f)}else o.f(p,n,c(0,s));return!0}return void 0!==h.set&&(h.set.call(p,s),!0)}})},function(t,e,n){var o=n(0),r=n(87);r&&o(o.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){n(330),t.exports=n(17).Array.includes},function(t,e,n){"use strict";var o=n(0),r=n(68)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("includes")},function(t,e,n){n(332),t.exports=n(17).Array.flatMap},function(t,e,n){"use strict";var o=n(0),r=n(333),i=n(20),a=n(16),s=n(32),c=n(125);o(o.P,"Array",{flatMap:function(t){var e,n,o=i(this);return s(t),e=a(o.length),n=c(o,0),r(n,o,o,e,0,1,t,arguments[1]),n}}),n(51)("flatMap")},function(t,e,n){"use strict";var o=n(70),r=n(13),i=n(16),a=n(31),s=n(14)("isConcatSpreadable");t.exports=function t(e,n,c,l,u,f,d,p){for(var h,v,y=u,g=0,b=!!d&&a(d,p,3);g<l;){if(g in c){if(h=b?b(c[g],g,n):c[g],v=!1,r(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)y=t(e,n,h,i(h.length),y,f-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=h}y++}g++}return y}},function(t,e,n){n(335),t.exports=n(17).String.padStart},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(76),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){n(337),t.exports=n(17).String.padEnd},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(76),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){n(339),t.exports=n(17).String.trimLeft},function(t,e,n){"use strict";n(54)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){n(341),t.exports=n(17).String.trimRight},function(t,e,n){"use strict";n(54)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){n(343),t.exports=n(83).f("asyncIterator")},function(t,e,n){n(110)("asyncIterator")},function(t,e,n){n(345),t.exports=n(17).Object.getOwnPropertyDescriptors},function(t,e,n){var o=n(0),r=n(137),i=n(28),a=n(34),s=n(99);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,o=i(t),c=a.f,l=r(o),u={},f=0;l.length>f;)void 0!==(n=c(o,e=l[f++]))&&s(u,e,n);return u}})},function(t,e,n){n(347),t.exports=n(17).Object.values},function(t,e,n){var o=n(0),r=n(139)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},function(t,e,n){n(349),t.exports=n(17).Object.entries},function(t,e,n){var o=n(0),r=n(139)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},function(t,e,n){"use strict";n(131),n(351),t.exports=n(17).Promise.finally},function(t,e,n){"use strict";var o=n(0),r=n(17),i=n(10),a=n(65),s=n(133);o(o.P+o.R,"Promise",{finally:function(t){var e=a(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){n(353),n(354),n(355),t.exports=n(17)},function(t,e,n){var o=n(10),r=n(0),i=n(76),a=[].slice,s=/MSIE .\./.test(i),c=function(t){return function(e,n){var o=arguments.length>2,r=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};r(r.G+r.B+r.F*s,{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},function(t,e,n){var o=n(0),r=n(105);o(o.G+o.B,{setImmediate:r.set,clearImmediate:r.clear})},function(t,e,n){for(var o=n(102),r=n(46),i=n(23),a=n(10),s=n(27),c=n(55),l=n(14),u=l("iterator"),f=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(p),v=0;v<h.length;v++){var y,g=h[v],b=p[g],m=a[g],k=m&&m.prototype;if(k&&(k[u]||s(k,u,d),k[f]||s(k,f,g),c[g]=d,b))for(y in o)k[y]||i(k,y,o[y],!0)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(2),n(3),n(360),n(362),n(363),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(9),d=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),l=d(l),u=f(u);var p=function(){function t(e){var n=this;(0,i.default)(this,t);var o=function(){};u.isObject(e)&&u.isFunction(e.onReady)&&(o=e.onReady);var r=new l.default(e);this.isReady=r.isReady.then((function(){n.exportAPI(r),o()}))}return(0,a.default)(t,[{key:"exportAPI",value:function(t){var e=this;["configuration"].forEach((function(n){e[n]=t[n]})),this.destroy=function(){for(var n in Object.values(t.moduleInstances).forEach((function(t){u.isFunction(t.destroy)&&t.destroy(),t.listeners.removeAll()})),t=null,e)Object.prototype.hasOwnProperty.call(e,n)&&delete e[n];Object.setPrototypeOf(e,null)},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((function(n){var o=(0,r.default)(n,2),i=o[0],a=o[1];Object.entries(a).forEach((function(n){var o=(0,r.default)(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[i][a]}))}))}}],[{key:"version",get:function(){return"2.20.0"}}]),t}();o.default=p,p.displayName="EditorJS",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){(e=t.exports=function(...t){return r(...t)}).__esModule=!0;const o=n(361),r=o.default;Object.assign(e,o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){},e.revert=function(){}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[],void 0===(i="function"==typeof(o=function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(t))})),this.insertBefore(e,this.firstChild)})})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(15),n(8),n(59),n(145),n(372)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(9),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=p(l),u=h(u),d=h(d);var v=n(373),y=[];v.keys().forEach((function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&y.push(v(t))}));var g=function(){function t(e){var n,o,s=this;(0,a.default)(this,t),this.moduleInstances={},this.eventsDispatcher=new d.default,this.isReady=new Promise((function(t,e){n=t,o=e})),Promise.resolve().then((0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.configuration=e,t.next=3,s.validate();case 3:return t.next=5,s.init();case 5:return t.next=7,s.start();case 7:l.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","log","","color: #E24A75"),setTimeout((0,i.default)(r.default.mark((function t(){var e,o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.render();case 2:s.configuration.autofocus&&(e=s.moduleInstances,o=e.BlockManager,(i=e.Caret).setToBlock(o.blocks[0],i.positions.START),o.highlightCurrentNode()),s.moduleInstances.UI.removeLoader(),n();case 5:case"end":return t.stop()}}),t)}))),500);case 9:case"end":return t.stop()}}),t)})))).catch((function(t){l.log("Editor.js is not ready because of ".concat(t),"error"),o(t)}))}var e,n;return(0,s.default)(t,[{key:"validate",value:(n=(0,i.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.config,n=e.holderId,o=e.holder,!n||!o){t.next=3;break}throw Error("«holderId» and «holder» param can't assign at the same time.");case 3:if(!l.isString(o)||c.default.get(o)){t.next=5;break}throw Error("element with ID «".concat(o,"» is missing. Pass correct holder's ID."));case 5:if(!o||!l.isObject(o)||c.default.isElement(o)){t.next=7;break}throw Error("«holder» value must be an Element node");case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"start",value:(e=(0,i.default)(r.default.mark((function t(){var e,n=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"],t.next=3,e.reduce((function(t,e){return t.then((0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.moduleInstances[e].prepare();case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof f.CriticalError)){t.next=9;break}throw new Error(t.t0.message);case 9:l.log("Module ".concat(e," was skipped because of %o"),"warn",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,5]])}))))}),Promise.resolve());case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}},{key:"constructModules",value:function(){var t=this;y.forEach((function(e){var n=l.isFunction(e)?e:e.default;try{t.moduleInstances[n.displayName]=new n({config:t.configuration,eventsDispatcher:t.eventsDispatcher})}catch(t){l.log("Module ".concat(n.displayName," skipped because"),"warn",t)}}))}},{key:"configureModules",value:function(){for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,t)&&(this.moduleInstances[t].state=this.getModulesDiff(t))}},{key:"getModulesDiff",value:function(t){var e={};for(var n in this.moduleInstances)n!==t&&(e[n]=this.moduleInstances[n]);return e}},{key:"configuration",set:function(t){var e,n;l.isObject(t)?this.config=Object.assign({},t):this.config={holder:t},l.deprecationAssert(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=l.LogLevels.VERBOSE),l.setLogLevel(this.config.logLevel),l.deprecationAssert(Boolean(this.config.initialBlock),"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var o={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,!l.isEmpty(this.config.data)&&this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data={blocks:[o]}),this.config.readOnly=this.config.readOnly||!1,(null===(e=this.config.i18n)||void 0===e?void 0:e.messages)&&u.default.setDictionary(this.config.i18n.messages),this.config.i18n.direction=(null===(n=this.config.i18n)||void 0===n?void 0:n.direction)||"ltr"},get:function(){return this.config}}]),t}();o.default=g,g.displayName="Core",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(142);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(107),r=n(371);function i(e,n,a){return r()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3)],void 0===(i="function"==typeof(o=function(o,r,i){"use strict";var a=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=a(r),i=a(i);var s=function(){function t(){(0,r.default)(this,t),this.subscribers={}}return(0,i.default)(t,[{key:"on",value:function(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"once",value:function(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push((function o(r){var i=e(r),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),i}))}},{key:"emit",value:function(t,e){this.subscribers[t]&&this.subscribers[t].reduce((function(t,e){return e(t)||t}),e)}},{key:"off",value:function(t,e){for(var n=0;n<this.subscribers[t].length;n++)if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),t}();o.default=s,s.displayName="EventsDispatcher",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o={"./api":79,"./api/":79,"./api/blocks":147,"./api/blocks.ts":147,"./api/caret":149,"./api/caret.ts":149,"./api/events":150,"./api/events.ts":150,"./api/i18n":151,"./api/i18n.ts":151,"./api/index":79,"./api/index.ts":79,"./api/inlineToolbar":152,"./api/inlineToolbar.ts":152,"./api/listeners":153,"./api/listeners.ts":153,"./api/notifier":154,"./api/notifier.ts":154,"./api/readonly":155,"./api/readonly.ts":155,"./api/sanitizer":156,"./api/sanitizer.ts":156,"./api/saver":157,"./api/saver.ts":157,"./api/selection":158,"./api/selection.ts":158,"./api/styles":159,"./api/styles.ts":159,"./api/toolbar":160,"./api/toolbar.ts":160,"./api/tooltip":161,"./api/tooltip.ts":161,"./blockEvents":162,"./blockEvents.ts":162,"./blockManager":163,"./blockManager.ts":163,"./blockSelection":164,"./blockSelection.ts":164,"./caret":165,"./caret.ts":165,"./crossBlockSelection":166,"./crossBlockSelection.ts":166,"./dragNDrop":167,"./dragNDrop.ts":167,"./modificationsObserver":168,"./modificationsObserver.ts":168,"./notifier":169,"./notifier.ts":169,"./paste":170,"./paste.ts":170,"./readonly":171,"./readonly.ts":171,"./rectangleSelection":172,"./rectangleSelection.ts":172,"./renderer":173,"./renderer.ts":173,"./sanitizer":174,"./sanitizer.ts":174,"./saver":175,"./saver.ts":175,"./toolbar":80,"./toolbar/":80,"./toolbar/blockSettings":176,"./toolbar/blockSettings.ts":176,"./toolbar/conversion":177,"./toolbar/conversion.ts":177,"./toolbar/index":80,"./toolbar/index.ts":80,"./toolbar/inline":178,"./toolbar/inline.ts":178,"./toolbar/toolbox":179,"./toolbar/toolbox.ts":179,"./tools":180,"./tools.ts":180,"./tooltip":181,"./tooltip.ts":181,"./ui":182,"./ui.ts":182};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=373},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(9),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=c(r),i=c(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t),this.allListeners=[]}return(0,i.default)(t,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=a.generateId("l"),i={id:r,element:t,eventType:e,handler:n,options:o},s=this.findOne(t,e,n);if(!s)return this.allListeners.push(i),t.addEventListener(e,n,o),r}},{key:"off",value:function(t,e,n,o){var r=this,i=this.findAll(t,e,n);i.forEach((function(t,e){var n=r.allListeners.indexOf(i[e]);n>-1&&(r.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options))}))}},{key:"offById",value:function(t){var e=this.findById(t);e&&e.element.removeEventListener(e.eventType,e.handler,e.options)}},{key:"findOne",value:function(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null}},{key:"findAll",value:function(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter((function(t){return t.eventType===e&&t.handler===n})):t&&e?o.filter((function(t){return t.eventType===e})):o}},{key:"removeAll",value:function(){this.allListeners.map((function(t){t.element.removeEventListener(t.eventType,t.handler,t.options)})),this.allListeners=[]}},{key:"destroy",value:function(){this.removeAll()}},{key:"findByEventTarget",value:function(t){return this.allListeners.filter((function(e){if(e.element===t)return e}))}},{key:"findByType",value:function(t){return this.allListeners.filter((function(e){if(e.eventType===t)return e}))}},{key:"findByHandler",value:function(t){return this.allListeners.filter((function(e){if(e.handler===t)return e}))}},{key:"findById",value:function(t){return this.allListeners.find((function(e){return e.id===t}))}}]),t}();o.default=l,l.displayName="Listeners",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(9),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=l(s),c=u(c);var f=function(){function t(e,n){(0,r.default)(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n}return(0,i.default)(t,[{key:"setItems",value:function(t){this.items=t}},{key:"next",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT)}},{key:"previous",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT)}},{key:"dropCursor",value:function(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}},{key:"leafNodesAndReturnIndex",value:function(e){var n=this;if(0===this.items.length)return this.cursor;var o=this.cursor;return-1===o?o=e===t.directions.RIGHT?-1:0:this.items[o].classList.remove(this.focusedCssClass),o=e===t.directions.RIGHT?(o+1)%this.items.length:(this.items.length+o-1)%this.items.length,a.default.canSetCaret(this.items[o])&&s.delay((function(){return c.default.setCursor(n.items[o])}),50)(),this.items[o].classList.add(this.focusedCssClass),o}},{key:"currentItem",get:function(){return-1===this.cursor?null:this.items[this.cursor]}}]),t}();o.default=f,f.displayName="DomIterator",f.directions={RIGHT:"right",LEFT:"left"},t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(9),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=l(a),s=u(s);var f=function(){function t(e){(0,r.default)(this,t),this.blocks=[],this.workingArea=e}return(0,i.default)(t,[{key:"push",value:function(t){this.blocks.push(t),this.insertToDOM(t)}},{key:"swap",value:function(t,e){var n=this.blocks[e];s.default.swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n}},{key:"move",value:function(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,r=Math.max(0,o),i=this.blocks[r];t>0?this.insertToDOM(n,"afterend",i):this.insertToDOM(n,"beforebegin",i),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(c.BlockToolAPI.MOVED,a)}},{key:"insert",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var r=this.blocks[t-1];this.insertToDOM(e,"afterend",r)}else{var i=this.blocks[t+1];i?this.insertToDOM(e,"beforebegin",i):this.insertToDOM(e)}}else this.push(e)}},{key:"remove",value:function(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED),this.blocks.splice(t,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.forEach((function(t){return t.call(c.BlockToolAPI.REMOVED)})),this.blocks.length=0}},{key:"insertAfter",value:function(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e)}},{key:"get",value:function(t){return this.blocks[t]}},{key:"indexOf",value:function(t){return this.blocks.indexOf(t)}},{key:"insertToDOM",value:function(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(c.BlockToolAPI.RENDERED)}},{key:"composeBlockEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return a.array(this.workingArea.children)}}],[{key:"set",value:function(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0)}},{key:"get",value:function(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e)}}]),t}();o.default=f,f.displayName="Blocks",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.r(e);var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(t,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),r(t,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var r in t.supportedCommands)if(t.supportedCommands[r].includes(e[n])){o=this.commands[r]=!0;break}o||(this.keys[e[n]]=!0)}for(var i in t.supportedCommands)this.commands[i]||(this.commands[i]=!1)}},{key:"execute",value:function(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},r=!0;for(n in this.commands)this.commands[n]!==o[n]&&(r=!1);var i,a=!0;for(i in this.keys)a=a&&e.keyCode===t.keyCodes[i];r&&a&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),t}();e.default=i}]).default},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e)}();var o=null,r=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout((function(){o.remove()}),r)}e.appendChild(o),o.classList.add("cdx-notify--bounce-in")}}}}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=y(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";var o,r,i,a,s,c;t.exports=(o="cdx-notify",r="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:c=function(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),i=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=i,n.classList.add(r),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e},confirm:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("button"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",l.innerHTML=t.cancelText||"Cancel",o.classList.add(a),l.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(l.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),l.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(l),e.appendChild(n),e},prompt:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("input"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__input"),t.placeholder&&l.setAttribute("placeholder",t.placeholder),t.default&&(l.value=t.default),t.inputType&&(l.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",(function(){d(l.value)})),o.addEventListener("click",e.remove.bind(e)),n.appendChild(l),n.appendChild(o),e.appendChild(n),e},getWrapper:function(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t}})}])},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){function t(t){var e=t.tags;if(!Object.keys(e).map((function(t){return typeof e[t]})).every((function(t){return"object"===t||"boolean"===t||"function"===t})))throw new Error("The configuration was invalid");this.config=t}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName)}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(t){return-1!==o.indexOf(t.nodeName)}function i(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e]}function a(t,e){return void 0===e||"boolean"==typeof e&&!e}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value)}return t.prototype.clean=function(t){const e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(t,e),c=o.firstChild();if(c)do{if(c.nodeType!==Node.TEXT_NODE){if(c.nodeType===Node.COMMENT_NODE){e.removeChild(c),this._sanitize(t,e);break}var l,u=r(c);u&&(l=Array.prototype.some.call(c.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(c)&&f,p=c.nodeName.toLowerCase(),h=i(this.config,p,c);if(u&&l||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==c.nodeName&&"STYLE"!==c.nodeName)for(;c.childNodes.length>0;)e.insertBefore(c.childNodes[0],c);e.removeChild(c),this._sanitize(t,e);break}for(var v=0;v<c.attributes.length;v+=1){var y=c.attributes[v];s(y,h,c)&&(c.removeAttribute(y.name),v-=1)}this._sanitize(t,c)}else if(""===c.data.trim()&&(c.previousElementSibling&&n(c.previousElementSibling)||c.nextElementSibling&&n(c.nextElementSibling))){e.removeChild(c),this._sanitize(t,e);break}}while(c=o.nextSibling())},t})?o.call(e,n,e,t):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.data,o=e.config,r=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==o.preserveBlank&&o.preserveBlank,this.data=n}return r(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),r(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),t}();t.exports=i},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]),o(r,{insert:"head",singleton:!1}),t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],c=e.base?s[0]+e.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,e),references:1}),o.push(u)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=p||(p=c(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(t,e),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o,r,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var s=(n=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),c=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(c).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("bold",12,14)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+B"}}],[{key:"sanitize",get:function(){return{b:{}}}}]),t}();o.default=c,c.displayName="BoldInlineTool",c.isInline=!0,c.title="Bold",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("italic",4,11)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+I"}}],[{key:"sanitize",get:function(){return{i:{}}}}]),t}();o.default=c,c.displayName="ItalicInlineTool",c.isInline=!0,c.title="Italic",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(25),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(9),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=l(c);var f=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new a.default}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.default.svg("link",14,10)),this.nodes.button.appendChild(s.default.svg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e)})),this.nodes.input}},{key:"surround",value:function(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a.default;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(t){var e=this.nodes.input.value||"";return e.trim()?this.validateURL(e)?(e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),void this.inlineToolbar.close()):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void c.log("Incorrect Link pasted","warn",e)):(this.selection.restore(),this.unlink(),t.preventDefault(),void this.closeActions())}},{key:"validateURL",value:function(t){return!/\s/.test(t)}},{key:"prepareLink",value:function(t){return t=t.trim(),t=this.addProtocol(t)}},{key:"addProtocol",value:function(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^/\s]/.test(t);return e||n||o||(t="http://"+t),t}},{key:"insertLink",value:function(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}],[{key:"sanitize",get:function(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}}]),t}();o.default=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.data,o=e.api;(0,r.default)(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=o,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make()}return(0,i.default)(t,[{key:"render",value:function(){return this.wrapper}},{key:"save",value:function(){return this.savedData}},{key:"make",value:function(){var t=a.default.make("div",this.CSS.wrapper),e=a.default.svg("sad-face",52,52),n=a.default.make("div",this.CSS.info),o=a.default.make("div",this.CSS.title,{textContent:this.title}),r=a.default.make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(r),t.appendChild(n),t}}]),t}();o.default=c,c.displayName="Stub",c.isReadOnlySupported=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(66),n(386),n(387),n(388)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),s=u(s),c=u(c),l=u(l);var f=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},d=function(){function t(e,n,o){(0,r.default)(this,t),this.api=o,this.config=e,this.editorConfig=n}return(0,i.default)(t,[{key:"get",value:function(t){var e=this.config[t],n=e.class,o=e.isInternal,r=void 0!==o&&o,i=f(e,["class","isInternal"]);return new(this.getConstructor(n))({name:t,constructable:n,config:i,api:this.api,isDefault:t===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:r})}},{key:"getConstructor",value:function(t){switch(!0){case t[a.InternalInlineToolSettings.IsInline]:return s.default;case t[a.InternalTuneSettings.IsTune]:return c.default;default:return l.default}}}]),t}();o.default=d,d.displayName="ToolsFactory",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(9),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=l.ToolType.Inline,t}return(0,i.default)(o,[{key:"create",value:function(){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings})}},{key:"title",get:function(){return this.constructable[l.InternalInlineToolSettings.Title]}}]),o}((l=u(l)).default);o.default=p,p.displayName="InlineTool",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(9),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=l.ToolType.Tune,t}return(0,i.default)(o,[{key:"create",value:function(t,e){return new this.constructable({api:this.api.getMethodsForTool(this),settings:this.settings,block:e,data:t})}}]),o}((l=u(l)).default);o.default=p,p.displayName="BlockTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(66),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(9),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=f(l),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=l.ToolType.Block,t}return(0,i.default)(o,[{key:"create",value:function(t,e,n){return new this.constructable({data:t,block:e,readOnly:n,api:this.api.getMethodsForTool(this),config:this.settings})}},{key:"isReadOnlySupported",get:function(){return!0===this.constructable[l.InternalBlockToolSettings.IsReadOnlySupported]}},{key:"isLineBreaksEnabled",get:function(){return this.constructable[l.InternalBlockToolSettings.IsEnabledLineBreaks]}},{key:"toolbox",get:function(){var t=this.constructable[l.InternalBlockToolSettings.Toolbox],e=this.config[l.UserSettings.Toolbox];if(!u.isEmpty(t)&&!1!==(null!=e?e:t))return Object.assign({},t,e)}},{key:"conversionConfig",get:function(){return this.constructable[l.InternalBlockToolSettings.ConversionConfig]}},{key:"enabledInlineTools",get:function(){return this.config[l.UserSettings.EnabledInlineTools]}},{key:"enabledBlockTunes",get:function(){return this.config[l.UserSettings.EnabledBlockTunes]}},{key:"pasteConfig",get:function(){return this.constructable[l.InternalBlockToolSettings.PasteConfig]||{}}}]),o}(l.default);o.default=h,h.displayName="BlockTool",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-down",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move down")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o+1);if(!r)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i=r.holder,a=i.getBoundingClientRect(),s=Math.abs(window.innerHeight-i.offsetHeight);a.top<window.innerHeight&&(s=window.scrollY+i.offsetHeight),window.scrollTo(0,s),this.api.blocks.move(o+1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveDownTune",c.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=this,o=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1)}}return(0,i.default)(t,[{key:"render",value:function(){var t=this;return this.nodes.button=a.default.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a.default.svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",(function(e){return t.handleClick(e)}),!1),this.api.tooltip.onHover(this.nodes.button,this.api.i18n.t("Delete")),this.nodes.button}},{key:"handleClick",value:function(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),t}();o.default=c,c.displayName="DeleteTune",c.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-up",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move up")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o),i=this.api.blocks.getBlockByIndex(o-1);if(0===o||!r||!i)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var a,s=r.holder,c=i.holder,l=s.getBoundingClientRect(),u=c.getBoundingClientRect();a=u.top>0?Math.abs(l.top)-Math.abs(u.top):window.innerHeight-Math.abs(l.top)+Math.abs(u.top),window.scrollBy(0,-1*a),this.api.blocks.move(o-1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveUpTune",c.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(29),n(2),n(3),n(5),n(6),n(4),n(146)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function o(){return(0,i.default)(this,o),n.apply(this,arguments)}return(0,a.default)(o,[{key:"blockTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isBlock()})))}},{key:"inlineTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isInline()})))}},{key:"blockTunes",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isTune()})))}},{key:"internalTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isInternal})))}},{key:"externalTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return!(0,r.default)(t,2)[1].isInternal})))}}]),o}((0,(u=f(u)).default)(Map));o.default=p,p.displayName="ToolsCollection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));class o{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.loadStyles(),this.prepare(),window.addEventListener("scroll",()=>{this.showed&&this.hide(!0)},{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(t,e,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const o=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(o.hidingDelay&&(this.hidingDelay=o.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof e+" given.");this.nodes.content.appendChild(e)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),o.placement){case"top":this.placeTop(t,o);break;case"left":this.placeLeft(t,o);break;case"right":this.placeRight(t,o);break;case"bottom":default:this.placeBottom(t,o)}o&&o.delay?this.showingTimeout=setTimeout(()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0},o.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(t=!1){if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(()=>{this.hide(!0)},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(t,e,n){t.addEventListener("mouseenter",()=>{this.show(t,e,n)}),t.addEventListener("mouseleave",()=>{this.hide()})}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const t="codex-tooltips-style";if(document.getElementById(t))return;const e=n(2),o=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,o)}placeBottom(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",o,r)}placeTop(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",o,r)}placeLeft(t,e){const n=t.getBoundingClientRect(),o=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",o,r)}placeRight(t,e){const n=t.getBoundingClientRect(),o=n.right+this.offsetRight+e.marginRight,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",o,r)}applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=e+"px",this.nodes.wrapper.style.top=n+"px"}make(t,e=null,n={}){const o=document.createElement(t);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}append(t,e){Array.isArray(e)?e.forEach(e=>t.appendChild(e)):t.appendChild(e)}prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(e=>t.prepend(e)):t.prepend(e)}}},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default},function(t,e,n){"use strict";n.r(e),e.default='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}'}])}));

/***/ }),

/***/ "./node_modules/@editorjs/image/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/image/dist/bundle.js ***!
  \*****************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=25)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){var o=n(2),r=setTimeout;function i(){}function a(t){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function u(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,a._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void s(e.promise,t)}c(e.promise,o)}else(1===t._state?c:s)(e.promise,t._value)}))):t._deferreds.push(e)}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof a)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void d((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){s(t,e)}var o,r}function s(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)u(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t((function(t){n||(n=!0,c(e,t))}),(function(t){n||(n=!0,s(e,t))}))}catch(t){if(n)return;n=!0,s(e,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,e){var n=new this.constructor(i);return u(this,new f(t,e,n)),n},a.prototype.finally=o.a,a.all=function(t){return new a((function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);var r=o.length;function i(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,(function(e){i(t,e)}),n)}o[t]=a,0==--r&&e(o)}catch(t){n(t)}}for(var a=0;a<o.length;a++)i(a,o[a])}))},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a((function(e){e(t)}))},a.reject=function(t){return new a((function(e,n){n(t)}))},a.race=function(t){return new a((function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)}))},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){r(t,0)},a._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=a}).call(this,n(5).setImmediate)},function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))}},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n(4);var r,i,a,u,c,s,l,f=n(8),d=(i=function(t){return new Promise((function(e,n){t=u(t),(t=c(t)).beforeSend&&t.beforeSend();var o=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");o.open(t.method,t.url),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach((function(e){var n=t.headers[e];o.setRequestHeader(e,n)}));var r=t.ratio;o.upload.addEventListener("progress",(function(e){var n=Math.round(e.loaded/e.total*100),o=Math.ceil(n*r/100);t.progress(Math.min(o,100))}),!1),o.addEventListener("progress",(function(e){var n=Math.round(e.loaded/e.total*100),o=Math.ceil(n*(100-r)/100)+r;t.progress(Math.min(o,100))}),!1),o.onreadystatechange=function(){if(4===o.readyState){var t=o.response;try{t=JSON.parse(t)}catch(t){}var r=f.parseHeaders(o.getAllResponseHeaders()),i={body:t,code:o.status,headers:r};l(o.status)?e(i):n(i)}},o.send(t.data)}))},a=function(t){return t.method="POST",i(t)},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.url&&"string"!=typeof t.url)throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==o(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(r).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(t){},t.beforeSend=t.beforeSend||function(t){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},c=function(t){switch(t.method){case"GET":var e=s(t.data,r.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+e:t.url+"?"+e;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||r.JSON}(t);(f.isFormData(t.data)||f.isFormElement(t.data))&&(n=r.FORM),t.data=s(t.data,n),n!==d.contentType.FORM&&(t.headers["content-type"]=n)}return t},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return f.urlEncode(t);case r.JSON:return f.jsonEncode(t);case r.FORM:return f.formEncode(t);default:return t}},l=function(t){return t>=200&&t<300},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(t){return t.method="GET",i(t)},post:a,transport:function(t){return t=u(t),f.selectFiles(t).then((function(e){for(var n=new FormData,o=0;o<e.length;o++)n.append(t.fieldName,e[o],e[o].name);f.isObject(t.data)&&Object.keys(t.data).forEach((function(e){var o=t.data[e];n.append(e,o)}));var r=t.beforeSend;return t.beforeSend=function(){return r(e)},t.data=n,a(t)}))},selectFiles:function(t){return delete(t=u(t)).beforeSend,f.selectFiles(t)}});t.exports=d},function(t,e,n){"use strict";n.r(e);var o=n(1);window.Promise=window.Promise||o.a},function(t,e,n){(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(6),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var o,r,i,a,u,c=1,s={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick((function(){h(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?(a="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),o=function(e){t.postMessage(a+e,"*")}):t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){h(t.data)},o=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):o=function(t){setTimeout(h,0,t)},d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return s[c]=r,o(c),c++},d.clearImmediate=p}function p(t){delete s[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=s[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(0),n(7))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!l){var t=u(d);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=n(9);t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"urlEncode",value:function(t){return r(t)}},{key:"jsonEncode",value:function(t){return JSON.stringify(t)}},{key:"formEncode",value:function(t){if(this.isFormData(t))return t;if(this.isFormElement(t))return new FormData(t);if(this.isObject(t)){var e=new FormData;return Object.keys(t).forEach((function(n){var o=t[n];e.append(n,o)})),e}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isFormData",value:function(t){return t instanceof FormData}},{key:"isFormElement",value:function(t){return t instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){var o=document.createElement("INPUT");o.type="file",t.multiple&&o.setAttribute("multiple","multiple"),t.accept&&o.setAttribute("accept",t.accept),o.style.display="none",document.body.appendChild(o),o.addEventListener("change",(function(t){var n=t.target.files;e(n),document.body.removeChild(o)}),!1),o.click()}))}},{key:"parseHeaders",value:function(t){var e=t.trim().split(/[\r\n]+/),n={};return e.forEach((function(t){var e=t.split(": "),o=e.shift(),r=e.join(": ");o&&(n[o]=r)})),n}}])&&o(e,n),t}()},function(t,e){var n=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},o=function(t,e,r,i){return e=e||null,r=r||"&",i=i||null,t?function(t){for(var e=new Array,n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}(Object.keys(t).map((function(a){var u,c,s=a;if(i&&(s=i+"["+s+"]"),"object"==typeof t[a]&&null!==t[a])u=o(t[a],null,r,s);else{e&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?e+Number(s):s);var l=t[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",u=n(s)+"="+n(l)}return u}))).join(r).replace(/[!'()*]/g,""):""};t.exports=o}])},function(t,e,n){t.exports=n(14)},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t,e,n){var o=n(4);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){function n(t,e,n,o,r,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function u(t){n(a,r,i,u,c,"next",t)}function c(t){n(a,r,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e,n){var o=n(19),r=n(20),i=n(5),a=n(21);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>'},function(t,e){t.exports='<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'},function(t,e){t.exports='<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>'},function(t,e,n){var o=n(22),r=n(23),i=n(5),a=n(24);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,o){var r=e&&e.prototype instanceof l?e:l,i=Object.create(r.prototype),a=new x(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return S()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=c(t,e,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(E([])));m&&m!==e&&n.call(m,r)&&(p=m);var g=d.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,u){var s=c(t[r],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new y(u(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),g[a]="Generator",g[r]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(16),r=n(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function u(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:g(d,e),references:1}),o.push(l)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(t,e){var n,o,r;if(e.singleton){var i=m++;n=h||(h=s(e)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=s(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=u(n[o]);a[r].references--}for(var i=c(t,e),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){(e=n(18)(!1)).push([t.i,'.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,u,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){var o=n(4);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var o=n(3),r=n.n(o),i=n(6),a=n.n(i),u=n(1),c=n.n(u),s=n(0),l=n.n(s),f=(n(15),n(7)),d=n.n(f),p=n(8),h=n.n(p),m=function(){function t(e){var n=e.api,o=e.config,r=e.onSelectFile,i=e.readOnly;c()(this,t),this.api=n,this.config=o,this.onSelectFile=r,this.readOnly=i,this.nodes={wrapper:g("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:g("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:g("div",this.CSS.imagePreloader),caption:g("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return l()(t,[{key:"render",value:function(e){return e.file&&0!==Object.keys(e.file).length?this.toggleStatus(t.status.UPLOADING):this.toggleStatus(t.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var t=this,e=g("div",[this.CSS.button]);return e.innerHTML=this.config.buttonContent||"".concat(h.a," ").concat(this.api.i18n.t("Select an Image")),e.addEventListener("click",(function(){t.onSelectFile()})),e}},{key:"showPreloader",value:function(e){this.nodes.imagePreloader.style.backgroundImage="url(".concat(e,")"),this.toggleStatus(t.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(t.status.EMPTY)}},{key:"fillImage",value:function(e){var n=this,o=/\.mp4$/.test(e)?"VIDEO":"IMG",r={src:e},i="load";"VIDEO"===o&&(r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,i="loadeddata"),this.nodes.imageEl=g(o,this.CSS.imageEl,r),this.nodes.imageEl.addEventListener(i,(function(){n.toggleStatus(t.status.FILLED),n.nodes.imagePreloader&&(n.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}},{key:"fillCaption",value:function(t){this.nodes.caption&&(this.nodes.caption.innerHTML=t)}},{key:"toggleStatus",value:function(e){for(var n in t.status)Object.prototype.hasOwnProperty.call(t.status,n)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(t.status[n]),e===t.status[n])}},{key:"applyTune",value:function(t,e){this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(t),e)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),t}(),g=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);Array.isArray(n)?(e=r.classList).add.apply(e,d()(n)):n&&r.classList.add(n);for(var i in o)r[i]=o[i];return r},v=n(9),y=n.n(v),b=n(10),w=n.n(b),_=n(11),x=n.n(_),E=function(){function t(e){var n=e.api,o=e.actions,r=e.onChange;c()(this,t),this.api=n,this.actions=o,this.onChange=r,this.buttons=[]}return l()(t,[{key:"render",value:function(e){var n=this,o=g("div",this.CSS.wrapper);return this.buttons=[],t.tunes.concat(this.actions).forEach((function(t){var r=n.api.i18n.t(t.title),i=g("div",[n.CSS.buttonBase,n.CSS.button],{innerHTML:t.icon,title:r});i.addEventListener("click",(function(){n.tuneClicked(t.name,t.action)})),i.dataset.tune=t.name,i.classList.toggle(n.CSS.buttonActive,e[t.name]),n.buttons.push(i),n.api.tooltip.onHover(i,r,{placement:"top"}),o.appendChild(i)})),o}},{key:"tuneClicked",value:function(t,e){if("function"==typeof e&&!e(t))return!1;var n=this.buttons.find((function(e){return e.dataset.tune===t}));n.classList.toggle(this.CSS.buttonActive,!n.classList.contains(this.CSS.buttonActive)),this.onChange(t)}},{key:"CSS",get:function(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}}],[{key:"tunes",get:function(){return[{name:"withBorder",icon:w.a,title:"With border"},{name:"stretched",icon:x.a,title:"Stretch image"},{name:"withBackground",icon:y.a,title:"With background"}]}}]),t}(),S=n(12),k=n.n(S),T=n(13),O=n.n(T),j=n(2),L=n.n(j),C=function(){function t(e){var n=e.config,o=e.onUpload,r=e.onError;c()(this,t),this.config=n,this.onUpload=o,this.onError=r}return l()(t,[{key:"uploadSelectedFile",value:function(t){var e=this,n=t.onPreview,o=function(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){n(t.target.result)}};(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?L.a.selectFiles({accept:this.config.types}).then((function(t){o(t[0]);var n=e.config.uploader.uploadByFile(t[0]);return F(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n})):L.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:function(t){o(t[0])},fieldName:this.config.field}).then((function(t){return t.body}))).then((function(t){e.onUpload(t)})).catch((function(t){e.onError(t)}))}},{key:"uploadByUrl",value:function(t){var e,n=this;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?F(e=this.config.uploader.uploadByUrl(t))||console.warn("Custom uploader method uploadByUrl should return a Promise"):e=L.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:t},this.config.additionalRequestData),type:L.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(t){return t.body})),e.then((function(t){n.onUpload(t)})).catch((function(t){n.onError(t)}))}},{key:"uploadByFile",value:function(t,e){var n,o=this,r=e.onPreview,i=new FileReader;if(i.readAsDataURL(t),i.onload=function(t){r(t.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)F(n=this.config.uploader.uploadByFile(t))||console.warn("Custom uploader method uploadByFile should return a Promise");else{var a=new FormData;a.append(this.config.field,t),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((function(t){var e=O()(t,2),n=e[0],o=e[1];a.append(n,o)})),n=L.a.post({url:this.config.endpoints.byFile,data:a,type:L.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(t){return t.body}))}n.then((function(t){o.onUpload(t)})).catch((function(t){o.onError(t)}))}}]),t}();function F(t){return Promise.resolve(t)===t}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */var P=function(){function t(e){var n=this,o=e.data,r=e.config,i=e.api,a=e.readOnly;c()(this,t),this.api=i,this.readOnly=a,this.config={endpoints:r.endpoints||"",additionalRequestData:r.additionalRequestData||{},additionalRequestHeaders:r.additionalRequestHeaders||{},field:r.field||"image",types:r.types||"image/*",captionPlaceholder:this.api.i18n.t(r.captionPlaceholder||"Caption"),buttonContent:r.buttonContent||"",uploader:r.uploader||void 0,actions:r.actions||[]},this.uploader=new C({config:this.config,onUpload:function(t){return n.onUpload(t)},onError:function(t){return n.uploadingFailed(t)}}),this.ui=new m({api:i,config:this.config,onSelectFile:function(){n.uploader.uploadSelectedFile({onPreview:function(t){n.ui.showPreloader(t)}})},readOnly:a}),this.tunes=new E({api:i,actions:this.config.actions,onChange:function(t){return n.tuneToggled(t)}}),this._data={},this.data=o}var e;return l()(t,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:k.a,title:"Image"}}}]),l()(t,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"save",value:function(){var t=this.ui.nodes.caption;return this._data.caption=t.innerHTML,this.data}},{key:"renderSettings",value:function(){return this.tunes.render(this.data)}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"onPaste",value:(e=a()(r.a.mark((function t(e){var n,o,i,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.type,t.next="tag"===t.t0?3:"pattern"===t.t0?15:"file"===t.t0?18:21;break;case 3:if(n=e.detail.data,!/^blob:/.test(n.src)){t.next=13;break}return t.next=7,fetch(n.src);case 7:return o=t.sent,t.next=10,o.blob();case 10:return i=t.sent,this.uploadFile(i),t.abrupt("break",21);case 13:return this.uploadUrl(n.src),t.abrupt("break",21);case 15:return a=e.detail.data,this.uploadUrl(a),t.abrupt("break",21);case 18:return u=e.detail.file,this.uploadFile(u),t.abrupt("break",21);case 21:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"onUpload",value:function(t){t.success&&t.file?this.image=t.file:this.uploadingFailed("incorrect response: "+JSON.stringify(t))}},{key:"uploadingFailed",value:function(t){console.log("Image Tool: uploading failed because of",t),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}},{key:"tuneToggled",value:function(t){this.setTune(t,!this._data[t])}},{key:"setTune",value:function(t,e){var n=this;this._data[t]=e,this.ui.applyTune(t,e),"stretched"===t&&Promise.resolve().then((function(){var t=n.api.blocks.getCurrentBlockIndex();n.api.blocks.stretchBlock(t,e)})).catch((function(t){console.error(t)}))}},{key:"uploadFile",value:function(t){var e=this;this.uploader.uploadByFile(t,{onPreview:function(t){e.ui.showPreloader(t)}})}},{key:"uploadUrl",value:function(t){this.ui.showPreloader(t),this.uploader.uploadByUrl(t)}},{key:"data",set:function(t){var e=this;this.image=t.file,this._data.caption=t.caption||"",this.ui.fillCaption(this._data.caption),E.tunes.forEach((function(n){var o=n.name,r=void 0!==t[o]&&(!0===t[o]||"true"===t[o]);e.setTune(o,r)}))},get:function(){return this._data}},{key:"image",set:function(t){this._data.file=t||{},t&&t.url&&this.ui.fillImage(t.url)}}],[{key:"pasteConfig",get:function(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}}]),t}()}]).default}));

/***/ }),

/***/ "./node_modules/@editorjs/underline/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/underline/dist/bundle.js ***!
  \*********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n(1).toString();var i=function(){function e(t){var n=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.button=null,this.tag="U",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return o(e,null,[{key:"CSS",get:function(){return"cdx-underline"}}]),o(e,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var n=this.api.selection.findParentTag(this.tag,e.CSS);n?this.unwrap(n):this.wrap(t)}}},{key:"wrap",value:function(t){var n=document.createElement(this.tag);n.classList.add(e.CSS),n.appendChild(t.extractContents()),t.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(e){this.api.selection.expandToTag(e);var t=window.getSelection(),n=t.getRangeAt(0),r=n.extractContents();e.parentNode.removeChild(e),n.insertNode(r),t.removeAllRanges(),t.addRange(n)}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag,e.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return n(5).default}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{u:{class:e.CSS}}}}]),e}();e.exports=i},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:b(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var i=h++;n=v||(v=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".cdx-underline {\n    text-decoration: underline;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 8 13" width="8" height="13">\n  <path d="M5.48 7.34v-.27c-.25.32-.51.58-.79.8a2.9 2.9 0 01-.9.48c-.32.1-.7.15-1.11.15-.5 0-.96-.1-1.36-.31a2.3 2.3 0 01-.93-.87A3.85 3.85 0 010 5.4V1.25C0 .83.1.52.28.31.48.11.72 0 1.03 0a1 1 0 01.77.31c.2.21.29.53.29.94v3.36c0 .48.04.89.12 1.22.08.33.23.59.44.77.21.2.5.29.86.29.35 0 .68-.11 1-.32.3-.2.53-.48.67-.82.12-.3.18-.95.18-1.95V1.25c0-.41.1-.73.3-.94.18-.2.44-.31.75-.31.3 0 .56.1.75.31.19.2.28.52.28.94v6.07c0 .4-.09.7-.27.9a.9.9 0 01-.7.3.9.9 0 01-.7-.31c-.2-.2-.29-.5-.29-.87zM.72 9.68h6.36a.72.72 0 010 1.44H.72a.72.72 0 010-1.44z"/>\n</svg>\n'}])}));

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var editorjs_undo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editorjs-undo */ "./node_modules/editorjs-undo/dist/bundle.js");
/* harmony import */ var editorjs_undo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(editorjs_undo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dist_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dist/index */ "./resources/js/dist/index.js");
/* harmony import */ var _dist_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dist_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var editorjs_paragraph_with_alignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editorjs-paragraph-with-alignment */ "./node_modules/editorjs-paragraph-with-alignment/dist/bundle.js");
/* harmony import */ var editorjs_paragraph_with_alignment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(editorjs_paragraph_with_alignment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/underline */ "./node_modules/@editorjs/underline/dist/bundle.js");
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_underline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);







$(document).ready(function () {
  var token = window.localStorage.getItem("api_token");
  var saveButton = document.getElementById('saveButton');
  var edit = document.getElementById('editorjs');
  $(document).ajaxStart(function () {
    $("#loadingModal").removeClass("hidden");
  }).ajaxStop(function () {
    $("#loadingModal").addClass("hidden");
  });
  $("#user-menu").click(function (e) {
    $("#userDropDown").toggleClass("hidden");
  });
  var editor = edit ? new (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default())({
    holder: 'editorjs',
    tools: {
      style: _dist_index__WEBPACK_IMPORTED_MODULE_3__.StyleInlineTool,
      underline: (_editorjs_underline__WEBPACK_IMPORTED_MODULE_5___default()),
      paragraph: {
        "class": (editorjs_paragraph_with_alignment__WEBPACK_IMPORTED_MODULE_4___default()),
        inlineToolbar: ["bold", "italic", "underline", "style"],
        preserveBlank: true // tunes: ['alignTune']

      },
      image: {
        "class": (_editorjs_image__WEBPACK_IMPORTED_MODULE_1___default()),
        config: {
          actions: [{
            name: "large",
            icon: "LG",
            title: "Large",
            action: function action(x) {
              return true;
            }
          }, {
            name: "medium",
            icon: "MD",
            title: "Medium",
            action: function action(x) {
              return true;
            }
          }, {
            name: "small",
            icon: "SM",
            title: "Small",
            action: function action(x) {
              return true;
            }
          }],
          endpoints: {
            byFile: '/api/upload',
            // Your backend file uploader endpoint
            byUrl: '/api/upload_url' // Your endpoint that provides uploading by Url

          },
          additionalRequestHeaders: {
            "Authorization": "Bearer ".concat(token)
          }
        }
      }
    },
    data: data ? data : null,
    placeholder: "Come on, write something already!",
    onReady: function onReady() {
      new (editorjs_undo__WEBPACK_IMPORTED_MODULE_2___default())({
        editor: editor
      });
    }
  }) : null;

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      editor.save().then(function (savedData) {
        $.ajax({
          type: "POST",
          url: "/api/blog/create",
          headers: {
            "Authorization": "Bearer ".concat(token)
          },
          data: JSON.stringify({
            title: $("#blogTitle").val(),
            img: $("#blogImgMain").attr("src"),
            data: savedData
          }),
          contentType: "application/json",
          success: function success(res) {
            window.location.assign("/dashboard");
          }
        });
      })["catch"](function (error) {
        console.error("Saving error", error);
      });
    });
  }

  $("#edUpdate").click(function () {
    editor.save().then(function (savedData) {
      $.ajax({
        type: "PUT",
        url: "/api/blog/update/".concat(ids),
        headers: {
          "Authorization": "Bearer ".concat(token)
        },
        data: JSON.stringify({
          data: savedData
        }),
        contentType: "application/json",
        success: function success(res) {
          $("#loadingModal").removeClass("hidden");
          window.location.assign("/dashboard");
        }
      });
    })["catch"](function (error) {
      console.error("Saving error", error);
    });
  });
  $("#edDelete").click(function () {
    axios__WEBPACK_IMPORTED_MODULE_6___default().delete("/blog/delete/".concat(ids)).then(function (res) {
      $("#loadingModal").removeClass("hidden");
      window.location.assign("/dashboard");
    })["catch"](function (res) {
      debugger;
    });
  });
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
    var fd = new FormData();
    var files = $('#blogImgMainFile')[0].files;

    if (files.length > 0) {
      fd.append("image", files[0]);
      $.ajax({
        url: "/api/upload",
        type: "POST",
        headers: {
          "Authorization": "Bearer ".concat(token)
        },
        data: fd,
        contentType: false,
        processData: false,
        success: function success(response) {
          if (response != 0) {
            $("#blogImgMain").attr("src", response.file.url);
            $("#blogImgMain").removeClass("hidden");
          } else {
            alert('file not uploaded');
          }
        }
      });
    } else {
      alert("Please select a file");
    }
  });
  $("#infoFormHeader").click(function () {
    $("#infoFormIcon").toggleClass("bg-gray-700");
    $("#blogFormInfo").toggleClass("hidden");
  });
  $("#userFiledHeader").click(function () {
    $("#filedIcon").toggleClass("bg-black");
    $("#userFiled").toggleClass("hidden");
  });
  $(".userFile").each(function (index, element) {
    var path = $("#p".concat(element.id)).text();
    $("#d".concat(element.id)).click(function (e) {
      $.ajax({
        url: "/api/delete",
        type: "DELETE",
        headers: {
          "Authorization": "Bearer ".concat(token)
        },
        data: {
          "path": path,
          "id": element.id.replace("f", "")
        },
        success: function success(response) {
          $("#".concat(element.id)).addClass("bg-red-500");
          $("#".concat(element.id)).find(".fileName").text("DELETED");
          $("#".concat(element.id)).find(".paths").text("DELETED");
          $("#".concat(element.id)).find(".fileActive").text("DELETED").removeClass("bg-green-100").addClass("bg-red-500");
          $("#".concat(element.id)).addClass("hidden");
          var t = $("#fileCount").text();
          t = parseInt(t);
          t--;
          $("#fileCount").text(t);
        }
      });
    });
    $("#i".concat(element.id)).click(function () {
      var s = $(this).attr("src");
      $("#userFileModal").attr("src", s);
      $("#imgModal").toggleClass("hidden");
    });
  });
  /**
   * Jquery animation just because why not
   */

  $("#dashWelcome").delay(1500).animate({
    display: "show",
    width: "50%",
    height: "100%"
  }, "slow", "linear", function () {
    $(this).show();
  });
  /**
   * Modal functions
   */

  $("#imgModal").click(function () {
    $(this).toggleClass("hidden");
  });
  $("#blogModal").click(function (e) {
    e.stopPropagation();
  });
  $("#closeTitleButton").click(function () {
    $("#imgModal").toggleClass("hidden");
  });
  $("#tiButton").click(function () {
    $("#imgModal").toggleClass("hidden");
  });
  $("#wProjectsButton").click(function () {
    window.location.assign("/#projects");
  });
  $("#githubButton").click(function () {
    window.location.href = "https://www.github.com/heftyb";
  });
});

/***/ }),

/***/ "./resources/js/dist/index.js":
/*!************************************!*\
  !*** ./resources/js/dist/index.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "StyleInlineTool", function () {
      return a;
    });

    var r = /*#__PURE__*/function (_HTMLElement) {
      _inherits(r, _HTMLElement);

      var _super = _createSuper(r);

      function r() {
        _classCallCheck(this, r);

        return _super.apply(this, arguments);
      }

      return r;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

    var i = /*#__PURE__*/function (_Error) {
      _inherits(i, _Error);

      var _super2 = _createSuper(i);

      function i() {
        var _this;

        _classCallCheck(this, i);

        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        _this = _super2.call.apply(_super2, [this].concat(e)), _this.name = "EditorJSStyleError";
        return _this;
      }

      return i;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    var s,
        o,
        l = function l(e, t, n) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, n), n;
    },
        c = function c(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    };

    var a = /*#__PURE__*/function () {
      function a(_ref) {
        var e = _ref.api;

        _classCallCheck(this, a);

        s.set(this, void 0), o.set(this, void 0), l(this, s, document.createElement("div")), l(this, o, e);
      }

      _createClass(a, [{
        key: "shortcut",
        get: function get() {
          return "CMD+S";
        }
      }, {
        key: "checkState",
        value: function checkState() {
          var _this2 = this;

          c(this, s).innerHTML = "";
          var e = c(this, o).selection.findParentTag("EDITORJS-STYLE");
          if (!e) return !1;
          c(this, s).innerHTML = "\n      <div style=\"margin-bottom: 16px; margin-left: 16px; margin-right: 16px; \">\n        <div style=\"display: flex; align-items: center; justify-content: space-between; \">\n          <div>Style settings</div>\n\n          <button class=\"delete-button ".concat(c(this, o).styles.settingsButton, "\" type=\"button\">\n            <svg class=\"icon\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n              <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n              <path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/>\n            </svg>\n          </button>\n        </div>\n\n        <label style=\"display: flex; align-items: center; justify-content: space-between; \">\n\n        <label style=\"display: flex; align-items: center; justify-content: space-between; \">\n          <span>Class</span>\n\n          <input class=\"class-input ").concat(c(this, o).styles.input, "\" style=\"width: 80%; \">\n        </label>\n      </div>\n    ");
          var t = c(this, s).querySelector(".delete-button"),
              n = c(this, s).querySelector(".class-input");
          if (!n) throw new i();
          return t.addEventListener("click", function () {
            var t = Array.from(e.childNodes).map(function (e) {
              return e.cloneNode(!0);
            });
            if (t.forEach(function (t) {
              var n;
              return null === (n = e.parentNode) || void 0 === n ? void 0 : n.insertBefore(t, e);
            }), e.remove(), 0 === t.length) return;
            var n = window.getSelection();
            if (!n) throw new i();
            n.removeAllRanges();
            var r = new Range();
            r.setStartBefore(t[0]), r.setEndAfter(t[t.length - 1]), n.addRange(r), c(_this2, s).innerHTML = "", c(_this2, o).tooltip.hide();
          }), c(this, o).tooltip.onHover(t, "Delete style", {
            placement: "top"
          }), n.value = e.className, n.addEventListener("input", function () {
            return e.setAttribute("class", n.value);
          }), !0;
        }
      }, {
        key: "clear",
        value: function clear() {
          c(this, s).innerHTML = "";
        }
      }, {
        key: "render",
        value: function render() {
          var e = document.createElement("button");
          return e.classList.add(c(this, o).styles.inlineToolButton), e.type = "button", e.innerHTML = '\n      <svg class="icon" height="24" viewBox="0 0 24 24" width="24">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"/>\n      </svg>\n    ', e;
        }
      }, {
        key: "renderActions",
        value: function renderActions() {
          return c(this, s);
        }
      }, {
        key: "surround",
        value: function surround(e) {
          var t = new r();
          e.surroundContents(t), c(this, o).selection.expandToTag(t);
        }
      }], [{
        key: "isInline",
        get: function get() {
          return !0;
        }
      }, {
        key: "sanitize",
        get: function get() {
          return {
            "editorjs-style": {
              "class": !0,
              id: !0,
              style: !0
            }
          };
        }
      }, {
        key: "title",
        get: function get() {
          return "Style";
        }
      }, {
        key: "prepare",
        value: function prepare() {
          customElements.get("editorjs-style") || customElements.define("editorjs-style", r);
        }
      }]);

      return a;
    }();

    s = new WeakMap(), o = new WeakMap();
  }]);
});

/***/ }),

/***/ "./node_modules/editorjs-paragraph-with-alignment/dist/bundle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/editorjs-paragraph-with-alignment/dist/bundle.js ***!
  \***********************************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n(1).toString();var r=function(){function t(e){var n=e.data,a=e.config,i=e.api,r=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.config=a,this.readOnly=r,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",alignment:{left:"ce-paragraph--left",center:"ce-paragraph--center",right:"ce-paragraph--right",justify:"ce-paragraph--justify"}},this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive},this.settings=[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"right",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>'},{name:"justify",icon:'<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>'}],this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=a.placeholder?a.placeholder:t.DEFAULT_PLACEHOLDER,this._data={text:n.text||"",alignment:n.alignment||a.defaultAlignment||t.DEFAULT_ALIGNMENT},this._element=this.drawView(),this.data=n,this._preserveBlank=void 0!==a.preserveBlank&&a.preserveBlank}return i(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center",right:"right",justify:"justify"}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}}]),i(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block,this._CSS.alignment[this.data.alignment]),t.contentEditable=!this.readOnly,t.dataset.placeholder=this.api.i18n.t(this._placeholder),t.innerHTML=this.data.text,t.addEventListener("keyup",this.onKeyUp),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+=t.text,alignment:this.data.alignment};this._element.innerHTML=this.data.text,this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return Object.assign(this.data,{text:t.innerHTML})}},{key:"onPaste",value:function(e){var n={text:e.detail.data.innerHTML,alignment:this.config.defaultAlignment||t.DEFAULT_ALIGNMENT};this.data=n}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.map((function(n){var a=document.createElement("div");return a.classList.add("cdx-settings-button"),a.innerHTML=n.icon,a.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(a),a})).forEach((function(e,n,a){e.addEventListener("click",(function(){t._toggleTune(t.settings[n].name),a.forEach((function(e,n){var a=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,a===t.data.alignment),t._element.classList.toggle(t._CSS.alignment[a],a===t.data.alignment)}))}))})),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"data",get:function(){return this._data},set:function(e){this._data={text:e.text||"",alignment:e.alignment||this.config.defaultAlignment||t.DEFAULT_ALIGNMENT},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0},alignment:{}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),t}();t.exports=r},function(t,e,n){var a=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);t.exports=i.locals||{}},function(t,e,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function c(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},a=[],i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var h=c(u),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(o[h].references++,o[h].updater(d)):o.push({identifier:u,updater:m(d,e),references:1}),a.push(u)}return a}function l(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,n){var a=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var f=null,g=0;function m(t,e){var n,a,i;if(e.singleton){var r=g++;n=f||(f=l(e)),a=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(e),a=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<n.length;a++){var i=c(n[a]);o[i].references--}for(var r=s(t,e),l=0;l<n.length;l++){var u=c(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=r}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n.ce-paragraph--right {\n    text-align: right;\n}\n.ce-paragraph--center {\n    text-align: center;\n}\n.ce-paragraph--left {\n    text-align: left;\n}\n\n.ce-paragraph--justify {\n    text-align: justify;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n\n\n.svg-icon {\n    width: 1em;\n    height: 1em;\n}\n\n.svg-icon path,\n.svg-icon polygon,\n.svg-icon rect {\n    fill: #4691f6;\n}\n\n.svg-icon circle {\n    stroke: #4691f6;\n    stroke-width: 1;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var i=(o=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}var o,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);a&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])}));

/***/ }),

/***/ "./node_modules/editorjs-undo/dist/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/editorjs-undo/dist/bundle.js ***!
  \***************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"default",(function(){return s}));var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.holder=n,this.observer=null,this.debounceTimer=200,this.mutationDebouncer=this.debounce((function(){e()}),this.debounceTimer)}var e,n,o;return e=t,(n=[{key:"setMutationObserver",value:function(){var t=this,e=document.querySelector("#".concat(this.holder));this.observer=new MutationObserver((function(e){t.mutationHandler(e)})),this.observer.observe(e,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t){var e=this,n=!1;t.forEach((function(t){switch(t.type){case"childList":t.target.id===e.holder?e.onDestroy():n=!0;break;case"characterData":n=!0;break;case"attributes":t.target.classList.contains("ce-block")||(n=!0)}})),n&&this.mutationDebouncer()}},{key:"debounce",value:function(t,e){var n,i=this;return function(){for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];var a=i;clearTimeout(n),n=setTimeout((function(){return t.apply(a,r)}),e)}}},{key:"onDestroy",value:function(){var t=new CustomEvent("destroy");document.dispatchEvent(t),this.observer.disconnect()}}])&&i(e.prototype,n),o&&i(e,o),t}();function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i={maxLength:30,onUpdate:function(){}};this.editor=e.editor,this.shouldSaveHistory=!0,this.maxLength=e.maxLength?e.maxLength:i.maxLength,this.onUpdate=e.onUpdate?e.onUpdate:i.onUpdate,new o((function(){return n.registerChange()}),this.editor.configuration.holder).setMutationObserver(),this.setEventListeners(),this.initialItem=null,this.clear()}var e,n,i;return e=t,(n=[{key:"truncate",value:function(t,e){for(;t.length>e;)t.shift()}},{key:"initialize",value:function(t){var e="blocks"in t?t.blocks:t,n={index:e.length-1,state:e};this.stack[0]=n,this.initialItem=n}},{key:"clear",value:function(){this.stack=this.initialItem?[this.initialItem]:[{index:0,state:[]}],this.position=0,this.onUpdate()}},{key:"registerChange",value:function(){var t=this;this.editor&&this.editor.save&&this.shouldSaveHistory&&this.editor.save().then((function(e){t.editorDidUpdate(e.blocks)&&t.save(e.blocks)})),this.shouldSaveHistory=!0}},{key:"editorDidUpdate",value:function(t){var e=this.stack[this.position].state;return t.length!==e.length||JSON.stringify(e)!==JSON.stringify(t)}},{key:"save",value:function(t){this.position>=this.maxLength&&this.truncate(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1);var e=this.editor.blocks.getCurrentBlockIndex();this.stack.push({index:e,state:t}),this.position+=1,this.onUpdate()}},{key:"undo",value:function(){var t=this;if(this.canUndo()){this.shouldSaveHistory=!1;var e=this.stack[this.position-=1],n=e.index,i=e.state;this.onUpdate(),this.editor.blocks.render({blocks:i}).then((function(){return t.editor.caret.setToBlock(n,"end")}))}}},{key:"redo",value:function(){var t=this;if(this.canRedo()){this.shouldSaveHistory=!1;var e=this.stack[this.position+=1],n=e.index,i=e.state;this.onUpdate(),this.editor.blocks.render({blocks:i}).then((function(){return t.editor.caret.setToBlock(n,"end")}))}}},{key:"canUndo",value:function(){return this.position>0}},{key:"canRedo",value:function(){return this.position<this.count()}},{key:"count",value:function(){return this.stack.length-1}},{key:"setEventListeners",value:function(){var t=this,e=/(Mac)/i.test(navigator.platform)?"metaKey":"ctrlKey",n=function(n){n[e]&&"z"===n.key&&(n.preventDefault(),t.undo())},i=function(n){n[e]&&"y"===n.key&&(n.preventDefault(),t.redo())};document.addEventListener("keydown",n),document.addEventListener("keydown",i),document.addEventListener("destroy",(function(){document.removeEventListener("keydown",n),document.removeEventListener("keydown",i)}))}}])&&r(e.prototype,n),i&&r(e,i),t}()}]).default}));

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;