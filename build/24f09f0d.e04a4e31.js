(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),s=(a(0),a(733)),o={id:"progress",title:"Progress"},i={unversionedId:"progress",id:"version-3.0.0-next.37/progress",isDocsHomePage:!1,title:"Progress",description:"Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/versioned_docs/version-3.0.0-next.37/progress.md",slug:"/progress",permalink:"/3.0.0-next.37/progress",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/progress.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Alert",permalink:"/3.0.0-next.37/alert"},next:{title:"Spinner",permalink:"/3.0.0-next.37/spinner"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Progress colorScheme",id:"progress-colorscheme",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Flat Progress",id:"flat-progress",children:[]},{value:"Custom Track Color",id:"custom-track-color",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],d={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Progress")," is used to display the progress status for a task that takes a long time or consists of several steps."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Progress } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic"},"Basic"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Progress%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CCenter%20mb%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20px%3D%7B0%7D%3EThis%20is%20a%20Simple%20Progress%20Bar%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CProgress%20value%3D%7B45%7D%20mx%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"progress-colorscheme"},"Progress colorScheme"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20Progress%2C%0A%20%20VStack%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20textAlign%3D%22center%22%20mb%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Progress%20ColorScheme%0A%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20mx%3D%7B4%7D%20space%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20colorScheme%3D%22primary%22%20value%3D%7B35%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20colorScheme%3D%22secondary%22%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20colorScheme%3D%22emerald%22%20value%3D%7B55%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20colorScheme%3D%22warning%22%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20colorScheme%3D%22light%22%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"sizes"},"Sizes"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Box%2C%0A%20%20Progress%2C%0A%20%20VStack%2C%0A%20%20Heading%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CVStack%20space%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CHeading%20textAlign%3D%22center%22%20mb%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Progress%20Sizes%0A%20%20%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20mx%3D%7B4%7D%20space%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%22xs%22%20mb%3D%7B4%7D%20value%3D%7B25%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%22sm%22%20mb%3D%7B4%7D%20value%3D%7B35%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%22md%22%20mb%3D%7B4%7D%20value%3D%7B45%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%22lg%22%20mb%3D%7B4%7D%20value%3D%7B55%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%22xl%22%20mb%3D%7B4%7D%20value%3D%7B65%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CProgress%20size%3D%222xl%22%20mb%3D%7B4%7D%20value%3D%7B75%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"flat-progress"},"Flat Progress"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Progress%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CCenter%20mb%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3EFlat%20Progress%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CProgress%20rounded%3D%220%22%20size%3D%22lg%22%20value%3D%7B65%7D%20mx%3D%7B4%7D%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"custom-track-color"},"Custom Track Color"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Box%2C%20Progress%2C%20Center%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2290%25%22%3E%0A%20%20%20%20%20%20%3CCenter%20mb%3D%7B8%7D%3E%0A%20%20%20%20%20%20%20%20%3CHeading%3ECustom%20Track%20Color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CProgress%0A%20%20%20%20%20%20%20%20size%3D%22lg%22%0A%20%20%20%20%20%20%20%20colorScheme%3D%22primary%22%0A%20%20%20%20%20%20%20%20bg%3D%22secondary.200%22%0A%20%20%20%20%20%20%20%20mb%3D%7B4%7D%0A%20%20%20%20%20%20%20%20value%3D%7B75%7D%0A%20%20%20%20%20%20%20%20mx%3D%7B4%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        value\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Value of Progress.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Defines height of Progress\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        sm\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},'\n        The color scheme of the progress. This should be one of the color keys in the theme (e.g."green", "red").\n      '),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        primary\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        isIndeterminate\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Whether progress is indeterminate\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        false\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        min\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Min progress value\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        max\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Max progress value\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        100\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"Progress implements ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(s.b)("h2",{id:"accessibility"},"Accessibility"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"On web and mobile, Progress has ",Object(s.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(s.b)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress bar."),Object(s.b)("li",{parentName:"ul"},"On web, ",Object(s.b)("inlineCode",{parentName:"li"},"aria-valuenow"),", ",Object(s.b)("inlineCode",{parentName:"li"},"aria-valuemin")," and ",Object(s.b)("inlineCode",{parentName:"li"},"aria-valuemax")," to ensure the progress percent is visible to screen readers."),Object(s.b)("li",{parentName:"ul"},"On mobile, ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactnative.dev/docs/accessibility#accessibilityvalue"}),"accessibilityValue")," is used to ensure it's announced by Talkback and VoiceOver.")))}p.isMDXComponent=!0},733:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),p=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,u=l["".concat(o,".").concat(m)]||l[m]||b[m]||s;return a?n.a.createElement(u,i(i({ref:t},d),{},{components:a})):n.a.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);