import{i as a,_ as t}from"./index-cgsJDTSi.js";/* empty css                        *//* empty css                    */import{B as e}from"./BREAK-KbUlqR6P.js";import{e as i,w as s,n as r,x as l}from"./element-plus-DxuawtAF.js";import{a as o}from"./vue-router-mKocEu41.js";import{d as p,q as n,t as d,Z as u,l as m,W as c,u as b,a7 as h,F as f,ab as y,m as v,ai as w,al as K,am as _}from"./vue-rmd1cPzt.js";import"./relation-graph-aM9PJqhq.js";import"./vue-i18n-UgkcYfIM.js";import"./BREAK-Risks-LCDxJxth.js";import"./BREAK-Avoidances-Wmk5ZIWy.js";const g=["id"],A={class:"aLogo"},j=["src"],$=["href"],B=["href"],k={class:"commit-new-provider"},R={href:"https://github.com/JDArmy/BREAK/issues",target:"_blank"},E=(a=>(K("data-v-bcf5f9ac"),a=a(),_(),a))((()=>d("div",null,"参考：src/BREAK/ability-providers/AP****.json 文件格式。",-1))),P=t(p({__name:"AbilityProvidersView",setup(t){const p=o();let K=Object.keys(e.abilityProviders).map((a=>({apKey:a,...e.abilityProviders[a]})));const _=({row:a})=>p.hash.split("#")[1]===a.apKey?"anchor-row":"";return(t,e)=>{const o=l,P=i,x=y("router-link"),D=s;return v(),n(f,null,[d("h3",null,u(t.$t("abilityProviders")),1),m(D,{height:p.hash.split("#")[1]?"unset":window.innerHeight-200,"row-class-name":_,data:b(K),border:"",stripe:""},{default:c((()=>[m(o,{prop:"logo",width:"150",label:t.$t("logo")},{default:c((a=>[d("a",{id:a.row.apKey,class:"ability-provider-anchor"},null,8,g),d("div",A,[d("img",{src:a.row.logoBase64},null,8,j)])])),_:1},8,["label"]),m(o,{prop:"title",width:"135",label:t.$t("title")},{default:c((e=>[d("a",{href:e.row.site,target:"_blank"},[m(P,null,{default:c((()=>[m(b(r))])),_:1}),h(u(e.row.apKey?t.$t(`BREAK.abilityProviders.${e.row.apKey}.title`):""),1)],8,$),m(x,{title:t.$t("relationMap"),class:"relation-map-icon",to:{name:"relation",params:{type:"ability-provider",key:e.row.apKey}}},{default:c((()=>[m(a,{width:"14px",height:"14px"})])),_:2},1032,["title","to"])])),_:1},8,["label"]),m(o,{prop:"abilities",label:t.$t("supportAbilities")},{default:c((a=>[(v(!0),n(f,null,w(a.row.abilities,((a,e)=>(v(),n("span",{class:"provider-abilities",key:e},[d("a",{href:a.link,target:"_blank"},[m(P,null,{default:c((()=>[m(b(r))])),_:1}),h(u(t.$t(`BREAK.avoidances.${e}.title`)),1)],8,B)])))),128))])),_:1},8,["label"]),m(o,{prop:"description",label:t.$t("description")},{default:c((a=>[h(u(a.row.apKey?t.$t(`BREAK.abilityProviders.${a.row.apKey}.description`):""),1)])),_:1},8,["label"])])),_:1},8,["height","data"]),d("div",k,[h(u(t.$t("commitNewProvider"))+": ",1),d("a",R,[m(P,null,{default:c((()=>[m(b(r))])),_:1}),h("https://github.com/JDArmy/BREAK/issues ")]),E])],64)}}}),[["__scopeId","data-v-bcf5f9ac"]]);export{P as default};