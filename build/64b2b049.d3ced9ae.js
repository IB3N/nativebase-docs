(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},A=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),A=o,m=b["".concat(i,".").concat(A)]||b[A]||d[A]||r;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=A;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},657:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(1583)),i={id:"actionSheet",title:"ActionSheet"},c={unversionedId:"actionSheet",id:"version-3.0.0-next.27/actionSheet",isDocsHomePage:!1,title:"ActionSheet",description:"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content.",source:"@site/versioned_docs/version-3.0.0-next.27/actionSheet.md",slug:"/actionSheet",permalink:"/docs/3.0.0-next.27/actionSheet",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/actionSheet.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"Accordion",permalink:"/docs/3.0.0-next.27/accordion"},next:{title:"Breadcrumb",permalink:"/docs/3.0.0-next.27/breadcrumb"}},s=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Composition",id:"composition",children:[]},{value:"DisableOverlay",id:"disableoverlay",children:[]},{value:"Props",id:"props",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content."),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("p",null,"NativeBase exports 5 modal-related components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet"),": Provides the context and state for all components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Content"),": Wrapper for the\xa0",Object(r.b)("strong",{parentName:"li"},"Actionsheet.Header and Actionsheet.Item"),"\xa0components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Header"),": Provides a header to the list."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Footer"),": A separated footer component for better customisation support. Wrapper for the ",Object(r.b)("strong",{parentName:"li"},"Actionsheet.Item"),"\xa0components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionsheet.Item"),": A button to wrap the options of the Actionsheet.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Actionsheet } from 'native-base';\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Actionsheet%2C%0A%20%20useDisclose%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"composition"},"Composition"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet Composition","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Divider%2C%0A%20%20Actionsheet%2C%0A%20%20useDisclose%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"disableoverlay"},"DisableOverlay"),Object(r.b)("div",{className:"snack-player","data-snack-name":"ActionSheet DisplayOverlay","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Actionsheet%2C%0A%20%20useDisclose%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%3B%0A%0Afunction%20ActionSheetComponent()%20%7B%0A%20%20const%20%7B%20isOpen%2C%20onOpen%2C%20onClose%20%7D%20%3D%20useDisclose()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonOpen%7D%3EActionsheet%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CActionsheet%20isOpen%3D%7BisOpen%7D%20onClose%3D%7BonClose%7D%20disableOverlay%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Header%3EHeader%3C%2FActionsheet.Header%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%201%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%202%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%3EOption%203%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Content%3E%0A%20%20%20%20%20%20%20%20%3CActionsheet.Footer%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActionsheet.Item%20onPress%3D%7BonClose%7D%3ECancel%3C%2FActionsheet.Item%3E%0A%20%20%20%20%20%20%20%20%3C%2FActionsheet.Footer%3E%0A%20%20%20%20%20%20%3C%2FActionsheet%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CActionSheetComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,"Implement ",Object(r.b)("inlineCode",{parentName:"p"},"Box"),", all props of Box can be passed."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"isOpen"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"If true, actionsheet will be open."),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"onClose"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Callback when actionsheet is closed."),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"disableOverlay"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"If true, disables the overlay."),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"-")))),Object(r.b)("p",null,"Actionsheet.Content, Actionsheet.Header, Actionsheet.Footer all implement ",Object(r.b)("inlineCode",{parentName:"p"},"Box"),". All props of Box can be passed."),Object(r.b)("p",null,"Actionsheet.Item implements ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),", all the props of Button can be passed here."))}p.isMDXComponent=!0}}]);