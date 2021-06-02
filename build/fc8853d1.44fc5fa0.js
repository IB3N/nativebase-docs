(window.webpackJsonp=window.webpackJsonp||[]).push([[1486],{1557:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(1583)),c={},i={unversionedId:"ZStack",id:"version-3.0.0-next.36/ZStack",isDocsHomePage:!1,title:"ZStack",description:"ZStack aligns items absolutely in the z-axis.",source:"@site/versioned_docs/version-3.0.0-next.36/ZStack.md",slug:"/ZStack",permalink:"/docs/3.0.0-next.36/ZStack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/ZStack.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"Wrap",permalink:"/docs/3.0.0-next.36/wrap"},next:{title:"Button",permalink:"/docs/3.0.0-next.36/button"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Props",id:"props",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ZStack")," aligns items absolutely in the z-axis."),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/3.0.0-next.36/view"}),Object(o.b)("inlineCode",{parentName:"a"},"View")))),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { ZStack } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("div",{className:"snack-player","data-snack-name":"ZStack Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ZStack%2C%20Box%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ZStackComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CZStack%20mt%3D%7B-20%7D%20ml%3D%7B-20%7D%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22emerald.400%22%20size%3D%7B20%7D%20rounded%3D%22lg%22%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22rose.400%22%20mt%3D%7B5%7D%20ml%3D%7B5%7D%20size%3D%7B20%7D%20rounded%3D%22lg%22%20shadow%3D%7B8%7D%20%2F%3E%0A%20%20%20%20%20%20%3CBox%0A%20%20%20%20%20%20%20%20bg%3D%22lightBlue.400%22%0A%20%20%20%20%20%20%20%20mt%3D%7B10%7D%0A%20%20%20%20%20%20%20%20ml%3D%7B10%7D%0A%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22lg%22%0A%20%20%20%20%20%20%20%20shadow%3D%7B8%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FZStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CZStackComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("br",null),Object(o.b)("p",null,"You can pass ",Object(o.b)("inlineCode",{parentName:"p"},'alignItems="center"')," ",Object(o.b)("inlineCode",{parentName:"p"},'justifyContent="center"')," to vertically and horizontally center the children."),Object(o.b)("div",{className:"snack-player","data-snack-name":"ZStack Center","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ZStack%2C%20Box%2C%20Text%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ZStackComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%20%20%3CZStack%20alignItems%3D%22center%22%20justifyContent%3D%22center%22%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22emerald.400%22%20size%3D%7B48%7D%20rounded%3D%22lg%22%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22rose.400%22%20size%3D%7B32%7D%20rounded%3D%22lg%22%20shadow%3D%7B8%7D%20%2F%3E%0A%20%20%20%20%20%20%3CBox%20bg%3D%22lightBlue.400%22%20size%3D%7B16%7D%20rounded%3D%22lg%22%20shadow%3D%7B8%7D%20%2F%3E%0A%20%20%20%20%3C%2FZStack%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CZStackComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reversed"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction to stack the elements."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||o;return a?r.a.createElement(u,i(i({ref:t},s),{},{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);