"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6004],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6635:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Profiler"},l=void 0,p={unversionedId:"core-features/profiler",id:"version-11.x/core-features/profiler",isDocsHomePage:!1,title:"Profiler",description:"Profiling is very important to optimize the performance of your application, and help you better understand what happens when a request is received, as well as it can speed up the debugging process.",source:"@site/versioned_docs/version-11.x/core-features/profiler.md",sourceDirName:"core-features",slug:"/core-features/profiler",permalink:"/docs/core-features/profiler",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/profiler.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"8/1/2022",frontMatter:{title:"Profiler"},sidebar:"version-11.x/docs",previous:{title:"Useful Commands",permalink:"/docs/core-features/useful-commands"},next:{title:"Overview",permalink:"/docs/additional-features/overview"}},u=[{value:"Sample Profiler response",id:"sample-profiler-response",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Profiling is very important to optimize the performance of your application, and help you better understand what happens when a request is received, as well as it can speed up the debugging process."),(0,o.kt)("p",null,"Apiato uses the third-party package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/barryvdh/laravel-debugbar"},"laravel-debugbar")," (which uses the ",(0,o.kt)("a",{parentName:"p",href:"http://phpdebugbar.com/"},"PHP Debug Bar"),"), to collect the profiling data."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("strong",{parentName:"p"},"laravel-debugbar")," package displays the profiling data in the browser.\nHowever, Apiato uses a middleware (",(0,o.kt)("inlineCode",{parentName:"p"},"ProfilerMiddleware"),") to append the profiling data to the response.  "),(0,o.kt)("h3",{id:"sample-profiler-response"},"Sample Profiler response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Actual Response Here...\n    "_profiler": {\n        "__meta": {\n            "id": "X167f293230e3457f1bbd95d9c82aba4a",\n            "datetime": "2017-09-22 18:45:27",\n            "utime": 1506105927.799299,\n            "method": "GET",\n            "uri": "/",\n            "ip": "172.20.0.1"\n        },\n        "messages": {\n            "count": 0,\n            "messages": []\n        },\n        "time": {\n            "start": 1506105922.742068,\n            "end": 1506105927.799333,\n            "duration": 5.057265043258667,\n            "duration_str": "5.06s",\n            "measures": [\n                {\n                    "label": "Booting",\n                    "start": 1506105922.742068,\n                    "relative_start": 0,\n                    "end": 1506105923.524004,\n                    "relative_end": 1506105923.524004,\n                    "duration": 0.7819359302520752,\n                    "duration_str": "781.94ms",\n                    "params": [],\n                    "collector": null\n                },\n                {\n                    "label": "Application",\n                    "start": 1506105923.535343,\n                    "relative_start": 0.7932748794555664,\n                    "end": 1506105927.799336,\n                    "relative_end": 0.00000286102294921875,\n                    "duration": 4.26399302482605,\n                    "duration_str": "4.26s",\n                    "params": [],\n                    "collector": null\n                }\n            ]\n        },\n        "memory": {\n            "peak_usage": 13234248,\n            "peak_usage_str": "12.62MB"\n        },\n        "exceptions": {\n            "count": 0,\n            "exceptions": []\n        },\n        "route": {\n            "uri": "GET /",\n            "middleware": "api, throttle:30,1",\n            "domain": "http://api.apiato.test",\n            "as": "apis_root_page",\n            "controller": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers\\\\Controller@apiRoot",\n            "namespace": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers",\n            "prefix": "/",\n            "where": [],\n            "file": "app/Containers/Welcome/UI/API/Controllers/Controller.php:20-25"\n        },\n        "queries": {\n            "nb_statements": 0,\n            "nb_failed_statements": 0,\n            "accumulated_duration": 0,\n            "accumulated_duration_str": "0\u03bcs",\n            "statements": []\n        },\n        "swiftmailer_mails": {\n            "count": 0,\n            "mails": []\n        },\n        "logs": {\n            "count": 3,\n            "messages": [\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694807\n                },\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694811\n                },\n                {\n                    "message": "[2017-09-18 17:38:15] testing.INFO: New User registration. ID = 970ylqvaogmxnbdr | Email = apiato@mail.test.      Thank you for signing up.\\n</div>\\n</body>\\n</html>\\n  \\n",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "info",\n                    "time": 1506105927.694812\n                }\n            ]\n        },\n        "auth": {\n            "guards": {\n                "web": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]",\n                "api": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]"\n            },\n            "names": ""\n        },\n        "gate": {\n            "count": 0,\n            "messages": []\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"By default, the profiler feature is turned off. To turn it on edit the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and set ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUGBAR_ENABLED=true"),"."),(0,o.kt)("p",null,"To control and modify the profiler response, you need to edit this config file ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/debugbar.php"),"."))}d.isMDXComponent=!0}}]);