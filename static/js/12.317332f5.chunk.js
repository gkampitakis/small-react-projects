(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[12,60,61,82],{147:function(e,t,n){},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c.a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l}));var c=n(17),r=n(0);function s(e){Object(r.useEffect)((function(){document.title=e}))}var a=n(16);function o(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(null),i=Object(a.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(void 0),d=Object(a.a)(j,2),f=d[0],b=d[1],O=Object(r.useCallback)((function(){s(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return l(e)})).finally((function(){return s(!1)}))}),[e]);return Object(r.useEffect)((function(){O()}),[O]),[f,c,O,u]}function i(e,t){var n=localStorage.getItem(e);return n?JSON.parse(n):(t&&localStorage.setItem(e,JSON.stringify(t)),t)}function u(e,t){var n=Object(r.useState)(i(e,t)),c=Object(a.a)(n,2),s=c[0],o=c[1],u=Object(r.useCallback)((function(){o(i(e))}),[e]);return Object(r.useEffect)((function(){u()}),[u]),[s,function(t){try{var n=t instanceof Function?t(s):t;localStorage.setItem(e,JSON.stringify(n)),o(t)}catch(c){console.warn('Error setting localStorage key "'.concat(e,'": ').concat(c.message))}},u]}function l(e,t){Object(r.useEffect)((function(){var n=function(n){var c=e.current;c&&!c.contains((null===n||void 0===n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},154:function(e,t,n){"use strict";var c=n(1),r=n(0),s=n.p+"static/media/error.5df9e372.svg";t.a=function(e){var t=e.error,n=e.message;Object(r.useEffect)((function(){t&&console.log(t)}),[t]);var a=n||(null===t||void 0===t?void 0:t.message);return Object(c.jsxs)("main",{className:"error_component",children:[Object(c.jsx)("img",{src:s,alt:"Error page image"}),Object(c.jsxs)("footer",{children:[a&&Object(c.jsx)("h2",{children:a}),t&&Object(c.jsx)("p",{children:"You can check console for more information"})]})]})}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(1),r=(n(0),n(150));function s(e){var t=e.data;return Object(c.jsxs)("section",{className:"details",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h3",{children:t.title}),Object(c.jsx)("h4",{children:t.company}),Object(c.jsx)("p",{className:"date",children:t.dates})]}),t.duties.map((function(e,t){return Object(c.jsxs)("div",{className:"job-desc",children:[Object(c.jsx)(r.a,{className:"duty-icon"}),Object(c.jsx)("p",{children:e})]},t)}))]})}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);n(0);function r(e){var t=e.selected,n=void 0!==t&&t,r=e.title,s=e.handler;return Object(c.jsx)("button",{className:"tab-btn ".concat(n?"selected":""),onClick:s,children:r})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(16),r=n(1),s=n(0),a=n(149),o=n(64),i=n(65),u=n(154);n(147);function l(){Object(a.a)({background:"hsl(210, 36%, 96%)",color:"hsl(209, 61%, 16%)"}),Object(a.b)("Tabs");var e=Object(a.c)("https://course-api.com/react-tabs-project"),t=Object(c.a)(e,4),n=t[0],l=t[1],j=(t[2],t[3]),d=Object(s.useState)(0),f=Object(c.a)(d,2),b=f[0],O=f[1];return Object(r.jsxs)("main",{className:"tabs_project",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{children:"Experience"}),Object(r.jsx)("div",{className:"underline"})]})}),l&&Object(r.jsx)("h2",{className:"loading",children:"Loading..."}),j&&Object(r.jsx)(u.a,{message:j}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"main-content",children:[Object(r.jsx)("section",{className:"tabs-container",children:n.map((function(e,t){var n=e.company,c=e.id;return Object(r.jsx)(i.default,{selected:t===b,title:n,handler:function(){return O(t)}},c)}))}),Object(r.jsx)(o.default,{data:n[b]})]}),Object(r.jsx)("button",{className:"info-btn",children:"more info"})]})]})}}}]);