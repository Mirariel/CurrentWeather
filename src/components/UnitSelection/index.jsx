function UnitSelection(props) {
  const {
    windSpeedUnit,
    temperatureUnit,
    temperatureUnitChange,
    windSpeedUnitChange,
  } = props;

  return (
    <section>
      <div>
        <span>Wind speed unit:</span>

        <select
          name="windSpeedUnit"
          value={windSpeedUnit}
          onChange={windSpeedUnitChange}
        >
          <option value="kmh">k/mh</option>
          <option value="ms">m/s</option>
        </select>
      </div>

      <div>
        <span>Temperatre unit:</span>
        <select
          name="temperatureUnit"
          value={temperatureUnit}
          onChange={temperatureUnitChange}
        >
          <option value="celsius">°C</option>
          <option value="fahrenheit">°F</option>
        </select>
      </div>
    </section>
  );
}

export default UnitSelection;
