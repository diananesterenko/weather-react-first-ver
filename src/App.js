import './App.css'
import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import Footer from './Footer';
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherSuggestIcon from "./WeatherSuggestIcon";


import React, { useState } from "react";

export default function App() {
  const apiKey= `e15a48e7d0cc427c67ddf37bf87b6673`;
  let defaultCity = "Paris";
  const [city, setCity] = useState(defaultCity);
  const [weatherDate, setWeatherDate] = useState({ ready: false });

    function ConvertTime(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    var time = hour + ":" + min;
    return time;
    }

     function displayWeather(response) {
      console.log(response.visibility);
      setWeatherDate({
        cityVal: response.name,
        country: response.sys.country,
        dateElem: `<br><hr> ${ConvertTime(response.dt*1000)}`,
        degrees: Math.round(response.main.temp),
        wind: `${Math.round(response.wind.speed)} km/h`,
        humidity: `${response.main.humidity} %`,
        description: response.weather[0].description,
        lowTemp: Math.round(response.main.temp_min),
        highTemp: Math.round(response.main.temp_max),
        icon: response.weather[0].icon,
        sunrise: ConvertTime(Math.round(response.sys.sunrise)),
        sunset: ConvertTime(Math.round(response.sys.sunset)),
        feels:`${Math.round(response.main.feels_like)}°C`,
        coord: response.coord,
        visibility: response.visibility,
        pressure: response.main.pressure,
        date: new Date(response.dt * 1000),
        gust: response.wind.gust,
        deg: response.wind.deg,
        ready: true,
        cloud: response.clouds.all,
      });
    }
  

    function handleSubmit(event) {
      event.preventDefault();
      
      searchCity();
    }
    

    function searchLocation(position){
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
      
    }

    function searchCity(){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
    }
 

    function handleCityChange(event) {
      setCity(event.target.value);
    }
    function handleSuggCityChange(event) {
      setCity(event.target.value);
      searchSuggestCity(city);
    }
    function displayCurrentWeather(){
      console.log('current');
      navigator.geolocation.getCurrentPosition(searchLocation);
    }
    function searchSuggestCity( citys){
     
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&units=metric&appid=${apiKey}`);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
    }
    

  if (weatherDate.ready) {
  return (
    <article>
      <h1>Weather Forecast</h1>
        <div className='rowSuggest'>
                  <div className='col-2 suggestSubmit'>
                      <div className='row'>
                        <input type="" className=" suggestInput col-md-8"  value="Kyiv" onClick={handleSuggCityChange}/> 
                        <WeatherSuggestIcon
                        
                           classNameName="iconmain2 col-5"
                           id='weather-icon'
                           value={'kyiv'}
                           size={25}
                           size2={15}
                        />
                     </div>
                 </div>
                 <div className='col-2 suggestSubmit'>
                      <div className='row'>
                        <input type="" className=" suggestInput col-md-8"  value="London" onClick={handleSuggCityChange}/> 
                        <WeatherSuggestIcon
                        
                           classNameName="iconmain2 col-5"
                           id='weather-icon'
                           value={'London'}
                           size={25}
                           size2={15}
                        />
                     </div>
                 </div>
                 <div className='col-2 suggestSubmit'>
                      <div className='row'>
                        <input type="" className=" suggestInput col-md-8"  value="Stockholm" onClick={handleSuggCityChange}/> 
                        <WeatherSuggestIcon
                        
                           classNameName="iconmain2 col-5"
                           id='weather-icon'
                           value={'Stockholm'}
                           size={25}
                           size2={15}
                        />
                     </div>
                 </div>
                 <div className='col-2 suggestSubmit paris'>
                      <div className='row'>
                        <input type="" className=" suggestInput col-md-8 "  value="Paris" onClick={handleSuggCityChange}/> 
                        <WeatherSuggestIcon
                        
                           classNameName="iconmain2 col-5"
                           id='weather-icon'
                           value={'Paris'}
                           size={25}
                           size2={15}
                        />
                     </div>
                 </div>
                 <div className='col-2 suggestSubmit madrid'>
                      <div className='row'>
                        <input type="" className=" suggestInput col-md-8 "  value="Madrid" onClick={handleSuggCityChange}/> 
                        <WeatherSuggestIcon
                        
                           classNameName="iconmain2 col-5"
                           id='weather-icon'
                           value={'Madrid'}
                           size={25}
                           size2={15}
                        />
                     </div>
                 </div>

                  
          
              
          </div>
      <div className="weather-app">
        <br />
        
        <div className="content">
        
          <form onSubmit={handleSubmit} className="form1" id="forminput">
                <div className="row">
                  <div className="col-6"><input id="search" className="search" onChange={handleCityChange} type="search" placeholder="Search" /></div>
                  <div className="col-1"></div>
                  <div className="col-2"> <input type="submit"  className="submit" value="" /></div>
                  <div className="col-2"><input type="" className="submit" id="current" value="Current" onClick={displayCurrentWeather}/></div>
                </div>
          </form>
          <div className='daterow'>
            <div className='daterowinf'>
          <Citydate value={weatherDate} />
          </div>
          <div className=' markersComponent'>
          <Weathermarkers value={weatherDate} />
          </div>
          </div>
          <hr />
          <WeatherForecast coords={weatherDate.coord} />
        </div>
      </div>
      <Footer/>
    </article>
  );
 } else {
  searchCity();
  return "Loading...";
}
}