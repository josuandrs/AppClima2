
import React from "react";
import "./Head.css";
import { useState } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";


export default function Head(props) {
  const [navbar, setNavbar] = useState(false);
  const [hidden, setHidden] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
    setHidden(!hidden);
  }


  return (
    <>
      {navbar ? (
        <nav>
          <div onClick={handleNavbar} id="buttonX">X</div>
          <div className="search">
            <div className="search-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input type="text" placeholder="search location" />
            </div>
            <button id="search-button">Search</button>
          </div>
          <div id="cities">
            <div id="cities-list">
              <a href="#" className="p-box">
                <p>London</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
              <a href="#" className="p-box">
                <p>Barcelona</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
              <a href="#" className="p-box">
                <p>Long Beach</p>
                <img src="/sources/arrow.png" alt="arrow" />
              </a>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
      <div id="head" className={hidden ? "hidden" : ""}>
        <div className="buttons">
          <button onClick={handleNavbar}>Search for places</button>
          <button className="current-location">
            <img src="sources/current-location-regular-24.png" alt="icon" />
          </button>
        </div>
        <div className="img-box">
          <div className="img">
            <img src="/sources/LightRain.png" alt="main-logo" />
          </div>
        </div>
        <div className="text">
          <h1 className="temp">
            {props.temp}<span id="celcious">{`${props.temp > 40 ? "°F" : "°C"}`}</span>
          </h1>
          <h2 className="descri">{props.des}</h2>
          <div className="date">Today - {props.date[0]} {props.date[1]} {props.date[2]}</div>
          <div className="city">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </span>
            <p className="city-text">Lima</p>
          </div>
        </div>
      </div>
    </>
  );
}
