import{S as e,i as s,s as t,J as n,e as r,c as l,a as o,d as a,o as c,G as i,f as u,K as d,w as h,x as p,m as f,H as m,n as $}from"./index-a2712d84.js";let v;const g={},x=function(e,s){if(!s)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(s.map((e=>{if(e in g)return;g[e]=!0;const s=e.endsWith(".css"),t=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=s?"stylesheet":v,s||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),s?new Promise(((e,s)=>{n.addEventListener("load",e),n.addEventListener("error",s)})):void 0}))).then((()=>e()))};function E(e){let s,t,f;const m=e[2].default,$=n(m,e,e[1],null);return{c(){s=r("div"),$&&$.c(),this.h()},l(e){s=l(e,"DIV",{class:!0});var t=o(s);$&&$.l(t),t.forEach(a),this.h()},h(){c(s,"class",t=i(`container ${e[0].class}`)+" svelte-1rajs1z")},m(e,t){u(e,s,t),$&&$.m(s,null),f=!0},p(e,[n]){$&&$.p&&2&n&&d($,m,e,e[1],n,null,null),(!f||1&n&&t!==(t=i(`container ${e[0].class}`)+" svelte-1rajs1z"))&&c(s,"class",t)},i(e){f||(h($,e),f=!0)},o(e){p($,e),f=!1},d(e){e&&a(s),$&&$.d(e)}}}function j(e,s,t){let{$$slots:n={},$$scope:r}=s;return e.$$set=e=>{t(0,s=f(f({},s),m(e))),"$$scope"in e&&t(1,r=e.$$scope)},[s=m(s),r,n]}class k extends e{constructor(e){super(),s(this,e,j,E,t,{})}}const w=[];function y(e,s=$){let n;const r=[];function l(s){if(t(e,s)&&(e=s,n)){const s=!w.length;for(let t=0;t<r.length;t+=1){const s=r[t];s[1](),w.push(s,e)}if(s){for(let e=0;e<w.length;e+=2)w[e][0](w[e+1]);w.length=0}}}return{set:l,update:function(s){l(s(e))},subscribe:function(t,o=$){const a=[t,o];return r.push(a),1===r.length&&(n=s(l)||$),t(e),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}export{k as C,x as _,y as w};
