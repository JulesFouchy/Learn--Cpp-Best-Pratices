"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[2918],{3349:function(e,t,s){s.d(t,{Z:function(){return w}});var n=s(5068),i=s(7294),r=s(4820),o=JSON.parse('["Clean Code","Tools","C++","Workflow","Git","Libraries & Frameworks","Beautiful Code","Performant Code"]'),a="stick_to_the_right_CUT-",l="grade_green_lccD",d="grade_blue_eb5x",p="export_button_p+Js",u="button_L2eI",c="tag_filter_selected_dlsF",C="tag_filter_not_selected_1Srz",g="tags_filter_container_115H",h="tags_filters_4TGD",f=s(9980),m=function(e,t){var s,n=t.map((function(t){var s=e.find((function(e){return e.slug===t}));return console.assert(void 0!==s),6-s.easiness})).reduce((function(e,t){return e+t}),0);return s=n,20-10/Math.pow(2,s/10-1)};var y=function(e,t){return i.createElement("div",{className:u},i.createElement("div",{onClick:t},e))},k=function(e){return i.createElement("div",{onClick:function(){return function(e){var t=new Blob([JSON.stringify(e)],{type:"text/json;charset=utf-8"}),s="lessons.json";if(document.documentMode)window.navigator.msSaveBlob(t,s);else{var n=document.createElement("a");n.download=s,n.href=(window.URL||window.webkitURL).createObjectURL(t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}(e)}},"Export as JSON")},b=function(e){return i.createElement("div",null,e.map((function(e){return function(e){return i.createElement("div",null,e)}(e)})))},v=function(e,t){return i.createElement("div",{className:h},i.createElement("b",null,"Filters:"),y("Select All",(function(){e.length=0,o.forEach((function(t){return e.push(t)})),t.forceUpdate()})),y("Remove All",(function(){e.length=0,t.forceUpdate()})),i.createElement("div",{className:g},o.map((function(s){return function(e,t,s){var n=t.includes(e);return i.createElement("div",{className:n?c:C,onClick:function(){n?t.splice(t.indexOf(e),1):t.push(e),s.forceUpdate()}},e)}(s,e,t)}))))},w=function(e){function t(t){var s,n=t.student_lessons;if((s=e.call(this)||this).lessons_checked_by_user=[],s.new_lessons={},s.old_lessons={},s.is_demo=!1,s.tags_filter=[].concat(o),s.new_lessons=[].concat(n.new),s.old_lessons=[].concat(n.old),n.is_demo){s.is_demo=!0;try{s.lessons_checked_by_user=[].concat(JSON.parse(localStorage.getItem("lessons_checked_by_user")||"[]")).filter((function(e){return r.includes(e)}))}catch(i){console.error(i)}}return s}return(0,n.Z)(t,e),t.prototype.render=function(){var e,t,s,n=this,o=m(r,[].concat(this.new_lessons)),u=m(r,[].concat(this.new_lessons,this.lessons_checked_by_user));return i.createElement("div",null,v(this.tags_filter,this),i.createElement("br",null),!this.is_demo&&i.createElement("div",{style:{display:"flex",flexDirection:"column",top:"200px"},className:a},i.createElement("div",{className:l,title:"This is your actual current grade"},o.toFixed(1)," / 20"),i.createElement("div",{className:d,title:"This is the grade that you would have if you were to validate the skills that you checked in blue. Click to reset those."},(e=u,t=this.lessons_checked_by_user,s=this,i.createElement("div",{onClick:function(){return function(e,t){e.length=0,t.forceUpdate()}(t,s)}},e.toFixed(1)," / 20")))),this.is_demo&&i.createElement("div",{style:{top:"200px"},className:a},i.createElement("div",{className:p},k(this.lessons_checked_by_user))),i.createElement("table",null,i.createElement("tr",null,i.createElement("th",null,"Lesson"),i.createElement("th",null,"Validated"),i.createElement("th",null,"Tags"),i.createElement("th",null,"Priority"),i.createElement("th",null,"Benefit"),i.createElement("th",null,"Easiness"),i.createElement("th",null,"Order")),r.filter((function(e){return n.tags_filter.some((function(t){return(e.tags||[]).includes(t)}))})).map((function(e){return i.createElement("tr",null,i.createElement("td",null,i.createElement("a",{href:e.link},e.title)),i.createElement("td",null,n.new_lessons.find((function(t){return e.slug===t}))?i.createElement(f.Z,{checked:!0,disabled:!0,sx:{"&.Mui-checked":{color:"#25c2a0"}}}):n.old_lessons.find((function(t){return e.slug===t}))?i.createElement(f.Z,{checked:!0,disabled:!0,sx:{"&.Mui-checked":{color:"#90a4ae"}}}):function(e,t){return i.createElement(f.Z,{style:{color:"#29B6F6"},checked:t.lessons_checked_by_user.includes(e),onChange:function(s){s.target.checked?t.lessons_checked_by_user.push(e):t.lessons_checked_by_user=t.lessons_checked_by_user.filter((function(t){return t!==e})),t.is_demo&&localStorage.setItem("lessons_checked_by_user",JSON.stringify(t.lessons_checked_by_user)),t.forceUpdate()}})}(e.slug,n)),i.createElement("td",null,b(e.tags||[])),i.createElement("td",null,(100*e.priority).toFixed(0)," %"),i.createElement("td",null,e.benefit),i.createElement("td",null,e.easiness),i.createElement("td",null,e.order))}))))},t}(i.Component)},5105:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return C}});var n=s(7462),i=s(3366),r=(s(7294),s(4137)),o=s(3349),a=["components"],l={slug:"/progress",title:"Introduction"},d=void 0,p={unversionedId:"progress/introduction",id:"progress/introduction",title:"Introduction",description:"{@include: ../../Teaching-Toolbox/website/components/ProgressIntroPage.md}",source:"@site/../../content/progress/00-introduction.md",sourceDirName:"progress",slug:"/progress",permalink:"/Learn--Clean-Code-With-Cpp/progress",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/progress",title:"Introduction"},sidebar:"progress",next:{title:"Hortense H",permalink:"/Learn--Clean-Code-With-Cpp/progress/hortense_h"}},u=[{value:"How are the lessons sorted?",id:"how-are-the-lessons-sorted",children:[],level:2},{value:"How is my grade calculated?",id:"how-is-my-grade-calculated",children:[],level:2},{value:"Self-evaluation",id:"self-evaluation",children:[],level:2}],c={toc:u};function C(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome! In this section you will be able to see your progress live, your current grade, and the next lessons that you can learn. Each student has their own page which I will update regularly with the lessons that I have validated."),(0,r.kt)("p",null,"Checked in grey are the lessons you already knew before this semester, in green the ones I validated during this semester, and in blue the ones that you can temporarily check to see what your grade would be if you were to validate those lessons."),(0,r.kt)("h2",{id:"how-are-the-lessons-sorted"},"How are the lessons sorted?"),(0,r.kt)("p",null,"They are first sorted by ",(0,r.kt)("strong",{parentName:"p"},"Order"),", which is a rough measure of a logical order that the lessons should be learned in. For example you can't learn about ",(0,r.kt)("em",{parentName:"p"},"Git submodules")," if you don't even know what ",(0,r.kt)("em",{parentName:"p"},"Git")," is yet."),(0,r.kt)("p",null,"Then, for lessons of the same Order, a ",(0,r.kt)("strong",{parentName:"p"},"Priority")," is computed as ",(0,r.kt)("inlineCode",{parentName:"p"},"0.75 * Benefit + 0.25 * Easiness"),", which is then remapped between 100% and 0% according to the Order. ",(0,r.kt)("strong",{parentName:"p"},"Benefit")," measures how much your code or workflow will improve if you learn that lesson, and ",(0,r.kt)("strong",{parentName:"p"},"Easiness")," measures how easy it will be to learn that lessons. The bests lessons are the ones that have a huge impact ",(0,r.kt)("em",{parentName:"p"},"and")," are easy to learn, and this is the ones that will have the highest Priorities."),(0,r.kt)("h2",{id:"how-is-my-grade-calculated"},"How is my grade calculated?"),(0,r.kt)("p",null,"Each mastered lesson gives you some points based on how long it should have taken you to learn. We sum all those points, and then apply ",(0,r.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/6gmdt6tfmf"},"a compression function")," to map this score between 0 and 20. You can see the exact source code that we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Teaching-Toolbox/blob/main/grader/grader.js"},"here"),"."),(0,r.kt)("h2",{id:"self-evaluation"},"Self-evaluation"),(0,r.kt)("p",null,"Please tick the lessons that you consider to master already, then export them as json using that big green button and send them to me."),(0,r.kt)("p",null,"If you have a doubt, don't tick the checkbox; in the worst case this will mean that you will have a lesson that is easy to validate during the semester."),(0,r.kt)("p",null,"You don't need to check lessons of order 3 or higher if you can't be bothered reading the whole list (which is arguably pretty long)."),(0,r.kt)(o.Z,{student_lessons:{new:[],old:[],is_demo:!0},mdxType:"LessonsList"}))}C.isMDXComponent=!0},4820:function(e){e.exports=JSON.parse('[{"title":"Use a debugger","benefit":5,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":1},{"title":"Use an IDE","benefit":5,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1},{"title":"std::vector","benefit":5,"easiness":5,"order":1,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":1},{"title":"Use Git","benefit":5,"easiness":3,"order":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.975},{"title":"Use a formatting tool","benefit":4,"easiness":5,"order":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9625},{"title":"Naming","benefit":5,"easiness":1,"order":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"order":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.95},{"title":"Consistency in style","benefit":3,"easiness":5,"order":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.925},{"title":"Design Great Classes","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-great-classes","slug":"design-great-classes","priority":0.775},{"title":"Documentation","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.775},{"title":"Make it work, then make it good","benefit":5,"easiness":3,"order":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.775},{"title":"Stack vs Heap","benefit":5,"easiness":3,"order":2,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.775},{"title":"Write small functions","benefit":5,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775},{"title":"assert","benefit":4,"easiness":5,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.7625000000000001},{"title":"auto","benefit":4,"easiness":5,"order":2,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.7625000000000001},{"title":"Enums","benefit":4,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001},{"title":"Lambda functions","benefit":4,"easiness":4,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.75},{"title":"Master your IDE","benefit":4,"easiness":4,"order":2,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.75},{"title":"std::optional","benefit":4,"easiness":4,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.75},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"order":2,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.75},{"title":"const","benefit":4,"easiness":3,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.7375},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.7375},{"title":"STL algorithms","benefit":4,"easiness":3,"order":2,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.7375},{"title":"Debug vs Release","benefit":3,"easiness":5,"order":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.7250000000000001},{"title":"Markdown","benefit":3,"easiness":5,"order":2,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.7250000000000001},{"title":"Range-based for loop","benefit":3,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.7250000000000001},{"title":"Smart Pointers","benefit":3,"easiness":5,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.7250000000000001},{"title":"CMake","benefit":3,"easiness":3,"order":2,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.7},{"title":"C++ casts","benefit":3,"easiness":3,"order":2,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.7},{"title":"Prefer free functions","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/free-functions","slug":"free-functions","priority":0.575},{"title":"Static analysis and Sanitizers","benefit":5,"easiness":3,"order":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysis-and-sanitizers","slug":"static-analysis-and-sanitizers","priority":0.575},{"title":"Use libraries","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575},{"title":"Watch conferences","benefit":5,"easiness":3,"order":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.575},{"title":"Write libraries","benefit":5,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.575},{"title":"Dear ImGui","benefit":5,"easiness":2,"order":3,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.5625},{"title":"Designated Initializers","benefit":4,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.5625},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-repeat-yourself","slug":"dont-repeat-yourself","priority":0.5625},{"title":"Orthogonality","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/orthogonality","slug":"orthogonality","priority":0.5625},{"title":"Testing","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625},{"title":"Type design","benefit":5,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625},{"title":"Dependencies","benefit":5,"easiness":1,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependencies","slug":"dependencies","priority":0.55},{"title":"Single Source of Truth","benefit":4,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55},{"title":"Strong Typing","benefit":4,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55},{"title":"Code reviews","benefit":4,"easiness":3,"order":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375},{"title":"Git submodules","benefit":4,"easiness":3,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375},{"title":"Static site generators","benefit":4,"easiness":3,"order":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.5375},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.525},{"title":"Deleted functions","benefit":3,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.525},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525},{"title":"Error Handling","benefit":3,"easiness":4,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125},{"title":"Git Pull Requests","benefit":3,"easiness":4,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125},{"title":"Advanced Git features","benefit":3,"easiness":3,"order":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5},{"title":"Functional programming","benefit":3,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5},{"title":"Measuring performance","benefit":3,"easiness":3,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.5},{"title":"Move semantics","benefit":3,"easiness":3,"order":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5},{"title":"Precompiled Header","benefit":3,"easiness":3,"order":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.5},{"title":"State and Strategy","benefit":3,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5},{"title":"std::variant","benefit":3,"easiness":3,"order":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5},{"title":"Cache and Branches","benefit":3,"easiness":2,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875},{"title":"Linked lists","benefit":2,"easiness":5,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.4875},{"title":"Multithreading","benefit":3,"easiness":2,"order":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875},{"title":"Polymorphism","benefit":3,"easiness":2,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875},{"title":"Avoid dead code","benefit":2,"easiness":3,"order":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.4625},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.45},{"title":"Pointers vs References","benefit":2,"easiness":2,"order":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.45},{"title":"Type erasure","benefit":4,"easiness":2,"order":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.325},{"title":"wasm and electron","benefit":4,"easiness":2,"order":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.325},{"title":"Scope guard","benefit":3,"easiness":4,"order":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.3125},{"title":"<random>","benefit":3,"easiness":3,"order":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.30000000000000004},{"title":"The Rule of 5","benefit":3,"easiness":3,"order":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.30000000000000004},{"title":"friend","benefit":1,"easiness":5,"order":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.25},{"title":"#if defined()","benefit":1,"easiness":5,"order":4,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.25},{"title":"Trailing return type","benefit":1,"easiness":5,"order":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.05}]')}}]);