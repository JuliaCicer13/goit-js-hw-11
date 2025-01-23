import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createMarkUp(images) {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    gallery.innerHTML = ''; // Очищаем старую галерею

    const photoList = document.createElement('ul');
    photoList.classList.add('photo-list');

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `
      <li class="wrap-card">
        <a class="link-card" href="${largeImageURL}">
          <img class="photo-card" src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="info">
          <div class="wrap-text">
            <p><b>Likes</b> ${likes}</p>
          </div>
          <div class="wrap-text">
            <p><b>Views</b> ${views}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Comments</b> ${comments}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Downloads</b> ${downloads}</p>
          </div>
        </div>
      </li>
      `).join('');

    photoList.innerHTML = markup;
    gallery.append(photoList); // Теперь добавляем photoList в gallery

    const lightbox = new SimpleLightbox('#gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();
  }
}

