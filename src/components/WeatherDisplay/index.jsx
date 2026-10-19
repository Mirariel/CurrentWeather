import { useEffect, useState } from "react";
import getWeather from "../../api";

function WeatherDisplay() {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeeed] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("khm");
  const [temperatureUnitMark, setTemperatureUnitMark] = useState(null);
  const [windSpeedUnitMark, setWindSpeedUnitMarkL] = useState(null);

  const loadWeather = () => {
    setIsFetching(true);
    getWeather(temperatureUnit, windSpeedUnit)
      .then((data) => {
        const {
          current: {
            temperature_2m: temperaturesL,
            wind_speed_10m: windSpeedL,
          },
          current_units: {
            temperature_2m: temperatureUnitMarkL,
            wind_speed_10m: windSpeedUnitMarkL,
          },
        } = data;
        console.log('data :>> ', data);
        setTemperature(temperaturesL);
        setWindSpeeed(windSpeedL);
        setTemperatureUnitMark(temperatureUnitMarkL);
        setWindSpeedUnitMarkL(windSpeedUnitMarkL);
      })
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadWeather();
  }, [
    temperatureUnit,
    windSpeedUnit,
    temperatureUnitMark,
    windSpeedUnitMark,
    temperatureUnit,
    windSpeedUnit,
  ]);

  const {} = data;

  return (
    <section>
      <h3>Current Weather</h3>
      <div>
        {temperature} {temperatureUnitMark}
      </div>
      <div>
        {windSpeed} {windSpeedUnitMark}
      </div>
    </section>
  );
}

export default WeatherDisplay;
