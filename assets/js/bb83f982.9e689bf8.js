"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8769],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9038:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],i={title:"Range-based for loop",benefit:3,easiness:5,order:2,tags:["C++"]},c=void 0,l={unversionedId:"lessons/range-based-for-loop",id:"lessons/range-based-for-loop",title:"Range-based for loop",description:"It helps you express your intent more clearly. If you want to go over each element once (which the case of most for loops) you can write :",source:"@site/../../content/lessons/range-based-for-loop.md",sourceDirName:"lessons",slug:"/lessons/range-based-for-loop",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/range-based-for-loop",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"Range-based for loop",benefit:3,easiness:5,order:2,tags:["C++"]},sidebar:"lessons",previous:{title:"Markdown",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/markdown"},next:{title:"Smart Pointers",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/smart-pointers"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It helps you express your intent more clearly. If you want to go over each element once (which the case of most ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loops) you can write :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const std::vector v = {3, 1, 17, 8};\nfor (auto x : v) {\n    // do something with x\n}\nfor (const auto& x : v) {\n    // do something with x\n}\nfor (auto& x : v) {\n    // do something with x\n}\n")),(0,a.kt)("p",null,"It guarantees that you are not modifying the index in the body of the loop to make nasty things and change the iteration process.Having this guarantee helps people reason about your code, and this is very important !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"const std::vector v = {3, 1, 17, 8};\nfor (size_t i = 0; i < v.size(); ++i) {\n    // Long body\n    // Might do i++ somewhere\n}\n")))}f.isMDXComponent=!0}}]);