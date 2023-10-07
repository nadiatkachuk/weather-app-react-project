import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <footer>
        <a href="https://github.com/nadiatkachuk/weather-app-react-project">
          Coded by Nadiia Tkachuk
        </a>
      </footer>
    </div>
  );
}

export default App;
