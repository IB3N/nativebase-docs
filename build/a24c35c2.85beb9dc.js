(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1028:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(1583)),c={id:"use-color-mode-value",title:"useColorModeValue"},l={unversionedId:"use-color-mode-value",id:"version-3.0.0-next.33/use-color-mode-value",isDocsHomePage:!1,title:"useColorModeValue",description:"useColorModeValue is a custom hook used to get a value from either of the parameters passed based on active color mode value.",source:"@site/versioned_docs/version-3.0.0-next.33/useColorModeValue.md",slug:"/use-color-mode-value",permalink:"/docs/3.0.0-next.33/use-color-mode-value",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/useColorModeValue.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"useColorMode",permalink:"/docs/3.0.0-next.33/use-color-mode"},next:{title:"useContrastText",permalink:"/docs/3.0.0-next.33/use-contrast-text"}},s=[{value:"Import",id:"import",children:[]},{value:"Example",id:"example",children:[]},{value:"Return value",id:"return-value",children:[]}],i={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useColorModeValue")," is a custom hook used to get a value from either of the parameters passed based on active color mode value."),Object(a.b)("h2",{id:"import"},"Import"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useColorModeValue } from 'native-base';\n")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("div",{className:"snack-player","data-snack-name":"useColorModeValue","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeBaseProvider%2C%0A%20%20useColorMode%2C%0A%20%20Text%2C%0A%20%20Button%2C%0A%20%20Center%2C%0A%20%20useColorModeValue%2C%0A%7D%20from%20'native-base'%3B%0A%0Afunction%20UseColorMode()%20%7B%0A%20%20const%20%7B%20colorMode%2C%20toggleColorMode%20%7D%20%3D%20useColorMode()%3B%0A%20%20return%20(%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%20bg%3D%7BuseColorModeValue('white'%2C%20'black')%7D%3E%0A%20%20%20%20%20%20%3CText%20fontSize%3D%22lg%22%20display%3D%22flex%22%3E%0A%20%20%20%20%20%20%20%20The%20active%20color%20mode%20is%0A%20%20%20%20%20%20%20%20%3CText%20bold%3E%7BuseColorModeValue('Light'%2C%20'Dark')%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BtoggleColorMode%7D%3EToggle%3C%2FButton%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CUseColorMode%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(a.b)("h2",{id:"return-value"},"Return value"),Object(a.b)("p",null,"Accepts 2 parameters and returns either of the two, based on current color-mode (first parameter for light mode and second parameter for dark mode)."))}u.isMDXComponent=!0},1583:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.a.createElement(f,l(l({ref:t},i),{},{components:r})):n.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);