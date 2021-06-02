(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||l[m]||c;return a?r.a.createElement(h,i(i({ref:t},b),{},{components:a})):r.a.createElement(h,i({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},649:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(1583)),o={id:"switch",title:"Switch"},i={unversionedId:"switch",id:"switch",isDocsHomePage:!1,title:"Switch",description:"The Switch component is an alternative to the Checkbox component. You can switch between enabled or disabled states.",source:"@site/docs/switch.md",slug:"/switch",permalink:"/docs/next/switch",editUrl:"https://github.com/nativebase/website/tree/main/docs/switch.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Slider",permalink:"/docs/next/slider"},next:{title:"TextArea",permalink:"/docs/next/textArea"}},s=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Track &amp; Thumb Color",id:"track--thumb-color",children:[]},{value:"Color Schemes",id:"color-schemes",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Switch")," component is an alternative to the Checkbox component. You can switch between enabled or disabled states."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Switch%2C%20HStack%2C%20Text%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20alignItems%3D%22center%22%20space%3D%7B8%7D%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%3ESetting%201%3C%2FText%3E%0A%20%20%20%20%20%20%3CSwitch%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"sizes"},"Sizes"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Switch%2C%20VStack%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3ESwitch%20Sizes%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CSwitch%20size%3D%22sm%22%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20size%3D%22md%22%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20size%3D%22lg%22%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"track--thumb-color"},"Track & Thumb Color"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Switch%2C%20VStack%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3ESwitch%20Track%20%26%20Thumb%20Color%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CSwitch%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20offTrackColor%3D%22rose.200%22%20onTrackColor%3D%22lime.200%22%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20offThumbColor%3D%22rose.200%22%20onThumbColor%3D%22lime.200%22%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h3",{id:"color-schemes"},"Color Schemes"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Switch%2C%20VStack%2C%20Heading%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CVStack%20space%3D%7B4%7D%20alignItems%3D%22center%22%3E%0A%20%20%20%20%20%20%3CHeading%3ESwitch%20ColorScheme%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CSwitch%20colorScheme%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20colorScheme%3D%22secondary%22%20%2F%3E%0A%20%20%20%20%20%20%3CSwitch%20colorScheme%3D%22emerald%22%20%2F%3E%0A%20%20%20%20%3C%2FVStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("undefined",null,Object(c.b)("table",null,"\n  ",Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(c.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},'\n        "lg" | "md" | "sm"\n      '),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The size (width and height) of the switch.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        md\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, set the disabled to the invalid state.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        name\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The input name of the Switch when used in a form.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onToggle\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Function called when the state of the Switch changes.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isChecked\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, set the Switch to the checked state.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        defaultIsChecked\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, the checkbox will be initially checked.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        isInvalid\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        If true, set the switch to the invalid state.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onTrackColor\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The track color of the Switch when on.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        offTrackColor\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The track color of the Switch when off.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        onThumbColor\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The thumb color of the Switch when on.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        offThumbColor\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        The thumb color of the Switch when off.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        colorScheme\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Color scheme to be used for the Switch\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(c.b)("tr",{parentName:"tbody"},"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        _hover\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        Props when Switch is hovered. Accepts all the Switch props.\n      "),"\n      ",Object(c.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(c.b)("p",null,"Switch implements ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/switch"}),Object(c.b)("code",{parentName:"a"},"Switch from React Native")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view"}),Object(c.b)("code",{parentName:"a"},"View")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#color-and-background-color"}),"ColorProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#background"}),"BackgroundProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#flexbox"}),"FlexProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#position"}),"PositionProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#extra-props"}),"ExtraProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#outline"}),"OutlineProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#shadow"}),"ShadowProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#layout-width-and-height"}),"LayoutProps"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"utility-props#borders"}),"BorderProps"))),Object(c.b)("h2",{id:"accessibility"},"Accessibility"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On mobile, uses native switch which is fully accessible."),Object(c.b)("li",{parentName:"ul"},"On web, it uses checkbox with a ",Object(c.b)("inlineCode",{parentName:"li"},"role")," set to ",Object(c.b)("inlineCode",{parentName:"li"},"switch"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Spacebar")," toggles the switch.")))}p.isMDXComponent=!0}}]);