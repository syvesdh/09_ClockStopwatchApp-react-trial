import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(
    () => JSON.parse(localStorage.getItem("isRunning")) || false
  );
  const [elapsedTime, setElapsedTime] = useState(
    () => parseInt(localStorage.getItem("elapsedTime"), 10) || 0
  );
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem("isRunning", JSON.stringify(isRunning));
    localStorage.setItem("elapsedTime", elapsedTime.toString());
  }, [isRunning, elapsedTime]);

  function startTimer() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setElapsedTime(0);
    setIsRunning(false);
    localStorage.removeItem("elapsedTime");
    localStorage.removeItem("isRunning");
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={startTimer} className="stopwatch-button start-button">
          Start
        </button>
        <button onClick={stopTimer} className="stopwatch-button stop-button">
          Stop
        </button>
        <button onClick={resetTimer} className="stopwatch-button reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
