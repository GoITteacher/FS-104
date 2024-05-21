const formEl = document.querySelector('.js-binance-form');
const infoEl = document.querySelector('.js-binance-info');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  const userValue = e.target.elements.query.value;

  getPrice(userValue).then(data => {
    const markup = symbolTemplate(data);
    infoEl.innerHTML = markup;
  });
});

function getPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';

  const params = new URLSearchParams({
    symbol: userValue,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

function symbolTemplate({ price, symbol }) {
  const title = symbol.toLowerCase().slice(0, -4);
  return `<img class="coin-logo" src="https://assets.coincap.io/assets/icons/${title}@2x.png">
  <p class="coin-title">${symbol}</p>
  <p class="coin-price">${(+price).toFixed(2)}</p>`;
}
