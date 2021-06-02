(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1583:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(o),u=n,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||r;return o?a.a.createElement(m,c(c({ref:t},l),{},{components:o})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},287:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),r=(o(0),o(1583)),i={id:"popOver",title:"Popover"},c={unversionedId:"popOver",id:"version-3.0.0-next.30/popOver",isDocsHomePage:!1,title:"Popover",description:"Popover is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element.",source:"@site/versioned_docs/version-3.0.0-next.30/popOver.md",slug:"/popOver",permalink:"/docs/3.0.0-next.30/popOver",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.30/popOver.md",version:"3.0.0-next.30",sidebar:"version-3.0.0-next.30/componentsSidebar",previous:{title:"Overlay",permalink:"/docs/3.0.0-next.30/overlay"},next:{title:"Accordion",permalink:"/docs/3.0.0-next.30/accordion"}},p=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Size",id:"size",children:[]},{value:"initialFocusRef and closeOnBlur",id:"initialfocusref-and-closeonblur",children:[]}]},{value:"Props",id:"props",children:[{value:"Popover.Content",id:"popovercontent",children:[]},{value:"Popover.Header",id:"popoverheader",children:[]},{value:"Popover.Footer",id:"popoverfooter",children:[]},{value:"Popover.Body",id:"popoverbody",children:[]},{value:"Popover.CloseButton\xa0",id:"popoverclosebutton",children:[]}]}],l={toc:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Trigger"),": Used to wrap the reference (or trigger) element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Content"),": The popover itself."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Header"),": The header of the popover."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.Body"),": The body of the popover."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Popover.CloseButton"),": A button to close the popover.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Popover } from 'native-base';\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"basic"},"Basic"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%20width%3D%7B250%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%3EConfirmation!%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3EAre%20you%20sure%20you%20want%20to%20have%20that%20milkshake%3F%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"size"},"Size"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover Size","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%20for%20size%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%3EConfirmation!%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3EAre%20you%20sure%20you%20want%20to%20have%20that%20milkshake%3F%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"initialfocusref-and-closeonblur"},"initialFocusRef and closeOnBlur"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Popover initialFocusRef and closeOnBlur","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Popover%2C%0A%20%20Button%2C%0A%20%20Input%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PopoverComponent%20()%20%7B%0A%20%20const%20initialFocusRef%20%3D%20React.useRef()%3B%0A%20%20return%20(%0A%20%20%20%20%3CPopover%20initialFocusRef%3D%7BinitialFocusRef%7D%20closeOnBlur%3D%7Bfalse%7D%3E%0A%20%20%20%20%20%20%3CPopover.Trigger%3E%0A%20%20%20%20%20%20%20%20%3CButton%3ETrigger%3C%2FButton%3E%0A%20%20%20%20%20%20%3C%2FPopover.Trigger%3E%0A%20%20%20%20%20%20%3CPopover.Content%20width%3D%7B250%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopover.CloseButton%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Header%20fontSize%3D%7B20%7D%20fontWeight%3D%7B700%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Header%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Header%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Body%3E%0A%20%20%20%20%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%7BinitialFocusRef%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20placeholder%3D%22I%20will%20get%20focused%20on%20Popover%20opening%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20This%20Popover%20won't%20close%20on%20clicking%20outside%20the%20popover%20area.%0A%20%20%20%20%20%20%20%20%3C%2FPopover.Body%3E%0A%20%20%20%20%20%20%20%20%3CPopover.Footer%3EThis%20is%20the%20footer%3C%2FPopover.Footer%3E%0A%20%20%20%20%20%20%3C%2FPopover.Content%3E%0A%20%20%20%20%3C%2FPopover%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPopoverComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can pass custom backgroundColor using ",Object(r.b)("inlineCode",{parentName:"p"},"bg")," or ",Object(r.b)("inlineCode",{parentName:"p"},"backgroundColor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"borderColor")," and ",Object(r.b)("inlineCode",{parentName:"p"},"borderWidth")," to Popover."))),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onOpen"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback fired when the popover opens."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onClose"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback fired when the popover closes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initialFocusRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.Ref"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ref of the element that should receive focus when the popover opens."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"finalFocusRef"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"React.Ref"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ref of the element that should receive focus when the popover closes."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"closeOnBlur"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the popover will close when you blur it out by pressing outside."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The top-level id to use for the Popover and it's sub-components."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"xs"),", ",Object(r.b)("inlineCode",{parentName:"td"},"sm"),",",Object(r.b)("inlineCode",{parentName:"td"},"md"),",",Object(r.b)("inlineCode",{parentName:"td"},"lg"),",",Object(r.b)("inlineCode",{parentName:"td"},"xl"),",",Object(r.b)("inlineCode",{parentName:"td"},"full"),", number, string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size of the Popover component."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"popovercontent"},"Popover.Content"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Content")," composes the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.30/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(r.b)("h3",{id:"popoverheader"},"Popover.Header"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Header")," composes the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.30/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(r.b)("h3",{id:"popoverfooter"},"Popover.Footer"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Footer")," composes the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.30/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(r.b)("h3",{id:"popoverbody"},"Popover.Body"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.Body")," composes the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.30/box"}),Object(r.b)("inlineCode",{parentName:"a"},"Box")),"\xa0component."),Object(r.b)("h3",{id:"popoverclosebutton"},"Popover.CloseButton\xa0"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Popover.CloseButton")," composes the\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.0.0-next.30/closeButton"}),Object(r.b)("inlineCode",{parentName:"a"},"CloseButton")),"\xa0component."))}b.isMDXComponent=!0}}]);