
import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  
  return (
    <div>
      <nav>
        <div id="buttonX">X</div>
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
    </div>
  );
}
