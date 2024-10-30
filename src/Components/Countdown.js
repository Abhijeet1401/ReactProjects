import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const endDate = new Date("01/01/2025");
  const [currentDate, setCurrentDate] = useState(new Date());

  const [showdiv, setShowDiv] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());

      if (currentDate === endDate) {
        setShowDiv(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, currentDate]);

  let totalSeconds = (endDate - currentDate) / 1000;

  let days = Math.floor(totalSeconds / 3600 / 24);

  let hours = Math.floor((totalSeconds / 3600) % 24);

  let minute = Math.floor((totalSeconds / 60) % 60);

  let seconds = Math.floor(totalSeconds % 60);

  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Days{days} Days:</h1>
        <h1>{hours} Hours:</h1>
        <h1>{minute}Min:</h1>
        <h1>{seconds} Seconds</h1>
      </div>

      {showdiv && <h1>Happy New Year</h1>}
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    background_image: "",
  },
};
export default Countdown;
