import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

galleryContainer.innerHTML = createsMarkup(galleryItems)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createsMarkup (array) {
  return array.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  }).join("")
}
