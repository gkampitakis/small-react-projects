(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[27,33,37],{164:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return c}))},166:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,u,"next",t)}function u(t){n(a,o,c,i,u,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},168:function(t,e,r){t.exports=r(171)},171:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,c=Object.create(o.prototype),a=new _(n||[]);return c._invoke=function(t,e,r){var n=f;return function(o,c){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw c;return A()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=L(a,r);if(i){if(i===j)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===j)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",j={};function y(){}function b(){}function v(){}var m={};m[c]=function(){return this};var O=Object.getPrototypeOf,g=O&&O(O(C([])));g&&g!==r&&n.call(g,c)&&(m=g);var x=v.prototype=y.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,c,a,i){var u=l(t[o],t,c);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,i)}))}i(u.arg)}var o;this._invoke=function(t,n){function c(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(c,c):c()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,j;var c=o.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,j):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return b.prototype=x.constructor=v,v.constructor=b,b.displayName=u(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new E(s(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,i,"Generator"),x[c]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,j):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),j}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},24:function(t,e,r){"use strict";r.r(e),r.d(e,"useGlobalContext",(function(){return p})),r.d(e,"AppContext",(function(){return f})),r.d(e,"AppProvider",(function(){return h}));var n=r(168),o=r.n(n),c=r(164),a=r(166),i=r(16),u=r(1),s=r(0),l="https://course-api.com/react-useReducer-cart-project",f=Object(s.createContext)({}),h=function(t){var e=t.children,r=Object(s.useReducer)(d,{cart:[],loading:!1,total:0,amount:0}),n=Object(i.a)(r,2),h=n[0],p=n[1];function j(){return(j=Object(a.a)(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p({type:"LOADING"}),t.next=3,fetch(l);case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,p({type:"DISPLAY_ITEMS",payload:{data:r}});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){p({type:"GET_TOTALS"})}),[h.cart]),Object(u.jsx)(f.Provider,{value:Object(c.a)(Object(c.a)({},h),{},{clearCart:function(){p({type:"CLEAR_CART"})},increase:function(t){p({type:"INCREASE",payload:{id:t}})},decrease:function(t){p({type:"DECREASE",payload:{id:t}})},remove:function(t){p({type:"REMOVE",payload:{id:t}})}}),children:e})},p=function(){return Object(s.useContext)(f)};function d(t,e){switch(e.type){case"INCREASE":return Object(c.a)(Object(c.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(c.a)(Object(c.a)({},t),{},{amount:t.amount+1}):t}))});case"DECREASE":return Object(c.a)(Object(c.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(c.a)(Object(c.a)({},t),{},{amount:t.amount-1}):t})).filter((function(t){return!!t.amount}))});case"LOADING":return Object(c.a)(Object(c.a)({},t),{},{loading:!0});case"DISPLAY_ITEMS":return Object(c.a)(Object(c.a)({},t),{},{cart:e.payload.data,loading:!1});case"GET_TOTALS":return Object(c.a)(Object(c.a)({},t),t.cart.reduce((function(t,e){var r=e.amount,n=r*e.price;return{amount:t.amount+r,total:t.total+n}}),{amount:0,total:0}));case"REMOVE":return Object(c.a)(Object(c.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});case"CLEAR_CART":return Object(c.a)(Object(c.a)({},t),{},{cart:[]});default:throw Error("Reached to unknown state in reducer")}}},26:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var n=r(1),o=(r(0),r(24));function c(t){var e=t.id,r=t.img,c=t.title,a=t.price,i=t.amount,u=Object(o.useGlobalContext)(),s=u.remove,l=u.increase,f=u.decrease;return Object(n.jsxs)("article",{className:"cart-item",children:[Object(n.jsx)("img",{src:r,alt:c}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:c}),Object(n.jsx)("h4",{className:"item-price",children:a}),Object(n.jsx)("button",{"aria-label":"remove",className:"remove-btn",onClick:function(){return s(e)},children:"remove"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{"aria-label":"increase",className:"amount-btn",onClick:function(){return l(e)},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"})})}),Object(n.jsx)("p",{className:"amount",children:i}),Object(n.jsx)("button",{"aria-label":"decrease",className:"amount-btn",onClick:function(){return f(e)},children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})}},30:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return i}));var n=r(164),o=r(1),c=(r(0),r(24)),a=r(26);function i(){var t=Object(c.useGlobalContext)(),e=t.cart,r=t.total,i=t.clearCart;return e.length?Object(o.jsxs)("section",{className:"cart-container",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h2",{children:"Your Bag"})}),Object(o.jsx)("div",{children:e.map((function(t){return Object(o.jsx)(a.default,Object(n.a)({},t),t.id)}))}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"cart-total",children:Object(o.jsxs)("h4",{children:["total ",Object(o.jsxs)("span",{children:["$",r.toFixed(2)]})]})}),Object(o.jsx)("button",{onClick:i,children:"clear cart"})]})]}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"cart-container",children:Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{children:"Your Bag"}),Object(o.jsx)("h4",{className:"empty-cart",children:"is currently empty"})]})})})}}}]);