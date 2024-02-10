import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-name');
const searchQuery = searchInput.value.trim();

form.addEventListener('submit', getPhoto);

if (searchQuery === '') {
  iziToast.error({
    title: 'Error',
    message: 'Please enter a search query',
  });
}

function getPhoto(event) {
  event.preventDefault();

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

  fetch(url).then(res);
}
