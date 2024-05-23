import React, { useEffect,  useState } from "react";

function Forecast({setCity}) {

  const handelCityChange =(e)=> {
    setCity(e.target.value);
  }
  return (
    <div className="forecast">
      <div className="forecast-icon"></div>
      <div className="today-weather">
        <h3>
          <img
            className="tempweather"
            // src={`https://openweathermap.org/img/wn/${api[0].weather[0].icon}.png`}
            alt="Icon Image"
          />
        </h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            onChange={handelCityChange}
            placeholder="Search any city"
            defaultValue="Delhi"
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
                 ,
              </p>
              <img className="temp" />
            </li>
            <li>
              Temperature <span className="temp">°C</span>
            </li>
            <li>
              Humidity <span className="temp">%</span>
            </li>
            <li>
              Visibility <span className="temp"> mi</span>
            </li>
            <li>
              Wind Speed <span className="temp">Km/h</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Forecast;
