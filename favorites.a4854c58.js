!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequiredfd9;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequiredfd9=i);var a=i("8nrFW");i("eFwyf"),i("7mS1x"),i("8KqBj"),i("bZSqA");var o=i("6PU4E"),l=i("7Mtae"),s=i("5IDkG"),c=(o=i("6PU4E"),{favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),categoryBtn:document.querySelector(".favorite-categories"),allBtn:document.querySelector(".all-btn"),hiroImg:document.querySelector(".fav-hero"),recipesBox:document.getElementById("image-container")}),d="";function f(){var e=window.innerWidth;return e<768?9:e>=768?12:void 0}function u(e,t){for(var n={},r=0;r<e.length;r+=t){n[Math.floor(r/t)+1]=e.slice(r,r+t)}return n}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=localStorage.getItem("favorites"),n=JSON.parse(t);if(n||(c.allBtn.style.display="none"),t){var r=f(),i=u(n,r),a=Object.keys(i).length;a>1?(c.paginationBox.style.display="block",(0,s.default)(e,r,a,v)):c.paginationBox.style.display="none";var o=i[e].reduce((function(e,t){var n=t.title,r=t.description,i=t.preview,a=t.rating,o=t.id,s=t.category;return e+(0,l.default)(n,r,i,a,o,s)}),"");c.favoriteRecipesList.innerHTML=o}else c.warning.classList.remove("is-hidden"),c.allBtn.classList.add("is-hidden"),window.innerWidth<768&&c.hiroImg.classList.add("is-hidden")}function g(e){return'<button class="button-fav">'.concat(e,"</button>")}document.addEventListener("DOMContentLoaded",(function(){var e=(t=localStorage.getItem("favorites"),n=JSON.parse(t),t?n.flatMap((function(e){return e.category})).filter((function(e,t,n){return n.indexOf(e)===t})).reduce((function(e,t){return e+g(t)}),""):"");var t,n;c.favoriteCategoriesList.insertAdjacentHTML("beforeend",e),v()})),c.categoryBtn.addEventListener("click",(function t(n){var r,i=[];if(c.favoriteRecipesList.innerHTML="",n!==Number(n)&&"BUTTON"===n.target.nodeName){if(function(e){var t=e.target,n=document.querySelector(".onActive");if(!n)return c.allBtn.classList.add("onActive");n.classList.remove("onActive"),t.classList.add("onActive")}(n),"all"===n.target.name)return v();d=n.target.textContent}var o=localStorage.getItem("favorites");i=JSON.parse(o),r=e(a)(i.filter((function(e){return e.category===d})));var g=1;Number(n)===n&&(g=n);var p=f(),y=u(r,p),m=Object.keys(y).length;m>1?(c.paginationBox.style.display="block",(0,s.default)(g,p,m,t)):c.paginationBox.style.display="none";var L=y[g].reduce((function(e,t){var n=t.title,r=t.description,i=t.preview,a=t.rating,o=t.id,s=t.category;return e+(0,l.default)(n,r,i,a,o,s)}),"");c.favoriteRecipesList.innerHTML=L})),c.recipesBox.addEventListener("click",(function(t){var n=t.target;if(n.closest("button")){var r=n.closest("button");"favorite"===r.name&&(function(t){var n,r=JSON.parse(t.dataset.info);t.classList.toggle("active");var i=null!==(n=JSON.parse(localStorage.getItem("favorites")))&&void 0!==n?n:[];t.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify(e(a)(i).concat([r]))):localStorage.setItem("favorites",JSON.stringify(e(a)(i.filter((function(e){return e.id!==r.id})))))}(r),function(t){var n=t.closest("div.recipe-item").dataset.category,r=JSON.parse(localStorage.getItem("favorites")),i=r.find((function(e){return e.category===n})),o=e(a)(c.favoriteCategoriesList.children).find((function(e){return e.textContent===n}));!i&&o?o.remove():i&&!o&&c.favoriteCategoriesList.insertAdjacentHTML("beforeend",g(n)),r.length?c.allBtn.style.display="block":c.allBtn.style.display="none"}(n)),"details"===r.name&&(0,o.OpenModal)(r)}}))}();
//# sourceMappingURL=favorites.a4854c58.js.map
