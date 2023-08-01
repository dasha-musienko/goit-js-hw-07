import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

galleryContainer.innerHTML = createsMarkup(galleryItems)

galleryContainer.addEventListener("click", imgClickHandler)


function createsMarkup (array) {
  return array.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  }).join("")
}

function imgClickHandler (evt) {
  const linkContainer = evt.target.closest("a")
  const fullSizeImg = linkContainer.href;
  const description = linkContainer.querySelector("img").alt;


  blocksLinkOpening(linkContainer, evt);
  modalHandler(fullSizeImg, description);
}

function blocksLinkOpening (link, e) {
  if (link) {
    e.preventDefault()
  }
}

function modalHandler (img, descr) {
 const instance = basicLightbox.create(`
  <img src="${img}" alt="${descr}">
`, {
  onShow: (instance) => {
    escapeKeyDownHandler (instance)
  }
})

instance.show();
}

function escapeKeyDownHandler (ins) {
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ins.close();
    }
  }, {once: true});
}





