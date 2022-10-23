import React from "react";
import WeatherForecastItem from "./WeatherForecastItem";

export default function WeatherForecast(props) {
  if (props.data.ready) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-3">
          <WeatherForecastItem data={props.data.daily.daily[0]} />
          <WeatherForecastItem data={props.data.daily.daily[1]} />
          <WeatherForecastItem data={props.data.daily.daily[2]} />
          <WeatherForecastItem data={props.data.daily.daily[3]} />
          <WeatherForecastItem data={props.data.daily.daily[4]} />
        </div>
      </div>
    );
  } else {
    return <span className="Weather">Loading...</span>;
  }
}
