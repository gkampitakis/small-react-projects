(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[20,26,52,54,77],{104:function(e,t,n){},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l}));var a=n(16),c=n(0);function r(e){Object(c.useEffect)((function(){document.title=e}))}var o=n(15);function i(e){var t=Object(c.useState)(!0),n=Object(o.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),s=Object(o.a)(i,2),u=s[0],l=s[1],d=Object(c.useState)(void 0),b=Object(o.a)(d,2),f=b[0],j=b[1],h=Object(c.useCallback)((function(){r(!0),fetch(e).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return l(e)})).finally((function(){return r(!1)}))}),[e]);return Object(c.useEffect)((function(){h()}),[h]),[f,a,h,u]}function s(e,t){var n=localStorage.getItem(e);return n?JSON.parse(n):(t&&localStorage.setItem(e,JSON.stringify(t)),t)}function u(e,t){var n=Object(c.useState)(s(e,t)),a=Object(o.a)(n,2),r=a[0],i=a[1],u=Object(c.useCallback)((function(){i(s(e))}),[e]);return Object(c.useEffect)((function(){u()}),[u]),[r,function(t){try{var n=t instanceof Function?t(r):t;localStorage.setItem(e,JSON.stringify(n)),i(t)}catch(a){console.warn('Error setting localStorage key "'.concat(e,'": ').concat(a.message))}},u]}function l(e,t){Object(c.useEffect)((function(){var n=function(n){var a=e.current;a&&!a.contains((null===n||void 0===n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},30:function(e,t,n){"use strict";n.r(t);t.default=[{id:1,name:"susan smith",job:"web developer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},{id:2,name:"anna johnson",job:"web designer",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},{id:3,name:"peter jones",job:"intern",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},{id:4,name:"bill anderson",job:"the boss",image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "}]},45:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n(1),c=(n(0),n(128));function r(e){var t=e.data,n=e.controls;return Object(a.jsxs)("article",{className:"review-card",children:[Object(a.jsxs)("div",{className:"img-container",children:[Object(a.jsx)("img",{src:t.image,alt:"".concat(t.name,"'s Avatar")}),Object(a.jsx)("span",{className:"quote-icon",children:Object(a.jsx)(c.q,{})})]}),Object(a.jsx)("h4",{className:"author",children:t.name}),Object(a.jsx)("p",{className:"job",children:t.job}),Object(a.jsx)("p",{className:"info",children:t.text}),Object(a.jsxs)("div",{className:"btn-container",children:[Object(a.jsx)("button",{"data-testid":"prev-btn",className:"prev-btn",onClick:n.previous,children:Object(a.jsx)(c.g,{})}),Object(a.jsx)("button",{"data-testid":"next-btn",className:"next-btn",onClick:n.next,children:Object(a.jsx)(c.h,{})})]}),Object(a.jsx)("button",{className:"random-btn",onClick:n.random,children:"surprise me"})]})}},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(15),c=n(1),r=n(0),o=n(127),i=n(45),s=n(30);n(104);function u(){Object(o.a)({background:"hsl(210, 36%, 96%)",color:"hsl(209, 61%, 16%)"}),Object(o.b)("Reviews");var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],u=t[1];function l(){if(n+1>=s.default.length)return u(0);u((function(e){return e+1}))}return Object(c.jsx)("main",{className:"reviews_project",children:Object(c.jsxs)("section",{className:"container",children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"Our Reviews"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsx)(i.default,{controls:{next:l,previous:function(){if(n-1<0)return u(s.default.length-1);u((function(e){return e-1}))},random:function(){var e=Math.floor(Math.random()*s.default.length);if(e===n)return l();u(e)}},data:s.default[n]})]})})}},79:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(135)),r=n.n(c),o=n(140),i=n.n(o),s=n(139),u=n(60),l=n(30);describe("Reviews",(function(){it("Should render correctly",(function(){var e=i.a.create(Object(a.jsx)(u.default,{})).toJSON();expect(e).toMatchSnapshot()})),it("Should render next review",(function(){var e=Object(s.c)(Object(a.jsx)(u.default,{})).baseElement;r.a.click(s.d.getByTestId("next-btn")),expect(e).toMatchSnapshot()})),it("Should render previous review",(function(){var e=Object(s.c)(Object(a.jsx)(u.default,{})).baseElement;r.a.click(s.d.getByTestId("prev-btn")),expect(e).toMatchSnapshot()})),it("Should circle through reviews",(function(){for(var e=Object(s.c)(Object(a.jsx)(u.default,{})).baseElement,t=l.default.length,n=0;n<t;n++)r.a.click(s.d.getByTestId("next-btn"));for(var c=0;c<t;c++)r.a.click(s.d.getByTestId("prev-btn"));expect(e).toMatchSnapshot()})),it("Should show a random review",(function(){Object(s.c)(Object(a.jsx)(u.default,{}));var e=s.d.getByAltText(/'s Avatar/i).outerHTML;r.a.click(s.d.getByText(/surprise me/i));var t=s.d.getByAltText(/'s Avatar/i).outerHTML;expect(e).not.toBe(t)}))}))}}]);