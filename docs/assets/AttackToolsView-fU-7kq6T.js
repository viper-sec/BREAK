import{A as a,R as e,i as l,_ as t}from"./index-cgsJDTSi.js";/* empty css                        *//* empty css                    */import{B as s}from"./BREAK-KbUlqR6P.js";import{w as o,n as r,x as i,e as n,o as u}from"./element-plus-DxuawtAF.js";import{a as c}from"./vue-router-mKocEu41.js";import{d,b as p,q as m,t as k,Z as w,l as h,W as b,u as f,F as v,ab as y,m as K,a7 as _,ai as $,V as j}from"./vue-rmd1cPzt.js";import"./relation-graph-aM9PJqhq.js";import"./vue-i18n-UgkcYfIM.js";import"./BREAK-Risks-LCDxJxth.js";import"./BREAK-Avoidances-Wmk5ZIWy.js";const A=["id"],R=["href"],g=t(d({__name:"AttackToolsView",setup(t){const d=c(),g=p(!1),B=p(""),x=Object.keys(s.attackTools).map((a=>({atKey:a,...s.attackTools[a]}))),C=p(!1),E=p(""),T=({row:a})=>d.hash.split("#")[1]===a.atKey?"anchor-row":"";return(t,s)=>{const c=y("router-link"),p=i,D=n,z=u,I=o;return K(),m(v,null,[k("h3",null,w(t.$t("attackTools")),1),h(I,{height:d.hash.split("#")[1]?"unset":window.innerHeight-200,"scrollbar-always-on":!0,data:f(x),"row-class-name":T,border:"",stripe:""},{default:b((()=>[h(p,{prop:"atKey",label:"ID",width:135},{default:b((a=>[k("a",{id:a.row.atKey,class:"attack-tool-anchor"},null,8,A),_(" "+w(a.row.atKey)+" ",1),h(c,{title:t.$t("relationMap"),class:"relation-map-icon",to:{name:"relation",params:{type:"attack-tool",key:a.row.atKey}}},{default:b((()=>[h(l,{width:"14px",height:"14px"})])),_:2},1032,["title","to"])])),_:1}),h(p,{prop:"title",label:t.$t("title"),width:150},null,8,["label"]),h(p,{prop:"description",label:t.$t("description")},null,8,["label"]),h(p,{label:t.$t("references"),width:300},{default:b((a=>[k("ul",null,[(K(!0),m(v,null,$(a.row.references,((e,l)=>(K(),m("li",{key:l},[k("a",{href:e.link,target:"_blank"},[h(D,null,{default:b((()=>[h(f(r))])),_:1}),_(w(t.$t(`BREAK.attackTools.${a.row.atKey}.references[${l}].title`)),1)],8,R)])))),128))])])),_:1},8,["label"]),h(p,{label:t.$t("risk")},{default:b((a=>[(K(!0),m(v,null,$(a.row.risks,(a=>(K(),j(z,{size:"small",key:a,onClick:e=>(E.value=a)&&(C.value=!0),class:"relational-link",round:""},{default:b((()=>[_(w(a+": "+t.$t(`BREAK.risks.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),h(p,{label:t.$t("avoidance")},{default:b((a=>[(K(!0),m(v,null,$(a.row.avoidances,(a=>(K(),j(z,{size:"small",key:a,class:"relational-link",onClick:e=>{B.value=a,g.value=!0},round:""},{default:b((()=>[_(w(a+": "+t.$t(`BREAK.avoidances.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"])])),_:1},8,["height","data"]),h(a,{onDrawerClose:s[0]||(s[0]=a=>g.value=!1),drawer:g.value,aKey:B.value},null,8,["drawer","aKey"]),h(e,{onDrawerClose:s[1]||(s[1]=a=>(C.value=!1)&&(E.value="")),drawer:C.value,rKey:E.value},null,8,["drawer","rKey"])],64)}}}),[["__scopeId","data-v-b3ac08d0"]]);export{g as default};