import{l as y}from"./components-1668577893034.js";import{O as E,b as _}from"./quasar-1668577893034.js";import{_ as g}from"./views-1668577893034.js";import"./@vue-1668577893034.js";import"./package-1668577893034.js";import"./@intlify-1668577893034.js";import"./axios-1668577893034.js";import"./echarts-1668577893034.js";import"./zrender-1668577893034.js";import"./xlsx-1668577893034.js";const{height:L,width:H}=E;var N={name:"drag",inserted:(o,t)=>{if(t.value===!1){o.style.cursor=t.value&&t.value.cursor?t.value.cursor:"default";return}o.style.cursor=t.value&&t.value.cursor?t.value.cursor:"move";const e=o.parentNode;e.style.position="absolute",!t.oldValue&&t.value&&(e.style.top==="0px"&&(e.style.top=`calc(50% - ${L(e)/2}px)`),e.style.left==="0px"&&(e.style.left=`calc(50% - ${H(e)/2}px)`)),getComputedStyle(e.parentNode,null).position==="static"&&(e.parentNode.style.position="relative");const r=s=>{let i=null;t.modifiers.shaow&&(i=e.cloneNode(!0),e.style.opacity="0.5",e.parentNode.appendChild(i));let v,p;t.modifiers.dragY||(v=(s.touches?s.touches[0].clientX:s.clientX)-e.offsetLeft),t.modifiers.dragX||(p=(s.touches?s.touches[0].clientY:s.clientY)-e.offsetTop);const c=l=>{l.touches||l.preventDefault();let u=(l.touches?l.touches[0].clientX:l.clientX)-v,a=(l.touches?l.touches[0].clientY:l.clientY)-p;const f=t.value&&t.value.dragOutX?e.offsetWidth-t.value.dragOutX:0;let d=0,m=0;if(t.value&&t.value.dragOutY&&(d=e.offsetHeight-t.value.dragOutY,m=o.offsetHeight-t.value.dragOutY),u<0-f?u=0-f:u>e.parentNode.clientWidth-e.offsetWidth+f&&(u=e.parentNode.clientWidth-e.offsetWidth+f),a<0-m?a=0-m:a>e.parentNode.clientHeight-e.offsetHeight+d&&(a=e.parentNode.clientHeight-e.offsetHeight+d),e.style.left=u+"px",e.style.top=a+"px",t.value&&t.value.ondrag){if(typeof t.value.ondrag!="function")return;t.value.ondrag(l,{left:u,top:a})}};s.touches?document.addEventListener("touchmove",c):document.addEventListener("mousemove",c);const n=function(){i&&(e.style.opacity="1",i.parentNode.removeChild(i)),document.removeEventListener("touchend",n),document.removeEventListener("touchmove",c),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",n)};s.touches?document.addEventListener("touchend",n):document.addEventListener("mouseup",n)};o.addEventListener("touchstart",r),o.addEventListener("mousedown",r)}},O=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));const h={"./v-auth.js":g,"./v-drag.js":O},x=o=>{Object.keys(h).forEach(t=>{const e=h[t],r=e.default||e;o.directive(r.name,r.inserted)})};var F=_(({app:o})=>{const t={BASE_URL:"",MODE:"production",DEV:!1,PROD:!0};o.config.globalProperties.isDEV=t.DEV,o.config.globalProperties.$tooltipAttr={transitionShow:"jump-down",transitionHide:"jump-up",class:"qx-tooltip",maxWidth:"30%",offset:[0,8],delay:800},o.config.errorHandler=(e,r,s)=>{console.info("[\u5168\u5C40\u5F02\u5E38]",e,r,s)},o.config.warnHandler=(e,r,s)=>{console.info("[\u5168\u5C40\u8B66\u544A]",e,r,s)},y(o),x(o)});export{F as default};
