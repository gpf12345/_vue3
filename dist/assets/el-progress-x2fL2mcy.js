import{m as K,t as h,v as j,x as q,y as C,bP as Fe,bQ as ce,aI as Le,bR as pe,at as fe,az as ve,G as ee,o as g,z as E,F as v,e,g as N,A,D as L,al as W,a2 as k,c as D,b as T,B as Re,C as I,_ as H,I as ye,aB as me,aj as ge,ag as Q,bD as P,a0 as Te,r as he,a5 as _e,aL as Ue,aM as be,a4 as z,d as B,bS as De,bT as Oe,aY as Be,bU as Ne,O as je,bB as Y,bV as te,bW as Ae,bX as Ie,w as se,Q as Me,N as qe,S as ze,a1 as ae,J as oe}from"./index-Di_DMvaz.js";import{t as x,e as V,d as Ke}from"./_plugin-vue_export-helper-DDgKbKmR.js";import{l as He}from"./el-message-Dj9mS0Iy.js";import{i as We}from"./isEqual-C1l9RMS8.js";var Ve=1,Xe=4;function ne(a){return He(a,Ve|Xe)}const Ge=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:h(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:h([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:h(Function),default:a=>`${a}%`}}),Je=["aria-valuenow"],Qe={viewBox:"0 0 100 100"},Ye=["d","stroke","stroke-linecap","stroke-width"],Ze=["d","stroke","opacity","stroke-linecap","stroke-width"],xe={key:0},et=j({name:"ElProgress"}),tt=j({...et,props:Ge,setup(a){const t=a,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},i=q("progress"),p=C(()=>{const o={width:`${t.percentage}%`,animationDuration:`${t.duration}s`},$=F(t.percentage);return $.includes("gradient")?o.background=$:o.backgroundColor=$,o}),d=C(()=>(t.strokeWidth/t.width*100).toFixed(1)),y=C(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),S=C(()=>{const o=y.value,$=t.type==="dashboard";return`
          M 50 50
          m 0 ${$?"":"-"}${o}
          a ${o} ${o} 0 1 1 0 ${$?"-":""}${o*2}
          a ${o} ${o} 0 1 1 0 ${$?"":"-"}${o*2}
          `}),b=C(()=>2*Math.PI*y.value),w=C(()=>t.type==="dashboard"?.75:1),R=C(()=>`${-1*b.value*(1-w.value)/2}px`),m=C(()=>({strokeDasharray:`${b.value*w.value}px, ${b.value}px`,strokeDashoffset:R.value})),l=C(()=>({strokeDasharray:`${b.value*w.value*(t.percentage/100)}px, ${b.value}px`,strokeDashoffset:R.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),n=C(()=>{let o;return t.color?o=F(t.percentage):o=s[t.status]||s.default,o}),c=C(()=>t.status==="warning"?Fe:t.type==="line"?t.status==="success"?ce:Le:t.status==="success"?pe:fe),r=C(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),f=C(()=>t.format(t.percentage));function u(o){const $=100/o.length;return o.map((_,U)=>ee(_)?{color:_,percentage:(U+1)*$}:_).sort((_,U)=>_.percentage-U.percentage)}const F=o=>{var $;const{color:O}=t;if(ve(O))return O(o);if(ee(O))return O;{const _=u(O);for(const U of _)if(U.percentage>o)return U.color;return($=_[_.length-1])==null?void 0:$.color}};return(o,$)=>(g(),E("div",{class:v([e(i).b(),e(i).m(o.type),e(i).is(o.status),{[e(i).m("without-text")]:!o.showText,[e(i).m("text-inside")]:o.textInside}]),role:"progressbar","aria-valuenow":o.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[o.type==="line"?(g(),E("div",{key:0,class:v(e(i).b("bar"))},[N("div",{class:v(e(i).be("bar","outer")),style:A({height:`${o.strokeWidth}px`})},[N("div",{class:v([e(i).be("bar","inner"),{[e(i).bem("bar","inner","indeterminate")]:o.indeterminate},{[e(i).bem("bar","inner","striped")]:o.striped},{[e(i).bem("bar","inner","striped-flow")]:o.stripedFlow}]),style:A(e(p))},[(o.showText||o.$slots.default)&&o.textInside?(g(),E("div",{key:0,class:v(e(i).be("bar","innerText"))},[L(o.$slots,"default",{percentage:o.percentage},()=>[N("span",null,W(e(f)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),E("div",{key:1,class:v(e(i).b("circle")),style:A({height:`${o.width}px`,width:`${o.width}px`})},[(g(),E("svg",Qe,[N("path",{class:v(e(i).be("circle","track")),d:e(S),stroke:`var(${e(i).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":o.strokeLinecap,"stroke-width":e(d),fill:"none",style:A(e(m))},null,14,Ye),N("path",{class:v(e(i).be("circle","path")),d:e(S),stroke:e(n),fill:"none",opacity:o.percentage?1:0,"stroke-linecap":o.strokeLinecap,"stroke-width":e(d),style:A(e(l))},null,14,Ze)]))],6)),(o.showText||o.$slots.default)&&!o.textInside?(g(),E("div",{key:2,class:v(e(i).e("text")),style:A({fontSize:`${e(r)}px`})},[L(o.$slots,"default",{percentage:o.percentage},()=>[o.status?(g(),D(e(I),{key:1},{default:T(()=>[(g(),D(Re(e(c))))]),_:1})):(g(),E("span",xe,W(e(f)),1))])],6)):k("v-if",!0)],10,Je))}});var st=H(tt,[["__file","progress.vue"]]);const at=ye(st),ke=Symbol("uploadContextKey"),ot="ElUpload";class nt extends Error{constructor(t,s,i,p){super(t),this.name="UploadAjaxError",this.status=s,this.method=i,this.url=p}}function re(a,t,s){let i;return s.response?i=`${s.response.error||s.response}`:s.responseText?i=`${s.responseText}`:i=`fail to ${t.method} ${a} ${s.status}`,new nt(i,s.status,t.method,a)}function rt(a){const t=a.responseText||a.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const lt=a=>{typeof XMLHttpRequest>"u"&&x(ot,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=a.action;t.upload&&t.upload.addEventListener("progress",d=>{const y=d;y.percent=d.total>0?d.loaded/d.total*100:0,a.onProgress(y)});const i=new FormData;if(a.data)for(const[d,y]of Object.entries(a.data))me(y)&&y.length?i.append(d,...y):i.append(d,y);i.append(a.filename,a.file,a.file.name),t.addEventListener("error",()=>{a.onError(re(s,a,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return a.onError(re(s,a,t));a.onSuccess(rt(t))}),t.open(a.method,s,!0),a.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=a.headers||{};if(p instanceof Headers)p.forEach((d,y)=>t.setRequestHeader(y,d));else for(const[d,y]of Object.entries(p))ge(y)||t.setRequestHeader(d,String(y));return t.send(i),t},$e=["text","picture","picture-card"];let it=1;const Z=()=>Date.now()+it++,we=K({action:{type:String,default:"#"},headers:{type:h(Object)},method:{type:String,default:"post"},data:{type:h([Object,Function,Promise]),default:()=>Q({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:h(Array),default:()=>Q([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:h(Function),default:lt},disabled:Boolean,limit:Number}),ut=K({...we,beforeUpload:{type:h(Function),default:P},beforeRemove:{type:h(Function)},onRemove:{type:h(Function),default:P},onChange:{type:h(Function),default:P},onPreview:{type:h(Function),default:P},onSuccess:{type:h(Function),default:P},onProgress:{type:h(Function),default:P},onError:{type:h(Function),default:P},onExceed:{type:h(Function),default:P},crossorigin:{type:h(String)}}),dt=K({files:{type:h(Array),default:()=>Q([])},disabled:{type:Boolean,default:!1},handlePreview:{type:h(Function),default:P},listType:{type:String,values:$e,default:"text"},crossorigin:{type:h(String)}}),ct={remove:a=>!!a},pt=["onKeydown"],ft=["src","crossorigin"],vt=["onClick"],yt=["title"],mt=["onClick"],gt=["onClick"],ht=j({name:"ElUploadList"}),bt=j({...ht,props:dt,emits:ct,setup(a,{emit:t}){const s=a,{t:i}=Te(),p=q("upload"),d=q("icon"),y=q("list"),S=V(),b=he(!1),w=C(()=>[p.b("list"),p.bm("list",s.listType),p.is("disabled",s.disabled)]),R=m=>{t("remove",m)};return(m,l)=>(g(),D(Ne,{tag:"ul",class:v(e(w)),name:e(y).b()},{default:T(()=>[(g(!0),E(_e,null,Ue(m.files,n=>(g(),E("li",{key:n.uid||n.name,class:v([e(p).be("list","item"),e(p).is(n.status),{focusing:b.value}]),tabindex:"0",onKeydown:be(c=>!e(S)&&R(n),["delete"]),onFocus:l[0]||(l[0]=c=>b.value=!0),onBlur:l[1]||(l[1]=c=>b.value=!1),onClick:l[2]||(l[2]=c=>b.value=!1)},[L(m.$slots,"default",{file:n},()=>[m.listType==="picture"||n.status!=="uploading"&&m.listType==="picture-card"?(g(),E("img",{key:0,class:v(e(p).be("list","item-thumbnail")),src:n.url,crossorigin:m.crossorigin,alt:""},null,10,ft)):k("v-if",!0),n.status==="uploading"||m.listType!=="picture-card"?(g(),E("div",{key:1,class:v(e(p).be("list","item-info"))},[N("a",{class:v(e(p).be("list","item-name")),onClick:z(c=>m.handlePreview(n),["prevent"])},[B(e(I),{class:v(e(d).m("document"))},{default:T(()=>[B(e(De))]),_:1},8,["class"]),N("span",{class:v(e(p).be("list","item-file-name")),title:n.name},W(n.name),11,yt)],10,vt),n.status==="uploading"?(g(),D(e(at),{key:0,type:m.listType==="picture-card"?"circle":"line","stroke-width":m.listType==="picture-card"?6:2,percentage:Number(n.percentage),style:A(m.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:v(e(p).be("list","item-status-label"))},[m.listType==="text"?(g(),D(e(I),{key:0,class:v([e(d).m("upload-success"),e(d).m("circle-check")])},{default:T(()=>[B(e(ce))]),_:1},8,["class"])):["picture-card","picture"].includes(m.listType)?(g(),D(e(I),{key:1,class:v([e(d).m("upload-success"),e(d).m("check")])},{default:T(()=>[B(e(pe))]),_:1},8,["class"])):k("v-if",!0)],2),e(S)?k("v-if",!0):(g(),D(e(I),{key:2,class:v(e(d).m("close")),onClick:c=>R(n)},{default:T(()=>[B(e(fe))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(S)?k("v-if",!0):(g(),E("i",{key:3,class:v(e(d).m("close-tip"))},W(e(i)("el.upload.deleteTip")),3)),m.listType==="picture-card"?(g(),E("span",{key:4,class:v(e(p).be("list","item-actions"))},[N("span",{class:v(e(p).be("list","item-preview")),onClick:c=>m.handlePreview(n)},[B(e(I),{class:v(e(d).m("zoom-in"))},{default:T(()=>[B(e(Oe))]),_:1},8,["class"])],10,mt),e(S)?k("v-if",!0):(g(),E("span",{key:0,class:v(e(p).be("list","item-delete")),onClick:c=>R(n)},[B(e(I),{class:v(e(d).m("delete"))},{default:T(()=>[B(e(Be))]),_:1},8,["class"])],10,gt))],2)):k("v-if",!0)])],42,pt))),128)),L(m.$slots,"append")]),_:3},8,["class","name"]))}});var le=H(bt,[["__file","upload-list.vue"]]);const kt=K({disabled:{type:Boolean,default:!1}}),$t={file:a=>me(a)},wt=["onDrop","onDragover"],Ee="ElUploadDrag",Et=j({name:Ee}),St=j({...Et,props:kt,emits:$t,setup(a,{emit:t}){je(ke)||x(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=q("upload"),p=he(!1),d=V(),y=b=>{if(d.value)return;p.value=!1,b.stopPropagation();const w=Array.from(b.dataTransfer.files);t("file",w)},S=()=>{d.value||(p.value=!0)};return(b,w)=>(g(),E("div",{class:v([e(i).b("dragger"),e(i).is("dragover",p.value)]),onDrop:z(y,["prevent"]),onDragover:z(S,["prevent"]),onDragleave:w[0]||(w[0]=z(R=>p.value=!1,["prevent"]))},[L(b.$slots,"default")],42,wt))}});var Ct=H(St,[["__file","upload-dragger.vue"]]);const Pt=K({...we,beforeUpload:{type:h(Function),default:P},onRemove:{type:h(Function),default:P},onStart:{type:h(Function),default:P},onSuccess:{type:h(Function),default:P},onProgress:{type:h(Function),default:P},onError:{type:h(Function),default:P},onExceed:{type:h(Function),default:P}}),Ft=["onKeydown"],Lt=["name","multiple","accept"],Rt=j({name:"ElUploadContent",inheritAttrs:!1}),Tt=j({...Rt,props:Pt,setup(a,{expose:t}){const s=a,i=q("upload"),p=V(),d=Y({}),y=Y(),S=r=>{if(r.length===0)return;const{autoUpload:f,limit:u,fileList:F,multiple:o,onStart:$,onExceed:O}=s;if(u&&F.length+r.length>u){O(r,F);return}o||(r=r.slice(0,1));for(const _ of r){const U=_;U.uid=Z(),$(U),f&&b(U)}},b=async r=>{if(y.value.value="",!s.beforeUpload)return R(r);let f,u={};try{const o=s.data,$=s.beforeUpload(r);u=te(s.data)?ne(s.data):s.data,f=await $,te(s.data)&&We(o,u)&&(u=ne(s.data))}catch{f=!1}if(f===!1){s.onRemove(r);return}let F=r;f instanceof Blob&&(f instanceof File?F=f:F=new File([f],r.name,{type:r.type})),R(Object.assign(F,{uid:r.uid}),u)},w=async(r,f)=>ve(r)?r(f):r,R=async(r,f)=>{const{headers:u,data:F,method:o,withCredentials:$,name:O,action:_,onProgress:U,onSuccess:Se,onError:Ce,httpRequest:Pe}=s;try{f=await w(f??F,r)}catch{s.onRemove(r);return}const{uid:X}=r,G={headers:u||{},withCredentials:$,file:r,data:f,method:o,filename:O,action:_,onProgress:M=>{U(M,r)},onSuccess:M=>{Se(M,r),delete d.value[X]},onError:M=>{Ce(M,r),delete d.value[X]}},J=Pe(G);d.value[X]=J,J instanceof Promise&&J.then(G.onSuccess,G.onError)},m=r=>{const f=r.target.files;f&&S(Array.from(f))},l=()=>{p.value||(y.value.value="",y.value.click())},n=()=>{l()};return t({abort:r=>{Ae(d.value).filter(r?([u])=>String(r.uid)===u:()=>!0).forEach(([u,F])=>{F instanceof XMLHttpRequest&&F.abort(),delete d.value[u]})},upload:b}),(r,f)=>(g(),E("div",{class:v([e(i).b(),e(i).m(r.listType),e(i).is("drag",r.drag)]),tabindex:"0",onClick:l,onKeydown:be(z(n,["self"]),["enter","space"])},[r.drag?(g(),D(Ct,{key:0,disabled:e(p),onFile:S},{default:T(()=>[L(r.$slots,"default")]),_:3},8,["disabled"])):L(r.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:y,class:v(e(i).e("input")),name:r.name,multiple:r.multiple,accept:r.accept,type:"file",onChange:m,onClick:f[0]||(f[0]=z(()=>{},["stop"]))},null,42,Lt)],42,Ft))}});var ie=H(Tt,[["__file","upload-content.vue"]]);const ue="ElUpload",de=a=>{var t;(t=a.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(a.url)},_t=(a,t)=>{const s=Ie(a,"fileList",void 0,{passive:!0}),i=l=>s.value.find(n=>n.uid===l.uid);function p(l){var n;(n=t.value)==null||n.abort(l)}function d(l=["ready","uploading","success","fail"]){s.value=s.value.filter(n=>!l.includes(n.status))}const y=(l,n)=>{const c=i(n);c&&(console.error(l),c.status="fail",s.value.splice(s.value.indexOf(c),1),a.onError(l,c,s.value),a.onChange(c,s.value))},S=(l,n)=>{const c=i(n);c&&(a.onProgress(l,c,s.value),c.status="uploading",c.percentage=Math.round(l.percent))},b=(l,n)=>{const c=i(n);c&&(c.status="success",c.response=l,a.onSuccess(l,c,s.value),a.onChange(c,s.value))},w=l=>{ge(l.uid)&&(l.uid=Z());const n={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(a.listType==="picture-card"||a.listType==="picture")try{n.url=URL.createObjectURL(l)}catch(c){Ke(ue,c.message),a.onError(c,n,s.value)}s.value=[...s.value,n],a.onChange(n,s.value)},R=async l=>{const n=l instanceof File?i(l):l;n||x(ue,"file to be removed not found");const c=r=>{p(r);const f=s.value;f.splice(f.indexOf(r),1),a.onRemove(r,f),de(r)};a.beforeRemove?await a.beforeRemove(n,s.value)!==!1&&c(n):c(n)};function m(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var n;return l&&((n=t.value)==null?void 0:n.upload(l))})}return se(()=>a.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(n=>{const{raw:c,url:r}=n;if(!r&&c)try{n.url=URL.createObjectURL(c)}catch(f){a.onError(f,n,s.value)}return n}))}),se(s,l=>{for(const n of l)n.uid||(n.uid=Z()),n.status||(n.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:p,clearFiles:d,handleError:y,handleProgress:S,handleStart:w,handleSuccess:b,handleRemove:R,submit:m,revokeFileObjectURL:de}},Ut=j({name:"ElUpload"}),Dt=j({...Ut,props:ut,setup(a,{expose:t}){const s=a,i=V(),p=Y(),{abort:d,submit:y,clearFiles:S,uploadFiles:b,handleStart:w,handleError:R,handleRemove:m,handleSuccess:l,handleProgress:n,revokeFileObjectURL:c}=_t(s,p),r=C(()=>s.listType==="picture-card"),f=C(()=>({...s,fileList:b.value,onStart:w,onProgress:n,onSuccess:l,onError:R,onRemove:m}));return Me(()=>{b.value.forEach(c)}),qe(ke,{accept:ze(s,"accept")}),t({abort:d,submit:y,clearFiles:S,handleStart:w,handleRemove:m}),(u,F)=>(g(),E("div",null,[e(r)&&u.showFileList?(g(),D(le,{key:0,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({append:T(()=>[B(ie,oe({ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?L(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?L(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[u.$slots.file?{name:"default",fn:T(({file:o})=>[L(u.$slots,"file",{file:o})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0),!e(r)||e(r)&&!u.showFileList?(g(),D(ie,oe({key:1,ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?L(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?L(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),u.$slots.trigger?L(u.$slots,"default",{key:2}):k("v-if",!0),L(u.$slots,"tip"),!e(r)&&u.showFileList?(g(),D(le,{key:3,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({_:2},[u.$slots.file?{name:"default",fn:T(({file:o})=>[L(u.$slots,"file",{file:o})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0)]))}});var Ot=H(Dt,[["__file","upload.vue"]]);const It=ye(Ot);export{It as E};
