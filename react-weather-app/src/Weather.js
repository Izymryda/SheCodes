import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      precipitation: 75,
      humidity: response.data.main.humidity,
    });
    setReady(true);
  }

  if (ready) {
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
          <li>Wednesday 13:00</li>
          <li>{weatherData.description}</li>
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
    let city = "Lisbon";
    let current = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(current).then(handleResponse);
    return <h1 className="Weather">Loading...</h1>;
  }
}
