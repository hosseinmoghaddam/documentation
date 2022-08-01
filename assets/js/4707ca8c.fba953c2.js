"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1676],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Events"},s=void 0,p={unversionedId:"optional-components/events",id:"version-11.x/optional-components/events",isDocsHomePage:!1,title:"Events",description:"- Definition",source:"@site/versioned_docs/version-11.x/optional-components/events.md",sourceDirName:"optional-components",slug:"/optional-components/events",permalink:"/docs/optional-components/events",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/events.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"8/1/2022",frontMatter:{title:"Events"},sidebar:"version-11.x/docs",previous:{title:"Languages",permalink:"/docs/optional-components/languages"},next:{title:"Mails",permalink:"/docs/optional-components/mails"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Broadcasting",id:"broadcasting",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#broadcasting"},"Broadcasting"))),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),(0,i.kt)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),(0,i.kt)("li",{parentName:"ul"},"An event class will usually be bound to one, or many Events Listeners Classes or has those Listeners registered to listen to it."),(0,i.kt)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),(0,i.kt)("h3",{id:"principles"},"Principles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),(0,i.kt)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Ship layer.")),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),(0,i.kt)("li",{parentName:"ul"},"All Events MUST extend from ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Events\n          - SomethingHappenedEvent.php\n          - ...\n        - Listeners\n          - ListenToMusicListener.php\n          - ...\n\n  - Ship\n    - Events\n      - GlobalStateChanged.php\n      - SomethingBiiigHappenedEvent.php\n      - ...\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In Laravel, you can create and register events in multiple way. Read ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel documentation")," to learn more about Events. "),(0,i.kt)("p",null,"Your custom ",(0,i.kt)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",(0,i.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),(0,i.kt)("h2",{id:"broadcasting"},"Broadcasting"),(0,i.kt)("p",null,"To define Broadcasting channels go to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/channels.php"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More info at ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel Docs"),"."))))}d.isMDXComponent=!0}}]);