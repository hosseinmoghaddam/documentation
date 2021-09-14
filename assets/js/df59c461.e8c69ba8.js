(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{259:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(8),s=(t(0),t(284)),o={title:"Search Query Parameter"},c={unversionedId:"core-features/search-query-parameter",id:"version-9.x/core-features/search-query-parameter",isDocsHomePage:!1,title:"Search Query Parameter",description:"Below we'll see how to set up a Search Query Parameter, on a Model:",source:"@site/versioned_docs/version-9.x/core-features/search-query-parameter.md",sourceDirName:"core-features",slug:"/core-features/search-query-parameter",permalink:"/docs/9.x/core-features/search-query-parameter",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/search-query-parameter.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Search Query Parameter"},sidebar:"version-9.x/docs",previous:{title:"Validation",permalink:"/docs/9.x/core-features/validation"},next:{title:"ETag",permalink:"/docs/9.x/core-features/etag"}},i=[],p={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Below we'll see how to set up a Search Query Parameter, on a Model:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Add searchable Fields on the Model Repository, ",Object(s.b)("em",{parentName:"li"},"all the other steps are normal steps")," ")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Data\\Repositories;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'id'    => '=',\n        'email' => '=',\n    ];\n\n}\n")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Create basic list and search Task")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListUsersTask extends Action\n{\n    private $userRepository;\n\n    public function __construct(UserRepositoryInterface $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($order = true)\n    {\n        return $this->userRepository->paginate();\n    }\n}\n     \n")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Create basic Action to call that basic Task, and maybe other Tasks later in the future when needed")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Actions;\n\nuse App\\Containers\\User\\Tasks\\ListUsersTask;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListAndSearchUsersAction extends Action\n{\n\n    private $listUsersTask;\n\n    public function __construct(ListUsersTask $listUsersTask)\n    {\n        $this->listUsersTask = $listUsersTask;\n    }\n\n    public function run($order = true)\n    {\n        return $this->listUsersTask->run($order);\n    }\n} \n\n")),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Use the Action from a Controller")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\npublic function listAllUsers()\n{\n    $users = Apiato::call('User@ListAndSearchUsersAction');\n\n    return $this->response->paginator($users, new UserTransformer());\n} \n\n")),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},"Call it from anywhere as follows: ","[GET]"," ",Object(s.b)("inlineCode",{parentName:"li"},"http://api.apiato.com/users?search=Mahmoud@apiato.com"))))}l.isMDXComponent=!0},284:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||s;return t?a.a.createElement(d,c(c({ref:r},p),{},{components:t})):a.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<s;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);