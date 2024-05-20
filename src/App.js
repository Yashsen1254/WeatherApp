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
      setDate(`${get.getFullYear()}-${get.getMonth() + 1}-${get.getDate()}`);
    };

    updateClock();
    const time = setInterval(updateClock, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <>
      <React.Fragment>
        <div className="container">
          <div className="city">
            <div className="title">
              <h2>city</h2>
              <h3>counter</h3>
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
                  temperature°<span>C</span>
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
