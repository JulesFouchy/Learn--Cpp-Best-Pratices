"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3736],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),y=o,d=f["".concat(l,".").concat(y)]||f[y]||p[y]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),s=["components"],a={title:"Consistency in style",benefit:2,easiness:5,level:1,tags:["Beautiful Code"]},l=void 0,c={unversionedId:"lessons/consistency-in-style",id:"lessons/consistency-in-style",title:"Consistency in style",description:"Brief",source:"@site/../../content/lessons/consistency-in-style.md",sourceDirName:"lessons",slug:"/lessons/consistency-in-style",permalink:"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style",tags:[{label:"Beautiful Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/beautiful-code"}],version:"current",frontMatter:{title:"Consistency in style",benefit:2,easiness:5,level:1,tags:["Beautiful Code"]},sidebar:"lessons",previous:{title:"Naming",permalink:"/Learn--Clean-Code-With-Cpp/lessons/naming"},next:{title:"Prefer free functions",permalink:"/Learn--Clean-Code-With-Cpp/lessons/free-functions"}},u=[{value:"Brief",id:"brief",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"brief"},"Brief"),(0,i.kt)("p",null,"Be consistent with the conventions you choose (e.g. camelCase vs snake_case, prefix of member variables etc.)"),(0,i.kt)("p",null,"But also, you shouldn't be too religious about it and try different conventions. A new project is a great opportunity to give another convention a shot. Don't judge conventions solely on your expectations, because we are so used to the one we use that all the other feel weird at first sight. But by trying a convention for a few weeks your view of it will change. This happened to me with ",(0,i.kt)("em",{parentName:"p"},"snake_case"),"; I used to thing that it was weird and ugly, but now I think this is the most readable convention of them all because the words are clearly separated and it helps a lot, especially with longer names."))}f.isMDXComponent=!0}}]);