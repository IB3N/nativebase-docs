(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return a?n.a.createElement(u,c(c({ref:t},l),{},{components:a})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},667:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(1583)),s={id:"progress",title:"Progress"},c={unversionedId:"progress",id:"version-3.0.0-next.36/progress",isDocsHomePage:!1,title:"Progress",description:"Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/versioned_docs/version-3.0.0-next.36/progress.md",slug:"/progress",permalink:"/docs/3.0.0-next.36/progress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/progress.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"CircularProgress",permalink:"/docs/3.0.0-next.36/circularProgress"},next:{title:"Skeleton",permalink:"/docs/3.0.0-next.36/skeleton"}},i=[{value:"Import",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Progress colorScheme and Sizes",id:"progress-colorscheme-and-sizes",children:[]},{value:"Rounded Progress",id:"rounded-progress",children:[]},{value:"Custom Track Color",id:"custom-track-color",children:[]}]},{value:"Props",id:"props",children:[]}],l={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Progress")," is used to display the progress status for a task that takes a long time or consists of several steps."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Progress } from 'native-base';\n")),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/3.0.0-next.36/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"progress-colorscheme-and-sizes"},"Progress colorScheme and Sizes"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress ColorSchemeSizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22xs%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22sm%22%20colorScheme%3D%22success%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22md%22%20colorScheme%3D%22dark%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22lg%22%20colorScheme%3D%22danger%22%20mb%3D%7B4%7D%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22xl%22%20colorScheme%3D%22warning%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%222xl%22%20colorScheme%3D%22light%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"rounded-progress"},"Rounded Progress"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Rounded","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20rounded%3D%2250%22%20size%3D%22lg%22%20colorScheme%3D%22blue%22%20mb%3D%7B4%7D%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h3",{id:"custom-track-color"},"Custom Track Color"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Progress Custom Track Color","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Box%2C%20Progress%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ProgressComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CProgress%20size%3D%22lg%22%20colorScheme%3D%22warning%22%20bg%3D%22teal.200%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CProgressComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value of Progress."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"colorScheme"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'The color of the radio when it\'s checked. This should be one of the color keys in the theme (e.g."green", "red").'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"size"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"2xl"),", ",Object(o.b)("inlineCode",{parentName:"td"},"xl"),",",Object(o.b)("inlineCode",{parentName:"td"},"lg"),", ",Object(o.b)("inlineCode",{parentName:"td"},"md"),", ",Object(o.b)("inlineCode",{parentName:"td"},"sm"),", ",Object(o.b)("inlineCode",{parentName:"td"},"xs")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defines height of Progress"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"md"))))))}d.isMDXComponent=!0}}]);