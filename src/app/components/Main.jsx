
import React, { useEffect, useState } from 'react'
import "./Main.css"


export default function Main(props) {
  const [unit, setUnit] = useState(false);

const handleToFahren = () => {
  setUnit(true);

}
const handleToCelcious = () => {
  setUnit(false);
 
}

useEffect(() => {
  console.log(unit);
  props.onData(unit);
}, [unit]);


  return (
    <div id="main">
        <div className="UIM">
          <div className={`celcious ${!unit ? "active" : "no-active"}`} onClick={handleToCelcious}>
            °C
          </div>
          <div className={`fahren ${unit ? "active" : "no-active"}`} onClick={handleToFahren}>
            °F
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <p>{props?.tomorrow}</p>
            <div className="img">
              <img src="/sources/LightRain.png" alt="image" />
            </div>
            <div className="box">
              <p>{props.tempDay1?.[0]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
              <p>{props.tempDay1?.[1]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props?.day2}</p>
            <div className="img">
              <img src="/sources/LightRain.png" alt="image" />
            </div>
            <div className="box">
              <p>{props.tempDay2?.[0]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
              <p>{props.tempDay2?.[1]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
            </div>
          </div>
          <div className="card">
            <p>{props?.day3}</p>
            <div className="img">
              <img src="/sources/Thunderstorm.png" alt="image" />
            </div>
            <div className="box">
              <p>{props.tempDay3?.[0]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
              <p>{props.tempDay3?.[1]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props?.day4}</p>
            <div className="img">
              <img src="/sources/LightCloud.png" alt="image" />
            </div>
            <div className="box">
              <p>{props.tempDay4?.[0]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
              <p>{props.tempDay4?.[1]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
            </div>
          </div>
          <div className="card">
          <p>{props?.day5}</p>
            <div className="img">
              <img src="/sources/HeavyRain.png" alt="image" />
            </div>
            <div className="box">
              <p>{props.tempDay5?.[0]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
              <p>{props.tempDay5?.[1]}<span>{`${unit ? "°F" : "°C"}`}</span></p>
            </div>
          </div>
        </div>
    </div> 
  )
}
