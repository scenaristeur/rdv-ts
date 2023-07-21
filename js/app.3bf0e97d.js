(function(){"use strict";var e={8004:function(e,n,o){var t=o(9242),r=o(3396);function i(e,n){const o=(0,r.up)("router-link"),t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(o,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(t)],64)}var u=o(89);const l={},a=(0,u.Z)(l,[["render",i]]);var c=a,s=o(5431);(0,s.z)("/rdv-ts/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("This app has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=o(2483);const f={class:"home"};function p(e,n,o,t,i,u){const l=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(l)])}var v=o(4870),m=o(7139),g=(0,r.aZ)({__name:"HelloWorld",setup(e){const n=(0,v.iH)([40,40]),o=(0,v.iH)("EPSG:4326"),t=(0,v.iH)(12),i=(0,v.iH)(0),u=(0,v.iH)(),l=(0,v.iH)(null),a=(0,v.iH)(8),c=(0,v.iH)(3),s=(0,v.iH)("red"),d=(0,v.iH)("white");let f=(0,v.iH)([0,0]);const p=e=>{u.value?.setCenter(e.target?.getPosition()),f.value=e.target?.getPosition(),console.log(f)};return(e,g)=>{const h=(0,r.up)("ol-view"),b=(0,r.up)("ol-source-osm"),w=(0,r.up)("ol-tile-layer"),y=(0,r.up)("ol-geom-point"),k=(0,r.up)("ol-style-fill"),_=(0,r.up)("ol-style-stroke"),W=(0,r.up)("ol-style-circle"),j=(0,r.up)("ol-style"),H=(0,r.up)("ol-feature"),O=(0,r.up)("ol-source-vector"),P=(0,r.up)("ol-vector-layer"),S=(0,r.up)("ol-geolocation"),T=(0,r.up)("ol-map");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(T,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"},ref_key:"map",ref:l},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{ref_key:"view",ref:u,center:n.value,rotation:i.value,zoom:t.value,projection:o.value},null,8,["center","rotation","zoom","projection"]),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b)])),_:1}),(0,r.Wm)(P,null,{default:(0,r.w5)((()=>[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(H,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y,{coordinates:(0,v.SU)(f)},null,8,["coordinates"]),(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(W,{radius:a.value},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{color:d.value},null,8,["color"]),(0,r.Wm)(_,{color:s.value,width:c.value},null,8,["color","width"])])),_:1},8,["radius"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(S,{projection:o.value,"onChange:position":p},null,8,["projection"])])),_:1},512),(0,r._)("button",{onClick:g[0]||(g[0]=()=>(0,v.dq)(f)?f.value=(0,v.SU)(f).map((e=>e+.1)):f=(0,v.SU)(f).map((e=>e+.1))),type:"button"}," change coordinates ! "),(0,r.Uk)(" "+(0,m.zw)((0,v.SU)(f)),1)])}}});const h=g;var b=h,w=(0,r.aZ)({name:"HomeView",components:{HelloWorld:b}});const y=(0,u.Z)(w,[["render",p]]);var k=y;const _=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,4007))}],W=(0,d.p7)({history:(0,d.PO)("/rdv-ts/"),routes:_});var j=W,H=o(65),O=(0,H.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),P=o(8784);const S=o(1330),T={debug:!0},C=(0,t.ri)(c).use(O).use(j).use(S).use(P.ZP,T);C.mount("#app")},1330:function(e,n,o){o.r(n),o.d(n,{awareness:function(){return s},connect:function(){return v},disconnect:function(){return p},store:function(){return a},webrtcProvider:function(){return d},websocketProvider:function(){return f}});var t=o(5288),r=o(9373),i=o(2213),u=o(114);const l={positions:{}},a=(0,t.wI)(l),c=(0,t.ms)(a),s=new u.GL(c),d=new r.x$("rdv",c,{awareness:s,signaling:["wss://noosld-webrtc.glitch.me"]}),f=new i.VU("wss://yjs-leveldb.glitch.me/rdv","rdv",c);d.on("status",(e=>{console.log("** webrtcProvider in y_store",e.status)})),f.on("status",(e=>{console.log("## websocketProvider in y_store",e.status)}));const p=()=>d.disconnect(),v=()=>d.connect()}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var l=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(l=!1,i<u&&(u=i));if(l){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))}}(),function(){o.u=function(e){return"js/about.3bb338cd.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="rdv-ts:";o.l=function(t,r,i,u){if(e[t])e[t].push(r);else{var l,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){l=d;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+i),l.src=t),e[t]=[r];var f=function(n,o){l.onerror=l.onload=null,clearTimeout(p);var r=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(o)})),n)return n(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/rdv-ts/"}(),function(){var e={143:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(o,t){r=e[n]=[o,t]}));t.push(r[2]=i);var u=o.p+o.u(n),l=new Error,a=function(t){if(o.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",l.name="ChunkLoadError",l.type=i,l.request=u,r[1](l)}};o.l(u,a,"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],l=t[1],a=t[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(a)var s=a(o)}for(n&&n(t);c<u.length;c++)i=u[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},t=self["webpackChunkrdv_ts"]=self["webpackChunkrdv_ts"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(8004)}));t=o.O(t)})();
//# sourceMappingURL=app.3bf0e97d.js.map