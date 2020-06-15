class Weather {

  constructor(temperature, pressure, humidity, tempMin, tempMax, windSpeed, description, country) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.windSpeed = windSpeed;
    this.description = description;
    this.country = country;
  }

}

export default Weather;