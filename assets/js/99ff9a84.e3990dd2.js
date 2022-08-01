"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3046],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Authentication"},l=void 0,p={unversionedId:"core-features/authentication",id:"version-11.x/core-features/authentication",isDocsHomePage:!1,title:"Authentication",description:"- API Authentication (OAuth 2.0)",source:"@site/versioned_docs/version-11.x/core-features/authentication.md",sourceDirName:"core-features",slug:"/core-features/authentication",permalink:"/docs/core-features/authentication",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/authentication.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"8/1/2022",frontMatter:{title:"Authentication"},sidebar:"version-11.x/docs",previous:{title:"Code Generator",permalink:"/docs/core-features/code-generator"},next:{title:"Authorization",permalink:"/docs/core-features/authorization"}},c=[{value:"API Authentication (OAuth 2.0)",id:"api-authentication-oauth-20",children:[]},{value:"How to get Access Token using OAuth 2.0",id:"how-to-get-access-token-using-oauth-20",children:[]},{value:"Quick Overview",id:"quick-overview",children:[]},{value:"A: For first-party clients",id:"first-party-clients",children:[{value:"Login with Proxy for first-party clients",id:"login-with-proxy-for-first-party-clients",children:[]},{value:"Login without Proxy for first-party clients",id:"login-without-proxy-for-first-party-clients",children:[]}]},{value:"B: For third-party clients",id:"third-party-clients",children:[{value:"Login without Proxy for third-party clients",id:"login-without-proxy-for-third-party-clients",children:[]}]},{value:"Login With Custom Attributes",id:"login-with-custom-attributes",children:[]},{value:"Logout",id:"logout",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Change Tokens Expiration dates",id:"change-tokens-expiration-dates",children:[]},{value:"Web Authentication",id:"web-authentication",children:[]},{value:"Refresh Token",id:"refresh-token",children:[{value:"Refresh Token with proxy for first-party clients",id:"refresh-token-with-proxy-for-first-party-clients",children:[]},{value:"Refresh Token without proxy for first-party or third-party clients",id:"refresh-token-without-proxy-for-first-party-or-third-party-clients",children:[]}]},{value:"Email Verification",id:"email-verification",children:[]},{value:"Reset Password",id:"reset-password",children:[]},{value:"Social Authentication",id:"social-authentication",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-authentication-oauth-20"},"API Authentication (OAuth 2.0)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quick-overview"},"Quick Overview"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#first-party-clients"},"A: For first-party clients"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#third-party-clients"},"B: For third-party clients"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-with-custom-attributes"},"Login With Custom Attributes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#logout"},"Logout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#responses"},"Responses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#change-tokens-expiration-dates"},"Change Tokens Expiration dates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#web-authentication"},"Web Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#refresh-token"},"Refresh Token"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#email-verification"},"Email Verification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reset-password"},"Reset Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#social-authentication"},"Social Authentication"))),(0,r.kt)("p",null,"Middlewares are the best solution to apply Authentication in your App."),(0,r.kt)("p",null,"In Apiato you can use these two ",(0,r.kt)("inlineCode",{parentName:"p"},"Authentication Middlewares"),", to protect your endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API Authentication: ",(0,r.kt)("inlineCode",{parentName:"li"},"auth:api")),(0,r.kt)("li",{parentName:"ul"},"Web Authentication: ",(0,r.kt)("inlineCode",{parentName:"li"},"auth:web"))),(0,r.kt)("h2",{id:"api-authentication-oauth-20"},"API Authentication (OAuth 2.0)"),(0,r.kt)("p",null,"To protect an ",(0,r.kt)("strong",{parentName:"p"},"API")," Endpoint from being accessible by unauthenticated users you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth:api")," Middleware."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('secret/info', [Controller::class, 'getSecretInfo'])\n    ->middleware('auth:api');\n")),(0,r.kt)("p",null,"All Endpoints protected with ",(0,r.kt)("inlineCode",{parentName:"p"},"auth:api")," are accessible only when sending them a valid access token."),(0,r.kt)("p",null,"This Middleware is provided by the ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport"},"Laravel Passport")," package. So you can read its\ndocumentation for more details."),(0,r.kt)("h2",{id:"how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0"),(0,r.kt)("p",null,"1) Generate ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),". (",(0,r.kt)("a",{parentName:"p",href:"#first-party-clients"},"more details"),")"),(0,r.kt)("p",null,"2) Use the generated client to call this oauth/token endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")),(0,r.kt)("p",null,"All the Auth Endpoints are documented. Go to ",(0,r.kt)("a",{parentName:"p",href:"/docs/additional-features/documentation"},"Documentation Generator Page"),"\nto see how you can generate the API documentation, and read them."),(0,r.kt)("h2",{id:"quick-overview"},"Quick Overview"),(0,r.kt)("p",null,"OAuth lets you authenticate using different methods, these methods are called ",(0,r.kt)("inlineCode",{parentName:"p"},"grants"),".\nFor how to decide which grant type you should use, check ",(0,r.kt)("a",{parentName:"p",href:"https://oauth2.thephpleague.com/authorization-server/which-grant/"},"this"),"\nand keep reading this documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definitions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Client credentials: are the ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,r.kt)("li",{parentName:"ul"},"The Proxy: is just an endpoint, that you should call instead of calling the Auth server endpoints directly, the proxy\nendpoint will append the client credentials to your request and calls the Auth server for you, then return its response back. Each first-party client app should have its own proxy endpoints (at least one for each Login and Token Refresh). By default, Apiato provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"Web Client")," proxy endpoint.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can Log in to the first party app with proxy or without proxy, while for the third party you only need to log in\nwithout proxy. (same apply to refreshing token)."),(0,r.kt)("p",{parentName:"blockquote"},"For first party apps:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"With Proxy << best and easiest way, (requires manually generating clients creating proxy endpoints for each client)"),(0,r.kt)("li",{parentName:"ul"},"Without Proxy << if your frontend is not exposing the client credentials, you can call the Auth server endpoints directly without proxy.")),(0,r.kt)("p",{parentName:"blockquote"},"For third party apps:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Without Proxy << you don't need a proxy for the third party clients as they usually integrate with your API from the backend side which protects the client credentials."))),(0,r.kt)("h2",{id:"first-party-clients"},"A: For first-party clients"),(0,r.kt)("p",null,"First-party clients (Your Frontend Mobile, Web,... Apps) usually consumes your private API (Internal API)."),(0,r.kt)("p",null,"For first-party clients you need to use the ",(0,r.kt)("strong",{parentName:"p"},"Resource owner credentials grant")," (A.K.A. Password Grant Tokens)."),(0,r.kt)("p",null,"When this grant type is used, your server needs to authenticate the Client App first (ensuring the request is coming\nfrom your trusted frontend App) and then needs to check if the user credentials are correct (ensuring the user is\nregistered and has the right access), before issuing an access token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On register: the API returns user data. You will need to log that user in (using the same credentials he passed) to\nget his Access Token and make other API calls."),(0,r.kt)("li",{parentName:"ul"},"On login: the API returns the user Access Token with Refresh Token. You will need to request the User data by making\nanother call to the user endpoint, using his Access Token.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How it works:")),(0,r.kt)("p",null,"1) Create a password type Client in your database to represent one of your Apps (ex: Mobile App). Use\n",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate the client."),(0,r.kt)("p",null,"2) After registration, the user can enter his (username + password) in your App login screen."),(0,r.kt)("p",null,"3) Your App should send a ",(0,r.kt)("strong",{parentName:"p"},"Post")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the user credentials\n(",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),") and the client credentials (",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),") in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_type=password"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'username=admin%40admin.com&password=admin&client_id=2&client_secret=SGUVv02b1ppQCgI7ZVeoTZDN6z8SSFLYiMOzzfiE&grant_type=password&scope='\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 86400,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",\n  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."\n}\n')),(0,r.kt)("p",null,"4) Your Client App should save the Tokens and start requesting secure data, by sending the Access Token in the HTTP\nHeader ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),(0,r.kt)("p",null,"More info at ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport#password-grant-tokens"},"Laravel Passport Here")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WARNING: the Client ID and Secret should not be stored in JavaScript or browser cache, or made accessible in any way.")),(0,r.kt)("p",null,"So in case of Web Apps (JavaScript) you need to hide your client credentials behind a proxy. Apiato by default\nprovides you with a Web Login Proxy to use for all your trusted first party clients. We'll see below how you can use them."),(0,r.kt)("h3",{id:"login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients"),(0,r.kt)("p",null,"Concept: create an endpoint for each trusted client, to be used for a login."),(0,r.kt)("p",null,"Apiato by default has one url ready for your Web client ",(0,r.kt)("inlineCode",{parentName:"p"},"clients/web/login"),". You can add more as you\nneed for each of your trusted first party clients Apps (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"clients/web/users/login"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"clients/mobile/users/login"),")."),(0,r.kt)("p",null,"Behind the scene, that endpoint is appending the corresponding client ID and Secret to your request and making another\ncall to your Auth server with all the required data. ",(0,r.kt)("em",{parentName:"p"},"(this way the client does not need to send the ID and Secret with\nthe request, and he is using his own URL which gives even more control to which client is accessing your Server)"),". Then\nit returns the Auth response back to the client with the Tokens in it."),(0,r.kt)("p",null,"Note: You have to manually extract the Client credentials from the DB and put them in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),", for each client."),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"passport:install")," it automatically creates one client for you so you can use that for your\nfirst app. Or you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".env")," Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CLIENT_WEB_ID=101\nCLIENT_WEB_SECRET=VkjYCUk5DUexJTE9yFAakytWCOqbShLgu9Ql67TI\n")),(0,r.kt)("h3",{id:"login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients"),(0,r.kt)("p",null,"Login from your App by sending a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_type=password"),",\nthe User credentials (",(0,r.kt)("inlineCode",{parentName:"p"},"username")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"), Client Credentials (",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),") and finally the\n",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,r.kt)("h2",{id:"third-party-clients"},"B: For third-party clients"),(0,r.kt)("p",null,"Third party clients (User's custom external Apps, who wants to integrate with your Software) always consumes your\npublic API (External API) only."),(0,r.kt)("p",null,"For third-party clients you need to use the ",(0,r.kt)("strong",{parentName:"p"},"Client credentials grant")," (A.K.A. Personal Access Tokens). ",(0,r.kt)("em",{parentName:"p"},"This grant\ntype is the simplest and is suitable for machine-to-machine authentication.")),(0,r.kt)("p",null,"With this grant type your server needs to authenticate the Client App only, before issuing an access token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How it works")),(0,r.kt)("p",null,"1) User logs in to your Clients App Interface (an external App made for your users only), go to settings, create Client\n(of type ",(0,r.kt)("inlineCode",{parentName:"p"},"personal"),") and copy the ID and Secret. ",(0,r.kt)("em",{parentName:"p"},"(Note this can be done via an API if you prefer)")),(0,r.kt)("p",null,"You may generate a personal client for testing purposes using ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan passport:client --personal"),"."),(0,r.kt)("p",null,'2) User add the Client credentials to his "Server Side software" and send a ',(0,r.kt)("strong",{parentName:"p"},"Post")," request to\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the Client credentials (",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),") in\naddition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),":"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'client_id=1&client_secret=y1RbtnOvh9rpA91zPI2tiVKmFlepNy9dhHkzUKle&grant_type=client_credentials&scope='\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 86400,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1Ni...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,r.kt)("p",null,"3) The Client will be granted an Access Token to be saved. Then the Client can start requesting secure data, by sending\nthe Access Token in the HTTP Header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),(0,r.kt)("p",null,"More info at ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport#personal-access-tokens"},"Laravel Passport Here")),(0,r.kt)("h3",{id:"login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients"),(0,r.kt)("p",null,"We usually do not need a proxy for third-party clients as they are most likely making calls form their servers, thus\nthe Client ID and Secret should be secure and not exposed to the users."),(0,r.kt)("p",null,"Login by sending a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),",\nClient Credentials (",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),") and finally the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,r.kt)("p",null,"Once issued, you can use that Access Token to make requests to protected resources (Endpoints).\nThe Access Token should be sent in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer"),"\n(Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz..."),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep in mind there's no session state when using Tokens for Authentication")),(0,r.kt)("h2",{id:"login-with-custom-attributes"},"Login With Custom Attributes"),(0,r.kt)("p",null,"By default, Apiato allow users to log in with their ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," address. However, you may want to also allow users to\nbe able to log in using their ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"and ",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),"."),(0,r.kt)("p",null,"Here is how to configure and use this feature."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may need to adapt your database accordingly (e.g., add the respective field to the ",(0,r.kt)("inlineCode",{parentName:"li"},"users")," table)."),(0,r.kt)("li",{parentName:"ul"},"You may need to adapt the ",(0,r.kt)("inlineCode",{parentName:"li"},"Task")," that ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," a ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," object (e.g., the ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateUserByCredentialsTask"),") accordingly\nto support the new fields. This may also affect your ",(0,r.kt)("inlineCode",{parentName:"li"},"Register")," logic."),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Containers\\AppSection\\Authentication\\Configs\\appSection-authentication")," Configuration file and check the ",(0,r.kt)("inlineCode",{parentName:"li"},"login"),"\nparams in order to configure this feature.")),(0,r.kt)("h2",{id:"logout"},"Logout"),(0,r.kt)("p",null,"Logout by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/logout/")," containing the Token in the Header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Token revoked successfully."\n}\n')),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authentication failed JSON response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "An Exception occurred when trying to authenticate the User.",\n  "errors": []\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wrong Client ID or Secret:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "invalid_client",\n  "error_description": "Client authentication failed",\n  "message": "Client authentication failed"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access Correct:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 86400,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,r.kt)("h2",{id:"change-tokens-expiration-dates"},"Change Tokens Expiration dates"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file and edit this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/*\n|--------------------------------------------------------------------------\n| Access Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'expires-in' => env('API_TOKEN_EXPIRES', 3650),\n\n/*\n|--------------------------------------------------------------------------\n| Refresh Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'refresh-expires-in' => env('API_REFRESH_TOKEN_EXPIRES', 3650),\n")),(0,r.kt)("p",null,"To change from days to minutes you need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Authentication\\Providers\\AuthProvider"),"."),(0,r.kt)("h2",{id:"web-authentication"},"Web Authentication"),(0,r.kt)("p",null,"To protect a ",(0,r.kt)("strong",{parentName:"p"},"Web")," Endpoint from being accessible by unauthenticated users you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth:web")," Middleware."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('private/page', [Controller::class, 'showPrivatePage'])\n    ->middleware('auth:web');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If authentication failed, users will be redirected to a login page")),(0,r.kt)("p",null,"To change the login page view go to the config file ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authentication/Configs/appSection-authentication.php"),", and set the name of your login page there as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"'login-page-url' => 'login',\n")),(0,r.kt)("p",null,"This will be looking for (login.html or login.php or login.blade.php)."),(0,r.kt)("h2",{id:"refresh-token"},"Refresh Token"),(0,r.kt)("p",null,"In case your server is issuing a short-lived access tokens, the users will need to refresh their access tokens via the\nrefresh token that was provided to them when the access token was issued."),(0,r.kt)("h3",{id:"refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients"),(0,r.kt)("p",null,"By default, Apiato provide this endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/clients/web/refresh")," for the Web Client to be used\nwhen you need to refresh the token for that client. You can of course create as many\nendpoints as you want for each client. See the code of ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authentication/UI/API/Routes/ProxyRefreshForWebClient.v1.public.php"),"\nand create similar ones for each client. The most important change will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_ID')")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_SECRET'),")," passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProxyRefreshForWebClientAction"),"."),(0,r.kt)("p",null,"Those proxy refresh endpoints work in 2 ways. Either by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh_token")," manually to the endpoint. Or by\npassing it with the HttpCookie. In both cases the code will work, and the server will reply with a response similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31500,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),(0,r.kt)("p",null,"Containing new Access Token and new Refresh Token."),(0,r.kt)("h3",{id:"refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients"),(0,r.kt)("p",null,"The request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," should contain ",(0,r.kt)("inlineCode",{parentName:"p"},"grant_type=refresh_token"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," &\n",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret"),", in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh_token")," and finally the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," which could be empty."),(0,r.kt)("h2",{id:"email-verification"},"Email Verification"),(0,r.kt)("p",null,"Email verification is enabled by default but no route is protected against unconfirmed user access. To let only confirmed users\naccess a certain route you should add the ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," middleware to that route. You can globally disable email verification by setting\n",(0,r.kt)("inlineCode",{parentName:"p"},"'require_email_verification' => false,")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Authentication\\Configs\\appSection-authentication.php"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While email verification is disabled you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," protect any route against unconfirmed user access by using ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," middleware and this\nmiddleware is ignored."))),(0,r.kt)("p",null,"When email verification is enabled and a user hits a protected endpoint, the API throws an exception, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," is not yet ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmed"),".  "),(0,r.kt)("h4",{id:"process-flow"},"Process Flow"),(0,r.kt)("p",null,"1) Add your web app email verification redirect page url e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"http://myapp.com/email/verify")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"allowed-verify-email-urls")," array of the ",(0,r.kt)("inlineCode",{parentName:"p"},"appSection-authentication")," config.",(0,r.kt)("br",{parentName:"p"}),"\n","2) Send the email verification url to the user by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"/email/verification-notification")," endpoint using your web app and pass one of the valid urls that you added in step 1 into the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_url")," field of the endpoint.",(0,r.kt)("br",{parentName:"p"}),"\n","3) An email verification link will be sent to the user's email which looks like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://myapp.test/email/verify?url=http://api.myapi.test/v1/email/verify/XbPW7awNkzl83LD6/eaabd911e2e07ede6456d3bd5725c6d4a5c2dc0b?expires=1646913047&signature=232702865b8353c445b39c50397e66db33c74df80e3db5a7c0d46ef94c8ab6a9"),(0,r.kt)("br",{parentName:"p"}),"\n","4) When the user click the link, he/she will be redirected to the url you specified before, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"http://myapp.com/email/verify")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," query string",(0,r.kt)("br",{parentName:"p"}),"\n","5) ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," is the complete url your web app needs to call to verify the user. So you just call this url and the user will be verified.",(0,r.kt)("br",{parentName:"p"}),"\n","6) At this point you should get a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," OK response and the user's email is verified.  "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using a load balancer and having difficulty with the email verification link, e.g. app says the signature doesn't match,\nset the ",(0,r.kt)("inlineCode",{parentName:"p"},"protected $proxies = '*'")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Middlewares\\TrustProxies.php")," or update it to match your needs."))),(0,r.kt)("h2",{id:"reset-password"},"Reset Password"),(0,r.kt)("p",null,"Use the",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/password/forgot")," (",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/User/UI/API/Routes/ForgotPassword.v1.public.php"),")\nand",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/password/reset"),"  (",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/User/UI/API/Routes/ResetPassword.v1.public.php"),")  endpoints."),(0,r.kt)("h4",{id:"process-flow-1"},"Process Flow"),(0,r.kt)("p",null,"1) Add your web app reset password page url e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"http://myapp.com/reset-password")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"allowed-reset-password-urls")," array of the ",(0,r.kt)("inlineCode",{parentName:"p"},"appSection-authentication"),"config.  "),(0,r.kt)("p",null,"2) Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/password/forgot")," endpoint with a ",(0,r.kt)("strong",{parentName:"p"},"reset url")," of your choice. It should be one of the urls in the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowed-reset-password-urls")," array.",(0,r.kt)("br",{parentName:"p"}),"\n","This endpoint will email user a link like this:",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("inlineCode",{parentName:"p"},"http://myapp.com/reset-password?email=mohammad.alavi1990@gmail.com&token=51f8d80182f3785648c9b9dc7162719d158fc418b3cca86c14963638ec83d663"),"  "),(0,r.kt)("p",null,"3) And when user click on that link it will go to your front end app reset password page. And then from there you should get\nthe user's new password and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"/password-reset")," endpoint with all the required fields to reset the password."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You must set up the email to get this function to work, however for testing purposes set the ",(0,r.kt)("inlineCode",{parentName:"p"},"MAIL_MAILER=log")," in\nyour ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in order to the see the email content in the log file ",(0,r.kt)("inlineCode",{parentName:"p"},"storage/logs/laravel.log"),"."))),(0,r.kt)("h2",{id:"social-authentication"},"Social Authentication"),(0,r.kt)("p",null,"For Social Authentication visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/additional-features/social-authentication"},"Social Authentication")," page."))}u.isMDXComponent=!0}}]);