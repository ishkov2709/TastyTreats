function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequiredfd9;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequiredfd9=o);var a=o("9c7ox");o("lF9VE"),o("18cvE"),o("aahN2");var r=o("2LJO6"),s=o("cYlGq"),l=o("JcIhZ"),c=(r=o("2LJO6"),o("7Y9D8"));a=o("9c7ox");const d={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),categoryBtn:document.querySelector(".favorite-categories"),allBtn:document.querySelector(".all-btn"),hiroImg:document.querySelector(".fav-hero"),recipesBox:document.getElementById("image-container"),modal:document.getElementById("scroll-rec")};let f="";function u(){const e=window.innerWidth;return e<768?9:e>=768?12:void 0}function g(e,t){const n={};for(let i=0;i<e.length;i+=t){n[Math.floor(i/t)+1]=e.slice(i,i+t)}return n}function v(){const e=function(){const e=localStorage.getItem("favorites"),t=JSON.parse(e);return e?t.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t)).reduce(((e,t)=>e+y(t)),""):""}(),t=JSON.parse(localStorage.getItem("favorites"));d.favoriteRecipesList.innerHTML="",d.favoriteCategoriesList.innerHTML="",t.length&&(d.favoriteCategoriesList.innerHTML=`<button class="button-fav all-btn onActive" name="all">All categories</button>${e}`),p()}function p(e=1){const t=localStorage.getItem("favorites"),n=JSON.parse(t);if(d.allBtn.style.display="none",n.length){d.allBtn.style.display="block";const t=u(),i=g(n,t),o=Object.keys(i).length;o>1?(d.paginationBox.style.display="block",(0,l.default)(e,t,o,p),(0,a.changeThemePagination)()):d.paginationBox.style.display="none";const r=i[e].reduce(((e,{title:t,description:n,preview:i,rating:o,id:a,category:r})=>e+(0,s.default)(t,n,i,o,a,r)),"");d.favoriteRecipesList.innerHTML=r}else d.warning.classList.remove("is-hidden"),d.allBtn.classList.add("is-hidden"),window.innerWidth<768&&d.hiroImg.classList.add("is-hidden")}function y(e){return`<button class="button-fav">${e}</button>`}document.addEventListener("DOMContentLoaded",v),d.categoryBtn.addEventListener("click",(function e(t){let n,i=[];if(d.favoriteRecipesList.innerHTML="",t!==Number(t)&&"BUTTON"===t.target.nodeName){if(function({target:e}){const t=document.querySelector(".onActive");if(!t)return d.allBtn.classList.add("onActive");t.classList.remove("onActive"),e.classList.add("onActive")}(t),"all"===t.target.name)return p();f=t.target.textContent}const o=localStorage.getItem("favorites");i=JSON.parse(o),n=[...i.filter((e=>e.category===f))];let a=1;Number(t)===t&&(a=t);const r=u(),c=g(n,r),v=Object.keys(c).length;v>1?(d.paginationBox.style.display="block",(0,l.default)(a,r,v,e)):d.paginationBox.style.display="none";const y=c[a].reduce(((e,{title:t,description:n,preview:i,rating:o,id:a,category:r})=>e+(0,s.default)(t,n,i,o,a,r)),"");d.favoriteRecipesList.innerHTML=y})),d.recipesBox.addEventListener("click",(function({target:t}){if(!t.closest("button"))return;const n=t.closest("button");"favorite"===n.name&&(function(t){const n=JSON.parse(t.dataset.info);var i;t.classList.toggle("active");const o=null!==(i=JSON.parse(localStorage.getItem("favorites")))&&void 0!==i?i:[];if(t.classList.contains("active")){if(o.find((e=>e.id===n.id)))return e(c).Notify.info("Recipe was added earlier");localStorage.setItem("favorites",JSON.stringify([...o,n]))}else localStorage.setItem("favorites",JSON.stringify([...o.filter((e=>e.id!==n.id))]))}(n),function(e){const t=e.closest("div.recipe-item").dataset.category,n=JSON.parse(localStorage.getItem("favorites")),i=n.find((e=>e.category===t)),o=[...d.favoriteCategoriesList.children].find((e=>e.textContent===t));!i&&o?o.remove():i&&!o&&d.favoriteCategoriesList.insertAdjacentHTML("beforeend",y(t)),n.length?d.allBtn.style.display="block":d.allBtn.style.display="none"}(t)),"details"===n.name&&(0,r.OpenModal)(n)})),d.modal.addEventListener("click",(({target:e})=>(e.className="save-recipes-btn",v())));
//# sourceMappingURL=favorites.52ee8b7a.js.map