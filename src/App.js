import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <body>
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
        <br />
        <footer>
          <a href="https://github.com/nadiatkachuk/weather-app-react-project">
            Open source code
          </a>{" "}
          by Nadiia Tkachuk
        </footer>
      </body>
    </div>
  );
}

export default App;
