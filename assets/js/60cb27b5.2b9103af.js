"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[7973],{8720:function(e,t,l){l.d(t,{Z:function(){return a}});var n=l(7294);function a(e){var t=e.id,l="https://marketplace.visualstudio.com/items?itemName="+t;return n.createElement("a",{href:l,target:"_blank"},t)}},4705:function(e,t,l){l.r(t),l.d(t,{contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return A}});var n=l(7462),a=l(3366),o=l(7294),i=l(4137),r=l(1048),s=l(9623),u=l(6010),c="tabItem_LplD";function d(e){var t,l,a,i=e.lazy,r=e.block,d=e.defaultValue,h=e.values,m=e.groupId,p=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(l=f.find((function(e){return e.props.default})))?void 0:l.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),A=y.tabGroupChoices,g=y.setTabGroupChoices,C=(0,o.useState)(k),x=C[0],T=C[1],N=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var W=A[m];null!=W&&W!==x&&v.some((function(e){return e.value===W}))&&T(W)}var w=function(e){var t=e.currentTarget,l=N.indexOf(t),n=v[l].value;n!==x&&(P(t),T(n),null!=m&&g(m,n))},Z=function(e){var t,l=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;l=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;l=N[a]||N[N.length-1]}null==(t=l)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},p)},v.map((function(e){var t=e.value,l=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return N.push(e)},onKeyDown:Z,onFocus:w,onClick:w},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":x===t})}),null!=l?l:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,r.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}var m=function(e){var t=e.children,l=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:l,className:n},t)},p=l(2380),f=l(8720),v=["components"],b={title:"Install a compiler",benefit:5,easiness:5,level:1,bias:1,tags:["Tools","C++"]},k=void 0,y={unversionedId:"lessons/install-a-compiler",id:"lessons/install-a-compiler",title:"Install a compiler",description:"Brief",source:"@site/../../content/lessons/install-a-compiler.md",sourceDirName:"lessons",slug:"/lessons/install-a-compiler",permalink:"/Learn--Clean-Code-With-Cpp/lessons/install-a-compiler",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"},{label:"C++",permalink:"/Learn--Clean-Code-With-Cpp/tags/c"}],version:"current",frontMatter:{title:"Install a compiler",benefit:5,easiness:5,level:1,bias:1,tags:["Tools","C++"]},sidebar:"lessons",previous:{title:"Introduction",permalink:"/Learn--Clean-Code-With-Cpp/lessons"},next:{title:"Use an IDE",permalink:"/Learn--Clean-Code-With-Cpp/lessons/ide"}},A=[{value:"Brief",id:"brief",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Verification",id:"verification",children:[],level:2}],g={toc:A};function C(e){var t=e.components,o=(0,a.Z)(e,v);return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"brief"},"Brief"),(0,i.kt)("p",null,"A compiler is the program that takes your C++ code and creates an executable out of it. Needless to say that it is quite important to have as a C++ developer."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(h,{mdxType:"Tabs"},(0,i.kt)(m,{value:"windows",label:"Windows",mdxType:"TabItem"},"You will find all the explanations you need ",(0,i.kt)("a",{href:"https://code.visualstudio.com/docs/cpp/config-msvc"},"here")," (",(0,i.kt)("b",null,"NB:")," you only need to follow the ",(0,i.kt)("i",null,"Prerequisites")," section).",(0,i.kt)("br",null),"I will just add that while you install MSVC, after selecting ",(0,i.kt)("b",null,"Desktop development with C++"),", in the ",(0,i.kt)("i",null,"Installation details")," on the right you must also check ",(0,i.kt)("i",null,"C++ Clang tools for Windows")," (We will need it later when we install amazing tools).",(0,i.kt)("br",null),(0,i.kt)("br",null),"Then install CMake: go ",(0,i.kt)("a",{href:"https://cmake.org/download/"},"here")," and download and run the ",(0,i.kt)("i",null,"Windows x64 Installer"),"."),(0,i.kt)(m,{value:"linux",label:"Linux",mdxType:"TabItem"},"I believe all Linux distributions come with a compiler installed. If not, check out ",(0,i.kt)("a",{href:"https://code.visualstudio.com/docs/cpp/config-linux"},"this article")," (",(0,i.kt)("b",null,"NB:")," you only need to follow the ",(0,i.kt)("i",null,"Prerequisites")," section)."),(0,i.kt)(m,{value:"mac",label:"Mac",mdxType:"TabItem"},"You should just have to run this command:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(p.Z,{language:"cpp",mdxType:"CodeBlock"},"xcode-select --install"),"If you need more information, you can check out ",(0,i.kt)("a",{href:"https://code.visualstudio.com/docs/cpp/config-clang-mac"},"this article")," (",(0,i.kt)("b",null,"NB:")," you only need to follow the ",(0,i.kt)("i",null,"Prerequisites")," section).")),(0,i.kt)("h2",{id:"verification"},"Verification"),(0,i.kt)("p",null,"You should now be able to build ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/Simple-Cpp-Setup"},"this sample project"),". If you are using VSCode you just need the ",(0,i.kt)(f.Z,{id:"ms-vscode.cpptools-extension-pack",mdxType:"VSCodeExtension"})," and you should then be able to use the ",(0,i.kt)("em",{parentName:"p"},"launch")," button at the bottom of your VSCode:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:l(9225).Z,width:"846",height:"27"})))}C.isMDXComponent=!0},9225:function(e,t){t.Z="data:image/png;base64,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"}}]);