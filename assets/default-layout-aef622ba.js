import{B as c,C as r,F as t,d as v,b6 as C,aM as e,aI as n,u as h,aS as g,b7 as w,b8 as x,a_ as I,b9 as L,ba as B,b as V,aG as $,aH as d,aO as N,c as S,bb as b,bc as A,bd as T}from"./arco-7fdff3a5.js";import{W as M,_ as y,u as R}from"./index-2d69af88.js";/* empty css              */import{f as H}from"./vue-5903415b.js";const P={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"none"},Z=t("path",{fill:"#fff",stroke:"#fff",d:"M4.507 8.476h22.286c1.61 0 1.61-2.476 0-2.476H4.507c-1.61 0-1.61 2.476 0 2.476ZM4.507 15.476h22.286c1.61 0 1.61-2.476 0-2.476H4.507c-1.61 0-1.61 2.476 0 2.476ZM4.507 23.476h22.286c1.61 0 1.61-2.476 0-2.476H4.507c-1.61 0-1.61 2.476 0 2.476Z"},null,-1),j=[Z];function z(a,o){return c(),r("svg",P,j)}const F={render:z},D={xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",fill:"none"},E=t("path",{fill:"#fff",stroke:"#fff",d:"M9.993 11.5 1 20.432l1.435 1.425 8.993-8.931L20.564 22 22 20.575 12.863 11.5 22 2.425 20.565 1l-9.137 9.075-8.993-8.932L1 2.568 9.993 11.5Z"},null,-1),O=[E];function W(a,o){return c(),r("svg",D,O)}const G={render:W},p=a=>(L("data-v-bc407c14"),a=a(),B(),a),K={class:"menu-container"},U=p(()=>t("div",{class:"logo"},null,-1)),q={class:"router"},J={style:{"padding-top":"2rem"}},Q={class:"footer"},X=p(()=>t("a",{target:"_blank",href:"https://x.com/Lucky77monopoly",class:"twitter"},null,-1)),Y=p(()=>t("a",{target:"_blank",href:"https://discord.gg/lucky-77-986586932630921246",class:"dico"},null,-1)),ee=p(()=>t("a",{target:"_blank",href:"https://jasonlab.gitbook.io/lucky77/",class:"doc"},null,-1)),te=p(()=>t("div",{class:"ltd"},"©2024, Lucky77. LTD. ",-1)),oe=v({__name:"pmenu",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(a){const o=C(a,"modelValue"),i=H();function f(u){i.push({name:u}),o.value=!1}return(u,s)=>{const l=w,_=x,m=I;return c(),r("div",K,[e(_,{justify:"space-between",align:"start"},{default:n(()=>[e(l,{size:40},{default:n(()=>[U]),_:1}),t("div",null,[e(h(G),{onClick:s[0]||(s[0]=k=>o.value=!1)})])]),_:1}),t("div",q,[e(l,{fill:"",direction:"vertical"},{default:n(()=>[e(m,{long:"",onClick:s[1]||(s[1]=k=>f("Play"))},{default:n(()=>[g(" HOME ")]),_:1}),e(m,{long:"",onClick:s[2]||(s[2]=k=>f("Mint"))},{default:n(()=>[g(" MINT NFT ")]),_:1})]),_:1}),t("div",J,[e(h(M))])]),t("div",Q,[e(l,{size:20},{default:n(()=>[X,Y,ee]),_:1}),te])])}}});const se=y(oe,[["__scopeId","data-v-bc407c14"]]),ne={class:"header"},ae={class:"right-pc"},ce=v({__name:"index",setup(a){const o=V(!1);function i(){console.log(o.value),o.value=!0}return(f,u)=>{const s=$("RouterLink"),l=w,_=x;return c(),r("div",ne,[e(_,{justify:"space-between",align:"start"},{default:n(()=>[e(l,{size:40},{default:n(()=>[e(s,{to:{name:"Play"},class:"logo"}),e(s,{to:{name:"Mint"},class:"mint"},{default:n(()=>[g("MINT NFT")]),_:1})]),_:1}),t("div",null,[t("div",ae,[e(h(M),{dark:""})]),t("div",{class:"right-phone",onClick:i},[e(h(F))])])]),_:1}),o.value?(c(),d(se,{key:0,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=m=>o.value=m)},null,8,["modelValue"])):N("",!0)])}}});const le=y(ce,[["__scopeId","data-v-847b14f8"]]),_e=v({__name:"page-layout",setup(a){const o=R(),i=S(()=>o.getCacheList);return(f,u)=>{const s=$("router-view");return c(),d(s,null,{default:n(({Component:l,route:_})=>[e(T,{name:"fade",mode:"out-in",appear:""},{default:n(()=>[_.meta.ignoreCache?(c(),d(b(l),{key:_.fullPath})):(c(),d(A,{key:1,include:i.value},[(c(),d(b(l),{key:_.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}}}),ie={class:"container"},ue=v({__name:"default-layout",setup(a){return(o,i)=>(c(),r("div",ie,[e(le,{class:"container-nav"}),e(_e)]))}});const me=y(ue,[["__scopeId","data-v-e79c011f"]]);export{me as default};
