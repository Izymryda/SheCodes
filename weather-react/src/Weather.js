import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  let apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
  let url_city = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat={position.coords.latitude}&lon={position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url_city).then(handleResponse);

  function handleResponse(response) {
    alert(`The ewather in ${props.city} is ${response.data.main.temp}°С`);
  }
  return (
    <div>
      <Puff height="80" width="80" color="#4fa94d" ariaLabel="puff-loading" />
    </div>
  );
}
