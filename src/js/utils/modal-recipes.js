import { findRecipes } from '../service/API';
import { measureRating } from '../renders/renders';
import { ratingScale } from '../renders/renders';
import SmoothScrollbar from 'smooth-scrollbar';
const refs = {
  closeModalBtn: document.querySelector('.close-modal'),
  backdropModal: document.querySelector('.backdrop-recipes'),
  modalRecipes: document.querySelector('.modal-recipes-js'),
  backdropModal: document.querySelector('.backdrop-recipes'),
};
// open\close a modal window

refs.closeModalBtn.addEventListener('click', CloseModal);
refs.backdropModal.addEventListener('click', CloseOnClick);
document.addEventListener('keydown', CloseOnBtnClick);
export function OpenModal(currentBtn) {
  refs.backdropModal.classList.remove('is-hidden');
  genereteRecipe(currentBtn.dataset.id);
  ToggleScroll();
}
function CloseModal() {
  refs.backdropModal.classList.add('is-hidden');
  refs.modalRecipes.innerHTML = '';
  ToggleScroll();
}
function CloseOnClick(e) {
  if (e.target.classList.contains('backdrop-recipes')) CloseModal();
}
function CloseOnBtnClick(e) {
  if (e.key === 'Escape') CloseModal();
}
// bild the page

async function genereteRecipe(id) {
  try {
    const recipe = await findRecipes(id);

    addData(CreateMarkup(recipe));
    addScrollbarText();
  } catch (err) {
    console.error(err);
  }
}
function CreateMarkup(data) {
  const ingr = data.ingredients;
  const src = !data.youtube
    ? data.thumb
    : data.youtube.replace('watch?v=', 'embed/');
  const tags = data.tags;
  let tagslist = '';
  if (!tags[0]) {
    // document.querySelector(".recipe-tags").classList.add("is-hidden");
    // console.log('Zero');
  } else {
    for (let k = 0; k < tags.length; k++) {
      tagslist += `<li class="recipe-tag">#${tags[k]}</li>`;
    }
  }
  let ingrList = '';
  for (let i = 0; i < ingr.length; i++) {
    ingrList += `<li class="recipe-ingridient">${ingr[i].name} <span class="recipe-ps">${ingr[i].measure}</span></li>`;
  }
  const fixRating = data.rating.toFixed(1);
  const markup = `<div class="recipe-parts">
    ${checkSrc(src, data.description)}
    <div class="recipe-title">
      <h2 class="recipe-title-txt">${data.title}</h2>
      <div class="rating-part">
        <p class='rate'>${fixRating}</p>
      ${ratingScale(fixRating)}
        <p class="recipe-time">${data.time} min</p>
      </div>
      <ul class="ingridients">
        ${ingrList}
      </ul>
    </div>
  </div>
  <ul class="recipe-tags">
    ${tagslist}
  </ul>
  <p class="recipe-instr">${data.instructions}</p>
  </div>
`;
  // scrollbarBox.insertAdjacentHTML('afterbegin',`<p class="recipe-instr">${data.instructions}</p>`);

  // const scrollbarBox = document.querySelector('.recipe-instr');
  //   const scrollbar = SmoothScrollbar.init(scrollbarBox, {
  //       alwaysShowTracks: true
  //   });

  return markup;
}
function addScrollbarText() {
  const scrollbarBox = document.querySelector('.recipe-instr');
  const scrollbar = SmoothScrollbar.init(scrollbarBox, {
    alwaysShowTracks: true,
  });
  // scrollbarBox.appendChild(`<p class="recipe-instr">${instructions}</p>`);

  const scrollbarIngs = document.querySelector('.ingridients');
  const scrollbarSec = SmoothScrollbar.init(scrollbarIngs, {
    alwaysShowTracks: true,
  });
}
function addData(markup) {
  refs.modalRecipes.insertAdjacentHTML('afterbegin', markup);
}
function ToggleScroll() {
  const body = document.querySelector('body');
  body.classList.toggle('overflow-hidden');
}

function checkSrc(url, description) {
  if (url.endsWith('.jpg')) {
    return `<img class="modal-img" src="${url}" alt="${description}">`;
  } else {
    return `<iframe
      class="recipe-frame"
      src="${url}"
      frameborder="0"
      alt="${description}"
    ></iframe>`;
  }
}