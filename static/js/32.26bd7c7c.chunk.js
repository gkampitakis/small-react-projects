(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[32,37,61],{24:function(e,t,n){"use strict";n.r(t),n.d(t,"useGlobalContext",(function(){return o})),n.d(t,"AppContext",(function(){return l})),n.d(t,"ContextProvider",(function(){return s}));var c=n(15),a=n(1),r=n(0),i=n(25),l=Object(r.createContext)({}),s=function(e){var t=e.children,n=Object(r.useState)(!1),s=Object(c.a)(n,2),o=s[0],u=s[1],b=Object(r.useState)(!1),j=Object(c.a)(b,2),p=j[0],O=j[1],d=Object(r.useState)({page:"",links:[]}),f=Object(c.a)(d,2),x=f[0],m=f[1],h=Object(r.useState)({}),v=Object(c.a)(h,2),g=v[0],S=v[1];return Object(a.jsx)(l.Provider,{value:{isSidebarOpen:o,openSidebar:function(){return u(!0)},closeSidebar:function(){return u(!1)},isSubmenuOpen:p,openSubmenu:function(e,t){var n=i.default.find((function(t){return t.page=e}));m(n),S(t),O(!0)},closeSubmenu:function(){return O(!1)},page:x,location:g},children:t})},o=function(){return Object(r.useContext)(l)}},25:function(e,t,n){"use strict";n.r(t);var c=n(1),a=(n(0),n(128)),r=[{page:"products",links:[{label:"payment",icon:Object(c.jsx)(a.i,{})},{label:"terminal",icon:Object(c.jsx)(a.i,{})},{label:"connect",icon:Object(c.jsx)(a.i,{})}]},{page:"developers",links:[{label:"plugins",icon:Object(c.jsx)(a.d,{})},{label:"libraries",icon:Object(c.jsx)(a.d,{})},{label:"help",icon:Object(c.jsx)(a.d,{})},{label:"billing",icon:Object(c.jsx)(a.d,{})}]},{page:"company",links:[{label:"about",icon:Object(c.jsx)(a.e,{})},{label:"customers",icon:Object(c.jsx)(a.e,{})}]}];t.default=r},66:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(15),a=n(1),r=n(0),i=n(24);function l(){var e=Object(i.useGlobalContext)(),t=(e.isSubmenuOpen,e.page),n=t.page,l=t.links,s=e.location,o=Object(r.useRef)(null),u=Object(r.useState)("col-2"),b=Object(c.a)(u,2),j=b[0],p=b[1];return Object(r.useEffect)((function(){var e=o.current,t=s.center,n=s.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===l.length&&p("col-3"),l.length>3&&p("col-4")}),[n,s,l]),Object(a.jsx)("aside",{className:"open",ref:o,children:Object(a.jsxs)("section",{children:[Object(a.jsx)("h4",{children:n}),Object(a.jsx)("div",{className:"submenu-center ".concat(j),children:l.map((function(e,t){var n=e.icon,c=e.label;return Object(a.jsxs)("a",{children:[n,c]},t)}))})]})})}}}]);