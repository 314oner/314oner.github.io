"use strict";(self.webpackChunk_apps_docs_app=self.webpackChunk_apps_docs_app||[]).push([[762],{77588:(e,t,r)=>{r.d(t,{A:()=>h});var s=r(11855),i=r(35284),n=r(98796),c=r(35092),a=r(89326),o=r(25829);const p={cardContainer:"cardContainer_shAS",cardTitle:"cardTitle_euHo",cardDescription:"cardDescription__PTm"};function l(e){let{href:t,children:r}=e;return s.createElement(c.default,{href:t,className:(0,i.default)("card padding--lg",p.cardContainer)},r)}function d(e){let{href:t,icon:r,title:n,description:c}=e;return s.createElement(l,{href:t},s.createElement("h2",{className:(0,i.default)("text--truncate",p.cardTitle),title:n},r," ",n),c&&s.createElement("p",{className:(0,i.default)("text--truncate",p.cardDescription),title:c},c))}function u(e){let{item:t}=e;const r=(0,n._o)(t);return r?s.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(t.docId??void 0);return s.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(m,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,n.$S)();return s.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return s.createElement(v,e);const c=(0,n.d1)(t);return s.createElement("section",{className:(0,i.default)("row",r)},c.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}},64147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var s=r(37782),i=(r(11855),r(74784)),n=r(77588),c=r(98796);const a={id:"user",title:"Users",description:"Users",custom_edit_url:null},o=void 0,p={unversionedId:"apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/user",id:"apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/user",title:"Users",description:"Users",source:"@site/docs/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/user.tag.mdx",sourceDirName:"apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0",slug:"/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/user",permalink:"/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user",title:"Users",description:"Users",custom_edit_url:null},sidebar:"petstore-1.0.0",previous:{title:"Subscribe to the Store events",permalink:"/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/subscribe-to-the-store-events"},next:{title:"Create user",permalink:"/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/create-user"}},l={},d=[],u={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,s.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Operations about user"),(0,i.yg)(n.A,{items:(0,c.$S)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);