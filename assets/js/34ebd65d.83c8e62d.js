"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[9370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),c=["components"],a={title:"Deleted functions",benefit:3,easiness:5,order:3,tags:["C++"]},i=void 0,l={unversionedId:"lessons/deleted-functions",id:"lessons/deleted-functions",isDocsHomePage:!1,title:"Deleted functions",description:"You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example std::sharedptr.",source:"@site/docs/lessons/deleted-functions.md",sourceDirName:"lessons",slug:"/lessons/deleted-functions",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/deleted-functions",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/c"}],version:"current",frontMatter:{title:"Deleted functions",benefit:3,easiness:5,order:3,tags:["C++"]},sidebar:"lessons",previous:{title:"Composition over Inheritance",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/composition-over-inheritance"},next:{title:"Exceptions",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/exceptions"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example ",(0,s.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," can't be copied because there can only be one owner of the data, unlike ",(0,s.kt)("inlineCode",{parentName:"p"},"std::shared_ptr"),"."),(0,s.kt)("p",null,"It can be done with the ",(0,s.kt)("inlineCode",{parentName:"p"},"=delete")," syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass{\n    //...\n    MyClass(const MyClass&) = delete; // delete the copy constructor\n    MyClass& operator=(const MyClass&) = delete; // delete the copy assignment\n    //...\n};\n")))}d.isMDXComponent=!0}}]);