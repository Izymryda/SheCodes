import React from "react";
import WeatherForecastItem from "./WeatherForecastItem";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
          <div className="row mt-3">
              
        <WeatherForecastItem data={props.data} />
        <WeatherForecastItem data={props.data} />
        <WeatherForecastItem data={props.data} />
        <WeatherForecastItem data={props.data} />
        <WeatherForecastItem data={props.data} />
      </div>
    </div>
  );
}
