//import "./styles.css";

//#region functions
function startPage() {
  celsiusLink.classList.add("bold");
  currentDayLb.innerHTML = `${dayOfWeek[day]}`;
  if (minuts < 10) {
    currentTimeLb.innerHTML = `${hours}:0${minuts}`;
  } else {
    currentTimeLb.innerHTML = `${hours}:${minuts}`;
  }
  kyivClick();
}
function fromCelsiusToFahrenheit(temp) {
  return Math.round(temp * 1.8 + 32);
}
function fromFahrenheitToCelsius(temp) {
  return Math.round((temp - 32) / 1.8);
}
function celsiusLinkActive() {
  if (!celsiusIsCurrent) {
    celsiusLink.classList.add("bold");
    fahrenheitLink.classList.remove("bold");
    currentTemp.innerHTML =
      "" + fromFahrenheitToCelsius(currentTemp.textContent);
    celsiusIsCurrent = true;
  }
}
function fahrenheitLinkActive() {
  if (celsiusIsCurrent) {
    fahrenheitLink.classList.add("bold");
    celsiusLink.classList.remove("bold");
    currentTemp.innerHTML =
      "" + fromCelsiusToFahrenheit(currentTemp.textContent);
    celsiusIsCurrent = false;
  }
}
function suarchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text");
  city.value = city.value.trim();
  if (city.value !== "") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    city.value = "";
  }
}
function londonClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${londonLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function kyivClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${kyivLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function lisbonClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${lisbonLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function dubaiClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${dubaiLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function parisClick() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${parisLink.textContent}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function currentClick() {
  navigator.geolocation.getCurrentPosition(showPositionWeather);
}
function showPositionWeather(position) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
function showTemp(request) {
  console.log(request);
  currentCity.innerHTML = request.data.name;
  currentTemp.innerHTML = Math.round(request.data.main.temp);
  currentSky.innerHTML = request.data.weather[0].description;
  humidValue.innerHTML = request.data.main.humidity;
  windValue.innerHTML = Math.round(request.data.wind.speed * 3.6);
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${request.data.weather[0].icon}@2x.png`
  );
  let url_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${request.data.coord.lat}&lon=${request.data.coord.lon}&appid=${apiKey}&exclude=current,hourly&units=metric`;
  axios.get(url_2).then(showForecast);
}
function showForecast(request) {
  for (let key in cardTitle) {
    cardTitle[key].innerHTML = formatDay(request.data.daily[key].dt);
  }
  for (let key in cardImg) {
    cardImg[key].setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${request.data.daily[key].weather[0].icon}@2x.png`
    );
  }
  for (let key in dayTemp) {
    dayTemp[key].innerHTML = Math.round(request.data.daily[key].temp.day);
  }
  for (let key in nightTemp) {
    nightTemp[key].innerHTML = Math.round(request.data.daily[key].temp.night);
  }
}
function formatDay(timeinseconds) {
  let date = new Date(timeinseconds * 1000);
  let day = dayOfWeek[date.getDay()];
  return day;
}
//#endregion
//#region lets
let apiKey = "3604a3b2990de7c5ad72879ebff3eb17";
let celsiusIsCurrent = true;
let celsiusLink = document.querySelector("#celsius-link");
let fahrenheitLink = document.querySelector("#fahrenheit-link");
let currentDayLb = document.querySelector("#current-day");
let currentTimeLb = document.querySelector("#current-time");
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minuts = now.getMinutes();
let dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let searchForm = document.querySelector("#search-city-form");
let currentCity = document.querySelector("#current-city-name");
let londonLink = document.querySelector("#london");
let kyivLink = document.querySelector("#kyiv");
let lisbonLink = document.querySelector("#lisbon");
let dubaiLink = document.querySelector("#dubai");
let parisLink = document.querySelector("#paris");
let currentForm = document.querySelector("#search-current");
let currentTemp = document.querySelector("#current-temperature");
let currentSky = document.querySelector("#current-sky");
let humidValue = document.querySelector("#humid-value");
let windValue = document.querySelector("#wind-value");
let icon = document.querySelector("#icon");
let cardTitle = [
  document.querySelector("#first-title"),
  document.querySelector("#second-title"),
  document.querySelector("#third-title"),
  document.querySelector("#fourth-title"),
  document.querySelector("#fifth-title"),
];
let cardImg = [
  document.querySelector("#first-img"),
  document.querySelector("#second-img"),
  document.querySelector("#third-img"),
  document.querySelector("#fourth-img"),
  document.querySelector("#fifth-img"),
];
let dayTemp = [
  document.querySelector("#day-temt-first"),
  document.querySelector("#day-temt-second"),
  document.querySelector("#day-temt-third"),
  document.querySelector("#day-temt-fourth"),
  document.querySelector("#day-temt-fifth"),
];
let nightTemp = [
  document.querySelector("#night-temp-first"),
  document.querySelector("#night-temp-second"),
  document.querySelector("#night-temp-third"),
  document.querySelector("#night-temp-fourth"),
  document.querySelector("#night-temp-fifth"),
];
//#endregion
startPage();
searchForm.addEventListener("submit", suarchCity);
celsiusLink.addEventListener("click", celsiusLinkActive);
fahrenheitLink.addEventListener("click", fahrenheitLinkActive);
londonLink.addEventListener("click", londonClick);
kyivLink.addEventListener("click", kyivClick);
lisbonLink.addEventListener("click", lisbonClick);
dubaiLink.addEventListener("click", dubaiClick);
parisLink.addEventListener("click", parisClick);
currentForm.addEventListener("click", currentClick);
