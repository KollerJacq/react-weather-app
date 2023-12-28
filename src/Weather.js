import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>{" "}
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 07:48</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#"></img>
          clear
          <div>
            <img src="#"></img>
            15%
            <img src="#"></img>
            72%
          </div>
        </div>
        <div className="col-6">
          <div>6°C</div>
        </div>
      </div>
    </div>
  );
}
