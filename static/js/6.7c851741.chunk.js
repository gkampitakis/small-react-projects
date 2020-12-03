(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[6,76],{135:function(t,e,n){},162:function(t,e,n){"use strict";n.d(e,"a",(function(){return c.a})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return l}));var c=n(17),r=n(0);function a(t){Object(r.useEffect)((function(){document.title=t}))}var o=n(16);function i(t){var e=Object(r.useState)(!0),n=Object(o.a)(e,2),c=n[0],a=n[1],i=Object(r.useState)(null),u=Object(o.a)(i,2),s=u[0],l=u[1],j=Object(r.useState)(void 0),d=Object(o.a)(j,2),b=d[0],f=d[1],O=Object(r.useCallback)((function(){a(!0),fetch(t).then((function(t){return t.json()})).then((function(t){return f(t)})).catch((function(t){return l(t)})).finally((function(){return a(!1)}))}),[t]);return Object(r.useEffect)((function(){O()}),[O]),[b,c,O,s]}function u(t,e){var n=localStorage.getItem(t);return n?JSON.parse(n):(e&&localStorage.setItem(t,JSON.stringify(e)),e)}function s(t,e){var n=Object(r.useState)(u(t,e)),c=Object(o.a)(n,2),a=c[0],i=c[1],s=Object(r.useCallback)((function(){i(u(t))}),[t]);return Object(r.useEffect)((function(){s()}),[s]),[a,function(e){try{var n=e instanceof Function?e(a):e;localStorage.setItem(t,JSON.stringify(n)),i(e)}catch(c){console.warn('Error setting localStorage key "'.concat(t,'": ').concat(c.message))}},s]}function l(t,e){Object(r.useEffect)((function(){var n=function(n){var c=t.current;c&&!c.contains((null===n||void 0===n?void 0:n.target)||null)&&e(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[t,e])}},164:function(t,e,n){"use strict";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return a}))},166:function(t,e,n){"use strict";function c(t,e,n,c,r,a,o){try{var i=t[a](o),u=i.value}catch(s){return void n(s)}i.done?e(u):Promise.resolve(u).then(c,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){c(o,r,a,i,u,"next",t)}function u(t){c(o,r,a,i,u,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return r}))},24:function(t,e,n){"use strict";n.r(e),n.d(e,"useGlobalContext",(function(){return b})),n.d(e,"AppContext",(function(){return j})),n.d(e,"AppProvider",(function(){return d}));var c=n(168),r=n.n(c),a=n(164),o=n(166),i=n(16),u=n(1),s=n(0),l="https://course-api.com/react-useReducer-cart-project",j=Object(s.createContext)({}),d=function(t){var e=t.children,n=Object(s.useReducer)(f,{cart:[],loading:!1,total:0,amount:0}),c=Object(i.a)(n,2),d=c[0],b=c[1];function O(){return(O=Object(o.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b({type:"LOADING"}),t.next=3,fetch(l);case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,b({type:"DISPLAY_ITEMS",payload:{data:n}});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){b({type:"GET_TOTALS"})}),[d.cart]),Object(u.jsx)(j.Provider,{value:Object(a.a)(Object(a.a)({},d),{},{clearCart:function(){b({type:"CLEAR_CART"})},increase:function(t){b({type:"INCREASE",payload:{id:t}})},decrease:function(t){b({type:"DECREASE",payload:{id:t}})},remove:function(t){b({type:"REMOVE",payload:{id:t}})}}),children:e})},b=function(){return Object(s.useContext)(j)};function f(t,e){switch(e.type){case"INCREASE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(a.a)(Object(a.a)({},t),{},{amount:t.amount+1}):t}))});case"DECREASE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(a.a)(Object(a.a)({},t),{},{amount:t.amount-1}):t})).filter((function(t){return!!t.amount}))});case"LOADING":return Object(a.a)(Object(a.a)({},t),{},{loading:!0});case"DISPLAY_ITEMS":return Object(a.a)(Object(a.a)({},t),{},{cart:e.payload.data,loading:!1});case"GET_TOTALS":return Object(a.a)(Object(a.a)({},t),t.cart.reduce((function(t,e){var n=e.amount,c=n*e.price;return{amount:t.amount+n,total:t.total+c}}),{amount:0,total:0}));case"REMOVE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});case"CLEAR_CART":return Object(a.a)(Object(a.a)({},t),{},{cart:[]});default:throw Error("Reached to unknown state in reducer")}}},26:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(1),r=(n(0),n(24));function a(t){var e=t.id,n=t.img,a=t.title,o=t.price,i=t.amount,u=Object(r.useGlobalContext)(),s=u.remove,l=u.increase,j=u.decrease;return Object(c.jsxs)("article",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:a}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:a}),Object(c.jsx)("h4",{className:"item-price",children:o}),Object(c.jsx)("button",{"aria-label":"remove",className:"remove-btn",onClick:function(){return s(e)},children:"remove"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{"aria-label":"increase",className:"amount-btn",onClick:function(){return l(e)},children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(c.jsx)("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"})})}),Object(c.jsx)("p",{className:"amount",children:i}),Object(c.jsx)("button",{"aria-label":"decrease",className:"amount-btn",onClick:function(){return j(e)},children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(c.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})}},29:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(1),r=(n(0),n(24));function a(){var t=Object(r.useGlobalContext)().amount;return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{children:"Cart Project"}),Object(c.jsxs)("div",{className:"amount-container",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(c.jsx)("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})}),Object(c.jsx)("div",{className:"amount",children:Object(c.jsx)("p",{children:t})})]})]})})}},30:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(164),r=n(1),a=(n(0),n(24)),o=n(26);function i(){var t=Object(a.useGlobalContext)(),e=t.cart,n=t.total,i=t.clearCart;return e.length?Object(r.jsxs)("section",{className:"cart-container",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{children:"Your Bag"})}),Object(r.jsx)("div",{children:e.map((function(t){return Object(r.jsx)(o.default,Object(c.a)({},t),t.id)}))}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"cart-total",children:Object(r.jsxs)("h4",{children:["total ",Object(r.jsxs)("span",{children:["$",n.toFixed(2)]})]})}),Object(r.jsx)("button",{onClick:i,children:"clear cart"})]})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"cart-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:"Your Bag"}),Object(r.jsx)("h4",{className:"empty-cart",children:"is currently empty"})]})})})}},41:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(1),r=(n(0),n(24)),a=n(29),o=n(30);function i(){var t=Object(r.useGlobalContext)().loading;return Object(c.jsxs)("main",{className:"cart_project",children:[t&&Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("h1",{children:"Loading ..."})}),!t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.default,{}),Object(c.jsx)(o.default,{})]})]})}},60:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(1),r=(n(0),n(162)),a=n(24),o=n(41);n(135);function i(){return Object(r.a)({color:"#102a42",background:"#f1f5f8"}),Object(c.jsx)(a.AppProvider,{children:Object(c.jsx)(o.default,{})})}},78:function(t,e,n){"use strict";n.r(e);var c=n(168),r=n.n(c),a=n(166),o=n(1),i=(n(0),n(172)),u=n(170),s=n.n(u),l=n(60),j=fetch;describe("Cart",(function(){beforeEach(j.disableMocks),it("Should render correctly loading",(function(){var t=Object(i.c)(Object(o.jsx)(l.default,{})).baseElement;expect(t).toMatchSnapshot()})),it("Should render correctly after loaded",Object(a.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(i.c)(Object(o.jsx)(l.default,{})),n=e.baseElement,t.next=3,Object(i.f)(i.d.getByText(/Loading/i));case 3:expect(n).toMatchSnapshot();case 4:case"end":return t.stop()}}),t)})))),it("Should clear cart",Object(a.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(i.c)(Object(o.jsx)(l.default,{})),n=e.baseElement,t.next=3,Object(i.f)(i.d.getByText(/Loading/i));case 3:s.a.click(i.d.getByText(/clear cart/i)),expect(n).toMatchSnapshot();case 5:case"end":return t.stop()}}),t)})))),it("Should change amount and cart total",Object(a.a)(r.a.mark((function t(){var e,n,c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(i.c)(Object(o.jsx)(l.default,{})),n=e.baseElement,t.next=3,Object(i.f)(i.d.getByText(/Loading/i));case 3:c=i.d.getAllByRole("button",{name:/increase/i}),a=i.d.getAllByRole("button",{name:/decrease/i}),u=i.d.getAllByRole("button",{name:/remove/i}),s.a.click(c[0]),s.a.click(a[1]),s.a.click(u[2]),expect(n).toMatchSnapshot();case 10:case"end":return t.stop()}}),t)}))))}))}}]);