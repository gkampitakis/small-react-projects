(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[20,41,42],{24:function(t,e,c){"use strict";c.r(e),c.d(e,"useGlobalContext",(function(){return a})),c.d(e,"AppContext",(function(){return s})),c.d(e,"AppProvider",(function(){return o}));var n=c(16),r=c(1),i=c(0),s=c.n(i).a.createContext({}),o=function(t){var e=t.children,c=Object(i.useState)(!1),o=Object(n.a)(c,2),a=o[0],l=o[1],u=Object(i.useState)(!1),j=Object(n.a)(u,2),d=j[0],b=j[1];return Object(r.jsx)(s.Provider,{value:{isSidebarOpen:a,isModalOpen:d,openModal:function(){return b(!0)},closeModal:function(){return b(!1)},openSidebar:function(){return l(!0)},closeSidebar:function(){return l(!1)}},children:e})},a=function(){return Object(i.useContext)(s)}},27:function(t,e,c){"use strict";c.r(e),c.d(e,"links",(function(){return i})),c.d(e,"social",(function(){return s}));var n=c(1),r=(c(0),c(101)),i=[{id:1,url:"/",text:"home",icon:Object(n.jsx)(r.j,{})},{id:2,url:"/team",text:"team",icon:Object(n.jsx)(r.s,{})},{id:3,url:"/projects",text:"projects",icon:Object(n.jsx)(r.i,{})},{id:4,url:"/calendar",text:"calendar",icon:Object(n.jsx)(r.d,{})},{id:5,url:"/documents",text:"documents",icon:Object(n.jsx)(r.t,{})}],s=[{id:1,url:"https://www.twitter.com",icon:Object(n.jsx)(r.h,{})},{id:2,url:"https://www.twitter.com",icon:Object(n.jsx)(r.r,{})},{id:3,url:"https://www.twitter.com",icon:Object(n.jsx)(r.k,{})},{id:4,url:"https://www.twitter.com",icon:Object(n.jsx)(r.c,{})},{id:5,url:"https://www.twitter.com",icon:Object(n.jsx)(r.o,{})}]},36:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return o}));var n=c(1),r=(c(0),c(101)),i=c(24),s=c(27);function o(){var t=Object(i.useGlobalContext)(),e=t.isSidebarOpen,c=t.closeSidebar;return Object(n.jsx)("aside",{children:Object(n.jsxs)("div",{className:"".concat(e?"sidebar show-sidebar":"sidebar"),children:[Object(n.jsxs)("div",{className:"sidebar-header",children:[Object(n.jsx)("img",{src:"./logo192.png",alt:"Logo",className:"logo"}),Object(n.jsx)("button",{className:"menu-close-btn",onClick:c,children:Object(n.jsx)(r.p,{})})]}),Object(n.jsx)("ul",{className:"links",children:s.links.map((function(t){var e=t.id,c=t.url,r=t.text,i=t.icon;return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:c,children:[i,r]})},e)}))}),Object(n.jsx)("ul",{className:"social-icons",children:s.social.map((function(t){var e=t.id,c=t.url,r=t.icon;return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:c,children:r})},e)}))})]})})}}}]);
//# sourceMappingURL=20.5f8a5849.chunk.js.map