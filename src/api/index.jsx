function getWeather(options) {
  const defaultOptions = {
    temperatureUnit: "celsius",
    windSpeedUnit: "kmh",
  };
  const { temperatureUnit, windSpeedUnit } = { ...defaultOptions, ...options };
  const url = `https://api.open-meteo.com/v1/forecast?latitude=50.6751&longitude=17.9213&current=temperature_2m,wind_speed_10m&temperature_unit=${temperatureUnit}&wind_speed_unit=${windSpeedUnit}&timezone=auto`;

  return fetch(url).then((resp) => resp.json());
}

export default getWeather;
