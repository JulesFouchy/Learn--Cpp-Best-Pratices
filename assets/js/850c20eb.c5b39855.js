"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[4647],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(p,i(i({ref:t},s),{},{components:n})):a.createElement(p,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3136:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),o=n(6010),r={note:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},i={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function l(e){var t=e.children,n=e.type,l=e.title,c=void 0===l?n:l,u=e.icon,s=void 0===u?r[n]:u;return a.createElement("div",{className:(0,o.Z)("admonition","admonition-"+n,"alert","alert--"+i[n])},a.createElement("div",{className:"admonition-heading"},a.createElement("h5",null,a.createElement("span",{className:"admonition-icon"},s),c)),a.createElement("div",{className:"admonition-content"},t))}var c=n(7988);function u(e){var t=e.resources;return a.createElement(l,{type:"info",title:"Going Further"},t.map((function(e){return a.createElement("p",null,(0,c.Z)(e))})))}},7988:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.title,n=e.author,o=e.link,r=e.duration,i=e.description;return a.createElement("span",null,a.createElement("a",{href:o,target:"_blank"},n,", ",a.createElement("i",null,t)),r&&a.createElement("span",null," (",r,")"),i&&a.createElement("span",null," ",i))}},1598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(3136),l=["components"],c={title:"Documentation",benefit:4,easiness:3,level:3,tags:["Clean Code"]},u=void 0,s={unversionedId:"lessons/documentation",id:"lessons/documentation",title:"Documentation",description:"Brief",source:"@site/../../content/lessons/documentation.md",sourceDirName:"lessons",slug:"/lessons/documentation",permalink:"/Learn--Clean-Code-With-Cpp/lessons/documentation",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Documentation",benefit:4,easiness:3,level:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"const",permalink:"/Learn--Clean-Code-With-Cpp/lessons/const"},next:{title:"Don't overfocus on performance",permalink:"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance"}},d=[{value:"Brief",id:"brief",children:[],level:2},{value:"Inline documentation",id:"inline-documentation",children:[],level:2},{value:"Tutorials and examples",id:"tutorials-and-examples",children:[],level:2},{value:"Using Doxygen",id:"using-doxygen",children:[],level:2},{value:"Internal documentation for the maintainers of the library",id:"internal-documentation-for-the-maintainers-of-the-library",children:[],level:2},{value:"Going further",id:"going-further",children:[],level:2}],h={toc:d};function m(e){var t=e.components,c=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"brief"},"Brief"),(0,r.kt)("p",null,"Documenting is an essential part of building a big project. Without it your library would be very hard to use, and your code very hard to understand and maintain.",(0,r.kt)("br",null),"\nYou don't necessarily need to do all the things I will advise here, but the more the better. The most important thing is to have a little description of each function / type and how to use them. This is something that you should do as you write your code because if you don't you are never gonna come back to do it later."),(0,r.kt)("p",null,"Once you have more time and are serious about creating a great library that will be used by many, take the time to write tutorials and examples too."),(0,r.kt)("h2",{id:"inline-documentation"},"Inline documentation"),(0,r.kt)("p",null,"Each function and type should have a little description if there is anything special that the users need to know:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/// Returns a random int between min (included) and max (included)\nint rand(int min, int max);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Here it is great to indicate whether the min and max bounds are included or excluded.")),(0,r.kt)("p",null,'I am not a fan of "automatic" documentation where you feel the need to add a description to every parameter. Only do it if you have something meaningful to say about that parameter! Otherwise I much prefer a simple sentence that explains the function and its parameters all at once.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Bad, this is very redondant"',title:'"Bad,',this:!0,is:!0,very:!0,'redondant"':!0},"/**\n * @brief Computes the average of a and b.\n * \n * @param a The first number that you are gonna take the average of.\n * @param b The second number that you are gonna take the average of.\n * @return float The average of a and b.\n */\nfloat average(float a, float b);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Good, much easier to read"',title:'"Good,',much:!0,easier:!0,to:!0,'read"':!0},"/**\n * @brief Computes the average of a and b.\n */\nfloat average(float a, float b);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"title=\"Even better. In that case I don't think the documentation was adding anything that the name didn't already explain\"",title:'"Even',"better.":!0,In:!0,that:!0,case:!0,I:!0,"don't":!0,think:!0,the:!0,documentation:!0,was:!0,adding:!0,anything:!0,name:!0,"didn't":!0,already:!0,'explain"':!0},"float average(float a, float b);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Very good too. Here we are adding some information that might be interesting to the user"',title:'"Very',good:!0,"too.":!0,Here:!0,we:!0,are:!0,adding:!0,some:!0,information:!0,that:!0,might:!0,be:!0,interesting:!0,to:!0,the:!0,'user"':!0},"/// Computes the average of a and b.\n/// The order of the parameters doesn't matter (i.e. average(10, 5) == average(5, 10)).\nfloat average(float a, float b);\n")),(0,r.kt)("p",null,"Giving examples is the best way of making the usage of your function clear! Sometimes it can replace a long sentence very effectively. Ideally the example code should be compilable as-is, with no hidden includes. It also allows you to write some script that grabs all your examples and tries to run them. This way you can reuse your examples as tests for your code, and also make sure your examples are always accurate!"),(0,r.kt)("h2",{id:"tutorials-and-examples"},"Tutorials and examples"),(0,r.kt)("p",null,"Having a description of each small element is not enough! You also need to show the bigger picture to your users to help them discover and understand the library. Here is an example of a ",(0,r.kt)("a",{parentName:"p",href:"https://sinusoid.es/lager/architecture.html"},"great tutorial from the Lager library"),"."),(0,r.kt)("h2",{id:"using-doxygen"},"Using Doxygen"),(0,r.kt)("p",null,"Doxygen is ",(0,r.kt)("em",{parentName:"p"},"the")," reference tool for C++ projects that want to generate a website from their inline documentation. It has one drawback though: the sites it generates are ugly. You can get around that by using another tool to complement Doxygen, like Sphinx: ",(0,r.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/cppblog/clear-functional-c-documentation-with-sphinx-breathe-doxygen-cmake/"},"here is a nice tutorial"),"."),(0,r.kt)("h2",{id:"internal-documentation-for-the-maintainers-of-the-library"},"Internal documentation for the maintainers of the library"),(0,r.kt)("p",null,"This kind of documentation is very different from documenting your API. It talks to developpers who will read and modify the internal code. It aims to help them understand the architecture, the reasons the code looks the way it does, and how to change it."),(0,r.kt)("p",null,"Once you finish implementing a piece of code you should explain your intentions, the alternatives you considered and the reasons that made you choose this particular implementation. Don't be shy, talk a lot, and leave a trace for others."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1134).Z,width:"284",height:"393"}),(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Here is how I like to do it"),": Each folder corresponds to a module of the library and has its own ReadMe that explains everything about that module. You can read such a ReadMe ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/CoolLibs/Cool/blob/main/src/Cool/AppManager/_README.md"},"here")),"."),(0,r.kt)("p",null,"This is great to make sure people understand why the code is the way it is, don't reintroduce bugs you already fixed, ",(0,r.kt)("em",{parentName:"p"},"etc."),(0,r.kt)("br",null),"\nEven if you are unsure or not confident about your design, say it! It will help future developers have no remorse rewriting your code and be confident there isn't some important thing they are missing and that made you write the code the way you did."),(0,r.kt)("h2",{id:"going-further"},"Going further"),(0,r.kt)(i.Z,{resources:[{title:"Documentation in the Era of Concepts and Ranges",author:"Christopher Di Bella & Sy Brand",link:"https://youtu.be/nm45t2fnUms",duration:"1h",description:"Good advice on what to put in your documentation"},{title:"Literate Programming in the Large",author:"Timothy Daly",link:"https://youtu.be/AVyGtu2R0w0",duration:"40min",description:"About internal documentation"}],mdxType:"GoingFurther"}))}m.isMDXComponent=!0},1134:function(e,t){t.Z="data:image/png;base64,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"}}]);