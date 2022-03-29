"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7665],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=s.createContext({}),p=function(e){var t=s.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(r.Provider,{value:t},e.children)},C={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,c=u["".concat(r,".").concat(g)]||u[g]||C[g]||a;return n?s.createElement(c,l(l({ref:t},d),{},{components:n})):s.createElement(c,l({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8442:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),i=n(4820);function a(e){var t=e.slug,n=e.text,a=e.anchor,l=i.find((function(e){return e.slug===t}));if(void 0===l)throw console.error('Broken link to inexistant lesson "'+t+'"'),"";return s.createElement("a",{href:l.link+(a||"")},n||l.title)}},7406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return C},default:function(){return g}});var s=n(7462),i=n(3366),a=(n(7294),n(4137)),l=n(8442),o=["components"],r={title:"Use structs to group data",benefit:5,easiness:3,level:2,bias:3,tags:["Clean Code"]},p=void 0,d={unversionedId:"lessons/use-structs-to-group-data",id:"lessons/use-structs-to-group-data",title:"Use structs to group data",description:"Brief",source:"@site/../../content/lessons/use-structs-to-group-data.md",sourceDirName:"lessons",slug:"/lessons/use-structs-to-group-data",permalink:"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data",tags:[{label:"Clean Code",permalink:"/Learn--Clean-Code-With-Cpp/tags/clean-code"}],version:"current",frontMatter:{title:"Use structs to group data",benefit:5,easiness:3,level:2,bias:3,tags:["Clean Code"]},sidebar:"lessons",previous:{title:"Design cohesive classes",permalink:"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes"},next:{title:"Write small functions",permalink:"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions"}},C=[{value:"Brief",id:"brief",children:[],level:2},{value:"Designated initializers",id:"designated-initializers",children:[],level:2}],u={toc:C};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"Structs allow you to group data together. When there are no invariants to enforce, using a struct and having all your data public is better that using a class (as explained in ",(0,a.kt)(l.Z,{slug:"design-cohesive-classes",mdxType:"LessonLink"}),")."),(0,a.kt)("p",null,"Often, if you notice that you are passing the same group of parameters to a few functions, it is a great oportunity to create a struct: it will simplify parameter passing, make it easier to add a parameter to the group later, and it adds an abstraction to your code that might help you reason about it and that you might reuse later.",(0,a.kt)("br",null),"\nFor example, if many functions take an ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," you might refactor this into a ",(0,a.kt)("inlineCode",{parentName:"p"},"Point")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Point2D")," struct.",(0,a.kt)("br",null),"\nOn the other hand if you need a point that is restricted to, say, a disk on the plane, then you will need a class to enforce that invariant."),(0,a.kt)("p",null,"Moreover, if this group of parameters is supposed to have a default value, then you can encode it in the struct instead of duplicating it all over the place in all the functions that take those parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Bad, we are duplicating our default values\nclass Texture {\n    // . . .\n    void resize     (ImageSize size,                   InternalFormat internal_format = InternalFormat::RGBA, Channels channels = Channels::RGBA, TexelDataType texel_data_type = TexelDataType::UnsignedByte);\n    void upload_data(ImageSize size, const void* data, InternalFormat internal_format = InternalFormat::RGBA, Channels channels = Channels::RGBA, TexelDataType texel_data_type = TexelDataType::UnsignedByte);\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Good, we have removed some duplications and introduced a useful abstraction\nstruct TextureLayout {\n    InternalFormat internal_format = InternalFormat::RGBA;\n    Channels       channels        = Channels::RGBA;\n    TexelDataType  texel_data_type = TexelDataType::UnsignedByte;\n};\n\nclass Texture {\n    // . . .\n    void resize(ImageSize size, TextureLayout layout = {});\n    void upload_data(ImageSize size, const void* data, TextureLayout layout = {});\n};\n")),(0,a.kt)("h2",{id:"designated-initializers"},"Designated initializers"),(0,a.kt)("p",null,"In C++20 structs have become even more amazing thanks to ",(0,a.kt)("em",{parentName:"p"},"designated initializers"),":",(0,a.kt)("br",null),"\nGiven this struct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct WindowConfig {\n    const char* title;                                                            // The title that will be displayed in the title bar of the window\n    int         initial_width               = 1280;                               // Initial width of the window\n    int         initial_height              = 720;                                // Initial height of the window\n    bool        cap_framerate_on_startup_if = true;                               // Whether the framerate should be capped or not (this can later be changed at runtime through window.cap_framerate_if())\n    bool        maximize_on_startup_if      = is_building_as(BuildMode::Release); // Whether the window will be maximized when the application starts.\n    bool        hide_on_startup_if          = false;                              // Whether the window will be hidden when the application starts.\n};\n")),(0,a.kt)("p",null,"you can now initialize it by naming its members:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const auto window_config = WindowConfig{\n    .title                  = "Hello C++",\n    .initial_width          = 500,\n    .initial_height         = 500,\n    .maximize_on_startup_if = true,\n};\n')),(0,a.kt)("p",null,"Which is much more readable than"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const auto window_config = WindowConfig{"Hello C++", 500, 500, true, true, false};\n')),(0,a.kt)("p",null,"And note that you can skip some members (like ",(0,a.kt)("inlineCode",{parentName:"p"},"cap_framerate_on_startup_if")," in this example). They will be initialized with their default value."))}g.isMDXComponent=!0},4820:function(e){e.exports=JSON.parse('[{"title":"Install a compiler","benefit":5,"easiness":5,"level":1,"bias":1,"tags":["Tools","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler","slug":"install-a-compiler","priority":1,"points":0.5},{"title":"Use an IDE","benefit":5,"easiness":5,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/ide","slug":"ide","priority":1,"points":0.5},{"title":"Use Git","benefit":5,"easiness":4,"level":1,"bias":1,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git","slug":"git","priority":0.9875,"points":1},{"title":"Use a debugger","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debugger","slug":"debugger","priority":0.9875,"points":1},{"title":"Use a formatting tool","benefit":5,"easiness":4,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/formatting-tool","slug":"formatting-tool","priority":0.9875,"points":1},{"title":"Use static analysers","benefit":5,"easiness":3,"level":1,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-analysers","slug":"static-analysers","priority":0.975,"points":1.5},{"title":"Naming","benefit":5,"easiness":1,"level":1,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/naming","slug":"naming","priority":0.95,"points":2.5},{"title":"Stack vs Heap","benefit":4,"easiness":3,"level":1,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stack-vs-heap","slug":"stack-vs-heap","priority":0.9375,"points":1.5},{"title":"Consistency in style","benefit":2,"easiness":5,"level":1,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/consistency-in-style","slug":"consistency-in-style","priority":0.8875000000000001,"points":0.5},{"title":"Make it work, then make it good","benefit":5,"easiness":4,"level":2,"bias":1,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/make-it-work-then-make-it-good","slug":"make-it-work-then-make-it-good","priority":0.7875000000000001,"points":0.35714285714285715},{"title":"Prefer free functions","benefit":5,"easiness":3,"level":2,"bias":5,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/prefer-free-functions","slug":"prefer-free-functions","priority":0.775,"points":0.5357142857142857},{"title":"Design cohesive classes","benefit":5,"easiness":3,"level":2,"bias":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/design-cohesive-classes","slug":"design-cohesive-classes","priority":0.775,"points":0.5357142857142857},{"title":"Use structs to group data","benefit":5,"easiness":3,"level":2,"bias":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-structs-to-group-data","slug":"use-structs-to-group-data","priority":0.775,"points":0.5357142857142857},{"title":"Write small functions","benefit":5,"easiness":3,"level":2,"bias":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-small-functions","slug":"write-small-functions","priority":0.775,"points":0.5357142857142857},{"title":"DRY: Don\'t repeat yourself","benefit":5,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dry-dont-repeat-yourself","slug":"dry-dont-repeat-yourself","priority":0.7625000000000001,"points":0.7142857142857143},{"title":"Enums","benefit":4,"easiness":5,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/enums","slug":"enums","priority":0.7625000000000001,"points":0.17857142857142858},{"title":"Split problems in small pieces","benefit":5,"easiness":1,"level":2,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/split-problems-in-small-pieces","slug":"split-problems-in-small-pieces","priority":0.75,"points":0.8928571428571429},{"title":"Composition over Inheritance","benefit":4,"easiness":2,"level":2,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/composition-over-inheritance","slug":"composition-over-inheritance","priority":0.7250000000000001,"points":0.7142857142857143},{"title":"std::vector","benefit":5,"easiness":5,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/vector","slug":"vector","priority":0.6,"points":0.04395604395604396},{"title":"Documentation","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/documentation","slug":"documentation","priority":0.575,"points":0.13186813186813187},{"title":"Minimize dependencies","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/minimize-dependencies","slug":"minimize-dependencies","priority":0.575,"points":0.13186813186813187},{"title":"Use libraries","benefit":5,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/use-libraries","slug":"use-libraries","priority":0.575,"points":0.13186813186813187},{"title":"assert","benefit":4,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/assert","slug":"assert","priority":0.5625,"points":0.04395604395604396},{"title":"auto","benefit":4,"easiness":5,"level":3,"tags":["Beautiful Code","Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/auto","slug":"auto","priority":0.5625,"points":0.04395604395604396},{"title":"Testing","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/testing","slug":"testing","priority":0.5625,"points":0.17582417582417584},{"title":"Type design","benefit":5,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-design","slug":"type-design","priority":0.5625,"points":0.17582417582417584},{"title":"Lambda functions","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/lambda","slug":"lambda","priority":0.55,"points":0.08791208791208792},{"title":"Master your IDE","benefit":4,"easiness":4,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/master-your-ide","slug":"master-your-ide","priority":0.55,"points":0.08791208791208792},{"title":"std::optional","benefit":4,"easiness":4,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/optional","slug":"optional","priority":0.55,"points":0.08791208791208792},{"title":"Single Source of Truth","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/single-source-of-truth","slug":"single-source-of-truth","priority":0.55,"points":0.08791208791208792},{"title":"Strong Typing","benefit":4,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/strong-typing","slug":"strong-typing","priority":0.55,"points":0.08791208791208792},{"title":"Code reviews","benefit":4,"easiness":3,"level":3,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/code-reviews","slug":"code-reviews","priority":0.5375,"points":0.13186813186813187},{"title":"const","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/const","slug":"const","priority":0.5375,"points":0.13186813186813187},{"title":"Don\'t overfocus on performance","benefit":4,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dont-overfocus-on-performance","slug":"dont-overfocus-on-performance","priority":0.5375,"points":0.13186813186813187},{"title":"Git submodules","benefit":4,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-submodules","slug":"git-submodules","priority":0.5375,"points":0.13186813186813187},{"title":"STL algorithms","benefit":4,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/stl-algorithms","slug":"stl-algorithms","priority":0.5375,"points":0.13186813186813187},{"title":"Debug vs Release","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/debug-vs-release","slug":"debug-vs-release","priority":0.525,"points":0.04395604395604396},{"title":"Immediately Invoked Function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/immediately-invoked-function","slug":"immediately-invoked-function","priority":0.525,"points":0.04395604395604396},{"title":"Markdown","benefit":3,"easiness":5,"level":3,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/markdown","slug":"markdown","priority":0.525,"points":0.04395604395604396},{"title":"Range-based for loop","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/range-based-for-loop","slug":"range-based-for-loop","priority":0.525,"points":0.04395604395604396},{"title":"Smart Pointers","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/smart-pointers","slug":"smart-pointers","priority":0.525,"points":0.04395604395604396},{"title":"std::function","benefit":3,"easiness":5,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/std-function","slug":"std-function","priority":0.525,"points":0.04395604395604396},{"title":"Dependency Injection","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dependency-injection","slug":"dependency-injection","priority":0.5125,"points":0.08791208791208792},{"title":"Error Handling","benefit":3,"easiness":4,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/error-handling","slug":"error-handling","priority":0.5125,"points":0.08791208791208792},{"title":"Git Pull Requests","benefit":3,"easiness":4,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request","slug":"git-pull-request","priority":0.5125,"points":0.08791208791208792},{"title":"Advanced Git features","benefit":3,"easiness":3,"level":3,"tags":["Tools","Git"],"link":"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features","slug":"advanced-git-features","priority":0.5,"points":0.13186813186813187},{"title":"CMake","benefit":3,"easiness":3,"level":3,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cmake","slug":"cmake","priority":0.5,"points":0.13186813186813187},{"title":"Functional programming","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/functional-programming","slug":"functional-programming","priority":0.5,"points":0.13186813186813187},{"title":"Move semantics","benefit":3,"easiness":3,"level":3,"tags":["Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/move-semantics","slug":"move-semantics","priority":0.5,"points":0.13186813186813187},{"title":"The Rule of 5","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/rule-of-5","slug":"rule-of-5","priority":0.5,"points":0.13186813186813187},{"title":"State and Strategy","benefit":3,"easiness":3,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/state-and-strategy","slug":"state-and-strategy","priority":0.5,"points":0.13186813186813187},{"title":"std::variant","benefit":3,"easiness":3,"level":3,"tags":["Clean Code","Performant Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/variant","slug":"variant","priority":0.5,"points":0.13186813186813187},{"title":"Cache and Branches","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cache-and-branches","slug":"cache-and-branches","priority":0.4875,"points":0.17582417582417584},{"title":"Multithreading","benefit":3,"easiness":2,"level":3,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/multithreading","slug":"multithreading","priority":0.4875,"points":0.17582417582417584},{"title":"Polymorphism","benefit":3,"easiness":2,"level":3,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/polymorphism","slug":"polymorphism","priority":0.4875,"points":0.17582417582417584},{"title":"Space out your code","benefit":2,"easiness":5,"level":3,"tags":["Beautiful Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/space-out-your-code","slug":"space-out-your-code","priority":0.4875,"points":0.04395604395604396},{"title":"Watch conferences","benefit":5,"easiness":3,"level":4,"tags":["Workflow"],"link":"/Learn--Clean-Code-With-Cpp/lessons/watch-conferences","slug":"watch-conferences","priority":0.3749999999999999,"points":0.0625},{"title":"Write libraries","benefit":5,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/write-libraries","slug":"write-libraries","priority":0.3749999999999999,"points":0.0625},{"title":"Dear ImGui","benefit":5,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/dear-imgui","slug":"dear-imgui","priority":0.36249999999999993,"points":0.08333333333333333},{"title":"Designated Initializers","benefit":4,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/designated_initializers","slug":"designated_initializers","priority":0.36249999999999993,"points":0.020833333333333332},{"title":"std::string and std::string_view","benefit":4,"easiness":4,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/string-and-string-view","slug":"string-and-string-view","priority":0.3499999999999999,"points":0.041666666666666664},{"title":"Static site generators","benefit":4,"easiness":3,"level":4,"tags":["Tools"],"link":"/Learn--Clean-Code-With-Cpp/lessons/static-site-generators","slug":"static-site-generators","priority":0.3374999999999999,"points":0.0625},{"title":"Deleted functions","benefit":3,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/deleted-functions","slug":"deleted-functions","priority":0.32499999999999996,"points":0.020833333333333332},{"title":"Type erasure","benefit":4,"easiness":2,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/type-erasure","slug":"type-erasure","priority":0.32499999999999996,"points":0.08333333333333333},{"title":"wasm and electron","benefit":4,"easiness":2,"level":4,"tags":["Libraries & Frameworks"],"link":"/Learn--Clean-Code-With-Cpp/lessons/wasm-and-electron","slug":"wasm-and-electron","priority":0.32499999999999996,"points":0.08333333333333333},{"title":"Scope guard","benefit":3,"easiness":4,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/scope-guard","slug":"scope-guard","priority":0.31249999999999994,"points":0.041666666666666664},{"title":"C++ casts","benefit":3,"easiness":3,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/cpp-casts","slug":"cpp-casts","priority":0.29999999999999993,"points":0.0625},{"title":"Measuring performance","benefit":3,"easiness":3,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/measuring-performance","slug":"measuring-performance","priority":0.29999999999999993,"points":0.0625},{"title":"Precompiled Header","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/precompiled-header","slug":"precompiled-header","priority":0.29999999999999993,"points":0.0625},{"title":"<random>","benefit":3,"easiness":3,"level":4,"tags":["C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/random","slug":"random","priority":0.29999999999999993,"points":0.0625},{"title":"Linked lists","benefit":2,"easiness":5,"level":4,"tags":["Performant Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/linked-list","slug":"linked-list","priority":0.2874999999999999,"points":0.020833333333333332},{"title":"Avoid dead code","benefit":2,"easiness":3,"level":4,"tags":["Clean Code"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-dead-code","slug":"avoid-dead-code","priority":0.26249999999999996,"points":0.0625},{"title":"friend","benefit":1,"easiness":5,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/friend","slug":"friend","priority":0.24999999999999994,"points":0.020833333333333332},{"title":"Pointers vs References","benefit":2,"easiness":2,"level":4,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/pointers-vs-references","slug":"pointers-vs-references","priority":0.24999999999999994,"points":0.08333333333333333},{"title":"Avoid nested namespaces","benefit":1,"easiness":5,"level":5,"tags":["Clean Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/avoid-nested-namespaces","slug":"avoid-nested-namespaces","priority":0.04999999999999999,"points":0},{"title":"#if defined()","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/if-defined","slug":"if-defined","priority":0.04999999999999999,"points":0},{"title":"Trailing return type","benefit":1,"easiness":5,"level":5,"tags":["Beautiful Code","C++"],"link":"/Learn--Clean-Code-With-Cpp/lessons/trailing-return-type","slug":"trailing-return-type","priority":0.04999999999999999,"points":0}]')}}]);