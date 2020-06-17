import './assets/styles/styles.scss';
import UiManager from './uiManager';
import IpGeoApi from './plugins/ipGeoApi';

IpGeoApi.getUsersCity().then((geoObj) => {
  UiManager.searchForCity(geoObj.city);
});
