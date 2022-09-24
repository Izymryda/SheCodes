import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("10d");
  let icon_src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  let apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  function showTemperature(responce) {
    console.log(responce.data);
    setTemperature(Math.round(responce.data.main.temp));
    setHumidity(responce.data.main.humidity);
    setDescription(responce.data.weather[0].description);
    setWind(responce.data.wind.speed);
    setIcon(responce.data.weather[0].icon);
  }

  function updateCity(event) {
    let search = document.querySelector(".search");
    setCity(search.value);
    event.preventDefault();
    showCurrent();
  }
  function showCurrent() {
    let ul = document.querySelector("ul");
    ul.classList.add("show-ul");
  }

  return (
    <div className="Weather">
      <form>
        <input type="search" className="search" placeholder="Enter a city.." />
        <input type="submit" value="Search" onClick={updateCity} />
      </form>
      <br />
      <div class="center">
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon_src} alt="" />
          </li>
        </ul>
      </div>
      <a href="https://github.com/Izymryda/SheCodes/tree/master/w-r-s">
        GitHub
      </a>
    </div>
  );
}
