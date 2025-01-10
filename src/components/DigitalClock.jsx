import React, { useEffect, useState } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  //Run this everytime this component is mounted (useEffect)
  useEffect(() => {
    //Every 1000ms do this (setInterval)
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //when this component unmounts do the function in the return
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const maridiem = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; //if hours % 12 is 0 then this will return the value after ||
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${maridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
