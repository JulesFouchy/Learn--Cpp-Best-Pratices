"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[780],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return C}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),g=d(n),C=i,c=g["".concat(l,".").concat(C)]||g[C]||u[C]||s;return n?o.createElement(c,r(r({ref:t},p),{},{components:n})):o.createElement(c,r({ref:t},p))}));function C(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var d=2;d<s;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),i=n(4820);function s(e){var t=e.slug,n=e.text,s=e.anchor,r=i.find((function(e){return e.slug===t}));if(void 0===r)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return o.createElement("a",{href:r.link+(s||"")},n||r.title)}},5848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return C}});var o=n(7462),i=n(3366),s=(n(7294),n(4137)),r=n(8442),a=["components"],l={title:"Introduction",slug:"/assignment"},d=void 0,p={unversionedId:"assignment/introduction",id:"assignment/introduction",title:"Introduction",description:'"Passe-moi le code !"',source:"@site/../../content/assignment/00-introduction.md",sourceDirName:"assignment",slug:"/assignment",permalink:"/Learn--Clean-Code-With-Cpp/assignment",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",slug:"/assignment"},sidebar:"assignment",next:{title:"Setting up a project",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup"}},u=[{value:'"Passe-moi le code !"',id:"passe-moi-le-code-",children:[],level:2},{value:"Submitting your work",id:"submitting-your-work",children:[],level:2},{value:"Time investment",id:"time-investment",children:[],level:2},{value:"Option#1: Rolling your own project",id:"option1-rolling-your-own-project",children:[{value:"Project ideas",id:"project-ideas",children:[],level:3}],level:2},{value:"Option#2: Following the guided project",id:"option2-following-the-guided-project",children:[],level:2}],g={toc:u};function C(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"passe-moi-le-code-"},(0,s.kt)("a",{parentName:"h2",href:"https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech"},'"Passe-moi le code !"')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Que ce soit tes sources ou ton Wi-Fi, stp passe-moi le code !\n\u2013 ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=59lC-XnPgBE&ab_channel=LaCineTech"},(0,s.kt)("em",{parentName:"a"},"MC-Risson")))),(0,s.kt)("p",null,"In order to evaluate you, all I need is to see some code you wrote in order for me to tell which lessons you mastered."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This means that the exact project you will be working on is up to you"),"."),(0,s.kt)("p",null,"I will provide a suggestion of a small project with guided steps, but you can choose to work on your own project instead."),(0,s.kt)("p",null,"The main difference will be that I won't be able to provide you with guided steps for your own projects, but this also means that you will learn a ton more by doing it! You might also be more motivated to work on something you chose and care about."),(0,s.kt)("h2",{id:"submitting-your-work"},"Submitting your work"),(0,s.kt)("p",null,"I will be looking at your code regularly to give you feedback and start checking the lessons that you are learning."),(0,s.kt)("p",null,"In order for me to do so, all of you must publish you work on a public Git repository (which is good practice anyways, and will be the number one lesson I will be looking at)."),(0,s.kt)("p",null,"You can use GitHub, GitLab or whatever you are used to using. Just send me a link to the relevant repository ",(0,s.kt)("em",{parentName:"p"},"now")," (or as soon as you start working on the project)."),(0,s.kt)("p",null,"Also, there are some lessons that I won't be able, from looking at your code, to tell if you have read them, like ",(0,s.kt)(r.Z,{slug:"master-your-ide",mdxType:"LessonLink"}),". So it would be nice if you kept a little ReadMe of all the lessons you have read. You can also use it for yourself: for example you can take notes of the things you learned in the lesson and really don't want to forget, note the points that you didn't quite get, the ones you disagree with, ",(0,s.kt)("em",{parentName:"p"},"etc.")),(0,s.kt)("h2",{id:"time-investment"},"Time investment"),(0,s.kt)("p",null,"In terms of invested time I won't ask you more than can fit during the class sessions, i.e. 24 hours in total this semester. This means that hopefully you won't have to work (too much) outside of class on your spare time."),(0,s.kt)("p",null,"Please note that ",(0,s.kt)("em",{parentName:"p"},"I will only be evaluating the quality of your code, not the state of the end product"),". This means that it doesn't matter if you don't have time to finish the project you set out to do! Your grade will be solely based on the lessons you successfully applied in the project. So no worries please \ud83d\ude0e."),(0,s.kt)("h2",{id:"option1-rolling-your-own-project"},"Option#1: Rolling your own project"),(0,s.kt)("p",null,"I would highly encourage you to do so if you are really interested in programming. You will definitely learn a ton by doing so, and produce something that you will be proud of."),(0,s.kt)("p",null,"If you choose to do so it might be a good idea to share your plans with me so that we can discuss them, give you some feedback or suggestions, and try to estimate the time it will take you. Note that you can still embark on a huge project if you so desire because it doesn't matter if you don't finish it for the end of the semester (see ",(0,s.kt)("a",{parentName:"p",href:"#time-investment"},"Time investment"),")."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"For this project you ",(0,s.kt)("em",{parentName:"strong"},"can")," work in groups"),". Simply remember that the more you are on a project, the harder it is to coordinate and produce a cohesive codebase. But if you think that a collaboration would be beneficial, then please go ahead!"),(0,s.kt)("p",null,"I also think that it only makes sense to team up with people who have roughly the same level as you. This way you will be able to help each other out and discuss ideas on equal footing. If you are looking for someone very good to help you, you can always ask your comrades or me! But working on the same project wouldn't be beneficial I believe because you won't be advancing at the same pace and/or having the same ambitions. (I might be wrong though and we can discuss that)."),(0,s.kt)("p",null,"If you choose Option#1, you don't need to care about the other pages of the ",(0,s.kt)("em",{parentName:"p"},"Assignment")," section."),(0,s.kt)("h3",{id:"project-ideas"},"Project ideas"),(0,s.kt)("p",null,"If you are looking for inspiration I can suggest a few ideas that I would personally love working on:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Cool"),": I am currently working on a C++ framework called ",(0,s.kt)("a",{parentName:"li",href:"https://coollibs.github.io/home/"},(0,s.kt)("em",{parentName:"a"},"Cool"))," where we do a lot of image-related work. If you are interested in joining the adventure, there is definitely a place for you!")),(0,s.kt)("h2",{id:"option2-following-the-guided-project"},"Option#2: Following the guided project"),(0,s.kt)("p",null,"This option will be easier to follow and shouldn't require as much time investment. The project will consist in making a few little games: hangman, noughts and crosses, ",(0,s.kt)("em",{parentName:"p"},"etc."),"."),(0,s.kt)("p",null,"It makes sense to choose this option if you don't want to have to organize and plan a project by yourself. Here you will be able to focus entirely on the micro-level programming tasks like ",(0,s.kt)("em",{parentName:"p"},'"let\'s get a string from the user"'),", ",(0,s.kt)("em",{parentName:"p"},'"let\'s check if this word contains this letter"')," and so on."),(0,s.kt)("p",null,"The other pages of this section will guide you through this project step by step."),(0,s.kt)("p",null,"I believe it is better if you work alone on this project. (But we can discuss that if you think it will be beneficial for you to team up with someone)."))}C.isMDXComponent=!0},4820:function(e){e.exports=JSON.parse('[{"title":"Use a debugger","benefit":5,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":1},{"title":"Use an IDE","benefit":5,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1},{"title":"std::vector","benefit":5,"easiness":5,"order":1,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":1},{"title":"Use Git","benefit":5,"easiness":3,"order":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.975},{"title":"Use a formatting tool","benefit":4,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9625},{"title":"Naming","benefit":5,"easiness":1,"order":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"order":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.95},{"title":"Consistency in style","benefit":3,"easiness":5,"order":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.925},{"title":"Design Great Classes","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-great-classes","slug":"design-great-classes","priority":0.775},{"title":"Documentation","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.775},{"title":"Make it work, then make it good","benefit":5,"easiness":3,"order":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.775},{"title":"Stack vs Heap","benefit":5,"easiness":3,"order":2,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.775},{"title":"Write small functions","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775},{"title":"assert","benefit":4,"easiness":5,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.7625000000000001},{"title":"auto","benefit":4,"easiness":5,"order":2,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.7625000000000001},{"title":"Enums","benefit":4,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001},{"title":"Lambda functions","benefit":4,"easiness":4,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.75},{"title":"Master your IDE","benefit":4,"easiness":4,"order":2,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.75},{"title":"std::optional","benefit":4,"easiness":4,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.75},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"order":2,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.75},{"title":"const","benefit":4,"easiness":3,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.7375},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.7375},{"title":"STL algorithms","benefit":4,"easiness":3,"order":2,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.7375},{"title":"Debug vs Release","benefit":3,"easiness":5,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.7250000000000001},{"title":"Markdown","benefit":3,"easiness":5,"order":2,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.7250000000000001},{"title":"Range-based for loop","benefit":3,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.7250000000000001},{"title":"Smart Pointers","benefit":3,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.7250000000000001},{"title":"CMake","benefit":3,"easiness":3,"order":2,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.7},{"title":"C++ casts","benefit":3,"easiness":3,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.7},{"title":"Prefer free functions","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/free-functions","slug":"free-functions","priority":0.575},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"order":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.575},{"title":"Use libraries","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575},{"title":"Watch conferences","benefit":5,"easiness":3,"order":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.575},{"title":"Write libraries","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.575},{"title":"Dear ImGui","benefit":5,"easiness":2,"order":3,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.5625},{"title":"Designated Initializers","benefit":4,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.5625},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-repeat-yourself","slug":"dont-repeat-yourself","priority":0.5625},{"title":"Orthogonality","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/orthogonality","slug":"orthogonality","priority":0.5625},{"title":"Testing","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625},{"title":"Type design","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625},{"title":"Dependencies","benefit":5,"easiness":1,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55},{"title":"Single Source of Truth","benefit":4,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55},{"title":"Strong Typing","benefit":4,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55},{"title":"Code reviews","benefit":4,"easiness":3,"order":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375},{"title":"Git submodules","benefit":4,"easiness":3,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375},{"title":"Static site generators","benefit":4,"easiness":3,"order":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.5375},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.525},{"title":"Deleted functions","benefit":3,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.525},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525},{"title":"Error Handling","benefit":3,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125},{"title":"Git Pull Requests","benefit":3,"easiness":4,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125},{"title":"Advanced Git features","benefit":3,"easiness":3,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5},{"title":"Functional programming","benefit":3,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5},{"title":"Measuring performance","benefit":3,"easiness":3,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.5},{"title":"Move semantics","benefit":3,"easiness":3,"order":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5},{"title":"Precompiled Header","benefit":3,"easiness":3,"order":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.5},{"title":"State and Strategy","benefit":3,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5},{"title":"std::variant","benefit":3,"easiness":3,"order":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5},{"title":"Cache and Branches","benefit":3,"easiness":2,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875},{"title":"Linked lists","benefit":2,"easiness":5,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.4875},{"title":"Multithreading","benefit":3,"easiness":2,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875},{"title":"Polymorphism","benefit":3,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875},{"title":"Avoid dead code","benefit":2,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.4625},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.45},{"title":"Pointers vs References","benefit":2,"easiness":2,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.45},{"title":"Type erasure","benefit":4,"easiness":2,"order":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.325},{"title":"wasm and electron","benefit":4,"easiness":2,"order":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.325},{"title":"Scope guard","benefit":3,"easiness":4,"order":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.3125},{"title":"<random>","benefit":3,"easiness":3,"order":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.30000000000000004},{"title":"The Rule of 5","benefit":3,"easiness":3,"order":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.30000000000000004},{"title":"friend","benefit":1,"easiness":5,"order":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.25},{"title":"#if defined()","benefit":1,"easiness":5,"order":4,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.25},{"title":"Trailing return type","benefit":1,"easiness":5,"order":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.05}]')}}]);