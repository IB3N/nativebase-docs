(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},981:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(1583)),o={id:"list",title:"List"},l={unversionedId:"list",id:"version-3.0.0-next.25/list",isDocsHomePage:!1,title:"List",description:"List is used to display list items.",source:"@site/versioned_docs/version-3.0.0-next.25/list.md",slug:"/list",permalink:"/docs/3.0.0-next.25/list",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.25/list.md",version:"3.0.0-next.25",sidebar:"version-3.0.0-next.25/componentsSidebar",previous:{title:"KBD",permalink:"/docs/3.0.0-next.25/Kbd"},next:{title:"Stat",permalink:"/docs/3.0.0-next.25/stat"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"List with ListIcon",id:"list-with-listicon",children:[]},{value:"Props",id:"props",children:[{value:"List/Ul/Ol Props",id:"listulol-props",children:[]},{value:"Copy of List/Ul/Ol Props",id:"copy-of-listulol-props",children:[]}]}],b={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"List is used to display list items."),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Box"),", ",Object(i.b)("inlineCode",{parentName:"li"},"VStack")," from native-base")),Object(i.b)("h2",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { List, ListItem, ListIcon, Ol, Ul, Li } from 'native-base';\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("div",{className:"snack-player","data-snack-name":"List Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Li%2C%20Heading%2C%20Ul%2C%20Ol%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20height%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B32%7D%20color%3D%22indigo.500%22%3E%0A%20%20%20%20%20%20%20%20Unordered%20List%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3COl%20my%3D%7B2%7D%20fontSize%3D%7B24%7D%20spacing%3D%7B4%7D%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EInferno%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EMirage%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EDust%202%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3ENuke%3C%2FLi%3E%0A%20%20%20%20%20%20%3C%2FOl%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B32%7D%20color%3D%22indigo.500%22%3E%0A%20%20%20%20%20%20%20%20Ordered%20List%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CUl%20mt%3D%7B2%7D%20fontSize%3D%7B24%7D%20spacing%3D%7B4%7D%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EInferno%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EMirage%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3EDust%202%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3ENuke%3C%2FLi%3E%0A%20%20%20%20%20%20%3C%2FUl%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"list-with-listicon"},"List with ListIcon"),Object(i.b)("div",{className:"snack-player","data-snack-name":"List List with ListIcon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20ListIcon%2C%20Li%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20ListComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20height%3D%2250%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20color%3D%22indigo.500%22%3EList%20with%20Icons%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20mt%3D%7B2%7D%20fontSize%3D%7B32%7D%20spacing%3D%7B4%7D%20color%3D%22red.200%22%3E%0A%20%20%20%20%20%20%20%20%3CLi%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22check-circle-outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22green.400%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22MaterialIcons%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Server%20went%20up%0A%20%20%20%20%20%20%20%20%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListIcon%20name%3D%22cancel%22%20color%3D%22red.400%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Server%20went%20down%0A%20%20%20%20%20%20%20%20%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListIcon%20name%3D%22equalizer%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Graphs%20and%20stats%0A%20%20%20%20%20%20%20%20%3C%2FLi%3E%0A%20%20%20%20%20%20%20%20%3CLi%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListIcon%20name%3D%22attach-file%22%20color%3D%22gray.400%22%20type%3D%22MaterialIcons%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Attachments%0A%20%20%20%20%20%20%20%20%3C%2FLi%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CListComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"listulol-props"},"List/Ul/Ol Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spacing"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The space between each list item."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ol or ordered"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Convert List to Ordered List ( can be used with List only )."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ul or unordered"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Convert List to Unordered List ( can be used with List only )."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The starting number for Ol or List with ol/ordered prop."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"It composes ",Object(i.b)("strong",{parentName:"p"},"Box")," so you can pass all ",Object(i.b)("strong",{parentName:"p"},"Box")," Props."),Object(i.b)("h3",{id:"copy-of-listulol-props"},"Copy of List/Ul/Ol Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spacing"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The space between each list item."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ol or ordered"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Convert List to Ordered List ( can be used with List only )."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ul or unordered"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Convert List to Unordered List ( can be used with List only )."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The starting number for Ol or List with ol/ordered prop."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))))}s.isMDXComponent=!0}}]);