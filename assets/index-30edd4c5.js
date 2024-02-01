import{a as D,_ as R}from"./index-4369e825.js";/* empty css              */import{d as T,b as B,B as V,aH as M,aI as m,aM as y,F as f,aZ as p,bf as q,b7 as P,bg as H,bh as K,b9 as z,ba as W,aS as b}from"./arco-7fdff3a5.js";import{a as G}from"./index-9f27c57c.js";import"./vue-5903415b.js";const O="%[a-f0-9]{2}",x=new RegExp("("+O+")|([^%]+?)","gi"),S=new RegExp("("+O+")+","gi");function g(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;const t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],g(t),g(n))}function J(e){try{return decodeURIComponent(e)}catch{let r=e.match(x)||[];for(let t=1;t<r.length;t++)e=g(r,t).join(""),r=e.match(x)||[];return e}}function Z(e){const r={"%FE%FF":"��","%FF%FE":"��"};let t=S.exec(e);for(;t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{const a=J(t[0]);a!==t[0]&&(r[t[0]]=a)}t=S.exec(e)}r["%C2"]="�";const n=Object.keys(r);for(const a of n)e=e.replace(new RegExp(a,"g"),r[a]);return e}function Q(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return Z(e)}}function I(e,r){if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||r==="")return[];const t=e.indexOf(r);return t===-1?[]:[e.slice(0,t),e.slice(t+r.length)]}function X(e,r){const t={};if(Array.isArray(r))for(const n of r){const a=Object.getOwnPropertyDescriptor(e,n);a!=null&&a.enumerable&&Object.defineProperty(t,n,a)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){const s=e[n];r(n,s,e)&&Object.defineProperty(t,n,a)}}return t}const Y=e=>e==null,v=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),h=Symbol("encodeFragmentIdentifier");function ee(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{const a=t.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[",a,"]"].join("")]:[...t,[o(r,e),"[",o(a,e),"]=",o(n,e)].join("")]};case"bracket":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),"[]"].join("")]:[...t,[o(r,e),"[]=",o(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,[o(r,e),":list="].join("")]:[...t,[o(r,e),":list=",o(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||e.skipNull&&a===null||e.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[o(t,e),r,o(a,e)].join("")]:[[n,o(a,e)].join(e.arrayFormatSeparator)])}default:return r=>(t,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?t:n===null?[...t,o(r,e)]:[...t,[o(r,e),"=",o(n,e)].join("")]}}function re(e){let r;switch(e.arrayFormat){case"index":return(t,n,a)=>{if(r=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!r){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][r[1]]=n};case"bracket":return(t,n,a)=>{if(r=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"colon-list-separator":return(t,n,a)=>{if(r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!r){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[...a[t],n]};case"comma":case"separator":return(t,n,a)=>{const s=typeof n=="string"&&n.includes(e.arrayFormatSeparator),c=typeof n=="string"&&!s&&d(n,e).includes(e.arrayFormatSeparator);n=c?d(n,e):n;const i=s||c?n.split(e.arrayFormatSeparator).map(l=>d(l,e)):n===null?n:d(n,e);a[t]=i};case"bracket-separator":return(t,n,a)=>{const s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s){a[t]=n&&d(n,e);return}const c=n===null?[]:n.split(e.arrayFormatSeparator).map(i=>d(i,e));if(a[t]===void 0){a[t]=c;return}a[t]=[...a[t],...c]};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[...[a[t]].flat(),n]}}}function j(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(e,r){return r.encode?r.strict?v(e):encodeURIComponent(e):e}function d(e,r){return r.decode?Q(e):e}function A(e){return Array.isArray(e)?e.sort():typeof e=="object"?A(Object.keys(e)).sort((r,t)=>Number(r)-Number(t)).map(r=>e[r]):e}function C(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function te(e){let r="";const t=e.indexOf("#");return t!==-1&&(r=e.slice(t)),r}function w(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function F(e){e=C(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function _(e,r){r={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...r},j(r.arrayFormatSeparator);const t=re(r),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(const a of e.split("&")){if(a==="")continue;const s=r.decode?a.replace(/\+/g," "):a;let[c,i]=I(s,"=");c===void 0&&(c=s),i=i===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?i:d(i,r),t(d(c,r),i,n)}for(const[a,s]of Object.entries(n))if(typeof s=="object"&&s!==null)for(const[c,i]of Object.entries(s))s[c]=w(i,r);else n[a]=w(s,r);return r.sort===!1?n:(r.sort===!0?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((a,s)=>{const c=n[s];return c&&typeof c=="object"&&!Array.isArray(c)?a[s]=A(c):a[s]=c,a},Object.create(null))}function E(e,r){if(!e)return"";r={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...r},j(r.arrayFormatSeparator);const t=c=>r.skipNull&&Y(e[c])||r.skipEmptyString&&e[c]==="",n=ee(r),a={};for(const[c,i]of Object.entries(e))t(c)||(a[c]=i);const s=Object.keys(a);return r.sort!==!1&&s.sort(r.sort),s.map(c=>{const i=e[c];return i===void 0?"":i===null?o(c,r):Array.isArray(i)?i.length===0&&r.arrayFormat==="bracket-separator"?o(c,r)+"[]":i.reduce(n(c),[]).join("&"):o(c,r)+"="+o(i,r)}).filter(c=>c.length>0).join("&")}function N(e,r){var a;r={decode:!0,...r};let[t,n]=I(e,"#");return t===void 0&&(t=e),{url:((a=t==null?void 0:t.split("?"))==null?void 0:a[0])??"",query:_(F(e),r),...r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,r)}:{}}}function $(e,r){r={encode:!0,strict:!0,[h]:!0,...r};const t=C(e.url).split("?")[0]||"",n=F(e.url),a={..._(n,{sort:!1}),...e.query};let s=E(a,r);s&&(s=`?${s}`);let c=te(e.url);if(e.fragmentIdentifier){const i=new URL(t);i.hash=e.fragmentIdentifier,c=r[h]?i.hash:`#${e.fragmentIdentifier}`}return`${t}${s}${c}`}function k(e,r,t){t={parseFragmentIdentifier:!0,[h]:!1,...t};const{url:n,query:a,fragmentIdentifier:s}=N(e,t);return $({url:n,query:X(a,r),fragmentIdentifier:s},t)}function ne(e,r,t){const n=Array.isArray(r)?a=>!r.includes(a):(a,s)=>!r(a,s);return k(e,n,t)}const ae=Object.freeze(Object.defineProperty({__proto__:null,exclude:ne,extract:F,parse:_,parseUrl:N,pick:k,stringify:E,stringifyUrl:$},Symbol.toStringTag,{value:"Module"})),u=e=>(z("data-v-cab26099"),e=e(),W(),e),ce=u(()=>f("div",null,[f("div",{class:"text"},[f("div",null,"Wish everyone"),f("div",{class:"pink"},"good luck!"),f("div",{class:"small"}," I don`t know if there really is a gear of destiny in this world. "),f("div",{class:"small"},[b(" But at this moment I want to believe in the "),f("span",{class:"pink"},"luck of the dice"),b(" in my hand. ")])])],-1)),se={class:"play-footer"},ie=u(()=>f("a",{target:"_blank",href:"https://x.com/Lucky77monopoly",class:"twitter"},null,-1)),oe=u(()=>f("a",{target:"_blank",href:"https://discord.gg/lucky-77-986586932630921246",class:"dico"},null,-1)),fe=u(()=>f("a",{target:"_blank",href:"https://jasonlab.gitbook.io/lucky77/",class:"doc"},null,-1)),de=u(()=>f("div",{class:"ltd"},"©2024, Lucky77. LTD. ",-1)),le=T({__name:"index",setup(e){const{publicKey:r,signMessage:t}=D(),n=B(!1);async function a(){if(!n.value){if(n.value=!0,r.value&&t.value){const s={a:r.value.toBase58(),t:new Date().getTime()},c=new TextEncoder().encode(JSON.stringify(s,["a","t"]));try{const i=G.encode(await t.value(c)),l=ae.stringifyUrl({url:"https://g.lucky77.la/",query:Object.assign(s,{s:i})});window.open(l,"lucky77Game")}catch{p.warning("The signature has been cancelled.")}}else p.warning("Please connect the wallet!");n.value=!1}}return(s,c)=>{const i=q,l=P,U=H,L=K;return V(),M(L,{style:{height:"100vh"}},{default:m(()=>[y(i,null,{default:m(()=>[f("div",{class:"play-content"},[f("div",{class:"val"},[ce,f("div",null,[f("div",{class:"play-btn",onClick:a})])])])]),_:1}),y(U,null,{default:m(()=>[f("div",se,[y(l,{size:20},{default:m(()=>[ie,oe,fe]),_:1}),de])]),_:1})]),_:1})}}});const Fe=R(le,[["__scopeId","data-v-cab26099"]]);export{Fe as default};
