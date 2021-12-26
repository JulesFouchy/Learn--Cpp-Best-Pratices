"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[3561],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={title:"friend",benefit:1,easiness:5,order:4,tags:["C++"]},l=void 0,c={unversionedId:"lessons/friend",id:"lessons/friend",title:"friend",description:"There are *very few* good reasons to use `friend`.",source:"@site/../../content/lessons/friend.md",sourceDirName:"lessons",slug:"/lessons/friend",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/friend",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/tags/c"}],version:"current",frontMatter:{title:"friend",benefit:1,easiness:5,order:4,tags:["C++"]},sidebar:"lessons",previous:{title:"The Rule of 5",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/rule-of-5"},next:{title:"#if defined()",permalink:"/Learn--Cpp-And-Dev-Practices/lessons/if-defined"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"very few"))," good reasons to use ",(0,a.kt)("inlineCode",{parentName:"p"},"friend"),".\nThe only one I can think of is when you are forced, for implementation reasons, to split something into two classes but conceptually it really is one united block. For example, when implementing the state pattern : you have a class X that holds a state S. Although S needs to be a seperate class in order to have different implementations and be changed at runtime, it really is part of X and should be allowed to access it's internals like no one else. Even in that case, you should first wonder wether it wouldn't make sense to put in your public interface all the things that ",(0,a.kt)("em",{parentName:"p"},"S")," needs. If the answer is now, then maybe you have a use case for ",(0,a.kt)("inlineCode",{parentName:"p"},"friend"),"."),(0,a.kt)("p",null,"What really bothers me with ",(0,a.kt)("inlineCode",{parentName:"p"},"friend")," is that it is ",(0,a.kt)("em",{parentName:"p"},"all or nothing"),'. I wish I could specify that only one given method will be usable by a specific class : "this method is not part of the public API, but it can be used by this one class who knows how to handle it". With the current ',(0,a.kt)("inlineCode",{parentName:"p"},"friend"),", all friends suddenly have access to all methods ",(0,a.kt)("em",{parentName:"p"},"and members"),"."),(0,a.kt)("p",null,"(Maybe this problem is lessened when the Single Responsibility Principle is strictly followed and each class really is an ",(0,a.kt)("em",{parentName:"p"},"all or nothing")," package (since there is only one thing in the package), but still I don't like the fact the friends can access member variables)"),(0,a.kt)("p",null,"=> Useless since C++20 and modules, which allow us a much finer grain control over visibility"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/zvWCgiVvpPU"},"PassKey idiom")))}f.isMDXComponent=!0}}]);