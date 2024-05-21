import React from "react";

function Data() {
  const api = [
    {
      coord: {
        lon: 70.0722,
        lat: 22.4645,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "03d",
        },
      ],
      base: "stations",
      main: {
        temp: 28.48,
        feels_like: 34.09,
        temp_min: 28.48,
        temp_max: 28.48,
        pressure: 1005,
        humidity: 84,
        sea_level: 1005,
        grnd_level: 1002,
      },
      visibility: 10000,
      wind: {
        speed: 5.15,
        deg: 271,
        gust: 8.09,
      },
      clouds: {
        all: 0,
      },
      dt: 1716231736,
      sys: {
        country: "IN",
        sunrise: 1716251851,
        sunset: 1716299725,
      },
      timezone: 19800,
      id: 1269317,
      name: "Jamnagar",
      cod: 200,
    },
  ];

  return (
    <div className="forecast">
      <div className="forecast-icon"></div>
      <div className="today-weather">
        <h3>
          <img
            className="tempweather"
            src={`https://openweathermap.org/img/wn/${api[0].weather[0].icon}.png`}
            alt="Icon Image"
          />
        </h3>
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
                {api[0].name} , {api[0].sys.country}
              </p>
              <img className="temp" />
            </li>
            <li>
              Temperature <span className="temp">{api[0].main.temp}°C</span>
            </li>
            <li>
              Humidity <span className="temp">{api[0].main.humidity}%</span>
            </li>
            <li>
              Visibility <span className="temp">{api[0].visibility} mi</span>
            </li>
            <li>
              Wind Speed <span className="temp">{api[0].wind.speed} Km/h</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Data;
