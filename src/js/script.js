import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
import './modules/images';

// ====================================

/* function getPostsByUserId(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=12&page=2&current=1&userId=${userId}`;
  fetch(url).then(res => {
    return res.json();
  });
}

getPostsByUserId(1);
getPostsByUserId(5);
getPostsByUserId(10); */

//!===============================================================

// function getPosts(userId) {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = '/posts';
//   const params = new URLSearchParams({
//     userId: userId,
//     param2: 'value2',
//     param3: 'value3',
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const headers = {
//     login: 'awdawdawd',
//     password: 'awdawdawd',
//     pincode: '12312314',
//   };

//   return fetch(url, { headers }).then(res => res.json());
// }

// getPosts(1).then(data => {
//   console.log(data);
// });

//!===============================================================

// function getCats(userLimit, userPage) {
//   const BASE_URL = 'https://api.thecatapi.com';
//   const END_POINT = '/v1/images/search';
//   const params = new URLSearchParams({
//     limit: userLimit,
//     page: userPage,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const headers = {
//     'x-api-key': '123123123123123123123123',
//   };

//   return fetch(url, { headers }).then(res => res.json());
// }
//!===============================================================

// function getBreedInfo(breed) {
//   const BASE_URL = 'https://cat-breeds.p.rapidapi.com';
//   const END_POINT = '/cat_breeds/breed';
//   const url = `${BASE_URL}${END_POINT}/${breed}`;

//   const headers = {
//     'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com',
//   };

//   return fetch(url, { headers }).then(res => res.json());
// }

// getBreedInfo('Bombay').then(data => {
//   console.log(data);
// });

//!===============================================================
