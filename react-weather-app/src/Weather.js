import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(prop) {
  let [city, setCity] = useState(prop.defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
    click: false,
  });

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      lat: response.data.coordinates.latitude,
      lon: response.data.coordinates.longitude,
      ready: true,
      click: true,
    });
  }

  function search() {
    const apiKey = "7743fa1dfce9o52176021d90t4ddf3b3";
    let current = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(current).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1 className="Weather">Loading...</h1>;
  }
}
