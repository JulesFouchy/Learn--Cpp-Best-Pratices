"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[408],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5478:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"State and Strategy",benefit:3,easiness:3,order:3,tags:["Design Pattern"]},c=void 0,l={unversionedId:"lessons/state-and-strategy",id:"lessons/state-and-strategy",title:"State and Strategy",description:"Difference : State handles the changes itself, it is an implementation of a state machine. For Strategy, the decision of changing the strategy comes from the outside, it doesn't depend on what the current strategy is.",source:"@site/../../content/lessons/state-and-strategy.md",sourceDirName:"lessons",slug:"/lessons/state-and-strategy",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/state-and-strategy",tags:[{label:"Design Pattern",permalink:"/Learn--Cpp-And-Dev-Practices/tags/design-pattern"}],version:"current",frontMatter:{title:"State and Strategy",benefit:3,easiness:3,order:3,tags:["Design Pattern"]},sidebar:"lessons",previous:{title:"Precompiled Header",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/precompiled-header"},next:{title:"std::variant",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/variant"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Difference : State handles the changes itself, it is an implementation of a state machine. For Strategy, the decision of changing the strategy comes from the outside, it doesn't depend on what the current strategy is."))}f.isMDXComponent=!0}}]);