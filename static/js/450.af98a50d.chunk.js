"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[450],{831:function(e,t,n){n.d(t,{Z:function(){return f}});var r,o,a=n(501),i=n(6871),s=n(168),c=n(6031),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  ","\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),""),l=c.ZP.li(o||(o=(0,s.Z)(["\ntext-decoration: none;\n margin-right: 30px;\n margin-top: 10px;\n  text-align: start;\n  font-size: 16px;\n   font-family:Verdana, Geneva, Tahoma, sans-serif\n  border-radius: 2px;\n"]))),d=n(184);function f(e){var t=e.movies,n=(0,i.TH)();return(0,d.jsx)(u,{children:t.map((function(e){return(0,d.jsx)(l,{children:(0,d.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},8183:function(e,t,n){n.d(t,{HI:function(){return u},IQ:function(){return f},Tn:function(){return d},e2:function(){return c},gH:function(){return l}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i);s().defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?page=1&api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc");case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=b2e625c7bfa1b5b54460e1c069c61bdc&query=".concat(t,"\n"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=\neaf08be10d6768fda7dba31732d6cddc&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9450:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var r,o,a,i,s=n(885),c=n(168),u=n(6031),l=u.ZP.div(r||(r=(0,c.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #324191;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),d=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),f=u.ZP.button(a||(a=(0,c.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background: #324191;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),p=u.ZP.input(i||(i=(0,c.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),m=n(184);function g(e){var t=e.handleSetQuery,n=e.handleSubmit,r=e.value;return(0,m.jsx)(l,{children:(0,m.jsxs)(d,{onSubmit:n,children:[(0,m.jsx)(p,{placeholder:"movie name",onChange:t,value:r}),(0,m.jsx)(f,{type:"submit",children:"Search"})]})})}var v=n(2791),h=n(501),y=n(8183),b=n(831);function T(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=T(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function E(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=T(e))&&(r&&(r+=" "),r+=t);return r}var x=n(4164);function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function _(e){return"number"===typeof e&&!isNaN(e)}function w(e){return"boolean"===typeof e}function I(e){return"string"===typeof e}function k(e){return"function"===typeof e}function L(e){return I(e)||k(e)?e:null}function N(e){return 0===e||e}var R=!("undefined"===typeof window||!window.document||!window.document.createElement);function P(e){return(0,v.isValidElement)(e)||I(e)||k(e)||_(e)}var S={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function M(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,d=e.isIn,f=o?t+"--"+a:t,p=o?n+"--"+a:n,m=(0,v.useRef)(),g=(0,v.useRef)(0);function h(e){if(e.target===l.current){var t=l.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===g.current&&(t.className=m.current)}}function y(){var e=l.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()}return(0,v.useLayoutEffect)((function(){!function(){var e=l.current;m.current=e.className,e.className+=" "+f,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,v.useEffect)((function(){d||(s?y():function(){g.current=1;var e=l.current;e.className+=" "+p,e.addEventListener("animationend",y)}())}),[d]),v.createElement(v.Fragment,null,r)}}var j={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,r)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},D=["delay","staleId"];function A(e){var t=(0,v.useReducer)((function(e){return e+1}),0)[1],n=(0,v.useState)([]),r=n[0],o=n[1],a=(0,v.useRef)(null),i=(0,v.useRef)(new Map).current,s=function(e){return-1!==r.indexOf(e)},c=(0,v.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:function(e){return i.get(e)}}).current;function u(e){var t=e.containerId;!c.props.limit||t&&c.containerId!==t||(c.count-=c.queue.length,c.queue=[])}function l(e){o((function(t){return N(e)?t.filter((function(t){return t!==e})):[]}))}function d(){var e=c.queue.shift();p(e.toastContent,e.toastProps,e.staleId)}function f(e,n){var r=n.delay,o=n.staleId,s=O(n,D);if(P(e)&&!function(e){return!a.current||c.props.enableMultiContainer&&e.containerId!==c.props.containerId||i.has(e.toastId)&&null==e.updateId}(s)){var u=s.toastId,f=s.updateId,m=s.data,g=c.props,h=function(){return l(u)},y=null==f;y&&c.count++;var b,T,E={toastId:u,updateId:f,isLoading:s.isLoading,theme:s.theme||g.theme,icon:null!=s.icon?s.icon:g.icon,isIn:!1,key:s.key||c.toastKey++,type:s.type,closeToast:h,closeButton:s.closeButton,rtl:g.rtl,position:s.position||g.position,transition:s.transition||g.transition,className:L(s.className||g.toastClassName),bodyClassName:L(s.bodyClassName||g.bodyClassName),style:s.style||g.toastStyle,bodyStyle:s.bodyStyle||g.bodyStyle,onClick:s.onClick||g.onClick,pauseOnHover:w(s.pauseOnHover)?s.pauseOnHover:g.pauseOnHover,pauseOnFocusLoss:w(s.pauseOnFocusLoss)?s.pauseOnFocusLoss:g.pauseOnFocusLoss,draggable:w(s.draggable)?s.draggable:g.draggable,draggablePercent:s.draggablePercent||g.draggablePercent,draggableDirection:s.draggableDirection||g.draggableDirection,closeOnClick:w(s.closeOnClick)?s.closeOnClick:g.closeOnClick,progressClassName:L(s.progressClassName||g.progressClassName),progressStyle:s.progressStyle||g.progressStyle,autoClose:!s.isLoading&&(b=s.autoClose,T=g.autoClose,!1===b||_(b)&&b>0?b:T),hideProgressBar:w(s.hideProgressBar)?s.hideProgressBar:g.hideProgressBar,progress:s.progress,role:s.role||g.role,deleteToast:function(){i.delete(u);var e=c.queue.length;if(c.count=N(u)?c.count-1:c.count-c.displayedToast,c.count<0&&(c.count=0),e>0){var n=N(u)?1:c.props.limit;if(1===e||1===n)c.displayedToast++,d();else{var r=n>e?e:n;c.displayedToast=r;for(var o=0;o<r;o++)d()}}else t()}};k(s.onOpen)&&(E.onOpen=s.onOpen),k(s.onClose)&&(E.onClose=s.onClose),E.closeButton=g.closeButton,!1===s.closeButton||P(s.closeButton)?E.closeButton=s.closeButton:!0===s.closeButton&&(E.closeButton=!P(g.closeButton)||g.closeButton);var x=e;(0,v.isValidElement)(e)&&!I(e.type)?x=(0,v.cloneElement)(e,{closeToast:h,toastProps:E,data:m}):k(e)&&(x=e({closeToast:h,toastProps:E,data:m})),g.limit&&g.limit>0&&c.count>g.limit&&y?c.queue.push({toastContent:x,toastProps:E,staleId:o}):_(r)&&r>0?setTimeout((function(){p(x,E,o)}),r):p(x,E,o)}}function p(e,t,n){var r=t.toastId;n&&i.delete(n),i.set(r,{content:e,props:t}),o((function(e){return[].concat(e,[r]).filter((function(e){return e!==n}))}))}return(0,v.useEffect)((function(){return c.containerId=e.containerId,j.cancelEmit(3).on(0,f).on(1,(function(e){return a.current&&l(e)})).on(5,u).emit(2,c),function(){return j.emit(3,c)}}),[]),(0,v.useEffect)((function(){c.isToastActive=s,c.displayedToast=r.length,j.emit(4,r.length,e.containerId)}),[r]),(0,v.useEffect)((function(){c.props=e})),{getToastToRender:function(t){var n=new Map,r=Array.from(i.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:a,isToastActive:s}}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function F(e){var t=(0,v.useState)(!1),n=t[0],r=t[1],o=(0,v.useState)(!1),a=o[0],i=o[1],s=(0,v.useRef)(null),c=(0,v.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,v.useRef)(e),l=e.autoClose,d=e.pauseOnHover,f=e.closeToast,p=e.onClick,m=e.closeOnClick;function g(t){if(e.draggable){c.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);var n=s.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=Z(t.nativeEvent),c.y=z(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(){if(c.boundingRect){var t=c.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&c.x>=o&&c.x<=a&&c.y>=n&&c.y<=r?b():y()}}function y(){r(!0)}function b(){r(!1)}function T(t){var r=s.current;c.canDrag&&r&&(c.didMove=!0,n&&b(),c.x=Z(t),c.y=z(t),"x"===e.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),r.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",r.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);var t=s.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,v.useEffect)((function(){u.current=e})),(0,v.useEffect)((function(){return s.current&&s.current.addEventListener("d",y,{once:!0}),k(e.onOpen)&&e.onOpen((0,v.isValidElement)(e.children)&&e.children.props),function(){var e=u.current;k(e.onClose)&&e.onClose((0,v.isValidElement)(e.children)&&e.children.props)}}),[]),(0,v.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||b();window.addEventListener("focus",y),window.addEventListener("blur",b)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return l&&d&&(x.onMouseEnter=b,x.onMouseLeave=y),m&&(x.onClick=function(e){p&&p(e),c.canCloseOnClick&&f()}),{playToast:y,pauseToast:b,isRunning:n,preventExitTransition:a,toastRef:s,eventHandlers:x}}function H(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return(0,v.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},(0,v.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,v.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function q(e){var t,n,r=e.delay,o=e.isRunning,a=e.closeToast,i=e.type,s=e.hide,c=e.className,u=e.style,l=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,g=C({},u,{animationDuration:r+"ms",animationPlayState:o?"running":"paused",opacity:s?0:1});l&&(g.transform="scaleX("+d+")");var h=E("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+m,"Toastify__progress-bar--"+i,((t={})["Toastify__progress-bar--rtl"]=f,t)),y=k(c)?c({rtl:f,type:i,defaultClassName:h}):E(h,c),b=((n={})[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]=l&&d<1?null:function(){p&&a()},n);return(0,v.createElement)("div",Object.assign({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:y,style:g},b))}q.defaultProps={type:B.DEFAULT,hide:!1};var U=["theme","type"],Q=function(e){var t=e.theme,n=e.type,r=O(e,U);return(0,v.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var V={info:function(e){return(0,v.createElement)(Q,Object.assign({},e),(0,v.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,v.createElement)(Q,Object.assign({},e),(0,v.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,v.createElement)(Q,Object.assign({},e),(0,v.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,v.createElement)(Q,Object.assign({},e),(0,v.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,v.createElement)("div",{className:"Toastify__spinner"})}},G=function(e){var t,n,r=F(e),o=r.isRunning,a=r.preventExitTransition,i=r.toastRef,s=r.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,h=e.position,y=e.className,b=e.style,T=e.bodyClassName,x=e.bodyStyle,C=e.progressClassName,O=e.progressStyle,_=e.updateId,w=e.role,L=e.progress,N=e.rtl,R=e.toastId,P=e.deleteToast,S=e.isIn,B=e.isLoading,M=e.icon,j=e.theme,D=E("Toastify__toast","Toastify__toast-theme--"+j,"Toastify__toast--"+f,((t={})["Toastify__toast--rtl"]=N,t)),A=k(y)?y({rtl:N,position:h,type:f,defaultClassName:D}):E(D,y),Z=!!L,z=V[f],H={theme:j,type:f},U=z&&z(H);return!1===M?U=void 0:k(M)?U=M(H):(0,v.isValidElement)(M)?U=(0,v.cloneElement)(M,H):I(M)?U=M:B&&(U=V.spinner()),(0,v.createElement)(g,{isIn:S,done:P,position:h,preventExitTransition:a,nodeRef:i},(0,v.createElement)("div",Object.assign({id:R,onClick:d,className:A},s,{style:b,ref:i}),(0,v.createElement)("div",Object.assign({},S&&{role:w},{className:k(T)?T({type:f}):E("Toastify__toast-body",T),style:x}),U&&(0,v.createElement)("div",{className:E("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!B,n))},U),(0,v.createElement)("div",null,u)),function(e){if(e){var t={closeToast:m,type:f,theme:j};return k(e)?e(t):(0,v.isValidElement)(e)?(0,v.cloneElement)(e,t):void 0}}(c),(l||Z)&&(0,v.createElement)(q,Object.assign({},_&&!Z?{key:"pb-"+_}:{},{rtl:N,theme:j,delay:l,isRunning:o,isIn:S,closeToast:m,hide:p,type:f,style:O,className:C,controlledProgress:Z,progress:L}))))},W=M({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),X=function(e){var t=A(e),n=t.getToastToRender,r=t.containerRef,o=t.isToastActive,a=e.className,i=e.style,s=e.rtl,c=e.containerId;function u(e){var t,n=E("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=s,t));return k(a)?a({position:e,rtl:s,defaultClassName:n}):E(n,L(a))}return(0,v.createElement)("div",{ref:r,className:"Toastify",id:c},n((function(e,t){var n=t.length?C({},i):C({},i,{pointerEvents:"none"});return(0,v.createElement)("div",{className:u(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,v.createElement)(G,Object.assign({},n,{isIn:o(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?H:n.closeButton}),t)})))})))};X.defaultProps={position:S.TOP_RIGHT,transition:W,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:H,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Y,K,J,$=new Map,ee=[],te=!1;function ne(){return Math.random().toString(36).substring(2,9)}function re(e){return e&&(I(e.toastId)||_(e.toastId))?e.toastId:ne()}function oe(e,t){return $.size>0?j.emit(0,e,t):(ee.push({content:e,options:t}),te&&R&&(te=!1,K=document.createElement("div"),document.body.appendChild(K),(0,x.render)((0,v.createElement)(X,Object.assign({},J)),K))),t.toastId}function ae(e,t){return C({},t,{type:t&&t.type||e,toastId:re(t)})}function ie(e){return function(t,n){return oe(t,ae(e,n))}}function se(e,t){return oe(e,ae(B.DEFAULT,t))}function ce(){var e=(0,v.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],o=(0,v.useState)(""),a=(0,s.Z)(o,2),i=a[0],c=a[1],u=(0,h.lr)({}),l=(0,s.Z)(u,2),d=l[0],f=l[1],p=d.get("query");(0,v.useEffect)((function(){p&&((0,y.gH)(p).then((function(e){return r(e)})),c(p))}),[p]);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Search Movies"}),(0,m.jsx)(g,{handleSetQuery:function(e){c(e.target.value)},handleSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value.trim();if(!t)return se("Empty request!",{position:"top-center"}),void f("");f({param:t}),e.currentTarget.reset()},value:i}),(0,m.jsx)(b.Z,{movies:n})]})}se.loading=function(e,t){return oe(e,ae(B.DEFAULT,C({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},se.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=I(o)?se.loading(o,n):se.loading(o.render,C({},n,o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=C({type:e},s,n,{data:o}),i=I(t)?{render:t}:t;return r?se.update(r,C({},a,i)):se(i.render,C({},a,i)),o}se.dismiss(r)},u=k(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},se.success=ie(B.SUCCESS),se.info=ie(B.INFO),se.error=ie(B.ERROR),se.warning=ie(B.WARNING),se.warn=se.warning,se.dark=function(e,t){return oe(e,ae(B.DEFAULT,C({theme:"dark"},t)))},se.dismiss=function(e){return j.emit(1,e)},se.clearWaitingQueue=function(e){return void 0===e&&(e={}),j.emit(5,e)},se.isActive=function(e){var t=!1;return $.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},se.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=$.get(n||Y);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=C({},r,t,{toastId:t.toastId||e,updateId:ne()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,oe(i,a)}}),0)},se.done=function(e){se.update(e,{progress:1})},se.onChange=function(e){return k(e)&&j.on(4,e),function(){k(e)&&j.off(4,e)}},se.configure=function(e){void 0===e&&(e={}),te=!0,J=e},se.POSITION=S,se.TYPE=B,j.on(2,(function(e){Y=e.containerId||e,$.set(Y,e),ee.forEach((function(e){j.emit(0,e.content,e.options)})),ee=[]})).on(3,(function(e){$.delete(e.containerId||e),0===$.size&&j.off(0).off(1).off(5),R&&K&&document.body.removeChild(K)}))}}]);
//# sourceMappingURL=450.af98a50d.chunk.js.map