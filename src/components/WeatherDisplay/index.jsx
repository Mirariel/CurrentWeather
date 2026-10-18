import { useEffect, useState } from "react";
import getWeather from "../../api";

function WeatherDisplay() {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeeed] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("khm");

  const loadWeather = () => {
    setIsFetching(true);
    getWeather(temperatureUnit, windSpeedUnit).then((data) => {
      console.log("data :>> ", data);
    });
  };

  useEffect(() => {
    loadWeather();
  });

  return <div>WeatherDisplay</div>;
}

export default WeatherDisplay;
