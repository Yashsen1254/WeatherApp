import React from 'react'

function Data() {
  return (
      <div className="forecast">
      <div className="forecast-icon">
      </div>
      <div className="today-weather">
        <h3>weather</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
          />
          <div className="img-box">
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
            />
          </div>
        </div>
        <ul>
            <div>
              <li className="cityHead">
                <p>
                  Name,Counter
                </p>
                <img
                  className="temp"
                />
              </li>
              <li>
                Temperature
                <span className="temp">
                </span>
              </li>
              <li>
                Humidity
                <span className="temp">
                </span>
              </li>
              <li>
                Visibility
                <span className="temp">
                </span>
              </li>
              <li>
                Wind Speed
                <span className="temp">
                </span>
              </li>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Data
