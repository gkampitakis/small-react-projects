(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[21,68,69,87],{145:function(e,t,n){},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return c.a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return l}));var c=n(17),r=n(0);function o(e){Object(r.useEffect)((function(){document.title=e}))}var s=n(16);function u(e){var t=Object(r.useState)(!0),n=Object(s.a)(t,2),c=n[0],o=n[1],u=Object(r.useState)(null),i=Object(s.a)(u,2),a=i[0],l=i[1],j=Object(r.useState)(void 0),f=Object(s.a)(j,2),d=f[0],b=f[1],O=Object(r.useCallback)((function(){o(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return l(e)})).finally((function(){return o(!1)}))}),[e]);return Object(r.useEffect)((function(){O()}),[O]),[d,c,O,a]}function i(e,t){var n=localStorage.getItem(e);return n?JSON.parse(n):(t&&localStorage.setItem(e,JSON.stringify(t)),t)}function a(e,t){var n=Object(r.useState)(i(e,t)),c=Object(s.a)(n,2),o=c[0],u=c[1],a=Object(r.useCallback)((function(){u(i(e))}),[e]);return Object(r.useEffect)((function(){a()}),[a]),[o,function(t){try{var n=t instanceof Function?t(o):t;localStorage.setItem(e,JSON.stringify(n)),u(t)}catch(c){console.warn('Error setting localStorage key "'.concat(e,'": ').concat(c.message))}},a]}function l(e,t){Object(r.useEffect)((function(){var n=function(n){var c=e.current;c&&!c.contains((null===n||void 0===n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},187:function(e,t,n){"use strict";var c=n(1),r=n(0),o=n.p+"static/media/error.5df9e372.svg";t.a=function(e){var t=e.error,n=e.message;Object(r.useEffect)((function(){t&&console.log(t)}),[t]);var s=n||(null===t||void 0===t?void 0:t.message);return Object(c.jsxs)("main",{className:"error_component",children:[Object(c.jsx)("img",{src:o,alt:"Error page image"}),Object(c.jsxs)("footer",{children:[s&&Object(c.jsx)("h2",{children:s}),t&&Object(c.jsx)("p",{children:"You can check console for more information"})]})]})}},32:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(16),r=n(1),o=n(0);function s(e){var t=e.data,n=e.removeTour,s=Object(o.useState)(!1),u=Object(c.a)(s,2),i=u[0],a=u[1];return Object(r.jsxs)("article",{className:"single-tour",children:[Object(r.jsx)("img",{src:t.image,alt:t.name}),Object(r.jsxs)("footer",{children:[Object(r.jsxs)("div",{className:"tour-info",children:[Object(r.jsx)("h4",{children:t.name}),Object(r.jsx)("h4",{className:"tour-price",children:t.price})]}),Object(r.jsxs)("p",{children:[i?t.info:"".concat(t.info.substring(0,200),"..."),Object(r.jsx)("button",{onClick:function(){return a(!i)},children:i?"show less":"read more"})]}),Object(r.jsx)("button",{className:"delete-btn",onClick:n,children:"Not interested"})]})]})}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);n(0);function r(){return Object(c.jsx)("h2",{className:"loading",children:"Loading ..."})}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(16),r=n(1),o=n(0),s=n(162),u=n(56),i=n(187),a=n(32);n(145);function l(){Object(s.a)({background:"hsl(210, 36%, 96%)",color:"hsl(209, 61%, 16%)"}),Object(s.b)("Tours");var e=Object(s.c)("https://course-api.com/react-tours-project"),t=Object(c.a)(e,4),n=t[0],l=t[1],j=t[2],f=t[3],d=Object(o.useState)([]),b=Object(c.a)(d,2),O=b[0],m=b[1];return Object(o.useEffect)((function(){m(n)}),[n]),Object(r.jsxs)("main",{className:"tours",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{children:"our tours"}),Object(r.jsx)("div",{className:"underline"})]}),l&&Object(r.jsx)(u.default,{})||f&&Object(r.jsx)(i.a,{message:f})||O&&Object(r.jsxs)(r.Fragment,{children:[O.map((function(e){return Object(r.jsx)(a.default,{removeTour:function(){return t=e.id,void m((function(e){return e.filter((function(e){return e.id!==t}))}));var t},data:e},e.id)})),0===O.length&&Object(r.jsx)("div",{className:"refetch-container",children:Object(r.jsx)("button",{onClick:j,children:"Refresh"})})]})]})}}}]);