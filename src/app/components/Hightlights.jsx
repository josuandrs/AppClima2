
import React from "react";
import "./Hightlights.css";

export default function Hightlights(props) {
  return (
    <div id="hight">
      <div className="cards">
        <div className="card">
          <p className="wind-text">Wind status</p>
          <p className="big-num">
            {props?.wind}<span className="UM">Km/h</span>
          </p>
          <div className="wind-info">
            <div className="wind-arrow">
              
            </div>
            <p>WSW</p>
          </div>
        </div>
        <div className="card">
          <p className="humidity-text">Humidity</p>
          <p className="big-num">
            {props?.humidity}<span className="percentage">%</span>
          </p>
          <div className="humidity-info">
            <div className="humidity-bar">
              <div>
                <span>0</span>
                <p>50</p>
                <p>100</p>
              </div>
              <div id="bar">
                <div className="bar-fill" style={{width: `${props?.humidity}%`}}>

                </div>
              </div>
            </div>
            <p>%</p>
          </div>
        </div>
        <div className="card short">
          <p className="visibility-text">Visibility</p>
          <p className="big-num">
            {props?.visibility}<span className="u-distance">Km</span>
          </p>
        </div>
        <div className="card short">
          <p className="air-pressure-text">Air Pressure</p>
          <p className="big-num">
            {props?.pressure}<span className="u-pressure"> mb</span>
          </p>
        </div>
        
      </div>
      <footer>
        <p>created by Josue Solano - devchallenge.io</p>
      </footer>
    </div>
  );
}
