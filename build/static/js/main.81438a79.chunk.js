(this.webpackJsonpgearware=this.webpackJsonpgearware||[]).push([[0],{148:function(e,t,n){},168:function(e,t,n){e.exports=n.p+"static/media/image-preview.d8ec4dad.md"},191:function(e,t,n){e.exports=n(430)},200:function(e,t,n){},201:function(e,t,n){},204:function(e,t,n){},263:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},393:function(e,t,n){},428:function(e,t,n){},430:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=n(54),i=n(10),u=(n(431),n(67)),m=(n(198),n(59)),s=n(435),f=n(436),d=n(437),p=n(438),h=(n(200),function(){return r.a.createElement("div",{className:"site-info"},r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f Written by Caper with passion and\xa0 \u2764\ufe0f"),r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2728 Built with React & supported by Node on Nginx. \u2728")),r.a.createElement("a",{className:"site-record-anchor",href:"http://www.beian.miit.gov.cn/","aria-label":"link and check for this site"},"IPC\u8bc1: \u6d59ICP\u590719047176\u53f7"))}),E=n(38),v=(n(201),n(202),n(188)),g=(n(204),function(e){var t=Object(a.useRef)(null);return r.a.createElement("div",{className:"g-code-paper-wrapper"},r.a.createElement("textarea",{ref:t,defaultValue:e.text,className:"g-code-paper-textarea ".concat(e.className)}),e.handleClick&&r.a.createElement("button",{onClick:function(){var n=t.current.value;e.handleClick&&e.handleClick(n)}},e.buttonText?e.buttonText:"\u66f4\u65b0\u6570\u636e"))}),b=(n(259),n(118)),w=(n(432),n(186)),y=n(112),O=n.n(y),j=(n(263),function(e){var t=e.style,n=e.className,a=e.children;return r.a.createElement("div",{className:"g-isolate-block-wrapper ".concat(n),style:t},a)}),k=n(166),x=n.n(k),C=n(167),N=n.n(C),S=n(63),M=n.n(S),q=n(168),I=n.n(q),P=n(117),A=n(27),z=(n(352),function(e){var t=e.menu,n=e.children,c=Object(a.useState)({x:0,y:0}),l=Object(i.a)(c,2),o=l[0],u=l[1],m=Object(a.useState)(!1),s=Object(i.a)(m,2),f=s[0],d=s[1],p={position:"fixed",left:o.x,top:o.y,backgroundColor:"white",borderRadius:"4px",padding:"4px"},h=function(e){d(!1),e.stopPropagation()};return t?r.a.createElement("div",{onClick:h,onContextMenu:function(e){e.preventDefault(),u({x:e.clientX,y:e.clientY}),d(!0)}},n,f&&r.a.createElement("div",{className:"g-context-menu-default",style:p},function(e){return e instanceof Array?r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("div",{key:e.name,onClick:e.method},e.name)}))):e}(t))):r.a.createElement("div",{onClick:h},n)}),L=(n(353),{w:0,h:0,r:0,l:0,t:0,translate:"-50%"}),W={bar:["zoom-in","zoom-out","free-rotate","free-drag","reset"],contextMenu:["rotate","free-rotate","free-drag"]};function B(e){var t=e.url,n=e.onClose,c=e.visible,l=e.simpleMode,o=void 0!==l&&l,u=e.getImageLoadedSize,m=void 0===u?void 0:u,s=o?null:"default"===e.operator?W:e.operator,f=!!o||e.fixedOnScreen,d=Object(a.useState)(L),p=Object(i.a)(d,2),h=p[0],E=p[1],v=Object(a.useState)(L),g=Object(i.a)(v,2),b=g[0],w=g[1],y=Object(a.useRef)(null),O={left:"".concat(b.l,"px"),top:"".concat(b.t,"px"),width:"".concat(b.w,"px"),height:"".concat(b.h,"px"),transform:"translate(".concat(b.translate,", ").concat(b.translate,") rotate(").concat(b.r,"deg)")},j={cursor:"move",width:"".concat(h.w,"px"),height:"".concat(h.h,"px"),position:"relative",overflow:"hidden"};Object(a.useEffect)((function(){var e=function(e){return e.preventDefault()},t=function(){return document.removeEventListener("wheel",e)};return!o&&c&&f?(console.log("%cnow scroll by wheel is blocked","color:purple"),document.addEventListener("wheel",e,{passive:!1})):(console.log("%cnow scroll by wheel is available","color:green"),t()),t}),[c,f,o]);var k=function(){if(console.log("%cimage loaded","color:red"),y.current){var e=function(e){var t=f?window.innerWidth/2:0,n=f?window.innerHeight/2:0,a=.9*window.innerWidth,r=.9*window.innerHeight-100,c=e.naturalWidth,l=e.naturalHeight,o=c/a,i=l/r,u=o<1&&i<1?{w:c,h:l}:o>i?{w:a,h:l/o}:{w:c/i,h:r},m={t:n,l:t,w:u.w,h:u.h,translate:f?"-50%":"0"},s=Object(A.a)({},b,{},m);return E(s),w(s),s}(y.current);m&&m(e)}},x=function(){q("free-drag"),K(!1),J(!1),w(h)},C=function(){x(),n&&n()},N=Object(a.useState)("free-drag"),S=Object(i.a)(N,2),M=S[0],q=S[1],I=function(e){return q(e)},B=Object(a.useState)({x:0,y:0}),D=Object(i.a)(B,2),R=D[0],T=D[1],X=Object(a.useState)(!1),Y=Object(i.a)(X,2),H=Y[0],J=Y[1],F=Object(a.useState)(!1),G=Object(i.a)(F,2),U=G[0],K=G[1],Q=Object(a.useState)({x:0,y:0}),V=Object(i.a)(Q,2),_=V[0],$=V[1],Z={"zoom-in":function(){w((function(e){return Object(A.a)({},e,{w:1.05*b.w,h:1.05*b.h})}))},"zoom-out":function(){w((function(e){return Object(A.a)({},e,{w:.95*b.w,h:.95*b.h})}))},rotate:function(){w((function(e){return Object(A.a)({},e,{r:e.r+90})}))},"free-drag":function(){return I("free-drag")},"free-rotate":function(){return I("free-rotate")},reset:x},ee=function(){q("free-drag"),J(!1),K(!1)},te=Object(a.useState)(!1),ne=Object(i.a)(te,2),ae=ne[0],re=ne[1],ce={cursor:ae?"zoom-out":"zoom-in"};return c?o?r.a.createElement("div",{className:"g-image-preview-wrapper g-fixed",onClick:C},r.a.createElement("div",{className:"g-image-preview-icon-close",onClick:C},"X"),r.a.createElement("img",{className:"g-image-preview-image",onContextMenu:ee,onClick:function(e){e.preventDefault(),e.stopPropagation();var t=window.innerWidth/2,n=window.innerHeight/2,a=.9*window.innerWidth-48,r=.9*window.innerHeight-48,c=h.w/a,l=h.h/r,o=c>l?{w:a,h:h.h/c}:{w:h.w/l,h:r},i=f?"-50%":"0";w((function(e){return ae?h:Object(A.a)({},e,{l:t,t:n,w:o.w,h:o.h,translate:i})})),re((function(e){return!e}))},style:Object(A.a)({},O,{},ce),onLoad:k,ref:y,src:t,alt:"\u56fe\u7247"})):r.a.createElement("div",{className:"g-image-preview-wrapper ".concat(f?"g-fixed":""),style:f?{}:j,onClick:f?C:void 0},f&&r.a.createElement("div",{className:"g-image-preview-icon-close",onClick:C},"X"),r.a.createElement(z,{menu:function(){if(!s||!s.contextMenu)return null;if(s.contextMenu instanceof Array){var e=[],t=!0,n=!1,a=void 0;try{for(var r,c=s.contextMenu[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var l=r.value,o=Z[l];if(o){var i={name:l,method:o};e=[].concat(Object(P.a)(e),[i])}}}catch(u){n=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(n)throw a}}return e}return s.contextMenu}()},r.a.createElement("img",{className:"g-image-preview-image",onMouseDown:function(e){"free-drag"===M?function(e){e.preventDefault(),J(!0),T({x:e.clientX-y.current.offsetLeft,y:e.clientY-y.current.offsetTop})}(e):function(e){e.preventDefault(),$({x:e.clientX,y:e.clientY}),K(!0)}(e)},onMouseMove:function(e){"free-drag"===M?function(e){if(H){var t=e.clientX-R.x,n=e.clientY-R.y;w((function(e){return Object(A.a)({},e,{l:t,t:n})}))}}(e):function(e){if(U){var t={x:e.clientX,y:e.clientY},n=function(e,t){return Math.sqrt(Math.pow(Math.abs(e.x-t.x),2)+Math.pow(Math.abs(e.y-t.y),2))},a=y.current.getBoundingClientRect(),r={x:(a.left+a.right)/2,y:(a.top+a.bottom)/2},c=n(t,_),l=n(t,r),o=n(_,r),i=(l*l+o*o-c*c)/(2*l*o),u=180*Math.acos(i)/3.1415,m=[[_.x-r.x,t.x-r.x],[_.y-r.y,t.y-r.y]],s=m[0][0]*m[1][1]-m[0][1]*m[1][0]>=0?1:-1;w((function(e){return Object(A.a)({},e,{r:e.r+s*u})})),$(t)}}(e)},onMouseUp:function(e){"free-drag"===M?J(!1):function(e){$({x:e.clientX,y:e.clientY}),K(!1)}(e)},onContextMenu:ee,onClick:function(e){return e.stopPropagation},style:O,onLoad:k,ref:y,src:t,alt:"\u56fe\u7247",onWheel:function(e){var t=e.deltaY<0?.05:-.05,n=e.clientX-b.l,a=e.clientY-b.t,r=b.w*(1+t),c=b.h*(1+t),l=b.l,o=b.t,i=l-t*n,u=o-t*a;w((function(e){return Object(A.a)({},e,{w:r,h:c,l:i,t:u})}))}})),function(){if(!s||!s.bar)return null;if(s.bar instanceof Array){var e=[],t=!0,n=!1,a=void 0;try{for(var c,l=s.bar[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var o=c.value,i=Z[o];if(i){var u={name:o,method:i};e=[].concat(Object(P.a)(e),[u])}else console.warn("can't find method which refers ".concat(o))}}catch(m){n=!0,a=m}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}return r.a.createElement("div",{className:"g-image-preview-action-bar",onClick:function(e){return e.stopPropagation()}},e.map((function(e){return r.a.createElement("i",{key:e.name,onClick:e.method},e.name)})))}return s.bar}()):r.a.createElement(r.a.Fragment,null)}n(354);var D="https://cdn.pixabay.com/photo/2020/03/08/11/21/british-4912211_960_720.jpg",R=(n(148),function(e){var t=e.level,n=e.depth,c=e.route,l=Object(a.useState)(!!window.location.pathname.match(c)),o=Object(i.a)(l,2),u=o[0],m=o[1],s=function(e){return window.location.replace(e)},f=function(e){return console.log(e)};return r.a.createElement("div",{key:t.name,className:function(e){return"g-levels-link ".concat(e?"g-small-font":"")}(n),onClick:function(){return function(e,t){return m((function(e){return!e})),e.static?s(e.route):f(t)}(t,c)},style:u?{color:"#2dc6ad"}:void 0},r.a.createElement("span",{style:{paddingLeft:"".concat(n,"em")}}),t.name)}),T=function(e){var t=e.data,n=e.fontSize,a=void 0===n?45:n;return r.a.createElement("div",{className:"g-levels-wrapper"},t.map((function(e){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2?arguments[2]:void 0,l=c?"".concat(c,"/").concat(t.route):t.route;return r.a.createElement("div",{key:t.name},r.a.createElement(R,{level:t,depth:n,route:l,fontSize:a}),t.deep&&t.deep.map((function(t){return e(t,n+1,l)})))}(e)})))},X=[{name:"Pipeline",route:"pipeline"},{name:"Github",route:"https://github.com/",static:!0},{name:"Ground",route:"ground",deep:[{name:"Solid",route:"solid",deep:[{name:"Dust",route:"dust"},{name:"Germ",route:"germ"}]},{name:"Liquid",route:"liquid"}]}],Y=(n(382),function(e){return r.a.createElement("span",{className:"g-icon-rotate",onClick:e.handleClick})}),H=(n(383),function(e){var t=e.children,n=e.column,c=void 0===n?3:n,l=function(e){for(var t=0;t<e;t++)"".concat(" 1fr");return""},o=Object(a.useState)({}),u=Object(i.a)(o,2),m=u[0],s=u[1];return Object(a.useEffect)((function(){var e={gridTemplateColumns:l(c)};s(e),console.log(e)}),[c]),r.a.createElement("div",{className:"g-waterfall-wrapper",style:m},t)}),J=(n(384),function(e){var t=e.routes;return r.a.createElement("div",{className:"p-comp"},r.a.createElement(E.c,null,t.map((function(e){return r.a.createElement(ae,Object.assign({key:e.key},e))}))))}),F=(n(149),n(39)),G=(n(387),n(189)),U=(n(151),n(19)),K=(n(389),n(182)),Q=(n(433),n(187)),V=(n(393),Q.a.Meta),_=[{key:"home",icon:"home",title:"\u9996\u9875",exact:!0,component:function(){var e,t=(new Date).getHours(),n=t>=12&&t<=17?"\u4e0b\u5348\u597d, \u8bb0\u5f97\u591a\u8d77\u6765\u52a8\u52a8":t>=17&&t<=23?"\u665a\u4e0a\u597d, \u8981\u591a\u591a\u73a9\u800d~":t>23||t<5?"\u6df1\u591c\u4e86, \u5feb\u4f11\u606f\u5427":"\u65e9\u4e0a\u597d, \u8fce\u63a5\u4e00\u5929\u6700\u597d\u7684\u9633\u5149";return r.a.createElement("div",{className:"p-home"},r.a.createElement("h3",null," \u7ec4\u4ef6\u5e73\u53f0 "),r.a.createElement(F.a,null,r.a.createElement(U.a,{span:20},r.a.createElement(V,{avatar:r.a.createElement(K.a,{style:{marginTop:5},size:"large",src:M.a}),title:"".concat(n),description:"\u7ec4\u4ef6\u76ee\u5f55\u5728\u4fa7\u680f, \u8bf7\u9009\u62e9\u67e5\u770b"})),r.a.createElement(U.a,{style:{marginTop:-13},span:4},r.a.createElement(G.a,{title:"\u5f53\u524d\u7ec4\u4ef6\u603b\u6570",value:null===(e=_[1].routes)||void 0===e?void 0:e.length}))))},inMenu:!0,path:"/"},{key:"comp",icon:"gold",title:"\u7ec4\u4ef6",inMenu:!0,component:J,path:"/comp",routes:[{key:"image-preview",title:"\u56fe\u7247\u9884\u89c8 \xb7 ImagePreview",component:function(){var e=Object(a.useState)(-1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],m=o[1],s=Object(a.useState)(""),f=Object(i.a)(s,2),d=f[0],p=f[1];Object(a.useEffect)((function(){fetch(I.a).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[]);var h=function(){c(null)};Object(a.useEffect)((function(){var e=localStorage.getItem("image-preview-url");e&&m(e)}),[]);var E=Object(a.useState)(500),v=Object(i.a)(E,2),y=v[0],k=v[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u56fe\u7247\u9884\u89c8\uff08ImagePreview\uff09"),r.a.createElement("p",null,"\u57fa\u7840\u64cd\u4f5c: \u6eda\u8f6e\u7f29\u653e \u62d6\u62fd"),r.a.createElement("p",null,"\u83dc\u5355\u64cd\u4f5c: \u65cb\u8f6c \u91cd\u7f6e"),r.a.createElement("div",{className:"g-table"},r.a.createElement(j,null,r.a.createElement("h3",null,"\u7b80\u6613\u6a21\u5f0f\u793a\u4f8b"),r.a.createElement("p",null,"\u5355\u51fb\u56fe\u7247 \u5c06\u7b49\u6bd4\u62c9\u4f38\u81f3\u53ef\u80fd\u7684\u5c4f\u5e55\u6700\u5927\u5c3a\u5bf8, \u65e0\u83dc\u5355"),r.a.createElement("img",{src:M.a,alt:"\u56fe\u7247",className:"g-sample-image",onClick:function(){return c(1)}}),r.a.createElement(B,{url:M.a,simpleMode:!0,visible:1===n,onClose:h})),r.a.createElement(j,null,r.a.createElement("h3",null,"\u529f\u80fd\u83dc\u5355"),r.a.createElement("p",null,"\u542b\u9ed8\u8ba4\u53f3\u952e\u83dc\u5355"),r.a.createElement("img",{alt:"\u56fe\u7247",className:"g-sample-image",src:D,onClick:function(){return c(2)}}),r.a.createElement(B,{url:D,operator:"default",fixedOnScreen:!0,visible:2===n,onClose:h})),r.a.createElement(j,null,r.a.createElement("h3",null,"\u975e\u5168\u5c4f\u906e\u7f69\u6a21\u5f0f"),r.a.createElement("p",null,"\u5305\u542b\u5728\u7279\u5b9a\u7ec4\u4ef6, \u5143\u7d20\u5185"),r.a.createElement("p",null,"\u5305\u542b\u4e8eAnt-Modal\u5185"),r.a.createElement("img",{alt:"\u56fe\u7247",className:"g-sample-image",src:D,onClick:function(){return c(3)}}),r.a.createElement(w.a,{visible:3===n,width:y,onCancel:h,style:{width:"780px",height:"520px"}},r.a.createElement(B,{url:D,getImageLoadedSize:function(e){k(e.w+48)},fixedOnScreen:!1,operator:"default",visible:!0,onClose:h}))),r.a.createElement(j,null,r.a.createElement("h4",null,"\u7ec4\u4ef6\u6d4b\u8bd5"),r.a.createElement("p",null,"\u5c06\u60f3\u8981\u6d4b\u8bd5\u56fe\u7247\u5730\u5740\u8f93\u5165(\u7a7a\u767d\u4f7f\u7528\u9ed8\u8ba4\u56fe\u7247)"),r.a.createElement(g,{text:u,handleClick:function(e){e&&(m(e),localStorage.setItem("image-preview-url",e)),c(99)},buttonText:"\u663e\u793a\u9884\u89c8",className:"small-size"}),r.a.createElement(O.a,null,r.a.createElement("label",null,r.a.createElement(b.a,null),"\u7b80\u6613\u6a21\u5f0f"),r.a.createElement("label",null,r.a.createElement(b.a,null),"\u906e\u7f69\u56fa\u5b9a")),r.a.createElement(B,{url:u,simpleMode:!0,visible:99===n,onClose:h}))),r.a.createElement(x.a,{source:d,plugins:[N.a]}))},path:"/comp/image-preview"},{key:"levels",title:"\u9636\u7ea7\u5bfc\u822a \xb7 Levels",component:function(){var e=Object(a.useState)(X),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"demo-levels-wrapper"},r.a.createElement("h3",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u5c42\u7ea7\u5bfc\u822a\uff08Levels\uff09"),r.a.createElement("h4",null,"(\u5f00\u53d1\u4e2d)"),r.a.createElement("h4",null,"\u793a\u4f8b"),"\u5f53\u524d\u6570\u636e:",r.a.createElement(g,{text:"".concat(JSON.stringify(X)),handleClick:function(e){try{c(JSON.parse(e))}catch(t){console.error("error: INVALID JSON ARRAY FORMAT")}}}),r.a.createElement(T,{data:n}))},path:"/comp/levels"},{key:"code-paper",title:"\u4ee3\u7801\u5757 \xb7 CodePaper",component:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"\u4ee3\u7801\u5757"),r.a.createElement(g,{text:"",handleClick:function(e){v.a.info(e)}}))},path:"/comp/code-paper"},{key:"rolling-banner",title:"\u6eda\u52a8\u5e45 \xb7 RollingBanner",component:function(){return r.a.createElement("div",null,r.a.createElement(Y,null))},path:"/comp/rolling-banner"},{key:"waterfall",title:"\u7011\u5e03\u56fe \xb7 Waterfall",component:function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement(j,null,"conhdianqi cece na case cat"),r.a.createElement(j,null,"istals psrm"),r.a.createElement(j,null,"onhdianqi cece na case catonhdianqi cece na case cat"),r.a.createElement(j,null,"onhdianqi cece na case cat"),r.a.createElement(j,null,"onhdianqi cece na caonhdianqi cece na case catse catonhdianqi cece na case cat"),r.a.createElement(j,null,"onhdianqi cece na case catonhdianqi cece na case cat"),r.a.createElement(j,null,"onhdianqi cece na case cat"),r.a.createElement(j,null,"onhdianqi cece na conhdianqi cece na case catonhdianqi cece na case catonhdianqi cece na case catase cat"),r.a.createElement(j,null,"onhdianqi cece na case cat")))},path:"/comp/waterfall"}]}],$=function(){return r.a.createElement("div",null,"NOTFOUND")},Z=m.a.Header,ee=m.a.Sider,te=m.a.Content,ne=u.a.SubMenu;function ae(e){return r.a.createElement(E.a,{path:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var re=Object(E.f)((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=function(){return c(!n)};Object(a.useEffect)((function(){var e=/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);c(!!e)}),[]);var v=function(e){return r.a.createElement("span",null,r.a.createElement(s.a,null),r.a.createElement("span",null,e.title))};return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(ee,{width:250,trigger:null,reverseArrow:!0,collapsible:!0,collapsed:n},r.a.createElement("div",{className:"logo"},"\u7ec4\u4ef6\u5f00\u53d1\u5e73\u53f0"),r.a.createElement(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["home"],defaultOpenKeys:["comp"]},_.map((function(e){return e.routes?r.a.createElement(ne,{key:e.key,title:v(e)},e.routes.map((function(e){return r.a.createElement(u.a.Item,{key:e.key},r.a.createElement(o.b,{to:e.path},e.icon&&r.a.createElement(f.a,null),r.a.createElement("span",null,e.title)))}))):e.component?r.a.createElement(u.a.Item,{key:e.key},r.a.createElement(o.b,{to:e.path},e.icon&&r.a.createElement(f.a,null),r.a.createElement("span",null,e.title))):null})))),r.a.createElement(m.a,null,r.a.createElement(Z,{style:{background:"#fff",padding:0}},n?r.a.createElement(d.a,{onClick:l,className:"trigger"}):r.a.createElement(p.a,{onClick:l,className:"trigger"}),"\u6298\u53e0"),r.a.createElement(te,{className:"App-content"},r.a.createElement(E.c,null,"123",_.map((function(e){return r.a.createElement(ae,Object.assign({key:e.key},e))})),r.a.createElement(E.a,{component:$}))))),r.a.createElement(h,null))}));n(428),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){e.exports=n.p+"static/media/panda.6c7f1359.png"}},[[191,1,2]]]);
//# sourceMappingURL=main.81438a79.chunk.js.map