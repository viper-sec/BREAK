import{R as a,a as e,i as l,_ as t}from"./index-cgsJDTSi.js";/* empty css                        *//* empty css                    */import{B as s}from"./BREAK-KbUlqR6P.js";import{w as r,n as o,x as i,o as n,e as u}from"./element-plus-DxuawtAF.js";import{a as c}from"./vue-router-mKocEu41.js";import{d,b as p,q as k,t as h,Z as m,l as w,W as b,u as f,F as y,ab as K,m as v,a7 as $,ai as A,V as _,S as j}from"./vue-rmd1cPzt.js";import"./relation-graph-aM9PJqhq.js";import"./vue-i18n-UgkcYfIM.js";import"./BREAK-Risks-LCDxJxth.js";import"./BREAK-Avoidances-Wmk5ZIWy.js";const R=["id"],B={class:"reference-list"},C=["href"],g=t(d({__name:"ThreatActorsView",setup(t){const d=c(),g=p(!1),x=p(""),E=p(!1),T=p("");let z=Object.keys(s.threatActors).map((a=>({taKey:a,...s.threatActors[a]})));const D=({row:a})=>d.hash.split("#")[1]===a.taKey?"anchor-row":"";return(t,s)=>{const c=K("router-link"),p=i,I=n,M=u,V=r;return v(),k(y,null,[h("h3",null,m(t.$t("threatActors")),1),w(V,{height:d.hash.split("#")[1]?"unset":window.innerHeight-200,"scrollbar-always-on":!0,data:f(z),"row-class-name":D,border:"",stripe:""},{default:b((()=>[w(p,{prop:"taKey",width:"135",label:t.$t("ID")},{default:b((a=>[h("a",{id:a.row.taKey,class:"threat-actor-anchor"},null,8,R),$(" "+m(a.row.taKey)+" ",1),w(c,{title:t.$t("relationMap"),class:"relation-map-icon",to:{name:"relation",params:{type:"threat-actor",key:a.row.taKey}}},{default:b((()=>[w(l,{width:"14px",height:"14px"})])),_:2},1032,["title","to"])])),_:1},8,["label"]),w(p,{prop:"title",width:"150",label:t.$t("title")},null,8,["label"]),w(p,{prop:"description",label:t.$t("description")},null,8,["label"]),w(p,{label:t.$t("buildAttackTools")},{default:b((a=>[(v(!0),k(y,null,A(a.row.buildAttackTools,(a=>(v(),_(I,{size:"small",key:a,onClick:e=>(x.value=a)&&(g.value=!0),class:"relational-link",round:""},{default:b((()=>[$(m(a+": "+t.$t(`BREAK.attackTools.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),w(p,{label:t.$t("useAttackTools")},{default:b((a=>[(v(!0),k(y,null,A(a.row.useAttackTools,(a=>(v(),_(I,{size:"small",key:a,onClick:e=>(x.value=a)&&(g.value=!0),class:"relational-link",round:""},{default:b((()=>[$(m(a+": "+t.$t(`BREAK.attackTools.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),w(p,{label:t.$t("risksMaker")},{default:b((a=>[(v(!0),k(y,null,A(a.row.makeRisks,(a=>(v(),_(I,{size:"small",key:a,onClick:e=>(T.value=a)&&(E.value=!0),class:"relational-link",round:""},{default:b((()=>[$(m(a+": "+t.$t(`BREAK.risks.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),w(p,{width:"250px",label:t.$t("references")},{default:b((a=>[h("ul",B,[(v(!0),k(y,null,A(a.row.references,((e,l)=>(v(),k("li",{key:l},[a.row.taKey?(v(),k("a",{key:0,href:e.link,target:"_blank"},[w(M,null,{default:b((()=>[w(f(o))])),_:1}),$(m(t.$t(`BREAK.threatActors.${a.row.taKey}.references[${l}].title`)),1)],8,C)):j("",!0)])))),128))])])),_:1},8,["label"])])),_:1},8,["height","data"]),w(a,{onDrawerClose:s[0]||(s[0]=a=>(E.value=!1)&&(T.value="")),drawer:E.value,rKey:T.value},null,8,["drawer","rKey"]),w(e,{onDrawerClose:s[1]||(s[1]=a=>g.value=!1),drawer:g.value,atKey:x.value},null,8,["drawer","atKey"])],64)}}}),[["__scopeId","data-v-060a401b"]]);export{g as default};