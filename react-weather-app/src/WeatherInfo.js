import React from "react";

import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              id="current-weather-img"
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="Partly cloud"
              className="float-left"
            />
            <span id="temperature">{props.data.temperature}</span>
            <span id="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul id="small">
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
