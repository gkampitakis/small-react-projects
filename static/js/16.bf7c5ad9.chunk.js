(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[16,34,35,59],{35:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n(107),i=Object(c.memo)(a.g),o=Object(c.memo)(a.q);function s(t){var e=t.data,n=t.editItem,c=t.removeItem;return Object(r.jsx)(r.Fragment,{children:!!e.length&&Object(r.jsx)("div",{className:"grocery-container",children:e.map((function(t){var e=t.title,a=t.id;return Object(r.jsxs)("article",{className:"grocery-item",children:[Object(r.jsx)("p",{className:"title",children:e}),Object(r.jsxs)("div",{className:"btn-container",children:[Object(r.jsx)("button",{onClick:function(){return n(a)},"data-testid":"edit-btn-".concat(a),className:"edit-btn",children:Object(r.jsx)(i,{})}),Object(r.jsx)("button",{onClick:function(){return c(a)},"data-testid":"delete-btn-".concat(a),className:"delete-btn",children:Object(r.jsx)(o,{})})]})]},a)}))})})}e.default=Object(c.memo)(s)},36:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(16),c=n(1),a=n(0);function i(t){var e=t.msg,n=t.type,i=t.data,o=Object(a.useState)(!1),s=Object(r.a)(o,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){if(e){l(!0);var t=setTimeout((function(){l(!1)}),3e3);return function(){clearTimeout(t)}}}),[i]),Object(c.jsx)(c.Fragment,{children:u&&Object(c.jsx)("p",{className:"alert alert-".concat(n),children:e})})}},57:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(13);var c=n(19);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n(16),l=n(1),b=n(0);function f(t,e){var n=localStorage.getItem(t);return n?JSON.parse(n):(e&&localStorage.setItem(t,JSON.stringify(e)),e)}var j=n(17),m=n(35),d=n(36);n(87);function O(){Object(j.a)({background:"hsl(210, 36%, 96%)",color:"hsl(209, 61%, 16%)"});var t=function(t,e){var n=Object(b.useState)(f(t,e)),r=Object(u.a)(n,2),c=r[0],a=r[1],i=Object(b.useCallback)((function(){a(f(t))}),[t]);return Object(b.useEffect)((function(){i()}),[i]),[c,function(e){try{var n=e instanceof Function?e(c):e;localStorage.setItem(t,JSON.stringify(n)),a(e)}catch(r){console.warn('Error setting localStorage key "'.concat(t,'": ').concat(r.message))}},i]}("groceryList",[]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(b.useState)(""),i=Object(u.a)(c,2),o=i[0],O=i[1],p=Object(b.useState)({msg:"",type:""}),g=Object(u.a)(p,2),y=g[0],h=g[1],v=Object(b.useState)(""),x=Object(u.a)(v,2),S=x[0],N=x[1];return Object(l.jsxs)("main",{className:"grocery_bud",children:[Object(l.jsxs)("form",{className:"grocery-form",onSubmit:function(t){if(t.preventDefault(),o){if(S)return r((function(t){return t.map((function(t){return t.id===S?s(s({},t),{},{title:o}):t}))})),h({type:"success",msg:"Item updated"}),O(""),void N("");r((function(t){return[].concat(a(t),[{title:o,id:(new Date).getTime().toString()}])})),h({type:"success",msg:"Item added to the list"}),O("")}},children:[Object(l.jsx)(d.default,{data:n,msg:y.msg,type:y.type}),Object(l.jsx)("h3",{children:"Grocery Bud"}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("input",{type:"text",className:"grocery",value:o,onChange:function(t){return O(t.target.value)},placeholder:"e.g. eggs"}),Object(l.jsx)("button",{type:"submit",className:"submit-btn",children:""!==S?"edit":"submit"})]})]}),Object(l.jsx)(m.default,{data:n,editItem:function(t){var e=n.find((function(e){return e.id===t}));O(e.title),N(t)},removeItem:function(t){r((function(e){return e.filter((function(e){return e.id!==t}))}))}}),!!n.length&&Object(l.jsx)("button",{className:"clear-btn",onClick:function(){h({type:"danger",msg:"Empty List"}),r([])},children:"clear items"})]})}},87:function(t,e,n){}}]);
//# sourceMappingURL=16.bf7c5ad9.chunk.js.map