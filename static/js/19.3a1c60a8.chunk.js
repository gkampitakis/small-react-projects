(this["webpackJsonpsmall-react-projects"]=this["webpackJsonpsmall-react-projects"]||[]).push([[19,28],{183:function(t,r,e){"use strict";var n=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(r,e)};return function(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=function(t){function r(r){var e=t.call(this,r)||this;return e.name="ValidationError",e.message=r,e}return n(r,t),r}(Error);r.ValidationError=o},191:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"];r.decode83=function(t){for(var r=0,e=0;e<t.length;e++){var o=t[e];r=83*r+n.indexOf(o)}return r},r.encode83=function(t,r){for(var e="",o=1;o<=r;o++){var a=Math.floor(t)/Math.pow(83,r-o)%83;e+=n[Math.floor(a)]}return e}},192:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sRGBToLinear=function(t){var r=t/255;return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},r.linearTosRGB=function(t){var r=Math.max(0,Math.min(1,t));return r<=.0031308?Math.round(12.92*r*255+.5):Math.round(255*(1.055*Math.pow(r,1/2.4)-.055)+.5)},r.sign=function(t){return t<0?-1:1},r.signPow=function(t,e){return r.sign(t)*Math.pow(Math.abs(t),e)}},208:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(209);r.decode=n.default,r.isBlurhashValid=n.isBlurhashValid;var o=e(210);r.encode=o.default,function(t){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}(e(183))},209:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(191),o=e(192),a=e(183),i=function(t){if(!t||t.length<6)throw new a.ValidationError("The blurhash string must be at least 6 characters");var r=n.decode83(t[0]),e=Math.floor(r/9)+1,o=r%9+1;if(t.length!==4+2*o*e)throw new a.ValidationError("blurhash length mismatch: length is "+t.length+" but it should be "+(4+2*o*e))};r.isBlurhashValid=function(t){try{i(t)}catch(r){return{result:!1,errorReason:r.message}}return{result:!0}};var c=function(t){var r=t>>16,e=t>>8&255,n=255&t;return[o.sRGBToLinear(r),o.sRGBToLinear(e),o.sRGBToLinear(n)]},u=function(t,r){var e=Math.floor(t/361),n=Math.floor(t/19)%19,a=t%19;return[o.signPow((e-9)/9,2)*r,o.signPow((n-9)/9,2)*r,o.signPow((a-9)/9,2)*r]};r.default=function(t,r,e,a){i(t),a|=1;for(var s=n.decode83(t[0]),l=Math.floor(s/9)+1,f=s%9+1,h=(n.decode83(t[1])+1)/166,p=new Array(f*l),d=0;d<p.length;d++)if(0===d){var y=n.decode83(t.substring(2,6));p[d]=c(y)}else{y=n.decode83(t.substring(4+2*d,6+2*d));p[d]=u(y,h*a)}for(var v=4*r,b=new Uint8ClampedArray(v*e),O=0;O<e;O++)for(var m=0;m<r;m++){for(var g=0,w=0,j=0,_=0;_<l;_++)for(d=0;d<f;d++){var M=Math.cos(Math.PI*m*d/r)*Math.cos(Math.PI*O*_/e),P=p[d+_*f];g+=P[0]*M,w+=P[1]*M,j+=P[2]*M}var x=o.linearTosRGB(g),E=o.linearTosRGB(w),R=o.linearTosRGB(j);b[4*m+0+O*v]=x,b[4*m+1+O*v]=E,b[4*m+2+O*v]=R,b[4*m+3+O*v]=255}return b}},210:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(191),o=e(192),a=e(183);r.default=function(t,r,e,i,c){if(i<1||i>9||c<1||c>9)throw new a.ValidationError("BlurHash must have between 1 and 9 components");if(r*e*4!==t.length)throw new a.ValidationError("Width and height must match the pixels array");for(var u=[],s=function(n){for(var a=function(a){var i=0==a&&0==n?1:2,c=function(t,r,e,n){for(var a=0,i=0,c=0,u=4*r,s=0;s<r;s++)for(var l=0;l<e;l++){var f=n(s,l);a+=f*o.sRGBToLinear(t[4*s+0+l*u]),i+=f*o.sRGBToLinear(t[4*s+1+l*u]),c+=f*o.sRGBToLinear(t[4*s+2+l*u])}var h=1/(r*e);return[a*h,i*h,c*h]}(t,r,e,(function(t,o){return i*Math.cos(Math.PI*a*t/r)*Math.cos(Math.PI*n*o/e)}));u.push(c)},c=0;c<i;c++)a(c)},l=0;l<c;l++)s(l);var f,h,p=u[0],d=u.slice(1),y="",v=i-1+9*(c-1);if(y+=n.encode83(v,1),d.length>0){var b=Math.max.apply(Math,d.map((function(t){return Math.max.apply(Math,t)}))),O=Math.floor(Math.max(0,Math.min(82,Math.floor(166*b-.5))));f=(O+1)/166,y+=n.encode83(O,1)}else f=1,y+=n.encode83(0,1);return y+=n.encode83((h=p,(o.linearTosRGB(h[0])<<16)+(o.linearTosRGB(h[1])<<8)+o.linearTosRGB(h[2])),4),d.forEach((function(t){y+=n.encode83(function(t,r){return 19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[0]/r,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[1]/r,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*o.signPow(t[2]/r,.5)+9.5))))}(t,f),2)})),y}},57:function(t,r,e){"use strict";function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,r){return(o=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,r){return!r||"object"!==i(r)&&"function"!==typeof r?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function u(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=a(t);if(r){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return c(this,e)}}e.r(r);var s=e(16),l=e(1),f=e(0),h=e(208),p=function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),d=function(){return(d=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},y=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e},v=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.canvas=null,r.handleRef=function(t){r.canvas=t,r.draw()},r.draw=function(){var t=r.props,e=t.hash,n=t.height,o=t.punch,a=t.width;if(r.canvas){var i=Object(h.decode)(e,a,n,o),c=r.canvas.getContext("2d"),u=c.createImageData(a,n);u.data.set(i),c.putImageData(u,0,0)}},r}return p(r,t),r.prototype.componentDidUpdate=function(){this.draw()},r.prototype.render=function(){var t=this.props,r=(t.hash,t.height),e=t.width,n=y(t,["hash","height","width"]);return f.createElement("canvas",d({},n,{height:r,width:e,ref:this.handleRef}))},r.defaultProps={height:128,width:128},r}(f.PureComponent),b=function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),O=function(){return(O=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},m=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e},g={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},w=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return b(r,t),r.prototype.componentDidUpdate=function(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")},r.prototype.render=function(){var t=this.props,r=t.hash,e=t.height,n=t.width,o=t.punch,a=t.resolutionX,i=t.resolutionY,c=t.style,u=m(t,["hash","height","width","punch","resolutionX","resolutionY","style"]);return f.createElement("div",O({},u,{style:O(O({display:"inline-block",height:e,width:n},c),{position:"relative"})}),f.createElement(v,{hash:r,height:i,width:a,punch:o,style:g}))},r.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32},r}(f.PureComponent);function j(t){var r=t.alt,e=t.regular,n=t.placeholder,o=Object(f.useState)(!0),a=Object(s.a)(o,2),i=a[0],c=a[1];return Object(f.useEffect)((function(){var t=new Image;t.src=e,t.onload=function(){c(!1)}}),[e]),Object(l.jsxs)(_,{alt:r,src:e,children:[Object(l.jsx)(w,{hash:n,width:"100%",height:"100%",resolutionX:600,resolutionY:600,punch:1,style:{display:i?"":"none",transition:"opacity 0.5s"}}),Object(l.jsx)("img",{src:e,alt:r,style:{display:i?"none":"",transition:"opacity 0.5s"}})]})}r.default=Object(f.memo)(j);var _=function(t){!function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&o(t,r)}(c,t);var r,e,a,i=u(c);function c(t){var r;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t)).state={hasError:!1},r}return r=c,a=[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}],(e=[{key:"componentDidCatch",value:function(t,r){console.log(t,r)}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("img",{src:this.props.src,alt:this.props.alt}):this.props.children}}])&&n(r.prototype,e),a&&n(r,a),c}(f.Component)},65:function(t,r,e){"use strict";e.r(r),e.d(r,"default",(function(){return a}));var n=e(1),o=(e(0),e(57));function a(t){var r=t.user,e=r.name,a=r.portfolio_url,i=r.profile_image.medium,c=t.likes;return Object(n.jsxs)("article",{className:"photo",children:[Object(n.jsx)(o.default,{alt:t.alt_description,placeholder:t.blur_hash,regular:t.urls.regular}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:e}),Object(n.jsxs)("p",{children:[c," likes"]})]}),Object(n.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:i,alt:"User Avatar",className:"user-img"})})]})]})}}}]);