!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequiredfd9;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiredfd9=r),r.register("eFwyf",(function(e,t){var o=document.getElementById("js-header"),n=document.querySelectorAll(".toggle-checkbox"),r=document.body,i=localStorage.getItem("theme");i&&(r.classList.add(i),"dark"===i&&n.forEach((function(e){return e.checked=!0}))),o.addEventListener("click",(function(e){"switch-theme"===e.target.name&&(r.classList.contains("dark")?(r.classList.remove("dark"),r.classList.add("light"),localStorage.setItem("theme","light")):(r.classList.remove("light"),r.classList.add("dark"),localStorage.setItem("theme","dark")))}))})),r.register("7mS1x",(function(e,t){var o=r("gnsaF");o.disableBodyScroll,o.enableBodyScroll;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),o[n?"enableBodyScroll":"disableBodyScroll"](document.body)};console.log(document.body),e&&t&&n&&(t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),o.enableBodyScroll(document.body))})))}))})),r.register("gnsaF",(function(t,o){e(t.exports,"disableBodyScroll",(function(){return g})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return h}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),d=[],l=!1,c=-1,a=void 0,s=void 0,u=void 0,f=function(e){return d.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},g=function(e,t){if(e){if(!d.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[o]),i?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?m(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(d.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),l=!1),c=-1),i?y():v(),d=[]},h=function(e){e?(d=d.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===d.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),l=!1)),i?y():v()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}))}();
//# sourceMappingURL=index.da07a729.js.map