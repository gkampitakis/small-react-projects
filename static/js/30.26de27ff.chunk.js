(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[30],{153:function(e,t,c){"use strict";function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function n(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}c.d(t,"a",(function(){return s}))},34:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var r=c(153),n=c(1),s=(c(0),c(8));function i(e){var t=e.items;return t.length?Object(n.jsxs)("section",{className:"cocktail-list",children:[Object(n.jsx)("h2",{className:"title",children:"Cocktails"}),Object(n.jsx)("div",{className:"cocktails-center",children:t.map((function(e){return Object(n.jsx)(a,Object(r.a)({},e),e.id)}))})]}):Object(n.jsx)("h2",{className:"title",children:"no cocktails match your search"})}function a(e){var t=e.glass,c=e.id,r=e.image,i=e.info,a=e.name;return Object(n.jsxs)("article",{className:"cocktail",children:[Object(n.jsx)("div",{className:"img-container",children:Object(n.jsx)("img",{src:r,alt:a})}),Object(n.jsxs)("div",{className:"cocktail-footer",children:[Object(n.jsx)("h3",{children:a}),Object(n.jsx)("h4",{children:t}),Object(n.jsx)("p",{children:i}),Object(n.jsx)(s.b,{to:"/cocktails/details/".concat(c),className:"btn",children:"details"})]})]})}}}]);