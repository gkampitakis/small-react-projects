(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[23,44,45],{24:function(e,t,c){"use strict";c.r(t),c.d(t,"useGlobalContext",(function(){return a})),c.d(t,"AppContext",(function(){return r})),c.d(t,"AppProvider",(function(){return o}));var n=c(16),i=c(1),s=c(0),r=c.n(s).a.createContext({}),o=function(e){var t=e.children,c=Object(s.useState)(!1),o=Object(n.a)(c,2),a=o[0],j=o[1],d=Object(s.useState)(!1),l=Object(n.a)(d,2),u=l[0],b=l[1];return Object(i.jsx)(r.Provider,{value:{isSidebarOpen:a,isModalOpen:u,openModal:function(){return b(!0)},closeModal:function(){return b(!1)},openSidebar:function(){return j(!0)},closeSidebar:function(){return j(!1)}},children:t})},a=function(){return Object(s.useContext)(r)}},27:function(e,t,c){"use strict";c.r(t),c.d(t,"links",(function(){return s})),c.d(t,"social",(function(){return r}));var n=c(1),i=(c(0),c(107)),s=[{id:1,text:"home",icon:Object(n.jsx)(i.j,{})},{id:2,text:"team",icon:Object(n.jsx)(i.s,{})},{id:3,text:"projects",icon:Object(n.jsx)(i.i,{})},{id:4,text:"calendar",icon:Object(n.jsx)(i.d,{})},{id:5,text:"documents",icon:Object(n.jsx)(i.t,{})}],r=[{id:1,icon:Object(n.jsx)(i.h,{})},{id:2,icon:Object(n.jsx)(i.r,{})},{id:3,icon:Object(n.jsx)(i.k,{})},{id:4,icon:Object(n.jsx)(i.c,{})},{id:5,icon:Object(n.jsx)(i.o,{})}]},43:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));var n=c(1),i=(c(0),c(107)),s=c(24),r=c(27);function o(){var e=Object(s.useGlobalContext)(),t=e.isSidebarOpen,c=e.closeSidebar;return Object(n.jsx)("aside",{children:Object(n.jsxs)("div",{className:"".concat(t?"sidebar show-sidebar":"sidebar"),children:[Object(n.jsxs)("div",{className:"sidebar-header",children:[Object(n.jsx)("img",{src:"./logo192.png",alt:"Logo",className:"logo"}),Object(n.jsx)("button",{className:"menu-close-btn",onClick:c,children:Object(n.jsx)(i.p,{})})]}),Object(n.jsx)("ul",{className:"links",children:r.links.map((function(e){var t=e.id,c=e.text,i=e.icon;return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{children:[i,c]})},t)}))}),Object(n.jsx)("ul",{className:"social-icons",children:r.social.map((function(e){var t=e.id,c=e.icon;return Object(n.jsx)("li",{children:Object(n.jsx)("a",{children:c})},t)}))})]})})}}}]);
//# sourceMappingURL=23.a3825139.chunk.js.map