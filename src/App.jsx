import styles from "./App.module.css";
import WeatherDisplay from "./components/WeatherDisplay";
import { useEffect, useState } from "react";
import getWeather from "./api";
import UnitSelection from "./components/UnitSelection";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeeed] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState("kmh");
  const [temperatureUnitMark, setTemperatureUnitMark] = useState(null);
  const [windSpeedUnitMark, setWindSpeedUnitMarkL] = useState(null);

  const loadWeather = () => {
    setIsFetching(true);
    getWeather({ temperatureUnit, windSpeedUnit })
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
        console.log("data :>> ", data);
        setTemperature(temperaturesL);
        setWindSpeeed(windSpeedL);
        setTemperatureUnitMark(temperatureUnitMarkL);
        setWindSpeedUnitMarkL(windSpeedUnitMarkL);
      })
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  const handleTemperatureUnitChange = ({ target: { value } }) => {
    setTemperatureUnit(value);
  };

  const handleWindSpeedUnitChange = ({ target: { value } }) => {
    setWindSpeedUnit(value);
  };

  useEffect(() => {
    loadWeather();
  }, [
    temperature,
    windSpeed,
    temperatureUnit,
    windSpeedUnit,
    temperatureUnitMark,
    windSpeedUnitMark,
  ]);

  return (
    <div className={styles.conteiner}>
      <UnitSelection
        windSpeedUnit={windSpeedUnit}
        temperatureUnit={temperatureUnit}
        temperatureUnitChange={handleTemperatureUnitChange}
        windSpeedUnitChange={handleWindSpeedUnitChange}
      />
      {error && <div>!!!Error!!!</div>}
      {isFetching && <div>Loading...</div>}
      {!error && !isFetching && (
        <WeatherDisplay
          windSpeed={windSpeed}
          temperature={temperature}
          temperatureUnitMark={temperatureUnitMark}
          windSpeedUnitMark={windSpeedUnitMark}
        />
      )}
    </div>
  );
}

export default App;
