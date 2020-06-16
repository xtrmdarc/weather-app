import './assets/styles/styles.scss';
import UiManager from './uiManager';
import UnsplashApi from './plugins/unsplayApi';
import OpenWeatherApi from './plugins/openWeatherApi';
import IpGeoApi from './plugins/ipGeoApi';

IpGeoApi.getUsersCity().then((geoObj) => {
  UiManager.searchForCity(geoObj.city);
});
