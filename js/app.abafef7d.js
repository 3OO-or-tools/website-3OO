(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"1b9e9e8c","chunk-45fcb0ee":"d468b8cd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/website-3OO/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c0f":function(e,t,n){},2147:function(e,t,n){"use strict";n("d3b7");var r=n("5502"),a=n("260b"),o=(n("ea7b"),{status:"",user:null}),u={set:function(e,t){e.user=t},auth_success:function(e,t){e.user=t,e.status="success"},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.user=null}},c={set:function(e){var t=e.commit;return new Promise((function(e){a["a"].auth().onAuthStateChanged((function(n){t("set",n),e(n)}))}))},login:function(e,t){var n=e.commit;return new Promise((function(e,r){a["a"].auth().signInWithEmailAndPassword(t.email,t.password).then((function(t){n("auth_success",t.user),e(t.user)})).catch((function(e){n("auth_error"),r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){a["a"].auth().signOut().then((function(){t("logout"),e()}))}))}},s={},i={isLoggedIn:function(e){return!!e.user},authStatus:function(e){return e.status},user:function(e){return e.user}};t["a"]=Object(r["a"])({state:o,mutations:u,actions:c,modules:s,getters:i})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"navbar navbar-light sticky-top navbar-expand-lg bg-light"},o={class:"container-fluid"},u=Object(r["f"])("Home"),c=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarSupportedContent"},i={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={key:0,class:"nav-item"},b=Object(r["f"])("Dashboard"),d={class:"nav-item"},f=Object(r["f"])("About"),p={key:0,class:"navbar-nav"},g=Object(r["f"])("Login"),v={key:1,class:"navbar-nav"};function h(e,t,n,h,O,m){var j=Object(r["w"])("router-link"),y=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("nav",a,[Object(r["g"])("div",o,[Object(r["g"])(j,{to:"/",class:"navbar-brand"},{default:Object(r["C"])((function(){return[u]})),_:1}),c,Object(r["g"])("div",s,[Object(r["g"])("ul",i,[m.user?(Object(r["p"])(),Object(r["d"])("li",l,[Object(r["g"])(j,{to:"/dashboard",class:"nav-link"},{default:Object(r["C"])((function(){return[b]})),_:1})])):Object(r["e"])("",!0),Object(r["g"])("li",d,[Object(r["g"])(j,{to:"/about",class:"nav-link"},{default:Object(r["C"])((function(){return[f]})),_:1})])]),m.user?(Object(r["p"])(),Object(r["d"])("span",v,[Object(r["g"])("a",{href:"#",class:"nav-link d-flex",onClick:t[1]||(t[1]=function(){return m.logout&&m.logout.apply(m,arguments)})},"Log Out")])):(Object(r["p"])(),Object(r["d"])("span",p,[Object(r["g"])(j,{to:"/login",class:"nav-link"},{default:Object(r["C"])((function(){return[g]})),_:1})]))])])]),Object(r["g"])(y)],64)}n("5319"),n("ac1f");var O=n("2147"),m={user:O["a"],computed:{user:function(){return O["a"].getters.user}},methods:{logout:function(){var e=this;O["a"].dispatch("logout").then((function(){return e.$router.replace("/")}))}}};m.render=h;var j=m,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w=n("cf05"),k=n.n(w),_={class:"home"},P=Object(r["g"])("img",{alt:"Vue logo",src:k.a},null,-1),S={key:0};function C(e,t,n,a,o,u){var c=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",_,[P,u.user?(Object(r["p"])(),Object(r["d"])("p",S," Hello "+Object(r["y"])(u.user.email),1)):Object(r["e"])("",!0),Object(r["g"])(c,{msg:"Welcome to Your Vue.js App"})])}var x=Object(r["F"])("data-v-24addfd9");Object(r["s"])("data-v-24addfd9");var A={class:"hello"};Object(r["q"])();var L=x((function(e,t,n,a,o,u){return Object(r["p"])(),Object(r["d"])("div",A,[Object(r["g"])("h1",null,Object(r["y"])(n.msg),1)])})),H={name:"HelloWorld",props:{msg:String}};n("79eb");H.render=L,H.__scopeId="data-v-24addfd9";var I=H,E={name:"Home",user:O["a"],computed:{user:function(){return O["a"].getters.user}},components:{HelloWorld:I}};E.render=C;var T=E,W=[{path:"/",name:"Home",component:T},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-45fcb0ee").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/about",name:"About",component:function(){return n.e("chunk-45fcb0ee").then(n.bind(null,"7277"))}}],q=Object(y["a"])({history:Object(y["b"])("/website-3OO/"),routes:W});q.beforeEach((function(e){var t=e.matched.some((function(e){return e.meta.requiresAuth}));if(t&&!O["a"].getters.isLoggedIn)return"/"}));var M=q,D=n("260b"),J=(n("66ce"),{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""});D["a"].initializeApp(J),O["a"].dispatch("set").then((function(){var e=Object(r["c"])(j);e.use(O["a"]),e.use(M),e.mount("#app")}))},"79eb":function(e,t,n){"use strict";n("1c0f")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.abafef7d.js.map