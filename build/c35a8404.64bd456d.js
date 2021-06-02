(window.webpackJsonp=window.webpackJsonp||[]).push([[1154],{1226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(1583)),c={id:"menu",title:"Menu"},b={unversionedId:"menu",id:"version-3.0.0-next.27/menu",isDocsHomePage:!1,title:"Menu",description:"A dropdown menu for the common dropdown menu button design pattern.",source:"@site/versioned_docs/version-3.0.0-next.27/menu.md",slug:"/menu",permalink:"/docs/3.0.0-next.27/menu",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.27/menu.md",version:"3.0.0-next.27",sidebar:"version-3.0.0-next.27/componentsSidebar",previous:{title:"AlertDialog",permalink:"/docs/3.0.0-next.27/alertDialog"},next:{title:"Modal",permalink:"/docs/3.0.0-next.27/modal"}},o=[{value:"Import",id:"import",children:[]},{value:"Basic",id:"basic",children:[]},{value:"Group",id:"group",children:[]},{value:"MenuOptionGroups",id:"menuoptiongroups",children:[]},{value:"Props",id:"props",children:[{value:"Menu",id:"menu",children:[]},{value:"MenuItem",id:"menuitem",children:[]},{value:"<strong>MenuItemOption</strong>",id:"menuitemoption",children:[]},{value:"MenuItemOption",id:"menuitemoption-1",children:[]},{value:"MenuGroup",id:"menugroup",children:[]},{value:"MenuOptionGroup",id:"menuoptiongroup",children:[]}]}],i={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A dropdown menu for the common dropdown menu button design pattern."),Object(l.b)("h2",{id:"import"},"Import"),Object(l.b)("p",null,"NativeBase uses 5 components for rendering menus:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Menu"),": The wrapper component provides context, state, and focus management."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Menu.Item"),": The trigger that handles menu selection. Must be a direct child of a\xa0",Object(l.b)("inlineCode",{parentName:"li"},"MenuList"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Menu.Group"),": A wrapper to group related menu items."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Menu.OptionGroup"),": A wrapper for checkable menu items (radio and checkbox)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Menu.ItemOption"),": The checkable menu item, to be used with\xa0",Object(l.b)("inlineCode",{parentName:"li"},"MenuOptionGroup"),".")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Menu } from 'native-base';\n")),Object(l.b)("h2",{id:"basic"},"Basic"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Menu Basic","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Menu%2C%20Divider%2C%20IconButton%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20MenuComponent%20()%20%7B%0A%20%20return%20(%0A%09%3CMenu%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20%3CIconButton%20icon%3D%7B%3CIcon%20name%3D%22menu%22%20%2F%3E%7D%20%7B...triggerProps%7D%20%2F%3E%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.Item%20isDisabled%3EMenu%20item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CMenu.Item%20isDisabled%3EMenu%20item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%204%3C%2FMenu.Item%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMenuComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"group"},"Group"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Menu Example (MenuGroup)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Menu%2C%20Divider%2C%20IconButton%2C%20Icon%2C%20NativeBaseProvider%7D%20from%20'native-base'%3B%0A%0Afunction%20MenuComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CMenu%0A%20%20%20%20%20%20closeOnSelect%3D%7Bfalse%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20console.log('opened')%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20console.log('closed')%7D%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20name%3D%22menu%22%20%2F%3E%7D%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Show%20Menu%0A%20%20%20%20%20%20%20%20%20%20%3C%2FIconButton%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.Group%20title%3D%22Profile%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%201%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%202%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3C%2FMenu.Group%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.Group%20title%3D%22Help%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%20isDisabled%3EMenu%20item%203%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%20%20%3CMenu.Item%3EMenu%20item%204%3C%2FMenu.Item%3E%0A%20%20%20%20%20%20%3C%2FMenu.Group%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMenuComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"menuoptiongroups"},"MenuOptionGroups"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Menu Example (MenuOptionGroups)","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Menu%2C%20IconButton%2C%20Divider%2C%20Icon%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20MenuComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CMenu%0A%20%20%20%20%20%20closeOnSelect%3D%7Bfalse%7D%0A%20%20%20%20%20%20onOpen%3D%7B()%20%3D%3E%20console.log('opened')%7D%0A%20%20%20%20%20%20onClose%3D%7B()%20%3D%3E%20console.log('closed')%7D%0A%20%20%20%20%20%20trigger%3D%7B(triggerProps)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CIconButton%20icon%3D%7B%3CIcon%20name%3D%22menu%22%20%2F%3E%7D%20%7B...triggerProps%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Show%20Menu%0A%20%20%20%20%20%20%20%20%20%20%3C%2FIconButton%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CMenu.OptionGroup%20defaultValue%3D%22asc%22%20title%3D%22Order%22%20type%3D%22radio%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22asc%22%3EAscending%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22desc%22%3EDescending%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%3C%2FMenu.OptionGroup%3E%0A%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%3CMenu.OptionGroup%20title%3D%22Country%22%20type%3D%22checkbox%22%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22email%22%20_text%3D%7B%7B%20fontWeight%3A%20'bold'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Email%0A%20%20%20%20%20%20%20%20%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22phone%22%3EPhone%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%20%20%3CMenu.ItemOption%20value%3D%22country%22%3ECountry%3C%2FMenu.ItemOption%3E%0A%20%20%20%20%20%20%3C%2FMenu.OptionGroup%3E%0A%20%20%20%20%3C%2FMenu%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CMenuComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"menu"},"Menu"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"trigger"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pressable element to apply the trigger of menu."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onOpen"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function to be called when menu opens."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onClose"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function to be called when menu closes."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"closeOnSelect"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the menu will close when a menu item is clicked."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"menuitem"},"MenuItem"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isDisabled"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the menu item will be disabled."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onPress"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function that is called on press."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"_","text"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TextStyle"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Props to pass on to Text."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"closeOnSelect"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If true, the menu will close when a menu item is clicked."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"menuitemoption"},Object(l.b)("strong",{parentName:"h3"},"MenuItemOption")),Object(l.b)("p",null,"Extends MenuItem."),Object(l.b)("h3",{id:"menuitemoption-1"},"MenuItemOption"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number, string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The value of the MenuItemOption"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"menugroup"},"MenuGroup"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The title of the menu group"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"_","title"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TextStyle"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Props to pass on to Text."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"menuoptiongroup"},"MenuOptionGroup"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"checkbox, radio"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Used to add roles menuitemradio or menuitemcheckbox"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number, number[], string, string[]"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The initial value of the option group."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number, string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The value of the option group."),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onChange"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function called when selection changes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))))}u.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);