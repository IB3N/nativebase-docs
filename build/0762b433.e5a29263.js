(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return A})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(1583)),l=n(1587),i=n(1588),c={},A={unversionedId:"migration/Checkbox",id:"version-3.0.0-next.33/migration/Checkbox",isDocsHomePage:!1,title:"Checkbox",description:"Migrating to v3 will provide a lot more design, size, color and customisation option.",source:"@site/versioned_docs/version-3.0.0-next.33/migration/Checkbox.md",slug:"/migration/Checkbox",permalink:"/docs/3.0.0-next.33/migration/Checkbox",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.33/migration/Checkbox.md",version:"3.0.0-next.33",sidebar:"version-3.0.0-next.33/componentsSidebar",previous:{title:"Card",permalink:"/docs/3.0.0-next.33/migration/Card"},next:{title:"FABs",permalink:"/docs/3.0.0-next.33/migration/FABs"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],p={toc:s};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Migrating to v3 will provide a lot more ",Object(r.b)("strong",{parentName:"p"},"design"),", ",Object(r.b)("strong",{parentName:"p"},"size"),", ",Object(r.b)("strong",{parentName:"p"},"color")," and ",Object(r.b)("strong",{parentName:"p"},"customisation")," option."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Migrating Checkbox components can broadly described in these points:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"checked")," props is deprecated, instead now we provide you with ",Object(r.b)("inlineCode",{parentName:"li"},"defaultIsChecked")," and ",Object(r.b)("inlineCode",{parentName:"li"},"isChecked")," prop to better manage your checkbox. For most cases ",Object(r.b)("strong",{parentName:"li"},"checked")," can be replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"isChecked"),"."),Object(r.b)("li",{parentName:"ul"},"Colors of the Checkbox:\nIn v3 the color is controlled by ",Object(r.b)("inlineCode",{parentName:"li"},"colorScheme")," prop. And it accepts all the color available in the theme."),Object(r.b)("li",{parentName:"ul"},"onPress props is deprecated, instead v3 provides onChange which provides a callback when state of the checkbox change.")),Object(r.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(r.b)(l.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"v2",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("img",{alt:"Checkbox/Screenshot_2021-01-22_at_3.09.29_PM.png",src:n(1656).default})),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'<CheckBox checked={true} color="green"/>\n<Body>\n  <Text>Finish list Screen</Text>\n</Body>\n'))),Object(r.b)(i.a,{value:"v3",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("img",{alt:"Checkbox/Screenshot_2021-01-22_at_4.34.08_PM.png",src:n(1657).default})),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'<Checkbox isChecked colorScheme="green" />\n<Text>Finish list Screen</Text>\n// alternative: pressing the text will also trigger onChange\n<Checkbox isChecked colorScheme="green">\n    Finish list Screen\n</Checkbox>\n')))))}b.isMDXComponent=!0},1583:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=a.a.createContext({}),s=function(e){var t=a.a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(A.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,u=p["".concat(l,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(u,i(i({ref:t},A),{},{components:n})):a.a.createElement(u,i({ref:t},A))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var A=2;A<r;A++)l[A]=n[A];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1584:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},1585:function(e,t,n){"use strict";var o=n(0),a=n(1586);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1586:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},1587:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1585),l=n(1584),i=n(56),c=n.n(i);const A=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:p,groupId:b,className:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(r.a)(),[g,f]=Object(o.useState)(i),v=o.Children.toArray(e.children);if(null!=b){const e=u[b];null!=e&&e!==g&&p.some((t=>t.value===e))&&f(e)}const O=e=>{f(e),null!=b&&m(b,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case A:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(o.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},1588:function(e,t,n){"use strict";var o=n(3),a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},1656:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screenshot_2021-01-22_at_3.09.29_PM-ac55632fd337028af9f07b63db41415e.png"},1657:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);