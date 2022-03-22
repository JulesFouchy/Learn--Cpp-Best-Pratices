"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[1199],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],l={title:"Git Pull Requests",benefit:3,easiness:4,level:3,tags:["Tools","Git"]},s=void 0,u={unversionedId:"lessons/git-pull-request",id:"lessons/git-pull-request",title:"Git Pull Requests",description:"Brief",source:"@site/../../content/lessons/git-pull-request.md",sourceDirName:"lessons",slug:"/lessons/git-pull-request",permalink:"/Learn--Clean-Code-With-Cpp/lessons/git-pull-request",tags:[{label:"Tools",permalink:"/Learn--Clean-Code-With-Cpp/tags/tools"},{label:"Git",permalink:"/Learn--Clean-Code-With-Cpp/tags/git"}],version:"current",frontMatter:{title:"Git Pull Requests",benefit:3,easiness:4,level:3,tags:["Tools","Git"]},sidebar:"lessons",previous:{title:"Error Handling",permalink:"/Learn--Clean-Code-With-Cpp/lessons/error-handling"},next:{title:"Advanced Git features",permalink:"/Learn--Clean-Code-With-Cpp/lessons/advanced-git-features"}},c=[{value:"Brief",id:"brief",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Fork",id:"fork",children:[],level:3},{value:"Make a dedicated branch",id:"make-a-dedicated-branch",children:[],level:3},{value:"Write a nice message",id:"write-a-nice-message",children:[],level:3}],level:2},{value:"Also",id:"also",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"brief"},"Brief"),(0,a.kt)("p",null,"Sometimes you want to contribute to an open-source project but you don't have the right to commit directly on that repo. That's normal and you can still contribute via ",(0,a.kt)("em",{parentName:"p"},"pull requests")," (abbreviated as ",(0,a.kt)("em",{parentName:"p"},"PR"),") (also known as ",(0,a.kt)("em",{parentName:"p"},"merge requests")," on GitLab)."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"fork"},"Fork"),(0,a.kt)("p",null,"You will have to ",(0,a.kt)("em",{parentName:"p"},"fork")," the repository: this will make a copy of this repository under your profile, so that you will be able to commit on that copied repo. Once you have done your commits, you can ask to merge them into the original repo. It will be up to the maintainers of the repo to decide if they want to accept your pull request. Sometimes they will ask you to tweak or improve a few things before accepting your commits."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9215).Z,width:"1878",height:"215"})),(0,a.kt)("h3",{id:"make-a-dedicated-branch"},"Make a dedicated branch"),(0,a.kt)("p",null,"Every commit you make, even after the pull request is created, will still be included in the PR. So you should make a branch dedicated to that pull request and only commit on that branch the things you want to be included in the PR. Then you can keep working ",(0,a.kt)("strong",{parentName:"p"},"on another branch")," if you want to modify that repo further, and it won't disturb the PR."),(0,a.kt)("h3",{id:"write-a-nice-message"},"Write a nice message"),(0,a.kt)("p",null,"When you create your pull request you will be given the opportunity to explain what you changed, and why you changed it. A great explanation will increase your chances of seeing your PR reviewed, and maybe merged."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7838).Z,width:"1140",height:"660"})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't be afraid to point out the areas where you are not sure of your changes. The maintainers will likely be able to help you and indicate how you can improve your pull request before they merge it.",(0,a.kt)("br",null),"\nTo update your pull request after their feedback, simply make new commits on the branch that you submitted for PR and it will update automatically."))),(0,a.kt)("h2",{id:"also"},"Also"),(0,a.kt)("p",null,"Sometimes you will also make pull requests inside the same repo, for example when you want to merge the branch you have been working on into ",(0,a.kt)("em",{parentName:"p"},"main"),": instead of merging directly you will create a pull request and ask for the review of some other developers before merging anything."))}d.isMDXComponent=!0},9215:function(e,t,n){t.Z=n.p+"assets/images/fork-e71838377fa3e8c47947676a74b968fb.png"},7838:function(e,t,n){t.Z=n.p+"assets/images/pull-request-5ffe9a15b9764199250bde4d0f3e7344.png"}}]);