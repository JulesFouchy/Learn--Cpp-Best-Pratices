"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[8334],{4137:function(e,t,n){n.d(t,{Zo:function(){return C},kt:function(){return g}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=s.createContext({}),p=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},C=function(e){var t=p(e.components);return s.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,C=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,c=u["".concat(r,".").concat(g)]||u[g]||d[g]||o;return n?s.createElement(c,l(l({ref:t},C),{},{components:n})):s.createElement(c,l({ref:t},C))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(7294),i=n(4820);function o(e){var t=e.slug,n=e.text,o=e.anchor,l=i.find((function(e){return e.slug===t}));if(void 0===l)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return s.createElement("a",{href:l.link+(o||"")},n||l.title)}},6741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return C},toc:function(){return d},default:function(){return g}});var s=n(7462),i=n(3366),o=(n(7294),n(4137)),l=n(8442),a=["components"],r={title:"Setting up a project"},p=void 0,C={unversionedId:"assignment/project-setup",id:"assignment/project-setup",title:"Setting up a project",description:"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase.",source:"@site/../../content/assignment/01-project-setup.md",sourceDirName:"assignment",slug:"/assignment/project-setup",permalink:"/Learn--Clean-Code-With-Cpp/assignment/project-setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up a project"},sidebar:"assignment",previous:{title:"Introduction",permalink:"/Learn--Clean-Code-With-Cpp/assignment"},next:{title:"Guess the number",permalink:"/Learn--Clean-Code-With-Cpp/assignment/guess-the-number"}},d=[{value:"Git",id:"git",children:[],level:2},{value:"Project template",id:"project-template",children:[],level:2}],u={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will be making a program that allows you to play a few games, all in one project. This will force you to reuse code and maintain the hygiene of your codebase."),(0,o.kt)("h2",{id:"git"},"Git"),(0,o.kt)("p",null,"First things first, let's create ",(0,o.kt)("strong",{parentName:"p"},"a Git repo"),". If you are not used to using Git, read ",(0,o.kt)(l.Z,{text:"the associated lesson",slug:"git",mdxType:"LessonLink"}),"."),(0,o.kt)("p",null,"I also created a repo that you will be able to use as a reference / solution as you work on the project. I will regularly link to commits that correspond to the current exercise, and you can also check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commits/main"},"commit history"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," in my solution there are a lot of comments that explain why I do things in a certain way. They are not good examples of comments that you should put in your code; they are only here to help you learn C++. For example these comments shouldn't appear in actual code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'static constexpr int MIN = 0;   // `static constexpr` is the "proper" way of declaring constants known at compile time\nstatic constexpr int MAX = 100; // It is as efficient as `#define` but has the benefit of working like a normal C++ variable: it has a type, etc.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB:")," my solutions will not always be the best, partly to keep them simple, partly to leave you room to think and improve the code I give you \ud83d\ude09 (and partly because I am not an omniscient programmer and there might be things that I am simply not aware of).\nWe will come back to some of the solutions later to improve them."),(0,o.kt)("h2",{id:"project-template"},"Project template"),(0,o.kt)("p",null,"I would recommend you use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this template"),". It is a minimalist C++ project that uses CMake. It also sets up a few tools that will be useful to you. Read its readme to learn how to build it! (NB: I don't recommend to use the dev container for this project because we will do some graphics stuff later on)."))}g.isMDXComponent=!0},4820:function(e){e.exports=JSON.parse('[{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.625},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1.25},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1.25},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1.25},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.975,"points":1.875},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":3.125},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.625},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.7875000000000001,"points":0.35714285714285715},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":0.775,"points":0.5357142857142857},{"title":"Design Cohesive Classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":0.5357142857142857},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":0.775,"points":0.5357142857142857},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5357142857142857},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":0.7625000000000001,"points":0.7142857142857143},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.17857142857142858},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8928571428571429},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.7250000000000001,"points":0.7142857142857143},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.03260869565217391},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.09782608695652174},{"title":"Stack vs Heap","benefit":5,"easiness":3,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.575,"points":0.09782608695652174},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.09782608695652174},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.03260869565217391},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.03260869565217391},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.13043478260869565},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.13043478260869565},{"title":"Dependencies","benefit":5,"easiness":1,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55,"points":0.16304347826086957},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.06521739130434782},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.06521739130434782},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.06521739130434782},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.06521739130434782},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.06521739130434782},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.09782608695652174},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.09782608695652174},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.09782608695652174},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.09782608695652174},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.09782608695652174},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.03260869565217391},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.03260869565217391},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.03260869565217391},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.03260869565217391},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.03260869565217391},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.06521739130434782},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.06521739130434782},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.09782608695652174},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.09782608695652174},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.09782608695652174},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.09782608695652174},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.09782608695652174},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.09782608695652174},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.09782608695652174},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.13043478260869565},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.13043478260869565},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.13043478260869565},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.09375},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.09375},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.125},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.03125},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.0625},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.09375},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.03125},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.125},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.125},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.0625},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.09375},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.09375},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.09375},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.09375},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.03125},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.09375},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.03125},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.125},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0.16666666666666666},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0.16666666666666666}]')}}]);