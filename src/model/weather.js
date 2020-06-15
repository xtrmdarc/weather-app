class Weather {

  constructor(temperature, pressure, humidity, tempMin, tempMax, windSpeed, description) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.windSpeed = windSpeed;
    this.description = description;
  }

}

export default Weather;