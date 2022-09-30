import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form action="">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control w-100"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type={"submit"}
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 13:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              id="current-weather-img"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly cloud"
              className="float-left"
            />
            <span id="temperature">6</span>
            <span id="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul id="small">
            <li>Precipitation: 71% </li>
            <li>Humidity: 86% </li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
