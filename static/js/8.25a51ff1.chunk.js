(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[8,45,46,63],{122:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(15),s=c(0);function a(e){var t=Object(s.useState)(!0),c=Object(n.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(null),o=Object(n.a)(i,2),j=o[0],l=o[1],u=Object(s.useState)(void 0),d=Object(n.a)(u,2),b=d[0],f=d[1],O=Object(s.useCallback)((function(){r(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return l(e)})).finally((function(){return r(!1)}))}),[e]);return Object(s.useEffect)((function(){O()}),[O]),[b,a,O,j]}},123:function(e,t,c){"use strict";var n=c(1),s=c(0);t.a=function(e){var t=e.error,c=e.message;Object(s.useEffect)((function(){t&&console.log(t)}),[t]);var a=c||(null===t||void 0===t?void 0:t.message);return Object(n.jsxs)("main",{className:"error_component",children:[Object(n.jsx)("img",{src:"./images/error.svg",alt:"Error page image"}),Object(n.jsxs)("footer",{children:[a&&Object(n.jsx)("h2",{children:a}),t&&Object(n.jsx)("p",{children:"You can check console for more information"})]})]})}},27:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return s}));var n=c(1);c(0);function s(e){var t=e.selected,c=void 0!==t&&t,s=e.title,a=e.handler;return Object(n.jsx)("button",{className:"tab-btn ".concat(c?"selected":""),onClick:a,children:s})}},28:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return a}));var n=c(1),s=(c(0),c(99));function a(e){var t=e.data;return Object(n.jsxs)("section",{className:"details",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:t.title}),Object(n.jsx)("h4",{children:t.company}),Object(n.jsx)("p",{className:"date",children:t.dates})]}),t.duties.map((function(e,t){return Object(n.jsxs)("div",{className:"job-desc",children:[Object(n.jsx)(s.a,{className:"duty-icon"}),Object(n.jsx)("p",{children:e})]},t)}))]})}},51:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var n=c(15),s=c(1),a=c(0),r=c(16),i=c(122),o=c(28),j=c(27),l=c(123);c(83);function u(){Object(r.a)({background:"hsl(210, 36%, 96%)",color:"hsl(209, 61%, 16%)"});var e=Object(i.a)("https://course-api.com/react-tabs-project"),t=Object(n.a)(e,4),c=t[0],u=t[1],d=(t[2],t[3]),b=Object(a.useState)(0),f=Object(n.a)(b,2),O=f[0],h=f[1];return Object(s.jsxs)("main",{className:"tabs_project",children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"Experience"}),Object(s.jsx)("div",{className:"underline"})]})}),u&&Object(s.jsx)("h2",{className:"loading",children:"Loading..."}),d&&Object(s.jsx)(l.a,{message:d}),c&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"main-content",children:[Object(s.jsx)("section",{className:"tabs-container",children:c.map((function(e,t){var c=e.company,n=e.id;return Object(s.jsx)(j.default,{selected:t===O,title:c,handler:function(){return h(t)}},n)}))}),Object(s.jsx)(o.default,{data:c[O]})]}),Object(s.jsx)("button",{className:"info-btn",children:"more info"})]})]})}},83:function(e,t,c){}}]);
//# sourceMappingURL=8.25a51ff1.chunk.js.map