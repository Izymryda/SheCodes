import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <span>
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span id="unit">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span id="temperature">{Math.round(farenheit())}</span>
        <span id="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
