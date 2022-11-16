import{g as u,i as d,s as l,r as w,_ as P,z as R,f as s,h as C}from"./components-1668579305603.js";import{a3 as B,n as A,a5 as _,e as D,f as k,h as I,a as O,X as T,$ as V}from"./@vue-1668579305603.js";/* empty css                     */import{aj as f,ak as g,al as $,am as L,an as j,ao as G,ap as b,aq as x,ar as M,as as U,at as H,D as N,c as Q,P as q,N as z,a as F}from"./quasar-1668579305603.js";import{d as X,e as J}from"./package-1668579305603.js";import{u as K,c as W,a as Y}from"./vue-router-1668579305603.js";import"./axios-1668579305603.js";import"./echarts-1668579305603.js";import"./zrender-1668579305603.js";import"./xlsx-1668579305603.js";import"./@intlify-1668579305603.js";const a={primary:"#0055E2",positive:"#21BA45",negative:"#C10015",info:"#004559",warning:"#FFAE01"},{luminosity:Z}=G,tt=window.matchMedia("(prefers-color-scheme: dark)").matches,et=X("systemSetting",{state:()=>{var t,e;return{primaryBG:u("primaryBG","L")||a.primary,positiveBG:u("positiveBG","L")||a.positive,negativeBG:u("negativeBG","L")||a.negative,infoBG:u("infoBG","L")||a.info,warningBG:u("warningBG","L")||a.warning,isDark:(t=u("isDark","L"))!=null?t:tt,isDense:(e=u("isDense","L"))!=null?e:!0,locale:u("locale","L")||d.locale}},getters:{BgToColor:t=>e=>Z(t[e+"BG"])<=.4?"white":"dark"},actions:{setColor(t,e){f(e,t),e+="BG",this[e]=t,l(e,t,"L")},setLocale(t=this.locale){this.locale=t,d.locale=t,t==="EN_US"?g.lang.set($,""):g.lang.set(L,""),l("locale",t,"L")},setInitColor(){for(const t in a)f(t,this[`${t}BG`])},setDark(t){this.isDark=t,this.toggleDark(),l("isDark",t,"L")},toggleDark(){j.set(this.isDark)},setDense(t){this.isDense=t,l("isDense",t,"L")},resetSetting(){this.isDense=!0,w("isDense","L");for(const t in a){const e=`${t}BG`;this[e]=a[t],w(e,"L"),f(t,a[t])}}}}),rt=B({name:"App",setup(){const t=et();A(()=>{const o=document.getElementById("appLoading");o&&o.remove()}),_("BgToColor",t.BgToColor),_("isDark",D(()=>t.isDark)),_("isDense",D(()=>t.isDense));const e=K();b(()=>{const o=(e.meta||{})[R("menuZhCn")];if(o)return{title:`${o}\uFF5CXIAOY`}}),t.toggleDark(),t.setInitColor()}});function nt(t,e,o,r,n,c){const m=k("router-view");return O(),I(m)}var ot=P(rt,[["render",nt]]),h=x(()=>J());const y={path:"/",component:()=>s(()=>import("./MainLayout-1668579305603.js"),["assets/MainLayout-1668579305603.js","assets/MainLayout-1668579305603.css","assets/@quasar-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js","assets/vue-router-1668579305603.js","assets/ZIXIAOY-1668579305603.js"]),children:[]},E={"/src/views/Developing.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.D}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/DictDataCfg.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.a}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/DistributionRoles.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.b}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/ServiceRole.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.S}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/authMenu.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.c}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/authRole.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.d}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/cfgDict.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.e}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/memberOrg.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.m}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/memberPost.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.f}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/memberUser.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.g}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),"/src/views/SystemCtr/operLog.vue":()=>s(()=>import("./views-1668579305603.js").then(function(t){return t.o}),["assets/views-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"])};function st(t=[],e){const o=t.length;for(let r=0;r<o;r++){const n={...t[r]};if(n.path){const c=E[`/src/views${n.path}.vue`];n.component=c||E["/src/views/Developing.vue"]}y.children.push(n)}e.addRoute(y)}var v=M(function(){const e=W({scrollBehavior:()=>({left:0,top:0}),routes:C,history:Y("/")}),o=u("listMenus");return o&&st(o,e),e});async function it(t,e){const o=t(ot);o.use(g,e);const r=typeof h=="function"?await h({}):h;o.use(r);const n=T(typeof v=="function"?await v({store:r}):v);return r.use(({store:c})=>{c.router=n}),{app:o,store:r,router:n}}var at={config:{loadingBar:{color:"primary",size:"5px"},notify:{classes:"glossy",position:"top",timeout:3e3,progress:!0,actions:[{icon:"close",color:"white"}]}},lang:L,plugins:{AppFullscreen:U,Cookies:H,Dialog:N,LoadingBar:Q,LocalStorage:q,Notify:z,SessionStorage:F}};const ut="/";async function ct({app:t,router:e,store:o},r){let n=!1;const c=i=>{try{return e.resolve(i).href}catch{}return Object(i)===i?null:i},m=i=>{if(n=!0,typeof i=="string"&&/^https?:\/\//.test(i)){window.location.href=i;return}const p=c(i);p!==null&&(window.location.href=p,window.location.reload())},S=window.location.href.replace(window.location.origin,"");for(let i=0;n===!1&&i<r.length;i++)try{await r[i]({app:t,router:e,store:o,ssrContext:null,redirect:m,urlPath:S,publicPath:ut})}catch(p){if(p&&p.url){m(p.url);return}console.error("[Quasar] boot error:",p);return}n!==!0&&(t.use(e),t.mount("#q-app"))}it(V,at).then(t=>{const[e,o]=Promise.allSettled!==void 0?["allSettled",r=>r.map(n=>{if(n.status==="rejected"){console.error("[Quasar] boot error:",n.reason);return}return n.value.default})]:["all",r=>r.map(n=>n.default)];return Promise[e]([s(()=>import("./components-1668579305603.js").then(function(r){return r.k}),["assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"]),s(()=>import("./main-1668579305603.js"),["assets/main-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js","assets/views-1668579305603.js"]),s(()=>import("./router-1668579305603.js"),["assets/router-1668579305603.js","assets/quasar-1668579305603.js","assets/quasar-1668579305603.css","assets/@vue-1668579305603.js","assets/components-1668579305603.js","assets/components-1668579305603.css","assets/package-1668579305603.js","assets/package-1668579305603.css","assets/@intlify-1668579305603.js","assets/axios-1668579305603.js","assets/echarts-1668579305603.js","assets/zrender-1668579305603.js","assets/xlsx-1668579305603.js"])]).then(r=>{const n=o(r).filter(c=>typeof c=="function");ct(t,n)})});export{st as d,et as u};
