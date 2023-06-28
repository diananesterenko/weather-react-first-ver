import React, { useState, useEffect } from "react";
import './WeatherForecast.css';


import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey= `80c3fc3b3ba1b20439bcc8b51f4d10ed`;
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
     .then(response => response.json())
     .then(data => handleResponse(data))
  return "Loading";
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                  return (
                      <div className="col col2 " id= '#week-forecast' key="index">
                          <WeatherForecastDay value={dailyForecast} />
                      </div>
                  );
              } else {
                  return null;
              }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}