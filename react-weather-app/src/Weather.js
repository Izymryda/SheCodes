import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(prop) {
  let [city, setCity] = useState(prop.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function search() {
    const apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
    let current = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(current).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control w-100"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1 className="Weather">Loading...</h1>;
  }
}
