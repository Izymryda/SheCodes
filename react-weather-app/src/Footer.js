import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a
        href="https://enchanting-mooncake-3056db.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tania Slotvinska
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/Izymryda/SheCodes/tree/master/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}
