"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4910],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"Deleted functions",benefit:3,easiness:5,order:3,tags:["C++"]},c=void 0,l={unversionedId:"lessons/deleted-functions",id:"lessons/deleted-functions",title:"Deleted functions",description:"You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example std::sharedptr.",source:"@site/../../content/lessons/deleted-functions.md",sourceDirName:"lessons",slug:"/lessons/deleted-functions",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/deleted-functions",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"Deleted functions",benefit:3,easiness:5,order:3,tags:["C++"]},sidebar:"lessons",previous:{title:"Composition over Inheritance",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/composition-over-inheritance"},next:{title:"Immediately Invoked Lambda",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/immediately-invoked-lambda"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can delete functions to prevent them from beeing used. This is mostly used to prevent a type from being copied ; for example ",(0,a.kt)("inlineCode",{parentName:"p"},"std::unique_ptr")," can't be copied because there can only be one owner of the data, unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"std::shared_ptr"),"."),(0,a.kt)("p",null,"It can be done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"=delete")," syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyClass{\n    //...\n    MyClass(const MyClass&) = delete; // delete the copy constructor\n    MyClass& operator=(const MyClass&) = delete; // delete the copy assignment\n    //...\n};\n")))}d.isMDXComponent=!0}}]);