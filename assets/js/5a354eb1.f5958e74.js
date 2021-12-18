"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[7316],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||l[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={title:"Functional programming",benefit:3,easiness:3,order:3,tags:["Architecture"]},c=void 0,s={unversionedId:"lessons/functional-programming",id:"lessons/functional-programming",isDocsHomePage:!1,title:"Functional programming",description:"Functional programming is an important paradigm that has gotten a lot of attention recently (it took of long after Object Oriented programming). A lot of very good techniques have emerged from this field and have been incorporated in many languages, including C++. std::transform and many others are inherited from Functional Programming.",source:"@site/docs/lessons/functional-programming.md",sourceDirName:"lessons",slug:"/lessons/functional-programming",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/functional-programming",tags:[{label:"Architecture",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/architecture"}],version:"current",frontMatter:{title:"Functional programming",benefit:3,easiness:3,order:3,tags:["Architecture"]},sidebar:"lessons",previous:{title:"Advanced git features",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/advanced-git-features"},next:{title:"Measuring performance",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/measuring-performance"}},m=[],l={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Functional programming is an important paradigm that has gotten a lot of attention recently (it took of long after Object Oriented programming). A lot of very good techniques have emerged from this field and have been incorporated in many languages, including C++. ",(0,o.kt)("inlineCode",{parentName:"p"},"std::optional"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"std::variant"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"std::transform")," and many others are inherited",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," from Functional Programming."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/vDe-4o8Uwl8"},"A sweet intro to some functional concepts")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/3VQ382QG-y4"},"Lambda calculus, the theory behind functional programming")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Nrp_LZ-XGsY"},"TODO")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/US8QG9I1XW0"},"TODO")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/QyJZzq0v7Z4"},"TODO")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/srQt1NAHYC0"},"TODO")))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Notice the pun \ud83d\ude09",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);