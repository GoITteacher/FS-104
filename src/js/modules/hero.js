const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const userValue = e.target.elements.query.value;

  searchHero(userValue).then(hero => {
    const markup = heroTemplate(hero);

    refs.heroEl.insertAdjacentHTML('beforeend', markup);
  });
});

function searchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
  const params = new URLSearchParams({
    hero: superhero,
  });
  const url = `${BASE_URL}?${params}`;

  const headers = {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

function heroTemplate(hero) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img src="${hero.images.md}">
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${hero.biography.fullName}</p>
      <p class="hero-bio">Publisher - Marvel Comics</p>
      <p class="hero-bio">Alignment - good</p>
      <p class="hero-bio">Gender - Male</p>
      <p class="hero-bio">Race - Human</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: 10</span>
      <span>Strength: 10</span>
      <span>Speed: 10</span>
      <span>Combat: 10</span>
    </div>
  </div>
</div>`;
}
