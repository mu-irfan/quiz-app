/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Timer = ({ dispatch, timerStarted }) => {
  const [time, setTime] = useState(300);

  if (time <= 0) {
    dispatch({ type: "finished" });
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (timerStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerStarted]);
  return <Button>{formatTime(time)}</Button>;
};

export default Timer;
