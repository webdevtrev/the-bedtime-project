(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[15],{147:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(1),t(148);var c=t(0);function i(e){var n=e.children;return Object(c.jsx)("div",{className:"PageTitle-Container",children:Object(c.jsx)("h1",{className:"PageTitle",children:n})})}},148:function(e,n,t){},149:function(e,n,t){"use strict";function c(e){if(""!=e&&e)return e.replaceAll('src="/sites/default/files','src="https://drupal.bedtimeproject.dev/sites/default/files')}t.d(n,"a",(function(){return c}))},187:function(e,n,t){},188:function(e,n,t){},231:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return j}));var c=t(13),i=t(1),a=(t(187),t(149)),s=(t(188),t(0));function r(e){var n=e.quip,t=e.index,c=e.openQuip,i=e.setOpenQuip,r=Object(a.a)(n.field_main_image);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("style",{children:"\n        .QuipsDisplay-Container.Quip".concat(t," {\n          z-index: ").concat(t+1,";\n          animation: sendBackToSpot").concat(t," 1s ease;\n        }\n\n        .QuipsDisplay-Container.Quip").concat(t,".Active {\n          animation: bringToFront").concat(t," 1s ease;\n          z-index: 1000;\n          transform: scale(1.1);\n        }\n\n        @keyframes bringToFront").concat(t," {\n          0% {\n            transform: translateY(0%) scale(1);\n            z-index: ").concat(t+1,";\n          }\n      \n          50% {\n            transform: translateY(-110%) rotate(5deg) rotateX(20deg);\n            z-index: ").concat(t+1,";\n          }\n          51% {\n            z-index: 1000;\n          }\n      \n          100% {\n            transform: translateY(0%) scale(1.1);\n            z-index: 1000;\n          }\n        }\n      \n        @keyframes sendBackToSpot").concat(t," {\n          0% {\n            transform: translateY(0%) scale(1.1);\n            z-index: 1000;\n          }\n      \n          49% {\n            z-index: 1000;\n          }\n\n          50% {\n            transform: translateY(-110%) rotate(5deg) rotateX(20deg);\n            z-index: ").concat(t+1,";\n          }\n      \n          100% {\n            transform: translatey(0%) scale(1);\n            z-index: ").concat(t+1,";\n          }\n        }\n      ")}),Object(s.jsx)("div",{className:"QuipsDisplay-Container Quip".concat(t," ").concat(c===t?"Active":""),style:{top:30*t+80},children:Object(s.jsxs)("div",{className:"QuipsInternalWrapper",children:[Object(s.jsx)("button",{className:"QuipTitleButton",onClick:function(){i(c===t?void 0:t)},children:Object(s.jsx)("h2",{children:n.title})}),Object(s.jsxs)("div",{className:"LeftBox",children:[Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:n.body}}),n.field_author&&Object(s.jsxs)("div",{className:"Author",children:["- ",n.field_author]})]}),r&&Object(s.jsx)("div",{className:"RightBox",children:Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})})]})})]})}var o=t(147),l=t(43),d=t(42),u=t(66);function j(){var e=Object(i.useState)([]),n=Object(c.a)(e,2),t=n[0],a=n[1],j=Object(i.useState)(void 0),p=Object(c.a)(j,2),f=p[0],h=p[1],b=Object(i.useState)(!1),m=Object(c.a)(b,2),x=m[0],O=m[1];function v(e){var n=Array.from(document.querySelectorAll(".QuipTitleButton")),t=Array.from(document.querySelectorAll(".QuipTitleButton h2")),c=n.includes(e.target),i=t.includes(e.target);c||i||h(void 0)}return Object(i.useEffect)((function(){return fetch("https://drupal.bedtimeproject.dev/rest/views/quips").then((function(e){return e.json()})).then((function(e){a(e),O(!1)})).catch((function(){return O(!0)})),window.addEventListener("click",v),function(){window.removeEventListener("click",v)}}),[]),Object(s.jsxs)(l.a,{children:[Object(s.jsx)(d.a,{title:"Quips"}),Object(s.jsx)("div",{className:"QuipsContainer",children:Object(s.jsx)("div",{className:"Limerick-Display-Container",children:Object(s.jsxs)("div",{className:"Drawer",children:[x?Object(s.jsx)("div",{className:"QuipErrorWrapper",children:Object(s.jsx)("p",{children:"Please check your connection and reload this page."})}):t.length?t.map((function(e,n){return Object(s.jsx)(r,{quip:e,index:n,openQuip:f,setOpenQuip:h},n)})):Object(s.jsx)("div",{className:"QuipsLoader",children:Object(s.jsx)(u.a,{})}),Object(s.jsxs)("div",{className:"drawer",children:[Object(s.jsx)(o.a,{children:"Quips"}),Object(s.jsx)("div",{className:"handle"})]})]})})})]})}}}]);
//# sourceMappingURL=15.e8661cda.chunk.js.map