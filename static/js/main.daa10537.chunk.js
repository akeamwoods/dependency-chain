(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(n,e,t){n.exports=t(24)},19:function(n,e,t){},23:function(n,e,t){var r={"./file1.js":[25,3],"./file2.js":[26,4],"./file3.js":[27,5],"./file4.js":[28,6],"./file5.js":[29,7]};function a(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],a=e[0];return t.e(e[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=23,n.exports=a},24:function(n,e,t){"use strict";t.r(e),t.d(e,"App",(function(){return v}));var r=t(0),a=t.n(r),i=t(9),c=t.n(i),o=(t(19),t(4)),l=t.n(o),u=t(10),s=t(6),f=t(1),p=t(2);function d(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  img {\n    margin-right: 10px;\n  }\n  h1 {\n    font-size: 1.7em;\n  }\n"]);return d=function(){return n},n}var m=p.a.div(d()),g=function(){return a.a.createElement(m,null,a.a.createElement("img",{src:"/dependency-chain/chain.svg",alt:"logo",height:"30px"}),a.a.createElement("h1",null,"Dependency Chain"))};function h(){var n=Object(f.a)(["\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  p {\n    margin: 0;\n    color: #fff;\n    font-weight: 600;\n    text-align: center;\n  }\n  button {\n    margin: 20px;\n    cursor: pointer;\n    padding: 15px 30px;\n    background: #fff;\n    border: 2px solid #fff;\n    border-radius: 3px;\n    transform: scale(0.9);\n    transition: 0.3s;\n    font-weight: bold;\n    :hover {\n      transform: scale(1);\n    }\n  }\n"]);return h=function(){return n},n}var b=p.a.div(h()),x=function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),i=e[0],c=e[1],o=Object(r.useState)(1),f=Object(s.a)(o,2),p=f[0],d=f[1],m=function(){var n=Object(u.a)(l.a.mark((function n(e){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e<=5)){n.next=8;break}return c(!0),n.next=4,t(23)("./file".concat(e,".js"));case 4:return n.next=6,n.sent.default();case 6:c(!1),d(e+1);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(b,null,a.a.createElement(g,null),a.a.createElement("p",null,"Clicking the button below will sequentially load/execute a series of javascript files."),a.a.createElement("button",{onClick:function(){return m(p)},disabled:p>5},"Load"),i&&a.a.createElement("img",{src:"/dependency-chain/loading.svg",alt:"logo"}))},v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.daa10537.chunk.js.map