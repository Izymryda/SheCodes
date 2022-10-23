import React, { useState } from "react";
import axios from "axios";
import WeatherForecastItem from "./WeatherForecastItem";

export default function WeatherForecast(props) {
  const [weatherForecastData, setWeatherForecastData] = useState({
    ready: false,
  });

  function handleForecastResponse(response) {
    if (props.data.click) {
      console.log(response.data);
      setWeatherForecastData({
        daily: response.data,
        ready: true,
      });
    }
  }

  function searchForecast() {
    const apiKey = "7743fa1dfce9o52176021d90t4ddf3b3";
    let current = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
    axios.get(current).then(handleForecastResponse);
  }

  if (weatherForecastData.ready) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-3">
          <WeatherForecastItem data={weatherForecastData.daily.daily[0]} />
          <WeatherForecastItem data={weatherForecastData.daily.daily[1]} />
          <WeatherForecastItem data={weatherForecastData.daily.daily[2]} />
          <WeatherForecastItem data={weatherForecastData.daily.daily[3]} />
          <WeatherForecastItem data={weatherForecastData.daily.daily[4]} />
        </div>
      </div>
    );
  } else {
    searchForecast();
    return <span className="Weather">Loading...</span>;
  }
}
