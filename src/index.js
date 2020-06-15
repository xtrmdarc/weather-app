import './assets/styles/styles.scss';
import UiManager from './uiManager';
import UnsplashApi from './plugins/unsplayApi';
import OpenWeatherApi from './plugins/openWeatherApi';

// const mainDOM = document.querySelector('main');
// console.log(mainDOM);
// UnsplashApi.getImageBySearch('Peru').then((response) => {
//   console.log('entro aqui', response.url);
//   mainDOM.style.backgroundImage = "url("+ response.url +")";
// });

OpenWeatherApi.getWeatherByCity('Lima').then((weather) => {
  console.log(weather);
});