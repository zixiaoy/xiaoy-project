import{a8 as k,l as y,p as w,K as V,g as b,Q as P,ao as m,N as B}from"./quasar-1667446570254.js";import{r as C,o as _,B as K,f as c,e as v,aa as I,j as Q,q as A,k as N}from"./@vue-1667446570254.js";import{_ as T}from"./ZIXIAOY-1667446570254.js";import{u as M,i as j}from"./components-1667446570254.js";import{b as z}from"./vue-router-1667446570254.js";import"./package-1667446570254.js";import"./@intlify-1667446570254.js";import"./axios-1667446570254.js";import"./echarts-1667446570254.js";import"./zrender-1667446570254.js";function O(){const g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";this.encode=function(e){let o="",t,a,s,r,h,f,p,u=0;for(e=i(e);u<e.length;)t=e.charCodeAt(u++),a=e.charCodeAt(u++),s=e.charCodeAt(u++),r=t>>2,h=(t&3)<<4|a>>4,f=(a&15)<<2|s>>6,p=s&63,isNaN(a)?f=p=64:isNaN(s)&&(p=64),o=o+g.charAt(r)+g.charAt(h)+g.charAt(f)+g.charAt(p);return o},this.decode=function(e){let o="",t,a,s,r,h,f,p,u=0;for(e=e.replace(/[^A-Za-z0-9-_]/g,"");u<e.length;)r=g.indexOf(e.charAt(u++)),h=g.indexOf(e.charAt(u++)),f=g.indexOf(e.charAt(u++)),p=g.indexOf(e.charAt(u++)),t=r<<2|h>>4,a=(h&15)<<4|f>>2,s=(f&3)<<6|p,o=o+String.fromCharCode(t),f!==64&&(o=o+String.fromCharCode(a)),p!==64&&(o=o+String.fromCharCode(s));return o=$(o).replaceAll("\0",""),o};const i=function(e){e=e.replace(/\r\n/g,`
`);let o="";for(let t=0;t<e.length;t++){const a=e.charCodeAt(t);a<128?o+=String.fromCharCode(a):a>127&&a<2048?(o+=String.fromCharCode(a>>6|192),o+=String.fromCharCode(a&63|128)):(o+=String.fromCharCode(a>>12|224),o+=String.fromCharCode(a>>6&63|128),o+=String.fromCharCode(a&63|128))}return o},$=function(e){let o="",t,a,s,r=0;for(;r<e.length;)t=e.charCodeAt(r),t<128?(o+=String.fromCharCode(t),r++):t>191&&t<224?(a=e.charCodeAt(r+1),o+=String.fromCharCode((t&31)<<6|a&63),r+=2):(a=e.charCodeAt(r+1),s=e.charCodeAt(r+2),o+=String.fromCharCode((t&15)<<12|(a&63)<<6|s&63),r+=3);return o}}var S=new O;const U={class:"login-cls row justify-center"},q={class:"login-tools row justify-around q-pb-lg"},X={__name:"Login",setup(g){const i=C({}),$=C(!0),e=C(!1),o=C(!1),t=z(),a=C(null),s=C(null),r=C(null),h=()=>{$.value=!$.value};(()=>{const l=m.get("tenantId")||"fmbb",d=m.get("loginName")||"",n=S.decode(m.get("password")||"");o.value=Boolean(m.get("rememberMe")),i.value={loginName:d,password:n,tenantId:l}})();const p=()=>{o.value?(m.set("tenantId",i.value.tenantId,{expires:30}),m.set("loginName",i.value.loginName,{expires:30}),m.set("password",S.encode(i.value.password),{expires:30}),m.set("rememberMe",String(o.value),{expires:30})):(m.remove("tenantId"),m.remove("loginName"),m.remove("password"),m.remove("rememberMe"))},u=()=>{if(!a.value.validate())return a.value.focus();if(!r.value.validate())return r.value.focus();if(!s.value.validate())return s.value.focus();s.value.blur(),a.value.blur(),r.value.blur(),e.value=!e.value,p(),M().LoginByName(i.value).then(l=>{t.push("/");let d=setTimeout(()=>{B.create({position:"top-right",icon:"insert_emoticon",message:`Hi\uFF0C${l.nickName} ${j.t("WelcomeBack")}`,color:"positive",timeout:3e3,actions:[{icon:"close",color:"white"}]}),e.value=!e.value,clearTimeout(d),d=null},500)}).catch(()=>{e.value=!e.value})};return(l,d)=>(_(),K("div",U,[c(P,{class:"login-box shadow-8 column justify-center q-gutter-y-sm"},{default:v(()=>[c(k,{class:"login-logo text-uppercase",src:T},{error:v(()=>[c(y,{name:"self_improvement"})]),_:1}),c(w,{ref_key:"tenInput",ref:a,modelValue:i.value.tenantId,"onUpdate:modelValue":d[0]||(d[0]=n=>i.value.tenantId=n),loading:e.value,placeholder:`${l.$t("PleaseInput")} ${l.$t("AccountTip1")}`,readonly:e.value,rules:[n=>n&&n.length>0||`${l.$t("PleaseInput")} ${l.$t("Tenant")}${l.$t("No1")}`],dense:"","lazy-rules":"",onKeyup:I(u,["enter"])},{prepend:v(()=>[c(y,{name:"group"})]),_:1},8,["modelValue","loading","placeholder","readonly","rules","onKeyup"]),c(w,{ref_key:"nameInput",ref:r,modelValue:i.value.loginName,"onUpdate:modelValue":d[1]||(d[1]=n=>i.value.loginName=n),loading:e.value,placeholder:`${l.$t("PleaseInput")} ${l.$t("AccountTip1")}`,readonly:e.value,rules:[n=>n&&n.length>0||`${l.$t("PleaseInput")} ${l.$t("AccountTip1")}`],dense:"","lazy-rules":"",onKeyup:I(u,["enter"])},{prepend:v(()=>[c(y,{name:"account_circle"})]),_:1},8,["modelValue","loading","placeholder","readonly","rules","onKeyup"]),c(w,{ref_key:"pwdInput",ref:s,modelValue:i.value.password,"onUpdate:modelValue":d[2]||(d[2]=n=>i.value.password=n),loading:e.value,placeholder:`${l.$t("PleaseInput")} ${l.$t("Password")}`,readonly:e.value,rules:[n=>n&&n.length>0||`${l.$t("PleaseInput")} ${l.$t("Password")}`],type:$.value?"password":"text",dense:"","lazy-rules":"",onKeyup:I(u,["enter"])},{prepend:v(()=>[c(y,{name:"vpn_key"})]),append:v(()=>[c(y,{name:$.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:h},null,8,["name"])]),_:1},8,["modelValue","loading","placeholder","readonly","rules","type","onKeyup"]),Q("div",q,[c(V,{modelValue:o.value,"onUpdate:modelValue":d[3]||(d[3]=n=>o.value=n)},{default:v(()=>[A(N(l.$t("RememberMe")),1)]),_:1},8,["modelValue"]),c(b,{label:`${l.$t("Forget")}${l.$t("Password")}`,dense:"",flat:""},null,8,["label"])]),c(b,{loading:e.value,class:"bg-gc-primary text-subtitle2 text-weight-bold",push:"","text-color":"white",onClick:u},{default:v(()=>[A(N(`${l.$t("Login")}${l.$t("System")}`),1)]),_:1},8,["loading"])]),_:1})]))}};export{X as default};
