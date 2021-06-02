(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return n?i.a.createElement(m,p(p({ref:t},l),{},{components:n})):i.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},887:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(1583)),o={id:"pinInput",title:"PinInput"},p={unversionedId:"pinInput",id:"version-3.0.0-next.32/pinInput",isDocsHomePage:!1,title:"PinInput",description:"The PinInput component is similar to the Input component, but it is optimized for entering sequences of digits.",source:"@site/versioned_docs/version-3.0.0-next.32/pinInput.md",slug:"/pinInput",permalink:"/docs/3.0.0-next.32/pinInput",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.32/pinInput.md",version:"3.0.0-next.32",sidebar:"version-3.0.0-next.32/componentsSidebar",previous:{title:"Link",permalink:"/docs/3.0.0-next.32/link"},next:{title:"Radio",permalink:"/docs/3.0.0-next.32/radio"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Examples",id:"examples",children:[{value:"Usage",id:"usage",children:[]},{value:"Size",id:"size",children:[]},{value:"Default Value",id:"default-value",children:[]},{value:"Placeholder",id:"placeholder",children:[]},{value:"Manage Focus",id:"manage-focus",children:[]},{value:"Variants",id:"variants",children:[]},{value:"Form Controlled",id:"form-controlled",children:[]}]},{value:"<strong>Props</strong>",id:"props",children:[{value:"PinInput",id:"pininput",children:[]},{value:"PinInput.Field",id:"pininputfield",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PinInput")," component is similar to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.0.0-next.32/input"}),Object(r.b)("inlineCode",{parentName:"a"},"Input"))," component, but it is optimized for entering sequences of digits."),Object(r.b)("h2",{id:"implements"},"Implements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/3.0.0-next.32/input"}),Object(r.b)("inlineCode",{parentName:"a"},"Input")))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPinInput%20inputSize%3D%22md%22%20value%3D%2232%22%20defaultValue%3D%2298%22%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%3C%2FPinInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"size"},"Size"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Sizes","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20Stack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B5%7D%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%222xl%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%22xl%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%22md%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20size%3D%22xs%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"default-value"},"Default Value"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput DefaultValue","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20Stack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B5%7D%3E%0A%20%20%20%20%20%20%3CPinInput%20defaultValue%3D%22123%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20defaultValue%3D%2245%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"placeholder"},"Placeholder"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Placeholder","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPinInput%20placeholder%3D%22%F0%9F%A5%B3%22%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%3C%2FPinInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"manage-focus"},"Manage Focus"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Manage Focus","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CPinInput%20manageFocus%3D%7Bfalse%7D%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%3C%2FPinInput%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"variants"},"Variants"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20PinInput%2C%20Stack%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20space%3D%7B5%7D%3E%0A%20%20%20%20%20%20%3CPinInput%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20variant%3D%22underlined%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20variant%3D%22rounded%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20variant%3D%22filled%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%3CPinInput%20variant%3D%22unstyled%22%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h3",{id:"form-controlled"},"Form Controlled"),Object(r.b)("div",{className:"snack-player","data-snack-name":"PinInput Form","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20PinInput%2C%0A%20%20Center%2C%0A%20%20FormControl%2C%0A%20%20NativeBaseProvider%2C%0A%20%20Center%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20PinInputComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EOTP%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CPinInput%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CPinInput.Field%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FPinInput%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20An%20otp%20is%20send%20to%20number%20ending%20with%20%2B91-XXXXX-XX007.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3EPlease%20Retry.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CPinInputComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"props"},Object(r.b)("strong",{parentName:"h2"},"Props")),Object(r.b)("h3",{id:"pininput"},"PinInput"),Object(r.b)("p",null,"PinInput passes all the props to its children (",Object(r.b)("inlineCode",{parentName:"p"},"PinInput.Field"),") only."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"manageFocus"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The style variant of the badge."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default value of the pin input. Example '32'."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The value of the the pin input. This is the value that will be returned when the pin input is filled."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"space"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://styled-system.com/api/#space"}),Object(r.b)("inlineCode",{parentName:"a"},"MarginProps"))),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The space between each stack item."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onChange"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function called on input change"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("h3",{id:"pininputfield"},"PinInput.Field"),Object(r.b)("p",null,"PinInput.Field composes\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.0.0-next.32/input"}),Object(r.b)("inlineCode",{parentName:"a"},"Input")),"\xa0so you can pass all the\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.0.0-next.32/input#props"}),Object(r.b)("inlineCode",{parentName:"a"},"Input props")),"."))}s.isMDXComponent=!0}}]);