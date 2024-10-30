import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const CounterApplication = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.header}>Counter App</h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section style={styles.countdisplay}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: 30 }}>
              Your count starts now
            </p>
            <h1
              style={{
                // textAlign: "center",
                color: "#000000",
                fontSize: 80,
              }}
            >
              {count}
            </h1>
          </div>
        </section>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            width: "400px",
            marginTop: "30px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              height: "35px",

              borderRadius: "6px",
              backgroundColor: "#81c784",
            }}
            onClick={handleIncrement}
          >
            <FontAwesomeIcon icon={faArrowUp} /> Increment
          </button>
          <button
            style={{
              height: "35px",
              borderRadius: "6px",
              backgroundColor: " #e57373",
            }}
            onClick={handleDecrement}
          >
            <FontAwesomeIcon icon={faArrowDown} /> Decrement
          </button>
          <button
            style={{
              height: "35px",
              borderRadius: "6px",
              backgroundColor: "#64b5f6",
            }}
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faSyncAlt} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default CounterApplication;
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#37474f",
    textAlign: "center",
  },
  countdisplay: {
    width: "300px",
    height: "300px",
    // backgroundColor: "gray",
    // backgroundColor: "linear-gradient(to bottom, #ADD8E6, #FFFFFF)",
    background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",

    borderRadius: "20px",
    flexDirection: "column",
    display: "flex",

    justifyContent: "center",
  },
};
