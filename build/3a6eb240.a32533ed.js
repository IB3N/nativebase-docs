(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{1583:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),A=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=A(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},l=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=A(t),l=r,m=d["".concat(i,".").concat(l)]||d[l]||b[l]||s;return t?n.a.createElement(m,o(o({ref:a},p),{},{components:t})):n.a.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=l;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},430:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return A}));var r=t(3),n=t(7),s=(t(0),t(1583)),i={id:"avatar",title:"Avatar"},o={unversionedId:"avatar",id:"version-3.0.0-next.37/avatar",isDocsHomePage:!1,title:"Avatar",description:"Avatar component is used to represent a user and it can display a profile picture, initials or a fallback icon.",source:"@site/versioned_docs/version-3.0.0-next.37/avatar.md",slug:"/avatar",permalink:"/docs/avatar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/avatar.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"ActionSheet",permalink:"/docs/actionSheet"},next:{title:"Icon",permalink:"/docs/icon"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Sizes",id:"sizes",children:[]},{value:"Fallbacks",id:"fallbacks",children:[]},{value:"Avatar Badge",id:"avatar-badge",children:[]},{value:"Avatar Group",id:"avatar-group",children:[]}]},{value:"Props",id:"props",children:[{value:"Avatar",id:"avatar",children:[]},{value:"Avatar.Group",id:"avatargroup",children:[]},{value:"Avatar.Badge",id:"avatarbadge",children:[]}]}],p={toc:c};function A(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Avatar")," component is used to represent a user and it can display a profile picture, initials or a fallback icon."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("p",null,"NativeBase exports 3 avatar-related components:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Avatar"),": An image that represents the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Avatar.Badge"),": A wrapper that displays its content on the bottom right corner of the avatar."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"Avatar.Group"),": A wrapper to stack multiple avatars together.")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { Avatar } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic"},"Basic"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F983582580372004864%2Fh9ccP0Ea_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20SC%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20MR%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"sizes"},"Sizes"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%20space%3D%7B1%7D%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%22xs%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1188747996843761665%2F8CiUdKZW_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%22sm%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F929409889788510208%2FgRr2f7rZ_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20HS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%22md%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%22lg%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%22xl%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20size%3D%222xl%22%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RB%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"fallbacks"},"Fallbacks"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%20mr%3D%7B1%7D%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%0A%20%20%20%20%7D%7D%3EMR%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fbroken-link'%0A%20%20%20%20%7D%7D%20%2F%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"avatar-badge"},"Avatar Badge"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Avatar%2C%20HStack%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CHStack%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Falpha.nativebase.io%2Fimg%2Fnative-base-icon.png'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NB%0A%20%20%20%20%20%20%20%20%3CAvatar.Badge%20bg%3D%7B'red.200'%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Falpha.nativebase.io%2Fimg%2Fnative-base-icon.png'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NB%0A%20%20%20%20%20%20%20%20%3CAvatar.Badge%20borderColor%3D%22papayawhip%22%20bg%3D%22tomato%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FHStack%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"avatar-group"},"Avatar Group"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Avatar%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CAvatar.Group%20size%3D%22lg%22%20max%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1369921787568422915%2FhoyvrUpc_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20SS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1309797238651060226%2F18cm6VhQ_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20AK%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1352844693151731713%2FHKO7cnlW_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20RS%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1320985200663293952%2FlE_Kg6vr_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20MR%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fbit.ly%2Fcode-beast'%0A%20%20%20%20%7D%7D%3ECB%3C%2FAvatar%3E%0A%20%20%20%20%20%20%3CAvatar%20source%3D%7B%7B%0A%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1177303899243343872%2FB0sUJIH0_400x400.jpg'%0A%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20GG%0A%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%3C%2FAvatar.Group%3E%3B%0A%7D%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("h3",{id:"avatar"},"Avatar"),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(r.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Text styling for fallback text\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        style\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Style to be passed in rendered Image component\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        source\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(r.a)({parentName:"td"},{href:"https://reactnative.dev/docs/image#source"}),"ImageSourcePropType"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The image source of the avatar.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        size\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        string | number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The size of the avatar\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        md\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        wrapperRef\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ref to be attached to Avatar wrapper\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"Avatar implements ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(s.b)("h3",{id:"avatargroup"},"Avatar.Group"),Object(s.b)("p",null,"Group implements ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box")),Object(s.b)("h3",{id:"avatarbadge"},"Avatar.Badge"),Object(s.b)("p",null,"Badge implements ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"box#props"}),"Box")))}A.isMDXComponent=!0}}]);