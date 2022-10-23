import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastItem.css";

export default function WeatherForecastItem(props) {
  function fomatDate(time) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = new Date(time).getDay();
    return <div>{days[day]}</div>;
  }

  return (
    <div className="WeatherForecastItem col-sm">
      <div className="text-center">
        <div className="WeatherForecastItem-day">
          {fomatDate(props.data.time * 1000)}
        </div>
        <WeatherIcon code={props.data.condition.icon_url} />
        <div className="WeatherForecastItem-temperature">
          <span className="WeatherForecastItem-temperature-max">
            {Math.round(props.data.temperature.maximum)}°
          </span>
          <span className="WeatherForecastItem-temperature-min">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    </div>
  );
}
