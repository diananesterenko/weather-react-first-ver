import React, { useState, useEffect } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import './App.css'
import SuggestTemp from "./SuggestTemp";
export default function WeatherSuggestIcon(props) {
    const apiKey= `e15a48e7d0cc427c67ddf37bf87b6673`;
    const [icon, setIcon] = useState(null);
    const [temp, setTemp] = useState(null);
    useEffect(() => {
        searchSuggestIcon( );
      });
  const iconBase = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  function searchSuggestIcon( ){
     console.log('searcSuggestIcon');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.value}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => displayIcon(data))
  }
  function displayIcon(response) {
    setIcon(response.weather[0].icon);
    setTemp(Math.round(response.main.temp));
   return icon;
}
  return (
    <span className="suggestInf">
    <SuggestTemp value={temp}/>
    <ReactAnimatedWeather
      icon={iconBase[icon]}
      color="rgb(41, 40, 40)"
      size={props.size}
      animate={true}
    />
    </span>
  );
}