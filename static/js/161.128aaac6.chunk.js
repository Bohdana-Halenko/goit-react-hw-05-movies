"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[161],{831:function(e,t,n){n.d(t,{Z:function(){return f}});var r,o,a=n(501),i=n(6871),s=n(168),c=n(6031),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  ","\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),""),l=c.ZP.li(o||(o=(0,s.Z)(["\ntext-decoration: none;\n margin-right: 30px;\n margin-top: 10px;\n  text-align: start;\n  font-size: 16px;\n   font-family:Verdana, Geneva, Tahoma, sans-serif\n  border-radius: 2px;\n"]))),d=n(184);function f(e){var t=e.movies,n=(0,i.TH)();return(0,d.jsx)(u,{children:t.map((function(e,t){return(0,d.jsxs)(l,{children:[" ",e.text,(0,d.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})]},t)}))})}},8183:function(e,t,n){n.d(t,{HI:function(){return u},IQ:function(){return f},Tn:function(){return d},e2:function(){return c},gH:function(){return l}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i);s().defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?page=1&api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc");case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=b2e625c7bfa1b5b54460e1c069c61bdc&query=".concat(t,"\n"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=\neaf08be10d6768fda7dba31732d6cddc&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1161:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r=n(907);var o=n(181);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i,s,c,u,l=n(885),d=n(168),f=n(6031),p=f.ZP.div(i||(i=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #324191;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=f.ZP.form(s||(s=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=f.ZP.button(c||(c=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background: #324191;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),v=f.ZP.input(u||(u=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),h=n(2791);function y(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=y(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function b(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=y(e))&&(r&&(r+=" "),r+=t);return r}var T=n(4164);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function C(e){return"number"===typeof e&&!isNaN(e)}function O(e){return"boolean"===typeof e}function _(e){return"string"===typeof e}function w(e){return"function"===typeof e}function I(e){return _(e)||w(e)?e:null}function k(e){return 0===e||e}var L=!("undefined"===typeof window||!window.document||!window.document.createElement);function N(e){return(0,h.isValidElement)(e)||_(e)||w(e)||C(e)}var R={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},P={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function S(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,d=e.isIn,f=o?t+"--"+a:t,p=o?n+"--"+a:n,m=(0,h.useRef)(),g=(0,h.useRef)(0);function v(e){if(e.target===l.current){var t=l.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",v),t.removeEventListener("animationcancel",v),0===g.current&&(t.className=m.current)}}function y(){var e=l.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,h.useLayoutEffect)((function(){!function(){var e=l.current;m.current=e.className,e.className+=" "+f,e.addEventListener("animationend",v),e.addEventListener("animationcancel",v)}()}),[]),(0,h.useEffect)((function(){d||(s?y():function(){g.current=1;var e=l.current;e.className+=" "+p,e.addEventListener("animationend",y)}())}),[d]),h.createElement(h.Fragment,null,r)}}var B={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,r)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},j=["delay","staleId"];function A(e){var t=(0,h.useReducer)((function(e){return e+1}),0)[1],n=(0,h.useState)([]),r=n[0],o=n[1],a=(0,h.useRef)(null),i=(0,h.useRef)(new Map).current,s=function(e){return-1!==r.indexOf(e)},c=(0,h.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:function(e){return i.get(e)}}).current;function u(e){var t=e.containerId;!c.props.limit||t&&c.containerId!==t||(c.count-=c.queue.length,c.queue=[])}function l(e){o((function(t){return k(e)?t.filter((function(t){return t!==e})):[]}))}function d(){var e=c.queue.shift();p(e.toastContent,e.toastProps,e.staleId)}function f(e,n){var r=n.delay,o=n.staleId,s=x(n,j);if(N(e)&&!function(e){return!a.current||c.props.enableMultiContainer&&e.containerId!==c.props.containerId||i.has(e.toastId)&&null==e.updateId}(s)){var u=s.toastId,f=s.updateId,m=s.data,g=c.props,v=function(){return l(u)},y=null==f;y&&c.count++;var b,T,E={toastId:u,updateId:f,isLoading:s.isLoading,theme:s.theme||g.theme,icon:null!=s.icon?s.icon:g.icon,isIn:!1,key:s.key||c.toastKey++,type:s.type,closeToast:v,closeButton:s.closeButton,rtl:g.rtl,position:s.position||g.position,transition:s.transition||g.transition,className:I(s.className||g.toastClassName),bodyClassName:I(s.bodyClassName||g.bodyClassName),style:s.style||g.toastStyle,bodyStyle:s.bodyStyle||g.bodyStyle,onClick:s.onClick||g.onClick,pauseOnHover:O(s.pauseOnHover)?s.pauseOnHover:g.pauseOnHover,pauseOnFocusLoss:O(s.pauseOnFocusLoss)?s.pauseOnFocusLoss:g.pauseOnFocusLoss,draggable:O(s.draggable)?s.draggable:g.draggable,draggablePercent:s.draggablePercent||g.draggablePercent,draggableDirection:s.draggableDirection||g.draggableDirection,closeOnClick:O(s.closeOnClick)?s.closeOnClick:g.closeOnClick,progressClassName:I(s.progressClassName||g.progressClassName),progressStyle:s.progressStyle||g.progressStyle,autoClose:!s.isLoading&&(b=s.autoClose,T=g.autoClose,!1===b||C(b)&&b>0?b:T),hideProgressBar:O(s.hideProgressBar)?s.hideProgressBar:g.hideProgressBar,progress:s.progress,role:s.role||g.role,deleteToast:function(){i.delete(u);var e=c.queue.length;if(c.count=k(u)?c.count-1:c.count-c.displayedToast,c.count<0&&(c.count=0),e>0){var n=k(u)?1:c.props.limit;if(1===e||1===n)c.displayedToast++,d();else{var r=n>e?e:n;c.displayedToast=r;for(var o=0;o<r;o++)d()}}else t()}};w(s.onOpen)&&(E.onOpen=s.onOpen),w(s.onClose)&&(E.onClose=s.onClose),E.closeButton=g.closeButton,!1===s.closeButton||N(s.closeButton)?E.closeButton=s.closeButton:!0===s.closeButton&&(E.closeButton=!N(g.closeButton)||g.closeButton);var L=e;(0,h.isValidElement)(e)&&!_(e.type)?L=(0,h.cloneElement)(e,{closeToast:v,toastProps:E,data:m}):w(e)&&(L=e({closeToast:v,toastProps:E,data:m})),g.limit&&g.limit>0&&c.count>g.limit&&y?c.queue.push({toastContent:L,toastProps:E,staleId:o}):C(r)&&r>0?setTimeout((function(){p(L,E,o)}),r):p(L,E,o)}}function p(e,t,n){var r=t.toastId;n&&i.delete(n),i.set(r,{content:e,props:t}),o((function(e){return[].concat(e,[r]).filter((function(e){return e!==n}))}))}return(0,h.useEffect)((function(){return c.containerId=e.containerId,B.cancelEmit(3).on(0,f).on(1,(function(e){return a.current&&l(e)})).on(5,u).emit(2,c),function(){return B.emit(3,c)}}),[]),(0,h.useEffect)((function(){c.isToastActive=s,c.displayedToast=r.length,B.emit(4,r.length,e.containerId)}),[r]),(0,h.useEffect)((function(){c.props=e})),{getToastToRender:function(t){var n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:a,isToastActive:s}}function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Z(e){var t=(0,h.useState)(!1),n=t[0],r=t[1],o=(0,h.useState)(!1),a=o[0],i=o[1],s=(0,h.useRef)(null),c=(0,h.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,h.useRef)(e),l=e.autoClose,d=e.pauseOnHover,f=e.closeToast,p=e.onClick,m=e.closeOnClick;function g(t){if(e.draggable){c.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);var n=s.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=M(t.nativeEvent),c.y=D(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(){if(c.boundingRect){var t=c.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&c.x>=o&&c.x<=a&&c.y>=n&&c.y<=r?b():y()}}function y(){r(!0)}function b(){r(!1)}function T(t){var r=s.current;c.canDrag&&r&&(c.didMove=!0,n&&b(),c.x=M(t),c.y=D(t),"x"===e.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",r.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);var t=s.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,h.useEffect)((function(){u.current=e})),(0,h.useEffect)((function(){return s.current&&s.current.addEventListener("d",y,{once:!0}),w(e.onOpen)&&e.onOpen((0,h.isValidElement)(e.children)&&e.children.props),function(){var e=u.current;w(e.onClose)&&e.onClose((0,h.isValidElement)(e.children)&&e.children.props)}}),[]),(0,h.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||b();window.addEventListener("focus",y),window.addEventListener("blur",b)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:g,onTouchStart:g,onMouseUp:v,onTouchEnd:v};return l&&d&&(x.onMouseEnter=b,x.onMouseLeave=y),m&&(x.onClick=function(e){p&&p(e),c.canCloseOnClick&&f()}),{playToast:y,pauseToast:b,isRunning:n,preventExitTransition:a,toastRef:s,eventHandlers:x}}function z(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return(0,h.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},(0,h.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,h.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F(e){var t,n,r=e.delay,o=e.isRunning,a=e.closeToast,i=e.type,s=e.hide,c=e.className,u=e.style,l=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,g=E({},u,{animationDuration:r+"ms",animationPlayState:o?"running":"paused",opacity:s?0:1});l&&(g.transform="scaleX("+d+")");var v=b("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+i,((t={})["Toastify__progress-bar--rtl"]=f,t)),y=w(c)?c({rtl:f,type:i,defaultClassName:v}):b(v,c),T=((n={})[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]=l&&d<1?null:function(){p&&a()},n);return(0,h.createElement)("div",Object.assign({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:y,style:g},T))}F.defaultProps={type:P.DEFAULT,hide:!1};var H=["theme","type"],q=function(e){var t=e.theme,n=e.type,r=x(e,H);return(0,h.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var U={info:function(e){return(0,h.createElement)(q,Object.assign({},e),(0,h.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,h.createElement)(q,Object.assign({},e),(0,h.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,h.createElement)(q,Object.assign({},e),(0,h.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,h.createElement)(q,Object.assign({},e),(0,h.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,h.createElement)("div",{className:"Toastify__spinner"})}},Q=function(e){var t,n,r=Z(e),o=r.isRunning,a=r.preventExitTransition,i=r.toastRef,s=r.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,v=e.position,y=e.className,T=e.style,E=e.bodyClassName,x=e.bodyStyle,C=e.progressClassName,O=e.progressStyle,I=e.updateId,k=e.role,L=e.progress,N=e.rtl,R=e.toastId,P=e.deleteToast,S=e.isIn,B=e.isLoading,j=e.icon,A=e.theme,M=b("Toastify__toast","Toastify__toast-theme--"+A,"Toastify__toast--"+f,((t={})["Toastify__toast--rtl"]=N,t)),D=w(y)?y({rtl:N,position:v,type:f,defaultClassName:M}):b(M,y),z=!!L,H=U[f],q={theme:A,type:f},Q=H&&H(q);return!1===j?Q=void 0:w(j)?Q=j(q):(0,h.isValidElement)(j)?Q=(0,h.cloneElement)(j,q):_(j)?Q=j:B&&(Q=U.spinner()),(0,h.createElement)(g,{isIn:S,done:P,position:v,preventExitTransition:a,nodeRef:i},(0,h.createElement)("div",Object.assign({id:R,onClick:d,className:D},s,{style:T,ref:i}),(0,h.createElement)("div",Object.assign({},S&&{role:k},{className:w(E)?E({type:f}):b("Toastify__toast-body",E),style:x}),Q&&(0,h.createElement)("div",{className:b("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!B,n))},Q),(0,h.createElement)("div",null,u)),function(e){if(e){var t={closeToast:m,type:f,theme:A};return w(e)?e(t):(0,h.isValidElement)(e)?(0,h.cloneElement)(e,t):void 0}}(c),(l||z)&&(0,h.createElement)(F,Object.assign({},I&&!z?{key:"pb-"+I}:{},{rtl:N,theme:A,delay:l,isRunning:o,isIn:S,closeToast:m,hide:p,type:f,style:O,className:C,controlledProgress:z,progress:L}))))},V=S({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),G=function(e){var t=A(e),n=t.getToastToRender,r=t.containerRef,o=t.isToastActive,a=e.className,i=e.style,s=e.rtl,c=e.containerId;function u(e){var t,n=b("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=s,t));return w(a)?a({position:e,rtl:s,defaultClassName:n}):b(n,I(a))}return(0,h.createElement)("div",{ref:r,className:"Toastify",id:c},n((function(e,t){var n=t.length?E({},i):E({},i,{pointerEvents:"none"});return(0,h.createElement)("div",{className:u(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,h.createElement)(Q,Object.assign({},n,{isIn:o(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?z:n.closeButton}),t)})))})))};G.defaultProps={position:R.TOP_RIGHT,transition:V,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var W,X,Y,K=new Map,J=[],$=!1;function ee(){return Math.random().toString(36).substring(2,9)}function te(e){return e&&(_(e.toastId)||C(e.toastId))?e.toastId:ee()}function ne(e,t){return K.size>0?B.emit(0,e,t):(J.push({content:e,options:t}),$&&L&&($=!1,X=document.createElement("div"),document.body.appendChild(X),(0,T.render)((0,h.createElement)(G,Object.assign({},Y)),X))),t.toastId}function re(e,t){return E({},t,{type:t&&t.type||e,toastId:te(t)})}function oe(e){return function(t,n){return ne(t,re(e,n))}}function ae(e,t){return ne(e,re(P.DEFAULT,t))}ae.loading=function(e,t){return ne(e,re(P.DEFAULT,E({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ae.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=_(o)?ae.loading(o,n):ae.loading(o.render,E({},n,o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=E({type:e},s,n,{data:o}),i=_(t)?{render:t}:t;return r?ae.update(r,E({},a,i)):ae(i.render,E({},a,i)),o}ae.dismiss(r)},u=w(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},ae.success=oe(P.SUCCESS),ae.info=oe(P.INFO),ae.error=oe(P.ERROR),ae.warning=oe(P.WARNING),ae.warn=ae.warning,ae.dark=function(e,t){return ne(e,re(P.DEFAULT,E({theme:"dark"},t)))},ae.dismiss=function(e){return B.emit(1,e)},ae.clearWaitingQueue=function(e){return void 0===e&&(e={}),B.emit(5,e)},ae.isActive=function(e){var t=!1;return K.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ae.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=K.get(n||W);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=E({},r,t,{toastId:t.toastId||e,updateId:ee()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,ne(i,a)}}),0)},ae.done=function(e){ae.update(e,{progress:1})},ae.onChange=function(e){return w(e)&&B.on(4,e),function(){w(e)&&B.off(4,e)}},ae.configure=function(e){void 0===e&&(e={}),$=!0,Y=e},ae.POSITION=R,ae.TYPE=P,B.on(2,(function(e){W=e.containerId||e,K.set(W,e),J.forEach((function(e){B.emit(0,e.content,e.options)})),J=[]})).on(3,(function(e){K.delete(e.containerId||e),0===K.size&&B.off(0).off(1).off(5),L&&X&&document.body.removeChild(X)}));var ie=n(184);function se(e){var t=e.handleOnSubmit,n=(0,h.useState)(""),r=(0,l.Z)(n,2),o=r[0],a=r[1];return(0,ie.jsx)(p,{children:(0,ie.jsxs)(m,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),a("")):ae("Empty request!")},children:[(0,ie.jsx)(v,{placeholder:"Movie name",type:"text",autoComplete:"off",name:"movieName",onChange:function(e){a(e.currentTarget.value.toLowerCase())},value:o}),(0,ie.jsx)(g,{type:"submit",children:"Search"}),(0,ie.jsx)(G,{})]})})}var ce=n(501),ue=n(8183),le=n(831);function de(){var e=(0,h.useState)([]),t=(0,l.Z)(e,2),n=t[0],r=t[1],o=(0,ce.lr)({}),i=(0,l.Z)(o,2),s=i[0],c=i[1],u=s.get("query");return(0,h.useEffect)((function(){(0,ue.gH)(),u&&(0,ue.gH)(u).then((function(e){return r(e)}))}),[u]),(0,ie.jsxs)("div",{children:[(0,ie.jsx)("h1",{children:"Search Movies"}),(0,ie.jsx)(se,{handleOnSubmit:function(e){r(a(e)),c({query:e})}}),(0,ie.jsx)(le.Z,{movies:n})]})}}}]);
//# sourceMappingURL=161.128aaac6.chunk.js.map