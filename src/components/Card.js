import React from "react";
import { useEffect, useState } from "react";

function Card() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherDate] = useState();

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

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dbb39f8627b47c13bb05d2adef1d9da4`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherDate(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      <React.Fragment>
        <div className="container">
          <div className="city">
            <div className="title">
              <h2>{city.name}</h2>
              {city.sys ? <h3>{city.sys.country}</h3> : null}
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
                  {city.main ? <span>{city.main.temp}</span> : null}
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
                  // onChange={handelCityChange}
                  value={city}
                  placeholder="Search any city"
                />
                <div className="img-box">
                  <img src="https://images.avishkaar.cc/workflow/newhp/search-white.png" />
                </div>
              </div>
              <ul>
                <div>
                  <li className="cityHead">
                    <p>,</p>
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
