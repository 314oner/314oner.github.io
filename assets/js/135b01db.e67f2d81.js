(self.webpackChunk_apps_docs_app=self.webpackChunk_apps_docs_app||[]).push([[1829],{16093:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>i.N,ErrorBoundaryError:()=>P.bq,ErrorBoundaryTryAgainButton:()=>P.a2,ErrorCauseBoundary:()=>P.k2,HtmlClassNameProvider:()=>d.e3,NavbarSecondaryMenuFiller:()=>y.GX,PageMetadata:()=>d.be,ReactContextError:()=>c.dV,SkipToContentFallbackId:()=>x.j,SkipToContentLink:()=>x.K,ThemeClassNames:()=>u.G,composeProviders:()=>c.fM,createStorageSlot:()=>a.Wf,duplicates:()=>w.X,filterDocCardListItems:()=>l.d1,isMultiColumnFooterLinks:()=>b.C,isRegexpStringMatch:()=>v.G,listStorageKeys:()=>a.Eo,listTagsByLetters:()=>h.Q,prefersReducedMotion:()=>p.O,processAdmonitionProps:()=>_,translateTagsPageTitle:()=>h.b,uniq:()=>w.s,useCollapsible:()=>i.u,useColorMode:()=>g.G,useContextualSearchFilters:()=>r.af,useCurrentSidebarCategory:()=>l.$S,useDocsPreferredVersion:()=>A.g1,useEvent:()=>c._q,useIsomorphicLayoutEffect:()=>c.Es,usePluralForm:()=>s.W,usePrevious:()=>c.ZC,usePrismTheme:()=>T.A,useSearchLinkCreator:()=>f.w,useSearchQueryString:()=>f.b,useStorageSlot:()=>a.Dv,useThemeConfig:()=>n.p,useWindowSize:()=>m.l});var n=o(3871),a=o(17771),r=o(57008),l=o(4797),s=o(91506),i=o(51419),u=o(2392),p=o(75040),c=o(5789),d=o(45810),g=o(62448),y=o(52821),m=o(91486),h=o(20391),f=o(6964),b=o(68213),v=o(31147),w=o(47529),T=o(5109),A=o(62542),S=o(11855);function _(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=S.Children.toArray(e),o=t.find((e=>S.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=S.createElement(S.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:o}}var x=o(67725),P=o(66515)},20391:(e,t,o)=>{"use strict";o.d(t,{Q:()=>r,b:()=>a});var n=o(94916);const a=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},91506:(e,t,o)=>{"use strict";o.d(t,{W:()=>p});var n=o(11855),a=o(73434),r=o(64399);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,a.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return r.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function p(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&r.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=o.select(t),l=o.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(o,t,e)}}},60737:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(o(11855)),r=n(o(46913));t.default=function(e){let{url:t,proxy:o}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},60042:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(o(11855)),r=o(16093),l=n(o(88665)),s=n(o(14198));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:o,darkLogo:n}=e,i=()=>"dark"===t?n?.altText??o?.altText:o?.altText,u=(0,l.default)(o?.url),p=(0,l.default)(n?.url);return o&&n?a.default.createElement(s.default,{alt:i(),sources:{light:u,dark:p},className:"openapi__logo"}):o||n?a.default.createElement(s.default,{alt:i(),sources:{light:u??p,dark:u??p},className:"openapi__logo"}):void 0}},70375:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>g});var n=o(37782),a=(o(11855),o(74784)),r=o(60042),l=o.n(r),s=o(76120),i=o(98378);o(60737);const u={id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},p=void 0,c={unversionedId:"apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml",id:"apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",source:"@site/docs/apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml.info.mdx",sourceDirName:"apps/nest-app/microservice-14-pet/petstore_versioned",slug:"/apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml",permalink:"/apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"petstore-2.0.0",previous:{title:"Petstore",permalink:"/category/petstore-versioned-api"},next:{title:"Pets",permalink:"/apps/nest-app/microservice-14-pet/petstore_versioned/pet"}},d={},g=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Authentication",id:"authentication",level:2}],y={toc:g},m="wrapper";function h(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,n.A)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,a.yg)("h1",{className:"openapi__heading"},"Swagger Petstore YAML"),(0,a.yg)(l(),{logo:{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},darkLogo:{url:"/img/petstore-logo-dark.png",altText:"Petstore dark logo"},mdxType:"ApiLogo"}),(0,a.yg)("p",null,"This is a sample server Petstore server.\nYou can find out more about Swagger at\n",(0,a.yg)("a",{parentName:"p",href:"http://swagger.io"},"http://swagger.io")," or on ",(0,a.yg)("a",{parentName:"p",href:"http://swagger.io/irc/"},"irc.freenode.net, #swagger"),".\nFor this sample, you can use the api key ",(0,a.yg)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This API is documented in ",(0,a.yg)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,a.yg)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,a.yg)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,a.yg)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,a.yg)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,a.yg)("p",null,"This API is documented in ",(0,a.yg)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,a.yg)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,a.yg)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,a.yg)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,a.yg)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,a.yg)("p",null,"This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with ",(0,a.yg)("a",{parentName:"p",href:"https://www.w3.org/TR/cors/"},"W3C spec"),".\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site."),(0,a.yg)("h2",{id:"authentication"},"Authentication"),(0,a.yg)("p",null,"Petstore offers two forms of authentication:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"API Key"),(0,a.yg)("li",{parentName:"ul"},"OAuth2")),(0,a.yg)("p",null,"OAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications."),(0,a.yg)("div",{style:{marginBottom:"2rem"}},(0,a.yg)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.yg)(s.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.yg)(i.default,{label:"OAuth 2.0: petstore_auth",value:"petstore_auth",mdxType:"TabItem"},(0,a.yg)("p",null,"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access."),(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"oauth2")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"OAuth Flow (implicit):"),(0,a.yg)("td",null,(0,a.yg)("p",null,"Authorization URL: http://petstore.swagger.io/api/oauth/dialog"),(0,a.yg)("span",null,"Scopes:"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"write:pets: modify pets in your account"),(0,a.yg)("li",null,"read:pets: read your pets")))))))),(0,a.yg)(i.default,{label:"API Key: api_key",value:"api_key",mdxType:"TabItem"},(0,a.yg)("p",null,"For this sample, you can use the api key ",(0,a.yg)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"apiKey")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Header parameter name:"),(0,a.yg)("td",null,"api_key")))))),(0,a.yg)(i.default,{label:"HTTP: Basic Auth",value:"BasicAuth",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"http")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"HTTP Authorization Scheme:"),(0,a.yg)("td",null,"basic")))))),(0,a.yg)(i.default,{label:"HTTP: Bearer Auth",value:"BearerAuth",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"http")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"HTTP Authorization Scheme:"),(0,a.yg)("td",null,"bearer")))))),(0,a.yg)(i.default,{label:"API Key: ApiKeyAuth",value:"ApiKeyAuth",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"apiKey")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Header parameter name:"),(0,a.yg)("td",null,"X-API-Key")))))),(0,a.yg)(i.default,{label:"OpenID Connect: OpenID",value:"OpenID",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"openIdConnect")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"OpenID Connect URL:"),(0,a.yg)("td",null,"https://example.com/.well-known/openid-configuration")))))),(0,a.yg)(i.default,{label:"OAuth 2.0: OAuth2",value:"OAuth2",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("table",null,(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security Scheme Type:"),(0,a.yg)("td",null,"oauth2")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"OAuth Flow (authorizationCode):"),(0,a.yg)("td",null,(0,a.yg)("p",null,"Token URL: https://example.com/oauth/token"),(0,a.yg)("p",null,"Authorization URL: https://example.com/oauth/authorize"),(0,a.yg)("span",null,"Scopes:"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"read: Grants read access"),(0,a.yg)("li",null,"write: Grants write access"),(0,a.yg)("li",null,"admin: Grants access to admin operations")))))))))),(0,a.yg)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.yg)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,a.yg)("span",null,"API Support: ",(0,a.yg)("a",{href:"mailto:apiteam@swagger.io"},"apiteam@swagger.io")),(0,a.yg)("span",null,"URL: ",(0,a.yg)("a",{href:"https://github.com/Redocly/redoc"},"https://github.com/Redocly/redoc"))),(0,a.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.yg)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,a.yg)("a",{href:"http://swagger.io/terms/"},"http://swagger.io/terms/")),(0,a.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,a.yg)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,a.yg)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache 2.0")))}h.isMDXComponent=!0},46913:function(e,t,o){var n,a,r,l=o(64399);a=[],void 0===(r="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(l.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){l.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,o){var l=s.URL||s.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?r(i):a(i.href)?n(e,t,o):r(i,i.target="_blank")):(i.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(i.href)}),4e4),setTimeout((function(){r(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,l){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),o);else if(a(e))n(e,o,l);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var r="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&l||i)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},p.readAsDataURL(e)}else{var c=s.URL||s.webkitURL,d=c.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){c.revokeObjectURL(d)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,a):n)||(e.exports=r)}}]);