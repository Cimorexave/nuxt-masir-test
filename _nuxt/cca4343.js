(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(t,e,n){"use strict";n.r(e);var r={name:"Button",props:["children"]},o=n(29),component=Object(o.a)(r,(function(){return(0,this._self._c)("button",[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(144).default})},196:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("70810ad1",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n.r(e);var r={name:"Header",data:function(){return{isDark:!1}},methods:{switchMode:function(){this.isDark=!this.isDark,this.$emit("switchedMode",this.isDark)}}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex flex-row justify-between items-center lg:p-10 lg:py-5 lg:text-lg p-5 w-full dark:bg-slate-700 dark:text-white bg-white shadow-xl"},[e("div",{staticClass:"font-bold hover:animate-pulse"},[t._v("Where in the world?")]),t._v(" "),e("button",{staticClass:"dark:hover:text-gray-300 hover:text-slate-500 transition-all duration-300",on:{click:t.switchMode}},[t._v("\n    "+t._s(t.isDark?"Light":"Dark")+" Mode\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(144).default,Header:n(203).default})},209:function(t,e,n){"use strict";var r={name:"layout",data:function(){return{isDark:!1}},methods:{switchMode:function(t){console.log(t),this.isDark=t}}},o=(n(271),n(29)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:t.isDark?"dark":""},[e("Header",{on:{switchedMode:t.switchMode}}),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(203).default})},212:function(t,e,n){n(213),t.exports=n(214)},269:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("9593c05c",content,!0,{sourceMap:!1})},270:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,'/*! tailwindcss v3.2.3 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.static{position:static;}.flex{display:flex;}.hidden{display:none;}.h-screen{height:100vh;}.h-max{height:-moz-max-content;height:max-content;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}.w-\\[90\\%\\]{width:90%;}.w-3{width:0.75rem;}.w-7{width:1.75rem;}.max-w-\\[90\\%\\]{max-width:90%;}.max-w-\\[80\\%\\]{max-width:80%;}.basis-1\\/4{flex-basis:25%;}.flex-row{flex-direction:row;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.items-start{align-items:flex-start;}.items-center{align-items:center;}.justify-between{justify-content:space-between;}.justify-evenly{justify-content:space-evenly;}.gap-5{gap:1.25rem;}.gap-1{gap:0.25rem;}.gap-3{gap:0.75rem;}.gap-12{gap:3rem;}.gap-10{gap:2.5rem;}.gap-2{gap:0.5rem;}.gap-7{gap:1.75rem;}.rounded-md{border-radius:0.375rem;}.rounded-sm{border-radius:0.125rem;}.rounded-t-md{border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-5{padding:1.25rem;}.p-2{padding:0.5rem;}.p-20{padding:5rem;}.p-1{padding:0.25rem;}.px-5{padding-left:1.25rem;padding-right:1.25rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.pb-5{padding-bottom:1.25rem;}.text-center{text-align:center;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.font-bold{font-weight:700;}.font-semibold{font-weight:600;}.font-normal{font-weight:400;}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:0 0 #0000, 0 0 #0000, var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-200{transition-duration:200ms;}.duration-300{transition-duration:300ms;}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@keyframes pulse{50%{opacity:.5;}}.hover\\:animate-pulse:hover{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity));}.hover\\:text-slate-500:hover{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity));}.dark .dark\\:bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));}.dark .dark\\:bg-slate-600{--tw-bg-opacity:1;background-color:rgb(71 85 105 / var(--tw-bg-opacity));}.dark .dark\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.dark .dark\\:hover\\:bg-slate-600:hover{--tw-bg-opacity:1;background-color:rgb(71 85 105 / var(--tw-bg-opacity));}.dark .dark\\:hover\\:text-gray-300:hover{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity));}@media (min-width: 1024px){.lg\\:flex{display:flex;}.lg\\:grid{display:grid;}.lg\\:hidden{display:none;}.lg\\:h-\\[27rem\\]{height:27rem;}.lg\\:w-\\[50\\%\\]{width:50%;}.lg\\:w-auto{width:auto;}.lg\\:w-full{width:100%;}.lg\\:w-\\[70\\%\\]{width:70%;}.lg\\:basis-1\\/3{flex-basis:33.333333%;}.lg\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.lg\\:flex-row{flex-direction:row;}.lg\\:justify-end{justify-content:flex-end;}.lg\\:justify-between{justify-content:space-between;}.lg\\:justify-evenly{justify-content:space-evenly;}.lg\\:gap-3{gap:0.75rem;}.lg\\:gap-16{gap:4rem;}.lg\\:gap-10{gap:2.5rem;}.lg\\:gap-20{gap:5rem;}.lg\\:p-3{padding:0.75rem;}.lg\\:p-5{padding:1.25rem;}.lg\\:p-10{padding:2.5rem;}.lg\\:p-8{padding:2rem;}.lg\\:px-5{padding-left:1.25rem;padding-right:1.25rem;}.lg\\:px-8{padding-left:2rem;padding-right:2rem;}.lg\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}.lg\\:pb-10{padding-bottom:2.5rem;}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem;}}',""]),r.locals={},t.exports=r},271:function(t,e,n){"use strict";n(196)},272:function(t,e,n){var r=n(77)((function(i){return i[1]}));r.push([t.i,'*,body,html{font-family:"Open Sans",sans-serif}',""]),r.locals={},t.exports=r},50:function(t,e,n){"use strict";var r={props:["error"],layout:"layout",mounted:function(){console.log(this.error)}},o=n(29),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-20 dark:bg-slate-800 dark:text-white h-screen bg-gray-100"},[t._v("\n  Error: "+t._s(t.error.statusCode)+" "),e("br"),t._v("\n  "+t._s(t.error.message)+" "),e("br"),t._v(" "),e("nuxt-link",{staticClass:"py-2 px-8 w-7 rounded-sm shadow-md dark:text-white dark:bg-slate-700 bg-white",attrs:{to:"/"}},[t._v("\n    Back\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports}},[[212,7,1,8]]]);