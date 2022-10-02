import React from "react";

export default function WeatherIcon(props) {
  return <img id="current-weather-img" src={props.code} alt={props.alt} />;
}
