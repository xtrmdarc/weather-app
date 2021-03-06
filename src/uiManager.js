import UnsplashApi from './plugins/unsplayApi';
import OpenWeatherApi from './plugins/openWeatherApi';

const uiManager = (() => {
  const inputGeo = document.querySelector('#input-geo');
  const mainDOM = document.querySelector('main');
  const weatherDesc = document.querySelector('#weather-description');
  const temperature = document.querySelector('#temperature');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');
  const country = document.querySelector('#country');
  const city = document.querySelector('#city');
  const fareheintSwitch = document.querySelector('#farenheit-switch');
  const celsiusSwitch = document.querySelector('#celsius-switch');
  const mainLoader = document.querySelector('#main-loader');
  const errorMessage = document.querySelector('#error-message');
  let degreeUnit = 'c';

  const updateWeather = (weather) => {
    weatherDesc.textContent = weather.description;
    temperature.textContent = `${weather.temperature.toFixed(0)}º`;
    humidity.textContent = `${weather.humidity}%`;
    windSpeed.textContent = `${weather.windSpeed} m/s`;
    city.textContent = weather.city;
    country.textContent = weather.country;
  };

  const searchForCity = (city) => {
    mainLoader.style.display = 'block';

    UnsplashApi.getImageBySearch(city).then((response) => {
      mainDOM.style.backgroundImage = `url(${response.url})`;
      mainLoader.style.display = 'none';
      OpenWeatherApi.getWeatherByCity(city, degreeUnit).then((weather) => {
        updateWeather(weather);
      }).catch((err) => {
        errorMessage.style.display = 'block';
        errorMessage.textContent = err.message;
      });
    });
  };

  inputGeo.addEventListener('keypress', (e) => {
    const queryValue = e.target.value;
    errorMessage.style.display = 'none';

    if (e.code === 'Enter' && queryValue.trim().length > 0) {
      searchForCity(queryValue);
    }
  });

  fareheintSwitch.addEventListener('click', () => {
    celsiusSwitch.classList.remove('selected');
    fareheintSwitch.classList.add('selected');
    degreeUnit = 'f';
  });

  celsiusSwitch.addEventListener('click', () => {
    fareheintSwitch.classList.remove('selected');
    celsiusSwitch.classList.add('selected');
    degreeUnit = 'c';
  });

  return { searchForCity };
})();

export default uiManager;