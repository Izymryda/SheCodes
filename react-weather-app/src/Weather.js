import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      precipitation: 75,
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
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
              <span id="temperature">{weatherData.temperature}</span>
              <span id="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul id="small">
              <li>Precipitation: {weatherData.precipitation}% </li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
    let current = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(current).then(handleResponse);
    return <h1 className="Weather">Loading...</h1>;
  }
}
