function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,n,e,o,r,s,c){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(i){const r=l(n,e,o,c);t.p(r,i)}}function d(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function h(t){return null==t?"":t}function p(t,n,e=n){return t.set(e),n}const $="undefined"!=typeof window;let m=$?()=>window.performance.now():()=>Date.now(),b=$?t=>requestAnimationFrame(t):t;const g=new Set;function y(t){g.forEach((n=>{n.c(t)||(g.delete(n),n.f())})),0!==g.size&&b(y)}function _(t){let n;return 0===g.size&&b(y),{promise:new Promise((e=>{g.add(n={c:t,f:e})})),abort(){g.delete(n)}}}function v(t,n){t.appendChild(n)}function w(t,n,e){t.insertBefore(n,e||null)}function k(t){t.parentNode.removeChild(t)}function x(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function E(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function j(){return C(" ")}function z(){return C("")}function S(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function N(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function O(t){const n=[];for(let e=0;e<t.length;e+=1)n.push({start:t.start(e),end:t.end(e)});return n}function M(t){return Array.from(t.childNodes)}function P(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?A(n):E(n)}function R(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return C(n)}function L(t){return R(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function W(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let q;function D(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=E("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=function(){if(void 0===q){q=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){q=!0}}return q}();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=S(e.contentWindow,"resize",n)}),v(t,e),()=>{(o||r&&e.contentWindow)&&r(),k(e)}}function F(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const I=new Set;let G,H=0;function J(t,n,e,o,r,s,c,i=0){const u=16.666/o;let a="{\n";for(let m=0;m<=1;m+=u){const t=n+(e-n)*s(m);a+=100*m+`%{${c(t,1-t)}}\n`}const l=a+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${i}`,d=t.ownerDocument;I.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(E("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,H+=1,f}function K(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),H-=r,H||b((()=>{H||(I.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),I.clear())})))}function Q(t){G=t}function U(){if(!G)throw new Error("Function called outside component initialization");return G}function V(t){U().$$.on_mount.push(t)}function X(t){U().$$.after_update.push(t)}function Y(t){U().$$.on_destroy.push(t)}function Z(){const t=U();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=B(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function tt(t,n){U().$$.context.set(t,n)}function nt(t){return U().$$.context.get(t)}function et(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const ot=[],rt=[],st=[],ct=[],it=Promise.resolve();let ut=!1;function at(t){st.push(t)}function lt(t){ct.push(t)}let ft=!1;const dt=new Set;function ht(){if(!ft){ft=!0;do{for(let t=0;t<ot.length;t+=1){const n=ot[t];Q(n),pt(n.$$)}for(Q(null),ot.length=0;rt.length;)rt.pop()();for(let t=0;t<st.length;t+=1){const n=st[t];dt.has(n)||(dt.add(n),n())}st.length=0}while(ot.length);for(;ct.length;)ct.pop()();ut=!1,ft=!1,dt.clear()}}function pt(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(at)}}let $t;function mt(){return $t||($t=Promise.resolve(),$t.then((()=>{$t=null}))),$t}function bt(t,n,e){t.dispatchEvent(B(`${n?"intro":"outro"}${e}`))}const gt=new Set;let yt;function _t(){yt={r:0,c:[],p:yt}}function vt(){yt.r||s(yt.c),yt=yt.p}function wt(t,n){t&&t.i&&(gt.delete(t),t.i(n))}function kt(t,n,e,o){if(t&&t.o){if(gt.has(t))return;gt.add(t),yt.c.push((()=>{gt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const xt={duration:0};function Et(e,o,r){let s,i,u=o(e,r),a=!1,l=0;function f(){s&&K(e,s)}function d(){const{delay:o=0,duration:r=300,easing:c=n,tick:d=t,css:h}=u||xt;h&&(s=J(e,0,1,r,o,c,h,l++)),d(0,1);const p=m()+o,$=p+r;i&&i.abort(),a=!0,at((()=>bt(e,!0,"start"))),i=_((t=>{if(a){if(t>=$)return d(1,0),bt(e,!0,"end"),f(),a=!1;if(t>=p){const n=c((t-p)/r);d(n,1-n)}}return a}))}let h=!1;return{start(){h||(K(e),c(u)?(u=u(),mt().then(d)):d())},invalidate(){h=!1},end(){a&&(f(),a=!1)}}}function At(e,o,r){let i,u=o(e,r),a=!0;const l=yt;function f(){const{delay:o=0,duration:r=300,easing:c=n,tick:f=t,css:d}=u||xt;d&&(i=J(e,1,0,r,o,c,d));const h=m()+o,p=h+r;at((()=>bt(e,!1,"start"))),_((t=>{if(a){if(t>=p)return f(0,1),bt(e,!1,"end"),--l.r||s(l.c),!1;if(t>=h){const n=c((t-h)/r);f(1-n,n)}}return a}))}return l.r+=1,c(u)?mt().then((()=>{u=u(),f()})):f(),{end(t){t&&u.tick&&u.tick(1,0),a&&(i&&K(e,i),a=!1)}}}function Ct(e,o,r,i){let u=o(e,r),a=i?0:1,l=null,f=null,d=null;function h(){d&&K(e,d)}function p(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function $(o){const{delay:r=0,duration:c=300,easing:i=n,tick:$=t,css:b}=u||xt,g={start:m()+r,b:o};o||(g.group=yt,yt.r+=1),l||f?f=g:(b&&(h(),d=J(e,a,o,c,r,i,b)),o&&$(0,1),l=p(g,c),at((()=>bt(e,o,"start"))),_((t=>{if(f&&t>f.start&&(l=p(f,c),f=null,bt(e,l.b,"start"),b&&(h(),d=J(e,a,l.b,l.duration,0,i,u.css))),l)if(t>=l.end)$(a=l.b,1-a),bt(e,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;a=l.a+l.d*i(n/l.duration),$(a,1-a)}return!(!l&&!f)})))}return{run(t){c(u)?mt().then((()=>{u=u(),$(t)})):$(t)},end(){h(),l=f=null}}}function jt(t,n){const e=n.token={};function o(t,o,r,s){if(n.token!==e)return;n.resolved=s;let c=n.ctx;void 0!==r&&(c=c.slice(),c[r]=s);const i=t&&(n.current=t)(c);let u=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(_t(),kt(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),vt())})):n.block.d(1),i.c(),wt(i,1),i.m(n.mount(),n.anchor),u=!0),n.block=i,n.blocks&&(n.blocks[o]=i),u&&ht()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=U();if(t.then((t=>{Q(e),o(n.then,1,n.value,t),Q(null)}),(t=>{if(Q(e),o(n.catch,2,n.error,t),Q(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function zt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function St(t){return"object"==typeof t&&null!==t?t:{}}function Nt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function Ot(t){t&&t.c()}function Mt(t,n){t&&t.l(n)}function Pt(t,n,e,r){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,e),r||at((()=>{const n=u.map(o).filter(c);a?a.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(at)}function Rt(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Lt(t,n){-1===t.$$.dirty[0]&&(ot.push(t),ut||(ut=!0,it.then(ht)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(n,e,o,c,i,u,a=[-1]){const l=G;Q(n);const f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&Lt(n,t)),e})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=M(e.target);f.fragment&&f.fragment.l(t),t.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&wt(n.$$.fragment),Pt(n,e.target,e.anchor,e.customElement),ht()}Q(l)}class Wt{$destroy(){Rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Nt as $,X as A,V as B,_t as C,vt as D,A as E,W as F,h as G,d as H,S as I,a as J,f as K,c as L,x as M,n as N,nt as O,u as P,at as Q,Ct as R,Wt as S,Et as T,At as U,D as V,F as W,s as X,Z as Y,rt as Z,et as _,M as a,lt as a0,Y as a1,jt as a2,p as a3,O as a4,b as a5,R as b,P as c,k as d,E as e,w as f,v as g,T as h,Tt as i,j,z as k,L as l,e as m,t as n,N as o,Ot as p,Mt as q,Pt as r,i as s,C as t,zt as u,St as v,wt as w,kt as x,Rt as y,tt as z};