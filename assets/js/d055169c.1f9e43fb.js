"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Authorization"},l=void 0,p={unversionedId:"core-features/authorization",id:"version-11.x/core-features/authorization",isDocsHomePage:!1,title:"Authorization",description:"- How it works",source:"@site/versioned_docs/version-11.x/core-features/authorization.md",sourceDirName:"core-features",slug:"/core-features/authorization",permalink:"/docs/core-features/authorization",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/authorization.md",tags:[],version:"11.x",lastUpdatedBy:"Rafael Carrasco",lastUpdatedAt:1667286369,formattedLastUpdatedAt:"11/1/2022",frontMatter:{title:"Authorization"},sidebar:"version-11.x/docs",previous:{title:"Authentication",permalink:"/docs/core-features/authentication"},next:{title:"User Registration",permalink:"/docs/core-features/user-registration"}},u=[{value:"How it works",id:"how-it-works",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Assign Roles &amp; Permission to the Testing User",id:"assign-roles-permission-to-the-testing-user",children:[]},{value:"Seeding some users (Admins)",id:"seeding-some-users-admins",children:[]},{value:"Roles &amp; Permissions guards",id:"roles-permissions-guards",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-it-works"},"How it works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#responses"},"Responses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#seeding-some-users-admins"},"Seeding some users (Admins)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#roles-permissions-guards"},"Roles & Permissions guards"))),(0,o.kt)("p",null,"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container."),(0,o.kt)("p",null,"Behind the scenes apiato is using the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/authorization"},"Laravel's authorization")," functionality that was introduced in version 5.1.11 with the helper package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"laravel-permission"),". So you can always refer to the correspond documentation for more information."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Authorization in apiato is very simple and easy."),(0,o.kt)("p",null,"1) Create some Roles and permissions. By default, an ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role and some permissions are provided by Apiato. You can find the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authorization/Data/Seeders/*")," directory."),(0,o.kt)("p",null,"2) Attach some permissions to the roles."),(0,o.kt)("p",null,"3) Now start creating users (or use existing users), to assign them to the new created Roles."),(0,o.kt)("p",null,"4) Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example protecting the (delete user) endpoint with ",(0,o.kt)("inlineCode",{parentName:"strong"},"delete-users")," permission:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class DeleteUserRequest extends Request\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For detailed explanation of this example, please visit the ",(0,o.kt)("a",{parentName:"strong",href:"../main-components/requests"},"Requests")," Page.")),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authorization failed JSON response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "This action is unauthorized."\n}\n')),(0,o.kt)("h2",{id:"assign-roles-permission-to-the-testing-user"},"Assign Roles & Permission to the Testing User"),(0,o.kt)("p",null,"You will need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"$access")," property in your test class, check out the ",(0,o.kt)("a",{parentName:"p",href:"../miscellaneous/tests-helpers"},"Tests Helpers")," page for more details."),(0,o.kt)("h2",{id:"seeding-some-users-admins"},"Seeding some users (Admins)"),(0,o.kt)("p",null,"By default, Apiato comes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Super Admin"),"."),(0,o.kt)("p",null,"This Super Admin Credentials are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"email: ",(0,o.kt)("a",{parentName:"li",href:"mailto:admin@admin.com"},"admin@admin.com")),(0,o.kt)("li",{parentName:"ul"},"password: admin")),(0,o.kt)("p",null,"This Admin seeded by ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php"),"."),(0,o.kt)("p",null,"The Default Super User, has a default role ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," default role ",(0,o.kt)("strong",{parentName:"p"},"has no permissions given to it"),"."),(0,o.kt)("p",null,"To give permissions to the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface)."),(0,o.kt)("p",null,"Checkout each container ",(0,o.kt)("strong",{parentName:"p"},"Seeders")," directory ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/{container-name}/Data/Seeders/"),", to edit the default ",(0,o.kt)("strong",{parentName:"p"},"Users"),", ",(0,o.kt)("strong",{parentName:"p"},"Roles")," and ",(0,o.kt)("strong",{parentName:"p"},"Permissions"),"."),(0,o.kt)("h2",{id:"roles-permissions-guards"},"Roles & Permissions guards"),(0,o.kt)("p",null,"By default, Apiato uses a single guard called ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission#using-multiple-guards"},"laravel-permission")," package for more details."))}c.isMDXComponent=!0}}]);