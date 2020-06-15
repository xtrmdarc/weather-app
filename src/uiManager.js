import UnsplashApi from './plugins/unsplayApi';
import OpenWeatherApi from './plugins/openWeatherApi';

const uiManager = (()=> {
  const inputGeo = document.querySelector('#input-geo');
  const mainDOM = document.querySelector('main');
  const weatherDesc = document.querySelector('#weather-description');
  const temperature = document.querySelector('#temperature');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  inputGeo.addEventListener('keypress',(e) => {
    const queryValue = e.target.value;
    if(e.code === 'Enter' && queryValue.trim().length > 0)
    {
      UnsplashApi.getImageBySearch(queryValue).then((response)=> {
        mainDOM.style.backgroundImage = `url(${response.url})`;
      });

      OpenWeatherApi.getWeatherByCity(queryValue).then((weather)=> {
        updateWeather(weather);
      });
    }
  });

  const updateWeather = (weather) => {
    weatherDesc.textContent = weather.description;
    temperature.textContent = weather.temperature.toFixed(0)+'º';
    humidity.textContent = weather.humidity+'%';
    windSpeed.textContent = weather.windSpeed+' m/s';
  };

})();

export default uiManager;