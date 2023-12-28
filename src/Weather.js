import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./formattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
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
          <div className="date">
            <FormattedDate date={weatherData.date} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src="#" alt=""></img>
            <span className="description">{weatherData.description}</span>
            <div>
              <span className="humidity">
                <img src="#" alt=""></img>
                {weatherData.humidity}%
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
