(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[24,29,39,40],{28:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return s}));var n=c(1),r=(c(0),c(25));function s(e){var t=e.id,c=e.img,s=e.title,a=e.price,i=e.amount,l=Object(r.useGlobalContext)(),j=l.remove,o=l.increase,d=l.decrease;return Object(n.jsxs)("article",{className:"cart-item",children:[Object(n.jsx)("img",{src:c,alt:s}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:s}),Object(n.jsx)("h4",{className:"item-price",children:a}),Object(n.jsx)("button",{"aria-label":"remove",className:"remove-btn",onClick:function(){return j(t)},children:"remove"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{"aria-label":"increase",className:"amount-btn",onClick:function(){return o(t)},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"})})}),Object(n.jsx)("p",{className:"amount",children:i}),Object(n.jsx)("button",{"aria-label":"decrease",className:"amount-btn",onClick:function(){return d(t)},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})}},30:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return s}));var n=c(1),r=(c(0),c(25));function s(){var e=Object(r.useGlobalContext)().amount;return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Cart Project"}),Object(n.jsxs)("div",{className:"amount-container",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})}),Object(n.jsx)("div",{className:"amount",children:Object(n.jsx)("p",{children:e})})]})]})})}},31:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var n=c(153),r=c(1),s=(c(0),c(25)),a=c(28);function i(){var e=Object(s.useGlobalContext)(),t=e.cart,c=e.total,i=e.clearCart;return t.length?Object(r.jsxs)("section",{className:"cart-container",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{children:"Your Bag"})}),Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(a.default,Object(n.a)({},e),e.id)}))}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"cart-total",children:Object(r.jsxs)("h4",{children:["total ",Object(r.jsxs)("span",{children:["$",c.toFixed(2)]})]})}),Object(r.jsx)("button",{onClick:i,children:"clear cart"})]})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"cart-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:"Your Bag"}),Object(r.jsx)("h4",{className:"empty-cart",children:"is currently empty"})]})})})}},42:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var n=c(1),r=(c(0),c(25)),s=c(30),a=c(31);function i(){var e=Object(r.useGlobalContext)().loading;return Object(n.jsxs)("main",{className:"cart_project",children:[e&&Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("h1",{children:"Loading ..."})}),!e&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.default,{}),Object(n.jsx)(a.default,{})]})]})}}}]);