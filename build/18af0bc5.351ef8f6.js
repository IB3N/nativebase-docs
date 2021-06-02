(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(1583)),c={id:"VStack",title:"VStack / Column"},i={unversionedId:"VStack",id:"VStack",isDocsHomePage:!1,title:"VStack / Column",description:"VStack aligns items vertically.Column is also an alias for VStack.",source:"@site/docs/VStack.md",slug:"/VStack",permalink:"/docs/next/VStack",editUrl:"https://github.com/nativebase/website/tree/main/docs/VStack.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Stack",permalink:"/docs/next/stack"},next:{title:"ZStack",permalink:"/docs/next/ZStack"}},p=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[{value:"Important \ud83d\udea8",id:"important-",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"VStack")," aligns items vertically.",Object(o.b)("inlineCode",{parentName:"p"},"Column")," is also an alias for ",Object(o.b)("inlineCode",{parentName:"p"},"VStack"),"."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { VStack } from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aimport%20%7B%20number%20%7D%20from%20'%40storybook%2Faddon-knobs'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CVStack%20space%3D%7Bnumber('Space'%2C%204)%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3EVStack%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22primary.400%22%20rounded%3D%22md%22%20_text%3D%7B%7B%0A%20%20%20%20%20%20color%3A%20'white'%0A%20%20%20%20%7D%7D%20shadow%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20bg%3D%22secondary.400%22%20size%3D%7B16%7D%20rounded%3D%22md%22%20_text%3D%7B%7B%0A%20%20%20%20%20%20color%3A%20'white'%0A%20%20%20%20%7D%7D%20shadow%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22emerald.400%22%20rounded%3D%22md%22%20_text%3D%7B%7B%0A%20%20%20%20%20%20color%3A%20'white'%0A%20%20%20%20%7D%7D%20shadow%3D%7B3%7D%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"important-"},"Important \ud83d\udea8"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want to pass custom components (not a NativeBase imported component) as direct children of Stack, VStack, HStack, or ZStack you must wrap that in a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/box"}),Object(o.b)("inlineCode",{parentName:"a"},"Box"))," for Stacks to work as expected.")),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        direction\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        ResponsiveValue<"column" | "row">\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The direction of the Stack Items.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        column\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"VStack implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"stack#props"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"box#props"}),"Box"))))}l.isMDXComponent=!0}}]);