import{b as e,c as o}from"./quasar-1668577893034.js";import{u as m,j as f,t as h}from"./components-1668577893034.js";import"./@vue-1668577893034.js";import"./package-1668577893034.js";import"./@intlify-1668577893034.js";import"./axios-1668577893034.js";import"./echarts-1668577893034.js";import"./zrender-1668577893034.js";import"./xlsx-1668577893034.js";const a="/login";var A=e(({router:s})=>{s.beforeEach((t,n,r)=>{o.start();const i=m().token;if(!i||i==="undefined"){t.path===a?r():r({path:a}),o.stop();return}if(t.path===a){r({path:"/"}),o.stop();return}const p=t.meta;t.path!==a&&!f(p)&&(p.path=t.fullPath,h().ADD_TAG(p)),r(),o.stop()}),s.afterEach(()=>{o.stop()})});export{A as default};
