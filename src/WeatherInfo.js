import React from "react";
import FormattedDate from "./formattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="header">
        <h1>{props.data.city}</h1>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="#" alt=""></img>
          <span className="description">{props.data.description}</span>
          <div>
            <span className="humidity">
              <img src="#" alt=""></img>
              {props.data.humidity}%
            </span>{" "}
            <span className="wind">
              <img src="#" alt=""></img>
              {Math.round(props.data.wind)}km/h
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="temperature">
            {Math.round(props.data.temperature)}°C
          </div>
        </div>
      </div>
    </div>
  );
}
