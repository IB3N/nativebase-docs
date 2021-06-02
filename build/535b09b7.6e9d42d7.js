(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(a),b=n,u=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return a?r.a.createElement(u,i(i({ref:t},d),{},{components:a})):r.a.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},565:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(1583)),c={id:"badge",title:"Badge"},i={unversionedId:"badge",id:"badge",isDocsHomePage:!1,title:"Badge",description:"Badges are used to highlight an item's status for quick recognition.",source:"@site/docs/badge.md",slug:"/badge",permalink:"/docs/next/badge",editUrl:"https://github.com/nativebase/website/tree/main/docs/badge.md",version:"current",sidebar:"componentsSidebar",previous:{title:"TextArea",permalink:"/docs/next/textArea"},next:{title:"Divider",permalink:"/docs/next/divider"}},s=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Color Scheme",id:"color-scheme",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Composition",id:"composition",children:[]}]},{value:"Props",id:"props",children:[]}],d={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Badges")," are used to highlight an item's status for quick recognition."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Badge } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CBadge%3ENEW%20FEATURE%3C%2FBadge%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"color-scheme"},"Color Scheme"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22success%22%3ESUCCESS%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22danger%22%3EDANGER%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22info%22%3EINFO%3C%2FBadge%3E%0A%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22dark%22%3EDARK%3C%2FBadge%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"variants"},"Variants"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"%2F%2F%40ts-nocheck%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20HStack%2C%20VStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%7B%5B'solid'%2C%20'outline'%2C%20'subtle'%5D.map(key%20%3D%3E%20%3CHStack%20key%3D%7Bkey%7D%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20variant%3D%7Bkey%7D%3EDEFAULT%3C%2FBadge%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22success%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20SUCCESS%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22danger%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20DANGER%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%20colorScheme%3D%22info%22%20variant%3D%7Bkey%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20INFO%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBadge%3E%0A%20%20%20%20%20%20%20%20%3C%2FHStack%3E)%7D%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"composition"},"Composition"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Badge%2C%20HStack%2C%20Button%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20function%20Example()%20%7B%0A%20%20return%20%3CHStack%3E%0A%20%20%20%20%20%20%3CButton%20endIcon%3D%7B%3CBadge%20colorScheme%3D%22secondary%22%20ml%3D%7B1%7D%20rounded%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%2010%0A%20%20%20%20%20%20%20%20%20%20%3C%2FBadge%3E%7D%3E%0A%20%20%20%20%20%20%20%20Notifications%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},'\n        "solid" | "outline" | "subtle"\n      '),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The style variant of the badge.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        subtle\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        The color scheme to use for the badge. Must be a key in theme.colors.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"Badge implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))))}p.isMDXComponent=!0}}]);