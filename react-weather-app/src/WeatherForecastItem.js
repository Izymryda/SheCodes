import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastItem.css";

export default function WeatherForecastItem(props) {
  return (
    <div className="WeatherForecastItem col-sm">
      <div className="text-center">
        <div className="WeatherForecastItem-day">Thu</div>
        <WeatherIcon code={props.data.iconUrl} />
        <div className="WeatherForecastItem-temperature">
          <span className="WeatherForecastItem-temperature-max">19°</span>
          <span className="WeatherForecastItem-temperature-min">10°</span>
        </div>
      </div>
    </div>
  );
}
