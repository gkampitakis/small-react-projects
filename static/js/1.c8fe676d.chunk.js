(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[1],{153:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return a}))},195:function(t,e,r){t.exports=r(196)},196:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=f;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function m(){}function g(){}var b={};b[a]=function(){return this};var O=Object.getPrototypeOf,w=O&&O(O(S([])));w&&w!==r&&n.call(w,a)&&(b=w);var j=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){f.value=t,i(f)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=j.constructor=g,g.constructor=m,m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(j),u(j,c,"Generator"),j[a]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),f=n.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},25:function(t,e,r){"use strict";r.r(e),r.d(e,"useGlobalContext",(function(){return y})),r.d(e,"AppContext",(function(){return h})),r.d(e,"AppProvider",(function(){return p}));var n=r(195),o=r.n(n),a=r(153);function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(f){return void r(f)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var u=r(16),f=r(1),s=r(0),l="https://course-api.com/react-useReducer-cart-project",h=Object(s.createContext)({}),p=function(t){var e=t.children,r=Object(s.useReducer)(d,{cart:[],loading:!1,total:0,amount:0}),n=Object(u.a)(r,2),i=n[0],p=n[1];function y(){return(y=c(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p({type:"LOADING"}),t.next=3,fetch(l);case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,p({type:"DISPLAY_ITEMS",payload:{data:r}});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){p({type:"GET_TOTALS"})}),[i.cart]),Object(f.jsx)(h.Provider,{value:Object(a.a)(Object(a.a)({},i),{},{clearCart:function(){p({type:"CLEAR_CART"})},increase:function(t){p({type:"INCREASE",payload:{id:t}})},decrease:function(t){p({type:"DECREASE",payload:{id:t}})},remove:function(t){p({type:"REMOVE",payload:{id:t}})}}),children:e})},y=function(){return Object(s.useContext)(h)};function d(t,e){switch(e.type){case"INCREASE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(a.a)(Object(a.a)({},t),{},{amount:t.amount+1}):t}))});case"DECREASE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(a.a)(Object(a.a)({},t),{},{amount:t.amount-1}):t})).filter((function(t){return!!t.amount}))});case"LOADING":return Object(a.a)(Object(a.a)({},t),{},{loading:!0});case"DISPLAY_ITEMS":return Object(a.a)(Object(a.a)({},t),{},{cart:e.payload.data,loading:!1});case"GET_TOTALS":return Object(a.a)(Object(a.a)({},t),t.cart.reduce((function(t,e){var r=e.amount,n=r*e.price;return{amount:t.amount+r,total:t.total+n}}),{amount:0,total:0}));case"REMOVE":return Object(a.a)(Object(a.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});case"CLEAR_CART":return Object(a.a)(Object(a.a)({},t),{},{cart:[]});default:throw Error("Reached to unknown state in reducer")}}}}]);