(this.webpackJsonpgears=this.webpackJsonpgears||[]).push([[0],{105:function(e,t,n){},143:function(e,t,n){e.exports=n(268)},152:function(e,t,n){},157:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},228:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=n(44),i=n(10),u=(n(269),n(54)),m=(n(150),n(48)),s=n(272),p=n(273),f=n(274),d=n(275),E=n(30),g=(n(152),n(153),n(139)),h=(n(155),n(141)),v=(n(157),function(e){var t=Object(a.useRef)(null);return c.a.createElement("div",{className:"g-code-paper-wrapper"},c.a.createElement("textarea",{ref:t,defaultValue:e.text,className:"g-code-paper-textarea ".concat(e.className)}),e.handleClick&&c.a.createElement(h.a,{onClick:function(){var n=t.current.value;e.handleClick&&e.handleClick(n)}},e.buttonText?e.buttonText:"\u66f4\u65b0\u6570\u636e"))}),b=n(52),w=n.n(b),O=(n(215),n(32)),k=function(e){var t=e.menu,n=e.children,r=Object(a.useState)({x:0,y:0}),l=Object(i.a)(r,2),o=l[0],u=l[1],m=Object(a.useState)(!1),s=Object(i.a)(m,2),p=s[0],f=s[1],d={position:"fixed",left:o.x,top:o.y,backgroundColor:"white",borderRadius:"4px"};return c.a.createElement("div",{onClick:function(e){f(!1),e.stopPropagation()},onContextMenu:function(e){e.preventDefault(),u({x:e.clientX,y:e.clientY}),f(!0)}},n,p&&c.a.createElement("div",{style:d},t),";")},y=(n(216),{w:0,h:0,r:0,s:1,l:0,t:0,centerX:0,centerY:0,wStatic:0,hStatic:0,rotateTime:0});function j(e){var t=e.url,n=e.children,r=void 0===n?null:n,l=e.fixed,o=void 0===l||l,u=e.visible,m=e.onClose,s=Object(a.useState)(y),p=Object(i.a)(s,2),f=p[0],d=p[1],E=Object(a.useState)(y),g=Object(i.a)(E,2),h=g[0],v=g[1],b=Object(a.useRef)(null),w={cursor:"move",position:"absolute",left:"".concat(f.l,"px"),top:"".concat(f.t,"px"),width:"".concat(f.w,"px"),height:"".concat(f.h,"px"),transform:"translate(-50%, -50%) rotate(".concat(f.r,"deg) scale(").concat(f.s,", ").concat(f.s,")")},j=function(){K(!1),W(!1),d(h)},x=function(e){j(),m&&m()},C=c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){return R("rotate")}},"\u81ea\u7531\u65cb\u8f6c"),c.a.createElement("p",{onClick:function(){return R("drag")}},"\u81ea\u7531\u62d6\u62fd"),c.a.createElement("p",{onClick:void 0},"\u4e0b\u8f7d\u56fe\u7247")),S=Object(a.useState)("drag"),N=Object(i.a)(S,2),M=N[0],T=N[1],R=function(e){return T(e)},Y=Object(a.useState)({x:0,y:0}),I=Object(i.a)(Y,2),X=I[0],A=I[1],D=Object(a.useState)(!1),L=Object(i.a)(D,2),P=L[0],W=L[1],H=Object(a.useState)({x:0,y:0}),J=Object(i.a)(H,2),z=J[0],q=J[1],B=Object(a.useState)(!1),F=Object(i.a)(B,2),G=F[0],K=F[1];return u?c.a.createElement("div",{className:"g-image-preview-wrapper ".concat(o?"g-fixed-wrapper":""),onClick:o?x:void 0},r,c.a.createElement("div",{className:"g-image-preview-close",onClick:x},"X"),c.a.createElement(k,{menu:C},c.a.createElement("img",{className:"g-image-preview-image ".concat(o?"g-image-preview-image-fixed":""),onMouseDown:function(e){"drag"===M?function(e){e.preventDefault(),W(!0),A({x:e.clientX-b.current.offsetLeft,y:e.clientY-b.current.offsetTop})}(e):function(e){e.preventDefault(),q({x:e.clientX,y:e.clientY}),K(!0)}(e)},onMouseMove:function(e){"drag"===M?function(e){if(P){var t=e.clientX-X.x,n=e.clientY-X.y;d((function(e){return Object(O.a)({},e,{l:t,t:n})}))}}(e):function(e){if(G){var t={x:e.clientX,y:e.clientY},n=function(e,t){return Math.sqrt(Math.pow(Math.abs(e.x-t.x),2)+Math.pow(Math.abs(e.y-t.y),2))},a=b.current.getBoundingClientRect(),c={x:(a.left+a.right)/2,y:(a.top+a.bottom)/2},r=n(t,z),l=n(t,c),o=n(z,c),i=(l*l+o*o-r*r)/(2*l*o),u=Math.acos(i);z.y,z.x;d((function(e){return Object(O.a)({},e,{r:e.r+u})}))}}(e)},onMouseUp:function(e){"drag"===M?W(!1):function(e){q({x:e.clientX,y:e.clientY}),K(!1)}(e)},onClick:function(e){return e.stopPropagation()},style:w,onLoad:function(){if(b.current){var e=function(e){var t=window.innerWidth/2,n=window.innerHeight/2,a=.9*window.innerWidth,c=.9*window.innerHeight-100,r=e.naturalWidth,l=e.naturalHeight,o=r/a,i=l/c,u=o<1&&i<1?{w:r,h:l}:o>i?{w:a,h:l/o}:{w:r/i,h:c},m={t:n,l:t,w:u.w,h:u.h,wStatic:u.w,hStatic:u.h},s=Object(O.a)({},f,{},m);return d(s),s}(b.current);v(e)}},ref:b,src:t,alt:"\u56fe\u7247",onWheel:function(e){var t=e.deltaY<0?.05:-.05,n=e.clientX-f.l,a=e.clientY-f.t,c=f.w*(1+t),r=f.h*(1+t),l=f.l,o=f.t,i=l-t*n,u=o-t*a;d((function(e){var t=Object(O.a)({},e,{w:c,h:r,l:i,t:u,everRotated:!1});return console.log("origin",e,"current",t),t}))}})),c.a.createElement("div",{className:"g-image-preview-action-bar",onClick:function(e){return e.stopPropagation()}},c.a.createElement("i",{className:"g-action",onClick:function(e){d((function(e){return Object(O.a)({},e,{w:1.05*f.w,h:1.05*f.h})}))}},"+"),c.a.createElement("i",{className:"g-action",onClick:function(e){d((function(e){return Object(O.a)({},e,{w:.95*f.w,h:.95*f.h})}))}},"-"),c.a.createElement("i",{className:"g-action",onClick:function(e){d((function(e){return Object(O.a)({},e,{r:e.r+90,rotateTime:++e.rotateTime})}))}},"ROTATE"),c.a.createElement("i",{className:"g-action",onClick:j},"RESET"))):c.a.createElement(c.a.Fragment,null)}n(105);var x=function(e){var t=e.level,n=e.depth,r=e.route,l=Object(a.useState)(!!window.location.pathname.match(r)),o=Object(i.a)(l,2),u=o[0],m=o[1],s=function(e){return window.location.replace(e)},p=function(e){return console.log(e)};return c.a.createElement("div",{key:t.name,className:function(e){return"g-levels-link ".concat(e?"g-small-font":"")}(n),onClick:function(){return function(e,t){return m((function(e){return!e})),e.static?s(e.route):p(t)}(t,r)},style:u?{color:"#2dc6ad"}:void 0},c.a.createElement("span",{style:{paddingLeft:"".concat(n,"em")}}),t.name)},C=function(e){var t=e.data,n=e.fontSize,a=void 0===n?45:n;return c.a.createElement("div",{className:"g-levels-wrapper"},t.map((function(e){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,l=r?"".concat(r,"/").concat(t.route):t.route;return c.a.createElement("div",{key:t.name},c.a.createElement(x,{level:t,depth:n,route:l,fontSize:a}),t.deep&&t.deep.map((function(t){return e(t,n+1,l)})))}(e)})))},S=[{name:"Pipeline",route:"pipeline"},{name:"Github",route:"https://github.com/",static:!0},{name:"Ground",route:"ground",deep:[{name:"Solid",route:"solid",deep:[{name:"Dust",route:"dust"},{name:"Germ",route:"germ"}]},{name:"Liquid",route:"liquid"}]}],N=(n(217),function(e){return c.a.createElement("span",{className:"g-icon-rotate",onClick:e.handleClick})}),M=(n(218),function(e){var t=e.routes;return c.a.createElement("div",{className:"p-comp"},c.a.createElement(E.c,null,t.map((function(e){return c.a.createElement(z,Object.assign({key:e.key},e))}))))}),T=(n(107),n(31)),R=(n(222),n(140)),Y=(n(109),n(15)),I=(n(224),n(133)),X=(n(270),n(138)),A=(n(228),X.a.Meta),D=[{key:"home",icon:"home",title:"\u9996\u9875",exact:!0,component:function(){var e,t=(new Date).getHours(),n=t>=12&&t<=17?"\u4e0b\u5348\u597d, \u8bb0\u5f97\u591a\u8d77\u6765\u52a8\u52a8":t>=17&&t<=23?"\u665a\u4e0a\u597d, \u8981\u591a\u591a\u73a9\u800d~":t>23||t<5?"\u6df1\u591c\u4e86, \u5feb\u4f11\u606f\u5427":"\u65e9\u4e0a\u597d, \u8fce\u63a5\u4e00\u5929\u6700\u597d\u7684\u9633\u5149";return c.a.createElement("div",{className:"p-home"},c.a.createElement("h3",null," \u7ec4\u4ef6\u5e73\u53f0 "),c.a.createElement(T.a,null,c.a.createElement(Y.a,{span:20},c.a.createElement(A,{avatar:c.a.createElement(I.a,{style:{marginTop:5},size:"large",src:w.a}),title:"".concat(n),description:"\u7ec4\u4ef6\u76ee\u5f55\u5728\u4fa7\u680f, \u8bf7\u9009\u62e9\u67e5\u770b"})),c.a.createElement(Y.a,{style:{marginTop:-13},span:4},c.a.createElement(R.a,{title:"\u5f53\u524d\u7ec4\u4ef6\u603b\u6570",value:null===(e=D[1].routes)||void 0===e?void 0:e.length}))))},inMenu:!0,path:"/"},{key:"comp",icon:"gold",title:"\u7ec4\u4ef6",inMenu:!0,component:M,path:"/comp",routes:[{key:"image-preview",title:"\u56fe\u7247\u9884\u89c8 \xb7 ImagePreview",component:function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),u=o[0],m=o[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),f=p[0],d=p[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("image-preview-url");e&&d(e)}),[]),c.a.createElement("div",null,c.a.createElement("h3",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u56fe\u7247\u9884\u89c8\uff08ImagePreview\uff09"),c.a.createElement("h4",null,"\u57fa\u7840\u64cd\u4f5c: \u6eda\u8f6e\u7f29\u653e \u65cb\u8f6c \u91cd\u7f6e"),c.a.createElement("br",null),c.a.createElement("h4",null,"\u793a\u4f8b\u56fe\u7247"),c.a.createElement("img",{src:w.a,alt:"\u56fe\u7247",onClick:function(){r(!0)}}),c.a.createElement(j,{url:w.a,fixed:!0,visible:n,onClose:function(){r(!1)}}),c.a.createElement("br",null),c.a.createElement("h4",null,"\u7f51\u7edc\u56fe\u7247"),c.a.createElement("p",null,"\u5c06\u60f3\u8981\u6d4b\u8bd5\u56fe\u7247\u5730\u5740\u8f93\u5165(\u7a7a\u767d\u4f7f\u7528\u9ed8\u8ba4\u56fe\u7247)"),c.a.createElement(v,{text:f,handleClick:function(e){e&&(d(e),localStorage.setItem("image-preview-url",e)),m(!0)},buttonText:"\u663e\u793a\u9884\u89c8",className:"small-size"}),c.a.createElement(j,{url:f,fixed:!0,visible:u,onClose:function(){m(!1)}}))},path:"/comp/image-preview"},{key:"levels",title:"\u9636\u7ea7\u5bfc\u822a \xb7 Levels",component:function(){var e=Object(a.useState)(S),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"demo-levels-wrapper"},c.a.createElement("h3",null,"\u7ec4\u4ef6\u540d\u79f0\uff1a\u5c42\u7ea7\u5bfc\u822a\uff08Levels\uff09"),c.a.createElement("h4",null,"(\u5f00\u53d1\u4e2d)"),c.a.createElement("h4",null,"\u793a\u4f8b"),"\u5f53\u524d\u6570\u636e:",c.a.createElement(v,{text:"".concat(JSON.stringify(S)),handleClick:function(e){try{r(JSON.parse(e))}catch(t){console.error("error: INVALID JSON ARRAY FORMAT")}}}),c.a.createElement(C,{data:n}))},path:"/comp/levels"},{key:"code-paper",title:"\u4ee3\u7801\u5757 \xb7 CodePaper",component:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"\u4ee3\u7801\u5757"),c.a.createElement(v,{text:"",handleClick:function(e){g.a.info(e)}}))},path:"/comp/code-paper"},{key:"loading",title:"\u52a0\u8f7d \xb7 Loading",component:function(){return c.a.createElement("div",null,c.a.createElement(N,null))},path:"/comp/loading"}]}],L=function(){return c.a.createElement("div",null,"NOTFOUND")},P=m.a.Header,W=m.a.Sider,H=m.a.Content,J=u.a.SubMenu;function z(e){return c.a.createElement(E.a,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var q=Object(E.f)((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=function(){return r(!n)},g=function(e){return c.a.createElement("span",null,c.a.createElement(s.a,null),c.a.createElement("span",null,e.title))};return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(W,{width:250,trigger:null,reverseArrow:!0,collapsible:!0,collapsed:n},c.a.createElement("div",{className:"logo"}),c.a.createElement(u.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["home"],defaultOpenKeys:["comp"]},D.map((function(e){return e.routes?c.a.createElement(J,{key:e.key,title:g(e)},e.routes.map((function(e){return c.a.createElement(u.a.Item,{key:e.key},c.a.createElement(o.b,{to:e.path},e.icon&&c.a.createElement(p.a,null),c.a.createElement("span",null,e.title)))}))):e.component?c.a.createElement(u.a.Item,{key:e.key},c.a.createElement(o.b,{to:e.path},e.icon&&c.a.createElement(p.a,null),c.a.createElement("span",null,e.title))):null})))),c.a.createElement(m.a,null,c.a.createElement(P,{style:{background:"#fff",padding:0}},n?c.a.createElement(f.a,{onClick:l,className:"trigger"}):c.a.createElement(d.a,{onClick:l,className:"trigger"}),"\u6298\u53e0"),c.a.createElement(H,{className:"App-content"},c.a.createElement(E.c,null,"123",D.map((function(e){return c.a.createElement(z,Object.assign({key:e.key},e))})),c.a.createElement(E.a,{component:L}))))))}));n(267),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,n){e.exports=n.p+"static/media/panda.6c7f1359.png"}},[[143,1,2]]]);
//# sourceMappingURL=main.1684a903.chunk.js.map