(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[27],{149:function(t,e,n){"use strict";n.d(e,"a",(function(){return c.a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return f}));var c=n(17),r=n(0);function o(t){Object(r.useEffect)((function(){document.title=t}))}var u=n(16);function i(t){var e=Object(r.useState)(!0),n=Object(u.a)(e,2),c=n[0],o=n[1],i=Object(r.useState)(null),a=Object(u.a)(i,2),s=a[0],f=a[1],l=Object(r.useState)(void 0),d=Object(u.a)(l,2),b=d[0],j=d[1],O=Object(r.useCallback)((function(){o(!0),fetch(t).then((function(t){return t.json()})).then((function(t){return j(t)})).catch((function(t){return f(t)})).finally((function(){return o(!1)}))}),[t]);return Object(r.useEffect)((function(){O()}),[O]),[b,c,O,s]}function a(t,e){var n=localStorage.getItem(t);return n?JSON.parse(n):(e&&localStorage.setItem(t,JSON.stringify(e)),e)}function s(t,e){var n=Object(r.useState)(a(t,e)),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(r.useCallback)((function(){i(a(t))}),[t]);return Object(r.useEffect)((function(){s()}),[s]),[o,function(e){try{var n=e instanceof Function?e(o):e;localStorage.setItem(t,JSON.stringify(n)),i(e)}catch(c){console.warn('Error setting localStorage key "'.concat(t,'": ').concat(c.message))}},s]}function f(t,e){Object(r.useEffect)((function(){var n=function(n){var c=t.current;c&&!c.contains((null===n||void 0===n?void 0:n.target)||null)&&e(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[t,e])}},27:function(t,e,n){"use strict";n.r(e),n.d(e,"useGlobalContext",(function(){return f})),n.d(e,"AppProvider",(function(){return s})),n.d(e,"AppContext",(function(){return a}));var c=n(16),r=n(1),o=n(0),u=n(149),i="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",a=Object(o.createContext)({}),s=function(t){var e=t.children,n=Object(o.useState)("".concat(i,"a")),s=Object(c.a)(n,2),f=s[0],l=s[1],d=Object(o.useState)(!1),b=Object(c.a)(d,2),j=b[0],O=b[1],v=Object(u.c)(f),m=Object(c.a)(v,4),h=m[0],p=m[1],g=(m[2],m[3]),S=Object(o.useState)([]),k=Object(c.a)(S,2),E=k[0],w=k[1],C=Object(o.useRef)(void 0);return Object(o.useEffect)((function(){w(function(t){return t?t.map((function(t){return{id:t.idDrink,name:t.strDrink,image:t.strDrinkThumb,info:t.strAlcoholic,glass:t.strGlass}})):[]}(null===h||void 0===h?void 0:h.drinks))}),[h]),Object(r.jsx)(a.Provider,{value:{searchCocktail:function(t){O(!0),C.current&&clearTimeout(C.current),C.current=setTimeout((function(){console.info("Sending request for "+t),O(!1),l("".concat(i).concat(t))}),2e3)},refetch:function(){l("".concat(i,"a"))},loading:p,error:g,cocktailList:E,bounceLoading:j},children:e})},f=function(){return Object(o.useContext)(a)}}}]);