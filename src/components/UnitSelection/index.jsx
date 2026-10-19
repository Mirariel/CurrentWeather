import styles from "./UnitSelection.module.sass";

function UnitSelection(props) {
  const {
    windSpeedUnit,
    temperatureUnit,
    temperatureUnitChange,
    windSpeedUnitChange,
  } = props;

  return (
    <section className={styles.unitSection}>
      <div className={styles.selectUnitContainer}>
        <span className={styles.unitTarget}>Wind speed unit:</span>

        <select
          className={styles.unitSelect}
          name="windSpeedUnit"
          value={windSpeedUnit}
          onChange={windSpeedUnitChange}
        >
          <option value="kmh">k/mh</option>
          <option value="ms">m/s</option>
        </select>
      </div>

      <div className={styles.selectUnitContainer}>
        <span className={styles.unitTarget}>Temperatre unit:</span>
        <select
          className={styles.unitSelect}
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
