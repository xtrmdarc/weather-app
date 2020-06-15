import Weather from "../model/weather";
import Util from '../util';

const openWeatherApi = (()=> {
  const apiHost = "https://api.openweathermap.org/data/2.5/weather?appid=3a35fc19e78203eb10391f72cb009c67&units=metric";

  const getWeatherByCity = (cityName) => {
    const fetchQuery = apiHost+`&q=${cityName}`;

    return new Promise((resolve, reject) => {
      fetch(fetchQuery )
      .then((response)=> {
        response.json().then((json) => {
          const weather = new Weather(json.main.temp, json.main.pressure, json.main.humidity, json.main.temp_min, json.main.temp_max, json.wind.speed, json.weather[0].description, Util.getCountryNameByCode(json.sys.country) );

          resolve(weather);
        });
      })
    });
    
  }
  return { getWeatherByCity };
})();

export default openWeatherApi;