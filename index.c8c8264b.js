!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequiredfd9;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequiredfd9=i),i.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("7Mtae",(function(n,o){e(n.exports,"ratingScale",(function(){return a})),e(n.exports,"default",(function(){return s}));var r=i("k4I0Z");function c(e,t){return e<=t?"rate-item-active":"rate-item"}function a(e){return"<ul class='rate-list'>\n             <li class=".concat(c(1,e),'>\n              <svg class="star-icon" width="18" height="18">\n                <use href="').concat(t(r),'#star"></use>\n              </svg>\n            </li>\n            <li class=').concat(c(2,e),'>\n              <svg class="star-icon" width="18" height="18">\n                <use href="').concat(t(r),'#star"></use>\n              </svg>\n            </li>\n            <li class=').concat(c(3,e),'>\n              <svg class="star-icon" width="18" height="18">\n                <use href="').concat(t(r),'#star"></use>\n              </svg>\n            </li>\n            <li class=').concat(c(4,e),'>\n              <svg class="star-icon" width="18" height="18">\n                <use href="').concat(t(r),'#star"></use>\n              </svg>\n            </li>\n            <li class=').concat(c(5,e),'>\n              <svg class="star-icon" width="18" height="18">\n                <use href="').concat(t(r),'#star"></use>\n              </svg>\n            </li>\n          </ul>')}var s=function(e,n,o,i,c,s){var l={title:e,description:n,preview:o,rating:i,id:c,category:s},d=i.toFixed(1);return"<div class='recipe-item' \n                style='\n                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),\n                      rgba(5, 5, 5, 0)),\n                      url(".concat(o,"); \n                      background-position: center;\n                      background-size: cover;'>\n\n                  <div class='inter-box'>\n\n                    <button type='button' \n                    class='favorite-btn ").concat(function(e){var t=localStorage.getItem("favorites"),n=JSON.parse(t);return t&&n.find((function(t){return t.id===e}))?"active":""}(c),"'\n                    data-info='").concat(JSON.stringify(l),'\' \n                    name=\'favorite\'>\n                      <svg class="heart-icon" width="22" height="22">\n                          <use href="').concat(t(r),"#heart\"></use>\n                        </svg>\n                    </button> \n\n                    <h2 class='title-item overflow-ellipsis'>").concat(e,"</h2>\n                    <p class='title-descr ellipsis-multiline'>").concat(n,"</p>\n\n                    <div class='rate-details-box'>\n                    <p class='rate'>").concat(d,"</p>\n                    ").concat(a(d),"\n                    <button type='button' name='details' class='button item-rec' data-id=").concat(c,">See recipe</button>\n                    </div>\n                  </div>\n                </div>")}})),i.register("k4I0Z",(function(e,t){e.exports=i("aNJCr").getBundleURL("k5HMq")+i("iE7OH").resolve("ee16w")})),i.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),i.register("eFwyf",(function(e,t){var n=document.getElementById("js-header"),o=document.querySelectorAll(".toggle-checkbox"),r=document.body,i=localStorage.getItem("theme");i&&(r.classList.add(i),"dark"===i&&o.forEach((function(e){return e.checked=!0}))),n.addEventListener("click",(function(e){"switch-theme"===e.target.name&&(r.classList.contains("dark")?(r.classList.remove("dark"),r.classList.add("light"),localStorage.setItem("theme","light")):(r.classList.remove("light"),r.classList.add("dark"),localStorage.setItem("theme","dark")))}))})),i.register("7mS1x",(function(e,t){var n=i("gnsaF");n.disableBodyScroll,n.enableBodyScroll;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),n[o?"enableBodyScroll":"disableBodyScroll"](document.body)};e&&t&&o&&(t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),n.enableBodyScroll(document.body))})))}))})),i.register("gnsaF",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return h})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return y}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],a=!1,s=-1,l=void 0,d=void 0,u=void 0,f=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},g=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},m=function(){if(void 0!==d){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(t,e),d=void 0}},h=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c),[n]),i?window.requestAnimationFrame((function(){if(void 0===d){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-s;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?v(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",v,o?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(c.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),a=!1),s=-1),i?m():g(),c=[]},y=function(e){e?(c=c.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,a&&0===c.length&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),a=!1)),i?m():g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),i("iE7OH").register(JSON.parse('{"k5HMq":"index.c8c8264b.js","ee16w":"sprite.ff7fb2eb.svg"}'))}();
//# sourceMappingURL=index.c8c8264b.js.map
