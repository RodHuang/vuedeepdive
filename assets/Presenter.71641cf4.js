import{o as p,c as g,a as t,r as w,u as P,b as _,d as $,i as S,e as C,n as f,t as A,f as y,g as k,h as o,_ as R,j as L,k as I,l as H,m as D,p as j,q as E,s as F,v as U,w as W,x as m,y as T,z as q,A as V,B as z,C as B,D as O,E as Y,F as b,G as Z,H as G,I as J,J as K,K as Q,L as N,M as X,N as tt,O as et,P as ot,Q as at,R as st,S as nt,T as it,U as rt,V as lt,W as ct}from"./index.19946ec0.js";const dt={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ut=t("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),mt=[ut];function pt(e,s){return p(),g("svg",dt,mt)}var vt={name:"carbon-renew",render:pt};const gt={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_t=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ft=t("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),ht=[_t,ft];function xt(e,s){return p(),g("svg",gt,ht)}var bt={name:"carbon-time",render:xt},wt="/vuedeepdive/assets/logo-title-horizontal.96c3c915.png";function yt(){const e=w(Date.now()),s=P({interval:1e3}),d=_(()=>{const a=(s.value-e.value)/1e3,i=Math.floor(a%60).toString().padStart(2,"0");return`${Math.floor(a/60).toString().padStart(2,"0")}:${i}`});function r(){e.value=s.value}return{timer:d,resetTimer:r}}const kt=["innerHTML"],$t=["textContent"],St=$({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(e){const s=e;return S(C),(d,r)=>e.noteHtml?(p(),g("div",{key:0,class:f(["prose overflow-auto outline-none",s.class]),onClick:r[0]||(r[0]=a=>d.$emit("click")),innerHTML:e.noteHtml},null,10,kt)):(p(),g("div",{key:1,class:f(["prose overflow-auto outline-none",s.class]),onClick:r[1]||(r[1]=a=>d.$emit("click")),textContent:A(e.note)},null,10,$t))}}),Ct=$({__name:"NoteStatic",props:{class:null},setup(e){const s=e;S(C);const d=_(()=>{var a,i,n;return(n=(i=(a=y.value)==null?void 0:a.meta)==null?void 0:i.slide)==null?void 0:n.note}),r=_(()=>{var a,i,n;return(n=(i=(a=y.value)==null?void 0:a.meta)==null?void 0:i.slide)==null?void 0:n.notesHTML});return(a,i)=>(p(),k(St,{class:f(s.class),note:o(d),"note-html":o(r)},null,8,["class","note","note-html"]))}});const h=e=>(K("data-v-2169a876"),e=e(),Q(),e),Mt={class:"bg-main h-full slidev-presenter"},Ht={class:"grid-container"},Tt={class:"grid-section top flex"},Vt=h(()=>t("img",{src:wt,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),zt=h(()=>t("div",{class:"flex-auto"},null,-1)),Bt={class:"text-2xl pl-2 pr-6 my-auto"},Nt=h(()=>t("div",{class:"context"}," current ",-1)),At={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Pt=h(()=>t("div",{class:"context"}," next ",-1)),Rt={class:"grid-section note overflow-auto"},Lt={class:"grid-section bottom"},It={class:"progress-bar"},Dt=$({__name:"Presenter",setup(e){S(C);const s=w();L(),I(s);const d=H.titleTemplate.replace("%s",H.title||"Slidev");D({title:`Presenter - ${d}`});const{timer:r,resetTimer:a}=yt(),i=w([]),n=_(()=>N.value<X.value?{route:y.value,clicks:N.value+1}:tt.value?{route:et.value,clicks:0}:null);return j(()=>{const M=s.value.querySelector("#slide-content"),c=E(F()),x=U();W(()=>{if(!x.value||at.value||!st.value)return;const u=M.getBoundingClientRect(),l=(c.x-u.left)/u.width*100,v=(c.y-u.top)/u.height*100;if(!(l<0||l>100||v<0||v>100))return{x:l,y:v}},u=>{ot.cursor=u})}),(M,c)=>{const x=bt,u=vt;return p(),g(J,null,[t("div",Mt,[t("div",Ht,[t("div",Tt,[Vt,zt,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:c[0]||(c[0]=(...l)=>o(a)&&o(a)(...l))},[m(x,{class:"absolute"}),m(u,{class:"absolute opacity-0"})]),t("div",Bt,A(o(r)),1)]),t("div",{ref_key:"main",ref:s,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:T(o(q))},[m(z,{key:"main",class:"h-full w-full"},{default:V(()=>[m(nt,{context:"presenter"})]),_:1}),Nt],4),t("div",At,[o(n)?(p(),k(z,{key:"next",class:"h-full w-full"},{default:V(()=>{var l;return[m(o(rt),{is:(l=o(n).route)==null?void 0:l.component,"clicks-elements":i.value,"onUpdate:clicks-elements":c[1]||(c[1]=v=>i.value=v),clicks:o(n).clicks,"clicks-disabled":!1,class:f(o(it)(o(n).route)),route:o(n).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):B("v-if",!0),Pt]),t("div",Rt,[(p(),k(Ct,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),t("div",Lt,[m(lt,{persist:!0})]),B("v-if",!0)]),t("div",It,[t("div",{class:"progress h-2px bg-primary transition-all",style:T({width:`${(o(O)-1)/(o(Y)-1)*100}%`})},null,4)])]),m(ct),m(G,{modelValue:o(b),"onUpdate:modelValue":c[2]||(c[2]=l=>Z(b)?b.value=l:null)},null,8,["modelValue"])],64)}}});var Et=R(Dt,[["__scopeId","data-v-2169a876"]]);export{Et as default};
