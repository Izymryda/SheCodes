import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://enchanting-mooncake-3056db.netlify.app/"
            target="_blank"
          >
            Tania Slotvinska
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Izymryda/SheCodes/tree/master/react-weather-app"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
