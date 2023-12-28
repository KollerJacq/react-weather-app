import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      precipitation: response.data.weather[0].pop,
      description: response.data.weather[0].description,
      date: "Wednesday, 07:48",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>{" "}
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="header">
          <h1>{weatherData.city}</h1>
          <div className="date">{weatherData.date}</div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="#" alt=""></img>
            <span className="description">{weatherData.description}</span>
            <div>
              <span className="precipitation">
                <img src="#" alt=""></img>
                {weatherData.precipitation}%
              </span>{" "}
              <span className="wind">
                <img src="#" alt=""></img>
                {Math.round(weatherData.wind)}km/h
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="temperature">
              {Math.round(weatherData.temperature)}°C
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
