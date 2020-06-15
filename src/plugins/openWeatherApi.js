import Weather from "../model/weather";
import Util from '../util';

const openWeatherApi = (()=> {
  const apiHost = "https://api.openweathermap.org/data/2.5/weather?appid=3a35fc19e78203eb10391f72cb009c67";

  const getWeatherByCity = (cityName, unit) => {
    const fetchQuery = apiHost+`&q=${cityName}&units=${unit==='c'?'metric':'imperial'}`;

    return new Promise((resolve, reject) => {
      fetch(fetchQuery)
      .then((response)=> {
        console.log(response.status);
        if(response.status != 200){
          reject('City not found.');
          return;
        } else {
          response.json().then((json) => {
            const weather = new Weather(json.main.temp, json.main.pressure, json.main.humidity, json.main.temp_min, json.main.temp_max, json.wind.speed, json.weather[0].description, Util.getCountryNameByCode(json.sys.country) );
  
            resolve(weather);
          });
        }

        
      }).catch(() => {
        console.log('entro');
        reject('City not found.');
      });
    });
    
  }
  return { getWeatherByCity };
})();

export default openWeatherApi;