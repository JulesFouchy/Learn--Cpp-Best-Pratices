"use strict";(self.webpackChunklearn_cpp_and_dev_practices=self.webpackChunklearn_cpp_and_dev_practices||[]).push([[7747],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4837:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=["components"],l={title:"CMake",benefit:3,easiness:3,order:2,tags:["C++"]},s=void 0,p={unversionedId:"lessons/cmake",id:"lessons/cmake",isDocsHomePage:!1,title:"CMake",description:"Brief",source:"@site/docs/lessons/cmake.md",sourceDirName:"lessons",slug:"/lessons/cmake",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/cmake",tags:[{label:"C++",permalink:"/Learn--Cpp-And-Dev-Practices/docs/tags/c"}],version:"current",frontMatter:{title:"CMake",benefit:3,easiness:3,order:2,tags:["C++"]},sidebar:"lessons",previous:{title:"Smart Pointers",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/smart-pointers"},next:{title:"C++ casts",permalink:"/Learn--Cpp-And-Dev-Practices/docs/lessons/cpp-casts"}},d=[{value:"Brief",id:"brief",children:[]},{value:"CMake tips",id:"cmake-tips",children:[{value:"Enabling warnings",id:"enabling-warnings",children:[]},{value:"Setting your C++ version",id:"setting-your-c-version",children:[]},{value:"Adding <code>#define</code> (compile definitions)",id:"adding-define-compile-definitions",children:[]},{value:"Setting the output path",id:"setting-the-output-path",children:[]},{value:"Copying files and folders",id:"copying-files-and-folders",children:[]},{value:"GLOB",id:"glob",children:[]},{value:"Precompiled header",id:"precompiled-header",children:[]}]},{value:"CMake for library authors",id:"cmake-for-library-authors",children:[{value:"add_library()",id:"add_library",children:[]},{value:"Use the target_xxx() commands",id:"use-the-target_xxx-commands",children:[]},{value:"PRIVATE | PUBLIC | INTERFACE",id:"private--public--interface",children:[]},{value:"Add an alias containing &quot;::&quot;",id:"add-an-alias-containing-",children:[]}]},{value:"Going further",id:"going-further",children:[]}],m={toc:d};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"brief"},"Brief"),(0,r.kt)("p",null,"To understand modern CMake you need to understand ",(0,r.kt)("em",{parentName:"p"},"targets"),". Basically a target is an executable or a library. You will define a target for your executable and describe its source files, and then you will import the targets for each library you use, and will add those targets as a dependency of your executable. Here is an example taken from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p6-examples/blob/main/CMakeLists.txt"},"p6-examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'cmake_minimum_required(VERSION 3.8)\nproject(p6-hello-world)\n\nadd_executable(${PROJECT_NAME} # Creates a target called ${PROJECT_NAME}, a.k.a. p6-hello-world\n    src/main.cpp               # And adds its source files: main.cpp and something.cpp\n    src/something.cpp          # Note that you don\'t need to list the header files here (.h / .hpp)\n)\n\nadd_subdirectory(p6)                                  # Includes the p6 library ; this assumes that you have a folder called p6 at the same level as this CMakeLists.txt file, and that the p6 folder contains a CMakeLists.txt file\ntarget_link_libraries(${PROJECT_NAME} PRIVATE p6::p6) # Adds the target "p6::p6" as a dependency of our target ${PROJECT_NAME}. Unfortunately the command is called target_link_libraries() even though it can be used for other things than just linking ; don\'t get confused! A better name would have been add_dependency()\n                                                      # The name of the target "p6::p6" is up to the library authors. Check out their documentation to know how they called it!\n                                                      # The "::" in the name of the library\'s target is not mandatory, but library authors often add it because target_link_libraries() can do many different things, and if you make a typo in the name of the target it will ignore it instead of reporting an error. It is only if you have a "::" in the name that target_link_libraries() will know that it can\'t be anything but a target and will raise an error if the name doesn\'t actually correspond to a target.\n')),(0,r.kt)("p",null,"And that is all you need for a basic ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt"),"!"),(0,r.kt)("p",null,"If all your libraries define a target properly then you don't need anything more to build your project. (If they don't, unfortunately you will have to ",(0,r.kt)("a",{parentName:"p",href:"#cmake-for-library-authors"},"do their job for them"),")."),(0,r.kt)("h2",{id:"cmake-tips"},"CMake tips"),(0,r.kt)("p",null,"Now we will see a few useful things that you can do with CMake:"),(0,r.kt)("h3",{id:"enabling-warnings"},"Enabling warnings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"if (MSVC) # Visual Studio for Windows\n    target_compile_options(${PROJECT_NAME} PRIVATE /WX /W3)\nelse() # gcc and clang\n    target_compile_options(${PROJECT_NAME} PRIVATE -Werror -Wall -Wextra -Wpedantic -pedantic-errors)\nendif()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/WX")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Werror")," make your compiler treat warnings as errors, and the other flags enable a lot of useful warnings."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Warnings are your friends"),". They exist to protect you from bad practices and bugs. Listen to them!"),(0,r.kt)("p",{parentName:"div"},"A C++ code that compiles is far from guaranteed to have no bugs! (mostly because of backward compatibility with C). This is why warnings are important!"))),(0,r.kt)("h3",{id:"setting-your-c-version"},"Setting your C++ version"),(0,r.kt)("p",null,"You can ask for a specific version of C++:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)\n")),(0,r.kt)("p",null,"(If you don't you will probably get C++11 by default)."),(0,r.kt)("p",null,"You can even ask for finer details with parameters like ",(0,r.kt)("inlineCode",{parentName:"p"},"cxx_variadic_templates"),". This can be useful to increase the portability of your code a little bit (for example if you need C++11 plus only one little feature from C++14). Don't abuse it though because it can be very tedious to maintain!"),(0,r.kt)("h3",{id:"adding-define-compile-definitions"},"Adding ",(0,r.kt)("inlineCode",{parentName:"h3"},"#define")," (compile definitions)"),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"#define SOMETHING")," from CMake. This can be useful to propagate information from CMake into your project. For example you can do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'title="cmake"',title:'"cmake"'},"target_compile_definitions(${PROJECT_NAME} PRIVATE\n    USE_THIS_FEATURE\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="C++"',title:'"C++"'},"#if USE_THIS_FEATURE\n    // Do something\n#else \n    // Do something else\n#endif\n")),(0,r.kt)("p",null,"A very good use case is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_compile_definitions(${PROJECT_NAME} PRIVATE\n    $<$<CONFIG:Debug>:DEBUG>\n)\n")),(0,r.kt)("p",null,"which defines ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," if you are building in debug mode. (This uses a ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/46206495/cmake-generator-expressions"},"generator expression"),'. It can be read as: "If the CMake ',(0,r.kt)("em",{parentName:"p"},"CONFIG")," is ",(0,r.kt)("em",{parentName:"p"},"Debug"),", then return ",(0,r.kt)("em",{parentName:"p"},"DEBUG"),', otherwise return nothing"). You can then have debug checks in your code that are only compiled in debug mode and totally removed in release:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void assert_shader_is_bound(GLint id)\n{\n#if DEBUG\n    GLint current_id;\n    glGetIntegerv(GL_CURRENT_PROGRAM, &current_id);\n    assert(current_id == id && "The shader is not bound");\n#endif\n}\n')),(0,r.kt)("p",null,"You can also give a value to your ",(0,r.kt)("inlineCode",{parentName:"p"},"#define")," (by default it gets the value ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake",metastring:'title="cmake"',title:'"cmake"'},'target_compile_definitions(${PROJECT_NAME} PRIVATE\n    WINDOW_NAME=\\"Django ${CMAKE_PROJECT_VERSION}\\"\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="C++"',title:'"C++"'},'glfwCreateWindow(1280, 720, WINDOW_NAME, nullptr, nullptr);\n// Which expands to:\nglfwCreateWindow(1280, 720, "Django 1.0", nullptr, nullptr);\n')),(0,r.kt)("h3",{id:"setting-the-output-path"},"Setting the output path"),(0,r.kt)("p",null,"By default your executable will end up in ",(0,r.kt)("em",{parentName:"p"},"build")," with many other stuff generated by CMake. You can change that with ",(0,r.kt)("inlineCode",{parentName:"p"},"set(EXECUTABLE_OUTPUT_PATH ...)"),". I personnaly like to do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"set(EXECUTABLE_OUTPUT_PATH ${CMAKE_SOURCE_DIR}/bin/${CMAKE_BUILD_TYPE})\n")),(0,r.kt)("p",null,"which gives me"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin/\n\u2502   \u251c\u2500\u2500 Debug\n\u2502   \u2502   \u251c\u2500\u2500 myproject.exe // Built in debug mode\n\u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 Release\n\u2502       \u251c\u2500\u2500 myproject.exe // Built in release mode\n\u2502       \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 build/\n\u2502   \u251c\u2500\u2500 random cmake stuff you don't need to care about\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 ...\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 CMakeLists.txt\n")),(0,r.kt)("h3",{id:"copying-files-and-folders"},"Copying files and folders"),(0,r.kt)("p",null,"Very often in projects you need to have files available alongside your executable ; it can be images, 3D models, shaders: anything that is not built into your binary but instead loaded at runtime."),(0,r.kt)("p",null,"You will have those files somewhere in your sources, but when you produce an executable and send it to your friends you must not forget to send the other resource files as well! CMake can help you by automating the process of copying these files to the output folder where your executable is created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All the files required by CoolLab.exe",src:a(9016).Z})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All the files required by CoolLab.exe")),(0,r.kt)("p",null,"Here is an example of how you can ask CMake to copy your folder.s (taken from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Cool/tree/main/cmake/copy_to_output.cmake"},"Cool"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'# NB: this function requires policy CMP0112 which was set to NEW in CMake 3.19 (https://cmake.org/cmake/help/latest/policy/CMP0112.html#policy:CMP0112)\n# If you are using a version of CMake lower than 3.19 then you need to call `cmake_policy(SET CMP0112 NEW)` just after `cmake_minimum_required(...)` in your main CMakeLists.txt file\n# Otherwise you will get a "Cyclic dependencies" error\n\nfunction(copy_folder FOLDER_NAME)\n    string(SHA1 TARGET_HASH ${FOLDER_NAME})      # Create a unique name for our target. We can\'t use ${FOLDER_NAME} directly because it could contain invalid characters like spaces\n    set(TARGET_NAME CopyToOutput_${TARGET_HASH}) #\n    add_custom_target(${TARGET_NAME}\n        COMMENT "Copying \\"${FOLDER_NAME}\\""\n        COMMAND ${CMAKE_COMMAND} -E copy_directory\n            ${CMAKE_SOURCE_DIR}/${FOLDER_NAME}\n            $<TARGET_FILE_DIR:${PROJECT_NAME}>/${FOLDER_NAME}\n    )\n    add_dependencies(${PROJECT_NAME} ${TARGET_NAME}) # Mark our custom target as a dependency of the main project, so that whenever the main project is launched our custom target is triggered and files are copied\nendfunction()\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake_policy(SET CMP0112 NEW)")," after ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake_minimum_required")," in your ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt"),' because this code doesn\'t work without this policy which fixes a "bug" in CMake.'))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"add_custom_target()"),' adds a "fake" target whose only purpose is to run a command when it is built. In our case that command is ',(0,r.kt)("inlineCode",{parentName:"p"},"${CMAKE_COMMAND} -E copy_directory")," which is a CMake command that copies a directory (you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"copy"),' instead if you want to copy a single file). Finally we tell CMake that our main target depends on that "fake" target with ',(0,r.kt)("inlineCode",{parentName:"p"},"add_dependencies()"),'. This means that whenever our main target is built, the "fake" target will also be built, and therefore the command will be run.'),(0,r.kt)("p",null,"NB: In this example we copy from ",(0,r.kt)("inlineCode",{parentName:"p"},"${CMAKE_SOURCE_DIR}")," (a.k.a. the root directory of our project, where our main ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt")," lives)\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"$<TARGET_FILE_DIR:${PROJECT_NAME}>")," (a.k.a. the folder where our executable will be created)."),(0,r.kt)("h3",{id:"glob"},"GLOB"),(0,r.kt)("p",null,"If you don't want to have to list all your ",(0,r.kt)("em",{parentName:"p"},".cpp")," files manually in your ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt")," you can use "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"file(GLOB_RECURSE MY_SOURCES CONFIGURE_DEPENDS src/*)\n")),(0,r.kt)("p",null,"It will grab the list of all ",(0,r.kt)("em",{parentName:"p"},".cpp")," files in ",(0,r.kt)("em",{parentName:"p"},"src")," ant put then in ",(0,r.kt)("inlineCode",{parentName:"p"},"MY_SOURCES"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GLOB_RECURSE")," means that it will also find files that are in the subdirectories of ",(0,r.kt)("em",{parentName:"p"},"src"),". If you only want to find the files at the first level of ",(0,r.kt)("em",{parentName:"p"},"src")," you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"GLOB")," instead.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURE_DEPENDS")," means that CMake will check before every build to see if files were added or deleted, and if so it will update accordingly. Without it you would need to manually tell CMake to reconfigure each time you add or remove a file."))),(0,r.kt)("p",null,"You can then use that list of files like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"add_executable(${PROJECT_NAME} ${MY_SOURCES})\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every CMake expert will tell you that you should never use ",(0,r.kt)("inlineCode",{parentName:"p"},"file(GLOB)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"file(GLOB_RECURSE)"),". The reason is always the same and can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/command/file.html#filesystem"},"official CMake documentation"),":"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"We do not recommend using GLOB to collect a list of source files from your source tree. If no CMakeLists.txt file changes when a source is added or removed then the generated build system cannot know when to ask CMake to regenerate. The ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURE_DEPENDS")," flag may not work reliably on all generators, or if a new generator is added in the future that cannot support it, projects using it will be stuck. Even if ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURE_DEPENDS")," works reliably, there is still a cost to perform the check on every rebuild.")),(0,r.kt)("p",{parentName:"div"},"I disagree with it though, since to me maintaining a list of my ",(0,r.kt)("em",{parentName:"p"},".cpp")," files in my ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt")," is more of a hassle than having to refresh CMake manually when I add or remove a file. (And ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURE_DEPENDS")," makes it even less of a hassle)."),(0,r.kt)("p",{parentName:"div"},"Now that you have the arguments from both sides, pick your poison. "))),(0,r.kt)("h3",{id:"precompiled-header"},"Precompiled header"),(0,r.kt)("p",null,"A precompiled header is pretty useful (see ",(0,r.kt)("a",{parentName:"p",href:"./precompiled-header"},"Precompiled Header"),").\nYou can create one with CMake using ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/git-stage/command/target_precompile_headers.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_precompile_headers")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_precompile_headers(Cool PUBLIC\n    <vector>\n    <string>\n    <memory>\n    <functional>\n    <imgui/imgui.h>\n    <imgui/misc/cpp/imgui_stdlib.h>\n    <Cool/Log/Log.h>\n)\n")),(0,r.kt)("h2",{id:"cmake-for-library-authors"},"CMake for library authors"),(0,r.kt)("p",null,"As a library, your ",(0,r.kt)("em",{parentName:"p"},"CMakeLists.txt")," has one goal: define a target containing all the required information for people to link to your library.\nUsers should only have to do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"add_subdirectory(libname)\ntarget_link_libraries(${PROJECT_NAME} PRIVATE libname)\n")),(0,r.kt)("p",null,"This is possible because a target can store a lot of things: the sources, the include directories, the compile definitions, ",(0,r.kt)("em",{parentName:"p"},"etc.")," (this information is known as ",(0,r.kt)("em",{parentName:"p"},"requirements")," in the literature). When users call ",(0,r.kt)("inlineCode",{parentName:"p"},"target_link_libraries(${PROJECT_NAME} PRIVATE libname)")," all this information is propagated to ",(0,r.kt)("inlineCode",{parentName:"p"},"${PROJECT_NAME}")," by CMake so that our main target will get the proper includes and so on."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you want to have a look at a real-world example of modern cmake, check out ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/julesfouchy/p6/blob/main/CMakeLists.txt"},"p6")," (small library) or ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/CoolLibs/Cool/blob/main/CMakeLists.txt"},"Cool")," (big framework).")),(0,r.kt)("h3",{id:"add_library"},"add_library()"),(0,r.kt)("p",null,"You create your library's target with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"add_library(libname)\n")),(0,r.kt)("p",null,"(it is the equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"add_executable(exename)"),")"),(0,r.kt)("h3",{id:"use-the-target_xxx-commands"},"Use the target_xxx() commands"),(0,r.kt)("p",null,"To set requirements of your library, always use a ",(0,r.kt)("inlineCode",{parentName:"p"},"target_xxx")," function. They all have alternatives without the ",(0,r.kt)("inlineCode",{parentName:"p"},"target_")," prefix, but those functions affect the global state instead of just your target, which is obviously bad! For example if your project uses ",(0,r.kt)("em",{parentName:"p"},"libA")," and ",(0,r.kt)("em",{parentName:"p"},"libB"),", you don't want ",(0,r.kt)("em",{parentName:"p"},"libB")," to see the include directories and settings of ",(0,r.kt)("em",{parentName:"p"},"libA"),"! These libraries should be completely independent!"),(0,r.kt)("p",null,"They are all used like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_xxx(target_name PRIVATE additional_parameters ...)\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERFACE")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE")," (see ",(0,r.kt)("a",{parentName:"p",href:"#private--public--interface"},"PRIVATE | PUBLIC | INTERFACE"),")."),(0,r.kt)("p",null,"Here are the most important functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_include_directories.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_include_directories"))," Specifies the location of the include files. For a library I would suggest to put them in a ",(0,r.kt)("em",{parentName:"li"},"include/libname")," folder and to do ",(0,r.kt)("inlineCode",{parentName:"li"},"target_include_directories(libname PUBLIC include)")," so that the include files are accessed with ",(0,r.kt)("inlineCode",{parentName:"li"},"#include <libname/some_file.hpp>"),". It can also be nice to add a ",(0,r.kt)("inlineCode",{parentName:"li"},"libname.hpp")," file that includes all the other header files. It allows users to include the whole library at once with ",(0,r.kt)("inlineCode",{parentName:"li"},"#include <libname/libname.hpp>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_sources.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_sources"))," Adds source files to the target (appends to the list that was already set with ",(0,r.kt)("inlineCode",{parentName:"li"},"add_library(libname some_file.cpp)"),"). It can be useful for example if you only need some files in some situations:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"add_library(Cool src/Cool.cpp)\nif (USE_OPENGL)\n    target_sources(Cool PRIVATE src/OpenGL/opengl.cpp)\nelseif (USE_VULKAN)\n    target_sources(Cool PRIVATE src/Vulkan/vulkan.cpp)\nendif()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_link_libraries.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_link_libraries"))," To add another target as a dependency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_compile_options.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_compile_options"))," We have seen it in ",(0,r.kt)("a",{parentName:"li",href:"#enabling-warnings"},"Enabling warnings"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_compile_features.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_compile_features"))," We have seen it in ",(0,r.kt)("a",{parentName:"li",href:"#setting-your-c-version"},"Setting your C++ version"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/command/target_compile_definitions.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_compile_definitions"))," We have seen it in ",(0,r.kt)("a",{parentName:"li",href:"#adding-define-compile-definitions"},"Adding ",(0,r.kt)("inlineCode",{parentName:"a"},"#define")," (compile definitions)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/git-stage/command/target_precompile_headers.html"},(0,r.kt)("inlineCode",{parentName:"a"},"target_precompile_headers"))," We have seen it in ",(0,r.kt)("a",{parentName:"li",href:"#precompiled-header"},"Precompiled header"),".")),(0,r.kt)("h3",{id:"private--public--interface"},"PRIVATE | PUBLIC | INTERFACE"),(0,r.kt)("p",null,"This is the visibility of the requirements set with ",(0,r.kt)("inlineCode",{parentName:"p"},"target_xxx()"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE"),": Only this target will have access to these requirements. When other targets link to this one with ",(0,r.kt)("inlineCode",{parentName:"p"},"target_link_libraries()")," they will not get the private requirements. For example your warning level should always be private because you do not want to impose it on your dependents:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_compile_options(libname PRIVATE -Werror -Wall)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC"),": This target and all of its dependents will be able to access the public requirements. For example if some include directories are used both internaly and by users to access the library, then they should be public:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_include_directories(libname PUBLIC include)\n")),(0,r.kt)("p",{parentName:"li"}," Also if you use some other library in your headers, then it will be visible by your users when they include your header, so you need to provide your users with the library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_link_libraries(Cool PUBLIC glad)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"INTERFACE"),": This target will ",(0,r.kt)("em",{parentName:"p"},"not")," have access to these requirements but its dependents will. It is a bit peculiar but can be used for example in a header-only library: the library itself does not need to see the include directory (since there is no source files at all to build), but the dependents do:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_include_directories(my-header-only-lib INTERFACE include)\n")),(0,r.kt)("p",{parentName:"li"},"This can also be used if the user-facing headers are different from the private ones (e.g. if you have many headers but only want users to see a ",(0,r.kt)("inlineCode",{parentName:"p"},"libname.hpp")," header that includes all the other ones):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"target_include_directories(libname INTERFACE include) # The include folder is only used by users\ntarget_include_directories(libname PRIVATE private-headers) # All the headers that we use internally are in private-headers\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Try to keep things private as much as possible! Don't pollute others for no reason."))),(0,r.kt)("h3",{id:"add-an-alias-containing-"},'Add an alias containing "::"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"add_library(p6)\nadd_library(p6::p6 ALIAS p6)\n")),(0,r.kt)("p",null,"People care about having a name with ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"target_link_libraries()")," can do many different things and if you make a typo in the name of the target it will ignore it instead of reporting an error. It is only if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"::")," in the name that ",(0,r.kt)("inlineCode",{parentName:"p"},"target_link_libraries()")," will know that it can't be anything but a target and will raise an error if the name doesn't actually correspond to a target."),(0,r.kt)("p",null,"As far as the alias name goes, people have different conventions like ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::p6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"p6::core")," ",(0,r.kt)("em",{parentName:"p"},"etc.")," Pick one that you like."),(0,r.kt)("h2",{id:"going-further"},"Going further"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Going further")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/eC9-iRN2b04"},"Mathieu Ropert, ",(0,r.kt)("em",{parentName:"a"},"Using Modern CMake Patterns to Enforce a Good Modular Design"))," (1h)"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://cliutils.gitlab.io/modern-cmake/"},"Henry Schreiner, ",(0,r.kt)("em",{parentName:"a"},"Modern CMake"))," (short online book)"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/mn1ZnO3MtVk"},"Stephen Kelly, ",(0,r.kt)("em",{parentName:"a"},"Embracing Modern CMake"))," (1h)"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/YbgH7yat-Jo"},"Jason Turner, ",(0,r.kt)("em",{parentName:"a"},"C++ Weekly - Ep 208 - The Ultimate CMake / C++ Quick Start"))," (30min)"))))}c.isMDXComponent=!0},9016:function(e,t,a){t.Z=a.p+"assets/images/cmake-21825b581e75c31942e4ad8b39aa6a94.png"}}]);