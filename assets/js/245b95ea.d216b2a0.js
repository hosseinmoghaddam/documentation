"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7267],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Data Caching"},s=void 0,l={unversionedId:"core-features/data-caching",id:"version-10.x/core-features/data-caching",isDocsHomePage:!1,title:"Data Caching",description:"- Enable / Disable Eloquent Query Caching",source:"@site/versioned_docs/version-10.x/core-features/data-caching.md",sourceDirName:"core-features",slug:"/core-features/data-caching",permalink:"/docs/10.x/core-features/data-caching",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/data-caching.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Data Caching"},sidebar:"version-10.x/docs",previous:{title:"Rate Limiting",permalink:"/docs/10.x/core-features/rate-limiting"},next:{title:"Pagination",permalink:"/docs/10.x/core-features/pagination"}},p=[{value:"Enable / Disable Eloquent Query Caching",id:"enable-disable-eloquent-query-caching",children:[]},{value:"Change different caching settings",id:"change-different-caching-settings",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#change-different-caching-settings"},"Change different caching settings"))),(0,i.kt)("h3",{id:"enable-disable-eloquent-query-caching"},"Enable / Disable Eloquent Query Caching"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is ",(0,i.kt)("strong",{parentName:"p"},"disabled")," By default. "))),(0,i.kt)("p",null,"To enable it, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/repository.php")," config file and set ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled  => true"),", or set it from the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file using ",(0,i.kt)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE"),"."),(0,i.kt)("p",null,"More details can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"here"),"."),(0,i.kt)("p",null,"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout its documentation ",(0,i.kt)("a",{parentName:"p",href:"../core-features/query-parameters#skip-caching"},"here"),"."),(0,i.kt)("h3",{id:"change-different-caching-settings"},"Change different caching settings"),(0,i.kt)("p",null,"You can use different cache setting for each repository."),(0,i.kt)("p",null,"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."),(0,i.kt)("p",null,"For more details about all the properties refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#cache-config"},"the L5 repository package documentation"),"."),(0,i.kt)("p",null,"Note: you don't need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheableRepository")," trait or implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheableInterface")," since they both exist on the Abstract repository class (",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Repositories\\Repository"),")."))}d.isMDXComponent=!0}}]);