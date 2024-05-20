import "./App.css";
import Data from "./data";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const get = new Date();
      setTime(`${get.getHours()} : ${get.getMinutes()} : ${get.getSeconds()}`);
      setDate(`${get.getFullYear()} - ${get.getMonth() + 1} - ${get.getDate()}`)
    }
    updateClock();
    const time = setInterval(updateClock, 1000);
    return () =>  clearInterval(time);
  });

  const api = [
{
  "coord": {
    "lon": 70.0722,
    "lat": 22.4645
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 28.48,
    "feels_like": 34.09,
    "temp_min": 28.48,
    "temp_max": 28.48,
    "pressure": 1005,
    "humidity": 84,
    "sea_level": 1005,
    "grnd_level": 1002
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.15,
    "deg": 271,
    "gust": 8.09
  },
  "clouds": {
    "all": 0
  },
  "dt": 1716231736,
  "sys": {
    "country": "IN",
    "sunrise": 1716251851,
    "sunset": 1716299725
  },
  "timezone": 19800,
  "id": 1269317,
  "name": "Jamnagar",
  "cod": 200
}
]

  return (
    <>
      <React.Fragment>
        <div className="container">
          <div className="city">
            <div className="title">
              <h2>{api[0].name}</h2>
              <h3>{api[0].sys.country}</h3>
            </div>
            <div className="mb-icon">
              <p>In</p>
            </div>
            <div className="date-time">
              <div className="dmy">
                <div id="txt"></div>
                <div className="current-time">{time}</div>
                <div className="current-date">{date}</div>
              </div>
              <div className="temperature">
                <p>
                  {api[0].main.temp.toFixed()}°<span>C</span>
                </p>
              </div>
            </div>
          </div>
          <Data />
        </div>
      </React.Fragment>
    </>
  );
}

export default App;
