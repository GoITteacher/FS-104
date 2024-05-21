const formElem = document.querySelector('.js-images-form');
const imagesList = document.querySelector('.js-images-container');

imagesList.style.flexWrap = 'wrap';

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  searchImage(query)
    .then(data => {
      const markup = imagesTemplate(data.hits);
      imagesList.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
    });
});

function searchImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43954842-86e0551d49d52b31999082e7b',
    q: query,
    lang: 'en',
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => res.json());
}

function imageTemplate(image) {
  return `<img
  src="${image.previewURL}"
  alt="image"
/>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
