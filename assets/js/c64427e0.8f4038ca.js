"use strict";(self.webpackChunk_apps_docs_app=self.webpackChunk_apps_docs_app||[]).push([[1134],{37835:(e,t,c)=>{c.r(t),c.d(t,{default:()=>p});var a=c(63159),l=c(22834),d=c(11855);function h(...e){return(0,l.t)((0,l.c)(e))}const u={default:"bg-neutral-200 dark:bg-neutral-700",hover:"hover:bg-neutral-300 dark:hover:bg-neutral-600",checked:"has-[input[type=checkbox]:checked]:bg-neutral-700 dark:has-[input[type=checkbox]:checked]:bg-neutral-300",checkedHover:"has-[input[type=checkbox]:checked]:hover:bg-black dark:has-[input[type=checkbox]:checked]:hover:bg-white",disabled:"has-[input[type=checkbox]:disabled]:bg-neutral-100 dark:has-[input[type=checkbox]:disabled]:bg-neutral-800",disabledHover:"has-[input[type=checkbox]:disabled]:hover:bg-neutral-100 dark:has-[input[type=checkbox]:disabled]:hover:bg-neutral-800",disabledChecked:"has-[input[type=checkbox]:disabled:checked]:bg-neutral-300 dark:has-[input[type=checkbox]:disabled:checked]:bg-neutral-700",disabledCheckedHover:"has-[input[type=checkbox]:disabled:checked]:hover:bg-neutral-300 dark:has-[input[type=checkbox]:disabled:checked]:hover:bg-neutral-700"},n={default:"bg-white dark:bg-black"},r={default:"w-10 min-w-10 has-[input[type=checkbox]:not(:checked)]:pr-5 has-[input[type=checkbox]:checked]:pl-5",small:"h-10 w-18 min-w-18 has-[input[type=checkbox]:not(:checked)]:pr-12 has-[input[type=checkbox]:checked]:pl-12",medium:"h-14 w-26 min-w-26 has-[input[type=checkbox]:not(:checked)]:pr-14 has-[input[type=checkbox]:checked]:pl-14",large:"h-26 w-58 min-w-58 has-[input[type=checkbox]:not(:checked)]:pr-32 has-[input[type=checkbox]:checked]:pl-32"},o={default:"w-4 h-4 rounded-full",small:"h-8 w-8 rounded-full",medium:"h-12 w-12 rounded-full",large:"h-24 w-24 rounded-full"},i=d.forwardRef((({className:e,size:t="default",type:c="checkbox",defaultChecked:l,onChange:i,checked:s,...p},b)=>{const[k,f]=d.useState(l??!1);d.useEffect((()=>{"boolean"==typeof s&&f(s)}),[s]);const m=d.useRef(null),g=`${"default"===t?r.default:"small"!==t?"medium"!==t?r.large:r.medium:r.small} relative inline-block group/switch rounded-full p-1 ${u.default} ${u.hover} ${u.checked} ${u.checkedHover} ${u.disabled} ${u.disabledHover} ${u.disabledChecked} ${u.disabledCheckedHover} has-[input[type=checkbox]:disabled]:cursor-not-allowed transition-all duration-200 ease-in-out`,x=`${"default"===t?o.default:"small"!==t?"medium"!==t?o.large:o.medium:o.small}`;return(0,a.jsxs)("label",{htmlFor:"defaultToggleSwitchId",className:h(g,e),children:[(0,a.jsx)("input",{id:"defaultToggleSwitchId",defaultChecked:l,checked:"boolean"==typeof l?void 0:k,type:c,className:"hidden",onChange:e=>{f(e.currentTarget.checked),null==i||i(e)},ref:e=>{m.current=e,"function"==typeof b?b(e):b&&(b.current=e)},...p}),(0,a.jsx)("div",{className:h(`${o.default}`,`${n.default}`,`${x}`)})]})}));i.displayName="DefaultToggleSwitch";var s=c(72022);function p(){return d.createElement(s.A,{title:"DefaultToggleSwitch",description:"DefaultToggleSwitch component"},d.createElement("div",{className:"flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl"},d.createElement("div",{className:"flex flex-col justify-center flex-initial px-px"},d.createElement(i,{size:"medium"}))))}}}]);