(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[32,56],{26:function(e,t,n){"use strict";n.r(t),n.d(t,"useGlobalContext",(function(){return i})),n.d(t,"AppContext",(function(){return a})),n.d(t,"AppProvider",(function(){return s}));var r=n(16),o=n(1),c=n(0),a=n.n(c).a.createContext({}),s=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(r.a)(n,2),i=s[0],u=s[1],l=Object(c.useState)(!1),b=Object(r.a)(l,2),d=b[0],j=b[1];return Object(o.jsx)(a.Provider,{value:{isSidebarOpen:i,isModalOpen:d,openModal:function(){return j(!0)},closeModal:function(){return j(!1)},openSidebar:function(){return u(!0)},closeSidebar:function(){return u(!1)}},children:t})},i=function(){return Object(c.useContext)(a)}},59:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(1),o=(n(0),n(150)),c=n(26);function a(){var e=Object(c.useGlobalContext)(),t=e.openSidebar,n=e.openModal;return Object(r.jsxs)("main",{children:[Object(r.jsx)("button",{onClick:t,className:"sidebar-toggle","data-testid":"open-sidebar",children:Object(r.jsx)(o.b,{})}),Object(r.jsx)("button",{onClick:n,className:"show-btn",children:"show modal"})]})}}}]);