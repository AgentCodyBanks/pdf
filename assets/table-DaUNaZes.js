import{a as $}from"./index-DW_MHI2K.js";import{_ as C,r as i,o as S,c as f,E as V,a as o,w as c,b as s,d,e as L,f as M,t as x,F as m,g as _,h as b,n as w}from"./index-BsND9XHc.js";const R={class:"line-div"},j={class:"line-name"},z={__name:"table",setup(G){const N=i(null),u=i(2),h=i([]),n=i([]),y=()=>{$.get("http://cons-scheme.ncvanger.com/prod-api/api/project/pdf/previewGunter/25020822070001").then(e=>{console.log("res-------",e.data.data),h.value=e.data.data.datas,n.value=e.data.data.xtimes,u.value=e.data.data.xtimeType})};S(()=>{y()});const k=e=>{let t=0;if(u.value==2)t=Number((e/(n.value.length*30)).toFixed(2))*100;else{let a=0;n.value.forEach(l=>{a+=l.chil.length}),t=Number((e/(a*30)).toFixed(2))*100}return`${t}%`},F=e=>{let t=0;if(u.value==2)t=Number(((e.end-e.stare)/(n.value.length*30)).toFixed(2))*100;else{let a=0;n.value.forEach(l=>{a+=l.chil.length}),t=Number(((e.end-e.stare)/(a*30)).toFixed(2))*100}return`${t}%`},E=({row:e,column:t,rowIndex:a,columnIndex:l})=>{if(l>4)if(l==5){let r=0;return n.value.forEach(p=>{r+=p.chil.length}),[1,r]}else return[0,0]};return(e,t)=>{const a=L,l=V;return o(),f(l,{data:h.value,ref_key:"tableRef",ref:N,"span-method":E,border:"",style:{width:"100%"},class:"tableClass"},{default:c(()=>[s(a,{prop:"id",label:"编号",fixed:"",align:"center"},{default:c(r=>[M(x(r.$index+1),1)]),_:1}),s(a,{prop:"workName",label:"工作名称",fixed:"",align:"center"}),s(a,{prop:"keepDays",label:"持续时间",fixed:"",align:"center"}),s(a,{prop:"startDate",label:"开始时间",fixed:"",align:"center"}),s(a,{prop:"endDate",label:"结束时间",fixed:"",align:"center"}),(o(!0),d(m,null,_(n.value,(r,p)=>(o(),f(a,{key:p,label:r.time,align:"center"},{default:c(()=>[(o(!0),d(m,null,_(r.chil,(D,T)=>(o(),f(a,{key:T,label:D,align:"center"},{default:c(g=>[b("div",R,[(o(!0),d(m,null,_(g.row.time,(v,B)=>(o(),d("div",{key:B,style:w(`left:${k(v.stare)}`),class:"line-item"},[b("div",{style:w(`width:${F(v)}`),class:"line-progress"},[b("div",j,x(g.row.workName),1)],4)],4))),128))])]),_:2},1032,["label"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["data"])}}},A=C(z,[["__scopeId","data-v-d4ff86bc"]]);export{A as default};
