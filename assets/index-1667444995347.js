import{R as m,m as u,n as c,_ as l}from"./src-1667444995347.js";import{V as d,Z as g}from"./@vue-1667444995347.js";/* empty css                     */import{ae as h,ag as _,au as w,aB as P,ab as y,aa as R,a6 as v,a9 as A,a7 as E}from"./quasar-1667444995347.js";import"./vue-router-1667444995347.js";import"./components-1667444995347.js";import"./zrender-1667444995347.js";import"./package-1667444995347.js";import"./@intlify-1667444995347.js";import"./echarts-1667444995347.js";import"./axios-1667444995347.js";async function S(a,n){const i=a(m);i.use(h,n);const t=typeof u=="function"?await u({}):u;i.use(t);const o=d(typeof c=="function"?await c({store:t}):c);return t.use(({store:s})=>{s.router=o}),{app:i,store:t,router:o}}var b={config:{loadingBar:{color:"primary",size:"5px"},notify:{position:"top",timeout:3e3}},lang:_,plugins:{AppFullscreen:w,Cookies:P,Dialog:y,LoadingBar:R,LocalStorage:v,Notify:A,SessionStorage:E}};const L="/";async function O({app:a,router:n,store:i},t){let o=!1;const s=r=>{try{return n.resolve(r).href}catch{}return Object(r)===r?null:r},p=r=>{if(o=!0,typeof r=="string"&&/^https?:\/\//.test(r)){window.location.href=r;return}const e=s(r);e!==null&&(window.location.href=e,window.location.reload())},f=window.location.href.replace(window.location.origin,"");for(let r=0;o===!1&&r<t.length;r++)try{await t[r]({app:a,router:n,store:i,ssrContext:null,redirect:p,urlPath:f,publicPath:L})}catch(e){if(e&&e.url){p(e.url);return}console.error("[Quasar] boot error:",e);return}o!==!0&&(a.use(n),a.mount("#q-app"))}S(g,b).then(a=>{const[n,i]=Promise.allSettled!==void 0?["allSettled",t=>t.map(o=>{if(o.status==="rejected"){console.error("[Quasar] boot error:",o.reason);return}return o.value.default})]:["all",t=>t.map(o=>o.default)];return Promise[n]([l(()=>import("./src-1667444995347.js").then(function(t){return t.o}),["assets/src-1667444995347.js","assets/src-1667444995347.css","assets/quasar-1667444995347.js","assets/quasar-1667444995347.css","assets/@vue-1667444995347.js","assets/vue-router-1667444995347.js","assets/components-1667444995347.js","assets/components-1667444995347.css","assets/zrender-1667444995347.js","assets/package-1667444995347.js","assets/@intlify-1667444995347.js","assets/echarts-1667444995347.js","assets/axios-1667444995347.js"]),l(()=>import("./src-1667444995347.js").then(function(t){return t.q}),["assets/src-1667444995347.js","assets/src-1667444995347.css","assets/quasar-1667444995347.js","assets/quasar-1667444995347.css","assets/@vue-1667444995347.js","assets/vue-router-1667444995347.js","assets/components-1667444995347.js","assets/components-1667444995347.css","assets/zrender-1667444995347.js","assets/package-1667444995347.js","assets/@intlify-1667444995347.js","assets/echarts-1667444995347.js","assets/axios-1667444995347.js"]),l(()=>import("./src-1667444995347.js").then(function(t){return t.s}),["assets/src-1667444995347.js","assets/src-1667444995347.css","assets/quasar-1667444995347.js","assets/quasar-1667444995347.css","assets/@vue-1667444995347.js","assets/vue-router-1667444995347.js","assets/components-1667444995347.js","assets/components-1667444995347.css","assets/zrender-1667444995347.js","assets/package-1667444995347.js","assets/@intlify-1667444995347.js","assets/echarts-1667444995347.js","assets/axios-1667444995347.js"])]).then(t=>{const o=i(t).filter(s=>typeof s=="function");O(a,o)})});
