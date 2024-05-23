import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dbb39f8627b47c13bb05d2adef1d9da4`;

  useEffect(() => {
    const updateClock = () => {
      const get = new Date();
      setTime(`${get.getHours()} : ${get.getMinutes()} : ${get.getSeconds()}`);
      setDate(
        `${get.getFullYear()} - ${get.getMonth() + 1} - ${get.getDate()}`
      );
    };
    updateClock();
    const time = setInterval(updateClock, 1000);
    return () => clearInterval(time);
  });

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation(' ')
    }
  }

  return (
    <>
      <React.Fragment>
        <div className="container">
          <div className="city">
            <div className="title">
              <h2>{data.name}</h2>
              <h3>In</h3>
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
                  temp
                  <span>°C</span>
                </p>
              </div>
            </div>
          </div>
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
                  onChange={event => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  value={location}
                  placeholder="Search any city"
                />
                <div className="img-box">
                  <img src="https://images.avishkaar.cc/workflow/newhp/search-white.png" />
                </div>
              </div>
              <ul>
                <div>
                  <li className="cityHead">
                    <p>{data.name} , </p>
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
        </div>
      </React.Fragment>
    </>
  );
}

export default Card;
