"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6269:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={title:"Pagination"},l=void 0,s={unversionedId:"core-features/pagination",id:"version-10.x/core-features/pagination",isDocsHomePage:!1,title:"Pagination",description:"- Limit",source:"@site/versioned_docs/version-10.x/core-features/pagination.md",sourceDirName:"core-features",slug:"/core-features/pagination",permalink:"/docs/10.x/core-features/pagination",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/pagination.md",tags:[],version:"10.x",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1631623598,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Pagination"},sidebar:"version-10.x/docs",previous:{title:"Data Caching",permalink:"/docs/10.x/core-features/data-caching"},next:{title:"API Versioning",permalink:"/docs/10.x/core-features/api-versioning"}},c=[{value:"Limit",id:"limit",children:[]},{value:"Change the default pagination limit",id:"change-the-default-pagination-limit",children:[]},{value:"Skip the Pagination Limit",id:"skip-the-pagination-limit",children:[]},{value:"Project Wide",id:"project-wide",children:[]},{value:"Per Repository",id:"per-repository",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#limit"},"Limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#change-the-default-pagination-limit"},"Change the default pagination limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#skip-the-pagination-limit"},"Skip the Pagination Limit"))),(0,r.kt)("p",null,"For pagination apiato uses the ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/prettus/l5-repository"},"L5 Repository Package")," and the\npagination gets applied whenever you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"paginate")," function on any model repository\n(example: ",(0,r.kt)("inlineCode",{parentName:"p"},"$stores = $this->storeRepository->paginate();"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"?page=")," parameter can be applied to any ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GET"))," HTTP request responsible for listing records (mainly for Paginated data)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?page=200\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pagination object is always returned in ",(0,r.kt)("strong",{parentName:"em"},"meta")," when pagination is available on the endpoint.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'  "data": [...],\n  "meta": {\n    "pagination": {\n      "total": 2000,\n      "count": 30,\n      "per_page": 30,\n      "current_page": 22,\n      "total_pages": 1111,\n      "links": {\n        "previous": "http://api.domain.test/endpoint?page=21"\n      }\n    }\n  }\n')),(0,r.kt)("h3",{id:"limit"},"Limit"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"?limit=")," parameter can be applied to define, how many results should be returned on one page (also see ",(0,r.kt)("a",{parentName:"p",href:"../core-features/query-parameters#pagination"},"Pagination"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?limit=100\n")),(0,r.kt)("p",null,"This would return 100 resources within one page of the result. Of course, the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," query parameter can be\ncombined in order to get the next 100 resources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.domain.test/endpoint?limit=100&page=2\n")),(0,r.kt)("h3",{id:"change-the-default-pagination-limit"},"Change the default pagination limit"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and set a number for ",(0,r.kt)("inlineCode",{parentName:"p"},"PAGINATION_LIMIT_DEFAULT"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},"PAGINATION_LIMIT_DEFAULT=10\n")),(0,r.kt)("p",null,"This is used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/repository.php")," which is the config file of the ",(0,r.kt)("strong",{parentName:"p"},"L5 Repository")," Package."),(0,r.kt)("h3",{id:"skip-the-pagination-limit"},"Skip the Pagination Limit"),(0,r.kt)("p",null,"In order to allow clients to request all data that matches their criteria (e.g. search-criteria) and disable pagination,\nyou can do it either project wide or per repository. After that a request can get all the data\n(with no pagination applied) by applying ",(0,r.kt)("inlineCode",{parentName:"p"},"limit=0"),"."),(0,r.kt)("p",null,"This will return all matching entities:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"api.domain.test/endpoint?limit=0")),(0,r.kt)("h3",{id:"project-wide"},"Project Wide"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"PAGINATION_SKIP=true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("h3",{id:"per-repository"},"Per Repository"),(0,r.kt)("p",null,"Override the ",(0,r.kt)("inlineCode",{parentName:"p"},"$allowDisablePagination")," property in your specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository")," class."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Per repository configs override the global config and have precedence.  "))))}u.isMDXComponent=!0}}]);