"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8469],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return C}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=s.createContext({}),p=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),C=i,g=u["".concat(r,".").concat(C)]||u[C]||c[C]||a;return n?s.createElement(g,o(o({ref:t},d),{},{components:n})):s.createElement(g,o({ref:t},d))}));function C(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3136:function(e,t,n){n.d(t,{Z:function(){return p}});var s=n(7294),i=n(6010),a={note:s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},s.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},s.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},o={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function l(e){var t=e.children,n=e.type,l=e.title,r=void 0===l?n:l,p=e.icon,d=void 0===p?a[n]:p;return s.createElement("div",{className:(0,i.Z)("admonition","admonition-"+n,"alert","alert--"+o[n])},s.createElement("div",{className:"admonition-heading"},s.createElement("h5",null,s.createElement("span",{className:"admonition-icon"},d),r)),s.createElement("div",{className:"admonition-content"},t))}var r=n(7988);function p(e){var t=e.resources;return s.createElement(l,{type:"info",title:"Going Further"},t.map((function(e){return s.createElement("p",null,(0,r.Z)(e))})))}},8442:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),i=n(4820);function a(e){var t=e.slug,n=e.text,a=e.anchor,o=i.find((function(e){return e.slug===t}));if(void 0===o)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return s.createElement("a",{href:o.link+(a||"")},n||o.title)}},7988:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(7294);function i(e){var t=e.title,n=e.author,i=e.link,a=e.duration,o=e.description;return s.createElement("span",null,s.createElement("a",{href:i,target:"_blank"},n,", ",s.createElement("i",null,t)),a&&s.createElement("span",null," (",a,")"),o&&s.createElement("span",null," ",o))}},4773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return C},default:function(){return m}});var s=n(7462),i=n(3366),a=(n(7294),n(4137)),o=n(3136),l=n(7988),r=n(8442),p=["components"],d={title:"Naming",benefit:5,easiness:1,level:1,tags:["Clean Code"]},c=void 0,u={unversionedId:"lessons/naming",id:"lessons/naming",title:"Naming",description:"There are only two hard problems in computer science: naming, cache invalidation, and off-by-1 errors.",source:"@site/../../content/lessons/naming.md",sourceDirName:"lessons",slug:"/lessons/naming",permalink:"/Learn--Clean-Code-With-Cpp/lessons/naming",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Naming",benefit:5,easiness:1,level:1,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Static analysis and Sanitizers",permalink:"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers"},next:{title:"Stack vs Heap",permalink:"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap"}},C=[{value:"Brief",id:"brief",children:[],level:2},{value:"Anecdote",id:"anecdote",children:[],level:2},{value:"Some Guidelines",id:"some-guidelines",children:[{value:"Name your booleans as questions or assertions",id:"name-your-booleans-as-questions-or-assertions",children:[],level:3},{value:"Avoid abbreviations",id:"avoid-abbreviations",children:[],level:3},{value:"Use variables or functions to split complicated statements",id:"use-variables-or-functions-to-split-complicated-statements",children:[],level:3},{value:"Append &quot;out&quot; to non-const reference parameters",id:"append-out-to-non-const-reference-parameters",children:[],level:3}],level:2},{value:"Going further",id:"going-further",children:[],level:2}],g={toc:C};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are only two hard problems in computer science: naming, cache invalidation, and off-by-1 errors.")),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"Naming is very important because this is your first and most powerful tool to communicate with the other developers (and with yourself in the future)."),(0,a.kt)("p",null,"It is very important that you pick your names carefuly, take the time to mature your design, and change the names whenever you realize they don't quite describe what your object is or does anymore."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Take the time to rename whenever you notice a name that is not quite accurate!"),(0,a.kt)(r.Z,{slug:"ide",anchor:"#rename",text:"Use the features of your IDE",mdxType:"LessonLink"})," to make the renaming easy.")),(0,a.kt)("p",null,"The greatest names are both consise and descriptive: they encapsulate a concept perfectly and everybody can wrap their head around them easily.",(0,a.kt)("br",null),'\nThe next best thing are names that are long, but still descriptive. The fact that you need a "sentence" to describe your object might indicate that you don\'t fully understand the abstraction behind it, or that you have a design flaw (maybe your function tries to do several things at once and should be split, or maybe your class has more than one responsibility). Nevertheless it is still a decent name and you can live with it for a while.',(0,a.kt)("br",null),"\nThe last kind of names are the ones that are obscure (or worse, ",(0,a.kt)("em",{parentName:"p"},"lies"),"); those are inacceptable!"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"I could not do a better job than Kevlin Henney already did, so please watch those 10 minutes of his conference, starting at 41:30"),(0,a.kt)(l.Z,{title:"Clean Coders Hate What Happens to Your Code When You Use These Enterprise Programming Tricks",author:"Kevlin Henney",link:"https://youtu.be/FyCYva9DhsI?t=2490",mdxType:"Resource"}))),(0,a.kt)("h2",{id:"anecdote"},"Anecdote"),(0,a.kt)("p",null,"Finding the right name sometimes gives you ideas of how to improve your design. For example I wanted a class to hold a width and a height to represent the size of some images. I started calling it ",(0,a.kt)("inlineCode",{parentName:"p"},"RectangleSize")," to be more generic, but when I realized it was more of an ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageSize")," it helped me a lot! Because then I added an invariant to that class : ",(0,a.kt)("inlineCode",{parentName:"p"},"width > 0 && height > 0"),". This is very useful because most graphics APIs won't accept an empty image anyways and I was doing tests all over the place to make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"width > 0 && height > 0"),". Once I had this invariant for ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageSize")," I was able to use it safely without checks, since they already took place in the constructor of ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageSize"),"."),(0,a.kt)("h2",{id:"some-guidelines"},"Some Guidelines"),(0,a.kt)("p",null,"Some of these are extracted from the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/DevelopmentSetup/CodingStandard/"},"Unreal Engine Coding Guidelines"),"."),(0,a.kt)("h3",{id:"name-your-booleans-as-questions-or-assertions"},"Name your booleans as questions or assertions"),(0,a.kt)("p",null,"To make it clear what true and false mean:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bad, what does true mean?\nbool CheckTea(Tea tea);\n\n// Good, the name makes it clear that true means the tea is fresh\nbool IsTeaFresh(Tea tea);\n// Also good\nbool TeaIsFresh(Tea tea);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"assertion")," version is great because it makes your code read as an actual sentence: ",(0,a.kt)("inlineCode",{parentName:"p"},"if (TeaIsFresh(myTea))"),".\nOn the other hand the ",(0,a.kt)("em",{parentName:"p"},"question")," version is great because the first word (",(0,a.kt)("inlineCode",{parentName:"p"},"is"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"has"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"does"),", ",(0,a.kt)("em",{parentName:"p"},"etc."),") makes it instantly clear that this is a boolean."),(0,a.kt)("h3",{id:"avoid-abbreviations"},"Avoid abbreviations"),(0,a.kt)("p",null,"What is obvious to you might not be obvious to everybody. Instead of taking the risk, just take the time to type a few more letters \ud83d\ude09. Only use abbreviations if you are relying on a well established convention, like ",(0,a.kt)("em",{parentName:"p"},"id")," for ",(0,a.kt)("em",{parentName:"p"},"identifier"),". For example the ",(0,a.kt)("em",{parentName:"p"},"Bloomberg Coding Standards")," define a list of allowed abbreviations that everyone should know the meaning of (",(0,a.kt)("a",{parentName:"p",href:"http://bloomberg.github.io/bde/knowledge_base/coding_standards.html#general-naming-conventions"},(0,a.kt)("em",{parentName:"a"},"See Section 3.4.3")),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bad. Can you guess what this stands for?\nint calc_rev_diff();\n\n// Good, no guessing involved\nint calculate_revenue_difference();\n\n// Bad (although we have gotten used to it so this is now an OK convention)\nvoid mkdir();\n\n// Good, much clearer to everybody, especially to newbies\nvoid make_directory();\n")),(0,a.kt)("h3",{id:"use-variables-or-functions-to-split-complicated-statements"},"Use variables or functions to split complicated statements"),(0,a.kt)("p",null,"Because it is faster to read than a comment, and can't be outdated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bad, difficult to understand\nif ((Blah->BlahP->WindowExists->Etc && Stuff) &&\n    !(PlayerExists && GameStarted && PlayerStillHasPawn &&\n    IsTuesday())))\n{\n    DoSomething();\n}\n\n// Good, way easier to understand\nconst bool WindowIsValid = Blah->BlahP->WindowExists->Etc && Stuff;\nconst bool PlayerIsDead = PlayerExists && GameStarted && PlayerStillHasPawn && IsTuesday();\nif (WindowIsValid && !PlayerIsDead)\n{\n    DoSomething();\n}\n")),(0,a.kt)("h3",{id:"append-out-to-non-const-reference-parameters"},'Append "out" to non-const reference parameters'),(0,a.kt)("p",null,"When you pass a variable by mutable reference it implies that your function will change its value. It is better to make it explicit so that it is easier to understand what is going on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'bool parseObjectFromPath(const char* aPath, Object& anObjectOut)\n{\n    if (const auto values = readFile(aPath))\n    {\n        anObjectOut.Set(values);\n        return true;\n    }\n    return false;\n}\n\n// ...\n\n{\n    Object newObject;\n    if (parseObjectFromPath("superPath/superFile", newObject))\n    {\n        // Do stuff with your filled object\n    }\n    // ...\n}\n')),(0,a.kt)("h2",{id:"going-further"},"Going further"),(0,a.kt)(o.Z,{resources:[{title:"Naming is Hard: Let's Do Better",author:"Kate Gregory",link:"https://youtu.be/MBRoCdtZOYg",duration:"1h"}],mdxType:"GoingFurther"}))}m.isMDXComponent=!0},4820:function(e){e.exports=JSON.parse('[{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.5263157894736842},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1.0526315789473684},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1.0526315789473684},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1.0526315789473684},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.975,"points":1.5789473684210527},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":2.6315789473684212},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":1,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.9375,"points":1.5789473684210527},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.5263157894736842},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.7875000000000001,"points":0.35714285714285715},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":0.775,"points":0.5357142857142857},{"title":"Design Cohesive Classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":0.5357142857142857},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":0.775,"points":0.5357142857142857},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5357142857142857},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":0.7625000000000001,"points":0.7142857142857143},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.17857142857142858},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8928571428571429},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.7250000000000001,"points":0.7142857142857143},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.03333333333333333},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.1},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.1},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.03333333333333333},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.03333333333333333},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.13333333333333333},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.13333333333333333},{"title":"Dependencies","benefit":5,"easiness":1,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55,"points":0.16666666666666666},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.06666666666666667},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.06666666666666667},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.06666666666666667},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.06666666666666667},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.06666666666666667},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.1},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.1},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.1},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.1},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.1},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.03333333333333333},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.03333333333333333},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.03333333333333333},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.03333333333333333},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.03333333333333333},{"title":"std::function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":0.525,"points":0.03333333333333333},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.06666666666666667},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.06666666666666667},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.1},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.1},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.1},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.1},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.1},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.1},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.1},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.13333333333333333},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.13333333333333333},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.13333333333333333},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.09375},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.09375},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.125},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.03125},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.0625},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.09375},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.03125},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.125},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.125},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.0625},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.09375},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.09375},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.09375},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.09375},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.03125},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.09375},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.03125},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.125},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0.16666666666666666}]')}}]);