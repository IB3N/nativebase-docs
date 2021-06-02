(window.webpackJsonp=window.webpackJsonp||[]).push([[1500],{1571:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(1583)),i={id:"todo-example",title:"Todo-List"},s={unversionedId:"todo-example",id:"version-3.0.0-next.33/todo-example",isDocsHomePage:!1,title:"Todo-List",description:"A simple Todo App made using NativeBase 3.0.",source:"@site/versioned_docs/version-3.0.0-next.33/todo-list.md",slug:"/todo-example",permalink:"/docs/3.0.0-next.33/todo-example",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/todo-list.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"useContrastText",permalink:"/docs/3.0.0-next.33/use-contrast-text"},next:{title:"React Hook Forms",permalink:"/docs/3.0.0-next.33/react-hook-forms"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A simple Todo App made using NativeBase 3.0."),Object(r.b)("div",{className:"snack-player","data-snack-name":"TodoList Examples","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Input%2C%0A%20%20Button%2C%0A%20%20IconButton%2C%0A%20%20Checkbox%2C%0A%20%20Text%2C%0A%20%20VStack%2C%0A%20%20HStack%2C%0A%20%20Heading%2C%0A%20%20Icon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20%22native-base%22%3B%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20const%20instState%20%3D%20%5B%0A%20%20%20%20%7B%20title%3A%20%22code%22%2C%20isCompleted%3A%20true%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20%22sleep%22%2C%20isCompleted%3A%20false%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20%22repeat%22%2C%20isCompleted%3A%20false%20%7D%2C%0A%20%20%5D%3B%0A%20%20const%20%5Blist%2C%20setList%5D%20%3D%20React.useState(instState)%3B%0A%20%20const%20%5BinputValue%2C%20setInputValue%5D%20%3D%20React.useState(%22%22)%3B%0A%20%20const%20addItem%20%3D%20(title%3A%20string)%20%3D%3E%20%7B%0A%20%20%20%20setList(%5B%0A%20%20%20%20%20%20...list%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20title%2C%0A%20%20%20%20%20%20%20%20isCompleted%3A%20false%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D)%3B%0A%20%20%7D%3B%0A%20%20const%20handleDelete%20%3D%20(index%3A%20number)%20%3D%3E%20%7B%0A%20%20%20%20const%20temp%20%3D%20list.filter((_%2C%20itemI)%20%3D%3E%20itemI%20!%3D%3D%20index)%3B%0A%20%20%20%20setList(temp)%3B%0A%20%20%7D%3B%0A%20%20const%20handleStatusChange%20%3D%20(index%3A%20number)%20%3D%3E%20%7B%0A%20%20%20%20const%20temp%20%3D%20list.map((item%2C%20itemI)%20%3D%3E%0A%20%20%20%20%20%20itemI%20!%3D%3D%20index%0A%20%20%20%20%20%20%20%20%3F%20item%0A%20%20%20%20%20%20%20%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...item%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20isCompleted%3A%20!item.isCompleted%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20setList(temp)%3B%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%3CVStack%20space%3D%7B4%7D%20flex%3D%7B1%7D%20w%3D%2290%25%22%20mt%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CHeading%20color%3D%22emerald.400%22%3ETodo%20App%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CInput%0A%20%20%20%20%20%20%20%20variant%3D%22filled%22%0A%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20InputRightElement%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22emerald%22%0A%20%20%20%20%20%20%20%20%20%20%20%20ml%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20addItem(inputValue)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20setInputValue(%22%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22FontAwesome5%22%20name%3D%22plus%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20onChangeText%3D%7B(v)%20%3D%3E%20setInputValue(v)%7D%0A%20%20%20%20%20%20%20%20value%3D%7BinputValue%7D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Add%20Item%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CVStack%3E%0A%20%20%20%20%20%20%20%20%7Blist.map((item%2C%20itemI)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CHStack%0A%20%20%20%20%20%20%20%20%20%20%20%20w%3D%22100%25%22%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3D%22space-between%22%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bitem.title%20%2B%20itemI.toString()%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CCheckbox%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22emerald%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20isChecked%3D%7Bitem.isCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChange%3D%7B()%20%3D%3E%20handleStatusChange(itemI)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bitem.title%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20mx%3D%7B2%7D%20strikeThrough%3D%7Bitem.isCompleted%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bitem.title%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FCheckbox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CIconButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%3D%22emerald%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%3CIcon%20type%3D%22FontAwesome5%22%20name%3D%22trash%22%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20handleDelete(itemI)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FHStack%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}))}p.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),A=p(n),d=o,u=A["".concat(i,".").concat(d)]||A[d]||m[d]||r;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);