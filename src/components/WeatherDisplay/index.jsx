import styles from "./WeatherDisplay.module.sass";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaWind } from "react-icons/fa";
import classNames from "classnames";

function WeatherDisplay(props) {
  const { temperature, temperatureUnitMark, windSpeed, windSpeedUnitMark } =
    props;

  const temperatureIndicator = classNames({
    [styles.weatherIcon]: true,
    [styles.coldTemperature]: temperature <= 0,
    [styles.hotTemperature]: temperature > 0,
  });

  return (
    <section className={styles.displaySection}>
      <h3>Current Weather</h3>
      <div className={styles.temperature}>
        <LiaTemperatureHighSolid className={temperatureIndicator} />{" "}
        {temperature} {temperatureUnitMark}
      </div>
      <div className={styles.wind}>
        <FaWind className={temperatureIndicator} /> {windSpeed}{" "}
        {windSpeedUnitMark}
      </div>
    </section>
  );
}

export default WeatherDisplay;
