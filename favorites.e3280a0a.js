var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiredfd9;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequiredfd9=o),o("9c7ox"),o("lF9VE"),o("18cvE"),o("aahN2");var i=o("2LJO6"),a=o("cYlGq"),r=o("JcIhZ");i=o("2LJO6");const s={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),categoryBtn:document.querySelector(".favorite-categories"),allBtn:document.querySelector(".all-btn"),hiroImg:document.querySelector(".fav-hero"),recipesBox:document.getElementById("image-container")};let l="";function c(){const e=window.innerWidth;return e<768?9:e>=768?12:void 0}function d(e,t){const n={};for(let o=0;o<e.length;o+=t){n[Math.floor(o/t)+1]=e.slice(o,o+t)}return n}function f(e=1){const t=localStorage.getItem("favorites"),n=JSON.parse(t);if(n||(s.allBtn.style.display="none"),t){const t=c(),o=d(n,t),i=Object.keys(o).length;i>1?(s.paginationBox.style.display="block",(0,r.default)(e,t,i,f)):s.paginationBox.style.display="none";const l=o[e].reduce(((e,{title:t,description:n,preview:o,rating:i,id:r,category:s})=>e+(0,a.default)(t,n,o,i,r,s)),"");s.favoriteRecipesList.innerHTML=l}else s.warning.classList.remove("is-hidden"),s.allBtn.classList.add("is-hidden"),window.innerWidth<768&&s.hiroImg.classList.add("is-hidden")}function u(e){return`<button class="button-fav">${e}</button>`}document.addEventListener("DOMContentLoaded",(function(){const e=function(){const e=localStorage.getItem("favorites"),t=JSON.parse(e);return e?t.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t)).reduce(((e,t)=>e+u(t)),""):""}();s.favoriteCategoriesList.insertAdjacentHTML("beforeend",e),f()})),s.categoryBtn.addEventListener("click",(function e(t){let n,o=[];if(s.favoriteRecipesList.innerHTML="",t!==Number(t)&&"BUTTON"===t.target.nodeName){if(function({target:e}){const t=document.querySelector(".onActive");if(!t)return s.allBtn.classList.add("onActive");t.classList.remove("onActive"),e.classList.add("onActive")}(t),"all"===t.target.name)return f();l=t.target.textContent}const i=localStorage.getItem("favorites");o=JSON.parse(i),n=[...o.filter((e=>e.category===l))];let u=1;Number(t)===t&&(u=t);const g=c(),v=d(n,g),p=Object.keys(v).length;p>1?(s.paginationBox.style.display="block",(0,r.default)(u,g,p,e)):s.paginationBox.style.display="none";const y=v[u].reduce(((e,{title:t,description:n,preview:o,rating:i,id:r,category:s})=>e+(0,a.default)(t,n,o,i,r,s)),"");s.favoriteRecipesList.innerHTML=y})),s.recipesBox.addEventListener("click",(function({target:e}){if(!e.closest("button"))return;const t=e.closest("button");"favorite"===t.name&&(function(e){const t=JSON.parse(e.dataset.info);var n;e.classList.toggle("active");const o=null!==(n=JSON.parse(localStorage.getItem("favorites")))&&void 0!==n?n:[];e.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify([...o,t])):localStorage.setItem("favorites",JSON.stringify([...o.filter((e=>e.id!==t.id))]))}(t),function(e){const t=e.closest("div.recipe-item").dataset.category,n=JSON.parse(localStorage.getItem("favorites")),o=n.find((e=>e.category===t)),i=[...s.favoriteCategoriesList.children].find((e=>e.textContent===t));!o&&i?i.remove():o&&!i&&s.favoriteCategoriesList.insertAdjacentHTML("beforeend",u(t)),n.length?s.allBtn.style.display="block":s.allBtn.style.display="none"}(e)),"details"===t.name&&(0,i.OpenModal)(t)}));
//# sourceMappingURL=favorites.e3280a0a.js.map