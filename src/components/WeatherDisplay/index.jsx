function WeatherDisplay(props) {
  const { temperature, temperatureUnitMark, windSpeed, windSpeedUnitMark } =
    props;

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
