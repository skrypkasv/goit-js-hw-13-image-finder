import imgCardTpl from '../templates/image_card.hbs';

export const imgsContainer = document.querySelector('.gallery');

export function renderImgGallery(imgs) {
  const markup = imgCardTpl(imgs);
  imgsContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearImgsContainer() {
  imgsContainer.innerHTML = '';
}
