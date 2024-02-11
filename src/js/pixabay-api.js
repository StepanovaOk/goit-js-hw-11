import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-name');

const gallery = document.querySelector('.gallery');

form.addEventListener('submit', getPhoto);

function getPhoto(event) {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
  }

  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42310325-d8e2b88bd4f4d7db9639050a5';
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  fetch(url)
    .then(res => res.json())
    .then(data => renderPhotos(data.hits))
    .catch(error => console.log('Error fetching data:', error));
}

function makeMarkup(webformatURL, tags, likes, views, comments, downloads) {
  return `<li class="photo">
    <div class="card-image">
      <img src="${webformatURL}" alt=${tags}></img>
      <div class="description">
        <p> Likes ${likes}</p>
        <p> Views ${views}</p>
        <p> Comments ${comments}</p>
        <p> Downloads ${downloads}</p>
      </div>
    </div>
  </li>`;
}

function renderPhotos(photo) {
  gallery.innerHTML = '';

  photo.forEach(photo => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = photo;
    const photoElement = makeMarkup(
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads
    );
    gallery.insertAdjacentHTML('beforeend', photoElement);
  });
}
